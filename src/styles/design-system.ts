// ============================================
// 🎨 ARGAMAN DESIGN SYSTEM - ЦВЕТОВАЯ ПАЛИТРА
// ============================================
// Все цвета сайта в одном месте!
// Для изменения палитры - меняйте только здесь

export const colors = {
  // Роскошная палитра: глубокий фиолетовый → пурпурный → коралловый → золотой
  primary: {
    deep: '#3D1152',      // Глубокий фиолетовый (основной)
    medium: '#A03078',    // Средний пурпурно-розовый (вторичный)
    light: '#D64B6A',     // Коралловый розовый (третичный)
    blush: '#E8B15C',     // Золотисто-желтый (акцент)
    paleBlush: '#FFF9F0', // Очень светлый кремовый (фон)
  },

  // Градиенты (готовые классы)
  gradients: {
    // Основные градиенты
    primary: 'bg-gradient-to-r from-[#3D1152] to-[#A03078]',
    primaryBr: 'bg-gradient-to-br from-[#3D1152] to-[#A03078]',
    secondary: 'bg-gradient-to-r from-[#A03078] to-[#D64B6A]',
    accent: 'bg-gradient-to-r from-[#3D1152] to-[#D64B6A]',
    
    // Hero градиенты
    hero: 'bg-gradient-to-br from-[#3D1152] via-[#A03078] to-[#D64B6A]',
    heroAlt: 'bg-gradient-to-r from-[#3D1152] via-[#A03078] to-[#D64B6A]',
    
    // Фоновые градиенты
    bgLight: 'bg-gradient-to-br from-[#FFF9F0] via-white to-[#E8B15C]/10',
    bgSoft: 'bg-gradient-to-br from-[#E8B15C]/10 to-[#FFF9F0]',
    
    // Для текста
    textPrimary: 'bg-gradient-to-r from-[#3D1152] to-[#D64B6A] bg-clip-text text-transparent',
    textSecondary: 'bg-gradient-to-r from-[#3D1152] via-[#A03078] to-[#D64B6A] bg-clip-text text-transparent',
  },

  // Цвета для текста
  text: {
    primary: 'text-[#3D1152]',
    secondary: 'text-[#A03078]',
    accent: 'text-[#D64B6A]',
    dark: 'text-slate-800',
    muted: 'text-slate-600',
    light: 'text-slate-400',
  },

  // Цвета для фона
  bg: {
    primary: 'bg-[#3D1152]',
    secondary: 'bg-[#A03078]',
    accent: 'bg-[#D64B6A]',
    blush: 'bg-[#E8B15C]',
    pale: 'bg-[#FFF9F0]',
    white: 'bg-white',
  },

  // Цвета для границ
  border: {
    primary: 'border-[#3D1152]',
    secondary: 'border-[#A03078]',
    accent: 'border-[#D64B6A]',
    blush: 'border-[#E8B15C]',
    light: 'border-slate-200',
  },

  // Hover состояния
  hover: {
    text: 'hover:text-[#D64B6A]',
    bg: 'hover:bg-[#E8B15C]/10',
    border: 'hover:border-[#D64B6A]',
  },

  // Специальные цвета
  special: {
    whatsapp: 'bg-gradient-to-r from-[#25D366] to-[#128C7E]',
    success: 'bg-green-500',
    error: 'bg-red-500',
    warning: 'bg-yellow-500',
  },

  // Прозрачности для декоративных элементов
  opacity: {
    primary5: '#3D11520D',    // 5%
    primary10: '#3D11521A',   // 10%
    primary20: '#3D115233',   // 20%
    blush10: '#E8B15C1A',     // 10%
    blush20: '#E8B15C33',     // 20%
  },
} as const;

// Массив цветов для анимаций (шары, конфетти и т.д.)
export const animationColors = [
  '#3D1152', // deep purple
  '#A03078', // medium magenta
  '#D64B6A', // coral pink
  '#E8B15C', // golden yellow
  '#FFF9F0', // pale cream
];

// Экспорт для использования в inline styles
export const inlineColors = {
  primary: {
    deep: '#3D1152',
    medium: '#A03078',
    light: '#D64B6A',
    blush: '#E8B15C',
    paleBlush: '#FFF9F0',
  },
};

// Готовые комбинации для кнопок
export const buttonStyles = {
  primary: `px-8 py-4 ${colors.gradients.primary} text-white rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-semibold`,
  secondary: `px-8 py-4 bg-white ${colors.text.primary} rounded-full border-2 ${colors.border.primary} hover:bg-[#E8B15C]/10 transition-all`,
  ghost: `px-8 py-4 bg-[#3D1152]/20 backdrop-blur-sm border-2 border-white text-white rounded-full hover:bg-white/30 transition-all`,
  whatsapp: `px-8 py-4 ${colors.special.whatsapp} text-white rounded-full hover:shadow-xl transition-all transform hover:scale-105`,
} as const;

// Алиас для совместимости
export const buttons = {
  primary: `inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-[#3D1152] to-[#A03078] text-white rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-semibold`,
  secondary: `inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#3D1152] rounded-full border-2 border-[#3D1152] hover:bg-[#E8B15C]/10 transition-all`,
  large: `inline-flex items-center justify-center gap-2 px-10 py-5 bg-gradient-to-r from-[#3D1152] to-[#A03078] text-white rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-semibold text-lg`,
  outline: `inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent text-[#3D1152] rounded-full border-2 border-[#3D1152] hover:bg-[#3D1152] hover:text-white transition-all`,
} as const;

// Стили для текста
export const text = {
  heading: 'text-4xl md:text-5xl text-slate-800',
  gradientHeading: 'text-4xl md:text-5xl bg-gradient-to-r from-[#3D1152] to-[#D64B6A] bg-clip-text text-transparent',
  subheading: 'text-2xl md:text-3xl text-slate-700',
  body: 'text-base text-slate-600',
  muted: 'text-sm text-slate-500',
} as const;

// Готовые стили для карточек
export const cardStyles = {
  basic: `bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-[#E8B15C]/20`,
  featured: `${colors.gradients.accent} text-white rounded-2xl shadow-2xl transform scale-105`,
  soft: `bg-gradient-to-br from-[#E8B15C]/10 to-[#FFF9F0] rounded-2xl p-8 shadow-md hover:shadow-xl transition-all`,
} as const;

// Готовые стили для секций
export const sectionStyles = {
  light: `py-20 ${colors.gradients.bgLight}`,
  soft: `py-20 ${colors.gradients.bgSoft}`,
  hero: `py-20 ${colors.gradients.hero} text-white`,
  white: 'py-20 bg-white',
} as const;

// Анимации для Motion
export const animations = {
  fadeInUp: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
  fadeIn: {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  },
  scaleIn: {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  },
} as const;