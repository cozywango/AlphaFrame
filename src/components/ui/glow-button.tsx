
import React from 'react';

interface GlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode;
}

const GlowButton = ({ children = 'Apply', className, ...props }: GlowButtonProps) => {
    return (
        <div className={`relative group ${className || ''}`}>
            {/* 
        Halo Container 
        - Positioned behind the button
        - Extends outwards
      */}
            <div
                className="absolute inset-0 rounded-[25px] transition-all duration-500 ease-out 
                   opacity-80 group-hover:opacity-100
                   group-hover:-inset-1
                   blur-[0.5px]"
                style={{
                    zIndex: 0,
                    background: 'linear-gradient(90deg, #f59e0b, #06b6d4)',
                    // Create the grid of dots using a mask
                    maskImage: 'radial-gradient(circle at center, black 1.5px, transparent 1.5px)',
                    WebkitMaskImage: 'radial-gradient(circle at center, black 1.5px, transparent 1.5px)',
                    maskSize: '6px 6px',
                    WebkitMaskSize: '6px 6px',
                    maskRepeat: 'repeat',
                    WebkitMaskRepeat: 'repeat',
                }}
            />

            {/* 
        Outer soft glow (for that radiating light effect)
        This matches the gradient but provides a diffuse light behind the sharp dots
      */}
            <div
                className="absolute inset-0 rounded-[25px] opacity-40 group-hover:opacity-75 transition-all duration-500 blur-md
                   group-hover:-inset-2"
                style={{
                    zIndex: -1,
                    background: 'linear-gradient(90deg, #f59e0b, #06b6d4)',
                }}
            />

            {/* Actual Button */}
            <button
                className="relative z-10 w-[120px] h-[48px] bg-[#1a1a1a] text-white font-medium text-sm tracking-wide rounded-[25px] border border-white/10 overflow-hidden outline-none transition-transform active:scale-95"
                {...props}
            >
                {children}
            </button>
        </div>
    );
};

export { GlowButton };
