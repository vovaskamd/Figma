import { motion } from 'motion/react';
import { inlineColors } from '../../styles/design-system';

export interface Category {
  name: string;
  slug: string;
}

interface CategoryTabsProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (slug: string) => void;
}

export function CategoryTabs({ categories, activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-12">
      {categories.map((category, index) => {
        const isActive = activeCategory === category.slug;
        
        return (
          <motion.button
            key={category.slug}
            onClick={() => onCategoryChange(category.slug)}
            className="px-6 py-3 rounded-full transition-all duration-300 relative overflow-hidden"
            style={{
              backgroundColor: isActive ? inlineColors.primary.deep : 'white',
              color: isActive ? 'white' : inlineColors.primary.deep,
              border: `2px solid ${isActive ? inlineColors.primary.deep : inlineColors.primary.medium}`,
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 rounded-full"
                style={{ backgroundColor: inlineColors.primary.deep }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{category.name}</span>
          </motion.button>
        );
      })}
    </div>
  );
}
