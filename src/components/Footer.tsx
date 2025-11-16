import { NavLink } from './NavLink';
import { Instagram, Youtube } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

// TikTok SVG Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Footer = () => {
  const { t, language } = useLanguage();
  
  // Determine the correct legal pages URLs based on language
  const getLegalUrl = (page: string) => {
    if (language === 'FR') return `/fr/${page}`;
    if (language === 'AR') return `/ar/${page}`;
    return `/${page}`;
  };
  
  return (
    <footer className="border-t border-border bg-card/30 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold cosmic-gradient">soulmapy</h3>
            <p className="text-sm text-muted-foreground">
              {t('footer.tagline')}
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <TikTokIcon className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.quicklinks')}</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <NavLink to="/" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.home')}
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.services')}
              </NavLink>
              <NavLink to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.about')}
              </NavLink>
              <NavLink to="/book" className="text-muted-foreground hover:text-primary transition-colors">
                {t('nav.book')}
              </NavLink>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.services')}</h4>
            <nav className="flex flex-col space-y-2 text-sm">
              <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                {t('service.natal.title')}
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                {t('service.synastry.title')}
              </NavLink>
              <NavLink to="/services" className="text-muted-foreground hover:text-primary transition-colors">
                {t('service.composite.title')}
              </NavLink>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold">{t('footer.contact')}</h4>
            <div className="text-sm text-muted-foreground space-y-2">
              <p>Email: yusra@soulmapy.com</p>
              <p>{t('footer.available')}</p>
              <p>English • العربية • Français</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>{t('footer.copyright')}</p>
          <div className="flex gap-6">
            <NavLink to={getLegalUrl('privacy')} className="hover:text-primary transition-colors">{t('footer.privacy')}</NavLink>
            <NavLink to={getLegalUrl('terms')} className="hover:text-primary transition-colors">{t('footer.terms')}</NavLink>
            <NavLink to={getLegalUrl('refund')} className="hover:text-primary transition-colors">{t('footer.refund')}</NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};
