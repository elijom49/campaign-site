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
    
    // Community Page
    'community.joinCommunity': 'Join Our Community',
    'community.connectWith': 'Connect with Illinois residents building a grassroots movement for economic justice and progressive change.',
    'community.followCampaign': 'Follow the Campaign',
    'community.stayConnected': 'Stay connected with daily updates, behind-the-scenes content, and live events',
    'community.upcomingEvents': 'Upcoming Events',
    'community.joinEvents': 'Join us at campaign events across Illinois to meet fellow supporters and learn more about our movement.',
    'community.eventCalendar': 'Event Calendar',
    'community.stayUpdated': 'Stay updated with all upcoming campaign events and activities.',
    'community.viewCalendar': 'View Full Calendar',
    'community.contactEvents': 'Contact for Events',
    'community.orderMerch': 'Order Merch',
    'community.showSupport': 'Show your support with official campaign merchandise',
    'community.tshirts': 'T-Shirts',
    'community.buttonsStickers': 'Buttons & Stickers',
    'community.yardSign': 'Order a Yard Sign',
    'community.stayInformed': 'Stay Informed',
    'community.weeklyUpdates': 'Get weekly updates on campaign progress, policy positions, and upcoming events delivered to your inbox.',
    'community.enterEmail': 'Enter your email',
    'community.subscribe': 'Subscribe',
    'community.privacyNote': 'We respect your privacy. Unsubscribe at any time.',
    'community.bePartMovement': 'Be Part of the Movement',
    'community.realChange': 'Real change happens when communities organize together. Join thousands of Illinois residents fighting for progressive policies.',
    'community.volunteerToday': 'Volunteer Today',
    'community.contactUs': 'Contact Us',
    
    // Campaign Page  
    'campaign.howCanHelp': 'How Can You Help?',
    'campaign.joinMovement': 'Join our movement to bring real change to Illinois. Every contribution, every volunteer hour, and every voice matters in our fight for justice and equality.',
    'campaign.buildFuture': 'Together, we can build a better future for all Illinoisans.',
    'campaign.volunteering': 'Volunteering',
    'campaign.beChange': 'Be the change you want to see. Join our dedicated team of volunteers working to transform Illinois communities.',
    'campaign.donations': 'Donations',
    'campaign.financialSupport': 'Your financial support helps us reach more voters, organize more events, and amplify our message across Illinois.',
    'campaign.press': 'Press',
    
    // Volunteer Page
    'volunteer.joinTeam': 'Join Our Team',
    'volunteer.makeChange': 'Ready to make a real difference in Illinois? Join our grassroots movement and help build a more just and equitable future for all.',
    'volunteer.getInvolved': 'Get Involved',
    'volunteer.volunteerInterests': 'Volunteer Interests',
    'volunteer.firstName': 'First Name',
    'volunteer.lastName': 'Last Name',
    'volunteer.email': 'Email',
    'volunteer.phone': 'Phone Number',
    'volunteer.zipCode': 'Zip Code',
    'volunteer.submit': 'Submit',
    
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
    
    // Community Page
    'community.joinCommunity': 'Únete a Nuestra Comunidad',
    'community.connectWith': 'Conéctate con residentes de Illinois construyendo un movimiento de base para la justicia económica y el cambio progresivo.',
    'community.followCampaign': 'Sigue la Campaña',
    'community.stayConnected': 'Mantente conectado con actualizaciones diarias, contenido detrás de escena y eventos en vivo',
    'community.upcomingEvents': 'Próximos Eventos',
    'community.joinEvents': 'Únete a nosotros en eventos de campaña en todo Illinois para conocer a otros partidarios y aprender más sobre nuestro movimiento.',
    'community.eventCalendar': 'Calendario de Eventos',
    'community.stayUpdated': 'Mantente actualizado con todos los próximos eventos y actividades de campaña.',
    'community.viewCalendar': 'Ver Calendario Completo',
    'community.contactEvents': 'Contactar para Eventos',
    'community.orderMerch': 'Ordenar Mercancía',
    'community.showSupport': 'Muestra tu apoyo con mercancía oficial de campaña',
    'community.tshirts': 'Camisetas',
    'community.buttonsStickers': 'Botones y Calcomanías',
    'community.yardSign': 'Ordenar un Letrero de Jardín',
    'community.stayInformed': 'Mantente Informado',
    'community.weeklyUpdates': 'Recibe actualizaciones semanales sobre el progreso de la campaña, posiciones políticas y próximos eventos en tu bandeja de entrada.',
    'community.enterEmail': 'Ingresa tu correo electrónico',
    'community.subscribe': 'Suscribirse',
    'community.privacyNote': 'Respetamos tu privacidad. Cancela la suscripción en cualquier momento.',
    'community.bePartMovement': 'Sé Parte del Movimiento',
    'community.realChange': 'El cambio real ocurre cuando las comunidades se organizan juntas. Únete a miles de residentes de Illinois luchando por políticas progresivas.',
    'community.volunteerToday': 'Voluntario Hoy',
    'community.contactUs': 'Contáctanos',
    
    // Campaign Page  
    'campaign.howCanHelp': '¿Cómo Puedes Ayudar?',
    'campaign.joinMovement': 'Únete a nuestro movimiento para traer un cambio real a Illinois. Cada contribución, cada hora de voluntariado y cada voz importa en nuestra lucha por la justicia y la igualdad.',
    'campaign.buildFuture': 'Juntos, podemos construir un futuro mejor para todos los habitantes de Illinois.',
    'campaign.volunteering': 'Voluntariado',
    'campaign.beChange': 'Sé el cambio que quieres ver. Únete a nuestro equipo dedicado de voluntarios trabajando para transformar las comunidades de Illinois.',
    'campaign.donations': 'Donaciones',
    'campaign.financialSupport': 'Tu apoyo financiero nos ayuda a llegar a más votantes, organizar más eventos y amplificar nuestro mensaje en todo Illinois.',
    'campaign.press': 'Prensa',
    
    // Volunteer Page
    'volunteer.joinTeam': 'Únete a Nuestro Equipo',
    'volunteer.makeChange': '¿Listo para hacer una diferencia real en Illinois? Únete a nuestro movimiento de base y ayuda a construir un futuro más justo y equitativo para todos.',
    'volunteer.getInvolved': 'Involúcrate',
    'volunteer.volunteerInterests': 'Intereses de Voluntariado',
    'volunteer.firstName': 'Nombre',
    'volunteer.lastName': 'Apellido',
    'volunteer.email': 'Correo Electrónico',
    'volunteer.phone': 'Número de Teléfono',
    'volunteer.zipCode': 'Código Postal',
    'volunteer.submit': 'Enviar',
    
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