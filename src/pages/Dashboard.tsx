import { Lock, CreditCard, File, MapPinHouseIcon, Key } from "lucide-react";
import { PageLayout } from "../components/PageLayout";

export default function DashboardLayout() {
  const metrics = [
    { label: "Saved Passwords", value: 28, icon: <Lock className="w-5 h-5" />, accent: "from-red-500 to-indigo-500" },
    { label: "Strong", value: 18, icon: <Key className="w-5 h-5" />, accent: "from-green-500 to-teal-500" },
    { label: "Weak", value: 7, icon: <Lock className="w-5 h-5" />, accent: "from-yellow-400 to-orange-400" },
    { label: "Duplicate", value: 3, icon: <File className="w-5 h-5" />, accent: "from-purple-500 to-pink-500" },
  ];

  const recentEntries = [
    { name: "Spotify", email: "thisisatestemail@gmail.com", icon: <Lock /> },
    { name: "Amazon", email: "user@example.com", icon: <CreditCard /> },
    { name: "Netflix", email: "netflixuser@gmail.com", icon: <File /> },
    { name: "Bank Account", email: "bankuser@gmail.com", icon: <MapPinHouseIcon /> },
  ];

  const quickActions = [
    { name: "Add Password", icon: <Lock /> },
    { name: "Generate Password", icon: <Key /> },
    { name: "Check Strength", icon: <Lock /> },
    { name: "Duplicate Finder", icon: <File /> },
  ];

  return (
    <PageLayout title="Dashboard">
      <main className="flex-1 p-6 space-y-10">

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl shadow-lg bg-[#1E1F22]/80 backdrop-blur-md border border-white/10
                         flex flex-col items-center justify-center gap-2 cursor-pointer
                         hover:shadow-2xl hover:scale-[1.03] transition"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${m.accent} flex items-center justify-center text-white shadow-md`}>
                {m.icon}
              </div>
              <div className="text-xl font-semibold text-white">{m.value}</div>
              <div className="text-gray-400 text-sm">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Entries */}
        <div className="bg-[#1E1F22]/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/10">
          <h2 className="text-white font-semibold text-xl mb-4">Recent Entries</h2>
          <table className="w-full text-left border-separate border-spacing-y-2">
            <thead>
              <tr className="text-gray-400 text-sm">
                <th className="px-4 py-2">Service</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2 text-center">Icon</th>
              </tr>
            </thead>
            <tbody>
              {recentEntries.map((entry, idx) => (
                <tr
                  key={idx}
                  className="bg-[#232427]/80 rounded-xl hover:bg-[#2A2B2F]/80 transition cursor-pointer"
                >
                  <td className="px-4 py-3 font-medium text-white">{entry.name}</td>
                  <td className="px-4 py-3 text-gray-400 truncate">{entry.email}</td>
                  <td className="px-4 py-3 flex justify-center">
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/30 flex items-center justify-center text-white shadow-md">
                      {entry.icon}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {quickActions.map((action, idx) => (
            <button
              key={idx}
              className="p-4 rounded-2xl shadow-lg bg-[#1E1F22]/80 backdrop-blur-md border border-white/10
                         hover:shadow-2xl hover:border-indigo-400/30 transition flex flex-col items-center justify-center gap-2"
            >
              <div className="text-white">{action.icon}</div>
              <div className="text-white font-medium">{action.name}</div>
            </button>
          ))}
        </div>

      </main>
    </PageLayout>
  );
}
