import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { translations, type Language } from "./translations";

// This tells TypeScript to use the exact structure of your English translation
type TranslationType = typeof translations.en;

interface LanguageContextType {
  lang: Language;
  t: TranslationType; 
  toggleLanguage: () => void;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>("en");

  const toggleLanguage = useCallback(() => {
    setLang((prev) => {
      if (prev === "en") return "fr";
      if (prev === "fr") return "ar";
      return "en";
    });
  }, []);

  const value = useMemo(() => ({
    lang,
    // Fix: We tell TypeScript "Trust me, this matches the TranslationType"
    t: translations[lang] as TranslationType, 
    toggleLanguage,
    isRTL: lang === "ar",
  }), [lang, toggleLanguage]);

  return (
    <LanguageContext.Provider value={value}>
      <div dir={value.isRTL ? "rtl" : "ltr"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};