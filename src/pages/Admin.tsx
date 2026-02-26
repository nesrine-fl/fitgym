import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { motion } from "framer-motion";
import { LayoutDashboard, MessageSquare, Dumbbell, CreditCard, FileText, Bell, Users, Mail, TrendingUp } from "lucide-react";
import Navbar from "../componenets/Navbar";

const mockMessages = [
  { id: 1, name: "Ahmed K.", email: "ahmed@email.com", phone: "0555123456", type: "Premium", message: "I'd like to learn more about personal training.", date: "2026-02-10" },
  { id: 2, name: "Sara M.", email: "sara@email.com", phone: "0666789012", type: "Basic", message: "Can I upgrade my plan?", date: "2026-02-09" },
  { id: 3, name: "Karim B.", email: "karim@email.com", phone: "0777345678", type: "Elite", message: "What's the guest pass policy?", date: "2026-02-08" },
];

const mockTrials = [
  { id: 1, name: "Nadia L.", email: "nadia@email.com", phone: "0555111222", startDate: "2026-02-01", endDate: "2026-02-16", reminded: false },
  { id: 2, name: "Omar H.", email: "omar@email.com", phone: "0666333444", startDate: "2026-02-05", endDate: "2026-02-20", reminded: true },
];

const Admin = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: t.admin.dashboard, icon: LayoutDashboard },
    { id: "messages", label: t.admin.messages, icon: MessageSquare },
    { id: "classes", label: t.admin.manageClasses, icon: Dumbbell },
    { id: "plans", label: t.admin.managePlans, icon: CreditCard },
    { id: "submissions", label: t.admin.submissions, icon: FileText },
    { id: "reminders", label: t.admin.reminders, icon: Bell },
  ];

  const stats = [
    { label: t.admin.totalMembers, value: "523", icon: Users, change: "+12%" },
    { label: t.admin.newMessages, value: "8", icon: Mail, change: "+3" },
    { label: t.admin.activeTrials, value: "15", icon: Bell, change: "+5" },
    { label: t.admin.revenue, value: "2.4M DA", icon: TrendingUp, change: "+18%" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Admin sidebar + content */}
      <div className="flex min-h-screen pt-16 md:pt-20">
        {/* Sidebar */}
        <aside className="w-64 bg-card border-r border-border p-6 hidden md:block">
          <div className="font-heading text-xl font-bold tracking-wider mb-8">
            FIT<span className="text-primary">SAM</span>
            <span className="text-muted-foreground text-xs block font-body tracking-normal mt-1">Admin Panel</span>
          </div>
          <nav className="space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded text-sm transition-colors ${
                  activeTab === tab.id
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Mobile tabs */}
        <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-card border-t border-border flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 text-xs min-w-[70px] ${
                activeTab === tab.id ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Content */}
        <main className="flex-1 p-6 md:p-8 pb-24 md:pb-8">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={activeTab}>
            {activeTab === "dashboard" && (
              <div>
                <h1 className="font-heading text-3xl font-bold mb-8">{t.admin.dashboard}</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  {stats.map((stat, i) => (
                    <div key={i} className="bg-card border border-border rounded-lg p-6">
                      <div className="flex items-center justify-between mb-3">
                        <stat.icon className="w-5 h-5 text-primary" />
                        <span className="text-xs text-primary font-heading">{stat.change}</span>
                      </div>
                      <div className="font-heading text-2xl font-bold">{stat.value}</div>
                      <div className="text-muted-foreground text-xs mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
                {/* Recent Messages */}
                <h2 className="font-heading text-xl font-bold mb-4">{t.admin.messages}</h2>
                <div className="bg-card border border-border rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-4 text-muted-foreground font-heading text-xs tracking-wider">Name</th>
                        <th className="text-left p-4 text-muted-foreground font-heading text-xs tracking-wider hidden md:table-cell">Email</th>
                        <th className="text-left p-4 text-muted-foreground font-heading text-xs tracking-wider hidden lg:table-cell">Type</th>
                        <th className="text-left p-4 text-muted-foreground font-heading text-xs tracking-wider">Message</th>
                        <th className="text-left p-4 text-muted-foreground font-heading text-xs tracking-wider hidden md:table-cell">Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {mockMessages.map((msg) => (
                        <tr key={msg.id} className="border-b border-border hover:bg-secondary/50 transition-colors">
                          <td className="p-4">{msg.name}</td>
                          <td className="p-4 text-muted-foreground hidden md:table-cell">{msg.email}</td>
                          <td className="p-4 hidden lg:table-cell"><span className="px-2 py-1 rounded-full text-xs bg-primary/10 text-primary">{msg.type}</span></td>
                          <td className="p-4 text-muted-foreground max-w-xs truncate">{msg.message}</td>
                          <td className="p-4 text-muted-foreground hidden md:table-cell">{msg.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === "messages" && (
              <div>
                <h1 className="font-heading text-3xl font-bold mb-8">{t.admin.messages}</h1>
                <div className="space-y-4">
                  {mockMessages.map((msg) => (
                    <div key={msg.id} className="bg-card border border-border rounded-lg p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-heading text-lg">{msg.name}</h3>
                          <p className="text-muted-foreground text-xs">{msg.email} · {msg.phone}</p>
                        </div>
                        <span className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary font-heading">{msg.type}</span>
                      </div>
                      <p className="text-secondary-foreground text-sm">{msg.message}</p>
                      <p className="text-muted-foreground text-xs mt-2">{msg.date}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "reminders" && (
              <div>
                <h1 className="font-heading text-3xl font-bold mb-8">{t.admin.reminders}</h1>
                <p className="text-muted-foreground text-sm mb-6">Manage email reminders for 15-day free trial users.</p>
                <div className="space-y-4">
                  {mockTrials.map((trial) => (
                    <div key={trial.id} className="bg-card border border-border rounded-lg p-6 flex items-center justify-between">
                      <div>
                        <h3 className="font-heading text-lg">{trial.name}</h3>
                        <p className="text-muted-foreground text-xs">{trial.email} · {trial.phone}</p>
                        <p className="text-muted-foreground text-xs mt-1">Trial: {trial.startDate} → {trial.endDate}</p>
                      </div>
                      <button
                        className={`px-4 py-2 rounded text-xs font-heading tracking-wider ${
                          trial.reminded
                            ? "bg-secondary text-muted-foreground"
                            : "gradient-primary text-primary-foreground hover:opacity-90"
                        }`}
                        disabled={trial.reminded}
                      >
                        {trial.reminded ? "Reminded" : "Send Reminder"}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {(activeTab === "classes" || activeTab === "plans" || activeTab === "submissions") && (
              <div>
                <h1 className="font-heading text-3xl font-bold mb-4">
                  {activeTab === "classes" ? t.admin.manageClasses : activeTab === "plans" ? t.admin.managePlans : t.admin.submissions}
                </h1>
                <p className="text-muted-foreground text-sm">This section is a UI mockup. Connect a backend to enable full management.</p>
                <div className="mt-8 bg-card border border-border rounded-lg p-12 text-center">
                  <Dumbbell className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">Management interface coming soon</p>
                </div>
              </div>
            )}
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default Admin;
