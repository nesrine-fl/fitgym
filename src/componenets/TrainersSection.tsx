import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import trainer2 from "../assets/download (2).mp4";
import trainer3 from "../assets/Download (12).mp4";
import trainer1 from "../assets/gymVideo.mp4";

const videos = [
  { media: trainer1, type: "video" },
  { media: trainer2, type: "video" },
  { media: trainer3, type: "video" },
  { media: trainer1, type: "video" },
  { media: trainer2, type: "video" },
];

const TrainersSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-primary font-heading text-sm tracking-[0.3em]">
            {t.trainers.tag}
          </span>
          <h2 className="font-heading text-4xl md:text-6xl font-bold mt-3">
            {t.trainers.title}
          </h2>
        </div>

        {/* Sliding Track */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
          >
            {[...videos, ...videos].map((trainer, i) => (
              <div
                key={i}
                className="min-w-[240px] md:min-w-[280px] rounded-xl overflow-hidden shadow-lg"
              >
                {trainer.type === "video" ? (
                  <video
                    src={trainer.media}
                    className="w-full h-48 md:h-56 object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={trainer.media}
                    alt="trainer"
                    className="w-full h-48 md:h-56 object-cover"
                  />
                )}
              </div>
            ))}
          </motion.div>

          {/* Fade edges (optional but pretty) */}
          <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent" />
          <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;