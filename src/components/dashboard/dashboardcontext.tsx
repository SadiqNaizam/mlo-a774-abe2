import React, { createContext, useContext, useState, ReactNode } from 'react';

type DashboardTab = 'preview' | 'code' | 'logs' | 'artifacts';

interface DashboardContextType {
    activeTab: DashboardTab;
    setActiveTab: (tab: DashboardTab) => void;
}

const DashboardContext = createContext<DashboardContextType | undefined>(undefined);

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
    const [activeTab, setActiveTab] = useState<DashboardTab>('code');

    const value = { activeTab, setActiveTab };

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    );
};

export const useDashboard = () => {
    const context = useContext(DashboardContext);
    if (context === undefined) {
        throw new Error('useDashboard must be used within a DashboardProvider');
    }
    return context;
};