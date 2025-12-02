/**
 * Argaman Design System
 * Единая система дизайна для всего сайта
 */

// 🎨 Цветовая палитра
export const colors = {
  // Основные цвета
  primary: {
    wine: '#6b1a3d',
    purple: '#4d184d',
    winePink: '#8b2e3f',
    lilac: '#c9a9b8',
  },
  // Градиенты
  gradients: {
    primary: 'from-purple-600 to-pink-500',
    wine: 'from-[#6b1a3d] to-[#8b2e3f]',
    purpleWine: 'from-[#4d184d] to-[#6b1a3d]',
    full: 'from-purple-600 via-pink-500 to-purple-400',
  },
  // Фоны
  backgrounds: {
    light: '#faf8fb',
    lightGradient: 'from-[#faf8fb] via-white to-[#f9f5f7]',
    purplePink: 'from-purple-50 to-pink-50',
  },
};

// 📐 Spacing
export const spacing = {
  section: 'py-16 md:py-20',
  sectionLarge: 'py-20 md:py-24',
  container: 'container mx-auto px-4',
};

// 🎭 Анимации
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 },
  },
  scaleIn: {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.8 },
  },
  slideUp: {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

// 🔘 Стили кнопок
export const buttons = {
  primary: 'px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105',
  secondary: 'px-8 py-3 bg-white text-purple-600 rounded-full border-2 border-purple-600 hover:bg-purple-50 transition-all',
  large: 'px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-2xl transition-all transform hover:scale-105',
  outline: 'px-6 py-3 bg-white text-purple-600 rounded-full border-2 border-purple-600 hover:bg-purple-50 transition-colors',
};

// 📦 Стили карточек
export const cards = {
  base: 'bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#c9a9b8]/20',
  featured: 'bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-2xl shadow-2xl transform scale-105',
  hover: 'hover:shadow-2xl hover:-translate-y-2 transition-all duration-300',
};

// 📝 Стили текста
export const text = {
  gradientHeading: 'bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent',
  heading: 'text-slate-800',
  subheading: 'text-slate-600',
  light: 'text-slate-500',
  white: 'text-white',
};

// 🎨 Декоративные элементы
export const decorative = {
  blob: 'absolute w-96 h-96 rounded-full blur-3xl',
  blobPurple: 'absolute w-96 h-96 bg-gradient-to-br from-[#6b1a3d]/5 to-transparent rounded-full blur-3xl',
  blobLilac: 'absolute w-96 h-96 bg-gradient-to-tl from-[#c9a9b8]/10 to-transparent rounded-full blur-3xl',
  divider: 'h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent',
};

// 📊 Сетки
export const grids = {
  features: 'grid grid-cols-1 md:grid-cols-3 gap-8',
  packages: 'grid grid-cols-1 md:grid-cols-3 gap-8',
  gallery: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
};
