import { motion } from 'motion/react';
import { Sparkles, CheckCircle } from 'lucide-react';
import { inlineColors } from '../styles/design-system';

export function TestPage() {
    return (
        <div className="min-h-screen bg-[#faf8fb]">
            {/* Hero Section */}
            <section
                style={{
                    background: `linear-gradient(to right, ${inlineColors.primary.deep}, ${inlineColors.primary.light}, ${inlineColors.primary.medium})`
                }}
                className="py-20"
            >
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-white"
                    >
                        <Sparkles className="w-16 h-16 mx-auto mb-6" />
                        <h1 className="text-white mb-6">עמוד בדיקה</h1>
                        <p className="text-white/90 text-lg max-w-3xl mx-auto">
                            אם אתם רואים את העמוד הזה, סימן שהניתוב עובד מצוין!
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-2xl p-12 shadow-xl max-w-2xl mx-auto"
                    >
                        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
                        <h2 className="text-3xl font-bold text-slate-800 mb-4">הכל תקין!</h2>
                        <p className="text-xl text-slate-600 mb-8">
                            העמוד החדש נוצר בהצלחה והתווסף למערכת הניתוב.
                        </p>
                        <div className="p-6 bg-slate-50 rounded-xl border border-slate-200">
                            <p className="font-mono text-slate-500 dir-ltr">
                                src/pages/TestPage.tsx
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
