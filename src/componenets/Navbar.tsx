import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, toggleLanguage, lang } = useLanguage();
  const location = useLocation();

  const links = [
    { to: "/", label: t.nav.home },
    { to: "/classes", label: t.nav.classes },
    { to: "/membership", label: t.nav.membership },
    { to: "/contact", label: t.nav.contact },
    { to: "/admin", label: t.nav.admin },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <Link to="/" className="font-heading text-2xl md:text-3xl font-bold tracking-wider">
          FIT<span className="text-primary">SAM</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-heading text-sm tracking-widest uppercase transition-colors hover:text-primary ${
                isActive(link.to) ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Globe className="w-4 h-4" />
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <Link
            to="/membership"
            className="gradient-primary px-6 py-2.5 rounded font-heading text-sm tracking-wider text-primary-foreground hover:opacity-90 transition-opacity"
          >
            {t.nav.joinNow}
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-foreground" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`font-heading text-lg tracking-wider uppercase ${
                    isActive(link.to) ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex items-center gap-4 pt-2 border-t border-border">
                <button onClick={toggleLanguage} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Globe className="w-4 h-4" />
                  {lang === "en" ? "عربي" : "EN"}
                </button>
                <Link
                  to="/membership"
                  onClick={() => setIsOpen(false)}
                  className="gradient-primary px-6 py-2.5 rounded font-heading text-sm tracking-wider text-primary-foreground"
                >
                  {t.nav.joinNow}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
