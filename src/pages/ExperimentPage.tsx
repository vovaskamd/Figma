import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, ImageIcon, Grid3x3, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';
import Masonry from 'react-responsive-masonry';
import { JumpAtYouBlocks } from '../components/JumpAtYouBlocks';

interface GalleryImage {
  id: number;
  url: string;
  title: string;
  description: string;
}

export function ExperimentPage() {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filter, setFilter] = useState<'all' | 'balloons' | 'party' | 'celebration'>('all');
  const [showJumpDemo, setShowJumpDemo] = useState(true);

  // Show jump demo first, then gallery
  if (showJumpDemo) {
    return <JumpAtYouBlocks />;
  }

  const images: GalleryImage[] = [
    { id: 1, url: 'https://images.unsplash.com/photo-1654851364032-ca4d7a47341c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJчаHwxfHxiaXJ0אGRheSUyMGJhbGxvb2ןזJTIwcGFydHl8ZW58MXx8fHwxNzY0NTE3ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'בלונים לימי הולדת', description: 'בלונים צבעוניים וברורים שמתאימים לימי הולדת שמחים' },
    { id: 2, url: 'https://images.unsplash.com/photo-1759054788471-dc7815144604?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNלYXרчаHwxfHxjb2xvcmZ1bCUyMGJhbGxvb2ןזJTIwY2לברטיוJTIwZXזנט8ZW58MXx8fHwxNzY0NDY1NTk2fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'בלונים צבעוניים', description: 'בלונים צבעוניים שמתאימים למסיבות ורגעים שמחים' },
    { id: 3, url: 'https://images.unsplash.com/photo-1607430107755-eed0660a4212?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNלYXרчаHwxfHxwYXJ0אGRheSUyMGRlY29yYXRיוJTIwYמhalbלונזJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'עיצוב מסיבה', description: 'עיצוב מסיבה מושלם עם בלונים וקישוטים' },
    { id: 4, url: 'https://images.unsplash.com/photo-1656918566254-957a997dbd7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNלYXרчаHwxfHxiaXJ0אGRheSUyMHBhcnR5JTIwcGhvdG9ncרפיJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3ODE0fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'צילום אירועים', description: 'צילום אירועים מקצועי עם בלונים וקישוטים' },
    { id: 5, url: 'https://images.unsplash.com/photo-1681396095394-8869d0ff18f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNלYXרчаHwxfHxjZWלYunerטיונJTIwY29uZmV0טפJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3gxNXww&ixlib=rb-4.1.0&q=80&w=1080', title: 'קונפטי לחגיגה', description: 'קונפטי ובלונים שיוצרים אווירה חגיגית מושלמת' },
    { id: 6, url: 'https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNלYXרчаHwxfHxraWRזJTIwYמירדהדיאJTIwUGhvdG9ncרפיJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'מסיבת ילדים', description: 'רגעים מתוקים ושמחים במסיבת ילדים עם בלונים' },
    { id: 7, url: 'https://images.unsplash.com/photo-1714042804911-47f0dea4b8ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNלYXרчаHwxfHxiYWJ5JTIwc2hvd2VyJTIwYמלונזJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'בלונים לברית', description: 'עיצוב מיוחד עם בלונים לאירוע הברית המרגש' },
    { id: 8, url: 'https://images.unsplash.com/photo-1614607653708-0777e6d003b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNלYXרчаHwxfHxldmVudCUyMHBob3RvZ3JhcGхиJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'צילום מקצועי', description: 'צילום מקצועי שתופס את הרגעים המיוחדים' },
    { id: 9, url: 'https://images.unsplash.com/photo-1664289597477-d5b2d266169d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNלYXרчаHwxfHxiaXJ0אGRheSUyMGNha2UlMjBjZWלYunerטיונJTIwZXזנט8ZW58MXx8fHwxNzY0NMDk4MDh8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'עוגת יום הולדת', description: 'עוגות מדהימות לימי הולדת בלתי נשכחים' },
    { id: 10, url: 'https://images.unsplash.com/photo-1763377753121-3851ae21cf23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxwYXJ0אGRheSUyMGRlY29yYXRיוJTIwZמסטיבWXxlbnwxfHx8fDE3NjQ0MzY5Njh8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'קישוטים חגיגיים', description: 'קישוטים צבעוניים שמוסיפים קסם לכל אירוע' },
    { id: 11, url: 'https://images.unsplash.com/photo-1595097237934-555b21c5d3e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxiYWל	sb29uczJTIwUGluc3xlbnwxfHx8fDE3NjQ1TE3ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'בלונים סגולים', description: 'בלונים בגוונים סגולים ורודים עדינים' },
    { id: 12, url: 'https://images.unsplash.com/photo-1663009735209-4f4ed843d4d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHx3ZWRkaW5גJTIwYמhalbלונזJTIwZGVjb3ר8ZW58MXx8fHwxNzY0NTE3ODE3fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'בלונים לחתונה', description: 'עיצוב אלגנטי עם בלונים לחתונה מושלמת' },
    { id: 13, url: 'https://images.unsplash.com/photo-1760123227452-97901084f41d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxjaGlsZHJלןUyMHBhcnR5JTIwZנוףWXxlbnwxfHx8fDE3NjQ1TE3ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'כיף дети', description: 'חגיגה מלאה בשמחה וצחוק עם הילדים' },
    { id: 14, url: 'https://images.unsplash.com/photo-1492940664705-726225a992a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxjZWלYunerטיונJTIwUGhvdG9ncרפיJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3gxOHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'רגעים שמחים', description: 'כל רגע הוא זכרון יקר שנשמר לנצח' },
    { id: 15, url: 'https://images.unsplash.com/photo-1594557313209-2e7d809c9b4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxwYXJ0אGRheSUyMGJhbGxvb2ןזJTIwZ29לד8ZW58MXx8fHwxNzY0NTE3ODE4fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'בלוני זהב', description: 'בלונים מוזהבים המוסיפים נוצץ וזוהר' },
    { id: 16, url: 'https://images.unsplash.com/photo-1689601535474-195d10eca664?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxiaXJ0אGRheSUyMGRלY29yYXRיוJTIwaGFwcHl8ZW58MXx8fHwxNzY0NTE3ODE5fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'קישוטי יום הולדת', description: 'קישוט מושלם ליום הולדת בלתי נשכח' },
    { id: 17, url: 'https://images.unsplash.com/photo-1658893663122-ec4cfa43be36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxmZXסטאJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3ODE5fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'אירוע חגיגי', description: 'אירוע מלא בצבעים ושמחה עם בלונים מדהימים' },
    { id: 18, url: 'https://images.unsplash.com/photo-1712709975427-bd1c70c40691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxwYXJ0אGRheSUyMHBob3RvZ3רפיJTIwY2눌דidfGVufDF8fHx8MTc2NDUxNzgyMHww&ixlib=rb-4.1.0&q=80&w=1080', title: 'צילום ספונטני', description: 'רגעים טבעיים ואותנטיים שנתפסו במצלמה' },
    { id: 19, url: 'https://images.unsplash.com/photo-1758870041148-31d28fdf34d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxiYWל	sb29uczJTIwYXJjaCUyMGRlY29רטיונズ8ZW58MXx8fHwxNzY0NTE3ODIwfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'קשת בלונים', description: 'קשת בלונים מרשימה שמהווה נקודת מוקד באירוע' },
    { id: 20, url: 'https://images.unsplash.com/photo-1760348082270-3a46a3512850?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxjZWלYunerטיונJTIwYמלוניםJTIwbW9tZW50c3xlbnwxfHx8fDE3NjQ1MTc4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'רגעים מאושרים', description: 'שמחה אמיתית ורגעים יקרים עם יקירינו' },
    { id: 21, url: 'https://images.unsplash.com/photo-1755704282977-340323fa52df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxwYXJ0אGRheSUyMHNldHVwJTIwZGVjb3רטיונズ8ZW58MXx8fHwxNzY0NTE3ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'הכנת מסיבה', description: 'תהליך ההכנה המרגש לקראת האירוע המושלם' },
    { id: 22, url: 'https://images.unsplash.com/photo-1595116971913-b52f8ccca4c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxraWRזJTIwYמלוניםJTIwZנוז8ZW58MXx8fHwxNzY0NTE3ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'חגיגת дети', description: 'ילדים שמחים ונהנים מכל רגע באירוע' },
    { id: 23, url: 'https://images.unsplash.com/photo-1659670191953-fc44631224ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxiaXJ0אGRheSUyMGJhbGxvb2נזJTIwY29sb3רפיוJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3ODIxfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'בלונים רב-גוניים', description: 'שילוב מרהיב של צבעים שמביא חיים' },
    { id: 24, url: 'https://images.unsplash.com/photo-1758810409666-b091b8682bc1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxwYXJ0אGRheSUyMGNlbGVicרטיונJTIwam95fGVufDF8fHx8MTc2NDUxNzgyMnww&ixlib=rb-4.1.0&q=80&w=1080', title: 'שמחת חגיגה', description: 'אנרגיה חיובית ושמחה טהורה בכל פינה' },
    { id: 25, url: 'https://images.unsplash.com/photo-1729798997904-d50ef609ac00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxmZXסטאJTIwYמלוניםJTIwZGVjb3ר8ZW58MXx8fHwxNzY0NTE3ODIyfDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'עיצוב חגיגי', description: 'עיצוב מקצועי שיוצר חוויה בלתי נשכחת' },
    { id: 26, url: 'https://images.unsplash.com/photo-1742416578587-3928c366468d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxwYXJ0אGRheSUyMHBob3RvZ3רפיJTIwa2לדסxlbnwxfHx8fDE3NjQ1MTc4MjR8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'צילום дети', description: 'תמונות של дети שמראות את השמחה האמיתית' },
    { id: 27, url: 'https://images.unsplash.com/photo-1599519868354-6620b923cd8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxjZWלYunerטיונJTIwZGVjb3ר8ZW58MXx8fHwxNzY0NTE3ODI0fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'קישוטים יפהפיים', description: 'פרטים קטנים שעושים את ההבדל הגדול' },
    { id: 28, url: 'https://images.unsplash.com/photo-1758738181955-3f917d756275?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxiYWל	sb29uczJTIwYמואקיודCUyMHBhcnR5fGVufDF8fHx8MTc2NDUxNzgyNXww&ixlib=rb-4.1.0&q=80&w=1080', title: 'זר בלונים', description: 'זרי בלונים מעוצבים במיוחד לאירוע שלכם' },
    { id: 29, url: 'https://images.unsplash.com/photo-1723921181921-b3399cb85fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxmZXסטאJTIwYמלוניםJTIwYמלוניםJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'בלונים מרהיבים', description: 'בלונים שמוסיפים קסם ויופי לכל חגיגה' },
    { id: 30, url: 'https://images.unsplash.com/photo-1718096551468-dc9ef2e93efc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxwYXJ0אGRheSUyMGV2ZWנטJTIwcGhvdG9ncרפיJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3ODI1fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'צילום אירועים', description: 'תיעוד מקצועי של כל הרגעים החשובים' },
    { id: 31, url: 'https://images.unsplash.com/photo-1602863211785-1cf7ba7694ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxiaXJ0אGRheSUyMGNlbGVicרטיונJTIwZGVjb3ר8ZW58MXx8fHwxNzY0NTE3ODI2fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'עיצוב ליום הולדת', description: 'כל פרט מעוצב בקפידה ליום מושלם' },
    { id: 32, url: 'https://images.unsplash.com/photo-1602328790041-ee36d98e677c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxwYXJ0אGRheSUyMGJhbGxvb2נזJTIwZGVjb3ר8ZW58MXx8fHwxNzY0NTE3ODI3fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'דקורציה בבלונים', description: 'יצירתיות וצבע שמביאים את הקסם לחיים' },
    { id: 33, url: 'https://images.unsplash.com/photo-1763429450882-2f88073f2df5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxmZXסטאJTIwcGFydHklMjBwaG90b2grayXxlbnwxfHx8fDE3NjQ1MTc4Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080', title: 'צילום פסטיבלי', description: '霭 חגיגית שנלכדת במצלמה לנצח' },
    { id: 34, url: 'https://images.unsplash.com/photo-1658893663122-ec4cfa43be36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzג4Nzd8MHwxfHNלYXרчаHwxfHxjZWלYunerטיונJTIwYמלוניםJTIwZXזנט8ZW58MXx8fHwxNzY0NTE3ODI4fDA&ixlib=rb-4.1.0&q=80&w=1080', title: 'אירוע בלונים', description: 'בלונים שיוצרים אווירה קסומה ומיוחדת' },
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-[#faf8fb] via-white to-[#f9f5f7]">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#6b1a3d] via-[#8b2e3f] to-[#4d184d] text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8" />
              <h1 className="text-white">גלריית הרגעים שלנו</h1>
              <Sparkles className="w-8 h-8" />
            </div>
            <p className="text-white/90 max-w-2xl mx-auto">
              אוסף תמונות מהאירועים המיוחדים שלנו - בלונים, עיצוב וצילום מקצועי
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <ImageIcon className="w-5 h-5 text-white/80" />
              <span className="text-white/80">{images.length} תמונות בגלריה</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Filter Buttons */}
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
            כ התמונות
          </button>
          <button
            onClick={() => setFilter('balloons')}
            className={`px-6 py-2.5 rounded-full transition-all ${
              filter === 'balloons'
                ? 'bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] text-white shadow-lg'
                : 'bg-white text-[#6b1a3d] border-2 border-[#c9a9b8] hover:border-[#8b2e3f]'
            }`}
          >
            בלונים
          </button>
          <button
            onClick={() => setFilter('party')}
            className={`px-6 py-2.5 rounded-full transition-all ${
              filter === 'party'
                ? 'bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] text-white shadow-lg'
                : 'bg-white text-[#6b1a3d] border-2 border-[#c9a9b8] hover:border-[#8b2e3f]'
            }`}
          >
            מסיבות
          </button>
          <button
            onClick={() => setFilter('celebration')}
            className={`px-6 py-2.5 rounded-full transition-all ${
              filter === 'celebration'
                ? 'bg-gradient-to-r from-[#6b1a3d] to-[#8b2e3f] text-white shadow-lg'
                : 'bg-white text-[#6b1a3d] border-2 border-[#c9a9b8] hover:border-[#8b2e3f]'
            }`}
          >
            חגיגות
          </button>
        </motion.div>

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
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#6b1a3d]/90 via-[#6b1a3d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white mb-1">{image.title}</h3>
                  <p className="text-white/80 text-sm mb-2">{image.description}</p>
                  <div className="flex items-center gap-2 text-white/90">
                    <ZoomIn className="w-4 h-4" />
                    <span className="text-sm">לחץ להגדלה</span>
                  </div>
                </div>
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

      {/* Modal with Navigation */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Beautiful Background */}
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
              className="absolute top-4 right-4 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
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
              className="absolute right-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
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
              className="absolute left-4 top-1/2 -translate-y-1/2 p-4 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
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