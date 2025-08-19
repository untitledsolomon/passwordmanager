// src/components/Sidebar.tsx
import { useState, useRef } from "react";
import {
  Home,
  Settings,
  Lock,
  CreditCard,
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
  { name: "Credit Cards", icon: CreditCard, path: "/creditcards" },
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

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const collapsedWidth = 64; // collapsed sidebar width in px

  return (
    <>
      <aside
        ref={sidebarRef}
        className={`h-screen bg-[#1E1F22] border-r border-gray-700 transition-all duration-300 ${
          open ? "w-64" : "w-16"
        } flex flex-col`}
      >
        {/* Header */}
        <div className="p-4 font-bold flex justify-between items-center border-b text-white">
          {open && <span className="text-lg">SaaS</span>}
          <button
            className="text-white p-1 rounded hover:bg-gray-700 transition"
            onClick={() => setOpen(!open)}
          >
            {open ? <ChevronLeft /> : <ChevronRight />}
          </button>
        </div>

        {/* Top Menu */}
        <nav className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
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
                  `flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition ${
                    isActive ? "bg-red-500" : "bg-transparent"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {open && <span className="truncate">{item.name}</span>}
              </NavLink>
            </div>
          ))}
        </nav>

        {/* Footer Menu */}
        <div className="p-2 border-t border-gray-700 flex flex-col gap-1">
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
                  `flex items-center gap-3 p-2 rounded hover:bg-gray-700 transition ${
                    isActive ? "bg-red-500" : "bg-transparent"
                  }`
                }
              >
                <item.icon className="w-5 h-5" />
                {open && <span className="truncate">{item.name}</span>}
              </NavLink>
            </div>
          ))}
        </div>
      </aside>

      {/* Tooltip Portal */}
      {!open && hoveredItem &&
        createPortal(
          <div
            className="bg-gray-800 text-white text-sm rounded px-2 py-1 z-50 pointer-events-none transition-opacity opacity-100"
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
