import React from 'react';
import { Home, LayoutPanelLeft, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface NavItem {
  href: string;
  label: string;
  icon: React.ElementType;
  active?: boolean;
}

const navItems: NavItem[] = [
  {
    href: '#',
    label: 'Home',
    icon: Home,
    active: false,
  },
  {
    href: '#',
    label: 'Layout',
    icon: LayoutPanelLeft,
    active: true,
  },
];

const SidebarNav: React.FC = () => {
  return (
    <aside className="w-64 flex flex-col h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border p-4">
      <div className="h-14 flex items-center px-2 mb-4">
        <h1 className="text-2xl font-bold tracking-widest text-foreground">
          ASCENDION
        </h1>
      </div>
      
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className={cn(
              'w-full justify-start text-base font-normal h-11 px-3',
              'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              item.active && 'bg-sidebar-accent text-sidebar-accent-foreground'
            )}
            asChild
          >
            <a href={item.href}>
              <item.icon className="mr-3 h-5 w-5" />
              {item.label}
            </a>
          </Button>
        ))}
      </nav>

      <div className="mt-auto border-t border-sidebar-border/50 pt-4">
         <Button
            variant="ghost"
            className={cn(
              'w-full justify-start text-base font-normal h-11 px-3',
              'hover:bg-sidebar-accent hover:text-sidebar-accent-foreground',
              'text-muted-foreground hover:text-sidebar-accent-foreground'
            )}
          >
            <History className="mr-3 h-5 w-5" />
            History
        </Button>
      </div>
    </aside>
  );
};

export default SidebarNav;
