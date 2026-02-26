import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "./i18n/LanguageContext";
import { Check } from "lucide-react";

const plans = [
  {
    key: "basic" as const,
    price: "3,000 DA",
    features: [
      { en: "Access to gym equipment", ar: "الوصول إلى معدات الصالة" },
      { en: "Locker room access", ar: "الوصول إلى غرفة تبديل الملابس" },
      { en: "2 group classes/week", ar: "حصتان جماعيتان/أسبوع" },
      { en: "Basic fitness assessment", ar: "تقييم لياقة أساسي" },
    ],
    popular: false,
  },
  {
    key: "premium" as const,
    price: "5,500 DA",
    features: [
      { en: "Unlimited gym access", ar: "وصول غير محدود للصالة" },
      { en: "All group classes", ar: "جميع الحصص الجماعية" },
      { en: "Personal training (2x/month)", ar: "تدريب شخصي (مرتين/شهر)" },
      { en: "Nutrition consultation", ar: "استشارة غذائية" },
      { en: "Sauna & recovery zone", ar: "ساونا ومنطقة التعافي" },
    ],
    popular: true,
  },
  {
    key: "elite" as const,
    price: "9,000 DA",
    features: [
      { en: "Everything in Premium", ar: "كل ما في المتميز" },
      { en: "Unlimited personal training", ar: "تدريب شخصي غير محدود" },
      { en: "Monthly body composition scan", ar: "فحص تكوين الجسم الشهري" },
      { en: "Priority class booking", ar: "أولوية حجز الحصص" },
      { en: "Guest passes (2/month)", ar: "تذاكر ضيوف (2/شهر)" },
      { en: "VIP locker", ar: "خزانة VIP" },
    ],
    popular: false,
  },
];

interface PricingSectionProps {
  fullPage?: boolean;
}

const PricingSection = ({ fullPage = false }: PricingSectionProps) => {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`py-24 ${fullPage ? "bg-background" : "bg-secondary/30"}`} ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">{t.pricing.tag}</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-3">{t.pricing.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.key}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative rounded-lg p-8 border transition-all duration-300 hover:-translate-y-2 ${
                plan.popular
                  ? "bg-card border-primary shadow-glow"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-primary px-4 py-1 rounded-full text-xs font-heading tracking-wider text-primary-foreground">
                  {t.pricing.popular}
                </div>
              )}
              <h3 className="font-heading text-2xl font-bold">{t.pricing[plan.key]}</h3>
              <div className="mt-4 mb-6">
                <span className="font-heading text-4xl font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{t.pricing.monthly}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-secondary-foreground">
                    <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    {lang === "ar" ? f.ar : f.en}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center py-3 rounded font-heading text-sm tracking-wider transition-all ${
                  plan.popular
                    ? "gradient-primary text-primary-foreground hover:opacity-90"
                    : "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                }`}
              >
                {t.pricing.choosePlan}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
