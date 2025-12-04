import { motion, useMotionValue, useAnimation, PanInfo } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  id: number;
  url: string;
  alt: string;
}

const carouselImages: CarouselImage[] = [
  {
    id: 1,
    url: 'https://via.placeholder.com/600x600/3D1152/FFFFFF?text=%D7%97%D7%92%D7%99%D7%92%D7%AA+%D7%91%D7%A8%D7%99%D7%AA',
    alt: 'חגיגת ברית מושלמת'
  },
  {
    id: 2,
    url: 'https://via.placeholder.com/600x600/A03078/FFFFFF?text=%D7%A2%D7%99%D7%A6%D7%95%D7%91+%D7%91%D7%9C%D7%95%D7%A0%D7%99%D7%9D',
    alt: 'עיצוב בלונים מרהיב'
  },
  {
    id: 3,
    url: 'https://via.placeholder.com/600x600/D64B6A/FFFFFF?text=%D7%A6%D7%99%D7%9C%D7%95%D7%9D+%D7%9E%D7%92%D7%A0%D7%98%D7%99%D7%9D',
    alt: 'צילום מגנטים מיידי'
  },
  {
    id: 4,
    url: 'https://via.placeholder.com/600x600/E8B15C/FFFFFF?text=%D7%91%D7%9C%D7%95%D7%A0%D7%99%D7%9D+%D7%9B%D7%97%D7%95%D7%9C%D7%99%D7%9D',
    alt: 'בלונים כחולים לברית'
  },
  {
    id: 5,
    url: 'https://via.placeholder.com/600x600/FFF9F0/3D1152?text=%D7%A7%D7%99%D7%A9%D7%95%D7%98%D7%99+%D7%9E%D7%A1%D7%99%D7%91%D7%94',
    alt: 'קישוטי מסיבה'
  },
  {
    id: 6,
    url: 'https://via.placeholder.com/600x600/3D1152/FFFFFF?text=%D7%A2%D7%99%D7%A6%D7%95%D7%91+%D7%9C%D7%AA%D7%99%D7%A0%D7%95%D7%A7',
    alt: 'עיצוב לתינוק'
  },
  {
    id: 7,
    url: 'https://via.placeholder.com/600x600/A03078/FFFFFF?text=%D7%91%D7%9C%D7%95%D7%A0%D7%99%D7%9D+%D7%A4%D7%A1%D7%98%D7%9C',
    alt: 'בלונים פסטל עדינים'
  },
  {
    id: 8,
    url: 'https://via.placeholder.com/600x600/D64B6A/FFFFFF?text=%D7%A6%D7%99%D7%9C%D7%95%D7%9D+%D7%A0%D7%99%D7%95%D7%91%D7%95%D7%A8%D7%9F',
    alt: 'צילום ניובורן'
  },
  {
    id: 9,
    url: 'https://via.placeholder.com/600x600/E8B15C/FFFFFF?text=%D7%A7%D7%A9%D7%AA+%D7%91%D7%9C%D7%95%D7%A0%D7%99%D7%9D',
    alt: 'קשת בלונים'
  },
  {
    id: 10,
    url: 'https://via.placeholder.com/600x600/FFF9F0/3D1152?text=%D7%A6%D7%99%D7%9C%D7%95%D7%9D+%D7%97%D7%92%D7%99%D7%92%D7%95%D7%AA',
    alt: 'צילום חגיגות'
  },
  {
    id: 11,
    url: 'https://via.placeholder.com/600x600/3D1152/FFFFFF?text=%D7%A2%D7%99%D7%A6%D7%95%D7%91+%D7%97%D7%92%D7%99%D7%92%D7%99',
    alt: 'עיצוב חגיגי לתינוקות'
  },
  {
    id: 12,
    url: 'https://via.placeholder.com/600x600/A03078/FFFFFF?text=%D7%A4%D7%99%D7%A0%D7%AA+%D7%A6%D7%99%D7%9C%D7%95%D7%9D',
    alt: 'פינת צילום למסיבות'
  },
  {
    id: 13,
    url: 'https://via.placeholder.com/600x600/D64B6A/FFFFFF?text=%D7%91%D7%9C%D7%95%D7%A0%D7%99%D7%9D+%D7%9C%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D',
    alt: 'עיצוב בלונים לאירועים'
  },
  {
    id: 14,
    url: 'https://via.placeholder.com/600x600/E8B15C/FFFFFF?text=%D7%9E%D7%A1%D7%99%D7%91%D7%AA+%D7%99%D7%9C%D7%93%D7%99%D7%9D',
    alt: 'בלונים למסיבת ילדים'
  },
  {
    id: 15,
    url: 'https://via.placeholder.com/600x600/FFF9F0/3D1152?text=%D7%A1%D7%98%D7%90%D7%A4+%D7%A6%D7%99%D7%9C%D7%95%D7%9D',
    alt: 'סטאפ צילום לאירועים'
  },
  {
    id: 16,
    url: 'https://via.placeholder.com/600x600/3D1152/FFFFFF?text=%D7%A7%D7%99%D7%A9%D7%95%D7%98%D7%99%D7%9D+%D7%A6%D7%91%D7%A2%D7%95%D7%A0%D7%99%D7%99%D7%9D',
    alt: 'קישוטים צבעוניים למסיבה'
  },
  {
    id: 17,
    url: 'https://via.placeholder.com/600x600/A03078/FFFFFF?text=%D7%90%D7%91%D7%A0%D7%99+%D7%93%D7%A8%D7%9A',
    alt: 'צילומי אבני דרך לתינוקות'
  },
  {
    id: 18,
    url: 'https://via.placeholder.com/600x600/D64B6A/FFFFFF?text=%D7%A8%D7%A7%D7%A2+%D7%9C%D7%97%D7%92%D7%99%D7%92%D7%95%D7%AA',
    alt: 'רקע לחגיגות'
  },
  {
    id: 19,
    url: 'https://via.placeholder.com/600x600/E8B15C/FFFFFF?text=%D7%93%D7%A7%D7%95%D7%A8+%D7%90%D7%99%D7%A8%D7%95%D7%A2%D7%99%D7%9D',
    alt: 'דקור לאירועים'
  },
  {
    id: 20,
    url: 'https://via.placeholder.com/600x600/FFF9F0/3D1152?text=%D7%A4%D7%95%D7%98%D7%95%D7%96%D7%95%D7%9F',
    alt: 'פוטוזון מעוצב'
  }
];

