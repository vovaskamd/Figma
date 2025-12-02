import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Sparkles, Heart, Gift, Star, Baby, PartyPopper, Zap, Circle, X, ArrowLeft } from 'lucide-react';
import { ScrollTextBlocks } from './ScrollTextBlocks';

export function JumpAtYouBlocks() {
  const [activeDemo, setActiveDemo] = useState<number | null>(null);
  const [showScrollDemo, setShowScrollDemo] = useState(false);

  const closeDemo = () => setActiveDemo(null);

  // Show scroll demo
  if (showScrollDemo) {
    return (
      <div className="relative">
        {/* Back button */}
        <button
          onClick={() => setShowScrollDemo(false)}
          className="fixed top-24 right-4 z-50 flex items-center gap-2 px-6 py-3 bg-white/90 backdrop-blur-sm hover:bg-white text-[#6b1a3d] rounded-full shadow-lg transition-all hover:shadow-xl"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>חזרה לתפריט</span>
        </button>
        <ScrollTextBlocks />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#faf8fb] via-white to-[#f5edf8] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-[#6b1a3d] mb-4">🚀 אפקטים שקופצים עליך</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            לחץ על כל כרטיס כדי לראות את האפקט המדהים על מסך מלא
          </p>
        </motion.div>

        {/* Demo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Demo 1: Camera Zoom Attack */}
          <DemoCard
            title="📸 התקפת מצלמה"
            description="מצלמה שמתקרבת במהירות עם אפקט זום דרמטי"
            gradient="from-[#6b1a3d] to-[#4d184d]"
            onClick={() => setActiveDemo(1)}
          />

          {/* Demo 2: Balloon Pop */}
          <DemoCard
            title="🎈 בלון מתפוצץ"
            description="בלון שעף לעברך ומתפוצץ עם קונפטי"
            gradient="from-[#8b2e3f] to-[#6b1a3d]"
            onClick={() => setActiveDemo(2)}
          />

          {/* Demo 3: 3D Cube Flip */}
          <DemoCard
            title="🎲 קוביה מסתובבת"
            description="קוביה תלת-ממדית שמסתובבת ומתקרבת"
            gradient="from-[#4d184d] to-[#722f37]"
            onClick={() => setActiveDemo(3)}
          />

          {/* Demo 4: Sparkle Explosion */}
          <DemoCard
            title="✨ פיצוץ ניצוצות"
            description="פיצוץ של ניצוצות שממלא את המסך"
            gradient="from-[#722f37] to-[#8b2e3f]"
            onClick={() => setActiveDemo(4)}
          />

          {/* Demo 5: Heart Pulse */}
          <DemoCard
            title="💖 לב פועם"
            description="לב שפועם ומתקרב עם גלי אהבה"
            gradient="from-[#c9a9b8] to-[#8b2e3f]"
            onClick={() => setActiveDemo(5)}
          />

          {/* Demo 6: Confetti Rain */}
          <DemoCard
            title="🎉 גשם קונפטי"
            description="קונפטי שנופל מכל הכיוונים"
            gradient="from-[#6b1a3d] to-[#c9a9b8]"
            onClick={() => setActiveDemo(6)}
          />

          {/* Demo 7: Scroll Text */}
          <DemoCard
            title="📜 הטקסט מתגלגל"
            description="טקסט שמתגלגל ומלא את המסך"
            gradient="from-[#4d184d] to-[#c9a9b8]"
            onClick={() => setShowScrollDemo(true)}
          />
        </div>

        {/* Full Screen Demos */}
        <AnimatePresence>
          {activeDemo === 1 && <CameraZoomDemo onClose={closeDemo} />}
          {activeDemo === 2 && <BalloonPopDemo onClose={closeDemo} />}
          {activeDemo === 3 && <CubeFlipDemo onClose={closeDemo} />}
          {activeDemo === 4 && <SparkleExplosionDemo onClose={closeDemo} />}
          {activeDemo === 5 && <HeartPulseDemo onClose={closeDemo} />}
          {activeDemo === 6 && <ConfettiRainDemo onClose={closeDemo} />}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Demo Card Component
function DemoCard({ title, description, gradient, onClick }: {
  title: string;
  description: string;
  gradient: string;
  onClick: () => void;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`cursor-pointer p-6 rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg hover:shadow-2xl transition-shadow`}
    >
      <h3 className="mb-2">{title}</h3>
      <p className="text-white/90 text-sm">{description}</p>
      <div className="mt-4 flex items-center gap-2 text-white/80 text-sm">
        <Zap className="w-4 h-4" />
        <span>לחץ להפעלה</span>
      </div>
    </motion.div>
  );
}

// Demo 1: Camera Zoom Attack
function CameraZoomDemo({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#6b1a3d] via-[#4d184d] to-black flex items-center justify-center"
      onClick={onClose}
    >
      <CloseButton onClick={onClose} />
      
      {/* Flash effect */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0, 1, 0] }}
        transition={{ times: [0, 0.1, 0.2, 0.3, 0.4], duration: 0.4 }}
        className="absolute inset-0 bg-white pointer-events-none"
      />

      {/* Camera zooming in */}
      <motion.div
        initial={{ scale: 0.1, rotate: -180, opacity: 0 }}
        animate={{ 
          scale: [0.1, 50, 60],
          rotate: [180, 0, 0],
          opacity: [0, 1, 1]
        }}
        transition={{ 
          duration: 2,
          times: [0, 0.7, 1],
          ease: [0.34, 1.56, 0.64, 1]
        }}
        className="relative"
      >
        <Camera className="w-24 h-24 text-white" />
        
        {/* Rings expanding */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 1, opacity: 0.8 }}
            animate={{ scale: [1, 3, 5], opacity: [0.8, 0.3, 0] }}
            transition={{ 
              duration: 2,
              delay: i * 0.3,
              repeat: Infinity,
              ease: "easeOut"
            }}
            className="absolute inset-0 border-4 border-white rounded-full"
          />
        ))}
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-20 text-center text-white"
      >
        <h2>📸 Captured!</h2>
        <p className="text-white/80">לחץ בכל מקום לסגירה</p>
      </motion.div>
    </motion.div>
  );
}

