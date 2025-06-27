import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.campaign': 'Campaign',
    'nav.community': 'Community',
    'nav.volunteer': 'Volunteer',
    
    // Homepage
    'home.title': 'Your Future U.S. Senator Lives Among the People',
    'home.tagline': "It's not Red vs. Blue, it's oligarchs vs. you.",
    'home.getInvolved': 'Get Involved',
    'home.donate': 'Donate',
    'home.quote': "I'm running for U.S. Senate because I believe the government should promote equality for everyone.",
    'home.fightingTitle': 'Fighting for Our Future',
    'home.costOfLiving': 'Lowering Cost of Living',
    'home.costOfLivingDesc': 'Making housing, healthcare, and education affordable for every family through bold policy action.',
    'home.environment': 'Environmental Policy',
    'home.environmentDesc': 'Protecting our planet while creating good-paying green jobs for the next generation.',
    'home.pinkTax': 'Elimination of The Pink Tax',
    'home.pinkTaxDesc': 'Ending gender-based pricing discrimination once and for all through federal legislation.',
    'home.learnMore': 'Learn More',
    'home.theIssues': 'The Issues',
    'home.joinMovement': 'Join the Movement',
    'home.joinDesc': 'Together, we can build a future where every person has the opportunity to thrive.',
    'home.donateToday': 'Donate Today',
    
    // About Page
    'about.meetJump': 'Meet Jump',
    'about.policies': 'Policies',
    'about.policiesDesc': "Jump's comprehensive policy platform focuses on economic justice, environmental responsibility, and equality for all Americans.",
    
    // Footer
    'footer.connect': 'Connect',
    'footer.contact': 'Contact',
    'footer.signUpUpdates': 'Sign Up for Updates',
  },
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.about': 'Acerca de',
    'nav.campaign': 'Campaña',
    'nav.community': 'Comunidad',
    'nav.volunteer': 'Voluntario',
    
    // Homepage
    'home.title': 'Tu Futuro Senador de EE.UU. Vive Entre la Gente',
    'home.tagline': 'No es Rojo contra Azul, son oligarcas contra ti.',
    'home.getInvolved': 'Participa',
    'home.donate': 'Donar',
    'home.quote': 'Me postulo para el Senado de EE.UU. porque creo que el gobierno debe promover la igualdad para todos.',
    'home.fightingTitle': 'Luchando por Nuestro Futuro',
    'home.costOfLiving': 'Reducir el Costo de Vida',
    'home.costOfLivingDesc': 'Hacer que la vivienda, la atención médica y la educación sean asequibles para todas las familias a través de acciones políticas audaces.',
    'home.environment': 'Política Ambiental',
    'home.environmentDesc': 'Proteger nuestro planeta mientras creamos empleos verdes bien remunerados para la próxima generación.',
    'home.pinkTax': 'Eliminación del Impuesto Rosa',
    'home.pinkTaxDesc': 'Acabar con la discriminación de precios basada en el género de una vez por todas a través de la legislación federal.',
    'home.learnMore': 'Aprende Más',
    'home.theIssues': 'Los Temas',
    'home.joinMovement': 'Únete al Movimiento',
    'home.joinDesc': 'Juntos, podemos construir un futuro donde cada persona tenga la oportunidad de prosperar.',
    'home.donateToday': 'Dona Hoy',
    
    // About Page
    'about.meetJump': 'Conoce a Jump',
    'about.policies': 'Políticas',
    'about.policiesDesc': 'La plataforma política integral de Jump se enfoca en la justicia económica, la responsabilidad ambiental y la igualdad para todos los estadounidenses.',
    
    // Footer
    'footer.connect': 'Conectar',
    'footer.contact': 'Contacto',
    'footer.signUpUpdates': 'Suscribirse a Actualizaciones',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}