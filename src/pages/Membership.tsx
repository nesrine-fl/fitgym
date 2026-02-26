import Navbar from "../componenets/Navbar";
import PricingSection from "../componenets/PricingSection";
import Footer from "../componenets/Footer";
import ChatBot from "../componenets/ChatBot";
import { useLanguage } from "../i18n/LanguageContext";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../componenets/ui/accordion";

const faqs = [
  { q: "Can I cancel my membership anytime?", qAr: "هل يمكنني إلغاء عضويتي في أي وقت؟", a: "Yes, you can cancel your membership at any time with 30 days notice.", aAr: "نعم، يمكنك إلغاء عضويتك في أي وقت مع إشعار قبل 30 يوماً." },
  { q: "Do you offer personal training?", qAr: "هل تقدمون تدريباً شخصياً؟", a: "Yes! Personal training is included in Premium and Elite plans. Basic members can purchase sessions separately.", aAr: "نعم! التدريب الشخصي متضمن في خطط المتميز والنخبة. يمكن لأعضاء الخطة الأساسية شراء جلسات منفصلة." },
  { q: "What are your opening hours?", qAr: "ما هي ساعات العمل؟", a: "We're open daily from 6:00 AM to 10:00 PM, including weekends and holidays.", aAr: "نحن مفتوحون يومياً من 6:00 صباحاً حتى 10:00 مساءً، بما في ذلك عطلات نهاية الأسبوع والأعياد." },
  { q: "Do you accept Dahabia cards?", qAr: "هل تقبلون بطاقة الذهبية؟", a: "Yes, we accept Dahabia card payments for all membership plans and services.", aAr: "نعم، نقبل الدفع ببطاقة الذهبية لجميع خطط العضوية والخدمات." },
  { q: "Is there a free trial?", qAr: "هل هناك تجربة مجانية؟", a: "Yes! We offer a 15-day free trial. Visit our Contact page or speak with our chatbot to sign up.", aAr: "نعم! نقدم تجربة مجانية لمدة 15 يوم. قم بزيارة صفحة الاتصال أو تحدث مع المساعد الآلي للتسجيل." },
];

const Membership = () => {
  const { t, lang } = useLanguage();
  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="font-heading text-5xl md:text-7xl font-bold">{t.membership.title}</h1>
          </motion.div>
        </div>
      </div>

      <PricingSection fullPage />

      {/* FAQ */}
      <section className="py-24 bg-background" ref={faqRef}>
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={faqInView ? { opacity: 1, y: 0 } : {}}
            className="font-heading text-4xl md:text-5xl font-bold text-center mb-12"
          >
            {t.membership.faq}
          </motion.h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="font-heading text-sm tracking-wider hover:text-primary">
                  {lang === "ar" ? faq.qAr : faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-sm">
                  {lang === "ar" ? faq.aAr : faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Membership;
