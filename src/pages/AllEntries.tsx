import { PageLayout } from "../components/PageLayout";
import { Lock, Eye, EyeOff, Clipboard, SquareArrowOutUpRight } from "lucide-react";
import Pagination  from "../components/Pagination";
import { usePagination } from "../ts/usePagination"
import Popup from "../components/popup";
import { useState } from "react";
import { useToast } from "../components/ToastProvider";

const allEntries = Array(50).fill({
  name: "Spotify",
  email: "thisisatestemail@gmail.com",
  icon: <Lock />,
  password: "thisisthepassword",
  notes: "this is just a test note its meant to show if the notes system works or no."
});

export default function AllEntries() {
  const { currentItems, currentPage, totalPages, goToPage } = usePagination(allEntries, 12)

  const [isOpen, setIsOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);

  const handleRowClick = (entry: any) => {
    setSelectedEntry(entry);
    setIsOpen(true);
  };

  const [showPassword, setShowPassword] = useState(false);
  
  const { showToast } = useToast();

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>, text:string) => {
    navigator.clipboard.writeText(text);
    showToast("Copied", e.currentTarget);
  }

  return (
    <PageLayout title="All Entries">
      <div className="bg-[#1E1F22] rounded-xl shadow-md p-4 overflow-x-auto">
        <table className="w-full text-left table-auto border-separate border-spacing-y-1">
          <thead>
            <tr className="text-gray-400 uppercase text-sm">
              <th className="px-4 py-2">Service</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Icon</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((entry, idx) => (
              <tr
                key={idx}
                className="bg-[#2A2B2F] rounded-xl hover:bg-[#3A3B3F] transition-colors cursor-pointer"
                onClick={() => handleRowClick(entry)}
              >
                <td className="px-4 py-3 font-medium">{entry.name}</td>
                <td className="px-4 py-3 text-gray-300 truncate">{entry.email}</td>
                <td className="px-4 py-3">{entry.icon}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        goToPage={goToPage}
      />

      {/* Popup */}
      <Popup isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {selectedEntry && (
          <div className="space-y-6 pt-6">
            
            {/* Header */}
            <div className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-4">
              <div className="flex gap-3 items-center">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-3 rounded-xl flex items-center justify-center text-white shadow-md">
                  {selectedEntry.icon}
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 tracking-tight">
                  {selectedEntry.name}
                </h2>
              </div>

              <SquareArrowOutUpRight className="p-2 rounded-lg size-9 cursor-pointer transition-all hover:bg-red-500 hover:text-white" />
            </div>

            {/* Email */}
            <div className="flex justify-between items-start bg-gray-100/60 dark:bg-gray-800/60 p-4 rounded-xl shadow-sm">
              <div>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Email
                </h3>
                <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                  {selectedEntry.email}
                </p>
              </div>
              <button
                className="p-2 rounded-lg size-9 cursor-pointer transition-all hover:bg-red-500 hover:text-white"
                onClick={(e) => handleCopy(e, selectedEntry.email)}
              >
                <Clipboard className="w-full h-full" />
              </button>
            </div>

            {/* Password */}
            <div className="flex justify-between items-start bg-gray-100/60 dark:bg-gray-800/60 p-4 rounded-xl shadow-sm">
              <div>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Password
                </h3>
                <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                  {showPassword ? selectedEntry?.password : "****************************"}
                </p>
              </div>
              <div className="flex">
                <button
                  className="p-2 rounded-lg size-9 cursor-pointer transition-all hover:bg-red-500 hover:text-white"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="w-full h-full" />
                  ) : (
                    <Eye className="w-full h-full" />
                  )}
                </button>

                <button
                  className="p-2 rounded-lg size-9 cursor-pointer transition-all hover:bg-red-500 hover:text-white"
                  onClick={(e) => handleCopy(e, selectedEntry.password)}
                >
                  <Clipboard className="w-full h-full" />
                </button>
              </div>
            </div>

            {/* Notes */}
            <div className="flex justify-between items-start bg-gray-100/60 dark:bg-gray-800/60 p-4 rounded-xl shadow-sm">
              <div>
                <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Notes
                </h3>
                <p className="text-base font-medium text-gray-900 dark:text-gray-100">
                  {selectedEntry.notes}
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white rounded-xl font-medium shadow-lg transition-all cursor-pointer"
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
