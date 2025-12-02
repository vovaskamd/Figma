import { motion } from 'motion/react';
import { Heart, Star, Gift, PartyPopper, Camera, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CatalogPage() {
  const navigate = useNavigate();
  const onNavigate = (page: string) => navigate(page === 'home' ? '/' : `/${page}`);

  const whatsappLink = (text: string) =>
    `https://api.whatsapp.com/send?phone=972542330001&text=${encodeURIComponent(text)}`;

  const categories = [
    {
      icon: Heart,
      title: 'חתונות',
      description: 'עיצוב רומנטי ומושלם ליום החתונה',
      image: 'https://images.unsplash.com/photo-1686354714550-37ae687d871a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYmFsbG9vbnMlMjBkZWNvcmF0aW9ufGVufDF8fHx8MTc2NDUwMDg0OXww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Gift,
      title: 'ימי הולדת',
      description: 'חגיגות צבעוניות לכל גיל',
      image: 'https://images.unsplash.com/photo-1654851364032-ca4d7a47341c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ0aGRheSUyMHBhcnR5JTIwYmFsbG9vbnN8ZW58MXx8fHwxNzY0NDgzNTA5fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: PartyPopper,
      title: 'אירועים קורפורטיביים',
      description: 'פתרונות מקצועיים לאירועי חברה',
      image: 'https://images.unsplash.com/photo-1705544363562-cdf94dd458cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2NDUxNjAxN3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Star,
      title: 'בר ובת מצווה',
      description: 'עיצובים מרשימים לאירוע מיוחד',
      image: 'https://images.unsplash.com/photo-1660234874694-b4b9b18ce6ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYXIlMjBtaXR6dmFoJTIwY2VsZWJyYXRpb258ZW58MXx8fHwxNzY0NTE1ODA3fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-amber-500 to-yellow-500',
      page: 'bar-mitzvah',
    },
    {
      icon: Camera,
      title: 'ברית מילה',
      description: 'עיצובים עדינים וצילום מקצועי',
      image: 'https://images.unsplash.com/photo-1627779543640-7ccec5c7fa62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwYmFsbG9vbnMlMjBiYWJ5fGVufDF8fHx8MTc2NDQwMzk3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-sky-500 to-blue-500',
      page: 'brit',
    },
    {
      icon: Sparkles,
      title: 'אירועים מיוחדים',
      description: 'כל אירוע שתרצו - אנחנו כאן',
      image: 'https://images.unsplash.com/photo-1718096551424-910dff37709f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMHBob3RvZ3JhcGh5JTIwZXZlbnR8ZW58MXx8fHwxNzY0NTE1ODA4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      color: 'from-violet-500 to-purple-500',
    },
  ];

  const services = [
    {
      title: 'עיצוב בלונים',
      items: ['קירות בלונים', 'קשתות בלונים', 'עמודי בלונים', 'בלוני הליום', 'פיסול בלונים', 'מיתוג על בלונים'],
    },
    {
      title: 'שירותי צילום',
      items: ['צילום סטילס', 'צילום וידאו', 'צילום מגנטים', 'צילום דרון', 'עריכת וידאו', 'אלבומים מעוצבים'],
    },
    {
      title: 'אביזרים',
      items: ['שטיחים אדומים', 'קוביות דקורטיביות', 'שלטי ברכה', 'פינות צילום', 'תאורה דקורטיבית', 'דובי ענק'],
    },
  ];

  const handleCategoryClick = (category: any) => {
    if (category.page) {
      onNavigate(category.page);
    } else {
      window.open(whatsappLink(`שלום, אני מעוניין ב${category.title}`), '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-[#faf8fb]">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400 py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <Sparkles className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-white mb-6">קטלוג המוצרים והשירותים שלנו</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              מגוון רחב של פתרונות עיצוב וצילום לכל סוג אירוע - מברית מילה ועד חתונות
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-slate-800 mb-4">סוגי אירועים</h2>
            <p className="text-slate-600">בחרו את סוג האירוע ונראה לכם מה יש לנו להציע</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                onClick={() => handleCategoryClick(category)}
                className="group cursor-pointer"
              >
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2">
                  <div className="h-56 overflow-hidden relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-20 group-hover:opacity-30 transition-opacity z-10`} />
                    <ImageWithFallback
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`bg-gradient-to-br ${category.color} p-3 rounded-full`}>
                        <category.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-slate-800 text-xl">{category.title}</h3>
                    </div>
                    <p className="text-slate-600 mb-4">{category.description}</p>
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-slate-800 mb-4">השירותים שלנו</h2>
            <p className="text-slate-600">מגוון מלא של שירותים לכל אירוע</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all"
              >
                <h3 className="text-slate-800 mb-6 text-xl">{service.title}</h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-2 text-slate-700">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="container mx-auto px-4 text-center text-white"
        >
          <Camera className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-white mb-6">לא מצאתם מה שחיפשתם?</h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            צרו איתנו קשר ונעזור לכם למצוא את הפתרון המושלם לאירוע שלכם
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={whatsappLink('שלום, אני מחפש משהו ספציפי לאירוע שלי')}
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