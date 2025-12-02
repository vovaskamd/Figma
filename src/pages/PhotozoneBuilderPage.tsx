import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef } from 'react';
import { Palette, Sparkles, Send, RotateCcw, Trash2, ZoomIn, ZoomOut, RotateCw, Check, ArrowUp, ArrowDown } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Button } from '../components/ui/Button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import thanksgivingPsalm from 'figma:asset/7bd8e4ddcb857a4da42b05c6f071fcc2be0cd5d9.png';

interface BuilderOption {
  id: string;
  name: string;
  preview: string;
  category: 'background' | 'balloons' | 'props' | 'arches' | 'text';
  color?: string;
  archSize?: string;
}

interface PlacedElement {
  id: string;
  option: BuilderOption;
  x: number;
  y: number;
  scale: number;
  rotation: number;
  text?: string;
  isEditing?: boolean;
}

export function PhotozoneBuilderPage() {
  const whatsappLink = (text: string) =>
    `https://api.whatsapp.com/send?phone=972542330001&text=${encodeURIComponent(text)}`;

  // State
  const [selectedBackground, setSelectedBackground] = useState<BuilderOption | null>(null);
  const [placedElements, setPlacedElements] = useState<PlacedElement[]>([]);
  const [activeTab, setActiveTab] = useState<'background' | 'balloons' | 'props' | 'arches' | 'text'>('background');
  const [selectedElement, setSelectedElement] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragRef = useRef<{ elementId: string; startX: number; startY: number; offsetX: number; offsetY: number } | null>(null);

  // Options
  const backgrounds: BuilderOption[] = [
    { id: 'bg1', name: 'רקע לבן קלאסי', preview: 'bg-white', category: 'background' },
    { id: 'bg2', name: 'רקע פסטל ורוד', preview: 'bg-gradient-to-br from-pink-100 to-purple-100', category: 'background' },
    { id: 'bg3', name: 'רקע כחול תכלת', preview: 'bg-gradient-to-br from-blue-100 to-cyan-100', category: 'background' },
    { id: 'bg4', name: 'רקע זהב אלגנטי', preview: 'bg-gradient-to-br from-yellow-100 to-amber-200', category: 'background' },
    { id: 'bg5', name: 'רקע שמנת רומנטי', preview: 'bg-gradient-to-br from-rose-50 to-pink-100', category: 'background' },
    { id: 'bg6', name: 'רקע מנטה רענן', preview: 'bg-gradient-to-br from-emerald-50 to-teal-100', category: 'background' },
  ];

  const balloonSets: BuilderOption[] = [
    { id: 'bl1', name: 'בלון ורוד', preview: '🎈', category: 'balloons' },
    { id: 'bl2', name: 'בלון כחול', preview: '🔵', category: 'balloons' },
    { id: 'bl3', name: 'בלון זהב', preview: '⭐', category: 'balloons' },
    { id: 'bl4', name: 'בלון לבן', preview: '⚪', category: 'balloons' },
    { id: 'bl5', name: 'בלון אדום', preview: '🔴', category: 'balloons' },
    { id: 'bl6', name: 'בלון סגול', preview: '🟣', category: 'balloons' },
    { id: 'bl7', name: 'בלון לב', preview: '💖', category: 'balloons' },
    { id: 'bl8', name: 'כוכב', preview: '✨', category: 'balloons' },
  ];

  const props: BuilderOption[] = [
    { id: 'pr1', name: 'דובי פרווה גדול', preview: '🧸', category: 'props' },
    { id: 'pr2', name: 'קוביות עץ', preview: '🎲', category: 'props' },
    { id: 'pr3', name: 'פפיון ענק', preview: '🎀', category: 'props' },
    { id: 'pr4', name: 'כתר זהב', preview: '👑', category: 'props' },
    { id: 'pr5', name: 'פרחים', preview: '🌸', category: 'props' },
    { id: 'pr6', name: 'שלט שם', preview: '📝', category: 'props' },
    { id: 'pr7', name: 'כורסה', preview: '🪑', category: 'props' },
    { id: 'pr8', name: 'שטיח', preview: '◻️', category: 'props' },
    { id: 'pr9', name: 'מתנה', preview: '🎁', category: 'props' },
    { id: 'pr10', name: 'עוגה', preview: '🎂', category: 'props' },
  ];

  const arches: BuilderOption[] = [
    { id: 'ar1', name: 'קשת צבעונית', preview: '🌈', category: 'arches', color: 'rainbow', archSize: 'large' },
    { id: 'ar2', name: 'קשת לבנה', preview: '⬜', category: 'arches', color: 'white', archSize: 'medium' },
    { id: 'ar3', name: 'קשת צבעונית קטנה', preview: '🌈', category: 'arches', color: 'rainbow', archSize: 'small' },
    { id: 'ar4', name: 'קשת צבעונית גדולה', preview: '🌈', category: 'arches', color: 'rainbow', archSize: 'large' },
    { id: 'ar5', name: 'מזמור לתודה', preview: '📜', category: 'arches', color: 'thanksgiving', archSize: 'large' },
  ];

  const textOptions: BuilderOption[] = [
    { id: 'tx1', name: 'טקסט אדום', preview: '🅰️', category: 'text', color: 'red' },
    { id: 'tx2', name: 'טקסט כחול', preview: '🅱️', category: 'text', color: 'blue' },
    { id: 'tx3', name: 'טקסט צבעוני', preview: '🅲️', category: 'text', color: 'rainbow' },
  ];

  // Add element to canvas
  const addElementToCanvas = (option: BuilderOption) => {
    const newElement: PlacedElement = {
      id: `${option.id}-${Date.now()}`,
      option,
      x: 50, // Center position in percentage
      y: 50,
      scale: 1,
      rotation: 0,
      text: option.category === 'text' ? 'טקסט' : undefined,
    };
    setPlacedElements([...placedElements, newElement]);
    setSelectedElement(newElement.id);
  };

  // Handle double click to edit text
  const handleDoubleClick = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const element = placedElements.find(el => el.id === id);
    if (element && element.option.category === 'text') {
      updateElement(id, { isEditing: true });
    }
  };

  // Handle text change
  const handleTextChange = (id: string, text: string) => {
    updateElement(id, { text, isEditing: false });
  };

  // Render element based on type
  const renderElement = (element: PlacedElement) => {
    // Arch rendering - пропорции 1:1.9 (ширина:высота), низ прямой
    if (element.option.category === 'arches') {
      const sizes = {
        small: { width: 150, height: 285 },
        medium: { width: 200, height: 380 },
        large: { width: 250, height: 475 },
      };
      const size = sizes[element.option.archSize as keyof typeof sizes] || sizes.medium;
      const radius = size.width / 2; // Радиус для закругления верха
      
      // Thanksgiving arch with image
      if (element.option.color === 'thanksgiving') {
        return (
          <svg
            width={size.width}
            height={size.height}
            viewBox={`0 0 ${size.width} ${size.height}`}
            className="drop-shadow-lg"
          >
            <defs>
              <clipPath id={`arch-clip-${element.id}`}>
                <path
                  d={`
                    M 10 ${size.height}
                    L 10 ${radius}
                    A ${radius} ${radius} 0 0 1 ${size.width - 10} ${radius}
                    L ${size.width - 10} ${size.height}
                    Z
                  `}
                />
              </clipPath>
            </defs>
            
            {/* Background fill */}
            <path
              d={`
                M 10 ${size.height}
                L 10 ${radius}
                A ${radius} ${radius} 0 0 1 ${size.width - 10} ${radius}
                L ${size.width - 10} ${size.height}
                Z
              `}
              fill="#f8f3ed"
              stroke="#d4b895"
              strokeWidth="3"
            />
            
            {/* Image inside arch */}
            <g clipPath={`url(#arch-clip-${element.id})`}>
              <image
                href={thanksgivingPsalm}
                x="10"
                y="0"
                width={size.width - 20}
                height={size.height}
                preserveAspectRatio="xMidYMid slice"
              />
            </g>
          </svg>
        );
      }
      
      // Regular colored arches
      return (
        <svg
          width={size.width}
          height={size.height}
          viewBox={`0 0 ${size.width} ${size.height}`}
          className="drop-shadow-lg"
        >
          <defs>
            <linearGradient id={`gradient-${element.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" style={{ stopColor: '#ff6b9d', stopOpacity: 1 }} />
              <stop offset="33%" style={{ stopColor: '#c96dd8', stopOpacity: 1 }} />
              <stop offset="66%" style={{ stopColor: '#6e8dd8', stopOpacity: 1 }} />
              <stop offset="100%" style={{ stopColor: '#5fcf80', stopOpacity: 1 }} />
            </linearGradient>
          </defs>
          {/* Арка с закругленным верхом и прямым низом */}
          <path
            d={`
              M 10 ${size.height}
              L 10 ${radius}
              A ${radius} ${radius} 0 0 1 ${size.width - 10} ${radius}
              L ${size.width - 10} ${size.height}
              Z
            `}
            fill={element.option.color === 'white' ? '#f8f9fa' : `url(#gradient-${element.id})`}
            stroke={element.option.color === 'white' ? '#dee2e6' : 'none'}
            strokeWidth="3"
          />
        </svg>
      );
    }

    // Text rendering
    if (element.option.category === 'text') {
      if (element.isEditing) {
        return (
          <input
            type="text"
            value={element.text || ''}
            onChange={(e) => updateElement(element.id, { text: e.target.value })}
            onBlur={() => updateElement(element.id, { isEditing: false })}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                updateElement(element.id, { isEditing: false });
              }
            }}
            autoFocus
            className="px-4 py-2 text-4xl font-bold text-center bg-white/80 border-2 border-purple-500 rounded-lg outline-none"
            style={{
              color: element.option.color === 'red' ? '#ef4444' : 
                     element.option.color === 'blue' ? '#3b82f6' : 
                     element.option.color === 'rainbow' ? '#8b5cf6' : '#1e293b',
            }}
          />
        );
      }
      
      return (
        <div
          onDoubleClick={(e) => handleDoubleClick(element.id, e)}
          className="px-6 py-3 text-5xl font-bold cursor-text select-none"
          style={{
            background: element.option.color === 'rainbow' 
              ? 'linear-gradient(45deg, #ff6b9d, #c96dd8, #6e8dd8, #5fcf80)'
              : 'transparent',
            WebkitBackgroundClip: element.option.color === 'rainbow' ? 'text' : 'border-box',
            WebkitTextFillColor: element.option.color === 'rainbow' ? 'transparent' : 
              element.option.color === 'red' ? '#ef4444' : 
              element.option.color === 'blue' ? '#3b82f6' : '#1e293b',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
          }}
        >
          {element.text || 'טקסט'}
        </div>
      );
    }

    // Default emoji rendering
    return element.option.preview;
  };

  // Delete element
  const deleteElement = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
    }
    setPlacedElements(placedElements.filter(el => el.id !== id));
    if (selectedElement === id) setSelectedElement(null);
  };

  // Update element
  const updateElement = (id: string, updates: Partial<PlacedElement>) => {
    setPlacedElements(placedElements.map(el => 
      el.id === id ? { ...el, ...updates } : el
    ));
  };

  // Scale controls
  const scaleElement = (id: string, delta: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const element = placedElements.find(el => el.id === id);
    if (element) {
      const newScale = Math.max(0.3, Math.min(3, element.scale + delta));
      updateElement(id, { scale: newScale });
    }
  };

  // Rotate controls
  const rotateElement = (id: string, delta: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const element = placedElements.find(el => el.id === id);
    if (element) {
      updateElement(id, { rotation: element.rotation + delta });
    }
  };

  // Layer controls (bring forward / send backward)
  const bringForward = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const index = placedElements.findIndex(el => el.id === id);
    if (index < placedElements.length - 1) {
      const newElements = [...placedElements];
      [newElements[index], newElements[index + 1]] = [newElements[index + 1], newElements[index]];
      setPlacedElements(newElements);
    }
  };

  const sendBackward = (id: string, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const index = placedElements.findIndex(el => el.id === id);
    if (index > 0) {
      const newElements = [...placedElements];
      [newElements[index], newElements[index - 1]] = [newElements[index - 1], newElements[index]];
      setPlacedElements(newElements);
    }
  };

  // Mouse handlers for dragging
  const handleMouseDown = (e: React.MouseEvent, elementId: string) => {
    e.preventDefault();
    e.stopPropagation();
    const element = placedElements.find(el => el.id === elementId);
    if (!element) return;

    const canvas = (e.target as HTMLElement).closest('[data-canvas]');
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const clickX = ((e.clientX - rect.left) / rect.width) * 100;
    const clickY = ((e.clientY - rect.top) / rect.height) * 100;

    dragRef.current = {
      elementId,
      startX: element.x,
      startY: element.y,
      offsetX: clickX - element.x,
      offsetY: clickY - element.y,
    };

    setIsDragging(true);
    setSelectedElement(elementId);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !dragRef.current) return;

    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    updateElement(dragRef.current.elementId, {
      x: Math.max(5, Math.min(95, x - dragRef.current.offsetX)),
      y: Math.max(5, Math.min(95, y - dragRef.current.offsetY)),
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    dragRef.current = null;
  };

  // Touch handlers for mobile
  const handleTouchStart = (e: React.TouchEvent, elementId: string) => {
    e.stopPropagation();
    const element = placedElements.find(el => el.id === elementId);
    if (!element || element.isEditing) return;

    const canvas = (e.target as HTMLElement).closest('[data-canvas]');
    if (!canvas) return;

    const touch = e.touches[0];
    const rect = canvas.getBoundingClientRect();
    const touchX = ((touch.clientX - rect.left) / rect.width) * 100;
    const touchY = ((touch.clientY - rect.top) / rect.height) * 100;

    dragRef.current = {
      elementId,
      startX: element.x,
      startY: element.y,
      offsetX: touchX - element.x,
      offsetY: touchY - element.y,
    };

    setIsDragging(true);
    setSelectedElement(elementId);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !dragRef.current) return;
    e.preventDefault(); // Prevent scrolling while dragging

    const canvas = e.currentTarget;
    const rect = canvas.getBoundingClientRect();
    const touch = e.touches[0];
    const x = ((touch.clientX - rect.left) / rect.width) * 100;
    const y = ((touch.clientY - rect.top) / rect.height) * 100;

    updateElement(dragRef.current.elementId, {
      x: Math.max(5, Math.min(95, x - dragRef.current.offsetX)),
      y: Math.max(5, Math.min(95, y - dragRef.current.offsetY)),
    });
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    dragRef.current = null;
  };

  // Reset
  const resetBuilder = () => {
    setSelectedBackground(null);
    setPlacedElements([]);
    setSelectedElement(null);
  };

  // Generate WhatsApp message
  const generateWhatsAppMessage = () => {
    let message = '🎨 הזמנת פוטוזון מהקונסטרוקטור:\n\n';
    
    if (selectedBackground) {
      message += `🖼️ רקע: ${selectedBackground.name}\n`;
    }
    
    if (placedElements.length > 0) {
      message += '\n✨ אלמנטים:\n';
      const elementCounts: Record<string, number> = {};
      
      placedElements.forEach(el => {
        const name = el.option.name;
        elementCounts[name] = (elementCounts[name] || 0) + 1;
      });
      
      Object.entries(elementCounts).forEach(([name, count]) => {
        message += `  • ${name} x${count}\n`;
      });
    }
    
    message += '\n📷 [יצורף צילום מסך של העיצוב]\n\n';
    message += 'מקום האירוע: [מלא כאן]\nתאריך: [מלא כאן]';
    
    return message;
  };

  const isSelected = (item: BuilderOption) => {
    if (item.category === 'background') return selectedBackground?.id === item.id;
    return false;
  };

  return (
    <div className="min-h-screen bg-[#faf8fb]">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-purple-400 py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block bg-white/20 backdrop-blur-md p-4 rounded-full mb-6">
              <Palette className="w-12 h-12 text-white" />
            </div>
            <h1 className="text-white mb-4">קונסטרוקטור פוטוזונים</h1>
            <p className="text-white/90 text-xl max-w-2xl mx-auto">
              בנו את הפוטוזון המושלם שלכם! בחרו רקע, גררו בלונים ואביזרים - וצרו עיצוב ייחודי
            </p>
          </motion.div>
        </div>
      </section>

      {/* Builder Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Sidebar - Options */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg p-6 sticky top-4"
              >
                <h3 className="text-slate-800 mb-2">בחרו אלמנטים</h3>
                <p className="text-slate-500 text-sm mb-4">לחצו על אלמנט כדי להוסיף לקנבס</p>
                
                {/* Tabs */}
                <div className="flex gap-2 mb-6">
                  <button
                    onClick={() => setActiveTab('background')}
                    className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                      activeTab === 'background'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    רקע
                  </button>
                  <button
                    onClick={() => setActiveTab('balloons')}
                    className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                      activeTab === 'balloons'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    בלונים
                  </button>
                  <button
                    onClick={() => setActiveTab('props')}
                    className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                      activeTab === 'props'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    אביזרים
                  </button>
                  <button
                    onClick={() => setActiveTab('arches')}
                    className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                      activeTab === 'arches'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    קשתות
                  </button>
                  <button
                    onClick={() => setActiveTab('text')}
                    className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                      activeTab === 'text'
                        ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    טקסט
                  </button>
                </div>

                {/* Options List */}
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  <AnimatePresence mode="wait">
                    {activeTab === 'background' && backgrounds.map((bg) => (
                      <motion.button
                        key={bg.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: backgrounds.indexOf(bg) * 0.05 }}
                        onClick={() => setSelectedBackground(bg)}
                        className={`w-full p-3 rounded-lg border-2 transition-all text-right ${
                          isSelected(bg)
                            ? 'border-purple-600 bg-purple-50'
                            : 'border-slate-200 hover:border-purple-300'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="font-semibold text-slate-800">{bg.name}</div>
                          {isSelected(bg) && <Check className="w-5 h-5 text-purple-600" />}
                        </div>
                      </motion.button>
                    ))}

                    {activeTab === 'balloons' && balloonSets.map((item) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: balloonSets.indexOf(item) * 0.05 }}
                        onClick={() => addElementToCanvas(item)}
                        className="w-full p-3 rounded-lg border-2 border-slate-200 hover:border-purple-300 transition-all text-right hover:bg-purple-50"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{item.preview}</span>
                          <div className="font-semibold text-slate-800">{item.name}</div>
                        </div>
                      </motion.button>
                    ))}

                    {activeTab === 'props' && props.map((item) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: props.indexOf(item) * 0.05 }}
                        onClick={() => addElementToCanvas(item)}
                        className="w-full p-3 rounded-lg border-2 border-slate-200 hover:border-purple-300 transition-all text-right hover:bg-purple-50"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{item.preview}</span>
                          <div className="font-semibold text-slate-800">{item.name}</div>
                        </div>
                      </motion.button>
                    ))}

                    {activeTab === 'arches' && arches.map((item) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: arches.indexOf(item) * 0.05 }}
                        onClick={() => addElementToCanvas(item)}
                        className="w-full p-3 rounded-lg border-2 border-slate-200 hover:border-purple-300 transition-all text-right hover:bg-purple-50"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{item.preview}</span>
                          <div className="font-semibold text-slate-800">{item.name}</div>
                        </div>
                      </motion.button>
                    ))}

                    {activeTab === 'text' && textOptions.map((item) => (
                      <motion.button
                        key={item.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ delay: textOptions.indexOf(item) * 0.05 }}
                        onClick={() => addElementToCanvas(item)}
                        className="w-full p-3 rounded-lg border-2 border-slate-200 hover:border-purple-300 transition-all text-right hover:bg-purple-50"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{item.preview}</span>
                          <div className="font-semibold text-slate-800">{item.name}</div>
                        </div>
                      </motion.button>
                    ))}
                  </AnimatePresence>
                </div>
              </motion.div>
            </div>

            {/* Center - Preview */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-slate-800">קנבס עיצוב</h3>
                    <p className="text-slate-500 text-sm">גררו אלמנטים ליצירת העיצוב שלכם</p>
                  </div>
                  <button
                    onClick={resetBuilder}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors"
                  >
                    <RotateCcw className="w-4 h-4" />
                    איפוס
                  </button>
                </div>

                {/* Preview Canvas */}
                <motion.div
                  data-canvas
                  layout
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                  style={{ touchAction: 'none' }}
                  className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden border-4 border-slate-200 ${
                    selectedBackground?.preview || 'bg-slate-50'
                  } cursor-crosshair`}
                >
                  <AnimatePresence>
                    {!selectedBackground && !placedElements.length && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                      >
                        <div className="text-center text-slate-400">
                          <Sparkles className="w-16 h-16 mx-auto mb-4" />
                          <p>לחצו על אלמנט בתפריט כדי להתחיל לעצב</p>
                        </div>
                      </motion.div>
                    )}

                    {/* Placed Elements */}
                    {placedElements.map((element) => (
                      <motion.div
                        key={element.id}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        className="absolute cursor-move"
                        style={{
                          left: `${element.x}%`,
                          top: `${element.y}%`,
                          transform: `translate(-50%, -50%) scale(${element.scale}) rotate(${element.rotation}deg)`,
                          transformOrigin: 'center',
                          zIndex: selectedElement === element.id ? 20 : 10,
                          transition: isDragging ? 'none' : 'transform 0.2s',
                        }}
                      >
                        <div className="relative group">
                          {/* Element */}
                          <div
                            onMouseDown={(e) => handleMouseDown(e, element.id)}
                            onTouchStart={(e) => handleTouchStart(e, element.id)}
                            className={`text-6xl select-none ${
                              selectedElement === element.id ? 'drop-shadow-2xl' : ''
                            }`}
                          >
                            {renderElement(element)}
                          </div>

                          {/* Controls - Show on hover or when selected */}
                          {selectedElement === element.id && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              style={{
                                transform: `scale(${1 / element.scale})`,
                                transformOrigin: 'center bottom',
                                pointerEvents: 'auto',
                              }}
                              className="absolute -top-12 left-1/2 -translate-x-1/2 flex gap-1 bg-white/90 backdrop-blur-md rounded-lg p-1 shadow-lg z-50"
                              onMouseDown={(e) => e.stopPropagation()}
                              onTouchStart={(e) => e.stopPropagation()}
                            >
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  scaleElement(element.id, 0.2);
                                }}
                                onTouchEnd={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  scaleElement(element.id, 0.2);
                                }}
                                className="p-1.5 hover:bg-green-100 rounded transition-colors cursor-pointer"
                                title="הגדל"
                              >
                                <ZoomIn className="w-4 h-4 text-green-600" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  scaleElement(element.id, -0.2);
                                }}
                                onTouchEnd={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  scaleElement(element.id, -0.2);
                                }}
                                className="p-1.5 hover:bg-blue-100 rounded transition-colors cursor-pointer"
                                title="הקטן"
                              >
                                <ZoomOut className="w-4 h-4 text-blue-600" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  rotateElement(element.id, 45);
                                }}
                                onTouchEnd={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  rotateElement(element.id, 45);
                                }}
                                className="p-1.5 hover:bg-purple-100 rounded transition-colors cursor-pointer"
                                title="סובב"
                              >
                                <RotateCw className="w-4 h-4 text-purple-600" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  deleteElement(element.id);
                                }}
                                onTouchEnd={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  deleteElement(element.id);
                                }}
                                className="p-1.5 hover:bg-red-100 rounded transition-colors cursor-pointer"
                                title="מחק"
                              >
                                <Trash2 className="w-4 h-4 text-red-600" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  bringForward(element.id);
                                }}
                                onTouchEnd={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  bringForward(element.id);
                                }}
                                className="p-1.5 hover:bg-gray-100 rounded transition-colors cursor-pointer"
                                title="העבר للأمام"
                              >
                                <ArrowUp className="w-4 h-4 text-gray-600" />
                              </button>
                              <button
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  sendBackward(element.id);
                                }}
                                onTouchEnd={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  sendBackward(element.id);
                                }}
                                className="p-1.5 hover:bg-gray-100 rounded transition-colors cursor-pointer"
                                title="העבר לאחור"
                              >
                                <ArrowDown className="w-4 h-4 text-gray-600" />
                              </button>
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>

                {/* Summary */}
                {(selectedBackground || placedElements.length > 0) && (
                  <div className="mt-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Sparkles className="w-6 h-6 text-purple-600" />
                      <h4 className="text-slate-800">העיצוב שלכם</h4>
                    </div>

                    <div className="space-y-2 mb-6">
                      {selectedBackground && (
                        <div className="flex items-center gap-2 text-slate-700">
                          <span className="text-purple-600">🖼️</span>
                          <span>{selectedBackground.name}</span>
                        </div>
                      )}
                      {placedElements.length > 0 && (
                        <div className="flex items-center gap-2 text-slate-700">
                          <span className="text-purple-600">✨</span>
                          <span>{placedElements.length} אלמנטים</span>
                        </div>
                      )}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <a
                        href={whatsappLink(generateWhatsAppMessage())}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full hover:shadow-2xl transition-all transform hover:scale-105"
                      >
                        <Send className="w-5 h-5" />
                        שלחו הזמנה בוואטסאפ
                      </a>
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="טיפים לעיצוב פוטוזון מושלם"
            description="המלצות שלנו ליצירת עיצוב שיעשה רושם"
            gradient={true}
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'התאימו צבעים',
                description: 'בחרו רקע ובלונים בגוונים משלימים שמתאימים לנושא האירוע',
              },
              {
                icon: '📐',
                title: 'שמרו על איזון',
                description: 'פזרו את האלמנטים באופן מאוזן על הקנבס',
              },
              {
                icon: '✨',
                title: 'שחקו עם הגדלים',
                description: 'שלבו אלמנטים בגדלים שונים ליצירת עומק ומימד',
              },
            ].map((tip, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl"
              >
                <div className="text-5xl mb-4">{tip.icon}</div>
                <h4 className="text-slate-800 mb-2">{tip.title}</h4>
                <p className="text-slate-600">{tip.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-purple-600 via-pink-500 to-purple-400">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
            <h2 className="text-white mb-6">צריכים עזרה בעיצוב?</h2>
            <p className="text-white/90 max-w-2xl mx-auto mb-8">
              הצוות שלנו כאן כדי לעזור! שלחו לנו הודעה ונייע�� לכם בחינם על העיצוב המושלם
            </p>
            <Button
              variant="large"
              href={whatsappLink('שלום, אני צריך עזרה בעיצוב פוטוזון')}
              target="_blank"
              rel="noopener noreferrer"
            >
              דברו עם מעצב
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}