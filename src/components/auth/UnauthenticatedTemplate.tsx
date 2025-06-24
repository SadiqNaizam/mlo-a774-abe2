import React from 'react';
import { useAuth } from './AuthContext';

/**
 * This component mimics the behavior of MSAL's `UnauthenticatedTemplate`.
 * It renders its children only when the user is NOT authenticated.
 *
 * In a real MSAL app, you would import this from `@azure/msal-react`.
 */
export const UnauthenticatedTemplate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { isAuthenticated } = useAuth();
    return !isAuthenticated ? <>{children}</> : null;
};