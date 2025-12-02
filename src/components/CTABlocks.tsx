import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Sparkles, Phone, Calendar, Gift, Heart, Star, Zap } from 'lucide-react';

// CTA Block 1: Explosive Zoom with Confetti
export function CTAExplosive() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShowConfetti(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with explosive animation */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ 
          type: 'spring',
          stiffness: 100,
          damping: 15,
          mass: 1.5
        }}
        className="absolute inset-0 bg-gradient-to-br from-[#6b1a3d] via-[#8b2e3f] to-[#4d184d]"
      >
        {/* Decorative circles */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 3, opacity: 0.3 } : {}}
          transition={{ delay: 0.2, duration: 1.5 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full blur-3xl"
        />
      </motion.div>

      {/* Confetti particles */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: '50%',
                y: '50%',
                scale: 0,
                opacity: 1
              }}
              animate={{ 
                x: `${Math.random() * 100}%`,
                y: `${Math.random() * 100}%`,
                scale: [0, 1, 0.8],
                opacity: [1, 1, 0],
                rotate: Math.random() * 360
              }}
              transition={{ 
                duration: 1.5 + Math.random() * 1,
                delay: Math.random() * 0.3,
                ease: 'easeOut'
              }}
              className="absolute w-3 h-3 rounded-full"
              style={{ 
                backgroundColor: ['#c9a9b8', '#8b2e3f', '#ffd700', '#fff', '#c9a9b8'][i % 5]
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <motion.div
        initial={{ scale: 0, opacity: 0, rotateY: 180 }}
        animate={isInView ? { scale: 1, opacity: 1, rotateY: 0 } : {}}
        transition={{ 
          delay: 0.3,
          type: 'spring',
          stiffness: 120,
          damping: 20
        }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          animate={isInView ? { 
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          } : {}}
          transition={{ 
            delay: 0.8,
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 3
          }}
          className="inline-block mb-6"
        >
          <Sparkles className="w-20 h-20 text-yellow-300" />
        </motion.div>
        
        <h2 className="text-white text-6xl md:text-8xl mb-6">
          מוכנים לחגיגה?
        </h2>
        <p className="text-white/90 text-2xl md:text-3xl mb-12">
          בואו ליצור את האירוע המושלם שלכם!
        </p>
        
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-[#6b1a3d] px-12 py-6 rounded-full text-2xl shadow-2xl hover:shadow-yellow-300/50 transition-all"
        >
          <div className="flex items-center gap-3">
            <Phone className="w-8 h-8" />
            <span>צרו קשר עכשיו!</span>
          </div>
        </motion.button>
      </motion.div>
    </div>
  );
}

// CTA Block 2: 3D Flip Card Effect
export function CTA3DFlip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf8fb] to-[#f5edf8] overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        className="absolute inset-0"
      >
        <motion.div
          animate={isInView ? {
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          } : {}}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-32 -right-32 w-96 h-96 bg-[#c9a9b8]/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={isInView ? {
            scale: [1, 1.3, 1],
            rotate: [0, -180, -360]
          } : {}}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-32 -left-32 w-96 h-96 bg-[#8b2e3f]/20 rounded-full blur-3xl"
        />
      </motion.div>

      {/* 3D Flip Card */}
      <motion.div
        initial={{ rotateY: -90, opacity: 0, scale: 0.5 }}
        animate={isInView ? { rotateY: 0, opacity: 1, scale: 1 } : {}}
        transition={{ 
          type: 'spring',
          stiffness: 80,
          damping: 15,
          delay: 0.2
        }}
        style={{ perspective: 1000 }}
        className="relative z-10 w-full max-w-5xl mx-6"
      >
        <div className="bg-gradient-to-br from-[#6b1a3d] to-[#4d184d] rounded-3xl p-12 md:p-20 shadow-2xl">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="text-center"
          >
            <div className="flex justify-center gap-4 mb-8">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: 0
                }}
              >
                <Gift className="w-16 h-16 text-yellow-300" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.3
                }}
              >
                <Heart className="w-16 h-16 text-pink-300" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.6
                }}
              >
                <Star className="w-16 h-16 text-yellow-300" />
              </motion.div>
            </div>

            <h2 className="text-white text-5xl md:text-7xl mb-6">
              הזמינו עכשיו!
            </h2>
            <p className="text-white/90 text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
              קבלו 20% הנחה על חבילות לחודש הקרוב
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(255,255,255,0.5)' }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#6b1a3d] px-10 py-5 rounded-full text-xl"
              >
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6" />
                  <span>הזמינו תור</span>
                </div>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-10 py-5 rounded-full text-xl hover:bg-white/10"
              >
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6" />
                  <span>050-123-4567</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// CTA Block 3: Expanding Circle from Center
