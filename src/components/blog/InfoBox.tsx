import { motion } from 'motion/react';
import { Info, Lightbulb, AlertCircle } from 'lucide-react';
import { inlineColors } from '../../styles/design-system';

interface InfoBoxProps {
  children: React.ReactNode;
  type?: 'info' | 'tip' | 'warning';
}

export function InfoBox({ children, type = 'info' }: InfoBoxProps) {
  const config = {
    info: {
      icon: Info,
      bg: '#f5edf8',
      border: '#d8c7dc',
      iconColor: inlineColors.primary.medium
    },
    tip: {
      icon: Lightbulb,
      bg: '#fff9f0',
      border: '#E8B15C',
      iconColor: '#E8B15C'
    },
    warning: {
      icon: AlertCircle,
      bg: '#fff5f5',
      border: '#fca5a5',
      iconColor: '#ef4444'
    }
  };

  const { icon: Icon, bg, border, iconColor } = config[type];

  return (
    <motion.div
      className="my-8 p-6 rounded-2xl"
      style={{
        backgroundColor: bg,
        borderRight: `4px solid ${border}`
      }}
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <Icon className="w-6 h-6" style={{ color: iconColor }} />
        </div>
        <div className="flex-1 text-slate-700 leading-relaxed">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
