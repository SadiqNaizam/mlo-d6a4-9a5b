import React from 'react';
import { cn } from '@/lib/utils';

interface TextLinksProps {
  className?: string;
}

const TextLinks: React.FC<TextLinksProps> = ({ className }) => {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>
      Don't have an account?{' '}
      <a href="#" className="font-medium text-primary hover:underline">
        Sign up
      </a>
    </p>
  );
};

export default TextLinks;
