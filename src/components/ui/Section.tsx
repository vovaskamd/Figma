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
    light: 'bg-[#faf8fb]',
    white: 'bg-white',
    gradient: 'bg-gradient-to-br from-[#faf8fb] via-white to-[#f9f5f7]',
    purplePink: 'bg-gradient-to-br from-purple-50 to-pink-50',
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
