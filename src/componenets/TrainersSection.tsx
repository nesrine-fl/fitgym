import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Instagram } from "lucide-react";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";

const trainers = [
  { name: "Ahmed Benali", nameAr: "أحمد بن علي", role: "Head Coach", roleAr: "المدرب الرئيسي", image: trainer1, speciality: "Strength & Conditioning", specialityAr: "القوة واللياقة" },
  { name: "Sara Mansouri", nameAr: "سارة منصوري", role: "Yoga Instructor", roleAr: "مدربة يوغا", image: trainer2, speciality: "Yoga & Flexibility", specialityAr: "يوغا ومرونة" },
  { name: "Karim Hadj", nameAr: "كريم حاج", role: "HIIT Specialist", roleAr: "متخصص في التمارين العالية الشدة", image: trainer3, speciality: "HIIT & CrossFit", specialityAr: "تمارين عالية الشدة وكروس فت" },
];

const TrainersSection = () => {
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
          <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">{t.trainers.tag}</span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-3">{t.trainers.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {trainers.map((trainer, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="text-center group"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-2 border-border group-hover:border-primary transition-colors duration-300">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="font-heading text-xl font-bold">{lang === "ar" ? trainer.nameAr : trainer.name}</h3>
              <p className="text-primary text-sm font-heading tracking-wider mt-1">{lang === "ar" ? trainer.roleAr : trainer.role}</p>
              <p className="text-muted-foreground text-sm mt-2">{lang === "ar" ? trainer.specialityAr : trainer.speciality}</p>
              <button className="mt-3 text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5 mx-auto" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;
