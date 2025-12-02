import { motion } from 'motion/react';
import { Camera, PartyPopper, Smile, Award } from 'lucide-react';
import chickCamera1 from 'figma:asset/d3fb84caade5ca9ed81ce71c69b1a26d159934c7.png';
import chickCamera2 from 'figma:asset/592818c2f7a91fe3cdbb3735356182fccb24b783.png';
import chickBalloons1 from 'figma:asset/27739d096c8f79bd12bbb3a2f825330e62d8546e.png';
import chickHappy from 'figma:asset/6e5480727e9e6d0d6c87c9f14ba56f065b8f5f5f.png';

export function StatsSection() {
  const stats = [
    {
      icon: Camera,
      image: chickCamera1,
      number: '2,300+',
      label: 'שעות של צילומים',
      color: 'from-[#6b1a3d] to-[#8b2e3f]',
      delay: 0.1
    },
    {
      icon: PartyPopper,
      image: chickCamera2,
      number: '753',
      label: 'אירועים',
      color: 'from-[#8b2e3f] to-[#4d184d]',
      delay: 0.2
    },
    {
      icon: Award,
      image: chickBalloons1,
      number: '20K+',
      label: 'בלונים מוצפים',
      color: 'from-[#4d184d] to-[#6b1a3d]',
      delay: 0.3
    },
    {
      icon: Smile,
      image: chickHappy,
      number: '500+',
      label: 'לקוחות מרוצים',
      color: 'from-[#6b1a3d] to-[#c9a9b8]',
      delay: 0.4
    }
  ];

  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#faf8fb] via-transparent to-white opacity-50" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#c9a9b8]/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tl from-[#6b1a3d]/5 to-transparent rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4 bg-gradient-to-r from-[#6b1a3d] to-[#4d184d] bg-clip-text text-transparent">
            המספרים מדברים בעד עצמם
          </h2>
          <p className="text-slate-600 text-lg">
            כמה שנים של ניסיון ואירועים מושלמים
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: stat.delay,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-[#c9a9b8]/20 relative overflow-hidden h-[200px] md:h-[240px] flex flex-col items-center justify-center text-center">
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                {/* Icon or Image */}
                <motion.div
                  className={`inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 ${stat.image ? 'bg-white shadow-md' : `bg-gradient-to-br ${stat.color}`} rounded-full mb-4 overflow-hidden`}
                  whileHover={{ 
                    rotate: [0, -10, 10, 0],
                    scale: 1.1
                  }}
                  transition={{ duration: 0.5 }}
                >
                  {stat.image ? (
                    <img 
                      src={stat.image} 
                      alt={stat.label}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <stat.icon className="w-7 h-7 md:w-8 md:h-8 text-white" />
                  )}
                </motion.div>

                {/* Number */}
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: stat.delay + 0.2, duration: 0.5 }}
                  className={`text-3xl md:text-4xl mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent relative z-10`}
                >
                  {stat.number}
                </motion.div>

                {/* Label */}
                <p className="text-slate-600 text-sm md:text-base relative z-10">
                  {stat.label}
                </p>

                {/* Animated border */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${stat.color}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: stat.delay + 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
