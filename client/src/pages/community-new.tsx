import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Share2, ArrowUpRight, Instagram, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import { useLanguage } from "@/hooks/use-language";

export default function CommunityPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <section className="section-spacing-loose">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-white mb-8">
              Join Our
              <br />
              <span className="text-blue-400">Community</span>
            </h1>
            <p className="text-body-large text-gray-300 max-w-3xl mx-auto">
              Connect with thousands of Illinois residents building a grassroots movement for economic justice and progressive change.
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
                <FaTiktok className="w-8 h-8 text-white mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">TikTok</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-300 mb-4">Short-form videos explaining policy positions and campaign updates</p>
              <div className="text-blue-400 font-medium">@jumpforsenate</div>
            </a>
            
            <a 
              href="https://www.instagram.com/jumpforsenate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="policy-card-advanced bg-black border-gray-800 interactive-element group"
            >
              <div className="flex items-center mb-4">
                <Instagram className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Instagram</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-white transition-colors" />
              </div>
              <p className="text-gray-300 mb-4">Behind-the-scenes content and community organizing highlights</p>
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
              <p className="text-gray-300 mb-4">Long-form policy discussions and town hall meetings</p>
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
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-6 h-6 text-blue-400" />
                    <div>
                      <div className="text-white font-semibold">Town Hall Meeting</div>
                      <div className="text-gray-400 text-sm">Healthcare for All</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">March 15</div>
                    <div className="text-gray-400 text-sm">7:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-300 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Chicago Public Library - Harold Washington</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Join us for a community discussion about universal healthcare and how it will benefit Illinois families.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Users className="w-6 h-6 text-yellow-400" />
                    <div>
                      <div className="text-white font-semibold">Volunteer Training</div>
                      <div className="text-gray-400 text-sm">Phone Banking Workshop</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">March 22</div>
                    <div className="text-gray-400 text-sm">6:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-300 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>Campaign Office - Downtown Chicago</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Learn how to effectively reach out to voters and share Jump's message with your community.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-800">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Share2 className="w-6 h-6 text-green-400" />
                    <div>
                      <div className="text-white font-semibold">Policy Forum</div>
                      <div className="text-gray-400 text-sm">Climate Justice Panel</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">March 29</div>
                    <div className="text-gray-400 text-sm">2:00 PM</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-300 mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>University of Chicago - Harper Center</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Environmental activists and policy experts discuss the Green New Deal and climate action.
                </p>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-8">
              <div className="bg-blue-900/20 border border-blue-800 p-8 rounded-2xl">
                <h3 className="text-headline text-2xl text-white mb-4">Get Involved Locally</h3>
                <p className="text-gray-300 mb-6">
                  Join one of our local organizing committees and help build the movement in your community.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                    <div>
                      <div className="text-white font-medium">North Side Organizers</div>
                      <div className="text-gray-400 text-sm">Lincoln Park, Lakeview, Rogers Park</div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Join</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                    <div>
                      <div className="text-white font-medium">South Side Coalition</div>
                      <div className="text-gray-400 text-sm">Hyde Park, Bronzeville, Bridgeport</div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Join</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                    <div>
                      <div className="text-white font-medium">West Side United</div>
                      <div className="text-gray-400 text-sm">Austin, Garfield Park, Humboldt Park</div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Join</Button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                    <div>
                      <div className="text-white font-medium">Suburban Volunteers</div>
                      <div className="text-gray-400 text-sm">Cook County Suburbs</div>
                    </div>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700">Join</Button>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-900/20 border border-yellow-800 p-8 rounded-2xl">
                <h3 className="text-headline text-2xl text-white mb-4">Fundraising Goals</h3>
                <p className="text-gray-300 mb-6">
                  We're building a people-powered campaign funded by small donations from supporters like you.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-300">Q1 Goal: $50,000</span>
                      <span className="text-yellow-400">68% reached</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-yellow-400 h-2 rounded-full" style={{width: '68%'}}></div>
                    </div>
                  </div>
                  <div className="text-center">
                    <a 
                      href="https://secure.actblue.com/donate/jumpforsenate" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-yellow-600 hover:bg-yellow-700 text-black font-semibold">
                        Contribute Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-spacing-tight bg-gray-900">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-8 mx-auto text-center space-y-8">
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