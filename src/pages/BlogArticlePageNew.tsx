import { useEffect } from 'react';
import { Home } from 'lucide-react';
import { ArticleHeader } from '../components/blog/ArticleHeader';
import { ArticleImage } from '../components/blog/ArticleImage';
import { InfoBox } from '../components/blog/InfoBox';
import { TableOfContents } from '../components/blog/TableOfContents';
import { RelatedArticles } from '../components/blog/RelatedArticles';
import { ArticleCTA } from '../components/blog/ArticleCTA';
import { Article } from '../components/blog/ArticleCard';
import { inlineColors } from '../styles/design-system';
import { motion } from 'motion/react';

export function BlogArticlePageNew() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Table of Contents
  const tocItems = [
    { id: 'section-1', title: 'בחירת ערכת צבעים מתאימה' },
    { id: 'section-2', title: 'קשתות בלונים אורגניות' },
    { id: 'section-3', title: 'נקודות מוקד אסטרטגיות' },
    { id: 'section-4', title: 'תאורה משלימה' },
    { id: 'section-5', title: 'מיתוג אישי' },
    { id: 'section-6', title: 'שילוב טקסטורות וגדלים' },
    { id: 'section-7', title: 'בלוני ענק להדגשה' },
    { id: 'section-8', title: 'תכנון מראש' },
  ];

  // Sample related articles
  const relatedArticles: Article[] = [
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
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#fafafa' }}>
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
          <a href="/blog/category/balloons" className="hover:underline">בלונים</a>
        </motion.div>
      </section>

      {/* Article Header */}
      <ArticleHeader
        title="10 טיפים לעיצוב בלונים מושלם לבר מצווה"
        category="בלונים"
        date="15 בינואר 2025"
        heroImage="https://images.unsplash.com/photo-1701318227062-b7b76c82ca45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMGNlbGVicmF0aW9uJTIwYmxvZ3xlbnwxfHx8fDE3NjQ4NzE4Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080"
      />

      {/* Article Content with TOC */}
      <div className="container mx-auto px-4 pb-20">
        <div className="max-w-7xl mx-auto flex gap-12">
          {/* Main Content */}
          <article className="flex-1 max-w-3xl mx-auto lg:mx-0">
            <motion.div
              className="prose prose-lg max-w-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {/* Introduction */}
              <p className="text-xl text-slate-700 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
                עיצוב בלונים הוא אחד האלמנטים המרכזיים בכל חגיגת בר מצווה מוצלחת. בלונים יכולים להפוך חלל רגיל לסביבה קסומה ומרהיבה, וליצור אווירה חגיגית שהאורחים לא ישכחו.
              </p>

              <p className="text-lg text-slate-700 leading-relaxed mb-12" style={{ lineHeight: '1.8' }}>
                במאמר זה נחלוק איתכם 10 טיפים מקצועיים שיעזרו לכם ליצור עיצוב בלונים מושלם לאירוע שלכם.
              </p>

              {/* Section 1 */}
              <h2 id="section-1" className="text-3xl md:text-4xl mb-6 mt-16" style={{ color: inlineColors.primary.deep, scrollMarginTop: '120px' }}>
                1. בחירת ערכת צבעים מתאימה
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{ lineHeight: '1.8' }}>
                הצעד הראשון והחשוב ביותר הוא בחירת פלטת צבעים שמשקפת את אישיות החוגג ואת הסגנון הכללי של האירוע.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
                מומלץ לבחור 2-3 צבעים עיקריים ולהוסיף גוון מבריק או מטאלי אחד להדגשה. שילובים פופולריים כוללים כחול וזהב, כסף ולבן, או צבעי הפסטל העדינים שכל כך חמים השנה.
              </p>

              <InfoBox type="tip">
                <strong>טיפ מקצועי:</strong> התאימו את צבעי הבלונים לצבעים בהזמנות ובעיצוב הכללי של האירוע ליצירת מראה אחיד ומקצועי.
              </InfoBox>

              {/* Section 2 */}
              <h2 id="section-2" className="text-3xl md:text-4xl mb-6 mt-16" style={{ color: inlineColors.primary.deep, scrollMarginTop: '120px' }}>
                2. קשתות בלונים אורגניות
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{ lineHeight: '1.8' }}>
                קשתות בלונים אורגניות הן הטרנד החם ביותר כיום. שילוב של בלונים בגדלים שונים, עם תוספת של ירק, פרחים או אלמנטים דקורטיביים אחרים יוצר מראה ייחודי ומרשים.
              </p>

              <ArticleImage
                src="https://images.unsplash.com/photo-1758870041148-31d28fdf34d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmFsbG9vbiUyMGRlY29yYXRpb24lMjBzZXR1cHxlbnwxfHx8fDE3NjQ4NzMxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="קשת בלונים אורגנית מעוצבת"
                caption="דוגמה לקשת בלונים אורגנית עם שילוב גדלים וצבעים"
              />

              <p className="text-lg text-slate-700 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
                הסוד הוא ליצור תנועה וטקסטורה על ידי שימוש בבלונים בגדלים מגוונים ולא בדפוס אחיד.
              </p>

              {/* Section 3 */}
              <h2 id="section-3" className="text-3xl md:text-4xl mb-6 mt-16" style={{ color: inlineColors.primary.deep, scrollMarginTop: '120px' }}>
                3. נקודות מוקד אסטרטגיות
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{ lineHeight: '1.8' }}>
                במקום לפזר בלונים בכל מקום, צרו נקודות מוקד אסטרטגיות במרחב האירוע. זה יכול להיות:
              </p>

              <ul className="text-lg text-slate-700 leading-relaxed mb-8 mr-6 space-y-3" style={{ lineHeight: '1.8' }}>
                <li className="pr-2">• ליד שולחן הכיבודים</li>
                <li className="pr-2">• בכניסה לאולם</li>
                <li className="pr-2">• מאחורי שולחן המשפחה</li>
                <li className="pr-2">• סביב הבמה או אזור הריקודים</li>
              </ul>

              <InfoBox type="info">
                כך תקבלו אפקט מרשים יותר תוך שימוש בכמות סבירה של בלונים, וחסכון משמעותי בעלויות.
              </InfoBox>

              {/* Section 4 */}
              <h2 id="section-4" className="text-3xl md:text-4xl mb-6 mt-16" style={{ color: inlineColors.primary.deep, scrollMarginTop: '120px' }}>
                4. תאורה משלימה
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{ lineHeight: '1.8' }}>
                תאורה נכונה יכולה להפוך עיצוב בלונים טוב למדהים. שימוש בתאורת LED בתוך בלונים שקופים, או הארת קשתות בלונים מאחור יוצרים אפקט קסום במיוחד בצילומי ערב.
              </p>

              <ArticleImage
                src="https://images.unsplash.com/photo-1607371675343-4ecae34fba3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGRlY29yYXRpb25zJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjQ4NzMxOTd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="בלונים עם תאורה"
                caption="בלונים מוארים יוצרים אווירה קסומה"
              />

              <p className="text-lg text-slate-700 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
                שקלו להשקיע בתאורה מקצועית שתשלים את עיצוב הבלונים שלכם ותיצור אווירה מיוחדת.
              </p>

              {/* Section 5 */}
              <h2 id="section-5" className="text-3xl md:text-4xl mb-6 mt-16" style={{ color: inlineColors.primary.deep, scrollMarginTop: '120px' }}>
                5. מיתוג אישי
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
                הוסיפו נגיעה אישית על ידי הדפסת שם החוגג, תאריך האירוע, או ציטוט משמעותי על בלונים מיוחדים. זה יוצר קשר רגשי ומזכרת ייחודית שהאורחים יזכרו. בלונים מותאמים אישית יכולים להיות האלמנט שמעלה את כל העיצוב לרמה הבאה.
              </p>

              {/* Section 6 */}
              <h2 id="section-6" className="text-3xl md:text-4xl mb-6 mt-16" style={{ color: inlineColors.primary.deep, scrollMarginTop: '120px' }}>
                6. שילוב טקסטורות וגדלים
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{ lineHeight: '1.8' }}>
                אל תהססו לשלב בין סוגים שונים של בלונים - מטאליים, שקופים, מאט, ובלונים עם קונפטי בפנים.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
                השילוב של טקסטורות שונות ומגוון גדלים יוצר עניין ויזואלי ועומק. זה מה שמבדיל בין עיצוב חובבני לעיצוב מקצועי.
              </p>

              <InfoBox type="warning">
                <strong>שימו לב:</strong> וודאו שכל הבלונים מאותה איכות ויצרן כדי למנוע התפוצצויות או ירידה בלחץ אוויר במהלך האירוע.
              </InfoBox>

              {/* Section 7 */}
              <h2 id="section-7" className="text-3xl md:text-4xl mb-6 mt-16" style={{ color: inlineColors.primary.deep, scrollMarginTop: '120px' }}>
                7. בלוני ענק להדגשה
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
                בלון ענק אחד או שניים יכולים לשמש כאלמנט מרכזי מרשים. בין אם זה ספרות ענקיות של גיל החוגג (13), או בלון שקוף ענק מלא בבלונים קטנים יותר - האלמנטים הגדולים האלה יוצרים wow factor ומושכים את העין.
              </p>

              {/* Section 8 */}
              <h2 id="section-8" className="text-3xl md:text-4xl mb-6 mt-16" style={{ color: inlineColors.primary.deep, scrollMarginTop: '120px' }}>
                8. תכנון מראש
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-6" style={{ lineHeight: '1.8' }}>
                עיצוב בלונים דורש תכנון זמן. בלונים מתמלאים בהליום יכולים להחזיק בין 8 ל-12 שעות בממוצע, לכן חשוב לתזמן את הניפוח לפני האירוע.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-8" style={{ lineHeight: '1.8' }}>
                אם אתם עובדים עם מעצב מקצועי, תאמו איתו הגעה לפחות 2-3 שעות לפני תחילת האירוע כדי להבטיח שהכל יהיה מושלם.
              </p>

              {/* Conclusion */}
              <div className="bg-white rounded-2xl p-8 my-16 shadow-lg" style={{ borderRight: `4px solid ${inlineColors.primary.medium}` }}>
                <h3 className="text-2xl md:text-3xl mb-6" style={{ color: inlineColors.primary.deep }}>
                  לסיכום
                </h3>
                <p className="text-lg text-slate-700 leading-relaxed mb-4" style={{ lineHeight: '1.8' }}>
                  עיצוב בלונים מוצלח הוא שילוב של תכנון קפדני, יצירתיות ועין לפרטים. השקיעו זמן בבחירת הצבעים הנכונים, תכננו את המיקום של הבלונים בחכמה, ואל תפחדו להיות יצירתיים.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed" style={{ lineHeight: '1.8' }}>
                  עם הטיפים האלה, תוכלו ליצור עיצוב בלונים שיהפוך את בר המצווה שלכם לבלתי נשכח.
                </p>
              </div>
            </motion.div>
          </article>

          {/* Table of Contents - Desktop Sidebar */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <TableOfContents items={tocItems} />
          </div>
        </div>
      </div>

      {/* Table of Contents - Mobile Floating Button */}
      <div className="lg:hidden">
        <TableOfContents items={tocItems} />
      </div>

      {/* Related Articles */}
      <div style={{ backgroundColor: '#ffffff' }}>
        <RelatedArticles articles={relatedArticles} title="עוד מאמרים בנושא" />
      </div>

      {/* CTA Section */}
      <ArticleCTA 
        whatsappText="שלום, קראתי את המאמר על עיצוב בלונים ואני מעוניין/ת לשמוע עוד"
      />
    </div>
  );
}
