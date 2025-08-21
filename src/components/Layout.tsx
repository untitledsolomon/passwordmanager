// src/components/Layout.tsx
import type { ReactNode } from "react";
import Sidebar from "./AppSidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-[#16171A] to-[#0F1012]">
      <Sidebar />
      <main className="flex-1 pl-6 pr-6">{children}</main>
    </div>
  );
}
