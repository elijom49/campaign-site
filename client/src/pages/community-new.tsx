import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Leaf, Equal, ArrowRight, Star } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import jumpLogo from "@assets/Jump For Senate White Chicago Trans _1751061793394.png";

export default function HomePage() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Presidential Quality Design */}
      <div className="relative overflow-hidden bg-white">
        {/* Clean decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Elegant border frames */}
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-blue-500 opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-yellow-500 opacity-30"></div>
          <div className="absolute top-1/2 right-32 w-16 h-16 border-2 border-blue-500 opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section - Flex layout with text and image side by side */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
            {/* Text Content */}
            <div className="flex-1 lg:max-w-2xl space-y-8">
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-tight text-gray-900">
                  {t('home.title').split(' ').slice(0, 2).join(' ')}
                  <br />
                  <span className="font-black text-blue-600">{t('home.title').split(' ').slice(2, 4).join(' ')}</span>
                  <br />
                  <span className="font-light">{t('home.title').split(' ').slice(4, 6).join(' ')}</span>
                  <br />
                  <span className="font-black text-gray-800">{t('home.title').split(' ').slice(6).join(' ')}</span>
                </h1>
                
                {/* Tagline under headline */}
                <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed mt-4">
                  {t('home.tagline').split(' ').slice(0, 3).join(' ')} <span className="text-red-600 font-semibold">{t('home.tagline').split(' ')[3]}</span> {t('home.tagline').split(' ').slice(4, 6).join(' ')} <span className="text-blue-600 font-semibold">{t('home.tagline').split(' ')[6].replace(',', '')}</span>{t('home.tagline').split(' ').slice(7).join(' ')}.
                </p>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/volunteer" className="group">
                  <Button className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-4 text-lg font-semibold rounded-none w-full sm:w-auto transform hover:scale-105 transition-all duration-300 bg-transparent">
                    <span>{t('home.getInvolved')}</span>
                  </Button>
                </Link>
                <a 
                  href="https://secure.actblue.com/donate/jumpforsenate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-lg font-semibold rounded-none w-full sm:w-auto transform hover:scale-105 transition-all duration-300 shadow-elegant">
                    <span>{t('home.donate')}</span>
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Candidate Image - Right side, shrink-0 to maintain size */}
            <div className="flex-shrink-0 lg:w-96 space-y-4">
              <div className="relative group">
                <img 
                  src={candidatePhoto} 
                  alt="Jump - Candidate for U.S. Senate" 
                  className="rounded-none shadow-professional w-full h-auto hover:shadow-elegant transition-all duration-700" 
                />
              </div>
              
              {/* Quote under image */}
              <div className="accent-bar-blue bg-white p-6 shadow-lg border border-blue-100 rounded-lg">
                <blockquote className="text-sm md:text-base text-gray-700 italic leading-relaxed pl-4">
                  "{t('home.quote')}"
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fighting for Our Future - Professional Layout */}
      <div className="relative py-16 bg-white">        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header with beautiful frame */}
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-600 mb-8 px-12 py-6 bg-white rounded-xl shadow-2xl border-4 border-yellow-500 relative z-10">
                {t('home.fightingTitle')}
              </h2>
              <div className="absolute inset-0 bg-blue-500 rounded-xl transform rotate-1 -z-10"></div>
            </div>
          </div>

          {/* Beautiful 3D Policy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 - Housing */}
            <Link href="/campaign" className="group">
              <Card className="card-elevated p-8 h-full cursor-pointer rounded-lg overflow-hidden text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Lowering Cost of Living</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  Making housing, healthcare, and education affordable for every family through bold policy action.
                </p>
                <div className="mt-8 flex justify-center items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                </div>
              </Card>
            </Link>
            
            {/* Card 2 - Environment */}
            <Link href="/campaign" className="group">
              <Card className="card-elevated p-8 h-full cursor-pointer rounded-lg overflow-hidden text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Policy</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  Protecting our planet while creating good-paying green jobs for the next generation.
                </p>
                <div className="mt-8 flex justify-center items-center text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                </div>
              </Card>
            </Link>
            
            {/* Card 3 - Equality */}
            <Link href="/campaign" className="group">
              <Card className="card-elevated p-8 h-full cursor-pointer rounded-lg overflow-hidden text-center">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Elimination of The Pink Tax</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  Ending gender-based pricing discrimination once and for all through federal legislation.
                </p>
                <div className="mt-8 flex justify-center items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                </div>
              </Card>
            </Link>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link href="/campaign" className="group inline-block">
              <Button className="bg-black hover:bg-gray-800 text-white px-16 py-4 text-xl font-semibold rounded-none shadow-elegant transform hover:scale-105 transition-all duration-300">
                <span>The Issues</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Join the Movement - Final CTA */}
      <div className="relative py-16 bg-blue-50">        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-bar-yellow bg-white p-8 rounded-xl shadow-2xl border-2 border-yellow-500 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-blue-600 mb-6">
              Join the Movement
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-normal leading-relaxed pl-4">
              Together, we can build a future where every person has the opportunity to thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSed0wqiVlDd5wSvYaq3TQ9iW2DsMZgLMko4ctt0SxrIQesMPA/viewform?usp=header" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Button className="frame-blue-3d text-white px-16 py-6 text-xl font-semibold rounded-lg transform hover:scale-105 transition-all duration-300">
                  <span>Sign Up for Updates</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
