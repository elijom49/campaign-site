import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Leaf, Equal, ArrowRight, Star } from "lucide-react";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Presidential Quality Design */}
      <div className="relative overflow-hidden bg-white">
        {/* Subtle geometric patterns */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 bg-gray-100 rounded-full opacity-30"></div>
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-gray-50 rounded-full opacity-40"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-gray-400 rounded-full"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-gray-300 rounded-full"></div>
          <div className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-40">
          {/* Hero Section - Flex layout with text and image side by side */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-20">
            {/* Text Content */}
            <div className="flex-1 lg:max-w-2xl space-y-12">
              {/* Main Headline */}
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-tight text-gray-900">
                  Your Future
                  <br />
                  <span className="font-black text-blue-600">U.S. Senator</span>
                  <br />
                  <span className="font-light">Lives Among</span>
                  <br />
                  <span className="font-black text-gray-800">the People</span>
                </h1>
              </div>
              
              {/* Subtext */}
              <p className="text-xl md:text-2xl text-gray-600 font-normal leading-relaxed">
                It's not Red vs. Blue, it's oligarchs vs. you.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/volunteer" className="group">
                  <Button className="border-2 border-black text-black hover:bg-black hover:text-white px-12 py-4 text-lg font-semibold rounded-none w-full sm:w-auto transform hover:scale-105 transition-all duration-300 bg-transparent">
                    <span>Get Involved</span>
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
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
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </a>
              </div>
            </div>
            
            {/* Candidate Image - Right side, shrink-0 to maintain size */}
            <div className="flex-shrink-0 lg:w-96">
              <div className="relative group">
                <img 
                  src={candidatePhoto} 
                  alt="Jump - Candidate for U.S. Senate" 
                  className="rounded-none shadow-professional w-full h-auto hover:shadow-elegant transition-all duration-700" 
                />
                <div className="absolute -bottom-6 -right-6 bg-white px-6 py-3 shadow-elegant">
                  <span className="text-black font-bold text-lg tracking-wider">2025</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quote Section - Below the hero section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 p-8 shadow-elegant border-l-4 border-black">
              {/* Quote Mark */}
              <div className="text-4xl text-gray-400 font-serif leading-none mb-4">
                "
              </div>
              
              {/* Quote Content */}
              <blockquote className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed mb-4">
                I'm running for U.S. Senate because I believe the government should promote equality for everyone.
              </blockquote>
              
              {/* Attribution */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-0.5 bg-black"></div>
                <span className="text-sm text-gray-600 font-medium tracking-wider uppercase">Jump for Senate</span>
              </div>
            </div>
          </div>
        </div>
      </div>



      {/* Fighting for Our Future - Professional Layout */}
      <div className="relative py-32 bg-white">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-8">
              <span className="font-black">Fighting</span> for Our Future
            </h2>
            <div className="w-32 h-0.5 bg-black mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 font-normal max-w-4xl mx-auto leading-relaxed">
              Our campaign is built on the foundation of economic justice, environmental responsibility, and equality for all.
            </p>
          </div>

          {/* Professional Policy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Card 1 - Housing */}
            <div className="group">
              <Card className="border-2 border-gray-200 hover:border-black transition-all duration-300 p-8 h-full bg-white shadow-subtle hover:shadow-professional">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-none flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                    <Home className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Lowering Cost of Living</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  Making housing, healthcare, and education affordable for every family through bold policy action.
                </p>
                <div className="mt-8 flex items-center text-gray-900 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </Card>
            </div>
            
            {/* Card 2 - Environment */}
            <div className="group">
              <Card className="border-2 border-gray-200 hover:border-black transition-all duration-300 p-8 h-full bg-white shadow-subtle hover:shadow-professional">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-none flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                    <Leaf className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Environmental Policy</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  Protecting our planet while creating good-paying green jobs for the next generation.
                </p>
                <div className="mt-8 flex items-center text-gray-900 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </Card>
            </div>
            
            {/* Card 3 - Equality */}
            <div className="group">
              <Card className="border-2 border-gray-200 hover:border-black transition-all duration-300 p-8 h-full bg-white shadow-subtle hover:shadow-professional">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gray-100 rounded-none flex items-center justify-center mb-6 group-hover:bg-black transition-colors duration-300">
                    <Equal className="w-8 h-8 text-gray-700 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Elimination of The Pink Tax</h3>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                  Ending gender-based pricing discrimination once and for all through federal legislation.
                </p>
                <div className="mt-8 flex items-center text-gray-900 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link href="/campaign" className="group inline-block">
              <Button className="bg-black hover:bg-gray-800 text-white px-16 py-4 text-xl font-semibold rounded-none shadow-elegant transform hover:scale-105 transition-all duration-300">
                <span>The Issues</span>
                <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Red vs Blue Section - Powerful Statement */}
      <div className="relative py-40 bg-black">
        {/* Minimal accent elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-10 w-0.5 h-40 bg-white opacity-20"></div>
          <div className="absolute top-1/2 right-10 w-0.5 h-40 bg-white opacity-20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-white mb-12 leading-[0.9]">
            It's not Red vs. Blue,
            <br />
            it's <span className="font-black">oligarchs vs. you</span>.
          </h2>
          
          <div className="w-32 h-0.5 bg-white mx-auto mb-12"></div>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-normal leading-relaxed">
            This election is about standing up to the wealthy elite who have rigged the system against working families.
            <span className="text-white font-semibold"> The time for change is now.</span>
          </p>
        </div>
      </div>

      {/* Join the Revolution - Final CTA */}
      <div className="relative py-40 bg-white">
        {/* Subtle background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gray-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-gray-50 rounded-full opacity-60"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-12">
            Join the <span className="font-black">Movement</span>
          </h2>
          
          <div className="w-32 h-0.5 bg-black mx-auto mb-12"></div>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-16 max-w-4xl mx-auto font-normal leading-relaxed">
            Together, we can build a future where every person has the opportunity to thrive.
            <span className="text-gray-900 font-semibold"> Your voice matters. Your vote counts.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://secure.actblue.com/donate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button className="bg-black hover:bg-gray-800 text-white px-16 py-6 text-xl font-semibold rounded-none shadow-elegant transform hover:scale-105 transition-all duration-300">
                <span>Donate Today</span>
                <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
            <Link href="/volunteer" className="group">
              <Button className="border-2 border-black text-black hover:bg-black hover:text-white px-16 py-6 text-xl font-semibold rounded-none transform hover:scale-105 transition-all duration-300 bg-transparent">
                <span>Get Involved</span>
                <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Professional footer note */}
          <div className="mt-16 text-gray-500 text-lg font-normal">
            <p>Join thousands of supporters across Illinois</p>
          </div>
        </div>
      </div>
    </div>
  );
}
