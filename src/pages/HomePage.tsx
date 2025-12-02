import { motion } from 'motion/react';
import { Camera, Gift, Sparkles, Star, Heart, PartyPopper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

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
      image: 'https://images.unsplash.com/photo-1627779543640-7ccec5c7fa62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwYmFsbG9vbnMlMjBiYWJ5fGVufDF8fHx8MTc2NDQwMzk3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
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
    <div className="min-h-screen bg-[#faf8fb]">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-pink-500 to-purple-400 opacity-90" />

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
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 flex justify-center">
              <div className="bg-white/20 backdrop-blur-md p-6 rounded-full">
                <Camera className="w-20 h-20 text-white" />
              </div>
            </div>
            <h1 className="text-white mb-6 text-4xl md:text-6xl">
              Argaman - בלונים וצילום לאירועים
            </h1>
            <p className="text-white/90 text-xl md:text-2xl max-w-3xl mx-auto mb-8">
              הופכים כל אירוע לחוויה בלתי נשכחת עם עיצוב בלונים מקצועי וצילום ברמה הגבוהה ביותר
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href={whatsappLink('שלום, אני רוצה לשמוע על חבילות לאירועים')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white text-purple-600 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-semibold"
              >
                דברו איתנו עכשיו
              </a>
              <button
                onClick={() => onNavigate('catalog')}
                className="px-8 py-4 bg-purple-600/20 backdrop-blur-sm border-2 border-white text-white rounded-full hover:bg-white/30 transition-all"
              >
                לקטלוג המוצרים
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-slate-800 mb-4 text-3xl md:text-4xl">השירותים שלנו</h2>
            <p className="text-slate-600 text-lg">חבילות מושלמות לכל סוג אירוע</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.page}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: services.indexOf(service) * 0.1 }}
                className="group cursor-pointer"
                onClick={() => onNavigate(service.page)}
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="bg-gradient-to-br from-purple-600 to-pink-500 p-3 rounded-full">
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-slate-800 text-xl">{service.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-4">{service.description}</p>
                    <span className="text-purple-600 font-semibold group-hover:underline">
                      לפרטים נוספים ←
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-slate-800 mb-4 text-3xl md:text-4xl">למה לבחור בנו?</h2>
            <p className="text-slate-600 text-lg">אנחנו מביאים את המקצועיות והיצירתיות שלכם מגיע</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full mb-4">
                  <feature.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-slate-800 mb-2 text-xl">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
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
          <PartyPopper className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-white mb-6 text-3xl md:text-4xl">מוכנים להתחיל לתכנן את האירוע?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            צרו איתנו קשר עכשיו ונעזור לכם להפוך את האירוע שלכם לבלתי נשכח
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={whatsappLink('שלום, אני רוצה לשמוע על חבילות לאירועים')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-white text-purple-600 rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-semibold"
            >
              שלחו הודעה בוואטסאפ
            </a>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-block px-10 py-4 bg-purple-600/20 backdrop-blur-sm border-2 border-white text-white rounded-full hover:bg-white/30 transition-all"
            >
              צור קשר
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}