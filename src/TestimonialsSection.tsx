import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "./i18n/LanguageContext";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Youcef M.", nameAr: "يوسف م.", text: "Fitsam changed my life. I've lost 20kg in 6 months with their incredible trainers and supportive community.", textAr: "فتسام غيّر حياتي. خسرت 20 كغ في 6 أشهر مع مدربيهم الرائعين ومجتمعهم الداعم.", rating: 5 },
  { name: "Amina K.", nameAr: "أمينة ك.", text: "The yoga classes here are amazing. The instructors are professional and the atmosphere is so calming.", textAr: "حصص اليوغا هنا مذهلة. المدربون محترفون والأجواء هادئة جداً.", rating: 5 },
  { name: "Riad B.", nameAr: "رياض ب.", text: "Best gym in town! Clean, well-equipped, and the staff are always friendly and helpful.", textAr: "أفضل صالة في المدينة! نظيفة، مجهزة جيداً، والموظفون ودودون ومتعاونون دائماً.", rating: 5 },
];

const TestimonialsSection = () => {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">{t.testimonials.tag}</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-3">{t.testimonials.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors"
            >
              {/* Story-like gradient bar at top */}
              <div className="w-full h-1 gradient-primary rounded-full mb-4" />
              <div className="flex gap-1 mb-3">
                {Array.from({ length: item.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-4">
                "{lang === "ar" ? item.textAr : item.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center font-heading text-sm text-primary-foreground font-bold">
                  {(lang === "ar" ? item.nameAr : item.name).charAt(0)}
                </div>
                <span className="font-heading text-sm">{lang === "ar" ? item.nameAr : item.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
