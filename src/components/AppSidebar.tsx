// src/components/Sidebar.tsx
import { useState } from "react";
import { Home, Settings, Search, Inbox } from "lucide-react";
import { Link } from "react-router-dom"

const menuItems = [
  { name: "Dashboard", icon: Home, path: "/" },
  { name: "Inbox", icon: Inbox, path: "/inbox" },
  { name: "Search", icon: Search, path: "/search" },
  { name: "Settings", icon: Settings, path: "/settings" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`bg-white border-r transition-all duration-300 ${
        open ? "w-64" : "w-16"
      } flex flex-col`}
    >
      <div className="p-4 font-bold flex justify-between items-center border-b">
        {open && "Sidebar"}
        <button
          className="text-gray-500"
          onClick={() => setOpen(!open)}
        >
          {open ? "<" : ">"}
        </button>
      </div>

      <nav className="flex-1 mt-4">
        {menuItems.map((item) => (
          <Link key={item.name} to={item.path} className="flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer">
            <item.icon />
            {open && <span>{item.name}</span>}
          </Link>
        ))}
      </nav>

      <div className="p-4 border-t">{open && "Footer"}</div>
    </aside>
  );
}
