import { PageLayout } from "../components/PageLayout";
import { KeyRound } from "lucide-react";
import { useState } from "react";
import { useToast } from "../components/ToastProvider";

function generatePassword(length = 12) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
  return Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
}

export default function PasswordGenerator() {
  const [password, setPassword] = useState(generatePassword());
  const [length, setLength] = useState(12);
  const { showToast } = useToast();

  const handleCopy = (e: React.MouseEvent<HTMLButtonElement>, text: string) => {
    navigator.clipboard.writeText(text);
    showToast("Copied", e.currentTarget);
  };

  return (
    <PageLayout title="Password Generator">
      <div className="flex justify-center items-start min-h-[70vh] py-10">
        <div className="bg-[#1E1F22]/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 w-full max-w-md space-y-6 
                        transition-all hover:shadow-2xl hover:border hover:border-red-700/50 relative overflow-hidden">
          
          {/* subtle shimmer */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 hover:opacity-30 transition-all duration-700 pointer-events-none animate-[shimmer_2s_infinite] rounded-3xl"></div>

          {/* Header */}
          <div className="flex items-center gap-3 relative z-10">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-red-500 to-indigo-500 flex items-center justify-center text-white shadow-md">
              <KeyRound className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-white">Generate a strong password</h2>
          </div>

          {/* Password Output */}
          <div className="flex items-center gap-2 relative z-10">
            <input
              type="text"
              value={password}
              readOnly
              className="flex-1 px-4 py-2 rounded-lg bg-[#2A2B2F]/80 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
            <button
              onClick={() => setPassword(generatePassword(length))}
              className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-700 rounded-lg text-white font-medium hover:from-red-600 hover:to-red-800 shadow transition cursor-pointer"
            >
              Generate
            </button>
          </div>

          {/* Length Selector */}
          <div className="flex items-center gap-2 relative z-10">
            <label className="text-gray-400">Length:</label>
            <input
              type="number"
              min={6}
              max={32}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}
              className="w-20 px-2 py-1 rounded-lg bg-[#2A2B2F]/80 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition"
            />
          </div>

          {/* Copy Button */}
          <button
            onClick={(e) => handleCopy(e, password)}
            className="w-full px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 rounded-xl text-white font-medium hover:from-green-600 hover:to-green-700 shadow transition relative z-10 cursor-pointer"
          >
            Copy to Clipboard
          </button>

          {/* Optional Info */}
          <p className="text-gray-400 text-sm text-center relative z-10">
            Tip: Use a unique password for every account to keep your data safe.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
