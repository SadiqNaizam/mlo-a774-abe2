import React from 'react';
import { useAuth } from './AuthContext';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * In a real MSAL app, this component would use the `useMsal` hook
 * to call `instance.logoutRedirect()` or `instance.logoutPopup()`.
 * For this demonstration, it uses our mock `useAuth` hook.
 */
export const LogoutButton: React.FC = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <DropdownMenuItem onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
        </DropdownMenuItem>
    );
};