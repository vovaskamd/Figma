import { motion, useMotionValue, useAnimation, PanInfo } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useEffect, useState } from 'react';

interface CarouselImage {
  id: number;
  url: string;
  alt: string;
}

const carouselImages: CarouselImage[] = [
  // Photos from walls/brit
  { id: 1, url: '/img/walls/brit/a-00001.jpg', alt: 'חגיגת ברית מושלמת' },
  { id: 2, url: '/img/walls/brit/a-00002.jpg', alt: 'עיצוב בלונים מרהיב' },
  { id: 3, url: '/img/walls/brit/a-00003.jpg', alt: 'קיר צילום מעוצב' },
  { id: 4, url: '/img/walls/brit/a-00004.jpg', alt: 'בלונים כחולים לברית' },
  { id: 5, url: '/img/walls/brit/a-00005.jpeg', alt: 'קישוטי מסיבה' },
  { id: 6, url: '/img/walls/brit/a-00006.jpg', alt: 'עיצוב לתינוק' },
  { id: 7, url: '/img/walls/brit/a-00007.jpg', alt: 'בלונים פסטל עדינים' },
  { id: 8, url: '/img/walls/brit/a-00008.jpg', alt: 'קיר בלונים מיוחד' },
  { id: 9, url: '/img/walls/brit/a-00009.jpg', alt: 'קשת בלונים' },
  { id: 10, url: '/img/walls/brit/a-00010.jpg', alt: 'עיצוב אלגנטי' },
  // Photos from photo/brit
  { id: 11, url: '/img/photo/brit/ph-brit00001.jpg', alt: 'צילום מגנטים מיידי' },
  { id: 12, url: '/img/photo/brit/ph-brit00002.jpg', alt: 'רגעים מתוקים' },
  { id: 13, url: '/img/photo/brit/ph-brit00003.jpg', alt: 'צילום משפחתי' },
  { id: 14, url: '/img/photo/brit/ph-brit00004.jpg', alt: 'זיכרונות יפים' },
  { id: 15, url: '/img/photo/brit/ph-brit00005.jpg', alt: 'צילום ניובורן' },
  { id: 16, url: '/img/photo/brit/ph-brit00006.jpg', alt: 'רגעי אושר' },
  { id: 17, url: '/img/photo/brit/ph-brit00007.jpg', alt: 'צילום מקצועי' },
  { id: 18, url: '/img/photo/brit/ph-brit00008.jpeg', alt: 'חגיגת ברית' },
  { id: 19, url: '/img/photo/brit/ph-brit00009.jpeg', alt: 'תמונות משפחה' },
  { id: 20, url: '/img/photo/brit/ph-brit00010.jpg', alt: 'צילום חגיגות' },
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
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentIndex % carouselImages.length
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
