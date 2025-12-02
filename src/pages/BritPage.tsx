import { motion } from 'motion/react';
import { CheckCircle2, Baby } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { GalleryTemplate, GalleryImage } from '../components/GalleryTemplate';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { StatsSection } from '../components/StatsSection';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { InfiniteCarousel } from '../components/InfiniteCarousel';
import { useState } from 'react';
import { colors, inlineColors } from '../styles/design-system';

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
      <section className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className={`text-5xl md:text-7xl mb-6 ${colors.gradients.textSecondary}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            צוותים של אלופים
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-slate-700 mb-8 leading-relaxed"
          >
            <span>צלם מגנטים</span>
            <span className="mx-2">+</span>
            <span>מעצב בלונים</span>
            <div className="mt-4 text-2xl md:text-3xl">
              = אירגון נח ואירוע מושלם
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap gap-4 justify-center mt-12"
          >
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
          </motion.div>
        </motion.div>
      </section>

      {/* Infinite Carousel */}
      <InfiniteCarousel />

      {/* Contact CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h2
              className="text-3xl md:text-4xl mb-6 text-slate-800"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              אנחנו כאן כדי לענות על כל השאלות שלכם
            </motion.h2>

            <motion.p
              className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              אפשר לשלוח לנו הודעה אם התינוק ישן ואתם לא רוצים להעיר אותו 😴
              <br />
              או להתקשר אם הוא כבר התעורר 📞
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href={whatsappLink('שלום, יש לי שאלה לגבי חבילות לברית')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-lg">וואטסאפ</span>
              </a>

              <a
                href="tel:+972542330001"
                style={{
                  background: `linear-gradient(to right, ${inlineColors.primary.deep}, ${inlineColors.primary.medium})`
                }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg">להתקשר</span>
              </a>
            </motion.div>

            <motion.p
              className="text-sm text-slate-500 mt-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Intro Text */}
      <section className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div style={{
          background: `linear-gradient(to bottom right, ${inlineColors.primary.paleBlush}, white, ${inlineColors.primary.blush})`
        }} className="absolute inset-0">
          <motion.div
            style={{
              background: `linear-gradient(to bottom right, ${inlineColors.primary.deep}1A, transparent)`
            }}
            className="absolute top-0 left-0 w-96 h-96 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            style={{
              background: `linear-gradient(to top left, ${inlineColors.primary.light}26, transparent)`
            }}
            className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            style={{
              background: `linear-gradient(to right, ${inlineColors.primary.medium}14, ${inlineColors.primary.deep}14)`
            }}
            className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-2xl"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.h2
              className={`text-4xl md:text-5xl mb-6 ${colors.gradients.textSecondary}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              חבילה אחת שדואגת לכל הזיכרונות מהאירוע
            </motion.h2>
            
            <motion.p
              className="text-2xl md:text-3xl text-slate-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              מקבלים יותר באותו מחיר
            </motion.p>

            {/* Decorative accent */}
            <motion.div
              className="mt-8 flex justify-center gap-2"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: inlineColors.primary.deep }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: inlineColors.primary.medium }} />
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: inlineColors.primary.light }} />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Packages Section */}
      <section id="packages" className={`py-16 ${colors.gradients.bgSoft}`}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-slate-800 mb-4">
              <span style={{ backgroundColor: inlineColors.primary.deep }} className="inline-block transform -rotate-2 text-white px-3 py-1 rounded ml-2">שלוש</span>
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
              <div 
                style={{ backgroundColor: inlineColors.primary.deep }}
                className="inline-block text-white px-4 py-1 rounded-full text-sm mb-4"
              >
                צילום לברית
              </div>
              <h3 className="text-slate-800 mb-2">חבילת צילום לברית הפופולרית</h3>
              <p className="text-slate-600 mb-6">סטילס, וידאו, מגנטים</p>
              <div className="mb-6">
                <span style={{ color: inlineColors.primary.deep }} className="text-4xl">₪1500</span>
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
                    <CheckCircle2 style={{ color: inlineColors.primary.deep }} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('שלום, אשמח להזמין חבילת צילום לברית מילה.\nחבילה: חבילת צילום לברית הפופולרית – 1500₪\nמקום האירוע: [מקום]\nתאריך: [תאריך]')}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: inlineColors.primary.deep }}
                className="block w-full text-center px-6 py-3 text-white rounded-full hover:opacity-90 transition-all"
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
              style={{
                background: `linear-gradient(to bottom right, ${inlineColors.primary.deep}, ${inlineColors.primary.light})`
              }}
              className="text-white rounded-2xl shadow-2xl transform scale-105 p-8 relative"
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
                style={{ color: inlineColors.primary.deep }}
                className="block w-full text-center px-6 py-3 bg-white rounded-full hover:bg-gray-50 transition-colors"
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
              <div 
                style={{ backgroundColor: inlineColors.primary.deep }}
                className="inline-block text-white px-4 py-1 rounded-full text-sm mb-4"
              >
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
                    <CheckCircle2 style={{ color: inlineColors.primary.deep }} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('שלום, אני מעוניין בחבילת בלונים גדולה לברית')}
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: inlineColors.primary.deep }}
                className="block w-full text-center px-6 py-3 text-white rounded-full hover:opacity-90 transition-all"
              >
                לפרטים והזמנה
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Stats Section */}
      <StatsSection />

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
                style={{
                  background: `linear-gradient(to right, ${inlineColors.primary.deep}, ${inlineColors.primary.medium})`
                }}
                className="px-8 py-3 text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105"
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