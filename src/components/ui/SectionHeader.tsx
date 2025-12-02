import { motion } from 'motion/react';
import { ReactNode } from 'react';
import { text } from '../../styles/design-system';

interface SectionHeaderProps {
  title: string | ReactNode;
  subtitle?: string;
  description?: string;
  gradient?: boolean;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description,
  gradient = true,
  centered = true,
  className = ''
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}
    >
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-slate-600 mb-2"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="inline-block relative"
      >
        <h2 className={gradient ? text.gradientHeading : text.heading}>
          {title}
          {gradient && (
            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#5d1f6a] to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          )}
        </h2>
      </motion.div>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-slate-600 text-lg mt-4 max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}