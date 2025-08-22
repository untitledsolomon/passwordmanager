import { PageLayout } from "../components/PageLayout";
import { Lock, Eye, EyeOff, Clipboard, SquareArrowOutUpRight, ChevronRight } from "lucide-react";
import Pagination from "../components/Pagination";
import { usePagination } from "../ts/usePagination";
import Popup from "../components/Popup";
import { useState } from "react";
import { useToast } from "../components/ToastProvider";
import { usePassowrds, type PasswordEntry } from "../components/PasswordManager";
import Form from "../components/Form"

export default function AllEntries() {
  const {passwords, deletePassword} = usePassowrds();
  
  const { currentItems, currentPage, totalPages, goToPage } = usePagination(passwords, 8);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEntry, setSelectedEntry] = useState<any>(null);
  const [showPassword, setShowPassword] = useState(false);
  const { showToast } = useToast();
  const [isAddOpen, setIsAddOpen] = useState(false);
  const {addPassword} = usePassowrds();

  const fields = [
    { name: "name", label: "Website / App Name", type: "text", placeholder: "example.com"},
    { name: "email", label: "Email / Username", type: "text"},
    { name: "password", label: "Password", type: "password"},
    { name: "notes", label: "Notes", type: "textarea"},
  ];

  const handleFormSubmit = (values: Record<string, string>) => {
    const newEntry = {
      id: Date.now(),
      ...(values as Omit<PasswordEntry, "id">),
      icon: "lock"
    };
    addPassword(newEntry)
    setIsAddOpen(false)
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

  const iconMap: Record<string, React.ReactNode> = {
    lock: < Lock />
  }

  return (
    <PageLayout title="All Entries">
      <button
        onClick={() => setIsAddOpen(true)}
        className="px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-xl font-medium shadow-sm hover:from-red-600 hover:to-red-700 transition cursor-pointer"
      >
        Add Password
      </button>

      <Popup isOpen={isAddOpen} onClose={() => setIsAddOpen(false)}>
        < Form title="Add Password" fields={fields} onSubmit={handleFormSubmit}/>
      </Popup>

      {/* Entries Table */}
      <div className="bg-[#1E1F22]/80 backdrop-blur-md rounded-2xl shadow-md p-6 border border-white/10 mb-6">
        <ul className="w-full gap-7 border-separate border-spacing-y-3 text-left">
          {currentItems.map((entry) => (
            <div
              className="flex items-center bg-[#232427]/80 hover:bg-[#2A2B2F]/80 transition cursor-pointer rounded-2xl p-2 m-2 gap-5 justify-between"
              onClick={() => handleRowClick(entry)}
            >
              <div className="flex items-centetr pl-3 ">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-red-500/20 to-indigo-500/20 flex items-center justify-center text-white shadow-md">
                      {iconMap[entry.icon]}
                  </div>
                  <div className="px-6 py-4 font-medium text-white w-50">{entry.name}</div>
                </div>
                <div className="px-6 py-4 text-gray-400 truncate max-w-xs">{entry.email}</div>
              </div>
              <div className="justify-center mr-3 w-10 h-10 rounded-xl bg-gradient-to-r from-red-500/20 to-indigo-500/20 flex items-center text-white shadow-md hover:bg-red-900/60">
                < ChevronRight />
              </div> 
            </div>
          ))}
        </ul>
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
    </PageLayout>
  );
}
