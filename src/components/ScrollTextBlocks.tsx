import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Camera, Heart, Gift, Star, Sparkles, Baby, PartyPopper } from 'lucide-react';

interface ScrollBlockProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  gradient: string;
}

function ScrollBlock({ icon: Icon, title, subtitle, gradient }: ScrollBlockProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Zoom in effect
  const scale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0.5, 1.5, 0.5]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const iconScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 60, 0]);
  const iconRotate = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [180, 0, -180]);
  const textY = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [100, 0, -100]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      <motion.div 
        style={{ opacity }}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient}`} />
        
        {/* Glow effect */}
        <motion.div
          style={{ scale: useTransform(scrollYProgress, [0.3, 0.5], [0, 2]) }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-96 h-96 bg-white/20 rounded-full blur-3xl" />
        </motion.div>

        {/* Icon */}
        <motion.div
          style={{ 
            scale: iconScale,
            rotate: iconRotate
          }}
          className="absolute"
        >
          <Icon className="w-32 h-32 text-white" />
        </motion.div>

        {/* Text */}
        <motion.div
          style={{ 
            scale,
            y: textY
          }}
          className="absolute inset-0 flex flex-col items-center justify-center px-4"
        >
          <h2 
            className="text-white text-center mb-6"
            style={{
              fontSize: 'clamp(3rem, 12vw, 10rem)',
              lineHeight: '1',
              textShadow: `
                -4px -4px 0 #000,
                4px -4px 0 #000,
                -4px 4px 0 #000,
                4px 4px 0 #000,
                0 0 30px rgba(0,0,0,0.9)
              `
            }}
          >
            {title}
          </h2>
          
          <p
            className="text-white text-center max-w-3xl"
            style={{
              fontSize: 'clamp(1.25rem, 4vw, 2.5rem)',
              textShadow: `
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                2px 2px 0 #000,
                0 0 15px rgba(0,0,0,0.8)
              `
            }}
          >
            {subtitle}
          </p>
        </motion.div>

        {/* Particles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              x: useTransform(
                scrollYProgress, 
                [0.4, 0.6], 
                [0, (Math.random() - 0.5) * 800]
              ),
              y: useTransform(
                scrollYProgress, 
                [0.4, 0.6], 
                [0, (Math.random() - 0.5) * 800]
              ),
              opacity: useTransform(scrollYProgress, [0.4, 0.5, 0.6], [0, 1, 0]),
              rotate: useTransform(scrollYProgress, [0.4, 0.6], [0, 360])
            }}
            className="absolute top-1/2 left-1/2 w-4 h-4 rounded-full bg-white/60 pointer-events-none"
          />
        ))}
      </motion.div>
    </div>
  );
}

export function ScrollTextBlocks() {
  return (
    <div className="relative">
      {/* Intro section */}
      <div className="h-screen bg-gradient-to-br from-[#faf8fb] via-white to-[#f5edf8] flex items-center justify-center">
        <div className="text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-[#6b1a3d] mb-6"
          >
            גלול למטה לחוויה מדהימה
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-xl"
          >
            כל גלילה תביא הפתעה חדשה
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12"
          >
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-[#6b1a3d]"
            >
              <p className="mb-2">⬇️</p>
              <p>גלול</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Blocks */}
      <ScrollBlock
        icon={Camera}
        title="צילום מקצועי"
        subtitle="אנחנו לוכדים את הרגעים המושלמים שלך"
        gradient="from-[#6b1a3d] via-[#4d184d] to-black"
      />

      <ScrollBlock
        icon={Heart}
        title="עם אהבה"
        subtitle="כל אירוע מטופל באהבה ותשומת לב"
        gradient="from-[#c9a9b8] via-[#8b2e3f] to-[#6b1a3d]"
      />

      <ScrollBlock
        icon={Gift}
        title="חבילות מיוחדות"
        subtitle="מגוון חבילות מותאמות אישית לכל סוג אירוע"
        gradient="from-[#8b2e3f] via-[#722f37] to-[#4d184d]"
      />

      <ScrollBlock
        icon={Baby}
        title="ברית מושלמת"
        subtitle="אירוע הברית שלכם ראוי לתיעוד מושלם"
        gradient="from-[#4d184d] via-[#6b1a3d] to-[#8b2e3f]"
      />

      <ScrollBlock
        icon={Star}
        title="בר מצווה בסטייל"
        subtitle="יום מיוחד שיזכר לנצח עם הצילומים שלנו"
        gradient="from-[#722f37] via-[#8b2e3f] to-[#c9a9b8]"
      />

      <ScrollBlock
        icon={PartyPopper}
        title="חגיגה מושלמת"
        subtitle="כל חגיגה הופכת לבלתי נשכחת איתנו"
        gradient="from-[#6b1a3d] via-[#c9a9b8] to-[#4d184d]"
      />

      <ScrollBlock
        icon={Sparkles}
        title="הקסם שלנו"
        subtitle="אנחנו יוצרים רגעים קסומים שנשארים לנצח"
        gradient="from-[#4d184d] via-[#722f37] to-[#8b2e3f]"
      />

      {/* End section */}
      <div className="h-screen bg-gradient-to-br from-[#faf8fb] via-white to-[#f5edf8] flex items-center justify-center">
        <div className="text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#6b1a3d] mb-6">
              מוכנים להתחיל?
            </h2>
            <p className="text-slate-600 text-xl mb-8">
              בואו ניצור משהו מדהים ביחד
            </p>
            <motion.a
              href="tel:+972542330001"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-12 py-4 bg-gradient-to-r from-[#6b1a3d] to-[#4d184d] text-white rounded-full text-xl shadow-xl hover:shadow-2xl transition-shadow"
            >
              צרו קשר עכשיו
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
