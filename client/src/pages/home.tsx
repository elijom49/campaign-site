import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Leaf, Equal, ArrowRight, Star } from "lucide-react";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import jumpLogo from "@assets/Jump For Senate White Chicago Trans _1751061793394.png";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Presidential Quality Design */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-yellow-50">
        {/* Beautiful decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-blue-200 to-yellow-200 rounded-full opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gradient-to-tr from-yellow-200 to-blue-200 rounded-full opacity-20"></div>
          
          {/* Elegant border frames */}
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-blue-300 rounded-lg opacity-30"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-yellow-300 rounded-lg opacity-30"></div>
          <div className="absolute top-1/2 right-32 w-16 h-16 border-2 border-blue-400 rounded-full opacity-40"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section - Flex layout with text and image side by side */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-12">
            {/* Text Content */}
            <div className="flex-1 lg:max-w-2xl space-y-8">
              {/* Main Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-tight text-gray-900">
                  Your Future
                  <br />
                  <span className="font-black text-blue-600">U.S. Senator</span>
                  <br />
                  <span className="font-light">Lives Among</span>
                  <br />
                  <span className="font-black text-gray-800">the People</span>
                </h1>
                
                {/* Tagline under headline */}
                <p className="text-lg md:text-xl text-gray-600 font-normal leading-relaxed mt-4">
                  It's not <span className="text-red-600 font-semibold">Red</span> vs. <span className="text-blue-600 font-semibold">Blue</span>, it's oligarchs vs. you.
                </p>
              </div>
              
              {/* Logo with frame */}
              <div className="py-4">
                <div className="inline-block p-4 bg-white rounded-lg shadow-lg border-2 border-blue-200">
                  <img 
                    src={jumpLogo} 
                    alt="Jump for Senate Logo" 
                    className="h-16 w-auto"
                  />
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/volunteer" className="group">
                  <Button className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-4 text-lg font-semibold rounded-none w-full sm:w-auto transform hover:scale-105 transition-all duration-300 bg-transparent">
                    <span>Get Involved</span>
                  </Button>
                </Link>
                <a 
                  href="https://secure.actblue.com/donate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button className="bg-black hover:bg-gray-800 text-white px-12 py-4 text-lg font-semibold rounded-none w-full sm:w-auto transform hover:scale-105 transition-all duration-300 shadow-elegant">
                    <span>Donate</span>
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
                  "I'm running for U.S. Senate because I believe the government should promote equality for everyone."
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-blue-600 mb-8 px-12 py-6 bg-white rounded-xl shadow-2xl border-4 border-yellow-400 relative z-10">
                Fighting for Our Future
              </h2>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-yellow-500 rounded-xl transform rotate-1 -z-10"></div>
            </div>
          </div>

          {/* Beautiful 3D Policy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 - Housing */}
            <Link href="/campaign" className="group">
              <Card className="card-elevated p-8 h-full cursor-pointer rounded-lg overflow-hidden">
                <div className="mb-6">
                  <div className="w-20 h-20 frame-blue-3d rounded-lg flex items-center justify-center mb-6 transition-all duration-300">
                    <Home className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Lowering Cost of Living</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  Making housing, healthcare, and education affordable for every family through bold policy action.
                </p>
                <div className="mt-8 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                </div>
              </Card>
            </Link>
            
            {/* Card 2 - Environment */}
            <Link href="/campaign" className="group">
              <Card className="card-elevated p-8 h-full cursor-pointer rounded-lg overflow-hidden">
                <div className="mb-6">
                  <div className="w-20 h-20 frame-yellow-3d rounded-lg flex items-center justify-center mb-6 transition-all duration-300">
                    <Leaf className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Policy</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  Protecting our planet while creating good-paying green jobs for the next generation.
                </p>
                <div className="mt-8 flex items-center text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                </div>
              </Card>
            </Link>
            
            {/* Card 3 - Equality */}
            <Link href="/campaign" className="group">
              <Card className="card-elevated p-8 h-full cursor-pointer rounded-lg overflow-hidden">
                <div className="mb-6">
                  <div className="w-20 h-20 frame-blue-3d rounded-lg flex items-center justify-center mb-6 transition-all duration-300">
                    <Equal className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Elimination of The Pink Tax</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  Ending gender-based pricing discrimination once and for all through federal legislation.
                </p>
                <div className="mt-8 flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
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
      <div className="relative py-16 bg-gradient-to-br from-blue-50 to-yellow-50">        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="accent-bar-yellow bg-white p-8 rounded-xl shadow-2xl border-2 border-yellow-300 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-blue-600 mb-6">
              Join the Movement
            </h2>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-normal leading-relaxed pl-4">
              Together, we can build a future where every person has the opportunity to thrive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a 
                href="https://secure.actblue.com/donate" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                <Button className="frame-blue-3d text-white px-16 py-6 text-xl font-semibold rounded-lg transform hover:scale-105 transition-all duration-300">
                  <span>Donate Today</span>
                </Button>
              </a>
              <Link href="/volunteer" className="group">
                <Button className="frame-yellow-3d text-white px-16 py-6 text-xl font-semibold rounded-lg transform hover:scale-105 transition-all duration-300">
                  <span>Get Involved</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
