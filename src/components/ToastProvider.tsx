import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react"
import { createPortal } from "react-dom";

interface Toast {
    id: number;
    message: string;
    target: HTMLElement;
}

interface ToastContextType {
    showToast: (message: string, target: HTMLElement) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (message: string, target: HTMLElement) => {
        const id = Date.now();
        setToasts((prev) => [...prev, { id, message, target }]);

        // Auto Remove after 3s
        setTimeout(() => {
            setToasts((prev) => prev.filter((toast) => toast.id !== id));
        }, 1500);
    }

    return (
        <ToastContext.Provider value={{ showToast }}>
            {children}
            {createPortal(
                <div className="fixed inset-0 pointer-events-none z-[9999]">
                    {toasts.map((toast) => {
                        const rect = toast.target.getBoundingClientRect();
                        const style: React.CSSProperties = {
                            top: rect.bottom + window.screenY + 6,
                            left: rect.left + rect.width / 2 + window.scrollX,
                        };

                        return (
                            <div
                                key={toast.id}
                                style={style}
                                className="absolute -translate-x-1/2 bg-gray-900 text-white text-sm px-3 py-1.5 rounded-lg shadow-md whitespace-nowrap animate-fade-in-out"
                            >
                                {toast.message}
                            </div>
                        );
                    })}
                </div>,
                document.body
            )}
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) throw Error("useToast must be within ToastProvider");
    return context;
}