// Demo 2: Balloon Pop
function BalloonPopDemo({ onClose }: { onClose: () => void }) {
  const [popped, setPopped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#8b2e3f] via-[#6b1a3d] to-[#4d184d] flex items-center justify-center overflow-hidden"
      onClick={() => !popped && setPopped(true)}
    >
      <CloseButton onClick={onClose} />

      {!popped ? (
        <>
          {/* Balloon flying towards you */}
          <motion.div
            initial={{ scale: 0.2, y: 500, rotate: -20 }}
            animate={{ 
              scale: [0.2, 15, 20],
              y: [500, 0, -50],
              rotate: [-20, 5, 0]
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut"
            }}
            className="relative"
          >
            <div className="w-32 h-40 bg-gradient-to-b from-[#c9a9b8] to-[#8b2e3f] rounded-full relative shadow-2xl">
              {/* Shine effect */}
              <div className="absolute top-6 left-6 w-8 h-12 bg-white/40 rounded-full blur-sm" />
              {/* String */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0.5 h-20 bg-gray-600/50" 
                   style={{ top: '100%' }} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-20 text-white text-center"
          >
            <p className="text-xl">לחץ על הבלון! 🎈</p>
          </motion.div>
        </>
      ) : (
        <>
          {/* Confetti explosion */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ 
                x: 0, 
                y: 0, 
                scale: 1,
                opacity: 1
              }}
              animate={{
                x: (Math.random() - 0.5) * window.innerWidth,
                y: (Math.random() - 0.5) * window.innerHeight,
                scale: [1, 2, 0],
                opacity: [1, 1, 0],
                rotate: Math.random() * 720
              }}
              transition={{
                duration: 2,
                ease: "easeOut"
              }}
              className="absolute top-1/2 left-1/2 w-4 h-4"
              style={{
                background: ['#6b1a3d', '#4d184d', '#8b2e3f', '#c9a9b8', '#722f37'][i % 5],
                borderRadius: Math.random() > 0.5 ? '50%' : '0'
              }}
            />
          ))}

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-white text-center"
          >
            <h2 className="mb-4">🎉 פופ!</h2>
            <p className="text-white/80">לחץ בכל מקום לסגירה</p>
          </motion.div>
        </>
      )}
    </motion.div>
  );
}

