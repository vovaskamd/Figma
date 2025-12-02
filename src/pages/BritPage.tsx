import { motion } from 'motion/react';
import { CheckCircle2, Baby } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { GalleryTemplate, GalleryImage } from '../components/GalleryTemplate';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { useState } from 'react';

export function BritPage() {
  const whatsappLink = (text: string) =>
    `https://api.whatsapp.com/send?phone=972542330001&text=${encodeURIComponent(text)}`;

  const [showAllImages, setShowAllImages] = useState(false);

  // Gallery images for brit
  const britImages: GalleryImage[] = [
    { id: 1, url: 'https://images.unsplash.com/photo-1683395826489-911a209cbca8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwYnJpdCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NDUyNTEyNnww&ixlib=rb-4.1.0&q=80&w=1080', title: 'חגיגת ברית', description: 'אירוע ברית מושלם עם עיצוב מיוחד' },
    { id: 2, url: 'https://images.unsplash.com/photo-1627779543640-7ccec5c7fa62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwYmFsbG9vbnMlMjBiYWJ5fGVufDF8fHx8MTc2NDQwMzk3M3ww&ixlib=rb-4.1.0&q=80&w=1080', title: 'בלונים כחולים', description: 'בלונים בגוון כחול עדין לברית בן' },
    { id: 3, url: 'https://images.unsplash.com/photo-1738330943863-0f45d97e3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwZGVjb3JhdGlvbnN8ZW58MXx8fHwxNzY0NTI1MTI2fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'עיצוב לתינוק', description: 'קישוטים מרהיבים לאירוע התינוק' },
    { id: 4, url: 'https://images.unsplash.com/photo-1610901158478-af3eac4a9339?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY0NTI1MTI3fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'צילום ניובורן', description: 'צילום מקצועי לתינוקות' },
    { id: 5, url: 'https://images.unsplash.com/photo-1687186511607-68b95444ea33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwcGFydHklMjBiYWxsb29uc3xlbnwxfHx8fDE3NjQ1MjUxMjd8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'מסיבת תינוקות', description: 'בלונים צבעוניים למסיבת תינוקות' },
    { id: 6, url: 'https://images.unsplash.com/photo-1624596255415-a5ac41f66a28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwYm95JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0NTI1MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'חגיגת בן', description: 'אירוע חגיגי לברית בן' },
    { id: 7, url: 'https://images.unsplash.com/photo-1759433582490-54f92e32c6fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBiYWxsb29ucyUyMGRlY29yfGVufDF8fHx8MTc2NDUyNTEyOXww&ixlib=rb-4.1.0&q=80&w=1080', title: 'בלונים פסטל', description: 'עיצוב בלונים בגוונים עדינים' },
    { id: 8, url: 'https://images.unsplash.com/photo-1609761315264-40ec563f230d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwZXZlbnQlMjBwaG90b2dyYXBoeXxlbnwxfHx8fDE3NjQ1MjUxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'צילום אירועים', description: 'צילום מקצועי לאירועי תינוקות' },
    { id: 9, url: 'https://images.unsplash.com/photo-1763013259213-0c3d639bbcc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwbWlsZXN0b25lJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0NTI1MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'אבני דרך', description: 'חגיגת אבני דרך מיוחדות' },
    { id: 10, url: 'https://images.unsplash.com/photo-1599627888307-1a2ff920709e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwYXJjaCUyMGJhYnl8ZW58MXx8fHwxNzY0NTI1MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'קשת בלונים', description: 'קשת בלונים מרהיבה לברית' },
    { id: 11, url: 'https://images.unsplash.com/photo-1683821291961-e79e6d10a2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YW50JTIwY2FtZXJhJTIwcG9sYXJvaWR8ZW58MXx8fHwxNzY0NTI1MTI5fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'מצלמת פולרויד', description: 'צילום מיידי לזיכרון' },
    { id: 12, url: 'https://images.unsplash.com/photo-1760329290960-c048628d92c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwd2hpdGUlMjBiYWxsb29uc3xlbnwxfHx8fDE3NjQ1MjUxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'בלונים כחול לבן', description: 'שילוב מושלם של כחול ולבן' },
    { id: 13, url: 'https://images.unsplash.com/photo-1758548204223-b830a3224f73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2VsZWJyYXRpb24lMjBkZWNvcnxlbnwxfHx8fDE3NjQ1MjUxMzB8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'קישוט חגיגי', description: 'עיצוב חגיגי מושלם' },
    { id: 14, url: 'https://images.unsplash.com/photo-1734987522171-32d3475bb755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGRlY29yYXRpb25zJTIwcGFzdGVsfGVufDF8fHx8MTc2NDUyNTEzMHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'קישוטי מסיבה', description: 'קישוטים בגוונים פסטליים' },
    { id: 15, url: 'https://images.unsplash.com/photo-1741900461118-fd681b35addb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwcGhvdG8lMjBwcm9wc3xlbnwxfHx8fDE3NjQ1MjUxMzF8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'אביזרי צילום', description: 'אביזרים מקסימים לצילום תינוקות' },
  ];

  const displayedImages = showAllImages ? britImages : britImages.slice(0, 10);

  return (
    <div className="min-h-screen bg-[#faf8fb]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <SectionHeader
          subtitle="Argaman • בלונים וצילום לברית"
          title="חבילות לברית מילה ובריתה"
          description="כאן סוגרים מראש צלם לברית, בלונים לברית וחבילת ברית מלאה – בלי לרדוף אחרי כמה ספקים, בלי בלגן במחירים ובלי לחץ ביום הכי מרגש."
          gradient={false}
        />
        <div className="flex flex-wrap gap-4 justify-center">
          <Button variant="primary" href="#packages">
            לראות את חבילות הברית
          </Button>
          <Button 
            variant="secondary"
            href={whatsappLink('שלום, אני רוצה לשמוע על חבילות לברית')}
            target="_blank"
            rel="noopener noreferrer"
          >
            דברו איתנו בוואטסאפ
          </Button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Intro Text */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="חבילות לברית – בלונים, צילום ומגנטים במקום אחד"
            description="קל ופשוט - בנינו לכם 3 חבילות מדויקות לאירוע"
            gradient={false}
          />
        </div>
      </section>

      {/* Main Packages Section */}
      <section id="packages" className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-slate-800 mb-4">
              <span className="inline-block transform -rotate-2 bg-purple-600 text-white px-3 py-1 rounded ml-2">שלוש</span>
              חבילות לברית
            </h2>
            <p className="text-slate-600">קירות צילום ושילובי בלונים שיתאימו גם לברית באולם וגם בבית</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Package 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8"
            >
              <div className="inline-block bg-purple-500 text-white px-4 py-1 rounded-full text-sm mb-4">
                צילום לברית
              </div>
              <h3 className="text-slate-800 mb-2">חבילת צילום לברית הפופולרית</h3>
              <p className="text-slate-600 mb-6">סטילס, וידאו, מגנטים</p>
              <div className="mb-6">
                <span className="text-purple-600 text-4xl">₪1500</span>
              </div>
              <ul className="space-y-3 mb-8 text-right">
                {[
                  'צילום סטילס ללא הגבלה',
                  'פיתוח מגנטים ללא הגבלה',
                  'צילום וידאו של טקס הברית',
                  'גודל המגנט 7.5x10 ס״מ',
                  '6 מגנטים גדולים (15x20 ס״מ)',
                  '4 בלוקים עץ',
                  'קישור לגלריית תמונות',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('שלום, אשמח להזמין חבילת צילום לברית מילה.\nחבילה: חבילת צילום לברית הפופולרית – 1500₪\nמקום האירוע: [מקום]\nתאריך: [תאריך]')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                לפרטים והזמנה
              </a>
            </motion.div>

            {/* Package 2 - Featured */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-2xl shadow-2xl transform scale-105 p-8 relative"
            >
              <div className="absolute top-0 right-0 bg-yellow-400 text-slate-800 px-4 py-1 rounded-bl-2xl rounded-tr-2xl text-sm">
                הכי משתלם
              </div>
              <div className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm mb-4 mt-6">
                מומלץ ביותר
              </div>
              <h3 className="mb-2">חבילה משולבת</h3>
              <p className="text-white/90 mb-6">צילום ובלונים במקום אחד</p>
              <div className="mb-6">
                <span className="text-5xl">₪2500</span>
              </div>
              <ul className="space-y-3 mb-8 text-right">
                {[
                  'קיר בלונים מעוצב כ-3 וחצי מטר',
                  'מבחר צבעים',
                  'מגוון אביזרים (דובים, פפיונים, שטיחים, קוביות ועוד...)',
                  'צילום סטילס ללא הגבלה',
                  'צילום וידאו של טקס הברית',
                  'פיתוח מגנטים ללא הגבלה',
                  'גודל המגנט 7.5x10 ס״מ',
                  '6 מגנטים גדולים (15x20 ס״מ)',
                  '4 בלוקים עץ',
                  'קישור לגלריית תמונות',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/95">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('שלום, אשמח להזמין חבילה צילום ועיצוב בלונים לברית מילה.\nחבילה: חבילה לברית המשולבת – 2500₪\nמקום האירוע: [מקום]\nתאריך: [תאריך]')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-white text-purple-600 rounded-full hover:bg-purple-50 transition-colors"
              >
                לפרטים והזמנה
              </a>
            </motion.div>

            {/* Package 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8"
            >
              <div className="inline-block bg-purple-500 text-white px-4 py-1 rounded-full text-sm mb-4">
                לאולם גדול
              </div>
              <h3 className="text-slate-800 mb-2">קיר בלונים גדול לברית</h3>
              <p className="text-slate-600 mb-6">מיועד לאולמות ואירועים עם הרבה אורחים</p>
              <div className="mb-6">
                <span className="text-slate-600 text-4xl">מחיר לפי הזמנה</span>
              </div>
              <ul className="space-y-3 mb-8 text-right">
                {[
                  'קיר בלונים מעוצב כ-3 וחצי מטר',
                  'מבחר צבעים',
                  'מגוון אביזרים (דובים, פפיונים, שטיחים, קוביות ועוד...)',
                  'פירוק והרכבה',
                  'אופציה לקישוטי מרכזי שולחן',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('שלום, אני מעוניין בחבילת בלונים גדולה לברית')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors"
              >
                לפרטים והזמנה
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <GalleryTemplate 
            images={displayedImages}
            title="הגלריה שלנו"
            subtitle=""
          />
          
          {!showAllImages && britImages.length > 10 && (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mt-8"
            >
              <button
                onClick={() => setShowAllImages(true)}
                className="px-8 py-3 bg-gradient-to-r from-[#6b1a3d] to-[#4d184d] text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105"
              >
                הצג עוד תמונות ({britImages.length - 10} נוספות)
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center relative z-10"
        >
          <Baby className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-white mb-6">רוצים לסגור חבילה לברית בלי כאב ראש?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            שלחו לנו הודעה קצרה בוואטסאפ עם תאריך ומיקום, ונחזור אליכם עם הצעה מסודרת לחבילת בלונים, צילום או חבילה משולבת.
          </p>
          <a
            href={whatsappLink('שלום, אני רוצה לשמוע על חבילות לברית')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
          >
            דברו איתנו על חבילת ברית
          </a>
        </motion.div>
      </section>

      {/* SEO Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-slate-800 mb-6">Argaman — עיצוב והפקת אירועים לברית</h2>
            <div className="text-slate-600 space-y-4 text-right">
              <p>
                Argaman מתמחה בעיצוב בלונים לברית, צילום מגנטים וצלם לברית במרכז הארץ. בדף זה ריכזנו חבילות לברית – חבילות בלונים, חבילות צילום לברית וחבילות משולבות שבהן גם הבלונים וגם הצילום באחריות ספק אחד.
              </p>
              <p>
                בין אם אתם מחפשים רק צלם לברית, רק בלונים לברית או חבילה מלאה לברית באולם או בבית – אפשר להתחיל מבחירת חבילה, להתאים צבעים ותאריך, ולקבל הצעת מחיר מדויקת בוואטסאפ. המטרה שלנו היא לתת לכם שקט, ברור ופשוט, לקראת אחד הרגעים הכי מרגשים בחיים.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}