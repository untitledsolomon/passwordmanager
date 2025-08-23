import { ShieldCheck, ShieldAlert, CopyX, KeyRound } from "lucide-react";
import type { PasswordEntry } from "../components/PasswordManager";

// Check Password strength
export const isStrongPassword = (pw: string): boolean => {
    const strongRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&]).{12,}$/;
    return strongRegex.test(pw)
};

// Count duplicates
export const countDuplicates = (arr: string[]): number => {
    const seen = new Map<string, number>();
    let dupes = 0;

    arr.forEach(pw => {
        seen.set(pw, (seen.get(pw) || 0) + 1);
    });

    seen.forEach(count => {
        if (count > 1) dupes += count -1; // count extra occurrences
    });

    return dupes;
}

// build metrics
export const buildPasswordsMetrics = (passwords: PasswordEntry[]) => {
    const pwString = passwords.map(p => p.password);

    const strongCount = pwString.filter(isStrongPassword).length
    const weakCount = pwString.length - strongCount;
    const duplicateCount = countDuplicates(pwString)

    return [
    { label: "Saved Passwords", value: passwords.length, icon: ShieldCheck, accent: "from-red-500 to-indigo-500" },
    { label: "Strong", value: strongCount, icon: KeyRound, accent: "from-green-500 to-teal-500" },
    { label: "Weak", value: weakCount, icon: ShieldAlert, accent: "from-yellow-400 to-orange-400" },
    { label: "Duplicate", value: duplicateCount, icon: CopyX, accent: "from-purple-500 to-pink-500" },
  ];
}