export function CTAExpandingCircle() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1a2e]">
      {/* Expanding circles */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 50, opacity: 0.3 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#6b1a3d]"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 40, opacity: 0.4 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#8b2e3f]"
      />
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 30, opacity: 0.5 } : {}}
        transition={{ duration: 1.5, ease: 'easeOut', delay: 0.2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#c9a9b8]"
      />

      {/* Content */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ 
          delay: 0.8,
          type: 'spring',
          stiffness: 100,
          damping: 20
        }}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={isInView ? { rotate: 360 } : {}}
          transition={{ 
            delay: 1,
            duration: 1,
            ease: 'easeInOut'
          }}
          className="inline-block mb-8"
        >
          <Zap className="w-24 h-24 text-yellow-300" />
        </motion.div>

        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="text-white text-6xl md:text-8xl mb-6"
        >
          הופ! תפסתם אותנו
        </motion.h2>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.4 }}
          className="text-white/90 text-2xl md:text-3xl mb-12"
        >
          מבצע מיוחד רק לכם - 30% הנחה!
        </motion.p>

        <motion.button
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.6 }}
          whileHover={{ 
            scale: 1.1,
            boxShadow: '0 0 50px rgba(255, 215, 0, 0.8)'
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-yellow-400 to-yellow-300 text-[#6b1a3d] px-14 py-7 rounded-full text-2xl shadow-2xl"
        >
          <span>תופסים את המבצע!</span>
        </motion.button>
      </motion.div>
    </div>
  );
}

// CTA Block 4: Wave Ripple Effect
export function CTAWaveRipple() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <div ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ripple waves */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#4d184d] via-[#6b1a3d] to-[#8b2e3f]">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0, opacity: 0.8 }}
            animate={isInView ? { 
              scale: [0, 3, 5],
              opacity: [0.8, 0.4, 0]
            } : {}}
            transition={{ 
              duration: 3,
              delay: i * 0.3,
              repeat: Infinity,
              repeatDelay: 1
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-4 border-white"
          />
        ))}
      </div>

      {/* Content with slide-in effect */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ x: -1000, rotate: -180 }}
          animate={isInView ? { x: 0, rotate: 0 } : {}}
          transition={{ 
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: 0.3
          }}
          className="mb-12"
        >
          <h2 className="text-white text-6xl md:text-8xl">
            בואו נחגוג ביחד!
          </h2>
        </motion.div>

        <motion.div
          initial={{ x: 1000, rotate: 180 }}
          animate={isInView ? { x: 0, rotate: 0 } : {}}
          transition={{ 
            type: 'spring',
            stiffness: 50,
            damping: 20,
            delay: 0.5
          }}
        >
          <p className="text-white/90 text-2xl md:text-3xl mb-12">
            צוות מקצועי • ציוד איכותי • זיכרונות לכל החיים
          </p>
        </motion.div>

        <motion.div
          initial={{ scale: 0, y: 100 }}
          animate={isInView ? { scale: 1, y: 0 } : {}}
          transition={{ 
            type: 'spring',
            stiffness: 100,
            damping: 15,
            delay: 0.8
          }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, -5, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-[#6b1a3d] px-12 py-6 rounded-full text-2xl shadow-2xl group"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-8 h-8" />
              </motion.div>
              <span>להתחיל לתכנן!</span>
            </div>
          </motion.button>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 1.2 }}
            className="text-white text-xl"
          >
            או התקשרו: <span className="font-bold">050-123-4567</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
