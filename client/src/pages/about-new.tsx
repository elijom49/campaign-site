import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Heart, Target, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="section-spacing-loose">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-white leading-[0.9]">
                {t('about.meetJump')}
              </h1>
              
              {/* Bio Space */}
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800">
                <p className="text-body-large text-gray-300 leading-relaxed">
                  XXXXXXXXXXXX
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/campaign">
                  <span className="btn-primary-large">View Platform</span>
                </Link>
                <Link href="/volunteer">
                  <span className="btn-secondary-large">Get Involved</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Picture Box */}
              <div className="relative">
                <img 
                  src={candidatePhoto} 
                  alt="Jump - Candidate for U.S. Senate" 
                  className="w-full h-80 object-cover object-center rounded-2xl shadow-2xl" 
                  style={{objectPosition: 'center 20%'}}
                />
              </div>
              
              {/* Video Box */}
              <div className="relative">
                <iframe
                  className="w-full h-80 rounded-2xl shadow-2xl"
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
      </section>

      {/* Policy Focus Section - ACLU-Inspired Design */}
      <div className="aclu-blue-section">
        <div className="aclu-geometric-accent top-left"></div>
        <div className="aclu-geometric-accent bottom-right"></div>
        <h2 className="aclu-section-title">
          What We're Focused On
        </h2>
        
        <div className="aclu-content-grid">
          <div className="aclu-card">
            <div className="aclu-card-arrow">→</div>
            <h3>Economic Justice</h3>
          </div>

          <div className="aclu-card">
            <div className="aclu-card-arrow">→</div>
            <h3>Healthcare Access</h3>
          </div>

          <div className="aclu-card">
            <div className="aclu-card-arrow">→</div>
            <h3>Education Investment</h3>
          </div>

          <div className="aclu-card">
            <div className="aclu-card-arrow">→</div>
            <h3>Climate Action</h3>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <section className="cta-section-advanced">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h2 className="text-headline text-4xl lg:text-5xl mb-6">
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