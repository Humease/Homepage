import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
  lang?: 'en' | 'kr';
  forceWhite?: boolean;
}

export default function Logo({ 
  className = "", 
  variant = 'horizontal', 
  lang = 'en',
  forceWhite = true 
}: LogoProps) {
  const logoSrc = `/humease_logo_${variant}_${lang}.png`;
  
  return (
    <div className={`flex items-center select-none ${className}`}>
      <img 
        src={logoSrc} 
        alt="Humease Logo" 
        className={`h-5 md:h-6 w-auto object-contain ${forceWhite ? 'brightness-0 invert' : ''}`}
      />
    </div>
  );
}
