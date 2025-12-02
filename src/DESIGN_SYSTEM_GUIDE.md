# 🎨 Argaman Design System - Руководство

## 📋 Обзор

Единая дизайн-система для всего сайта Argaman с праздничной тематикой воздушных шаров и фотосъемки.

---

## 🎨 Цветовая палитра

### Основные цвета
```typescript
wine: '#6b1a3d'      // Глубокий винный
purple: '#4d184d'    // Темный пурпур
winePink: '#8b2e3f'  // Винно-красный
lilac: '#c9a9b8'     // Приглушенный лиловый
```

### Градиенты
```typescript
primary: 'from-purple-600 to-pink-500'           // Основной (фиолетовый→розовый)
wine: 'from-[#6b1a3d] to-[#8b2e3f]'             // Винный градиент
full: 'from-purple-600 via-pink-500 to-purple-400' // Полный градиент для CTA
```

---

## 🔧 Готовые компоненты

### 1. SectionHeader - Заголовки секций
```tsx
import { SectionHeader } from './components/ui/SectionHeader';

<SectionHeader
  subtitle="Argaman • Подзаголовок"
  title="Основной заголовок"
  description="Описание секции"
  gradient={true}  // Градиентный заголовок (фиолетовый→розовый)
  centered={true}  // Центрирование
/>
```

**Особенности:**
- ✨ Анимация fade-in при скролле
- 🎨 Градиентный текст с подчеркиванием (опционально)
- 📐 Автоматический spacing

---

### 2. Button - Кнопки
```tsx
import { Button } from './components/ui/Button';

<Button variant="primary" href="#section">
  Текст кнопки
</Button>

<Button variant="secondary" onClick={handleClick}>
  Вторичная кнопка
</Button>
```

**Варианты:**
- `primary` - Градиентная кнопка (purple→pink)
- `secondary` - Белая с фиолетовой обводкой
- `large` - Увеличенная версия primary
- `outline` - Тонкая обводка

---

### 3. Section - Секции страницы
```tsx
import { Section } from './components/ui/Section';

<Section background="gradient" padding="large">
  {/* Содержимое */}
</Section>
```

**Фоны:**
- `white` - Белый
- `light` - Светлый (#faf8fb)
- `gradient` - Градиент (faf8fb → white → f9f5f7)
- `purplePink` - Фиолетово-розовый (purple-50 → pink-50)

---

### 4. Card - Карточки
```tsx
import { Card } from './components/ui/Card';

<Card variant="base" hover={true} delay={0.1}>
  {/* Содержимое карточки */}
</Card>
```

**Варианты:**
- `base` - Белая с тенью
- `featured` - Градиентная (purple→pink)

---

## 📐 Стандартные стили

### Заголовки
```tsx
// Градиентный заголовок
className="bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent"

// Обычный заголовок
className="text-slate-800"
```

### Текст
```tsx
// Основной текст
className="text-slate-600"

// Светлый текст
className="text-slate-500"
```

### Кнопки (если не используете компонент)
```tsx
// Primary
className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-lg transition-all transform hover:scale-105"

// Secondary
className="px-8 py-3 bg-white text-purple-600 rounded-full border-2 border-purple-600 hover:bg-purple-50 transition-all"
```

### Карточки (если не используете компонент)
```tsx
// Базовая
className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#c9a9b8]/20 p-8"

// Featured
className="bg-gradient-to-br from-purple-600 to-pink-500 text-white rounded-2xl shadow-2xl p-8"
```

---

## 🎭 Анимации

### Импорт
```tsx
import { animations } from './styles/design-system';
```

### Использование
```tsx
// Fade In Up
<motion.div {...animations.fadeInUp}>
  {/* Content */}
</motion.div>

// Scale In
<motion.div {...animations.scaleIn}>
  {/* Content */}
</motion.div>

// Slide Up (со скроллом)
<motion.div {...animations.slideUp}>
  {/* Content */}
</motion.div>
```

---

## 📊 Сетки

```tsx
import { grids } from './styles/design-system';

// Сетка features (1 → 3 колонки)
<div className={grids.features}>
  {/* Cards */}
</div>

// Сетка packages
<div className={grids.packages}>
  {/* Packages */}
</div>

// Галерея (1 → 2 → 3 колонки)
<div className={grids.gallery}>
  {/* Images */}
</div>
```

---

## 🎨 Декоративные элементы

### Градиентные блики (Blobs)
```tsx
<div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#6b1a3d]/5 to-transparent rounded-full blur-3xl"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#c9a9b8]/10 to-transparent rounded-full blur-3xl"></div>
```

### Разделители
```tsx
<div className="h-1 bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
```

---

## ✅ Примеры использования

### Полный пример секции
```tsx
import { SectionHeader } from './components/ui/SectionHeader';
import { Button } from './components/ui/Button';
import { Section } from './components/ui/Section';
import { Card } from './components/ui/Card';

export function MySection() {
  return (
    <Section background="gradient" padding="large">
      <SectionHeader
        title="Заголовок секции"
        description="Описание"
        gradient={true}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, i) => (
          <Card key={i} delay={i * 0.1}>
            <h3 className="text-slate-800 mb-3">{item.title}</h3>
            <p className="text-slate-600">{item.description}</p>
          </Card>
        ))}
      </div>
      
      <div className="text-center mt-12">
        <Button variant="primary" href="#action">
          Call to Action
        </Button>
      </div>
    </Section>
  );
}
```

---

## 🎯 Best Practices

### ✅ DO
- Используйте готовые компоненты (SectionHeader, Button, Card)
- Придерживайтесь градиента purple-600 → pink-500
- Используйте анимации из дизайн-системы
- Применяйте стандартные spacing (py-16, py-20)

### ❌ DON'T
- Не создавайте свои варианты кнопок
- Не используйте случайные цвета вне палитры
- Не пропускайте анимации
- Не нарушайте структуру Section → Header → Content → CTA

---

## 📱 Адаптивность

Все компоненты адаптивны по умолчанию:
- Мобильные: 1 колонка
- Планшеты (md:): 2-3 колонки
- Десктоп (lg:): 3+ колонки

---

## 🚀 Быстрый старт новой страницы

```tsx
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { WhyChooseUs } from '../components/WhyChooseUs';

export function NewPage() {
  return (
    <div className="min-h-screen bg-[#faf8fb]">
      {/* Hero */}
      <section className="container mx-auto px-4 py-16">
        <SectionHeader
          subtitle="Argaman"
          title="Заголовок страницы"
          description="Описание"
          gradient={false}
        />
        <div className="flex gap-4 justify-center">
          <Button variant="primary" href="#action">
            Основное действие
          </Button>
          <Button variant="secondary" href="#more">
            Дополнительно
          </Button>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Content sections... */}
      
      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-white mb-6">Призыв к действию</h2>
          <Button variant="large" href="#contact">
            Связаться
          </Button>
        </div>
      </section>
    </div>
  );
}
```

---

## 📞 Контакты для вопросов

Используйте WhatsApp функцию:
```tsx
const whatsappLink = (text: string) =>
  `https://api.whatsapp.com/send?phone=972542330001&text=${encodeURIComponent(text)}`;
```

---

**Создано для Argaman Design System • 2024**
