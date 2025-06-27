import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Heart, Zap } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div className="bg-white">
      {/* Advanced Hero Section */}
      <section className="hero-section-advanced min-h-screen flex items-center">
        <div className="content-grid-advanced relative z-10">
          <div className="col-span-12 lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-[0.9]">
                Your Future
                <br />
                <span className="text-blue-600">U.S. Senator</span>
                <br />
                Lives Among
                <br />
                <span className="text-gray-700">the People</span>
              </h1>
              <p className="text-body-large text-gray-600 max-w-lg">
                It's not <span className="text-red-600 font-bold">Red</span> vs. <span className="text-blue-600 font-bold">Blue</span>, it's oligarchs vs. you.
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
          
          <div className="col-span-12 lg:col-span-5">
            <div className="relative">
              <img 
                src={candidatePhoto} 
                alt="Jump - Candidate for U.S. Senate" 
                className="w-full h-auto rounded-2xl shadow-2xl" 
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <blockquote className="text-base font-medium text-gray-900 italic">
                  "I'm running for U.S. Senate because I believe the government should promote equality for everyone."
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
      <section className="section-spacing-loose bg-gray-50">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-headline text-4xl lg:text-5xl text-gray-900 mb-6">
              {t('home.fightingTitle')}
            </h2>
            <p className="text-body-large text-gray-600 max-w-2xl mx-auto">
              Real solutions for working families, not corporate interests.
            </p>
          </div>
          
          <div className="col-span-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="policy-card-advanced interactive-element">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold">Lowering Cost of Living</h3>
              </div>
              <p className="text-gray-600 mb-4">Taking back single family homes from corporate ownership...</p>
              <Link href="/campaign" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="policy-card-advanced interactive-element">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold">Environmental Policy</h3>
              </div>
              <p className="text-gray-600 mb-4">Championing environmental policy and supporting farmers...</p>
              <Link href="/campaign" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
            
            <div className="policy-card-advanced interactive-element">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold">Elimination of The Pink Tax</h3>
              </div>
              <p className="text-gray-600 mb-4">Making women's essential products tax-deductible...</p>
              <Link href="/campaign" className="text-blue-600 font-medium inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
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
              Ready to Join the Movement?
            </h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              Your voice matters. Together, we can build a future that works for everyone, not just the wealthy few.
            </p>
            <div className="cta-buttons">
              <Link href="/volunteer">
                <span className="btn-primary-large">Get Involved Today</span>
              </Link>
              <a href="https://secure.actblue.com/donate/jumpforsenate" target="_blank" rel="noopener noreferrer">
                <span className="btn-secondary-large">Support Our Campaign</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}