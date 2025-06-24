import React from 'react';
import { useAuth } from './AuthContext';
import { Button } from '@/components/ui/button';
import { LogIn } from 'lucide-react';

/**
 * In a real MSAL app, this component would use the `useMsal` hook
 * to call `instance.loginRedirect()` or `instance.loginPopup()`.
 * For this demonstration, it uses our mock `useAuth` hook.
 */
export const LoginButton: React.FC = () => {
    const { login } = useAuth();

    return (
        <Button onClick={() => login()}>
            <LogIn className="mr-2 h-4 w-4" /> Sign In
        </Button>
    );
};