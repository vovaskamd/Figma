import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Phone, CheckCircle2, Sparkles, Heart, Baby, Gift } from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (showIntro) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 2;
        });
      }, 40);

      return () => clearInterval(timer);
    }
  }, [showIntro]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setShowIntro(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  const whatsappLink = (text: string) => 
    `https://api.whatsapp.com/send?phone=972542330001&text=${encodeURIComponent(text)}`;

  return (
    <div className="min-h-screen" dir="rtl" lang="he">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-0 z-50"
          >
            <div className="relative w-full h-full overflow-hidden bg-gradient-to-br from-purple-600 via-purple-400 to-pink-200">
              {/* Animated balloons background */}
              <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${(i * 12) % 100}%`,
                      bottom: '-10%',
                    }}
                    animate={{
                      y: [0, -window.innerHeight - 100],
                      x: [0, Math.sin(i) * 40],
                    }}
                    transition={{
                      duration: 8 + i * 0.5,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.4,
                    }}
                  >
                    <div
                      className="w-16 h-20 rounded-full shadow-lg"
                      style={{
                        background: [
                          'linear-gradient(to bottom, #9333ea, #a855f7)',
                          'linear-gradient(to bottom, #ec4899, #f472b6)',
                          'linear-gradient(to bottom, #c084fc, #d8b4fe)',
                          'linear-gradient(to bottom, #a855f7, #c084fc)',
                          'linear-gradient(to bottom, #d946ef, #e879f9)',
                          'linear-gradient(to bottom, #f0abfc, #f5d0fe)',
                          'linear-gradient(to bottom, #7e22ce, #9333ea)',
                          'linear-gradient(to bottom, #e879f9, #f0abfc)',
                          'linear-gradient(to bottom, #f472b6, #fbcfe8)',
                          'linear-gradient(to bottom, #a855f7, #d8b4fe)',
                        ][i % 10],
                      }}
                    >
                      <div className="w-full h-full rounded-full relative">
                        <div
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-600/30"
                          style={{ top: '100%' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Confetti particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(25)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: '-5%',
                      background: ['#9333ea', '#ec4899', '#a855f7', '#d946ef', '#f0abfc'][i % 5],
                      borderRadius: Math.random() > 0.5 ? '50%' : '0',
                    }}
                    animate={{
                      y: [0, window.innerHeight + 50],
                      x: [0, (Math.random() - 0.5) * 200],
                      rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: 'linear',
                    }}
                  />
                ))}
              </div>

              {/* Main content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                {/* Logo animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 180,
                    damping: 15,
                    delay: 0.2,
                  }}
                  className="mb-8"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 rounded-full bg-white/40 blur-xl"
                    />
                    <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-full border-4 border-white shadow-2xl">
                      <Camera className="w-16 h-16 text-purple-600" />
                      <motion.div
                        className="absolute -top-2 -right-2"
                        animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Baby className="w-8 h-8 text-pink-500" />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Title animation */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-center mb-6"
                >
                  <h1 className="text-white drop-shadow-lg mb-2">Argaman</h1>
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6 text-yellow-300" />
                    <p className="text-white/90 text-center">בלונים וצילום לברית</p>
                    <Sparkles className="w-6 h-6 text-yellow-300" />
                  </div>
                </motion.div>

                {/* Animated tagline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mb-12"
                >
                  <p className="text-white/80 text-center max-w-md">
                    יוצרים זיכרונות בלתי נשכחים עם עיצוב בלונים מושלם וצילום מקצועי
                  </p>
                </motion.div>

                {/* Progress section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="w-80 mb-8"
                >
                  <div className="bg-white/30 backdrop-blur-md rounded-full p-1 shadow-lg">
                    <div className="h-3 bg-white/40 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-300 relative"
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-white drop-shadow text-center mt-3"
                  >
                    מכינים משהו מיוחד... {progress}%
                  </motion.p>
                </motion.div>

                {/* Floating icons */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-1/4 right-1/4"
                    animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Heart className="w-12 h-12 text-pink-300/60 fill-pink-300/40" />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/3 left-1/4"
                    animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Gift className="w-10 h-10 text-purple-300/60" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/3 right-1/3"
                    animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Camera className="w-11 h-11 text-purple-300/60" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50"
          >
            {/* Header */}
            <motion.header
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40"
            >
              <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-full">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <span className="text-slate-800 block">Argaman</span>
                      <span className="text-slate-500 text-sm">בלונים וצילום לברית</span>
                    </div>
                  </div>
                  <a
                    href={whatsappLink('שלום, אני רוצה לשמוע על חבילות לברית')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg transition-shadow flex items-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    דברו איתנו
                  </a>
                </div>
              </div>
            </motion.header>

            {/* Hero Section */}
            <section className="container mx-auto px-4 py-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-center mb-12"
              >
                <p className="text-slate-600 mb-2">Argaman • בלונים וצילום לברית</p>
                <h1 className="text-slate-800 mb-4">חבילות לברית מילה ובריתה</h1>
                <p className="text-slate-600 max-w-3xl mx-auto mb-8">
                  כאן סוגרים מראש צלם לברית, בלונים לברית וחבילת ברית מלאה – בלי לרדוף אחרי כמה ספקים, בלי בלגן במחירים ובלי לחץ ביום הכי מרגש.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="#packages"
                    className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105"
                  >
                    לראות את חבילות הברית
                  </a>
                  <a
                    href={whatsappLink('שלום, אני רוצה לשמוע על חבילות לברית')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-3 bg-white text-purple-600 rounded-full border-2 border-purple-600 hover:bg-purple-50 transition-all"
                  >
                    דברו איתנו בוואטסאפ
                  </a>
                </div>
              </motion.div>
            </section>

            {/* Intro Text */}
            <section className="bg-white py-12">
              <div className="container mx-auto px-4 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-slate-800 mb-4">חבילות לברית – בלונים, צילום ומגנטים במקום אחד</h2>
                  <p className="text-slate-600">קל ופשוט - בנינו לכם 3 חבילות מדויקות לאירוע</p>
                </motion.div>
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
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-slate-800 text-center mb-12"
                >
                  הגלריה שלנו
                </motion.h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    'https://images.unsplash.com/photo-1627779543640-7ccec5c7fa62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwYmFsbG9vbnMlMjBiYWJ5fGVufDF8fHx8MTc2NDQwMzk3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
                    'https://images.unsplash.com/photo-1759433582490-54f92e32c6fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBiYWxsb29ucyUyMGRlY29yYXRpb258ZW58MXx8fHwxNzY0NDAzOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
                    'https://images.unsplash.com/photo-1627660163626-d01ceab1713e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YW50JTIwcGhvdG8lMjBjYW1lcmElMjBwb2xhcm9pZHxlbnwxfHx8fDE3NjQ0MDM5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
                    'https://images.unsplash.com/photo-1758548204223-b830a3224f73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY2VsZWJyYXRpb24lMjBkZWNvcmF0aW9uc3xlbnwxfHx8fDE3NjQ0MDM5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
                  ].map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="aspect-square rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`Gallery ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Photo Packages Section */}
            <section className="py-16 bg-gradient-to-br from-slate-50 to-purple-50">
              <div className="container mx-auto px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <h2 className="text-slate-800 mb-4">3 חבילות צילום לברית</h2>
                  <p className="text-slate-600">מבחירה בצלם לברית ועד צילום מגנטים מלא</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      badge: 'צילום סטילס',
                      title: 'חבילת צילום בסיס לברית',
                      subtitle: 'למי שמחפשים צלם לברית בלי מגנטים',
                      features: [
                        'צלם לברית מתחילת האירוע ועד אחרי הטקס',
                        'צילום משפחתי, חברים ורגעי הטקס',
                        'גלריה דיגיטלית של כל התמונות לעריכה בסיסית',
                        'קובץ להורדה ושיתוף למשפחה',
                      ],
                      link: whatsappLink('שלום, אני מחפש צלם לברית ללא מגנטים'),
                      buttonText: 'אני רוצה רק צלם לברית',
                    },
                    {
                      badge: 'מגנטים לברית',
                      title: 'חבילת מגנטים לברית',
                      subtitle: 'צילום מגנטים באירוע לאורך זמן מוגדר',
                      features: [
                        'צלם מגנטים לברית למשך כ-2–3 שעות',
                        'כמות מגנטים גבוהה, מתאימה למשפחה מורחבת',
                        'לוח תצוגה מסודר + מגנטים גדולים למשפחה הקרובה',
                        'קובץ דיגיטלי של כל התמונות בסיום האירוע',
                      ],
                      featured: true,
                      link: whatsappLink('שלום, אני רוצה הצעה לחבילת מגנטים לברית'),
                      buttonText: 'אני רוצה חבילת מגנטים לברית',
                    },
                    {
                      badge: 'צילום + מגנטים',
                      title: 'חבילת צילום ומגנטים לברית',
                      subtitle: 'גם צלם לברית וגם מגנטים – באחד',
                      features: [
                        'צילום סטילס של כל האירוע (משפחה, טקס, אווירה)',
                        'עמדת מגנטים פעילה בזמן האירוע',
                        'מגנטים בכמות גבוהה + מגנטים גדולים למשפחה',
                        'גלריה דיגיטלית של כל התמונות',
                        'אפשרות להוספת וידאו טקס (בתוספת תשלום)',
                      ],
                      link: whatsappLink('שלום, אני מעוניין בחבילת צילום + מגנטים לברית'),
                      buttonText: 'שלחו לי הצעה',
                    },
                  ].map((pkg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`rounded-2xl shadow-lg hover:shadow-2xl transition-all p-8 ${
                        pkg.featured
                          ? 'bg-gradient-to-br from-purple-600 to-pink-500 text-white transform scale-105'
                          : 'bg-white'
                      }`}
                    >
                      <div
                        className={`inline-block px-4 py-1 rounded-full text-sm mb-4 ${
                          pkg.featured ? 'bg-white/20 text-white' : 'bg-purple-500 text-white'
                        }`}
                      >
                        {pkg.badge}
                      </div>
                      <h3 className={`mb-2 ${pkg.featured ? 'text-white' : 'text-slate-800'}`}>
                        {pkg.title}
                      </h3>
                      <p className={`mb-6 ${pkg.featured ? 'text-white/90' : 'text-slate-600'}`}>
                        {pkg.subtitle}
                      </p>
                      <div className="mb-6">
                        <span className={pkg.featured ? 'text-white' : 'text-slate-600'}>
                          מחיר לפי הזמנה
                        </span>
                      </div>
                      <ul className="space-y-3 mb-8 text-right">
                        {pkg.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2
                              className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                                pkg.featured ? 'text-white' : 'text-purple-500'
                              }`}
                            />
                            <span className={pkg.featured ? 'text-white/95' : 'text-slate-700'}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={pkg.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block w-full text-center px-6 py-3 rounded-full transition-colors ${
                          pkg.featured
                            ? 'bg-white text-purple-600 hover:bg-purple-50'
                            : 'bg-purple-600 text-white hover:bg-purple-700'
                        }`}
                      >
                        {pkg.buttonText}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-32 h-32 rounded-full bg-white"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
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

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-12">
              <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-full">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xl">Argaman</div>
                    <div className="text-slate-400 text-sm">בלונים וצילום לברית</div>
                  </div>
                </div>
                <p className="text-slate-400 mb-4">
                  עיצוב בלונים וצילום מקצועי לברית מילה ובריתה במרכז הארץ
                </p>
                <a
                  href={whatsappLink('שלום, אני רוצה לשמוע על חבילות לברית')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  054-233-0001
                </a>
                <div className="mt-8 pt-8 border-t border-slate-800 text-slate-500 text-sm">
                  © 2024 Argaman. כל הזכויות שמורות.
                </div>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
