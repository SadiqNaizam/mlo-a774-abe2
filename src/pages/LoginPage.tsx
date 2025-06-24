import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginButton } from '@/components/auth/LoginButton';
import { useAuth } from '@/components/auth/AuthContext';

const LoginPage: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background">
      <div className='flex items-center mb-6'>
        <h1 className="text-3xl font-bold tracking-widest text-foreground">
          ASCENDION
        </h1>
      </div>
      <p className="text-muted-foreground mb-8">Please sign in to access the dashboard.</p>
      <LoginButton />
    </div>
  );
};

export default LoginPage;