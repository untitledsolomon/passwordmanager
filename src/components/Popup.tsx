import React from "react";
import { X } from "lucide-react";

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Popup({ isOpen, onClose, children }: PopupProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Popup content */}
      <div className="relative w-[90%] max-w-lg p-6 bg-gradient-to-tr from-[#1F1F25] to-[#2C2D34] dark:bg-[#2A2B2F] 
                      rounded-3xl border border-white/10 backdrop-blur-xl shadow-2xl 
                      transform scale-95 opacity-0 animate-popup-in transition-all duration-300">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {children}
      </div>

      {/* Animation keyframes */}
        <style>
        {`
            @keyframes popup-in {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
            }
            .animate-popup-in {
            animation: popup-in 0.2s forwards;
            }
        `}
        </style>

    </div>
  );
}
