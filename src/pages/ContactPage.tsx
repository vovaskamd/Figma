import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from 'lucide-react';
import { inlineColors } from '../styles/design-system';

export function ContactPage() {
  const whatsappLink = 'https://api.whatsapp.com/send?phone=972542330001&text=שלום, אני רוצה לשמוע עוד פרטים';

  const contactInfo = [
    {
      icon: Phone,
      title: 'טלפון',
      details: '054-233-0001',
      action: 'tel:0542330001',
      gradient: `linear-gradient(to bottom right, #10b981, #059669)`,
    },
    {
      icon: MessageCircle,
      title: 'וואטסאפ',
      details: '054-233-0001',
      action: whatsappLink,
      gradient: `linear-gradient(to bottom right, #10b981, #0d9488)`,
    },
    {
      icon: Mail,
      title: 'אימייל',
      details: 'info@argaman.co.il',
      action: 'mailto:info@argaman.co.il',
      gradient: `linear-gradient(to bottom right, #3b82f6, #6366f1)`,
    },
    {
      icon: MapPin,
      title: 'מיקום',
      details: 'מרכז הארץ',
      gradient: `linear-gradient(to bottom right, ${inlineColors.primary.medium}, ${inlineColors.primary.light})`,
    },
    {
      icon: Clock,
      title: 'שעות פעילות',
      details: 'א׳-ה׳: 9:00-18:00\nשישי: 9:00-14:00',
      gradient: `linear-gradient(to bottom right, #f97316, #dc2626)`,
    },
  ];

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
            <MessageCircle className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-white mb-6">צור קשר</h1>
            <p className="text-white/90 text-lg max-w-3xl mx-auto">
              נשמח לענות על כל שאלה ולעזור לכם לתכנן את האירוע המושלם
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                {info.action ? (
                  <a
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
                  >
                    <div 
                      style={{ background: info.gradient }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    >
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-slate-800 mb-2 text-xl">{info.title}</h3>
                    <p className="text-slate-600 whitespace-pre-line">{info.details}</p>
                    <span style={{ color: inlineColors.primary.deep }} className="font-semibold mt-4 inline-block group-hover:underline">
                      לחץ ליצירת קשר ←
                    </span>
                  </a>
                ) : (
                  <div className="bg-white rounded-2xl p-8 shadow-lg">
                    <div 
                      style={{ background: info.gradient }}
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4"
                    >
                      <info.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-slate-800 mb-2 text-xl">{info.title}</h3>
                    <p className="text-slate-600 whitespace-pre-line">{info.details}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <Send style={{ color: inlineColors.primary.deep }} className="w-12 h-12 mx-auto mb-4" />
                <h2 className="text-slate-800 mb-2">שלחו לנו הודעה</h2>
                <p className="text-slate-600">מלאו את הפרטים ונחזור אליכם בהקדם</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 mb-2 text-right">שם מלא *</label>
                    <input
                      type="text"
                      style={{
                        borderColor: '#cbd5e1'
                      }}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      placeholder="הכניסו את שמכם"
                      dir="rtl"
                      onFocus={(e) => {
                        e.target.style.borderColor = 'transparent';
                        e.target.style.boxShadow = `0 0 0 2px ${inlineColors.primary.deep}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2 text-right">טלפון *</label>
                    <input
                      type="tel"
                      style={{
                        borderColor: '#cbd5e1'
                      }}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      placeholder="מספר טלפון"
                      dir="rtl"
                      onFocus={(e) => {
                        e.target.style.borderColor = 'transparent';
                        e.target.style.boxShadow = `0 0 0 2px ${inlineColors.primary.deep}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 mb-2 text-right">אימייל</label>
                  <input
                    type="email"
                    style={{
                      borderColor: '#cbd5e1'
                    }}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                    placeholder="כתובת אימייל"
                    dir="rtl"
                    onFocus={(e) => {
                      e.target.style.borderColor = 'transparent';
                      e.target.style.boxShadow = `0 0 0 2px ${inlineColors.primary.deep}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#cbd5e1';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div>
                  <label className="block text-slate-700 mb-2 text-right">סוג אירוע *</label>
                  <select 
                    style={{
                      borderColor: '#cbd5e1'
                    }}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent" 
                    dir="rtl"
                    onFocus={(e) => {
                      e.target.style.borderColor = 'transparent';
                      e.target.style.boxShadow = `0 0 0 2px ${inlineColors.primary.deep}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#cbd5e1';
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    <option value="">בחרו סוג אירוע</option>
                    <option value="brit">ברית מילה</option>
                    <option value="bar-mitzvah">בר/בת מצווה</option>
                    <option value="wedding">חתונה</option>
                    <option value="birthday">יום הולדת</option>
                    <option value="corporate">אירוע קורפורטיבי</option>
                    <option value="other">אחר</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 mb-2 text-right">תאריך האירוע</label>
                    <input
                      type="date"
                      style={{
                        borderColor: '#cbd5e1'
                      }}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      onFocus={(e) => {
                        e.target.style.borderColor = 'transparent';
                        e.target.style.boxShadow = `0 0 0 2px ${inlineColors.primary.deep}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 mb-2 text-right">מיקום האירוע</label>
                    <input
                      type="text"
                      style={{
                        borderColor: '#cbd5e1'
                      }}
                      className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent"
                      placeholder="עיר/אולם"
                      dir="rtl"
                      onFocus={(e) => {
                        e.target.style.borderColor = 'transparent';
                        e.target.style.boxShadow = `0 0 0 2px ${inlineColors.primary.deep}`;
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = '#cbd5e1';
                        e.target.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 mb-2 text-right">הודעה</label>
                  <textarea
                    rows={5}
                    style={{
                      borderColor: '#cbd5e1'
                    }}
                    className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:border-transparent resize-none"
                    placeholder="ספרו לנו על האירוע ומה אתם מחפשים..."
                    dir="rtl"
                    onFocus={(e) => {
                      e.target.style.borderColor = 'transparent';
                      e.target.style.boxShadow = `0 0 0 2px ${inlineColors.primary.deep}`;
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = '#cbd5e1';
                      e.target.style.boxShadow = 'none';
                    }}
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    style={{
                      background: `linear-gradient(to right, ${inlineColors.primary.deep}, ${inlineColors.primary.light})`
                    }}
                    className="px-10 py-4 text-white rounded-full hover:shadow-2xl transition-all transform hover:scale-105 font-semibold inline-flex items-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    שלח הודעה
                  </button>
                  <p className="text-slate-500 text-sm mt-4">
                    או פשוט שלחו לנו הודעה ב
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: inlineColors.primary.deep }}
                      className="hover:underline mr-1"
                    >
                      וואטסאפ
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-slate-800 mb-4">איפה אנחנו?</h2>
            <p className="text-slate-600">אנחנו משרתים את כל אזור מרכז הארץ</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              background: `linear-gradient(to bottom right, ${inlineColors.primary.paleBlush}, ${inlineColors.primary.blush})`
            }}
            className="rounded-2xl p-16 text-center"
          >
            <MapPin style={{ color: inlineColors.primary.deep }} className="w-20 h-20 mx-auto mb-6" />
            <h3 className="text-slate-800 mb-4 text-2xl">מרכז הארץ</h3>
            <p className="text-slate-600 max-w-2xl mx-auto mb-6">
              אנחנו מגיעים לכל אזור מרכז הארץ - תל אביב, גוש דן, השרון והסביבה.
              צרו איתנו קשר לבדיקת זמינות באזור שלכם.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: `linear-gradient(to right, ${inlineColors.primary.deep}, ${inlineColors.primary.light})`
              }}
              className="inline-block px-8 py-3 text-white rounded-full hover:shadow-lg transition-all"
            >
              בדקו זמינות באזור שלכם
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-slate-800 mb-4">שאלות נפוצות</h2>
            <p className="text-slate-600">תשובות לשאלות הנפוצות ביותר</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: 'כמה זמן מראש צריך להזמין?',
                a: 'מומלץ להזמין לפחות 2-3 שבועות מראש, אבל נשמח לנסות לעזור גם בהזמנות דחופות יותר.',
              },
              {
                q: 'האם אתם מגיעים לכל הארץ?',
                a: 'אנחנו משרתים בעיקר את אזור מרכז הארץ. לאזורים מרוחקים יותר, צרו איתנו קשר לבדיקת אפשרות.',
              },
              {
                q: 'מה כלול בחבילות?',
                a: 'כל חבילה כוללת את הפרטים המפורטים בדף החבילות. אפשר גם להתאים חבילה אישית לפי הצרכים שלכם.',
              },
              {
                q: 'איך מתבצע התשלום?',
                a: 'ניתן לשלם במזומן, העברה בנקאית או אשראי. פרטי התשלום מתואמים בעת ההזמנה.',
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-slate-800 mb-2 text-lg text-right">{faq.q}</h3>
                <p className="text-slate-600 text-right">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}