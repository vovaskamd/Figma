import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { inlineColors } from '../../styles/design-system';

export interface Article {
  id: number;
  title: string;
  description: string;
  category: string;
  categorySlug: string;
  date: string;
  image: string;
  slug: string;
}

interface ArticleCardProps {
  article: Article;
  onNavigate?: (page: string) => void;
}

export function ArticleCard({ article, onNavigate }: ArticleCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate('blog-article');
    }
  };

  return (
    <motion.a
      href={`/blog/${article.slug}`}
      onClick={handleClick}
      className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Image */}
      <div className="relative overflow-hidden aspect-[3/2]">
        <ImageWithFallback
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Category Tag */}
        <div
          className="absolute top-4 right-4 px-4 py-2 rounded-full text-sm backdrop-blur-sm"
          style={{
            backgroundColor: `${inlineColors.primary.deep}E6`,
            color: inlineColors.primary.paleBlush
          }}
        >
          {article.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title */}
        <h3
          className="text-xl md:text-2xl mb-3 line-clamp-2 group-hover:opacity-80 transition-opacity"
          style={{ color: inlineColors.primary.deep }}
        >
          {article.title}
        </h3>

        {/* Description */}
        <p className="text-slate-600 mb-4 line-clamp-2 leading-relaxed">
          {article.description}
        </p>

        {/* Date */}
        <div className="flex items-center gap-2 text-sm" style={{ color: inlineColors.primary.medium }}>
          <Calendar className="w-4 h-4" />
          <span>{article.date}</span>
        </div>
      </div>
    </motion.a>
  );
}