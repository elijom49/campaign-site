import { useLanguage } from "@/hooks/use-language";
import { Button } from "@/components/ui/button";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center space-x-2">
      <Button
        variant={language === 'en' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('en')}
        className="frame-blue-3d text-white px-3 py-1 text-sm font-semibold rounded-md transition-all duration-300"
      >
        EN
      </Button>
      <Button
        variant={language === 'es' ? 'default' : 'outline'}
        size="sm"
        onClick={() => setLanguage('es')}
        className="frame-yellow-3d text-white px-3 py-1 text-sm font-semibold rounded-md transition-all duration-300"
      >
        ES
      </Button>
    </div>
  );
}