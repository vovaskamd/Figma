import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  id: number;
  url: string;
  alt: string;
}

const carouselImages: CarouselImage[] = [
  { id: 1, url: 'https://picsum.photos/seed/1/800/600', alt: 'תמונה 1' },
  { id: 2, url: 'https://picsum.photos/seed/2/800/600', alt: 'תמונה 2' },
  { id: 3, url: 'https://picsum.photos/seed/3/800/600', alt: 'תמונה 3' },
  { id: 4, url: 'https://picsum.photos/seed/4/800/600', alt: 'תמונה 4' },
  { id: 5, url: 'https://picsum.photos/seed/5/800/600', alt: 'תמונה 5' },
  { id: 6, url: 'https://picsum.photos/seed/6/800/600', alt: 'תמונה 6' },
  { id: 7, url: 'https://picsum.photos/seed/7/800/600', alt: 'תמונה 7' },
  { id: 8, url: 'https://picsum.photos/seed/8/800/600', alt: 'תמונה 8' },
  { id: 9, url: 'https://picsum.photos/seed/9/800/600', alt: 'תמונה 9' },
  { id: 10, url: 'https://picsum.photos/seed/10/800/600', alt: 'תמונה 10' },
  { id: 11, url: 'https://picsum.photos/seed/11/800/600', alt: 'תמונה 11' },
  { id: 12, url: 'https://picsum.photos/seed/12/800/600', alt: 'תמונה 12' },
  { id: 13, url: 'https://picsum.photos/seed/13/800/600', alt: 'תמונה 13' },
  { id: 14, url: 'https://picsum.photos/seed/14/800/600', alt: 'תמונה 14' },
  { id: 15, url: 'https://picsum.photos/seed/15/800/600', alt: 'תמונה 15' },
  { id: 16, url: 'https://picsum.photos/seed/16/800/600', alt: 'תמונה 16' },
  { id: 17, url: 'https://picsum.photos/seed/17/800/600', alt: 'תמונה 17' },
  { id: 18, url: 'https://picsum.photos/seed/18/800/600', alt: 'תמונה 18' },
  { id: 19, url: 'https://picsum.photos/seed/19/800/600', alt: 'תמונה 19' },
  { id: 20, url: 'https://picsum.photos/seed/20/800/600', alt: 'תמונה 20' },
];

export function SimpleCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const goToPrevious = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  return (
    <section 
      className="py-12 bg-gradient-to-br from-[#faf8fb] to-white overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto">
          {/* Carousel Container */}
          <div className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden bg-slate-100">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 }
                }}
                className="absolute inset-0"
              >
                <img
                  src={carouselImages[currentIndex].url}
                  alt={carouselImages[currentIndex].alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3D1152]/60 via-transparent to-transparent flex items-end justify-center p-8">
                  <p className="text-white text-xl md:text-2xl">
                    {carouselImages[currentIndex].alt}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Previous Button */}
            <motion.button
              onClick={goToPrevious}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Previous slide"
              style={{ color: '#3D1152' }}
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={goToNext}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Next slide"
              style={{ color: '#3D1152' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6 flex-wrap">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-[#3D1152] w-8'
                    : 'bg-[#E8B15C]/40 hover:bg-[#E8B15C]'
                }`}
                aria-label={`Перейти к слайду ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
