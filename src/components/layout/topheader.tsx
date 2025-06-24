import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, User, Settings, Moon, CodeSquare } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTheme } from '../ThemeProvider';
import { useAuth } from '../auth/AuthContext';
import { AuthenticatedTemplate } from '../auth/AuthenticatedTemplate';
import { LoginButton } from '../auth/LoginButton';
import { LogoutButton } from '../auth/LogoutButton';
import { useDashboard } from '../dashboard/DashboardContext';

const TopHeader: React.FC = () => {
  const { setTheme, theme } = useTheme();
  const { user } = useAuth();
  const { setActiveTab } = useDashboard();

  const handleExportToVSCode = () => {
    // In a real desktop-integrated application, you would use the vscode:// protocol.
    // For example: window.location.href = 'vscode://file/path/to/your/project';
    // Since we cannot know the absolute path here, we'll simulate with a notification.
    toast.info("This would open the project in VS Code", {
      description: "This is a simulated action. A real implementation would require the project's local file path.",
      action: {
        label: "OK",
        onClick: () => {},
      },
    });
  };

  return (
    <header className="sticky top-0 z-10 flex h-14 items-center justify-between border-b border-border bg-background px-6">
      <div>
        {/* This space can be used for breadcrumbs or page titles */}
      </div>
      <div className="flex items-center space-x-4">
        <Button 
          variant="ghost" 
          size="icon" 
          className="text-muted-foreground hover:text-foreground"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
        
        <AuthenticatedTemplate>
          <Button 
            variant="outline" 
            className="border-border text-foreground hover:bg-muted"
            onClick={() => setActiveTab('artifacts')}
          >
            Export
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="h-9 w-9 cursor-pointer">
                {/* In a real app, you might use a user photo from the graph API */}
                <AvatarImage src={`https://i.pravatar.cc/150?u=${user?.username}`} alt="User Avatar" />
                <AvatarFallback>{user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 bg-card border-border">
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none text-foreground">{user?.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    {user?.username}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
               <DropdownMenuItem onClick={handleExportToVSCode}>
                <CodeSquare className="mr-2 h-4 w-4" />
                <span>Export to VSCode</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <LogoutButton />
            </DropdownMenuContent>
          </DropdownMenu>
        </AuthenticatedTemplate>
      </div>
    </header>
  );
};

export default TopHeader;