import React from 'react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

// NOTE: The Google logo is a specific brand icon not available in lucide-react.
// To match the design requirements accurately, an SVG is used directly as a component.
// This approach avoids adding new dependencies and adheres to component-based structure.
const GoogleIcon = () => (
  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-4 w-4">
    <path d="M21.543 9.715h-9.98v3.8h5.786c-.52 2.44-2.72 3.8-5.786 3.8-3.414 0-6.172-2.7-6.172-6.115s2.758-6.115 6.172-6.115c1.943 0 3.343.823 4.12 1.586l2.843-2.786C16.329 1.586 14.114 0 11.563 0 5.186 0 0 4.857 0 10.885c0 6.029 5.186 10.886 11.563 10.886 6.657 0 11.285-4.57 11.285-11.2s-.343-1.857-.805-2.857z" fill="#4285F4"/>
    <path d="M21.543 9.715h-9.98v3.8h5.786c-.52 2.44-2.72 3.8-5.786 3.8-3.414 0-6.172-2.7-6.172-6.115s2.758-6.115 6.172-6.115c1.943 0 3.343.823 4.12 1.586l2.843-2.786C16.329 1.586 14.114 0 11.563 0 5.186 0 0 4.857 0 10.885c0 6.029 5.186 10.886 11.563 10.886 6.657 0 11.285-4.57 11.285-11.2s-.343-1.857-.805-2.857z" fill="#34A853" transform="rotate(100 12 12)"/>
    <path d="M21.543 9.715h-9.98v3.8h5.786c-.52 2.44-2.72 3.8-5.786 3.8-3.414 0-6.172-2.7-6.172-6.115s2.758-6.115 6.172-6.115c1.943 0 3.343.823 4.12 1.586l2.843-2.786C16.329 1.586 14.114 0 11.563 0 5.186 0 0 4.857 0 10.885c0 6.029 5.186 10.886 11.563 10.886 6.657 0 11.285-4.57 11.285-11.2s-.343-1.857-.805-2.857z" fill="#FBBC05" transform="rotate(230 12 12)"/>
    <path d="M21.543 9.715h-9.98v3.8h5.786c-.52 2.44-2.72 3.8-5.786 3.8-3.414 0-6.172-2.7-6.172-6.115s2.758-6.115 6.172-6.115c1.943 0 3.343.823 4.12 1.586l2.843-2.786C16.329 1.586 14.114 0 11.563 0 5.186 0 0 4.857 0 10.885c0 6.029 5.186 10.886 11.563 10.886 6.657 0 11.285-4.57 11.285-11.2s-.343-1.857-.805-2.857z" fill="#EA4335" transform="rotate(310 12 12)"/>
  </svg>
);

const SecondaryButton: React.FC<ButtonProps> = ({ children, className, ...props }) => {
  return (
    <Button
      variant="outline"
      className={cn("w-full flex items-center justify-center gap-2 font-medium", className)}
      {...props}
    >
      <GoogleIcon />
      {children}
    </Button>
  );
};

export default SecondaryButton;
