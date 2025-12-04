import { motion } from 'motion/react';
import { ArticleCard, Article } from './ArticleCard';
import { inlineColors, colors } from '../../styles/design-system';

interface RelatedArticlesProps {
  articles: Article[];
  title?: string;
  onNavigate?: (page: string) => void;
}

export function RelatedArticles({ articles, title = 'מאמרים נוספים', onNavigate }: RelatedArticlesProps) {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2
          className={`text-3xl md:text-4xl text-center mb-12 ${colors.gradients.textSecondary}`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </section>
  );
}