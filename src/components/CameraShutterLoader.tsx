import { motion } from 'motion/react';
import { Camera } from 'lucide-react';

export function CameraShutterLoader() {
  // Create 8 blade segments for camera aperture effect
  const blades = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#6b1a3d] via-[#4d184d] to-[#8b2e3f]">
      {/* Camera shutter blades */}
      <div className="relative w-64 h-64">
        {/* Shutter blade container */}
        <div className="absolute inset-0 overflow-hidden rounded-full">
          {blades.map((blade) => {
            const rotation = (blade * 360) / 8;
            return (
              <motion.div
                key={blade}
                className="absolute inset-0 origin-center"
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
                transition={{
                  duration: 0.6,
                  delay: blade * 0.05,
                  ease: 'easeOut',
                }}
              >
                <motion.div
                  className="absolute left-1/2 top-0 w-32 h-64 -translate-x-1/2 bg-gradient-to-b from-white/90 to-white/70"
                  style={{
                    clipPath: 'polygon(50% 0%, 65% 50%, 50% 100%, 35% 50%)',
                    boxShadow: 'inset 0 0 20px rgba(0,0,0,0.1)',
                  }}
                  initial={{ scaleY: 1 }}
                  animate={{ scaleY: 0 }}
                  exit={{ scaleY: 1 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + blade * 0.03,
                    ease: [0.645, 0.045, 0.355, 1.0],
                  }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Center circle - camera body effect */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          transition={{
            duration: 0.5,
            ease: 'easeOut',
          }}
        >
          <div className="relative">
            {/* Outer ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-white/40 to-white/10 blur-md"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              style={{
                width: '80px',
                height: '80px',
                margin: '-10px',
              }}
            />

            {/* Camera icon container */}
            <motion.div
              className="relative bg-white rounded-full p-4 shadow-2xl"
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <Camera className="w-12 h-12 text-[#4d184d]" />
            </motion.div>
          </div>
        </motion.div>

        {/* Light rays effect */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute left-1/2 top-1/2 w-1 h-32 -translate-x-1/2 origin-bottom"
              style={{
                background: 'linear-gradient(to top, rgba(255,255,255,0), rgba(255,255,255,0.3))',
                transform: `rotate(${i * 30}deg) translateY(-130px)`,
              }}
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: [0, 0.6, 0], scaleY: [0, 1, 0] }}
              transition={{
                duration: 1,
                delay: 0.2 + i * 0.05,
                ease: 'easeOut',
              }}
            />
          ))}
        </div>
      </div>

      {/* Loading text */}
      <motion.div
        className="absolute bottom-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p className="text-white drop-shadow-lg">טוען את הדף...</p>
        <motion.div
          className="mt-2 flex justify-center gap-1"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                delay: i * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}