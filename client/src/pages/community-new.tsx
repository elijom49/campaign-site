import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Share2, ArrowUpRight, Youtube, ShoppingBag, Shirt, SignpostBig } from "lucide-react";
import { FaTiktok, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/hooks/use-language";
import senatorsCupPoster from "@assets/Sen-Cup-Flyer-Official_1751137281159.png";

export default function CommunityPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <section className="py-16">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-white mb-8">
              Join Our
              <br />
              <span className="text-blue-400">Community</span>
            </h1>
            <p className="text-body-large text-gray-300 max-w-3xl mx-auto">
              Connect with Illinois residents building a grassroots movement for economic justice and progressive change.
            </p>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-spacing-tight bg-gray-900">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-headline text-4xl lg:text-5xl text-white mb-6">
              Follow the Campaign
            </h2>
            <p className="text-body-large text-gray-300">
              Stay connected with daily updates, behind-the-scenes content, and live events
            </p>
          </div>
          
          <div className="col-span-12 grid md:grid-cols-3 gap-8">
            <a 
              href="https://www.tiktok.com/@jumpforsenate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="policy-card-advanced bg-black border-gray-800 interactive-element group"
            >
              <div className="flex items-center mb-4">
                <FaTiktok className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">TikTok</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-white transition-colors" />
              </div>
              <div className="text-blue-400 font-medium">@jumpforsenate</div>
            </a>
            
            <a 
              href="https://www.linkedin.com/in/jumpforsenate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="policy-card-advanced bg-black border-gray-800 interactive-element group"
            >
              <div className="flex items-center mb-4">
                <FaLinkedin className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">LinkedIn</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-white transition-colors" />
              </div>
              <div className="text-blue-400 font-medium">@jumpforsenate</div>
            </a>
            
            <a 
              href="https://www.youtube.com/@jumpforsenate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="policy-card-advanced bg-black border-gray-800 interactive-element group"
            >
              <div className="flex items-center mb-4">
                <Youtube className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">YouTube</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-white transition-colors" />
              </div>
              <div className="text-blue-400 font-medium">@jumpforsenate</div>
            </a>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-spacing-loose bg-black">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h2 className="text-headline text-4xl lg:text-5xl text-white">
                Upcoming Events
              </h2>
              <p className="text-body-large text-gray-300">
                Join us at campaign events across Illinois to meet fellow supporters and learn more about our movement.
              </p>
            </div>
            
            <div className="space-y-6">
              {/* Senator's Cup Event */}
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">The Senator's Cup Madden Tournament Fundraiser</div>
                      <div className="text-gray-400 text-sm">8-Player Online Tournament</div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  $100 entry, $300 prize. Events weekly. Join this skill-based competition supporting the Jump Shepherd for U.S. Senate campaign.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-8">
              {/* Tournament Poster */}
              <div className="bg-black border-4 border-blue-500 rounded-2xl p-4 shadow-2xl drop-shadow-2xl max-w-md mx-auto">
                <img 
                  src={senatorsCupPoster} 
                  alt="The Senator's Cup Madden Tournament Fundraiser" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
              
              {/* Calendar Section */}
              <div className="bg-blue-900/20 border border-blue-800 p-8 rounded-2xl">
                <h3 className="text-headline text-2xl text-white mb-4 text-center">Event Calendar</h3>
                <p className="text-gray-300 mb-6 text-center">
                  Stay updated with all upcoming campaign events and activities.
                </p>
                <div className="text-center">
                  <p className="text-gray-300 mb-4">
                    For the most up-to-date event information, please check our Google Calendar or contact our campaign office.
                  </p>
                  <div className="space-y-3">
                    <a 
                      href="https://calendar.google.com/calendar/embed?src=jump2026%40gmail.com&ctz=America%2FChicago" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                        View Full Calendar
                      </Button>
                    </a>
                    <a href="mailto:blue@jump2026.com">
                      <Button variant="outline" className="w-full border-gray-600 text-gray-300 hover:bg-gray-800">
                        Contact for Events
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merchandise Section */}
      <section className="section-spacing-tight bg-gray-900">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-headline text-4xl lg:text-5xl text-white mb-6">
              Order Merch
            </h2>
            <p className="text-body-large text-gray-300">
              Show your support with official campaign merchandise
            </p>
          </div>
          
          <div className="col-span-12 grid md:grid-cols-3 gap-8">
            {/* T-Shirts */}
            <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl text-center flex flex-col h-full">
              <Shirt className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">T-Shirts</h3>
              <p className="text-gray-300 mb-6 flex-grow">
                High-quality campaign t-shirts in various sizes and colors
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300 w-full mt-auto">
                Shop T-Shirts
              </Button>
            </div>

            {/* Buttons & Stickers */}
            <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl text-center flex flex-col h-full">
              <ShoppingBag className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Buttons & Stickers</h3>
              <p className="text-gray-300 mb-6 flex-grow">
                Campaign buttons and bumper stickers
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300 w-full mt-auto">
                Shop Accessories
              </Button>
            </div>

            {/* Order a Yard Sign */}
            <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl text-center flex flex-col h-full">
              <SignpostBig className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-4">Order a Yard Sign</h3>
              <p className="text-gray-300 mb-6 flex-grow">
                Show your support with an official campaign yard sign
              </p>
              <Button className="bg-yellow-400 text-black hover:bg-yellow-300 w-full mt-auto">
                Order Yard Sign
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-spacing-tight bg-gray-900">
        <div className="content-grid-advanced">
          <div className="col-span-12 mx-auto text-center space-y-8 max-w-4xl">
            <h2 className="text-headline text-4xl lg:text-5xl text-white">
              Stay Informed
            </h2>
            <p className="text-body-large text-gray-300">
              Get weekly updates on campaign progress, policy positions, and upcoming events delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-4 py-3 bg-black border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                  Subscribe
                </Button>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section-advanced">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h2 className="text-headline text-4xl lg:text-5xl mb-6">
              Be Part of the Movement
            </h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              Real change happens when communities organize together. Join thousands of Illinois residents fighting for progressive policies.
            </p>
            <div className="cta-buttons">
              <Link href="/volunteer">
                <span className="btn-primary-large">Volunteer Today</span>
              </Link>
              <a href="mailto:blue@jump2026.com">
                <span className="btn-secondary-large">Contact Us</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}