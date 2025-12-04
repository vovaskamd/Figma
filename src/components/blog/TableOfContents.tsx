import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { List, X } from 'lucide-react';
import { inlineColors } from '../../styles/design-system';

interface TOCItem {
  id: string;
  title: string;
}

interface TableOfContentsProps {
  items: TOCItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headings = items.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.offsetTop <= scrollPosition) {
          setActiveId(items[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [items]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Desktop - Sticky Sidebar */}
      <motion.aside
        className="hidden lg:block sticky top-24 h-fit"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="bg-white rounded-2xl p-6 shadow-md" style={{ maxWidth: '280px' }}>
          <h3 className="mb-4 text-slate-800" style={{ fontSize: '1.125rem' }}>
            תוכן עניינים
          </h3>
          <nav>
            <ul className="space-y-3">
              {items.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-right w-full text-sm transition-all duration-200 hover:translate-x-1 pb-2"
                    style={{
                      color: activeId === item.id ? inlineColors.primary.deep : '#64748b',
                      fontWeight: activeId === item.id ? '600' : '400',
                      borderRight: activeId === item.id ? `3px solid ${inlineColors.primary.deep}` : '3px solid transparent',
                      paddingRight: '12px'
                    }}
                  >
                    {item.title}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </motion.aside>

      {/* Mobile - Floating Button */}
      <div className="lg:hidden fixed bottom-6 left-6 z-30">
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="p-4 rounded-full shadow-xl text-white"
          style={{
            background: `linear-gradient(to right, ${inlineColors.primary.deep}, ${inlineColors.primary.medium})`
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
        </motion.button>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-20 left-0 bg-white rounded-2xl p-6 shadow-2xl"
            style={{ minWidth: '280px' }}
          >
            <h3 className="mb-4 text-slate-800">
              תוכן עניינים
            </h3>
            <nav>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className="text-right w-full text-sm transition-all duration-200 pb-2"
                      style={{
                        color: activeId === item.id ? inlineColors.primary.deep : '#64748b',
                        fontWeight: activeId === item.id ? '600' : '400',
                        borderRight: activeId === item.id ? `3px solid ${inlineColors.primary.deep}` : '3px solid transparent',
                        paddingRight: '12px'
                      }}
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </div>
    </>
  );
}
