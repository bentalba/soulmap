import { AlertCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export const DelayBanner = () => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-red-500/10 border-b border-red-500/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-3 text-sm">
          <AlertCircle className="h-4 w-4 text-red-500 flex-shrink-0" />
          <p className="text-red-500 text-center leading-relaxed">
            {t('banner.delay')}
          </p>
        </div>
      </div>
    </div>
  );
};
