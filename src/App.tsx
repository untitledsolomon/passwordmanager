// src/App.tsx
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Accounts from "./pages/Accounts";
import Addresses from "./pages/Addresses";
import AllEntries from "./pages/AllEntries";
import CreditCards from "./pages/CreditCards";
import Documents from "./pages/Documents";
import Notes from "./pages/Notes";
import PasswordGenerator from "./pages/PasswordGenerator";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/allentries" element={<AllEntries />} />
        <Route path="/search" element={<Accounts />} />
        <Route path="/creditcards" element={<CreditCards />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/addresses" element={<Addresses />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/accounts" element={<Accounts />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/password-generator" element={<PasswordGenerator />} />
      </Routes>
    </Layout>
  );
}
