import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-card border-t border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="font-heading text-2xl font-bold tracking-wider">
              FIT<span className="text-primary">SAM</span>
            </Link>
            <p className="text-muted-foreground text-sm mt-4 leading-relaxed">{t.footer.description}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-sm tracking-widest mb-4">{t.footer.quickLinks}</h4>
            <div className="flex flex-col gap-2">
              <Link to="/" className="text-muted-foreground text-sm hover:text-primary transition-colors">{t.nav.home}</Link>
              <Link to="/classes" className="text-muted-foreground text-sm hover:text-primary transition-colors">{t.nav.classes}</Link>
              <Link to="/membership" className="text-muted-foreground text-sm hover:text-primary transition-colors">{t.nav.membership}</Link>
              <Link to="/contact" className="text-muted-foreground text-sm hover:text-primary transition-colors">{t.nav.contact}</Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-sm tracking-widest mb-4">{t.footer.contactUs}</h4>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />{t.footer.address}</div>
              <div className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0 text-primary" />{t.footer.phone}</div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0 text-primary" />{t.footer.email}</div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-sm tracking-widest mb-4">{t.footer.followUs}</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/fitsam.gym/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com/fitsam.gym/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <Facebook className="w-5 h-5" />
              
              </a>
              <a href="https://www.tiktok.com/@fitsam00" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground text-sm">
          © {new Date().getFullYear()} Fitsam Gym. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
