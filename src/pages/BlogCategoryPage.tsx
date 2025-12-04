import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArticleCard, Article } from '../components/blog/ArticleCard';
import { colors, inlineColors } from '../styles/design-system';
import { ChevronLeft, ChevronRight, Home } from 'lucide-react';

interface BlogCategoryPageProps {
  categorySlug?: string;
}

export function BlogCategoryPage({ categorySlug = 'balloons' }: BlogCategoryPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const categoryNames: Record<string, string> = {
    'tips': 'טיפים',
    'guides': 'מדריכים',
    'inspiration': 'השראה',
    'balloons': 'בלונים',
    'magnets': 'מגנטים',
    'photobox': 'פוטובוקס'
  };

  const categoryName = categoryNames[categorySlug] || 'מאמרים';

  // Sample articles (in real app, would be filtered by category)
  const allArticles: Article[] = [
    {
      id: 1,
      title: '10 טיפים לעיצוב בלונים מושלם לבר מצווה',
      description: 'גלו את הסודות של מעצבי הבלונים המקצועיים וצרו חוויה בלתי נשכחת לאורחים שלכם',
      category: 'בלונים',
      categorySlug: 'balloons',
      date: '15 בינואר 2025',
      image: 'https://images.unsplash.com/photo-1607430107755-eed0660a4212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwZGVjb3JhdGlvbiUyMHBhcnR5fGVufDF8fHx8MTc2NDg3MTc4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'balloon-design-tips-bar-mitzvah'
    },
    {
      id: 7,
      title: '5 רעיונות יצירתיים לקשתות בלונים',
      description: 'מקשתות קלאסיות ועד עיצובים מודרניים - השראה לכל סגנון',
      category: 'בלונים',
      categorySlug: 'balloons',
      date: '25 בדצמבר 2024',
      image: 'https://images.unsplash.com/photo-1607430107755-eed0660a4212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwZGVjb3JhdGlvbiUyMHBhcnR5fGVufDF8fHx8MTc2NDg3MTc4NHww&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'creative-balloon-arches'
    },
    {
      id: 10,
      title: 'בלונים אורגניים: הטרנד שכובש את עולם האירועים',
      description: 'מדריך מפורט לעיצוב בלונים אורגניים - מחומרים ועד טכניקות',
      category: 'בלונים',
      categorySlug: 'balloons',
      date: '10 בדצמבר 2024',
      image: 'https://images.unsplash.com/photo-1759054788471-dc7815144604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGJhbGxvb25zJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY0ODcxNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'organic-balloons-trend'
    }
  ];

  const filteredArticles = allArticles.filter(article => article.categorySlug === categorySlug);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf8fb]">
      {/* Breadcrumbs */}
      <section className="container mx-auto px-4 pt-8">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-sm"
          style={{ color: inlineColors.primary.medium }}
        >
          <a href="/" className="hover:underline flex items-center gap-1">
            <Home className="w-4 h-4" />
            ראשי
          </a>
          <span>›</span>
          <a href="/blog" className="hover:underline">מאמרים</a>
          <span>›</span>
          <span style={{ color: inlineColors.primary.deep }}>{categoryName}</span>
        </motion.div>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1
            className={`text-4xl md:text-6xl mb-6 ${colors.gradients.textSecondary}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categoryName}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {filteredArticles.length} מאמרים בקטגוריה זו
          </motion.p>
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <motion.div
            className="flex justify-center items-center gap-2 mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="p-2 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white"
              style={{ color: inlineColors.primary.deep }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => handlePageChange(pageNum)}
                className="w-10 h-10 rounded-lg transition-all"
                style={{
                  backgroundColor: currentPage === pageNum ? inlineColors.primary.deep : 'white',
                  color: currentPage === pageNum ? 'white' : inlineColors.primary.deep
                }}
              >
                {pageNum}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:bg-white"
              style={{ color: inlineColors.primary.deep }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </section>
    </div>
  );
}
