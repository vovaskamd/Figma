import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Camera, Sparkles } from 'lucide-react';

interface ScrollCameraAttackProps {
  title?: string;
  subtitle?: string;
}

export function ScrollCameraAttack({ 
  title = "תפסנו אותך!",
  subtitle = "רגע מושלם לצילום"
}: ScrollCameraAttackProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Transform values based on scroll
  const cameraScale = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [0, 50, 0]);
  const cameraRotate = useTransform(scrollYProgress, [0.2, 0.5, 0.8], [180, 0, -180]);
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0]);
  const textScale = useTransform(scrollYProgress, [0.3, 0.5, 0.7], [0.5, 1, 0.5]);
  const flashOpacity = useTransform(scrollYProgress, [0.35, 0.37, 0.39], [0, 1, 0]);

  return (
    <div ref={containerRef} className="relative h-[200vh]">
      {/* Sticky container */}
      <motion.div 
        style={{ opacity }}
        className="sticky top-0 h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6b1a3d] via-[#4d184d] to-black" />
        
        {/* Flash effect */}
        <motion.div
          style={{ opacity: flashOpacity }}
          className="absolute inset-0 bg-white pointer-events-none z-10"
        />

        {/* Animated rings */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              scale: useTransform(scrollYProgress, [0.4, 0.6], [1, 3 + i]),
              opacity: useTransform(scrollYProgress, [0.4, 0.6], [0.8, 0])
            }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
          >
            <div 
              className="border-4 border-white rounded-full"
              style={{
                width: '200px',
                height: '200px'
              }}
            />
          </motion.div>
        ))}

        {/* Camera icon */}
        <motion.div
          style={{ 
            scale: cameraScale,
            rotate: cameraRotate
          }}
          className="relative z-20"
        >
          <Camera className="w-24 h-24 text-white" />
        </motion.div>

        {/* Main Title */}
        <motion.div
          style={{ scale: textScale }}
          className="absolute inset-0 flex flex-col items-center justify-center z-30 pointer-events-none"
        >
          <motion.h1 
            className="text-white text-center px-4 mb-4"
            style={{
              fontSize: 'clamp(3rem, 10vw, 8rem)',
              textShadow: `
                -3px -3px 0 #000,
                3px -3px 0 #000,
                -3px 3px 0 #000,
                3px 3px 0 #000,
                0 0 20px rgba(0,0,0,0.8)
              `
            }}
          >
            {title}
          </motion.h1>
          
          <motion.p
            className="text-white/90 text-center px-4"
            style={{
              fontSize: 'clamp(1.5rem, 4vw, 3rem)',
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
          </motion.p>

          {/* Sparkles decoration */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
            className="mt-8"
          >
            <Sparkles className="w-12 h-12 text-yellow-300" />
          </motion.div>
        </motion.div>

        {/* Particle effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              x: useTransform(
                scrollYProgress, 
                [0.4, 0.6], 
                [0, (Math.random() - 0.5) * 1000]
              ),
              y: useTransform(
                scrollYProgress, 
                [0.4, 0.6], 
                [0, (Math.random() - 0.5) * 1000]
              ),
              opacity: useTransform(scrollYProgress, [0.4, 0.6], [0, 1]),
              scale: useTransform(scrollYProgress, [0.4, 0.6], [0, 2])
            }}
            className="absolute top-1/2 left-1/2 w-3 h-3 rounded-full pointer-events-none z-20"
            style={{
              background: ['#6b1a3d', '#4d184d', '#8b2e3f', '#c9a9b8', '#ffd700'][i % 5]
            }}
          />
        ))}

        {/* Scroll indicator at the beginning */}
        <motion.div
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0])
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/60 text-center z-30"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <p className="text-sm mb-2">גלול למטה</p>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full mx-auto flex items-start justify-center p-2">
              <motion.div 
                className="w-1.5 h-1.5 bg-white/60 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
