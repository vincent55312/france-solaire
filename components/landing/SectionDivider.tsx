'use client';

import React from 'react';

interface SectionDividerProps {
  type?: 'wave' | 'curve' | 'flow' | 'arc';
  variant?: 'green' | 'yellow' | 'gradient';
  flip?: boolean;
  className?: string;
}

const SectionDivider: React.FC<SectionDividerProps> = ({ 
  type = 'wave', 
  variant = 'green',
  flip = false,
  className = ''
}) => {
  // Generate unique IDs to avoid conflicts
  const id = Math.random().toString(36).substr(2, 9);
  
  const getColorClasses = () => {
    switch (variant) {
      case 'yellow':
        return 'fill-amber-400';
      case 'green':
        return 'fill-emerald-500';
      default:
        return '';
    }
  };

  const Wave = () => (
    <div className={`relative w-full h-20 ${className}`}>
      <svg
        className={`absolute inset-0 w-full h-full ${flip ? 'scale-y-[-1]' : ''}`}
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        {variant === 'gradient' && (
          <defs>
            <linearGradient id={`gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="50%" stopColor="#F59E0B" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        )}
        <path
          fill={variant === 'gradient' ? `url(#gradient-${id})` : undefined}
          className={variant !== 'gradient' ? getColorClasses() : ''}
          d="M0,60 C480,120 960,0 1440,60 L1440,120 L0,120 Z"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -50,0; 0,0"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );

  const Curve = () => (
    <div className={`relative w-full h-16 ${className}`}>
      <svg
        className={`absolute inset-0 w-full h-full ${flip ? 'scale-y-[-1]' : ''}`}
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        {variant === 'gradient' && (
          <defs>
            <linearGradient id={`curve-gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        )}
        <path
          fill={variant === 'gradient' ? `url(#curve-gradient-${id})` : undefined}
          className={variant !== 'gradient' ? getColorClasses() : ''}
          d="M0,80 C720,20 720,20 1440,80 L1440,80 L0,80 Z"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 0,-5; 0,0"
            dur="6s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );

  const Flow = () => (
    <div className={`relative w-full h-24 ${className}`}>
      <svg
        className={`absolute inset-0 w-full h-full ${flip ? 'scale-y-[-1]' : ''}`}
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
      >
        {variant === 'gradient' && (
          <defs>
            <linearGradient id={`flow-gradient-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F59E0B" />
              <stop offset="50%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#10B981" />
            </linearGradient>
          </defs>
        )}
        
        {/* First layer */}
        <path
          fill={variant === 'gradient' ? `url(#flow-gradient-${id})` : undefined}
          className={variant !== 'gradient' ? getColorClasses() : ''}
          d="M0,100 C360,70 720,70 1080,100 C1260,70 1350,70 1440,100 L1440,100 L0,100 Z"
          opacity="0.8"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 100,0; 0,0"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>
        
        {/* Second layer */}
        <path
          fill={variant === 'yellow' ? '#FCD34D' : '#34D399'}
          d="M0,100 C480,50 960,50 1440,100 L1440,100 L0,100 Z"
          opacity="0.6"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; -80,0; 0,0"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );

  const Arc = () => (
    <div className={`relative w-full h-12 ${className}`}>
      <svg
        className={`absolute inset-0 w-full h-full ${flip ? 'scale-y-[-1]' : ''}`}
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
      >
        {variant === 'gradient' && (
          <defs>
            <radialGradient id={`arc-gradient-${id}`} cx="50%" cy="0%" r="100%">
              <stop offset="0%" stopColor="#FCD34D" />
              <stop offset="100%" stopColor="#F59E0B" />
            </radialGradient>
          </defs>
        )}
        <path
          fill={variant === 'gradient' ? `url(#arc-gradient-${id})` : undefined}
          className={variant !== 'gradient' ? getColorClasses() : ''}
          d="M0,60 Q720,10 1440,60 L1440,60 L0,60 Z"
        >
          <animateTransform
            attributeName="transform"
            type="scale"
            values="1,1; 1.02,0.98; 1,1"
            dur="7s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );

  const renderDivider = () => {
    switch (type) {
      case 'curve':
        return <Curve />;
      case 'flow':
        return <Flow />;
      case 'arc':
        return <Arc />;
      default:
        return <Wave />;
    }
  };

  return (
    <div className="w-full relative">
      {renderDivider()}
    </div>
  );
};

export default SectionDivider; 