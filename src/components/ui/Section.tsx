import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { animations } from '../../styles/design-system';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'light' | 'white' | 'gradient' | 'purplePink';
  animate?: boolean;
  padding?: 'default' | 'large';
}

export function Section({ 
  children, 
  className = '', 
  background = 'white',
  animate = true,
  padding = 'default'
}: SectionProps) {
  const backgrounds = {
    light: 'bg-[#fdfbfc]',
    white: 'bg-white',
    gradient: 'bg-gradient-to-br from-[#fdfbfc] via-white to-[#f5e5eb]',
    purplePink: 'bg-gradient-to-br from-[#f5e5eb] to-[#fdfbfc]',
  };

  const paddings = {
    default: 'py-16 md:py-20',
    large: 'py-20 md:py-24',
  };

  const content = (
    <section className={`${backgrounds[background]} ${paddings[padding]} ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );

  if (animate) {
    return (
      <motion.div
        {...animations.fadeInUp}
      >
        {content}
      </motion.div>
    );
  }

  return content;
}