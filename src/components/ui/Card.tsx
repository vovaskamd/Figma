import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { cards } from '../../styles/design-system';

interface CardProps {
  children: ReactNode;
  variant?: 'base' | 'featured';
  hover?: boolean;
  className?: string;
  delay?: number;
}

export function Card({ 
  children, 
  variant = 'base',
  hover = true,
  className = '',
  delay = 0
}: CardProps) {
  const baseClass = cards[variant];
  const hoverClass = hover && variant === 'base' ? 'hover:-translate-y-2' : '';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.7, 
        delay,
        ease: [0.22, 1, 0.36, 1]
      }}
      className={`${baseClass} ${hoverClass} ${className} p-8`}
    >
      {children}
    </motion.div>
  );
}
