import React, { createContext, useContext, useState, ReactNode } from 'react';

/**
 * =================================================================================================
 * MOCK AUTHENTICATION PROVIDER
 *
 * This is a mock implementation to simulate MSAL's behavior since I cannot add the
 * actual `@azure/msal-react` dependency. In a real application, you would remove this file
 * and use `MsalProvider` from `@azure/msal-react` in your `App.tsx` or `main.tsx`.
 *
 * The `useAuth` hook simulates `useMsal` and `useIsAuthenticated`.
 * =================================================================================================
 */

// This is a mock user object. In a real MSAL implementation,
// this would come from the account object provided by MSAL.
interface User {
    name: string;
    username: string; // Corresponds to 'preferred_username' from the ID token
}

interface AuthContextType {
    isAuthenticated: boolean;
    user: User | null;
    login: () => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<User | null>(null);

    const login = () => {
        // In a real app, you would call:
        // const { instance } = useMsal();
        // instance.loginPopup(loginRequest).catch(e => console.error(e));
        setIsAuthenticated(true);
        setUser({ name: "Demo User", username: "demo.user@ascendion.com" });
        console.log("Simulating user login. The application is now in an 'authenticated' state.");
    };

    const logout = () => {
        // In a real app, you would call:
        // const { instance } = useMsal();
        // instance.logoutPopup({ postLogoutRedirectUri: "/" });
        setIsAuthenticated(false);
        setUser(null);
        console.log("Simulating user logout.");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};