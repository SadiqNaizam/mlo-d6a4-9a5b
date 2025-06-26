import React from 'react';
import { Box } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BrandLogoProps {
  className?: string;
}

const BrandLogo: React.FC<BrandLogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <Box className="h-8 w-8 text-primary" strokeWidth={2.5} />
      <span className="text-2xl font-bold text-foreground">InsideBox</span>
    </div>
  );
};

export default BrandLogo;
