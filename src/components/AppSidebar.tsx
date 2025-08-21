// src/components/Sidebar.tsx
import { useState, useRef } from "react";
import {
  Home,
  Settings,
  Lock,
  File,
  LocationEdit,
  KeyRound,
  MapPinHouseIcon,
  Notebook,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { createPortal } from "react-dom";

const topMenu = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "All Entries", icon: Lock, path: "/allentries" },
  { name: "Accounts", icon: MapPinHouseIcon, path: "/accounts" },
  { name: "Documents", icon: File, path: "/documents" },
  { name: "Addresses", icon: LocationEdit, path: "/addresses" },
  { name: "Notes", icon: Notebook, path: "/notes" },
];

const footerMenu = [
  { name: "Password Generator", icon: KeyRound, path: "/password-generator" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<{ name: string; top: number } | null>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>, name: string) => {
    if (!open) {
      const rect = (event.currentTarget as HTMLDivElement).getBoundingClientRect();
      setHoveredItem({ name, top: rect.top + rect.height / 2 });
    }
  };

  const handleMouseLeave = () => setHoveredItem(null);

  const collapsedWidth = 64; // px

  return (
    <>
      <aside
        ref={sidebarRef}
        className={`h-screen backdrop-blur-md bg-[#1E1F22]/80 border-r border-gray-800/60 flex flex-col transition-width duration-300 ease-in-out ${
          open ? "w-64" : "w-20"
        } shadow-lg`}
      >
        {/* Header */}
        <div className="p-4 font-bold flex justify-between items-center border-b border-gray-800/50 text-white">
          {open && <span className="text-lg tracking-tight">SaaS</span>}
          <button
            className="text-gray-300 p-2 rounded-lg hover:bg-gray-700/40 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        {/* Top Menu */}
        <nav className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 scrollbar-thin scrollbar-thumb-gray-700/40">
          {topMenu.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={(e) => handleMouseEnter(e, item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={item.path}
                end
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-red-500/20 to-purple-500/20 text-white shadow-md"
                      : "hover:bg-gradient-to-r hover:from-red-500/20 hover:to-red-700/20 text-gray-300 hover:text-white"
                  }`
                }
              >
                <item.icon className={`w-5 h-5 self-center ${open ? "text-white" : "text-white"}`} />
                {open && <span className="truncate font-medium">{item.name}</span>}
              </NavLink>
            </div>
          ))}
        </nav>

        {/* Footer Menu */}
        <div className="p-3 border-t border-gray-800/50 flex flex-col gap-2">
          {footerMenu.map((item) => (
            <div
              key={item.name}
              className="relative group"
              onMouseEnter={(e) => handleMouseEnter(e, item.name)}
              onMouseLeave={handleMouseLeave}
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-3 py-2 rounded-xl transition-all duration-300
                  ${
                    isActive
                      ? "bg-gradient-to-r from-red-500/20 to-purple-500/20 text-white shadow-md"
                      : "hover:bg-gradient-to-r hover:from-red-500/20 hover:to-red-700/20 text-gray-300 hover:text-white"
                  }`
                }
              >
                <item.icon className={`w-5 h-5 self-center ${open ? "text-white" : "text-white"}`} />
                {open && <span className="truncate font-medium">{item.name}</span>}
              </NavLink>
            </div>
          ))}
        </div>
      </aside>

      {/* Tooltip */}
      {!open && hoveredItem &&
        createPortal(
          <div
            className="bg-[#1E1F22]/80 backdrop-blur-md text-white text-sm rounded-xl px-3 py-1 shadow-lg z-50 pointer-events-none transition-opacity opacity-100 border border-white/10"
            style={{
              position: "fixed",
              top: hoveredItem.top,
              left: collapsedWidth + 8,
              transform: "translateY(-50%)",
              whiteSpace: "nowrap",
            }}
          >
            {hoveredItem.name}
          </div>,
          document.body
        )
      }
    </>
  );
}
