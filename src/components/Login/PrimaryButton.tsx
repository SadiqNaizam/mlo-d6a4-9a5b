import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface PrimaryButtonProps extends ButtonProps {
  isLoading?: boolean;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({ children, className, isLoading, ...props }) => {
  return (
    <Button 
      className={cn("w-full", className)}
      {...props}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : null}
      {children}
    </Button>
  );
};

export default PrimaryButton;
