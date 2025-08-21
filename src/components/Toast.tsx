import { createPortal } from "react-dom";
import { useEffect } from "react";

type ToastProps = {
    message: string;
    onClose: () => void;
}

export default function Toast({ message, onClose}: ToastProps) {
    useEffect(() => {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }, [onClose]);

    return createPortal(
        <div className="bg-gray-800 text-white text-sm rounded px-2 py-1 z-50 pointer-events-none transition-opacity opacity-100">
            {message}
        </div>,
        document.body
    );
  }