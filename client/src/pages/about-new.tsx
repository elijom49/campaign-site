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
      <div 
        className="relative h-96 flex items-center"
        style={{backgroundColor: '#E47B5A'}}
      >
        <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-left">
            <h1 className="text-6xl lg:text-7xl font-bold text-yellow-400 mb-6 tracking-tight">
              ABOUT<br />JUMP
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Born and raised in Chicago, Jump Shepherd understands the challenges facing working families in Illinois. As your next U.S. Senator, he's committed to fighting for economic justice, environmental protection, and equality for all.
            </p>
          </div>
          
          {/* Right: Circular Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src={candidatePhoto} 
                alt="Jump Shepherd - About" 
                className="w-80 h-80 object-cover rounded-full shadow-2xl"
                style={{
                  objectPosition: 'center 20%'
                }}
              />
            </div>
          </div>
        </div>
      </div>

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