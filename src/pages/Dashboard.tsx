import {
  Lock,
  CreditCard,
  File,
  MapPinHouseIcon,
  Key,
  Bell,
  Menu,
  LogOut,
} from "lucide-react";

export default function DashboardLayout() {
  const metrics = [
    { label: "Saved Passwords", value: 28, icon: <Lock />, gradient: "from-red-500 to-red-700" },
    { label: "Strong", value: 18, icon: <Key />, gradient: "from-green-400 to-green-600" },
    { label: "Weak", value: 7, icon: <Lock />, gradient: "from-yellow-400 to-yellow-600" },
    { label: "Duplicate", value: 3, icon: <File />, gradient: "from-gray-400 to-gray-600" },
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
    <div className="flex h-screen bg-[#121212] text-white">
      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto space-y-10">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-red-500">Dashboard</h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search entries..."
              className="rounded-full px-4 py-2 bg-[#1E1F22] border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <Bell className="text-gray-400 hover:text-red-500 transition cursor-pointer" />
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center font-bold">U</div>
              <span className="hidden md:inline">User</span>
            </div>
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className={`p-4 rounded-xl shadow-md bg-gradient-to-br ${m.gradient} flex flex-col items-center`}
            >
              <div className="w-10 h-10 rounded-full bg-black/20 flex items-center justify-center mb-2 text-white text-lg">
                {m.icon}
              </div>
              <div className="text-xl font-bold">{m.value}</div>
              <div className="text-gray-300 mt-1 text-sm">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Recent Entries */}
        <div className="bg-[#1E1F22] rounded-xl shadow-md p-4 overflow-x-auto">
          <h2 className="text-red-500 font-semibold text-xl mb-4">Recent Entries</h2>
          <table className="w-full text-left table-auto border-separate border-spacing-y-1">
            <thead>
              <tr className="text-gray-400 uppercase text-sm">
                <th className="px-4 py-2">Service</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Icon</th>
              </tr>
            </thead>
            <tbody>
              {recentEntries.map((entry, idx) => (
                <tr
                  key={idx}
                  className="bg-[#2A2B2F] rounded-xl hover:bg-[#3A3B3F] transition-colors cursor-pointer"
                >
                  <td className="px-4 py-3 font-medium">{entry.name}</td>
                  <td className="px-4 py-3 text-gray-300 truncate">{entry.email}</td>
                  <td className="px-4 py-3">{entry.icon}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {quickActions.map((action, idx) => (
            <button
              key={idx}
              className="p-4 bg-[#1E1F22] rounded-xl shadow-md hover:bg-[#2A2B2F] transition flex flex-col items-center justify-center gap-2 text-sm"
            >
              <div className="text-red-500 text-2xl">{action.icon}</div>
              <div className="text-white font-medium">{action.name}</div>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
