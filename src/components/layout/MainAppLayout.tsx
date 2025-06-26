import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Main application layout component.
 * For the login page context, this layout serves as a full-screen container
 * that centers its content both vertically and horizontally, based on the provided
 * layout requirements.
 */
const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    <main
      className={cn(
        'min-h-screen w-full bg-background flex flex-col items-center justify-center p-4 sm:p-6',
        className
      )}
    >
      {children}
    </main>
  );
};

export default MainAppLayout;
