import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        try {
            const stored = localStorage.getItem("auramind_user");
            return stored ? JSON.parse(stored) : null;
        } catch {
            return null;
        }
    });

    function login(userData) {
        localStorage.setItem("auramind_user", JSON.stringify(userData));
        setUser(userData);
    }

    function logout() {
        localStorage.removeItem("auramind_user");
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
    return ctx;
}
