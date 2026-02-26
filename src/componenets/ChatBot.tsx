import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  text: string;
  isUser: boolean;
}

const ChatBot = () => {
  const { t, lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: t.chatbot.welcome, isUser: false },
  ]);
  const [input, setInput] = useState("");

  const quickActions = [
    { label: t.chatbot.membershipInfo, response: lang === "ar" ? "لدينا 3 خطط: أساسي (3,000 د.ج)، متميز (5,500 د.ج)، ونخبة (9,000 د.ج). أي خطة تهمك؟" : "We have 3 plans: Basic (3,000 DA), Premium (5,500 DA), and Elite (9,000 DA). Which one interests you?" },
    { label: t.chatbot.classSchedule, response: lang === "ar" ? "حصصنا تشمل: HIIT، يوغا، قوة، ملاكمة، دراجات، وكروس فت. الحصص متاحة يومياً من 6 صباحاً حتى 9 مساءً." : "Our classes include: HIIT, Yoga, Strength, Boxing, Cycling, and CrossFit. Classes run daily from 6 AM to 9 PM." },
    { label: t.chatbot.locationHours, response: lang === "ar" ? "📍 123 شارع الرياضة، الجزائر العاصمة\n🕐 مفتوح يومياً: 6 صباحاً - 10 مساءً" : "📍 123 Fitness Avenue, Algiers\n🕐 Open daily: 6 AM - 10 PM" },
    { label: t.chatbot.contactAdmin, response: lang === "ar" ? "سأقوم بتوصيلك مع الإدارة. يرجى ترك اسمك الكامل ورقم هاتفك وسنتواصل معك قريباً!" : "I'll connect you with our admin. Please leave your full name and phone number and we'll get back to you soon!" },
  ];

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { text: input, isUser: true };
    const botResponse: Message = {
      text: lang === "ar"
        ? "شكراً لرسالتك! سيتواصل معك فريقنا قريباً. يمكنك أيضاً الاتصال بنا على +213 555 123 456"
        : "Thanks for your message! Our team will get back to you soon. You can also reach us at +213 555 123 456",
      isUser: false,
    };
    setMessages((prev) => [...prev, userMsg, botResponse]);
    setInput("");
  };

  const handleQuickAction = (response: string) => {
    setMessages((prev) => [...prev, { text: response, isUser: false }]);
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full gradient-primary flex items-center justify-center shadow-glow animate-pulse-glow transition-transform hover:scale-110 ${isOpen ? "hidden" : ""}`}
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-80 sm:w-96 bg-card border border-border rounded-lg shadow-card overflow-hidden flex flex-col"
            style={{ height: "480px" }}
          >
            {/* Header */}
            <div className="gradient-primary p-4 flex items-center justify-between">
              <h3 className="font-heading text-sm tracking-wider text-primary-foreground">{t.chatbot.title}</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-primary-foreground/80 hover:text-primary-foreground" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.isUser ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-lg text-sm whitespace-pre-line ${
                      msg.isUser
                        ? "gradient-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="px-4 pb-2 flex gap-2 flex-wrap">
              {quickActions.map((action, i) => (
                <button
                  key={i}
                  onClick={() => handleQuickAction(action.response)}
                  className="text-xs px-3 py-1.5 rounded-full border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors"
                >
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 border-t border-border flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder={t.chatbot.placeholder}
                className="flex-1 bg-secondary rounded px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary"
              />
              <button onClick={handleSend} className="gradient-primary p-2 rounded">
                <Send className="w-4 h-4 text-primary-foreground" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
