import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import classHiit from "../assets/class-hiit.jpg";
import classYoga from "../assets/class-yoga.jpg";
import classStrength from "../assets/class-strength.jpg";
import classBoxing from "../assets/class-boxing.jpg";
import classCycling from "../assets/class-cycling.jpg";
import classCrossfit from "../assets/class-crossfit.jpg";

export const classesData = [
  { id: 1, name: "HIIT", nameAr: "تمارين عالية الشدة", image: classHiit, schedule: "Mon, Wed, Fri - 7:00 AM", scheduleAr: "الإثنين، الأربعاء، الجمعة - 7:00 ص", desc: "High-intensity interval training to maximize fat burn and endurance.", descAr: "تدريب متقطع عالي الشدة لحرق الدهون وتعزيز التحمل." },
  { id: 2, name: "Yoga", nameAr: "يوغا", image: classYoga, schedule: "Tue, Thu - 6:00 PM", scheduleAr: "الثلاثاء، الخميس - 6:00 م", desc: "Find balance and flexibility through mindful movement and breathing.", descAr: "اعثر على التوازن والمرونة من خلال الحركة الواعية والتنفس." },
  { id: 3, name: "Strength", nameAr: "تمارين القوة", image: classStrength, schedule: "Mon-Fri - 5:00 PM", scheduleAr: "الإثنين-الجمعة - 5:00 م", desc: "Build muscle and power with progressive resistance training.", descAr: "ابنِ العضلات والقوة مع تدريب المقاومة التدريجي." },
  { id: 4, name: "Boxing", nameAr: "ملاكمة", image: classBoxing, schedule: "Mon, Wed - 8:00 PM", scheduleAr: "الإثنين، الأربعاء - 8:00 م", desc: "Learn striking techniques while getting an incredible cardio workout.", descAr: "تعلم تقنيات الضرب مع تمرين قلبي مذهل." },
  { id: 5, name: "Cycling", nameAr: "دراجات", image: classCycling, schedule: "Daily - 6:00 AM", scheduleAr: "يومياً - 6:00 ص", desc: "Indoor cycling sessions with energizing music and expert coaching.", descAr: "جلسات دراجات داخلية مع موسيقى محفزة وتدريب متخصص." },
  { id: 6, name: "CrossFit", nameAr: "كروس فت", image: classCrossfit, schedule: "Tue, Thu, Sat - 7:00 AM", scheduleAr: "الثلاثاء، الخميس، السبت - 7:00 ص", desc: "Functional movements at high intensity for total body conditioning.", descAr: "حركات وظيفية بشدة عالية لتكييف الجسم بالكامل." },
];

interface ClassesGridProps {
  showAll?: boolean;
}

const ClassesGrid = ({ showAll = false }: ClassesGridProps) => {
  const { t, lang } = useLanguage();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const items = showAll ? classesData : classesData.slice(0, 4);

  return (
    <section className="py-24 bg-secondary/30" ref={ref}>
      <div className="container mx-auto px-4">
        {!showAll && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary font-heading text-sm tracking-[0.3em] uppercase">{t.classes.tag}</span>
            <h2 className="font-heading text-4xl md:text-6xl font-bold mt-3">{t.classes.title}</h2>
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((cls, i) => (
            <motion.div
              key={cls.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={cls.image}
                alt={cls.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-heading text-2xl font-bold">{lang === "ar" ? cls.nameAr : cls.name}</h3>
                <p className="text-muted-foreground text-sm mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {lang === "ar" ? cls.descAr : cls.desc}
                </p>
                <p className="text-primary text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {lang === "ar" ? cls.scheduleAr : cls.schedule}
                </p>
                <button className="mt-3 gradient-primary px-4 py-2 rounded text-sm font-heading tracking-wider text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {t.classes.bookNow}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <Link
              to="/classes"
              className="border border-primary px-8 py-3 rounded font-heading text-sm tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {t.classes.viewAll}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClassesGrid;
