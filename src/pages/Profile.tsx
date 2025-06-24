import React from 'react';
import { Link } from 'react-router-dom';
import SidebarNav from '@/components/layout/SidebarNav';
import TopHeader from '@/components/layout/TopHeader';
import { AuthenticatedTemplate } from '@/components/auth/AuthenticatedTemplate';
import { UnauthenticatedTemplate } from '@/components/auth/UnauthenticatedTemplate';
import { LoginButton } from '@/components/auth/LoginButton';
import { useAuth } from '@/components/auth/AuthContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

const ProfilePage: React.FC = () => {
  const { user } = useAuth();

  return (
    <>
      <UnauthenticatedTemplate>
        <div className="flex flex-col items-center justify-center h-screen bg-background">
          <div className='flex items-center mb-6'>
            <h1 className="text-3xl font-bold tracking-widest text-foreground">
              ASCENDION
            </h1>
          </div>
          <p className="text-muted-foreground mb-8">Please sign in to access your profile.</p>
          <LoginButton />
        </div>
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <div className="grid grid-cols-[auto_1fr] min-h-screen bg-background text-foreground">
          <SidebarNav />
          <div className="flex flex-col max-h-screen overflow-hidden">
            <TopHeader />
            <main className="flex-1 overflow-y-auto px-6 py-4">
                <div className="flex items-center mb-6">
                    <Button asChild variant="outline" size="icon" className="mr-4">
                        <Link to="/">
                            <ArrowLeft className="h-4 w-4" />
                            <span className="sr-only">Back to Dashboard</span>
                        </Link>
                    </Button>
                    <h1 className="text-2xl font-semibold text-foreground">User Profile</h1>
                </div>
              
                <Card className="max-w-2xl mx-auto bg-card/50 border-border/50">
                    <CardHeader>
                        <CardTitle className="text-xl">Profile Information</CardTitle>
                        <CardDescription>This is your user profile information.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <Avatar className="h-20 w-20">
                                <AvatarImage src={`https://i.pravatar.cc/150?u=${user?.username}`} alt="User Avatar" />
                                <AvatarFallback className="text-3xl">{user?.name?.charAt(0).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-2xl font-bold text-foreground">{user?.name}</p>
                                <p className="text-md text-muted-foreground">{user?.username}</p>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                                <p className="text-lg text-foreground">{user?.name}</p>
                            </div>
                             <div>
                                <label className="text-sm font-medium text-muted-foreground">Email / Username</label>
                                <p className="text-lg text-foreground">{user?.username}</p>
                            </div>
                             <div>
                                <label className="text-sm font-medium text-muted-foreground">Account Status</label>
                                <p className="text-lg text-foreground">Active</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
          </div>
        </div>
      </AuthenticatedTemplate>
    </>
  );
};

export default ProfilePage;