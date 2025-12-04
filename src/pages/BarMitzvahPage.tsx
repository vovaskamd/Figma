import { motion } from 'motion/react';
import { CheckCircle2, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { GalleryTemplate, GalleryImage } from '../components/GalleryTemplate';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { StatsSection } from '../components/StatsSection';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { InfiniteCarousel } from '../components/InfiniteCarousel';
import { useState } from 'react';
import { colors, inlineColors } from '../styles/design-system';

export function BarMitzvahPage() {
  const whatsappLink = (text: string) =>
    `https://api.whatsapp.com/send?phone=972542330001&text=${encodeURIComponent(text)}`;

  const [showAllImages, setShowAllImages] = useState(false);

  // Gallery images for bar mitzvah
  const barMitzvahImages: GalleryImage[] = [
    { id: 1, url: '/img/batmizvah/a-00002.jpg', title: 'בר מצווה', description: 'חגיגת בר מצווה מרהיבה' },
    { id: 2, url: '/img/batmizvah/a-00003.jpg', title: 'בלונים כחול זהב', description: 'עיצוב בלונים אלגנטי' },
    { id: 3, url: '/img/batmizvah/a-00009.jpg', title: 'עיצוב יהודי', description: 'קישוטים מיוחדים לבר מצווה' },
    { id: 4, url: '/img/batmizvah/a-00010.jpg', title: 'צילום אלגנטי', description: 'צילום מקצועי לאירוע' },
  ];

  const displayedImages = showAllImages ? barMitzvahImages : barMitzvahImages.slice(0, 10);

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
              לראות את חבילות בר המצווה
            </Button>
            <Button
              variant="secondary"
              href={whatsappLink('שלום, אני רוצה לשמוע על חבילות לבר מצווה')}
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
              שלחו לנו הודעה בוואטסאפ או התקשרו ישירות 📞
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <a
                href={whatsappLink('שלום, יש לי שאלה לגבי חבילות לבר מצווה')}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
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
              חבילות לבר מצווה
            </h2>
            <p className="text-slate-600">מעיצוב מרשים ועד צילום מושלם - הכל במקום אחד</p>
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
                חבילת בסיס
              </div>
              <h3 className="text-slate-800 mb-2">חבילת צילום לבר מצווה</h3>
              <p className="text-slate-600 mb-6">צילום מקצועי ומגנטים לאורחים</p>
              <div className="mb-6">
                <span style={{ color: inlineColors.primary.deep }} className="text-4xl">₪2000</span>
              </div>
              <ul className="space-y-3 mb-8 text-right">
                {[
                  'צילום סטילס ללא הגבלה',
                  'פיתוח מגנטים ללא הגבלה',
                  'צילום וידאו של הטקס',
                  'עריכת וידאו בסיסית',
                  '10 מגנטים גדולים למשפחה',
                  '6 בלוקים עץ עם תמונות',
                  'קישור לגלריית תמונות',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 style={{ color: inlineColors.primary.deep }} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('שלום, אשמח להזמין חבילת צילום לבר מצווה.\\nחבילה: חבילת צילום – 2000₪\\nמקום האירוע: [מקום]\\nתאריך: [תאריך]')}
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
              <h3 className="mb-2">חבילה משולבת פרימיום</h3>
              <p className="text-white/90 mb-6">עיצוב, צילום ומגנטים - החבילה המלאה</p>
              <div className="mb-6">
                <span className="text-5xl">₪3500</span>
              </div>
              <ul className="space-y-3 mb-8 text-right">
                {[
                  'קיר בלונים מעוצב 4-5 מטר',
                  'עיצוב בצבעי בר המצווה',
                  'שטיח אדום VIP כניסה',
                  'אביזרים מיוחדים (ספרי תורה דקורטיביים, כוכבי דוד)',
                  'צילום סטילס ללא הגבלה',
                  'צילום וידאו מקצועי',
                  'עריכת וידאו מתקדמת',
                  'פיתוח מגנטים ללא הגבלה',
                  '15 מגנטים גדולים למשפחה',
                  '10 בלוקים עץ',
                  'אלבום דיגיטלי מעוצב',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-white flex-shrink-0 mt-0.5" />
                    <span className="text-white/95">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('שלום, אשמח להזמין חבילה משולבת לבר מצווה.\\nחבילה: חבילה משולבת פרימיום – 3500₪\\nמקום האירוע: [מקום]\\nתאריך: [תאריך]')}
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
                VIP פרימיום
              </div>
              <h3 className="text-slate-800 mb-2">חבילת VIP מלאה</h3>
              <p className="text-slate-600 mb-6">האולטימטיבית - לאירוע מושלם</p>
              <div className="mb-6">
                <span className="text-slate-600 text-4xl">מחיר לפי הזמנה</span>
              </div>
              <ul className="space-y-3 mb-8 text-right">
                {[
                  'קיר בלונים ענק מותאם אישית',
                  'עיצוב מלא של אולם האירועים',
                  'שולחנות מעוצבים למשפחה',
                  'פינת צילום מיוחדת עם תאורה',
                  'צילום סטילס + 2 צלמים',
                  'צילום וידאו קולנועי',
                  'עריכת וידאו מתקדמת עם אפקטים',
                  'דרון לצילומים אוויריים',
                  'מגנטים ללא הגבלה',
                  'אלבום מודפס פרימיום',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 style={{ color: inlineColors.primary.deep }} className="w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('שלום, אני מעוניין בחבילת VIP מלאה לבר מצווה')}
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

          {!showAllImages && barMitzvahImages.length > 10 && (
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
                הצג עוד תמונות ({barMitzvahImages.length - 10} נוספות)
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
          <Star className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-white mb-6">מוכנים להפוך את בר המצווה לבלתי נשכח?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            שלחו לנו הודעה קצרה בוואטסאפ עם תאריך ומיקום, ונחזור אליכם עם הצעה מסודרת לחבילת בלונים, צילום או חבילה משולבת.
          </p>
          <a
            href={whatsappLink('שלום, אני רוצה לשמוע על חבילות לבר מצווה')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
          >
            דברו איתנו על חבילת בר מצווה
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
            <h2 className="text-slate-800 mb-6">Argaman — חבילות בר מצווה מושלמות</h2>
            <div className="text-slate-600 space-y-4 text-right">
              <p>
                Argaman מציעה חבילות מקיפות לבר מצווה הכוללות עיצוב בלונים מרשים, צילום מקצועי וצילום מגנטים. החבילות שלנו מיועדות להפוך את יום בר המצווה לחוויה בלתי נשכחת עם כל הפרטים הקטנים שעושים את ההבדל.
              </p>
              <p>
                בין אם אתם מחפשים חבילת צילום פשוטה, חבילה משולבת עם עיצוב בלונים, או חבילת VIP מלאה - יש לנו את הפתרון המושלם עבורכם. כל החבילות שלנו כוללות ציוד מקצועי, צוות מנוסה ושירות אישי ומסור.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
