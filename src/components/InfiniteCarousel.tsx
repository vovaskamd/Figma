import { motion, useMotionValue, useAnimation, PanInfo } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

interface CarouselImage {
  id: number;
  url: string;
  alt: string;
}

const carouselImages: CarouselImage[] = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1693812080627-f5ce79abd438?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwYnJpdCUyMGNlbGVicmF0aW9ufGVufDF8fHx8MTc2NDY3MTY0NHww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'חגיגת ברית מושלמת'
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1654851364032-ca4d7a47341c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwZGVjb3JhdGlvbnMlMjBwYXJ0eXxlbnwxfHx8fDE3NjQ2NzE2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'עיצוב בלונים מרהיב'
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1683821291961-e79e6d10a2cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnN0YW50JTIwY2FtZXJhJTIwcG9sYXJvaWR8ZW58MXx8fHwxNzY0NjY1MDkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'צילום מגנטים מיידי'
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1627779543640-7ccec5c7fa62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibHVlJTIwYmFsbG9vbnMlMjBiYWJ5fGVufDF8fHx8MTc2NDY3MTY0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'בלונים כחולים לברית'
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJ0eSUyMGNlbGVicmF0aW9uJTIwZGVjb3J8ZW58MXx8fHwxNzY0NjcxNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'קישוטי מסיבה'
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1738330943863-0f45d97e3455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2hvd2VyJTIwZGVjb3JhdGlvbnN8ZW58MXx8fHwxNzY0NjcwMDE0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'עיצוב לתינוק'
  },
  {
    id: 7,
    url: 'https://images.unsplash.com/photo-1732831629066-4fd643d9c129?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0ZWwlMjBiYWxsb29uc3xlbnwxfHx8fDE3NjQ2MTM1MTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'בלונים פסטל עדינים'
  },
  {
    id: 8,
    url: 'https://images.unsplash.com/photo-1610901158532-d246c011729e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXdib3JuJTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzY0NjcxNjQ2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'צילום ניובורן'
  },
  {
    id: 9,
    url: 'https://images.unsplash.com/photo-1758870041148-31d28fdf34d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxsb29uJTIwYXJjaCUyMHBhcnR5fGVufDF8fHx8MTc2NDY3MTY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'קשת בלונים'
  },
  {
    id: 10,
    url: 'https://images.unsplash.com/photo-1690814032912-a6d47152b2bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZWxlYnJhdGlvbiUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2NDY3MTY0N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    alt: 'צילום חגיגות'
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#6b1a3d]/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
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
                  ? 'bg-[#6b1a3d] w-6'
                  : 'bg-[#c9a9b8]/40 hover:bg-[#c9a9b8]'
              }`}
              aria-label={`Перейти к слайду ${index + 1}`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
