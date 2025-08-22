import React, { createContext, useContext, useState, useEffect } from "react"
import { savePasswords, loadPasswords } from "../utils/storage"

export interface PasswordEntry {
  id: number;
  name: string;
  email: string;
  password: string;
  notes: string;
  icon: string;
}

interface PasswordContextType {
    passwords: PasswordEntry[];
    addPassword: (entry: PasswordEntry) => void;
    deletePassword: (id: number) => void;
}

const PasswordContext = createContext<PasswordContextType | undefined>(undefined);

export const PasswordProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [passwords, setPasswords] = useState<PasswordEntry[]>([]);

    useEffect(() => {
        setPasswords(loadPasswords());
    }, []);
    
    const addPassword = (entry: PasswordEntry) => {
        const updated = [...passwords, entry];
        setPasswords(updated);
        savePasswords(updated);
    };

    const deletePassword = (id: number) => {
        const updated = passwords.filter((p) => p.id !== id);
        setPasswords(updated);
        savePasswords(updated);
    };

    return (
        <PasswordContext.Provider value={{ passwords, addPassword, deletePassword }}> {children}
        </PasswordContext.Provider>
    );
};

export const usePassowrds = () => {
    const context = useContext(PasswordContext);
    if (!context) {
        throw new Error("usePasswords must be used within PasswordProvider");
    }
    return context;
}