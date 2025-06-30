import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import heroPhoto from "@assets/Jump Shepherd America_1751141710805.jpg";

export default function PoliciesPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div 
        className="relative h-80 flex items-center"
        style={{
          backgroundImage: `url(${heroPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 10%',
          filter: 'sepia(100%) saturate(200%) hue-rotate(200deg) brightness(0.9)'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6">
          <div className="text-left max-w-2xl">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              {t('policies.myPolicies').toUpperCase()}
            </h1>
            <p className="text-xl lg:text-2xl text-white font-medium">
              {t('policies.championing')}
            </p>
          </div>
        </div>
      </div>

      {/* Policy Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-6">
          {/* First Row: Two policies + photo */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <div className="text-blue-600 text-xl font-bold mb-2">→</div>
                <h3 className="text-xl font-bold text-black mb-3">{t('policies.climateActionTitle')}</h3>
                <p className="text-gray-700">
                  {t('policies.climateActionDesc')}
                </p>
              </div>
              
              <div className="bg-yellow-500 rounded-lg p-6 flex items-center justify-center">
                <h2 className="text-4xl lg:text-5xl font-bold text-black text-center leading-tight tracking-tight">
                  {t('policies.myPolicies').toUpperCase()}
                </h2>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <div className="text-blue-600 text-xl font-bold mb-2">→</div>
                <h3 className="text-xl font-bold text-black mb-3">{t('policies.economicJusticeTitle')}</h3>
                <p className="text-gray-700">
                  {t('policies.economicJusticeDesc')}
                </p>
              </div>
            </div>
          </div>
          
          {/* Second Row: Three policies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-blue-600 text-xl font-bold mb-2">→</div>
              <h3 className="text-xl font-bold text-black mb-3">{t('policies.workingFamiliesTitle')}</h3>
              <p className="text-gray-700">
                {t('policies.workingFamiliesDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <div className="text-blue-600 text-xl font-bold mb-2">→</div>
              <h3 className="text-xl font-bold text-black mb-3">{t('policies.healthcareAccessTitle')}</h3>
              <p className="text-gray-700">
                {t('policies.healthcareAccessDesc')}
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <div className="text-blue-600 text-xl font-bold mb-2">→</div>
              <h3 className="text-xl font-bold text-black mb-3">{t('policies.educationEquityTitle')}</h3>
              <p className="text-gray-700">
                {t('policies.educationEquityDesc')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}