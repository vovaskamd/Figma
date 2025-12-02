import { motion } from 'motion/react';
import { CheckCircle2, Star } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BarMitzvahPage() {
  const whatsappLink = (text: string) =>
    `https://api.whatsapp.com/send?phone=972542330001&text=${encodeURIComponent(text)}`;

  return (
    <div className="min-h-screen bg-[#faf8fb]">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center mb-12"
        >
          <p className="text-slate-600 mb-2">Argaman • בלונים וצילום לבר מצווה</p>
          <h1 className="text-slate-800 mb-4">חבילות לבר מצווה</h1>
          <p className="text-slate-600 max-w-3xl mx-auto mb-8">
            הפכו את בר המצווה לחגיגה בלתי נשכחת עם חבילות שמשלבות עיצוב בלונים מרשים, צילום מקצועי ומגנטים שישארו לזכר. הכל במקום אחד, בלי מורכבות.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#packages"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105"
            >
              לראות את חבילות בר המצווה
            </a>
            <a
              href={whatsappLink('שלום, אני רוצה לשמוע על חבילות לבר מצווה')}
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
            <h2 className="text-slate-800 mb-4">חבילות מושלמות לבר מצווה</h2>
            <p className="text-slate-600">בחרו את החבילה המתאימה לכם ותנו לנו לדאוג לשאר</p>
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
              <div className="inline-block bg-blue-500 text-white px-4 py-1 rounded-full text-sm mb-4">
                חבילת בסיס
              </div>
              <h3 className="text-slate-800 mb-2">חבילת צילום לבר מצווה</h3>
              <p className="text-slate-600 mb-6">צילום מקצועי ומגנטים לאורחים</p>
              <div className="mb-6">
                <span className="text-purple-600 text-4xl">₪2000</span>
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
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('שלום, אשמח להזמין חבילת צילום לבר מצווה.\nחבילה: חבילת צילום – 2000₪\nמקום האירוע: [מקום]\nתאריך: [תאריך]')}
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
                href={whatsappLink('שלום, אשמח להזמין חבילה משולבת לבר מצווה.\nחבילה: חבילה משולבת פרימיום – 3500₪\nמקום האירוע: [מקום]\nתאריך: [תאריך]')}
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
              <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-4 py-1 rounded-full text-sm mb-4">
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
                    <CheckCircle2 className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink('שלום, אני מעוניין בחבילת VIP מלאה לבר מצווה')}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg transition-all"
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
            גלריית בר מצווה
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'https://images.unsplash.com/photo-1660234874694-b4b9b18ce6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBtaXR6dmFoJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0NTE1ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1521333774545-10e8a1f2f7e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwZ29sZCUyMGJhbGxvb25zfGVufDF8fHx8MTc2NDUxNTgwN3ww&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1718096551424-910dff37709f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMHBob3RvZ3JhcGh5JTIwZXZlbnR8ZW58MXx8fHwxNzY0NTE1ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
              'https://images.unsplash.com/photo-1759433582490-54f92e32c6fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBiYWxsb29ucyUyMGRlY29yYXRpb258ZW58MXx8fHwxNzY0NDAzOTc0fDA&ixlib=rb-4.1.0&q=80&w=1080',
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
            דברו איתנו עכשיו ונעזור לכם לבחור את החבילה המושלמת לאירוע מיוחד
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