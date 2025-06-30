import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import chicagoSkyline from "@assets/chicago-river-5249198_1280_1751144895089.jpg";
import victorianHouses from "@assets/houses-890351_1280_1751145143497.jpg";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Advanced Hero Section */}
      <section className="hero-section-advanced min-h-screen flex items-center">
        <div className="content-grid-advanced relative z-10">
          <div className="col-span-12 lg:col-span-7 space-y-8 lg:ml-24">
            <div className="space-y-6">
              <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[0.9] mt-12">
                {t('home.title')}
              </h1>
              <p className="text-body-large text-gray-600 max-w-lg">
                {t('home.tagline')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/volunteer">
                <span className="btn-primary-large">{t('home.getInvolved')}</span>
              </Link>
              <a href="https://secure.actblue.com/donate/jumpforsenate" target="_blank" rel="noopener noreferrer">
                <span className="btn-secondary-large" style={{color: '#000', borderColor: '#000'}}>{t('home.donate')}</span>
              </a>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-5 lg:-ml-24">
            <div className="relative">
              <img 
                src={candidatePhoto} 
                alt="Jump - Candidate for U.S. Senate" 
                className="w-4/5 h-auto rounded-2xl shadow-2xl mx-auto" 
              />
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-xs border-l-4 border-yellow-400">
                <blockquote className="text-sm font-medium italic">
                  "{t('home.quote')}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="content-grid-advanced">
          <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="stat-item">
                <div className="stat-number">12.7M</div>
                <div className="stat-label">Illinois Residents</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2026</div>
                <div className="stat-label">Election Year</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Voice for Change</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Platform Section */}
      <section 
        className="section-spacing-loose relative"
        style={{
          backgroundImage: `url(${chicagoSkyline})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Blue filter overlay */}
        <div className="absolute inset-0 bg-blue-600 bg-opacity-70"></div>
        
        <div className="content-grid-advanced relative z-10">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-headline text-4xl lg:text-5xl text-white mb-6">
              {t('home.fightingTitle')}
            </h2>
            <p className="text-body-large text-white max-w-2xl mx-auto">
              {t('home.joinDesc')}
            </p>
          </div>
          
          <div className="col-span-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">{t('home.costOfLiving')}</h3>
              </div>
              <p className="text-gray-600 mb-4">{t('home.costOfLivingDesc')}</p>
              <Link href="/policies" className="text-blue-600 font-medium inline-flex items-center">
                {t('home.learnMore')} <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">{t('home.environment')}</h3>
              </div>
              <p className="text-gray-600 mb-4">{t('home.environmentDesc')}</p>
              <Link href="/policies" className="text-blue-600 font-medium inline-flex items-center">
                {t('home.learnMore')} <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">{t('home.pinkTax')}</h3>
              </div>
              <p className="text-gray-600 mb-4">{t('home.pinkTaxDesc')}</p>
              <Link href="/policies" className="text-blue-600 font-medium inline-flex items-center">
                {t('home.learnMore')} <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>





      {/* Call to Action Section */}
      <section className="cta-section-advanced">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h2 className="text-headline text-4xl lg:text-5xl mb-6">
              {t('home.joinMovement')}
            </h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              {t('home.joinDesc')}
            </p>
            <div className="cta-buttons">
              <Link href="/volunteer">
                <span className="btn-primary-large">{t('home.getInvolved')}</span>
              </Link>
              <a href="https://secure.actblue.com/donate/jumpforsenate" target="_blank" rel="noopener noreferrer">
                <span className="btn-secondary-large">{t('home.donateToday')}</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}