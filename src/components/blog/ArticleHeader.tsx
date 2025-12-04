import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { inlineColors } from '../../styles/design-system';

interface ArticleHeaderProps {
  title: string;
  category: string;
  date: string;
  heroImage: string;
}

export function ArticleHeader({ title, category, date, heroImage }: ArticleHeaderProps) {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      {/* Hero Image */}
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] relative overflow-hidden mb-12">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <ImageWithFallback
            src={heroImage}
            alt={title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.3) 100%)`
            }}
          />
        </motion.div>
      </div>

      {/* Title and Meta */}
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Category & Date */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span
              className="px-5 py-2 rounded-full text-sm"
              style={{
                backgroundColor: `${inlineColors.primary.deep}14`,
                color: inlineColors.primary.deep
              }}
            >
              {category}
            </span>
            <div className="flex items-center gap-2 text-slate-500">
              <Calendar className="w-4 h-4" />
              <span>{date}</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl leading-tight mb-8"
            style={{ color: inlineColors.primary.deep }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {title}
          </motion.h1>
        </div>
      </div>
    </motion.header>
  );
}
