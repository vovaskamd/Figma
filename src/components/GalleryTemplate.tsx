import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ImageIcon, Grid3x3, Sparkles, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';

export interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

interface GalleryTemplateProps {
  images: GalleryImage[];
  title?: string;
  subtitle?: string;
  showFilters?: boolean;
  filterOptions?: string[];
}

export function GalleryTemplate({ 
  images, 
  title = 'גלריית הרגעים שלנו',
  subtitle = 'אוסף תמונות מהאירועים המיוחדים שלנו - בלונים, עיצוב וצילום מקצועי',
  showFilters = false,
  filterOptions = []
}: GalleryTemplateProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<string>('all');
  const [introTriggered, setIntroTriggered] = useState(false);
  const [introComplete, setIntroComplete] = useState(false);

  // Share image to WhatsApp
  const shareToWhatsApp = async (image: GalleryImage) => {
    try {
      // Try to fetch the image and convert to blob
      const response = await fetch(image.url);
      const blob = await response.blob();
      const file = new File([blob], `photo-${image.id}.jpg`, { type: 'image/jpeg' });

      // Check if Web Share API is supported with files
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        await navigator.share({
          files: [file],
          title: image.title,
          text: 'הי! אני רוצה להזמין את זה! 🎈'
        });
      } else {
        // Fallback: Open WhatsApp with text and image URL
        const text = `הי! אני רוצה להזמין את זה! 🎈\n\nצפה בתמונה: ${image.url}`;
        const whatsappUrl = `https://api.whatsapp.com/send?phone=972542330001&text=${encodeURIComponent(text)}`;
        window.open(whatsappUrl, '_blank');
      }
    } catch (error) {
      // If sharing fails, fallback to WhatsApp with text
      const text = `הי! אני רוצה להזמין את זה! 🎈\n\nצפה בתמונה: ${image.url}`;
      const whatsappUrl = `https://api.whatsapp.com/send?phone=972542330001&text=${encodeURIComponent(text)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  // Start intro animation when it completes, show gallery
  useEffect(() => {
    if (!introTriggered) return;
    
    const timer = setTimeout(() => {
      setIntroComplete(true);
    }, 1800); // Show intro for 1.8 seconds after trigger
    return () => clearTimeout(timer);
  }, [introTriggered]);

  // Keyboard navigation
  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        handlePrevious();
      } else if (e.key === 'ArrowLeft') {
        handleNext();
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedImage, currentIndex]);

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(images[nextIndex]);
  };

  const handlePrevious = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#faf8fb] via-white to-[#f9f5f7]">
      {/* Simple Section Divider */}
      <div className="py-20 bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-4">{title}</h2>
          {subtitle && <p className="text-white/90 max-w-2xl mx-auto">{subtitle}</p>}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="container mx-auto px-4 py-16">
        {/* Filter Buttons (optional) */}
        {showFilters && filterOptions.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8 flex-wrap"
          >
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-2.5 rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] text-white shadow-lg'
                  : 'bg-white text-[#6b1a3d] border-2 border-[#c9a9b8] hover:border-[#8b2e3f]'
              }`}
            >
              כל התמונות
            </button>
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`px-6 py-2.5 rounded-full transition-all ${
                  filter === option
                    ? 'bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] text-white shadow-lg'
                    : 'bg-white text-[#6b1a3d] border-2 border-[#c9a9b8] hover:border-[#8b2e3f]'
                }`}
              >
                {option}
              </button>
            ))}
          </motion.div>
        )}

        {/* Gallery Grid with square images */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03, duration: 0.4 }}
              className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 aspect-square"
              onClick={() => {
                setSelectedImage(image);
                setCurrentIndex(index);
              }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              
              {/* Photo Number Label - Centered with stroke */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                <span 
                  className="text-white text-5xl"
                  style={{
                    textShadow: `
                      -2px -2px 0 #000,
                      2px -2px 0 #000,
                      -2px 2px 0 #000,
                      2px 2px 0 #000,
                      0 0 8px rgba(0,0,0,0.8)
                    `
                  }}
                >
                  A-{index + 1}
                </span>
              </div>

              {/* Sparkle effect on hover */}
              <motion.div
                className="absolute top-3 right-3 opacity-0 group-hover:opacity-100"
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.6 }}
              >
                <Sparkles className="w-6 h-6 text-yellow-300 drop-shadow-lg" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-lg border border-[#c9a9b8]">
            <Grid3x3 className="w-5 h-5 text-[#6b1a3d]" />
            <span className="text-[#6b1a3d]">
              מציג {images.length} תמונות מדהימות
            </span>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal with Beautiful Background */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Beautiful Argaman Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#6b1a3d] via-[#4d184d] to-[#1a1a2e]">
              {/* Decorative blur circles */}
              <div className="absolute top-20 right-20 w-96 h-96 bg-[#8b2e3f]/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#c9a9b8]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#4d184d]/40 rounded-full blur-3xl"></div>
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }}></div>
            </div>
            
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Previous Button */}
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </motion.button>

            {/* Next Button */}
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10 backdrop-blur-sm"
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </motion.button>

            {/* Image Container */}
            <motion.div
              key={selectedImage.id}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo Number Label - Above the image */}
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center mb-4"
              >
                <span 
                  className="text-white text-5xl"
                  style={{
                    textShadow: `
                      -2px -2px 0 #000,
                      2px -2px 0 #000,
                      -2px 2px 0 #000,
                      2px 2px 0 #000,
                      0 0 8px rgba(0,0,0,0.8)
                    `
                  }}
                >
                  A-{currentIndex + 1}
                </span>
              </motion.div>

              {/* Square Image Container */}
              <div className="relative aspect-square w-full bg-black/20 rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={selectedImage.url}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Below Image */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <h2 className="text-white mb-2">{selectedImage.title}</h2>
                <p className="text-white/90 mb-4">{selectedImage.description}</p>
                
                {/* WhatsApp Button */}
                <motion.button
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20BA59] text-white rounded-full transition-all transform hover:scale-105 shadow-lg mb-6 cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    shareToWhatsApp(selectedImage);
                  }}
                >
                  <MessageCircle className="w-6 h-6" />
                  <span className="text-lg">לשתף תמונה בWhatsApp</span>
                </motion.button>

                <div className="flex items-center justify-center gap-8">
                  <div className="flex items-center gap-2 text-white/80">
                    <ImageIcon className="w-5 h-5" />
                    <span>תמונה {currentIndex + 1} מתוך {images.length}</span>
                  </div>
                  <div className="flex items-center gap-2 text-white/70 text-sm">
                    <span>השתמש במקשי החצים לניווט</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}