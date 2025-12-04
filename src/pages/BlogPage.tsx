import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ArticleCard, Article } from '../components/blog/ArticleCard';
import { CategoryTabs, Category } from '../components/blog/CategoryTabs';
import { colors, inlineColors } from '../styles/design-system';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogPageProps {
  onNavigate?: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [activeCategory, setActiveCategory] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 9;

  const categories: Category[] = [
    { name: 'הכל', slug: 'all' },
    { name: 'טיפים', slug: 'tips' },
    { name: 'מדריכים', slug: 'guides' },
    { name: 'השראה', slug: 'inspiration' },
    { name: 'בלונים', slug: 'balloons' },
    { name: 'מגנטים', slug: 'magnets' },
    { name: 'פוטובוקס', slug: 'photobox' }
  ];

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
      id: 2,
      title: 'מדריך שלם לתכנון פוטובוקס מקצועי',
      description: 'כל מה שצריך לדעת על בחירת הציוד, התאורה והרקע המושלם לפוטובוקס באירוע שלכם',
      category: 'פוטובוקס',
      categorySlug: 'photobox',
      date: '12 בינואר 2025',
      image: 'https://images.unsplash.com/photo-1560128394-aa6ab35e41e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2Jvb3RoJTIwcHJvcHN8ZW58MXx8fHwxNzY0ODMxNzgzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'professional-photobox-guide'
    },
    {
      id: 3,
      title: 'השראה: צבעי הטרנד לאירועים ב-2025',
      description: 'גלו את שילובי הצבעים החמים ביותר לעיצוב אירועים יוקרתיים השנה',
      category: 'השראה',
      categorySlug: 'inspiration',
      date: '8 בינואר 2025',
      image: 'https://images.unsplash.com/photo-1759054788471-dc7815144604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGJhbGxvb25zJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY0ODcxNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'color-trends-2025'
    },
    {
      id: 4,
      title: 'איך לבחור את הצלם המושלם לברית',
      description: 'המדריך המלא לבחירת צלם מקצועי שידע לתפוס את הרגעים המרגשים ביותר',
      category: 'טיפים',
      categorySlug: 'tips',
      date: '5 בינואר 2025',
      image: 'https://images.unsplash.com/photo-1761110787206-2cc164e4913c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwZXZlbnQlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjQ4NzE3ODR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'choosing-perfect-photographer'
    },
    {
      id: 5,
      title: 'מגנטים מעוצבים: רעיון למזכרת מושלמת',
      description: 'למה מגנטים הם המתנה האהובה על האורחים וכיצד להפוך אותם לייחודיים',
      category: 'מגנטים',
      categorySlug: 'magnets',
      date: '2 בינואר 2025',
      image: 'https://images.unsplash.com/photo-1759433582178-5e16266a480b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0NzY2ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'custom-magnets-perfect-gift'
    },
    {
      id: 6,
      title: 'תכנון בר מצווה מא׳ עד ת׳',
      description: 'צ׳קליסט מלא לתכנון חגיגת בר מצווה מושלמת - מהזמנות ועד היום הגדול',
      category: 'מדריכים',
      categorySlug: 'guides',
      date: '28 בדצמבר 2024',
      image: 'https://images.unsplash.com/photo-1685031068031-1c780c557190?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwZGVjb3JhdGlvbnN8ZW58MXx8fHwxNzY0NzcyOTI4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'bar-mitzvah-planning-guide'
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
      id: 8,
      title: 'טרנדים חמים לאירועי 2025',
      description: 'מה חדש בעולם האירועים? הטרנדים שכל מתכנן חייב להכיר',
      category: 'השראה',
      categorySlug: 'inspiration',
      date: '20 בדצמבר 2024',
      image: 'https://images.unsplash.com/photo-1759054788471-dc7815144604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGJhbGxvb25zJTIwY29sb3JmdWx8ZW58MXx8fHwxNzY0ODcxNzg1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'event-trends-2025'
    },
    {
      id: 9,
      title: 'מיתוג אישי לברית: מה כדאי להדפיס?',
      description: 'רעיונות למיתוג אישי שיהפוך את האירוע שלכם לבלתי נשכח',
      category: 'טיפים',
      categorySlug: 'tips',
      date: '15 בדצמבר 2024',
      image: 'https://images.unsplash.com/photo-1759433582178-5e16266a480b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBsYW5uaW5nJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0NzY2ODgyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      slug: 'personal-branding-brit'
    }
  ];

  // Filter articles by category
  const filteredArticles = activeCategory === 'all' 
    ? allArticles 
    : allArticles.filter(article => article.categorySlug === activeCategory);

  // Pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = filteredArticles.slice(indexOfFirstArticle, indexOfLastArticle);

  const handleCategoryChange = (slug: string) => {
    setActiveCategory(slug);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#faf8fb]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
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
            מאמרים
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-slate-700 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            תוכן מקצועי, טיפים והשראה לאירוע המושלם
          </motion.p>

          {/* Category Tabs */}
          <CategoryTabs
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="container mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {currentArticles.map((article) => (
            <ArticleCard key={article.id} article={article} onNavigate={onNavigate} />
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