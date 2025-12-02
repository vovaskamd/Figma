import { motion } from 'motion/react';
import { Camera, Gift, Sparkles, Star, Heart, PartyPopper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { colors, buttonStyles, sectionStyles, inlineColors } from '../styles/design-system';

export function HomePage() {
  const navigate = useNavigate();
  const onNavigate = (page: string) => navigate(page === 'home' ? '/' : `/${page}`);

  const whatsappLink = (text: string) =>
    `https://api.whatsapp.com/send?phone=972542330001&text=${encodeURIComponent(text)}`;

  const services = [
    {
      icon: Camera,
      title: 'חבילות לברית',
      description: 'עיצוב בלונים מקסים וצילום מקצועי לברית מילה ובריתה',
      image: 'https://images.unsplash.com/photo-1627779543640-7ccec5c7fa62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwYmFsbG9vbnMlMjBiABAyfGVufDF8fHx8MTc2NDQwMzk3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'brit',
    },
    {
      icon: Star,
      title: 'חבילות לבר מצווה',
      description: 'עיצוב מרשים וצילום מושלם לחגיגת בר המצווה',
      image: 'https://images.unsplash.com/photo-1660234874694-b4b9b18ce6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBtaXR6dmFoJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0NTE1ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'bar-mitzvah',
    },
    {
      icon: Sparkles,
      title: 'קונסטרוקטור פוטוזונים',
      description: 'בנו את הפוטוזון המושלם - בחרו רקע, בלונים ואביזרים',
      image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGJhbGxvb25zJTIwYmFja2Ryb3B8ZW58MXx8fHwxNzMyOTg5NzQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'photozone-builder',
    },
    {
      icon: PartyPopper,
      title: 'אירועים נוספים',
      description: 'חתונות, ימי הולדת ואירועים מיוחדים - יש לנו הכל',
      image: 'https://images.unsplash.com/photo-1718096551424-910dff37709f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMHBob3RvZ3JhcGh5JTIwZXZlbnR8ZW58MXx8fHwxNzY0NTE1ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      page: 'catalog',
    },
  ];

  const features = [
    {
      icon: Gift,
      title: 'חבילות מושלמות',
      description: 'חבילות שמכילות הכל - בלונים, צילום ומגנטים',
    },
    {
      icon: Sparkles,
      title: 'איכות ללא פשרות',
      description: 'ציוד מקצועי ועיצוב מדויק לכל פרט',
    },
    {
      icon: Heart,
      title: 'שירות אישי',
      description: 'ליווי צמוד ומענה מהיר לכל שאלה',
    },
  ];

  return (
    <div className="min-h-screen bg-[#fdfbfc]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-90"
          style={{
            background: `linear-gradient(to bottom right, ${inlineColors.primary.deep}, ${inlineColors.primary.medium}, ${inlineColors.primary.light})`
          }}
        />
        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${(i * 15) % 100}%`,
                top: `${(i * 20) % 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + i,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              {i % 3 === 0 ? (
                <Sparkles className="w-8 h-8 text-white/30" />
              ) : i % 3 === 1 ? (
                <Heart className="w-8 h-8 text-white/30 fill-white/20" />
              ) : (
                <Star className="w-8 h-8 text-white/30" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="mb-6 text-5xl md:text-7xl">
              Argaman - בלונים וצילום לאירועים
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              עיצוב בלונים מקצועי וצילום לברית מילה, בר מצווה וכל אירוע מיוחד
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink('היי! אני רוצה לשמוע על חבילות לאירוע שלי')}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'white',
                  color: inlineColors.primary.deep
                }}
                className="px-8 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-semibold"
              >
                📞 דברו איתנו עכשיו
              </a>
              <button
                onClick={() => onNavigate('catalog')}
                style={{
                  backgroundColor: `${inlineColors.primary.deep}33`
                }}
                className="px-8 py-4 backdrop-blur-sm border-2 border-white text-white rounded-full hover:bg-white/30 transition-all"
              >
                🎨 ראו את הקטלוג
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(to bottom right, ${inlineColors.primary.paleBlush}, white, ${inlineColors.primary.blush}15)`
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-slate-800 mb-4">השירותים שלנו</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              מגוון חבילות מותאמות אישית לכל סוג אירוע
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, idx) => (
              <motion.button
                key={idx}
                onClick={() => onNavigate(service.page)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden text-right"
              >
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3 mb-3">
                      <div
                        style={{
                          background: `linear-gradient(to bottom right, ${inlineColors.primary.deep}, ${inlineColors.primary.light})`
                        }}
                        className="p-3 rounded-full"
                      >
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-slate-800">{service.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 mb-4">{service.description}</p>
                  <span style={{ color: inlineColors.primary.deep }} className="font-semibold group-hover:underline">
                    לפרטים נוספים ←
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        className="py-20"
        style={{
          background: `linear-gradient(to bottom right, ${inlineColors.primary.blush}15, ${inlineColors.primary.paleBlush})`
        }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-slate-800 mb-4">למה לבחור בנו?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              אנחנו מביאים ניסיון, מקצועיות ותשומת לב לכל פרט
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.5 }}
              >
                <div
                  style={{
                    background: `linear-gradient(to bottom right, ${inlineColors.primary.deep}, ${inlineColors.primary.light})`
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4"
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: `linear-gradient(to right, ${inlineColors.primary.deep}, ${inlineColors.primary.medium}, ${inlineColors.primary.light})`
        }}
      >
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <div className="w-4 h-4 bg-white rounded-full" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <PartyPopper className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="mb-6 text-3xl md:text-4xl">מוכנים להפוך את האירוע שלכם לבלתי נשכח?</h2>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              צרו איתנו קשר עוד היום ונתחיל לתכנן ביחד
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={whatsappLink('שלום! אני מעוניין לקבל פרטים על חבילות')}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  backgroundColor: 'white',
                  color: inlineColors.primary.deep
                }}
                className="inline-block px-10 py-4 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-semibold"
              >
                צרו קשר בוואטסאפ
              </a>
              <button
                onClick={() => onNavigate('contact')}
                style={{
                  backgroundColor: `${inlineColors.primary.deep}33`
                }}
                className="inline-block px-10 py-4 backdrop-blur-sm border-2 border-white text-white rounded-full hover:bg-white/30 transition-all"
              >
                מלאו טופס צור קשר
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}