import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Leaf, Equal, ArrowRight, Star } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Ultra Modern Design */}
      <div className="relative overflow-hidden bg-white">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 gradient-primary rounded-full opacity-20 animate-pulse-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 gradient-secondary rounded-full opacity-20 animate-float"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-campaign-yellow opacity-10 rounded-full animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Main Headline - Bold and Impactful */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-none tracking-tight">
                  <span className="text-gray-900">Your Future</span>
                  <br />
                  <span className="text-gradient-primary">U.S. Senator</span>
                  <br />
                  <span className="text-gray-900">Lives Among</span>
                  <br />
                  <span className="text-gradient-secondary">the People</span>
                </h1>
              </div>
              
              {/* Subtext */}
              <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed max-w-lg">
                Fighting for working families in Chicago and across Illinois. 
                <span className="text-gradient-primary font-bold"> Real change starts now.</span>
              </p>

              {/* Jump Logo - More Modern */}
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <div className="w-40 h-20 gradient-primary rounded-2xl flex items-center justify-center shadow-glow transform hover:scale-105 transition-all duration-300">
                    <span className="text-white font-black text-2xl tracking-wider">JUMP</span>
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-campaign-yellow rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Action Buttons - Modern Design */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://secure.actblue.com/donate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group"
                >
                  <Button className="gradient-secondary hover:shadow-glow-red text-white px-10 py-6 text-xl font-black rounded-2xl w-full sm:w-auto transform hover:scale-105 transition-all duration-300 group">
                    <span>Donate Now</span>
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
                <Link href="/volunteer" className="group">
                  <Button className="gradient-primary hover:shadow-glow text-white px-10 py-6 text-xl font-black rounded-2xl w-full sm:w-auto transform hover:scale-105 transition-all duration-300">
                    <span>Join Our Team</span>
                    <Star className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Candidate Image - Enhanced with Effects */}
            <div className="relative">
              <div className="absolute inset-0 gradient-primary rounded-3xl opacity-20 transform rotate-3 scale-105"></div>
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
                  alt="Jump - Candidate for U.S. Senate" 
                  className="rounded-3xl shadow-2xl w-full h-auto filter brightness-110 contrast-110" 
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-accent rounded-full flex items-center justify-center animate-float">
                  <span className="text-white font-black text-lg">2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quote Section - Dynamic Speech Bubble */}
      <div className="relative py-24 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-campaign-blue opacity-10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-campaign-purple opacity-10 rounded-full animate-pulse-slow"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative inline-block max-w-3xl">
            {/* Modern Speech Bubble */}
            <div className="relative bg-white rounded-3xl p-12 shadow-2xl transform hover:scale-105 transition-all duration-500">
              {/* Speech Bubble Tail */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white rotate-45 shadow-lg"></div>
              
              {/* Quote Content */}
              <div className="space-y-6">
                <div className="text-6xl text-gradient-primary font-black leading-none">
                  "
                </div>
                <blockquote className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                  I'm running for
                  <span className="text-gradient-primary"> U.S. Senate</span>
                </blockquote>
                <p className="text-xl md:text-2xl text-gray-600 font-medium leading-relaxed">
                  Because working families deserve a voice in Washington that truly represents their interests.
                </p>
                <div className="flex justify-center">
                  <div className="w-16 h-1 gradient-secondary rounded-full"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 gradient-accent rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-16 h-16 gradient-primary rounded-full opacity-40 animate-float"></div>
          </div>
        </div>
      </div>

      {/* Fighting for Our Future Preview - Modern Card Layout */}
      <div className="relative py-24 bg-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-campaign-blue via-campaign-purple to-campaign-red"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              <span className="text-gradient-primary">Fighting</span> for Our 
              <span className="text-gradient-secondary"> Future</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-4xl mx-auto leading-relaxed">
              Our campaign is built on the foundation of 
              <span className="text-gradient-primary font-bold"> economic justice</span>, 
              <span className="text-gradient-accent font-bold"> environmental responsibility</span>, and 
              <span className="text-gradient-secondary font-bold"> equality for all</span>.
            </p>
          </div>

          {/* Modern Policy Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1 - Housing */}
            <div className="group cursor-pointer">
              <Card className="relative overflow-hidden border-0 shadow-2xl transform group-hover:scale-105 transition-all duration-500 h-full">
                <div className="absolute inset-0 gradient-primary opacity-90"></div>
                <div className="relative z-10 p-8 text-white h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-4">
                      <Home className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-4">Lowering Cost of Living</h3>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed flex-grow">
                    Making housing, healthcare, and education affordable for every family through bold policy action.
                  </p>
                  <div className="mt-6 flex items-center text-white font-bold group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Card 2 - Environment */}
            <div className="group cursor-pointer">
              <Card className="relative overflow-hidden border-0 shadow-2xl transform group-hover:scale-105 transition-all duration-500 h-full">
                <div className="absolute inset-0 gradient-accent opacity-90"></div>
                <div className="relative z-10 p-8 text-white h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-4">
                      <Leaf className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-4">Environmental Policy</h3>
                  </div>
                  <p className="text-green-100 text-lg leading-relaxed flex-grow">
                    Protecting our planet while creating good-paying green jobs for the next generation.
                  </p>
                  <div className="mt-6 flex items-center text-white font-bold group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Card 3 - Equality */}
            <div className="group cursor-pointer">
              <Card className="relative overflow-hidden border-0 shadow-2xl transform group-hover:scale-105 transition-all duration-500 h-full">
                <div className="absolute inset-0 gradient-secondary opacity-90"></div>
                <div className="relative z-10 p-8 text-white h-full flex flex-col">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-4">
                      <Equal className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-black mb-4">Elimination of The Pink Tax</h3>
                  </div>
                  <p className="text-red-100 text-lg leading-relaxed flex-grow">
                    Ending gender-based pricing discrimination once and for all through federal legislation.
                  </p>
                  <div className="mt-6 flex items-center text-white font-bold group-hover:translate-x-2 transition-transform">
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Link href="/campaign" className="group inline-block">
              <Button className="gradient-primary hover:shadow-glow text-white px-12 py-6 text-2xl font-black rounded-2xl transform hover:scale-105 transition-all duration-300">
                <span>The Issues</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Red vs Blue Section - Bold Statement */}
      <div className="relative py-24 overflow-hidden">
        {/* Dynamic Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 animate-pulse-slow"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-red-500 opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-blue-500 opacity-20 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-purple-500 opacity-20 rounded-full animate-float"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
            It's not 
            <span className="text-red-400"> Red</span> vs. 
            <span className="text-blue-400"> Blue</span>,
            <br />
            it's <span className="text-gradient-secondary">oligarchs</span> vs. 
            <span className="text-gradient-primary"> you</span>.
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
            This election is about standing up to the wealthy elite who have rigged the system against working families. 
            <span className="text-white font-bold"> The time for change is now.</span>
          </p>
          
          {/* Emphasis Bars */}
          <div className="flex justify-center space-x-4 mt-8">
            <div className="w-20 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <div className="w-20 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-20 h-2 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>

      {/* Join the Revolution - Final CTA */}
      <div className="relative py-24 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 gradient-primary"></div>
        <div className="absolute inset-0 bg-black opacity-10"></div>
        
        {/* Animated Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white opacity-20 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse-slow"></div>
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-white opacity-15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8">
            Join the <span className="text-yellow-300">Revolution</span>
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Together, we can build a future where every person has the opportunity to thrive. 
            <span className="text-white font-bold"> Your voice matters. Your vote counts.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href="https://secure.actblue.com/donate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <Button className="bg-white text-blue-600 hover:bg-yellow-300 hover:text-blue-800 px-12 py-6 text-xl font-black rounded-2xl shadow-2xl transform hover:scale-105 transition-all duration-300">
                <span>Donate Today</span>
                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform" />
              </Button>
            </a>
            <Link href="/volunteer" className="group">
              <Button className="border-4 border-white text-white hover:bg-white hover:text-blue-600 px-12 py-6 text-xl font-black rounded-2xl transform hover:scale-105 transition-all duration-300 bg-transparent">
                <span>Get Involved</span>
                <Star className="ml-3 w-6 h-6 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
          </div>
          
          {/* Social Proof */}
          <div className="mt-12 text-blue-100 text-lg font-medium">
            <p>Join thousands of supporters fighting for change</p>
          </div>
        </div>
      </div>
    </div>
  );
}
