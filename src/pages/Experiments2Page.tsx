import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, Zap, Star, MapPin, ThumbsUp, ExternalLink, 
  Users, Calendar, Award, Camera, TrendingUp, ChevronDown, 
  ChevronUp, CheckCircle, XCircle, Phone, Mail, Heart,
  Gift, Clock, Palette, Instagram, Play, Timer,
  ArrowRight, Flower2, Package, DollarSign, MessageSquare
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

// Mock reviews data
const mockReviews = [
  {
    id: 1,
    author: 'שרה כהן',
    rating: 5,
    date: '2024-11-15',
    text: 'שירות מדהים! הבלונים היו פשוט מושלמים לברית של הבן שלי. הצילום היה ברמה גבוהה מאוד ואנו מרוצים מאוד מהתוצאה. ממליצה בחום!',
    avatar: 'ש',
  },
  {
    id: 2,
    author: 'דוד לוי',
    rating: 5,
    date: '2024-11-10',
    text: 'וולדימיר ואוסטין הם אנשי מקצוע אמיתיים! העיצוב בבלונים היה יפהפה והצילום תפס את כל הרגעים המיוחדים. תודה רבה!',
    avatar: 'ד',
  },
  {
    id: 3,
    author: 'מיכל אברהם',
    rating: 5,
    date: '2024-11-05',
    text: 'חוויה נפלאה מתחילה ועד סוף! התקשורת היתה מצוינת, המחירים הוגנים והתוצאה עלתה על הציפיות. בהחלט נשוב שוב!',
    avatar: 'מ',
  },
];

