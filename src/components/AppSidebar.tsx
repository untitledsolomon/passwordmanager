// src/components/Sidebar.tsx
import { useState } from "react";
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

  return (
    <aside
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

      {/* Top Menu (scrollable if content overflows) */}
      <nav className="flex-1 overflow-y-auto p-2 flex flex-col gap-1">
        {topMenu.map((item) => (
          <NavLink
            key={item.name}
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
        ))}
      </nav>

      {/* Footer Menu (always visible) */}
      <div className="p-2 border-t border-gray-700 flex flex-col gap-1">
        {footerMenu.map((item) => (
          <NavLink
            key={item.name}
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
        ))}
      </div>
    </aside>
  );
}
