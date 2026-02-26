import { useState } from "react";
import Navbar from "../componenets/Navbar";
import Footer from "../componenets/Footer";
import ChatBot from "../componenets/ChatBot";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import { Send, MapPin, Clock, Gift } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    subscription: "basic",
  });

  const [trialForm, setTrialForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent successfully! We'll get back to you soon.");
    setForm({
      name: "",
      email: "",
      phone: "",
      message: "",
      subscription: "basic",
    });
  };

  const handleTrial = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Free trial activated! Check your email for details.");
    setTrialForm({ name: "", email: "", phone: "" });
  };

  const inputClasses =
    "w-full bg-secondary border border-border rounded px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-1 focus:ring-primary transition-colors";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Title */}
      <div className="pt-24 pb-8">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-7xl font-bold"
          >
            {t.contact.title}
          </motion.h1>
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                placeholder={t.contact.name}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClasses}
                required
              />

              <input
                type="email"
                placeholder={t.contact.email}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClasses}
                required
              />

              <input
                type="tel"
                placeholder={t.contact.phone}
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className={inputClasses}
              />

              <select
                value={form.subscription}
                onChange={(e) =>
                  setForm({ ...form, subscription: e.target.value })
                }
                className={inputClasses}
              >
                <option value="basic">Basic - 3,000 DA</option>
                <option value="premium">Premium - 5,500 DA</option>
                <option value="elite">Elite - 9,000 DA</option>
              </select>

              <textarea
                placeholder={t.contact.message}
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className={`${inputClasses} min-h-[120px] resize-none`}
                required
              />

              <button
                type="submit"
                className="w-full gradient-primary py-3 rounded font-heading text-sm tracking-wider text-primary-foreground hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                {t.contact.send}
              </button>
            </motion.form>

            {/* Info Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-8"
            >
              
              {/* Info Cards */}
              <div className="space-y-4">
                <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm font-heading tracking-wider">
                      {t.contact.map}
                    </div>

                    <a
                      href="https://maps.app.goo.gl/AJeSe4ECmLN7SdB77"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary text-sm mt-1 hover:underline block"
                    >
                      View on Google Maps
                    </a>
                  </div>
                </div>

                <div className="bg-card border border-border rounded-lg p-4 flex items-start gap-3">
                  <Clock className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-sm font-heading tracking-wider">
                      Hours
                    </div>
                    <div className="text-muted-foreground text-sm mt-1">
                      Daily: 6:00 AM - 10:00 PM
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="relative rounded-xl overflow-hidden border border-border h-64 shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d204151.67396842908!2d2.9041!3d36.7372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fb26977cb3083%3A0x25c0e35d1e16e7ce!2sAlgiers!5e0!3m2!1sen!2sdz!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Fitsam Gym Location"
                ></iframe>

                <div className="absolute top-3 left-3 bg-background px-3 py-1 rounded text-sm font-heading shadow">
                  FITSAM Gym
                </div>
              </div>

              {/* Free Trial */}
              <div className="bg-card border border-primary/30 rounded-lg p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Gift className="w-5 h-5 text-primary" />
                  <h3 className="font-heading text-lg">
                    {t.contact.trial}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  {t.contact.trialDesc}
                </p>

                <form onSubmit={handleTrial} className="space-y-3">
                  <input
                    type="text"
                    placeholder={t.contact.name}
                    value={trialForm.name}
                    onChange={(e) =>
                      setTrialForm({ ...trialForm, name: e.target.value })
                    }
                    className={inputClasses}
                    required
                  />

                  <input
                    type="email"
                    placeholder={t.contact.email}
                    value={trialForm.email}
                    onChange={(e) =>
                      setTrialForm({ ...trialForm, email: e.target.value })
                    }
                    className={inputClasses}
                    required
                  />

                  <input
                    type="tel"
                    placeholder={t.contact.phone}
                    value={trialForm.phone}
                    onChange={(e) =>
                      setTrialForm({ ...trialForm, phone: e.target.value })
                    }
                    className={inputClasses}
                    required
                  />

                  <button
                    type="submit"
                    className="w-full border border-primary py-2.5 rounded font-heading text-sm tracking-wider text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {t.contact.startTrial}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ChatBot />
    </div>
  );
};

export default Contact;