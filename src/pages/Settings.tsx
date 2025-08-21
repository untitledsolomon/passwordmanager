import { useState } from "react";
import { 
  User, Bell, Lock, CreditCard, Link, Shield, SunMoon, Settings 
} from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import { ConnectApp } from "../components/ConnectApp";
import { Input } from "../components/Input";
import { RecentLogins } from "../components/RecentLogins";
import { Select } from "../components/Select";
import { Section } from "../components/Section";
import { Toggle } from "../components/Toogle";

export default function SettingsPage() {
  const sidebarItems = [
    { id: "profile", title: "Profile", icon: User },
    { id: "security", title: "Security", icon: Lock },
    { id: "notifications", title: "Notifications", icon: Bell },
    { id: "appearance", title: "Appearance", icon: SunMoon },
    { id: "privacy", title: "Privacy", icon: Shield },
    { id: "integrations", title: "Integrations", icon: Link },
    { id: "billing", title: "Billing & Subscription", icon: CreditCard },
    { id: "advanced", title: "Advanced", icon: Settings },
  ];

  const [activeSection, setActiveSection] = useState("profile");

  const handleClick = (id: string) => setActiveSection(id);

  return (
    <PageLayout title="Settings">
      <div className="flex gap-8 py-10">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col gap-2 sticky top-20 w-64">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item.id)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition cursor-pointer
                ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-red-500/20 to-purple-500/20 text-white shadow-md"
                    : "text-gray-400 hover:bg-[#2A2B2F]/80 hover:text-gray-200"
                }`}
            >
              <item.icon className="w-5 h-5" />
              {item.title}
            </button>
          ))}
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col space-y-6">
          {activeSection === "profile" && (
            <Section id="profile" title="Profile" Icon={User} 
              className="bg-[#1E1F22]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition-all">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input label="Username" placeholder="User123" />
                <Input label="Email" placeholder="user@example.com" type="email" />
                <Input label="Profile Picture" placeholder="Upload..." type="file" />
              </div>
            </Section>
          )}

          {activeSection === "security" && (
            <Section id="security" title="Security" Icon={Lock} 
              className="bg-[#1E1F22]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition-all">
              <div className="flex flex-col gap-4">
                <Input label="Password" type="password" placeholder="********" />
                <Toggle label="Two-Factor Authentication" />
                <RecentLogins />
              </div>
            </Section>
          )}

          {activeSection === "notifications" && (
            <Section id="notifications" title="Notifications" Icon={Bell} 
              className="bg-[#1E1F22]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition-all">
              <Toggle label="Email Notifications" />
              <Toggle label="SMS Notifications" />
              <Toggle label="Push Notifications" />
              <Toggle label="Marketing Emails" />
            </Section>
          )}

          {activeSection === "appearance" && (
            <Section id="appearance" title="Appearance" Icon={SunMoon} 
              className="bg-[#1E1F22]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition-all">
              <Toggle label="Dark Mode" />
              <Select label="Accent Color" options={["Red", "Blue", "Green", "Purple"]} />
            </Section>
          )}

          {activeSection === "privacy" && (
            <Section id="privacy" title="Privacy" Icon={Shield} 
              className="bg-[#1E1F22]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition-all">
              <Toggle label="Profile Visibility" />
              <Toggle label="Share Usage Data" />
              <Toggle label="Search Engine Indexing" />
            </Section>
          )}

          {activeSection === "integrations" && (
            <Section id="integrations" title="Integrations" Icon={Link} 
              className="bg-[#1E1F22]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition-all">
              <ConnectApp name="Google" />
              <ConnectApp name="Slack" />
              <ConnectApp name="Dropbox" />
            </Section>
          )}

          {activeSection === "billing" && (
            <Section id="billing" title="Billing & Subscription" Icon={CreditCard} 
              className="bg-[#1E1F22]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition-all">
              <Input label="Card Number" placeholder="**** **** **** 1234" />
              <Select label="Plan" options={["Free", "Pro", "Enterprise"]} />
              <button className="mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 rounded-xl text-white font-semibold hover:from-red-600 hover:to-red-800 shadow-md transition">
                View Invoices
              </button>
            </Section>
          )}

          {activeSection === "advanced" && (
            <Section id="advanced" title="Advanced" Icon={Settings} 
              className="bg-[#1E1F22]/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-white/10 hover:shadow-2xl transition-all">
              <button className="px-4 py-2 bg-gradient-to-r from-gray-600/80 to-gray-700/80 rounded-xl text-white hover:from-gray-700/90 shadow-md transition">
                Export Data
              </button>
              <button className="mt-2 px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 rounded-xl text-white hover:from-red-600 hover:to-red-800 shadow-md transition">
                Delete Account
              </button>
            </Section>
          )}

          {/* Save Changes */}
          <div className="pt-4">
            <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-700 rounded-xl text-white font-semibold hover:from-red-600 hover:to-red-800 transition shadow-md">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
