import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Heart, Target, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2354_1751141579485.jpg";
import victorianHouses from "@assets/houses-890351_1280_1751145143497.jpg";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white">
      {/* Hero Section with Black Background */}
      <section 
        className="relative min-h-screen bg-black"
      >
        
        {/* Content */}
        <div className="relative content-grid-advanced min-h-screen">
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-center py-20">
            <div className="space-y-6">
              <h1 className="text-display text-4xl lg:text-6xl text-white leading-tight">
                {t('about.meetJump')}
              </h1>
              
              {/* Bio Space */}
              <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800 max-w-3xl">
                <p className="text-lg text-gray-300 leading-relaxed">
                  {t('about.bioText')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/campaign">
                  <span className="inline-block bg-yellow-500 text-black px-6 py-3 text-lg font-bold hover:bg-yellow-400 transition-colors">{t('about.viewPlatform')}</span>
                </Link>
                <Link href="/volunteer">
                  <span className="inline-block border-2 border-white text-white px-6 py-3 text-lg font-bold hover:bg-white hover:text-black transition-colors">{t('about.getInvolved')}</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-4 flex items-center justify-center py-20">
            <div className="max-w-md">
              <img 
                src={candidatePhoto} 
                alt="Jump - Candidate for U.S. Senate" 
                className="w-full rounded-lg" 
                style={{
                  filter: 'sepia(100%) saturate(200%) hue-rotate(200deg) brightness(0.9)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Policy Focus Section - Black Background */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-display text-4xl font-bold text-white text-center mb-12">
            {t('about.myPolicies')}
          </h2>
          
          {/* Policy Grid and Video Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* Policy Blocks - Left Side */}
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <Link href="/policies">
                  <div className="text-blue-600 text-lg font-bold mb-2 cursor-pointer hover:text-blue-800">→</div>
                </Link>
                <h3 className="text-base font-bold text-black">{t('about.economicJustice')}</h3>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <Link href="/policies">
                  <div className="text-blue-600 text-lg font-bold mb-2 cursor-pointer hover:text-blue-800">→</div>
                </Link>
                <h3 className="text-base font-bold text-black">{t('about.healthcareAccess')}</h3>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <Link href="/policies">
                  <div className="text-blue-600 text-lg font-bold mb-2 cursor-pointer hover:text-blue-800">→</div>
                </Link>
                <h3 className="text-base font-bold text-black">{t('about.workingClassFamilies')}</h3>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <Link href="/policies">
                  <div className="text-blue-600 text-lg font-bold mb-2 cursor-pointer hover:text-blue-800">→</div>
                </Link>
                <h3 className="text-base font-bold text-black">{t('about.climateAction')}</h3>
              </div>

              <div className="bg-white p-4 rounded-lg">
                <Link href="/policies">
                  <div className="text-blue-600 text-lg font-bold mb-2 cursor-pointer hover:text-blue-800">→</div>
                </Link>
                <h3 className="text-base font-bold text-black">Education</h3>
              </div>
            </div>
            
            {/* Campaign Video - Right Side */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <iframe
                  className="w-full h-80 rounded-2xl"
                  src="https://www.youtube.com/embed/lcbYrTEnyOM"
                  title="Jump for Senate Campaign Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="cta-section-advanced">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h2 className="text-display text-4xl lg:text-5xl mb-6">
              Ready to Fight Together?
            </h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              This campaign is about building a movement for change. Join thousands of Illinois residents who are ready to fight for a better future.
            </p>
            <div className="cta-buttons">
              <Link href="/volunteer">
                <span className="btn-primary-large">Join the Movement</span>
              </Link>
              <a href="https://secure.actblue.com/donate/jumpforsenate" target="_blank" rel="noopener noreferrer">
                <span className="btn-secondary-large">Support the Campaign</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}