export function InfiniteCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const x = useMotionValue(0);
  const controls = useAnimation();

  // Responsive slides
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, [isPaused]);

  // Animate to current index
  useEffect(() => {
    const slideWidth = 100 / slidesToShow;
    const offset = -(currentIndex * slideWidth);
    
    controls.start({
      x: `${offset}%`,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }
    });
  }, [currentIndex, slidesToShow, controls]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 50;
    
    if (info.offset.x > threshold) {
      // Swipe right (previous)
      setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
    } else if (info.offset.x < -threshold) {
      // Swipe left (next)
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
  };

  // Create infinite loop by duplicating images
  const displayImages = [...carouselImages, ...carouselImages, ...carouselImages];

  return (
    <section 
      className="py-12 bg-gradient-to-br from-[#faf8fb] to-white overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full"
      >
        <div className="relative w-full overflow-hidden">
          {/* Previous Arrow */}
          <motion.button
            onClick={goToPrevious}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Previous slide"
            style={{ color: '#3D1152' }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Next Arrow */}
          <motion.button
            onClick={goToNext}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm shadow-lg flex items-center justify-center hover:bg-white transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Next slide"
            style={{ color: '#3D1152' }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            animate={controls}
            className="flex cursor-grab active:cursor-grabbing"
            style={{ x }}
          >
            {displayImages.map((image, index) => (
              <motion.div
                key={`${image.id}-${index}`}
                className="flex-shrink-0 px-3"
                style={{
                  width: `${100 / slidesToShow}%`
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-lg mx-auto max-w-sm"
                >
                  <ImageWithFallback
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D1152]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                    <p className="text-white text-center">{image.alt}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex % carouselImages.length
                  ? 'bg-[#3D1152] w-6'
                  : 'bg-[#E8B15C]/40 hover:bg-[#E8B15C]'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