// Demo 3: 3D Cube Flip
function CubeFlipDemo({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#4d184d] via-[#722f37] to-black flex items-center justify-center"
      onClick={onClose}
      style={{ perspective: '1000px' }}
    >
      <CloseButton onClick={onClose} />

      {/* 3D Rotating Cube */}
      <motion.div
        initial={{ 
          scale: 0.1,
          rotateX: 0,
          rotateY: 0,
          z: -1000
        }}
        animate={{ 
          scale: [0.1, 1.5, 1],
          rotateX: [0, 360, 720],
          rotateY: [0, 360, 720],
          z: [-1000, 100, 0]
        }}
        transition={{
          duration: 3,
          ease: "easeInOut"
        }}
        className="relative"
        style={{
          transformStyle: 'preserve-3d',
          width: '300px',
          height: '300px'
        }}
      >
        {/* Cube faces */}
        {[
          { transform: 'translateZ(150px)', bg: 'from-[#6b1a3d] to-[#8b2e3f]', icon: Camera },
          { transform: 'rotateY(180deg) translateZ(150px)', bg: 'from-[#4d184d] to-[#6b1a3d]', icon: Heart },
          { transform: 'rotateY(90deg) translateZ(150px)', bg: 'from-[#8b2e3f] to-[#722f37]', icon: Gift },
          { transform: 'rotateY(-90deg) translateZ(150px)', bg: 'from-[#722f37] to-[#c9a9b8]', icon: Star },
          { transform: 'rotateX(90deg) translateZ(150px)', bg: 'from-[#c9a9b8] to-[#8b2e3f]', icon: Baby },
          { transform: 'rotateX(-90deg) translateZ(150px)', bg: 'from-[#6b1a3d] to-[#4d184d]', icon: PartyPopper },
        ].map((face, i) => {
          const Icon = face.icon;
          return (
            <div
              key={i}
              className={`absolute w-full h-full bg-gradient-to-br ${face.bg} border-4 border-white/20 flex items-center justify-center`}
              style={{ transform: face.transform }}
            >
              <Icon className="w-24 h-24 text-white" />
            </div>
          );
        })}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 text-white text-center"
      >
        <h2 className="mb-2">🎲 קוביה תלת-ממדית</h2>
        <p className="text-white/80">לחץ בכל מקום לסגירה</p>
      </motion.div>
    </motion.div>
  );
}

