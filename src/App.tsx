import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Baby, Sparkles, Heart, Gift } from 'lucide-react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { BritPage } from './pages/BritPage';
import { BarMitzvahPage } from './pages/BarMitzvahPage';
import { CatalogPage } from './pages/CatalogPage';
import { ContactPage } from './pages/ContactPage';
import { ExperimentPage } from './pages/ExperimentPage';
import { PhotozoneBuilderPage } from './pages/PhotozoneBuilderPage';
import { Experiments2Page } from './pages/Experiments2Page';
import { CameraShutterLoader } from './components/CameraShutterLoader';
import { inlineColors, animationColors } from './styles/design-system';

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState('home');
  const [isPageLoading, setIsPageLoading] = useState(false);

  useEffect(() => {
    if (showIntro) {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(timer);
            return 100;
          }
          return prev + 2;
        });
      }, 40);

      return () => clearInterval(timer);
    }
  }, [showIntro]);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setShowIntro(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  // Handle page navigation with loading animation
  const handlePageChange = (page: string) => {
    if (page !== currentPage) {
      setIsPageLoading(true);
      // Simulate page loading time
      setTimeout(() => {
        setCurrentPage(page);
        setTimeout(() => {
          setIsPageLoading(false);
        }, 1000); // Duration of shutter animation
      }, 100);
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handlePageChange} />;
      case 'brit':
        return <BritPage />;
      case 'bar-mitzvah':
        return <BarMitzvahPage />;
      case 'catalog':
        return <CatalogPage onNavigate={handlePageChange} />;
      case 'contact':
        return <ContactPage />;
      case 'experiment':
        return <ExperimentPage />;
      case 'photozone-builder':
        return <PhotozoneBuilderPage />;
      case 'experiments2':
        return <Experiments2Page />;
      default:
        return <HomePage onNavigate={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen" dir="rtl" lang="he">
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="fixed inset-0 z-50"
          >
            <div 
              className="relative w-full h-full overflow-hidden"
              style={{
                background: `linear-gradient(to bottom right, ${inlineColors.primary.deep}, ${inlineColors.primary.medium}, ${inlineColors.primary.light})`
              }}
            >
              {/* Animated balloons background */}
              <div className="absolute inset-0">
                {[...Array(10)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${(i * 12) % 100}%`,
                      bottom: '-10%',
                    }}
                    animate={{
                      y: [0, -window.innerHeight - 100],
                      x: [0, Math.sin(i) * 40],
                    }}
                    transition={{
                      duration: 8 + i * 0.5,
                      repeat: Infinity,
                      ease: 'linear',
                      delay: i * 0.4,
                    }}
                  >
                    <div
                      className="w-16 h-20 rounded-full shadow-lg"
                      style={{
                        background: [
                          `linear-gradient(to bottom, ${inlineColors.primary.deep}, ${inlineColors.primary.medium})`,
                          `linear-gradient(to bottom, ${inlineColors.primary.medium}, ${inlineColors.primary.light})`,
                          `linear-gradient(to bottom, ${inlineColors.primary.light}, ${inlineColors.primary.blush})`,
                          `linear-gradient(to bottom, ${inlineColors.primary.deep}, ${inlineColors.primary.light})`,
                          `linear-gradient(to bottom, ${inlineColors.primary.medium}, ${inlineColors.primary.blush})`,
                          `linear-gradient(to bottom, ${inlineColors.primary.deep}, ${inlineColors.primary.blush})`,
                          `linear-gradient(to bottom, ${inlineColors.primary.light}, ${inlineColors.primary.medium})`,
                          `linear-gradient(to bottom, ${inlineColors.primary.blush}, ${inlineColors.primary.light})`,
                          `linear-gradient(to bottom, ${inlineColors.primary.deep}, ${inlineColors.primary.medium})`,
                          `linear-gradient(to bottom, ${inlineColors.primary.medium}, ${inlineColors.primary.deep})`,
                        ][i % 10],
                      }}
                    >
                      <div className="w-full h-full rounded-full relative">
                        <div
                          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-12 bg-gray-600/30"
                          style={{ top: '100%' }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Confetti particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(25)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: '-5%',
                      background: animationColors[i % 5],
                      borderRadius: Math.random() > 0.5 ? '50%' : '0',
                    }}
                    animate={{
                      y: [0, window.innerHeight + 50],
                      x: [0, (Math.random() - 0.5) * 200],
                      rotate: [0, 360 * (Math.random() > 0.5 ? 1 : -1)],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                      ease: 'linear',
                    }}
                  />
                ))}
              </div>

              {/* Main content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
                {/* Logo animation */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{
                    type: 'spring',
                    stiffness: 180,
                    damping: 15,
                    delay: 0.2,
                  }}
                  className="mb-8"
                >
                  <div className="relative">
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      className="absolute inset-0 rounded-full bg-white/40 blur-xl"
                    />
                    <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-full border-4 border-white shadow-2xl">
                      <Camera className="w-16 h-16" style={{ color: inlineColors.primary.deep }} />
                      <motion.div
                        className="absolute -top-2 -right-2"
                        animate={{ rotate: [0, 20, 0], scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Baby className="w-8 h-8" style={{ color: inlineColors.primary.light }} />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Title animation */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-center mb-6"
                >
                  <h1 className="text-white drop-shadow-lg mb-2">Argaman</h1>
                  <div className="flex items-center justify-center gap-2">
                    <Sparkles className="w-6 h-6 text-yellow-300" />
                    <p className="text-white/90 text-center">בלונים וצילום לאירועים</p>
                    <Sparkles className="w-6 h-6 text-yellow-300" />
                  </div>
                </motion.div>

                {/* Animated tagline */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="mb-12"
                >
                  <p className="text-white/80 text-center max-w-md">
                    יוצרים זיכרונות בלתי נשכחים עם עיצוב בלונים מושלם וצילום מקצועי
                  </p>
                </motion.div>

                {/* Progress section */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="w-80 mb-8"
                >
                  <div className="bg-white/30 backdrop-blur-md rounded-full p-1 shadow-lg">
                    <div className="h-3 bg-white/40 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full relative"
                        style={{ 
                          background: `linear-gradient(to right, ${inlineColors.primary.light}, ${inlineColors.primary.medium}, ${inlineColors.primary.deep})`
                        }}
                        initial={{ width: '0%' }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30"
                          animate={{ x: ['-100%', '100%'] }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        />
                      </motion.div>
                    </div>
                  </div>
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-white drop-shadow text-center mt-3"
                  >
                    מכינים משהו מיוחד... {progress}%
                  </motion.p>
                </motion.div>

                {/* Floating icons */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    className="absolute top-1/4 right-1/4"
                    animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Heart className="w-12 h-12 text-pink-300/60 fill-pink-300/40" />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/3 left-1/4"
                    animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Gift className="w-10 h-10 text-purple-300/60" />
                  </motion.div>

                  <motion.div
                    className="absolute bottom-1/3 right-1/3"
                    animate={{ y: [0, -20, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                  >
                    <Camera className="w-11 h-11 text-purple-300/60" />
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="min-h-screen"
          >
            <Navigation currentPage={currentPage} onNavigate={handlePageChange} />
            
            <motion.div
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {renderPage()}
            </motion.div>

            <Footer onNavigate={handlePageChange} />

            {/* Camera Shutter Loader Overlay */}
            <AnimatePresence>
              {isPageLoading && (
                <motion.div
                  key="shutter-loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <CameraShutterLoader />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}