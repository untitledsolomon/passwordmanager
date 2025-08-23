import { Lock, CreditCard, File, MapPinHouseIcon, Key, ChevronRight, Eye, EyeOff, SquareArrowOutUpRight, Clipboard } from "lucide-react";
import { PageLayout } from "../components/PageLayout";
import { useState } from "react";
import Popup from "../components/Popup";
import { useToast } from "../components/ToastProvider";
import { usePassowrds } from "../components/PasswordManager";
import { usePagination } from "../ts/usePagination";
import Pagination from "../components/Pagination";

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
    { name: "Spotify", email: "thisisatestemail@gmail.com", icon: <Lock /> },
    { name: "Amazon", email: "user@example.com", icon: <CreditCard /> },
    { name: "Netflix", email: "netflixuser@gmail.com", icon: <File /> },
    { name: "Bank Account", email: "bankuser@gmail.com", icon: <MapPinHouseIcon /> },
    { name: "Spotify", email: "thisisatestemail@gmail.com", icon: <Lock /> },
    { name: "Amazon", email: "user@example.com", icon: <CreditCard /> },
    { name: "Netflix", email: "netflixuser@gmail.com", icon: <File /> },
    { name: "Bank Account", email: "bankuser@gmail.com", icon: <MapPinHouseIcon /> },
    { name: "Spotify", email: "thisisatestemail@gmail.com", icon: <Lock /> },
    { name: "Amazon", email: "user@example.com", icon: <CreditCard /> },
    { name: "Netflix", email: "netflixuser@gmail.com", icon: <File /> },
    { name: "Bank Account", email: "bankuser@gmail.com", icon: <MapPinHouseIcon /> },
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

  const {passwords, deletePassword} = usePassowrds();

  const sorted = passwords.sort((a, b) => b.id - a.id);

  const days = 1;
  const cutoff = Date.now() - days * 24 * 60 * 60 * 1000
  const recent = passwords.filter(password => password.id >= cutoff)

  const { currentItems, currentPage, totalPages, goToPage } = usePagination(recent, 4)

  const [isOpen, setIsOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);

  const [showPassword, setShowPassword] = useState(false);
  const { showToast } = useToast();

  const iconMap: Record<string, React.ReactNode> = {
    lock: < Lock />
  }


  const handleRowClick = (entry: any) => {
    setSelectedEntry(entry);
    setIsOpen(true);
  };

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>, text: string) => {
    navigator.clipboard.writeText(text);
    showToast("Copied", e.currentTarget);
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement>, passwordId: number) => {
    deletePassword(passwordId)
    showToast("Deleted", e.currentTarget)
    setIsOpen(false)
  }

  return (
    <PageLayout title="Dashboard">
      <main className="flex-1 p-2 space-y-10">

        {/* Metrics */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl shadow-lg bg-[#1E1F22]/80 backdrop-blur-md border border-white/10
                         flex flex-col items-center justify-center gap-2 cursor-pointer
                         hover:shadow-2xl hover:scale-[1.03] transition hover:border-indigo-400/30"
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
        <div className="bg-[#1E1F22]/80 backdrop-blur-md rounded-2xl shadow-lg p-6 border border-white/10 h-[29-rem]">
          <h2 className="text-white font-semibold text-xl mb-4">Recent Entries</h2>
          <ul className="w-full gap-7 border-separate border-spacing-y-3 text-left">
            {currentItems.map((entry) => (
              <div
                className="flex items-center bg-[#232427]/80 hover:bg-[#2A2B2F]/80 transition cursor-pointer rounded-2xl p-2 m-2 gap-5 justify-between"
                onClick={() => handleRowClick(entry)}
              >
                <div className="flex items-centetr pl-3">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500/20 to-indigo-500/20 flex items-center justify-center text-white shadow-md">
                        {iconMap[entry.icon]}
                    </div>
                    <div className="px-6 py-4 font-medium text-white w-60 whitespace-nowrap text-ellipsis overflow-hidden">{entry.name}</div>
                  </div>
                  <div className="px-6 py-4 text-gray-400 truncate">{entry.email}</div>
                </div>
                <div className="justify-center mr-3 w-10 h-10 rounded-xl bg-gradient-to-r from-red-500/20 to-indigo-500/20 flex items-center text-white shadow-md hover:bg-red-900/60">
                  < ChevronRight />
                </div> 
              </div>
            ))}
          </ul>
          <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />
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

        {/* Entry Popup */}
        <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {selectedEntry && (
            <div className="w-11/12 max-w-[850px] h-[60vh] mx-auto p-2 flex flex-col justify-between space-y-6">
              
              {/* Header */}
              <div className="flex justify-between items-center border-b border-gray-800 pb-4">
                <div className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-500/20 to-indigo-500/20 flex items-center justify-center text-white shadow-md">
                    {iconMap[selectedEntry.icon]}
                  </div>
                  <h2 className="text-2xl font-bold text-white truncate">{selectedEntry.name}</h2>
                </div>
                <SquareArrowOutUpRight className="w-10 h-10 p-2 rounded-lg cursor-pointer text-gray-400 transition hover:bg-[#1E1F22]" />
              </div>

              {/* Email */}
              <div className="flex justify-between items-start bg-[#1E1F22]/70 border border-white/10 p-4 rounded-2xl">
                <div>
                  <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Email</h3>
                  <p className="text-white font-medium">{selectedEntry.email}</p>
                </div>
                <button
                  className="p-2 rounded-lg hover:bg-[#2A2C2F] transition cursor-pointer"
                  onClick={(e) => handleCopy(e, selectedEntry.email)}
                >
                  <Clipboard className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Password */}
              <div className="flex justify-between items-start bg-[#1E1F22]/70 border border-white/10 p-4 rounded-2xl">
                <div>
                  <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Password</h3>
                  <p className="text-white font-medium">{showPassword ? selectedEntry.password : "••••••••••••••••"}</p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="p-2 rounded-lg hover:bg-[#2A2C2F] transition cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5 text-gray-400" /> : <Eye className="w-5 h-5 text-gray-400" />}
                  </button>
                  <button
                    className="p-2 rounded-lg hover:bg-[#2A2C2F] transition cursor-pointer"
                    onClick={(e) => handleCopy(e, selectedEntry.password)}
                  >
                    <Clipboard className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>

              {/* Notes */}
              <div className="bg-[#1E1F22]/70 border border-white/10 p-4 rounded-2xl">
                <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider">Notes</h3>
                <p className="text-white font-medium">{selectedEntry.notes}</p>
              </div>

              {/* Action Buttons */}
              <div className="flex justify-end gap-2">
                <button 
                  onClick={(e) => handleDelete(e, selectedEntry.id)}
                  className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium shadow-sm hover:from-red-600/20 hover:to-red-700/20 transition cursor-pointer"
                >
                  Delete
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium shadow-sm hover:from-red-600/20 hover:to-red-700/20 transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </Popup>

      </main>
    </PageLayout>
  );
}
