import React from 'react';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img 
        src="/humease_logo_horizontal_en.png" 
        alt="Humease Logo" 
        className="h-5 md:h-6 w-auto object-contain brightness-0 invert"
      />
    </div>
  );
}
