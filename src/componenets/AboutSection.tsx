import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: t.about.stat1, label: t.about.stat1Label },
    { value: t.about.stat2, label: t.about.stat2Label },
    { value: t.about.stat3, label: t.about.stat3Label },
  ];

  return (
    <section id="about" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-heading text-sm tracking-[0.3em]">{t.about.tag}</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-3">{t.about.title}</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.p
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {t.about.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-3 gap-6"
          >
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-6 bg-card rounded-lg border border-border">
                <div className="font-heading text-3xl md:text-4xl font-bold text-primary">{stat.value}</div>
                <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