// Gallery images
const galleryImages = [
  { id: 1, url: 'https://images.unsplash.com/photo-1654851364032-ca4d7a47341c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGJhbGxvb25zJTIwcGFydHl8ZW58MXx8fHwxNzY0NTE3ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'brit' },
  { id: 2, url: 'https://images.unsplash.com/photo-1763256293624-e07ae40e5e77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5JTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0NTA0MzE5fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'bar-mitzvah' },
  { id: 3, url: 'https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFydHklMjBkZWNvcmF0aW9uc3xlbnwxfHx8fDE3NjQ1MzQyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'other' },
  { id: 4, url: 'https://images.unsplash.com/photo-1660234874694-b4b9b18ce6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBtaXR6dmFoJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0NTE1ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'bar-mitzvah' },
  { id: 5, url: 'https://images.unsplash.com/photo-1654851364032-ca4d7a47341c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMGJhbGxvb25zJTIwcGFydHl8ZW58MXx8fHwxNzY0NTE3ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'brit' },
  { id: 6, url: 'https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcGFydHklMjBkZWNvcmF0aW9uc3xlbnwxfHx8fDE3NjQ1MzQyMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'other' },
];

// FAQ data
const faqData = [
  {
    id: 1,
    question: 'כמה זמן לפני האירוע צריך להזמין?',
    answer: 'אנו ממליצים להזמין לפחות 2-3 שבועות לפני האירוע כדי להבטיח זמינות. לאירועים גדולים או בעונת שיא, מומלץ להזמין חודש מראש.',
    category: 'process'
  },
  {
    id: 2,
    question: 'מה כולל החבילה הבסיסית?',
    answer: 'החבילה הבסיסית כוללת: עיצוב בלונים לשולחן ראשי, 2 עמודי בלונים, צילום של 3 שעות, ו-100 תמונות ערוכות.',
    category: 'pricing'
  },
  {
    id: 3,
    question: 'האם אתם מגיעים לכל הארץ?',
    answer: 'אנו משרתים את כל אזור המרכז - מהרצליה צפונה ועד אשדוד דרומה. לאזורים מרוחקים יותר, ניתן להתייעץ.',
    category: 'technical'
  },
  {
    id: 4,
    question: 'מה קורה אם צריך לדחות את האירוע?',
    answer: 'ניתן לדחות את האירוע עד 7 ימים לפני המועד ללא עלות. דחייה בפחות מ-7 ימים כרוכה בתשלום של 50% מהמקדמה.',
    category: 'process'
  },
];

// Packages data
const packages = [
  {
    id: 1,
    name: 'בסיס',
    price: '₪2,500',
    features: [
      { text: 'עיצוב בלונים לשולחן ראשי', included: true },
      { text: '2 עמודי בלונים', included: true },
      { text: 'צילום 3 שעות', included: true },
      { text: '100 תמונות ערוכות', included: true },
      { text: 'אלבום דיגיטלי', included: true },
      { text: 'צילום וידאו', included: false },
      { text: 'אלבום מודפס', included: false },
    ],
    popular: false,
  },
  {
    id: 2,
    name: 'פרימיום',
    price: '₪4,500',
    features: [
      { text: 'עיצוב בלונים מלא', included: true },
      { text: '5 עמודי בלונים + קשתות', included: true },
      { text: 'צילום 5 שעות', included: true },
      { text: '200 תמונות ערוכות', included: true },
      { text: 'אלבום דיגיטלי', included: true },
      { text: 'צילום וידאו 2 שעות', included: true },
      { text: 'אלבום מודפס פרימיום', included: true },
    ],
    popular: true,
  },
  {
    id: 3,
    name: 'VIP',
    price: '₪7,500',
    features: [
      { text: 'עיצוב בלונים יוקרתי מלא', included: true },
      { text: 'קשתות ענק + פינות צילום', included: true },
      { text: 'צילום כל האירוע', included: true },
      { text: 'תמונות בלתי מוגבלות', included: true },
      { text: '2 אלבומים דיגיטליים', included: true },
      { text: 'צילום וידאו מלא + עריכה', included: true },
      { text: '2 אלבומים מודפסים יוקרתיים', included: true },
    ],
    popular: false,
  },
];

// Timeline data
const timelineSteps = [
  { id: 1, title: 'פנייה ראשונית', description: 'צור איתנו קשר בטלפון או וואטסאפ', icon: Phone },
  { id: 2, title: 'פגישת ייעוץ', description: 'נפגש לתכנון האירוע ובחירת סגנון', icon: Users },
  { id: 3, title: 'אישור והזמנה', description: 'חתימה על חוזה ותשלום מקדמה', icon: CheckCircle },
  { id: 4, title: 'הכנות לאירוע', description: 'אנחנו מכינים הכל מאחורי הקלעים', icon: Package },
  { id: 5, title: 'יום האירוע!', description: 'מגיעים, מעצבים, מצלמים וליוצרים קסם', icon: Sparkles },
];

// Color palettes
const colorPalettes = [
  { id: 1, name: 'קלאסי זהב', colors: ['#6b1a3d', '#FFD700', '#FFFFFF', '#8b2e3f'] },
  { id: 2, name: 'רומנטי ורוד', colors: ['#FFB6C1', '#FF69B4', '#FFC0CB', '#c9a9b8'] },
  { id: 3, name: 'אלגנטי שחור-לבן', colors: ['#000000', '#FFFFFF', '#6b1a3d', '#808080'] },
  { id: 4, name: 'כחול מלכותי', colors: ['#4169E1', '#1E90FF', '#87CEEB', '#6b1a3d'] },
];

export function Experiments2Page() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<number | null>(null);
  const [eventType, setEventType] = useState<string>('brit');
  const [guestCount, setGuestCount] = useState<number>(50);
  const [duration, setDuration] = useState<number>(3);

  // Price calculator
  const calculatePrice = () => {
    let basePrice = eventType === 'brit' ? 2500 : 3500;
    basePrice += (guestCount - 50) * 10;
    basePrice += duration * 500;
    return basePrice;
  };

  const filteredGallery = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8fb] via-white to-[#f5edf8]">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#6b1a3d] via-[#8b2e3f] to-[#4d184d] text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#c9a9b8] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <Zap className="w-12 h-12" />
            <h1 className="text-white">גלריית רכיבים - Argaman</h1>
            <Sparkles className="w-12 h-12" />
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/90 max-w-3xl mx-auto"
          >
            כל הבלוקים והרכיבים שאפשר לשלב באתר - בעיצוב Argaman המושלם
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 space-y-24">

        {/* 1. STATISTICS BLOCK */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#6b1a3d] mb-4">📊 סטטיסטיקות מרשימות</h2>
            <p className="text-slate-600">המספרים מדברים בעד עצמם</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: Users, value: '500+', label: 'לקוחות מרוצים' },
              { icon: Calendar, value: '1,000+', label: 'אירועים' },
              { icon: Award, value: '15', label: 'שנות ניסיון' },
              { icon: Star, value: '5.0', label: 'דירוג ממוצע' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-[#c9a9b8]/20"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6b1a3d] to-[#8b2e3f] rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl text-[#6b1a3d] mb-2">{stat.value}</div>
                <div className="text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 2. GALLERY BLOCK */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#6b1a3d] mb-4">📸 גלריית עבודות</h2>
            <p className="text-slate-600 mb-6">מבחר מהאירועים המדהימים שלנו</p>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { id: 'all', label: 'הכל' },
                { id: 'brit', label: 'ברית מילה' },
                { id: 'bar-mitzvah', label: 'בר מצווה' },
                { id: 'other', label: 'אחר' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedCategory(filter.id)}
                  className={`px-6 py-2 rounded-full transition-all ${
                    selectedCategory === filter.id
                      ? 'bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {filteredGallery.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -10, transition: { duration: 0.2 } }}
                  className="relative group overflow-hidden rounded-2xl shadow-lg cursor-pointer"
                >
                  <ImageWithFallback
                    src={image.url}
                    alt="Gallery"
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6b1a3d]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <p className="text-white">לחץ להגדלה</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </section>

        {/* 3. PACKAGES COMPARISON */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#6b1a3d] mb-4">💎 השוואת חבילות</h2>
            <p className="text-slate-600">בחרו את החבילה המושלמת עבורכם</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white rounded-2xl p-8 shadow-lg border-2 ${
                  pkg.popular
                    ? 'border-[#6b1a3d] scale-105'
                    : 'border-[#c9a9b8]/30'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] text-white px-6 py-1 rounded-full text-sm">
                    🔥 הכי פופולרי
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl text-[#6b1a3d] mb-2">{pkg.name}</h3>
                  <div className="text-4xl text-slate-800 mb-2">{pkg.price}</div>
                  <p className="text-slate-500 text-sm">לאירוע</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-right">
                      {feature.included ? (
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-5 h-5 text-slate-300 flex-shrink-0 mt-0.5" />
                      )}
                      <span className={feature.included ? 'text-slate-700' : 'text-slate-400'}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-full transition-all ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] text-white shadow-lg hover:shadow-xl'
                      : 'bg-[#f5edf8] text-[#6b1a3d] hover:bg-[#c9a9b8]/20'
                  }`}
                >
                  בחר חבילה
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. PRICE CALCULATOR */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-[#f5edf8] rounded-3xl p-8 md:p-12 shadow-xl border border-[#c9a9b8]/30"
          >
            <div className="text-center mb-8">
              <h2 className="text-[#6b1a3d] mb-4">💰 מחשבון מחיר</h2>
              <p className="text-slate-600">קבלו הערכת מחיר מיידית</p>
            </div>

            <div className="max-w-2xl mx-auto space-y-6">
              {/* Event Type */}
              <div>
                <label className="block text-right text-slate-700 mb-2">סוג האירוע</label>
                <div className="flex gap-4">
                  {[
                    { id: 'brit', label: 'ברית מילה', icon: '👶' },
                    { id: 'bar-mitzvah', label: 'בר מצווה', icon: '🎉' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setEventType(type.id)}
                      className={`flex-1 py-4 rounded-xl transition-all ${
                        eventType === type.id
                          ? 'bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] text-white shadow-lg'
                          : 'bg-white text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      <span className="text-2xl mb-2 block">{type.icon}</span>
                      {type.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Guest Count */}
              <div>
                <label className="block text-right text-slate-700 mb-2">
                  מספר אורחים: {guestCount}
                </label>
                <input
                  type="range"
                  min="20"
                  max="200"
                  value={guestCount}
                  onChange={(e) => setGuestCount(Number(e.target.value))}
                  className="w-full h-2 bg-[#c9a9b8]/30 rounded-lg appearance-none cursor-pointer accent-[#6b1a3d]"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-1">
                  <span>20</span>
                  <span>200</span>
                </div>
              </div>

              {/* Duration */}
              <div>
                <label className="block text-right text-slate-700 mb-2">
                  שעות צילום: {duration}
                </label>
                <input
                  type="range"
                  min="2"
                  max="8"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full h-2 bg-[#c9a9b8]/30 rounded-lg appearance-none cursor-pointer accent-[#6b1a3d]"
                />
                <div className="flex justify-between text-sm text-slate-500 mt-1">
                  <span>2</span>
                  <span>8</span>
                </div>
              </div>

              {/* Result */}
              <motion.div
                key={calculatePrice()}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] rounded-2xl p-8 text-center text-white shadow-xl"
              >
                <p className="text-white/90 mb-2">מחיר משוער</p>
                <div className="text-5xl mb-4">₪{calculatePrice().toLocaleString()}</div>
                <p className="text-white/80 text-sm mb-6">*המחיר סופי וכולל הכל</p>
                <button className="bg-white text-[#6b1a3d] px-8 py-3 rounded-full hover:shadow-lg transition-shadow">
                  צור קשר לפרטים נוספים
                </button>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* 5. FAQ ACCORDION */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#6b1a3d] mb-4">❓ שאלות נפוצות</h2>
            <p className="text-slate-600">תשובות לכל השאלות שלכם</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl shadow-lg border border-[#c9a9b8]/20 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaqId(openFaqId === faq.id ? null : faq.id)}
                  className="w-full p-6 text-right flex items-center justify-between hover:bg-[#f5edf8] transition-colors"
                >
                  <span className="text-slate-800 text-lg">{faq.question}</span>
                  {openFaqId === faq.id ? (
                    <ChevronUp className="w-5 h-5 text-[#6b1a3d]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#6b1a3d]" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaqId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-right text-slate-600">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 6. TIMELINE PROCESS */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#6b1a3d] mb-4">📋 תהליך העבודה</h2>
            <p className="text-slate-600">5 שלבים פשוטים לאירוע מושלם</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timelineSteps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-6 mb-12 last:mb-0"
              >
                {/* Line */}
                {index < timelineSteps.length - 1 && (
                  <div className="absolute right-8 top-20 w-0.5 h-full bg-gradient-to-b from-[#6b1a3d] to-[#c9a9b8]" />
                )}

                {/* Icon */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#6b1a3d] to-[#8b2e3f] rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-lg border border-[#c9a9b8]/20 text-right">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl text-[#6b1a3d]">{step.title}</h3>
                    <span className="text-sm text-slate-400">שלב {step.id}</span>
                  </div>
                  <p className="text-slate-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 7. TEAM SECTION */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#6b1a3d] mb-4">👥 הצוות שלנו</h2>
            <p className="text-slate-600">פגשו את האנשים מאחורי הקסם</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'וולדימיר', role: 'מעצב בלונים ראשי', image: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzY0NDk4MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
              { name: 'אוסטין', role: 'צלם מקצועי', image: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzY0NDk4MTM4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg border border-[#c9a9b8]/20"
              >
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6b1a3d]/50 to-transparent" />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl text-[#6b1a3d] mb-2">{member.name}</h3>
                  <p className="text-slate-600 mb-4">{member.role}</p>
                  <div className="flex gap-3 justify-center">
                    <button className="w-10 h-10 bg-[#f5edf8] rounded-full flex items-center justify-center hover:bg-[#c9a9b8] transition-colors">
                      <Phone className="w-5 h-5 text-[#6b1a3d]" />
                    </button>
                    <button className="w-10 h-10 bg-[#f5edf8] rounded-full flex items-center justify-center hover:bg-[#c9a9b8] transition-colors">
                      <Mail className="w-5 h-5 text-[#6b1a3d]" />
                    </button>
                    <button className="w-10 h-10 bg-[#f5edf8] rounded-full flex items-center justify-center hover:bg-[#c9a9b8] transition-colors">
                      <Instagram className="w-5 h-5 text-[#6b1a3d]" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 8. COLOR PALETTES */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#6b1a3d] mb-4">🎨 פלטות צבעים</h2>
            <p className="text-slate-600">בחרו את הסגנון המושלם לאירוע שלכם</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {colorPalettes.map((palette, index) => (
              <motion.div
                key={palette.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-2xl p-6 shadow-lg border border-[#c9a9b8]/20 cursor-pointer"
              >
                <h3 className="text-center text-slate-800 mb-4">{palette.name}</h3>
                <div className="flex gap-2 mb-4">
                  {palette.colors.map((color, idx) => (
                    <div
                      key={idx}
                      className="flex-1 h-16 rounded-lg shadow-md"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <button className="w-full py-2 bg-[#f5edf8] text-[#6b1a3d] rounded-lg hover:bg-[#c9a9b8]/20 transition-colors">
                  בחר פלטה
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 9. INSTAGRAM FEED */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#6b1a3d] mb-4">📱 עקבו אחרינו באינסטגרם</h2>
            <p className="text-slate-600">@argaman.events</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square rounded-xl overflow-hidden shadow-lg cursor-pointer group"
              >
                <ImageWithFallback
                  src={galleryImages[index % galleryImages.length].url}
                  alt="Instagram"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-[#6b1a3d]/0 group-hover:bg-[#6b1a3d]/80 transition-all flex items-center justify-center">
                  <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <Instagram className="w-5 h-5" />
              עקבו אחרינו
            </button>
          </div>
        </section>

        {/* 10. SEASONAL PROMOTION */}
        <section>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative overflow-hidden bg-gradient-to-r from-[#6b1a3d] via-[#8b2e3f] to-[#4d184d] rounded-3xl p-8 md:p-12 text-center shadow-2xl"
          >
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#c9a9b8] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="relative z-10">
              <Gift className="w-16 h-16 text-white mx-auto mb-4" />
              <h2 className="text-white mb-4">🎁 מבצע מיוחד לחודש דצמבר!</h2>
              <p className="text-white/90 text-xl mb-6">הזמינו עד סוף החודש וקבלו 20% הנחה</p>
              
              {/* Countdown */}
              <div className="flex gap-4 justify-center mb-8">
                {[
                  { value: '30', label: 'ימים' },
                  { value: '12', label: 'שעות' },
                  { value: '45', label: 'דקות' },
                  { value: '30', label: 'שניות' },
                ].map((time, index) => (
                  <div key={index} className="bg-white/20 backdrop-blur-sm rounded-xl p-4 min-w-[80px]">
                    <div className="text-3xl text-white mb-1">{time.value}</div>
                    <div className="text-white/80 text-sm">{time.label}</div>
                  </div>
                ))}
              </div>

              <button className="bg-white text-[#6b1a3d] px-8 py-4 rounded-full hover:shadow-2xl transition-shadow inline-flex items-center gap-2">
                <Timer className="w-5 h-5" />
                תפסו את ההזדמנות!
              </button>
            </div>
          </motion.div>
        </section>

        {/* 11. NEWSLETTER */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-[#f5edf8] rounded-3xl p-8 md:p-12 shadow-xl border border-[#c9a9b8]/30"
          >
            <div className="max-w-2xl mx-auto text-center">
              <Mail className="w-12 h-12 text-[#6b1a3d] mx-auto mb-4" />
              <h2 className="text-[#6b1a3d] mb-4">✉️ הירשמו לניוזלטר</h2>
              <p className="text-slate-600 mb-6">
                קבלו טיפים, השראה ומבצעים בלעדיים ישירות למייל
              </p>

              <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="המייל שלכם"
                  className="flex-1 px-6 py-3 rounded-full border-2 border-[#c9a9b8]/30 focus:border-[#6b1a3d] outline-none text-right"
                />
                <button className="px-8 py-3 bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow whitespace-nowrap">
                  הירשמו עכשיו
                </button>
              </div>

              <p className="text-xs text-slate-500 mt-4">
                * לא נשלח ספאם. אפשר לבטל את ההרשמה בכל עת
              </p>
            </div>
          </motion.div>
        </section>

        {/* 12. MAP COVERAGE */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#6b1a3d] mb-4">🗺️ אזורי השירות שלנו</h2>
            <p className="text-slate-600">משרתים את כל מרכז הארץ</p>
          </motion.div>

          <div className="bg-white rounded-3xl p-8 shadow-xl border border-[#c9a9b8]/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="relative h-96 rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1691077039342-355200fd27b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc3JhZWwlMjBtYXAlMjBnZW9ncmFwaHl8ZW58MXx8fHwxNzY0NTkwMjgyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Map"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#6b1a3d]/50 to-transparent" />
              </div>

              <div className="text-right space-y-4">
                <h3 className="text-2xl text-[#6b1a3d] mb-6">אזורים בהם אנו פועלים:</h3>
                {[
                  { city: 'תל אביב והסביבה', icon: '🏙️' },
                  { city: 'רמת גן וגבעתיים', icon: '🌆' },
                  { city: 'הרצליה ורעננה', icon: '🏖️' },
                  { city: 'פתח תקווה והסביבה', icon: '🏘️' },
                  { city: 'ראשון לציון וראש העין', icon: '🌇' },
                  { city: 'חולון ובת ים', icon: '🏢' },
                ].map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-[#f5edf8] p-4 rounded-xl"
                  >
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-lg">{area.icon}</span>
                    <span className="text-slate-700">{area.city}</span>
                  </motion.div>
                ))}

                <p className="text-slate-600 pt-4">
                  📍 לאזורים נוספים - צרו איתנו קשר לבדיקת זמינות
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. REVIEWS BLOCK (existing) */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-[#6b1a3d]" />
              <h2 className="text-[#6b1a3d]">⭐ מה אומרים עלינו</h2>
              <Zap className="w-8 h-8 text-[#8b2e3f]" />
            </div>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              ביקורות אמיתיות מלקוחות מרוצים - Vladimir Austin | Argaman
            </p>

            {/* Rating Summary */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-4 bg-white/70 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg border border-[#c9a9b8]/30"
            >
              <div className="flex items-center gap-2">
                <span className="text-4xl text-[#6b1a3d]">5.0</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-6 h-6 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <div className="text-right border-r border-[#c9a9b8] pr-4">
                <p className="text-slate-600">{mockReviews.length} ביקורות</p>
                <div className="flex items-center gap-1 text-sm text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span>Google Business</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-[#c9a9b8]/20 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6b1a3d] to-[#8b2e3f] flex items-center justify-center text-white shadow-md">
                      <span className="text-lg">{review.avatar}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-slate-800">{review.author}</p>
                      <p className="text-sm text-slate-500">
                        {new Date(review.date).toLocaleDateString('he-IL', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>

                <p className="text-slate-700 leading-relaxed text-right">
                  {review.text}
                </p>

                <div className="mt-4 pt-4 border-t border-[#c9a9b8]/20 flex items-center justify-between">
                  <button className="flex items-center gap-1 text-sm text-[#8b2e3f] hover:text-[#6b1a3d] transition-colors">
                    <ThumbsUp className="w-4 h-4" />
                    <span>מועיל</span>
                  </button>
                  <div className="flex items-center gap-1 text-sm text-slate-400">
                    <ExternalLink className="w-3 h-3" />
                    <span>Google</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 14. FINAL CTA */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#6b1a3d] via-[#8b2e3f] to-[#4d184d] rounded-3xl p-8 md:p-12 text-center shadow-2xl"
          >
            <Flower2 className="w-16 h-16 text-white mx-auto mb-4" />
            <h2 className="text-white mb-4">מוכנים להתחיל?</h2>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              הצטרפו למאות לקוחות מרוצים שבחרו ב-Argaman לאירוע שלהם
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.a
                href="https://wa.me/972542330001"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-[#6b1a3d] rounded-full shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageSquare className="w-5 h-5" />
                דברו איתנו בוואטסאפ
              </motion.a>
              <motion.a
                href="tel:+972542330001"
                className="px-8 py-4 bg-[#c9a9b8] text-white rounded-full shadow-lg hover:shadow-xl transition-shadow inline-flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-5 h-5" />
                התקשרו: 054-233-0001
              </motion.a>
            </div>
          </motion.div>
        </section>

      </div>
    </div>
  );
}
