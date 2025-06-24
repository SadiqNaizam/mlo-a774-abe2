import React from 'react';
import CodeWindow from '@/components/Dashboard/CodeWindow';
import LogViewer from '@/components/Dashboard/LogViewer';
import TaskCompletionList from '@/components/Dashboard/TaskCompletionList';
import SidebarNav from '@/components/layout/SidebarNav';
import TopHeader from '@/components/layout/TopHeader';
import { AuthenticatedTemplate } from '@/components/auth/AuthenticatedTemplate';
import { UnauthenticatedTemplate } from '@/components/auth/UnauthenticatedTemplate';
import { LoginButton } from '@/components/auth/LoginButton';

/**
 * Renders the main dashboard page for the Ascendion Dashboard Clone.
 *
 * This page integrates the primary layout components (`SidebarNav`, `TopHeader`)
 * with the main content organism components (`TaskCompletionList`, `CodeWindow`, `LogViewer`)
 * into a single, cohesive view. The layout follows the specified structure with a fixed
 * sidebar and a scrollable main content area.
 *
 * It is now protected and will only render for authenticated users.
 */
const IndexPage: React.FC = () => {
  return (
    <>
      <UnauthenticatedTemplate>
        <div className="flex flex-col items-center justify-center h-screen bg-background">
          <div className='flex items-center mb-6'>
            <h1 className="text-3xl font-bold tracking-widest text-foreground">
              ASCENDION
            </h1>
          </div>
          <p className="text-muted-foreground mb-8">Please sign in to access the dashboard.</p>
          {/*
            In a real MSAL app, you might have a dedicated login page.
            For simplicity, we use a login button here.
          */}
          <LoginButton />
        </div>
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <div className="grid grid-cols-[auto_1fr] min-h-screen bg-background text-foreground">
          {/* Column 1: Fixed Sidebar */}
          <SidebarNav />

          {/* Column 2: Main Content Area (Header + Scrollable Body) */}
          <div className="flex flex-col max-h-screen overflow-hidden">
            {/* Sticky Header */}
            <TopHeader />

            {/* Scrollable Body */}
            <main className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6">
              {/* 
                This flex-based layout allows the top and bottom sections to grow proportionally.
                The `min-h-0` is crucial for flex children to prevent them from overflowing the container.
              */}
              
              {/* Primary Content Row: Task List and Code Window */}
              <div className="flex-grow-[3] grid grid-cols-1 lg:grid-cols-2 gap-6 min-h-0">
                <TaskCompletionList />
                <CodeWindow />
              </div>

              {/* Secondary Content Row: Log Viewer */}
              <div className="flex-grow-[2] min-h-0">
                <LogViewer />
              </div>
            </main>
          </div>
        </div>
      </AuthenticatedTemplate>
    </>
  );
};

export default IndexPage;