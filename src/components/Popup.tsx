import React from "react"
import { X } from "lucide-react";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export default function Popup({isOpen, onClose, children}: 
PopupProps) {
    if (!isOpen) return null;
    
    return (
        <div className="fixed content-center items-center inset-0 z-50">
            {/* Background overlay */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Popup content */}
            <div className="relative justify-self-center bg-white dark:bg-[#2A2B2F] p-6 w-[90%] max-w-md z-10 border border-gray-200 dark:border-gray-700 backdrop-blur-xl rounded-2xl shadow-2xl transition-all duration-300">

                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-red-500 cursor-pointer"
                >
                    < X />
                </button>
                {children}
            </div>
        </div>
    );
}