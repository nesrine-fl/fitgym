import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import heroImg from "../assets/hero-gym.jpg";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-16 md:pt-0">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img src={heroImg} alt="Fitsam Gym" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4">
          <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] mb-4"
>
  <span className="text-orange-500">
    TRANSFORM
  </span>{" "}
  YOUR BODY. 
</motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-8"
          >
            {t.about.description.slice(0, 80)}...
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              to="/membership"
              className="gradient-primary px-10 py-4 rounded font-heading text-lg tracking-wider text-primary-foreground hover:opacity-90 transition-opacity shadow-glow"
            >
              {t.hero.cta}
            </Link>
            <Link
              to="/contact"
              className="border border-foreground/30 px-10 py-4 rounded font-heading text-lg tracking-wider text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              {t.hero.trial}
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 rounded-full bg-primary" />
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSection;
