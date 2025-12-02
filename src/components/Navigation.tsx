import { useState } from 'react';
import { Camera, Baby, Star, Gift, Phone, Sparkles, Menu, X, MessageCircle, Palette, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'ראשי', icon: Camera },
    { id: 'brit', label: 'חבילות לברית', icon: Baby },
    { id: 'bar-mitzvah', label: 'חבילות לבר מצווה', icon: Star },
    { id: 'photozone-builder', label: '🎨 קונסטרוקטור', icon: Palette },
    { id: 'catalog', label: 'קטלוג מוצרים', icon: Gift },
    { id: 'contact', label: 'צור קשר', icon: Phone },
    { id: 'experiment', label: '🧪 ניסויים', icon: Sparkles },
    { id: 'experiments2', label: '🧪 ניסויים 2', icon: Zap },
  ];

  // Fixed WhatsApp link with properly encoded Hebrew text
  const whatsappLink = 'https://wa.me/972542330001?text=%D7%A9%D7%9C%D7%95%D7%9D%2C%20%D7%90%D7%A0%D7%99%20%D7%A8%D7%95%D7%A6%D7%94%20%D7%9C%D7%A9%D7%9E%D7%95%D7%A2%20%D7%A2%D7%95%D7%93%20%D7%A4%D7%A8%D7%98%D7%99%D7%9D';
  const phoneNumber = 'tel:+972542330001';

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Right Side (RTL) */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <motion.div 
              className="bg-gradient-to-br from-[#6b1a3d] to-[#4d184d] p-3 rounded-full"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Camera className="w-6 h-6 text-white" />
            </motion.div>
            <div className="text-right">
              <span className="text-slate-800 block font-semibold">Argaman</span>
              <span className="text-slate-500 text-sm">בלונים וצילום לאירועים</span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex gap-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`transition-colors px-3 py-2 rounded-lg ${
                      currentPage === item.id
                        ? 'text-purple-600 bg-purple-50 font-semibold'
                        : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* WhatsApp Button */}
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-[#6b1a3d] to-[#4d184d] text-white rounded-full hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-4 h-4" />
            דברו איתנו
          </motion.a>

          {/* Mobile Menu Button - Left Side (RTL) */}
          <motion.button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 hover:bg-purple-50 rounded-lg transition-colors relative"
            aria-label="תפריט"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6 text-purple-600" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="w-6 h-6 text-purple-600" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation with Animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden relative"
            >
              {/* Decorative floating balloons */}
              <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${i * 20}%`,
                      top: '100%',
                    }}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{ 
                      y: -200, 
                      opacity: [0, 0.6, 0],
                      x: [0, Math.sin(i) * 20]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      ease: 'easeOut',
                    }}
                  >
                    <div
                      className="w-6 h-8 rounded-full"
                      style={{
                        background: ['#6b1a3d', '#4d184d', '#8b2e3f', '#722f37', '#5a1a3a'][i % 5],
                        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
                      }}
                    />
                  </motion.div>
                ))}
              </div>

              {/* Sparkles animation */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 1.5,
                      delay: i * 0.15,
                      ease: 'easeInOut',
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-[#8b2e3f]" />
                  </motion.div>
                ))}
              </div>

              {/* Camera flash effect */}
              <motion.div
                className="absolute inset-0 bg-white pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.4 }}
              />

              <div className="mt-4 pb-4 border-t border-slate-200 pt-4 relative z-10">
                <ul className="flex flex-col gap-2">
                  {navItems.map((item, idx) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ delay: idx * 0.1, duration: 0.3 }}
                    >
                      <motion.button
                        onClick={() => handleNavClick(item.id)}
                        className={`w-full text-right transition-colors px-4 py-3 rounded-lg ${
                          currentPage === item.id
                            ? 'text-purple-600 bg-purple-50 font-semibold'
                            : 'text-slate-700 hover:text-purple-600 hover:bg-purple-50'
                        }`}
                        whileHover={{ x: 5 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <motion.span
                          className="inline-block"
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.label}
                        </motion.span>
                      </motion.button>
                    </motion.li>
                  ))}
                  <motion.li
                    className="mt-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: navItems.length * 0.1, duration: 0.3 }}
                  >
                    {/* WhatsApp Button - Green with icon */}
                    <motion.a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full hover:shadow-lg transition-shadow mb-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>שלח הודעה בוואטסאפ</span>
                    </motion.a>
                    
                    {/* Call Button - Argaman colors */}
                    <motion.a
                      href={phoneNumber}
                      className="flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#6b1a3d] to-[#4d184d] text-white rounded-full hover:shadow-lg transition-shadow"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Phone className="w-5 h-5" />
                      <span>התקשר: 054-233-0001</span>
                    </motion.a>
                  </motion.li>
                </ul>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}