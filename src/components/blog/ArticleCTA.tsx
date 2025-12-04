import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { inlineColors } from '../../styles/design-system';

interface ArticleCTAProps {
  title?: string;
  description?: string;
  whatsappText?: string;
}

export function ArticleCTA({ 
  title = 'רוצה לשאול אותנו שאלה?',
  description = 'אנחנו כאן בשבילך! צוות המומחים שלנו ישמח לעזור',
  whatsappText = 'שלום, קראתי מאמר באתר ואני מעוניין/ת לשמוע עוד פרטים'
}: ArticleCTAProps) {
  const whatsappLink = `https://api.whatsapp.com/send?phone=972542330001&text=${encodeURIComponent(whatsappText)}`;

  return (
    <section 
      className="py-20"
      style={{
        background: `linear-gradient(135deg, #d8c7dc 0%, #ffffff 100%)`
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h2
            className="text-3xl md:text-4xl mb-4"
            style={{ color: inlineColors.primary.deep }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="text-xl text-slate-700 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            {description}
          </motion.p>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white rounded-full shadow-lg hover:shadow-xl transition-all text-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <MessageCircle className="w-6 h-6" />
            <span>שלחו לנו הודעה בוואטסאפ</span>
          </motion.a>

          <motion.p
            className="text-sm text-slate-500 mt-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            זמינים עבורכם בכל שעה • מענה מהיר ומקצועי
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
