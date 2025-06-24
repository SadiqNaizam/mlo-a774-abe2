import React from 'react';
import { useAuth } from './AuthContext';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';

/**
 * In a real MSAL app, this component would use the `useMsal` hook
 * to call `instance.logoutRedirect()` or `instance.logoutPopup()`.
 * For this demonstration, it uses our mock `useAuth` hook.
 */
export const LogoutButton: React.FC = () => {
    const { logout } = useAuth();

    return (
        <DropdownMenuItem onClick={() => logout()}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
        </DropdownMenuItem>
    );
};