// Demo 4: Sparkle Explosion
function SparkleExplosionDemo({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#722f37] via-[#8b2e3f] to-[#4d184d] flex items-center justify-center overflow-hidden"
      onClick={onClose}
    >
      <CloseButton onClick={onClose} />

      {/* Central sparkle */}
      <motion.div
        initial={{ scale: 0, rotate: 0 }}
        animate={{ 
          scale: [0, 20, 15],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 2 }}
      >
        <Sparkles className="w-32 h-32 text-yellow-300" />
      </motion.div>

      {/* Radiating sparkles */}
      {[...Array(30)].map((_, i) => {
        const angle = (i / 30) * Math.PI * 2;
        const distance = 600;
        return (
          <motion.div
            key={i}
            initial={{ 
              x: 0, 
              y: 0,
              scale: 0,
              opacity: 0
            }}
            animate={{
              x: Math.cos(angle) * distance,
              y: Math.sin(angle) * distance,
              scale: [0, 2, 1],
              opacity: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: 2,
              delay: i * 0.02,
              ease: "easeOut"
            }}
            className="absolute top-1/2 left-1/2"
          >
            <Sparkles 
              className="w-12 h-12"
              style={{
                color: ['#ffd700', '#ffa500', '#ff69b4', '#c9a9b8', '#fff'][i % 5]
              }}
            />
          </motion.div>
        );
      })}

      {/* Glowing circles */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0.8 }}
          animate={{ 
            scale: [0, i + 10, i + 15],
            opacity: [0.8, 0.3, 0]
          }}
          transition={{
            duration: 3,
            delay: i * 0.2,
            ease: "easeOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-yellow-300"
          style={{
            width: '100px',
            height: '100px'
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 text-white text-center"
      >
        <h2 className="mb-2">✨ פיצוץ קסום!</h2>
        <p className="text-white/80">לחץ בכל מקום לסגירה</p>
      </motion.div>
    </motion.div>
  );
}

// Demo 5: Heart Pulse
function HeartPulseDemo({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#c9a9b8] via-[#8b2e3f] to-[#6b1a3d] flex items-center justify-center overflow-hidden"
      onClick={onClose}
    >
      <CloseButton onClick={onClose} />

      {/* Pulsing heart */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ 
          scale: [0, 1.2, 1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          times: [0, 0.3, 0.5, 0.7, 1]
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1, 1.05, 1]
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Heart className="w-64 h-64 text-pink-300 fill-pink-300" />
        </motion.div>
      </motion.div>

      {/* Pulse rings */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 3, 6],
            opacity: [0, 0.6, 0]
          }}
          transition={{
            duration: 2,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeOut"
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <Heart className="w-64 h-64 text-pink-200 fill-pink-200" />
        </motion.div>
      ))}

      {/* Floating hearts */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            x: (Math.random() - 0.5) * window.innerWidth,
            y: window.innerHeight + 100,
            opacity: 0
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
            rotate: [0, 360]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute"
        >
          <Heart 
            className="text-pink-200 fill-pink-200"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`
            }}
          />
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-20 text-white text-center"
      >
        <h2 className="mb-2">💖 אהבה באוויר</h2>
        <p className="text-white/80">לחץ בכל מקום לסגירה</p>
      </motion.div>
    </motion.div>
  );
}

// Demo 6: Confetti Rain
function ConfettiRainDemo({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-[#6b1a3d] via-[#c9a9b8] to-[#4d184d] flex items-center justify-center overflow-hidden"
      onClick={onClose}
    >
      <CloseButton onClick={onClose} />

      {/* Party Popper */}
      <motion.div
        initial={{ scale: 0, rotate: -45 }}
        animate={{ 
          scale: [0, 15, 10],
          rotate: [-45, 0, 10]
        }}
        transition={{ duration: 1.5 }}
      >
        <PartyPopper className="w-32 h-32 text-yellow-300" />
      </motion.div>

      {/* Confetti pieces */}
      {[...Array(100)].map((_, i) => {
        const colors = ['#6b1a3d', '#4d184d', '#8b2e3f', '#c9a9b8', '#ffd700', '#ff69b4', '#00ff00'];
        const shapes = ['circle', 'square', 'triangle'];
        const shape = shapes[i % 3];
        
        return (
          <motion.div
            key={i}
            initial={{
              x: (Math.random() - 0.5) * 200,
              y: -100,
              rotate: 0,
              opacity: 0
            }}
            animate={{
              x: (Math.random() - 0.5) * window.innerWidth,
              y: window.innerHeight + 100,
              rotate: Math.random() * 720,
              opacity: [0, 1, 1, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: Math.random() * 1.5,
              ease: "linear"
            }}
            className="absolute"
            style={{
              width: `${8 + Math.random() * 16}px`,
              height: `${8 + Math.random() * 16}px`,
              background: colors[i % colors.length],
              borderRadius: shape === 'circle' ? '50%' : '0',
              clipPath: shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined
            }}
          />
        );
      })}

      {/* Animated text */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="absolute text-center"
      >
        <motion.h1
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-white mb-4 text-6xl"
        >
          🎉 מזל טוב! 🎊
        </motion.h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-20 text-white text-center"
      >
        <p className="text-white/80">לחץ בכל מקום לסגירה</p>
      </motion.div>
    </motion.div>
  );
}

// Close Button Component
function CloseButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 }}
      onClick={onClick}
      className="absolute top-8 left-8 z-50 bg-white/20 backdrop-blur-md hover:bg-white/30 text-white p-3 rounded-full transition-colors"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <X className="w-6 h-6" />
    </motion.button>
  );
}