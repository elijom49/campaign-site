import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Heart, Target, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2354_1751141579485.jpg";

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
                  style={{
                    objectPosition: 'center 20%',
                    filter: 'sepia(100%) saturate(200%) hue-rotate(200deg) brightness(0.9)'
                  }}
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

      {/* Policy Focus Section - Yellow Background */}
      <div className="bg-yellow-500 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            What We're Focused On
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Link href="/policies">
                <div className="text-blue-600 text-xl font-bold mb-2 cursor-pointer hover:text-blue-800">→</div>
              </Link>
              <h3 className="text-lg font-bold text-black">Economic Justice</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Link href="/policies">
                <div className="text-blue-600 text-xl font-bold mb-2 cursor-pointer hover:text-blue-800">→</div>
              </Link>
              <h3 className="text-lg font-bold text-black">Healthcare Access</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Link href="/policies">
                <div className="text-blue-600 text-xl font-bold mb-2 cursor-pointer hover:text-blue-800">→</div>
              </Link>
              <h3 className="text-lg font-bold text-black">Working Class Families</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Link href="/policies">
                <div className="text-blue-600 text-xl font-bold mb-2 cursor-pointer hover:text-blue-800">→</div>
              </Link>
              <h3 className="text-lg font-bold text-black">Climate Action</h3>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Link href="/policies">
                <div className="text-blue-600 text-xl font-bold mb-2 cursor-pointer hover:text-blue-800">→</div>
              </Link>
              <h3 className="text-lg font-bold text-black">Education</h3>
            </div>
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