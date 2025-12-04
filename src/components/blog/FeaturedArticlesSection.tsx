import { motion } from 'motion/react';
import { ArticleCard, Article } from './ArticleCard';
import { ArrowLeft } from 'lucide-react';
import { colors, inlineColors } from '../../styles/design-system';

interface FeaturedArticlesSectionProps {
  title?: string;
  subtitle?: string;
  articles: Article[];
  showViewAll?: boolean;
}

export function FeaturedArticlesSection({ 
  title = 'מהבלוג שלנו',
  subtitle = 'טיפים והשראה לאירוע המושלם',
  articles,
  showViewAll = true
}: FeaturedArticlesSectionProps) {
  return (
    <section className="py-20" style={{ backgroundColor: '#ffffff' }}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className={`text-3xl md:text-5xl mb-4 ${colors.gradients.textSecondary}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-xl text-slate-600"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {subtitle}
          </motion.p>
        </motion.div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {articles.slice(0, 3).map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* View All Button */}
        {showViewAll && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="/blog"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-white shadow-lg hover:shadow-xl transition-all"
              style={{
                background: `linear-gradient(to right, ${inlineColors.primary.deep}, ${inlineColors.primary.medium})`
              }}
            >
              <span>לכל המאמרים</span>
              <ArrowLeft className="w-5 h-5" />
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
