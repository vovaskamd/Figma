import { motion } from 'motion/react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface ArticleImageProps {
  src: string;
  alt: string;
  caption?: string;
}

export function ArticleImage({ src, alt, caption }: ArticleImageProps) {
  return (
    <motion.figure
      className="my-12"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div className="rounded-2xl overflow-hidden shadow-lg">
        <ImageWithFallback
          src={src}
          alt={alt}
          className="w-full h-auto"
        />
      </div>
      {caption && (
        <figcaption className="text-center text-sm text-slate-500 mt-4 italic">
          {caption}
        </figcaption>
      )}
    </motion.figure>
  );
}
