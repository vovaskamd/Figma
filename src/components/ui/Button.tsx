import { ReactNode } from 'react';
import { buttons } from '../../styles/design-system';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'large' | 'outline';
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({ 
  children, 
  href, 
  onClick, 
  variant = 'primary',
  className = '',
  target,
  rel 
}: ButtonProps) {
  const baseClass = buttons[variant];
  const fullClass = `${baseClass} ${className}`;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Handle anchor links (smooth scroll)
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    onClick?.();
  };

  if (href) {
    return (
      <a 
        href={href} 
        className={fullClass}
        target={target}
        rel={rel}
        onClick={handleClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      onClick={onClick} 
      className={fullClass}
    >
      {children}
    </button>
  );
}
