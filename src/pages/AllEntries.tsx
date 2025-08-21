import { PageLayout } from "../components/PageLayout";
import { Lock, Eye, EyeOff, Clipboard, SquareArrowOutUpRight } from "lucide-react";
import Pagination from "../components/Pagination";
import { usePagination } from "../ts/usePagination";
import Popup from "../components/popup";
import { useState } from "react";
import { useToast } from "../components/ToastProvider";

const allEntries = Array(50).fill({
  name: "Spotify",
  email: "thisisatestemail@gmail.com",
  icon: <Lock />,
  password: "thisisthepassword",
  notes: "This is just a test note to show if the notes system works or not.",
});

export default function AllEntries() {
  const { currentItems, currentPage, totalPages, goToPage } = usePagination(allEntries, 7);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);
  const [showPassword, setShowPassword] = useState(false);
  const { showToast } = useToast();

  const handleRowClick = (entry: any) => {
    setSelectedEntry(entry);
    setIsOpen(true);
  };

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>, text: string) => {
    navigator.clipboard.writeText(text);
    showToast("Copied", e.currentTarget);
  };

  return (
    <PageLayout title="All Entries">
      {/* Entries Table */}
      <div className="bg-[#1E1F22]/80 backdrop-blur-md rounded-2xl shadow-md p-6 border border-white/10 mb-6">
        <table className="w-full border-separate border-spacing-y-3 text-left">
          <thead>
            <tr className="text-gray-400 uppercase text-xs tracking-wider">
              <th className="px-6 py-2">Service</th>
              <th className="px-6 py-2">Email</th>
              <th className="px-6 py-2 text-center">Icon</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((entry, idx) => (
              <tr
                key={idx}
                className="bg-[#232427]/80 hover:bg-[#2A2B2F]/80 transition cursor-pointer rounded-2xl"
                onClick={() => handleRowClick(entry)}
              >
                <td className="px-6 py-4 font-medium text-white">{entry.name}</td>
                <td className="px-6 py-4 text-gray-400 truncate max-w-xs">{entry.email}</td>
                <td className="px-6 py-4 flex justify-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
                    {entry.icon}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination currentPage={currentPage} totalPages={totalPages} goToPage={goToPage} />

      {/* Entry Popup */}
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedEntry && (
          <div className="w-11/12 max-w-[850px] h-[60vh] mx-auto p-2 flex flex-col justify-between space-y-6">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-800 pb-4">
              <div className="flex gap-4 items-center">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-r from-red-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
                  {selectedEntry.icon}
                </div>
                <h2 className="text-2xl font-bold text-white truncate">{selectedEntry.name}</h2>
              </div>
              <SquareArrowOutUpRight className="w-10 h-10 p-2 rounded-lg cursor-pointer text-gray-400 transition hover:bg-[#2A2C2F]" />
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

            {/* Close Button */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium shadow-sm hover:from-red-600 hover:to-red-700 transition cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Popup>
    </PageLayout>
  );
}
