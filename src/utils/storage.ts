export const savePasswords = (passwords: any[]) => {
    localStorage.setItem("passwords", JSON.stringify(passwords))
};

export const loadPasswords = (): any[] => {
    const data = localStorage.getItem("passwords");
    return data ? JSON.parse(data) : [];
}