import { Camera, Phone, Mail, MapPin, Flower2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { inlineColors } from '../styles/design-system';

export function Footer() {
  const navigate = useNavigate();
  const whatsappLink = 'https://api.whatsapp.com/send?phone=972542330001&text=שלום, אני רוצה לשמוע עוד פרטים';

  const handleNavClick = (pageId: string) => {
    navigate(pageId === 'home' ? '/' : `/${pageId}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      className="text-slate-800 py-12 border-t border-[#e0e0e0]"
      style={{
        backgroundColor: `${inlineColors.primary.blush}20`
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="text-center md:text-right bg-[rgba(230,23,23,0)]">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4 bg-[rgba(32,255,110,0)]">
              <div
                style={{
                  background: `linear-gradient(to bottom right, ${inlineColors.primary.deep}, ${inlineColors.primary.medium})`
                }}
                className="p-3 rounded-full"
              >
                <Flower2 className="w-6 h-6 text-white" />
              </div>
              <div className="text-right">
                <div className="text-xl font-semibold font-[Wendy_One]">Argaman</div>
                <div className="text-slate-400 text-sm">בלונים וצילום לאירועים</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm">
              עיצוב בלונים וצילום מקצועי לברית מילה, בר מצווה ואירועים במרכז הארץ
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">קישורים מהירים</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handleNavClick('home')}
                  className="text-slate-400 transition-colors"
                  style={{
                    color: '#94a3b8'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = inlineColors.primary.light;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  ראשי
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('brit')}
                  className="text-slate-400 transition-colors"
                  style={{
                    color: '#94a3b8'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = inlineColors.primary.light;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  חבילות לברית
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('bar-mitzvah')}
                  className="text-slate-400 transition-colors"
                  style={{
                    color: '#94a3b8'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = inlineColors.primary.light;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  חבילות לבר מצווה
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('catalog')}
                  className="text-slate-400 transition-colors"
                  style={{
                    color: '#94a3b8'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = inlineColors.primary.light;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  קטלוג מוצרים
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="text-slate-400 transition-colors"
                  style={{
                    color: '#94a3b8'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = inlineColors.primary.light;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                  }}
                >
                  צור קשר
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4 text-[rgb(29,41,61)] text-[16px]">צור קשר</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors"
                  style={{
                    color: inlineColors.primary.light
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = inlineColors.primary.deep;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = inlineColors.primary.light;
                  }}
                >
                  <Phone className="w-4 h-4" />
                  054-233-0001
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
                <Mail className="w-4 h-4" />
                info@argaman.co.il
              </li>
              <li className="flex items-center justify-center md:justify-start gap-2 text-slate-400">
                <MapPin className="w-4 h-4" />
                מרכז הארץ
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© 2024 Argaman. כל הזכויות שמורות.</p>
        </div>
      </div>
    </footer>
  );
}