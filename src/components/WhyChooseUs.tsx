import { motion } from 'motion/react';
import { Zap, MapPin, Palette } from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Palette,
      title: 'עיצוב בהתאמה אישית',
      description: 'כל קיד מנגנים נבנה לפי סגנון, צבעים ונושא האירוע שלכם.',
      color: 'from-[#6b1a3d] to-[#8b2e3f]',
      delay: 0.1
    },
    {
      icon: MapPin,
      title: 'הגעה לכל אזור המרכז',
      description: 'אנחנו מגיעים עד אליכם – מהרצליה ועד ראשון לציון.',
      color: 'from-[#8b2e3f] to-[#4d184d]',
      delay: 0.2
    },
    {
      icon: Zap,
      title: 'שירות מהיר ואדיב',
      description: 'זמינות גבוהה, יחס אישי ותאום פשוט דרך WhatsApp.',
      color: 'from-[#4d184d] to-[#6b1a3d]',
      delay: 0.3
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-[#faf8fb] via-white to-[#f9f5f7] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#6b1a3d]/5 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#c9a9b8]/10 to-transparent rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="mb-4 relative text-4xl md:text-5xl bg-gradient-to-r from-purple-600 to-pink-500 bg-clip-text text-transparent text-[48px]">
              למה לבחור בנו?
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-slate-600 text-lg"
          >
            שלושה דברים שכל לקוח שלנו מקבל בכל חבילה.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.7, 
                delay: feature.delay,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] }
              }}
              className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-500 border border-[#c9a9b8]/20 group relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              />

              {/* Icon Container */}
              <motion.div
                className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#6b1a3d]/10 to-[#8b2e3f]/10 rounded-full mb-6 mx-auto"
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  scale: 1.1
                }}
                transition={{ duration: 0.5 }}
              >
                {/* Pulsing Ring */}
                <motion.div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${feature.color}`}
                  initial={{ scale: 1, opacity: 0.2 }}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0, 0.2]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Icon */}
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  <feature.icon className="w-10 h-10 text-[#6b1a3d] relative z-10" />
                </motion.div>
              </motion.div>

              {/* Title */}
              <motion.h3 
                className="text-[#6b1a3d] mb-3 relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay + 0.2 }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-slate-600 leading-relaxed relative"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: feature.delay + 0.3 }}
              >
                {feature.description}
              </motion.p>

              {/* Bottom Accent Line */}
              <motion.div
                className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.color}`}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: feature.delay + 0.4 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom Decorative Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 text-sm">
            ✨ כל פרטי השירות מותאמים במיוחד לכם
          </p>
        </motion.div>
      </div>
    </div>
  );
}