import Navbar from "../componenets/Navbar";
import ClassesGrid from "../componenets/ClassesGrid";
import Footer from "../componenets/Footer";
import ChatBot from "../componenets/ChatBot";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";

const Classes = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-primary font-heading text-sm tracking-[0.3em]">{t.classes.tag}</span>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mt-3">{t.classes.title}</h1>
          </motion.div>
        </div>
      </div>
      <ClassesGrid showAll />
      <Footer />
      <ChatBot />
    </div>
  );
};

export default Classes;
