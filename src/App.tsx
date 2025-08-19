// src/App.tsx
import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </Layout>
  );
}
