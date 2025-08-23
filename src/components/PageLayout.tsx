// src/components/PageLayout.tsx
import { Bell, Search } from "lucide-react";

interface PageLayoutProps {
  title: string;
  children: React.ReactNode;
  onAdd?: () => void;
}

export function PageLayout({ title, children, onAdd }: PageLayoutProps) {  
  return (
    <div className="flex flex-col h-full space-y-8 bg-gradient-to-br from-[#16171A] to-[#0F1012] text-white overflow-auto no-scrollbar">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mt-6 px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent tracking-tight drop-shadow-sm">
          {title}
        </h1>

        <div className="flex gap-3 items-center w-full md:w-auto">
          <button
            className="bg-gradient-to-r from-red-500 to-red-700 px-5 py-2.5 rounded-xl 
                             hover:shadow-lg hover:shadow-red-600/30 hover:from-red-600 hover:to-red-700 transition 
                             font-semibold text-white text-sm md:text-base transform hover:scale-105 cursor-pointer"
            onClick={onAdd}
          >
            + Add
          </button>

          <div className="flex items-center gap-4 flex-1 md:flex-none">
            <div className="relative flex-1 md:flex-none">
              <input
                type="text"
                placeholder="Search entries..."
                className="rounded-full pl-12 pr-4 py-2.5 bg-[#1A1B1E]/80 border border-gray-700/50 
                          text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 
                          transition shadow-sm w-full"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            </div>

            <Bell className="text-gray-400 hover:text-red-500 transition cursor-pointer" />
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-700 flex items-center justify-center font-bold text-lg shadow-md">
                U
              </div>
              <span className="hidden md:inline font-medium text-gray-200">User</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content wrapper */}
      <div className="flex-1 px-4 space-y-6">
        {children}
      </div>
    </div>
  );
}
