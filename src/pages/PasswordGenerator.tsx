import { PageLayout } from "../components/PageLayout";
import { KeyRound } from "lucide-react";
import { useState } from "react";

function generatePassword(length = 12) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export default function PasswordGenerator() {
  const [password, setPassword] = useState(generatePassword());
  const [length, setLength] = useState(12);

  return (
    <PageLayout title="Password Generator">
      <div className="bg-[#1E1F22] rounded-xl shadow-md p-6 max-w-md mx-auto space-y-4">
        <div className="flex items-center gap-2">
          <KeyRound className="text-red-500 w-6 h-6" />
          <h2 className="text-lg font-semibold">Generate a strong password</h2>
        </div>

        <div className="flex items-center gap-2">
          <input
            type="text"
            value={password}
            readOnly
            className="flex-1 px-4 py-2 rounded-lg bg-[#2A2B2F] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
          <button
            onClick={() => setPassword(generatePassword(length))}
            className="px-4 py-2 bg-red-500 rounded-lg text-white hover:bg-red-600 transition"
          >
            Generate
          </button>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-gray-400">Length:</label>
          <input
            type="number"
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-20 px-2 py-1 rounded-lg bg-[#2A2B2F] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
          />
        </div>

        <button
          onClick={() => navigator.clipboard.writeText(password)}
          className="w-full px-4 py-2 bg-green-500 rounded-lg text-white hover:bg-green-600 transition"
        >
          Copy to Clipboard
        </button>
      </div>
    </PageLayout>
  );
}
