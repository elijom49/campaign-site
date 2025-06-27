import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Users, Calendar, MapPin, Heart, Target, Share2 } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function VolunteerPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <section className="section-spacing-loose">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-white mb-8">
              Volunteer
              <br />
              <span className="text-yellow-400">for Change</span>
            </h1>
            <p className="text-body-large text-gray-300 max-w-3xl mx-auto">
              Join thousands of Illinois residents building a grassroots movement for economic justice, healthcare access, and progressive change.
            </p>
          </div>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="section-spacing-tight bg-gray-900">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-headline text-4xl lg:text-5xl text-white mb-6">
              Ways to Get Involved
            </h2>
            <p className="text-body-large text-gray-300">
              Choose how you want to contribute to our movement
            </p>
          </div>
          
          <div className="col-span-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="policy-card-advanced bg-black border-gray-800">
              <div className="flex items-center mb-4">
                <Phone className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Phone Banking</h3>
              </div>
              <p className="text-gray-300 mb-4">Call voters across Illinois to share Jump's message and register new supporters.</p>
              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                <li>• Flexible scheduling</li>
                <li>• Training provided</li>
                <li>• Work from home</li>
              </ul>
              <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign Up</Button>
            </div>
            
            <div className="policy-card-advanced bg-black border-gray-800">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Door Knocking</h3>
              </div>
              <p className="text-gray-300 mb-4">Go door-to-door in your neighborhood to meet voters and build grassroots support.</p>
              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                <li>• Weekend shifts available</li>
                <li>• Paired with experienced volunteers</li>
                <li>• Local neighborhood focus</li>
              </ul>
              <Button className="w-full bg-green-600 hover:bg-green-700">Sign Up</Button>
            </div>
            
            <div className="policy-card-advanced bg-black border-gray-800">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Event Support</h3>
              </div>
              <p className="text-gray-300 mb-4">Help organize and run campaign events, town halls, and community meetings.</p>
              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                <li>• Setup and logistics</li>
                <li>• Voter registration</li>
                <li>• Event coordination</li>
              </ul>
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black">Sign Up</Button>
            </div>
            
            <div className="policy-card-advanced bg-black border-gray-800">
              <div className="flex items-center mb-4">
                <Share2 className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Digital Organizing</h3>
              </div>
              <p className="text-gray-300 mb-4">Spread the word on social media and help manage our online presence.</p>
              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                <li>• Content creation</li>
                <li>• Social media management</li>
                <li>• Online voter outreach</li>
              </ul>
              <Button className="w-full bg-purple-600 hover:bg-purple-700">Sign Up</Button>
            </div>
            
            <div className="policy-card-advanced bg-black border-gray-800">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Community Organizing</h3>
              </div>
              <p className="text-gray-300 mb-4">Build coalitions and organize in your community around key issues.</p>
              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                <li>• Coalition building</li>
                <li>• Issue advocacy</li>
                <li>• Leadership development</li>
              </ul>
              <Button className="w-full bg-red-600 hover:bg-red-700">Sign Up</Button>
            </div>
            
            <div className="policy-card-advanced bg-black border-gray-800">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Fundraising</h3>
              </div>
              <p className="text-gray-300 mb-4">Help raise funds from small donors to power our people-funded campaign.</p>
              <ul className="text-gray-400 text-sm space-y-1 mb-4">
                <li>• House parties</li>
                <li>• Donor outreach</li>
                <li>• Fundraising events</li>
              </ul>
              <Button className="w-full bg-pink-600 hover:bg-pink-700">Sign Up</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Volunteer Form Section */}
      <section className="section-spacing-loose bg-black">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h2 className="text-headline text-4xl lg:text-5xl text-white">
                Join Our Team
              </h2>
              <p className="text-body-large text-gray-300">
                Fill out the form below and we'll be in touch with volunteer opportunities that match your interests and availability.
              </p>
            </div>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white font-medium mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-white font-medium mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">ZIP Code</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your ZIP code"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Volunteer Interests (Check all that apply)</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Phone Banking',
                    'Door Knocking',
                    'Event Support',
                    'Digital Organizing',
                    'Community Organizing',
                    'Fundraising',
                    'Data Entry',
                    'Translation Services'
                  ].map((interest) => (
                    <label key={interest} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-gray-300">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Availability</label>
                <select className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none">
                  <option value="">Select your availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="evenings">Evenings</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Additional Comments</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  placeholder="Tell us about your experience or specific interests..."
                />
              </div>
              
              <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold py-4 text-lg">
                Join the Movement
              </Button>
            </form>
          </div>
          
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-8">
              <div className="bg-blue-900/20 border border-blue-800 p-8 rounded-2xl">
                <h3 className="text-headline text-2xl text-white mb-4">Volunteer Training</h3>
                <p className="text-gray-300 mb-6">
                  All volunteers receive comprehensive training to ensure you feel confident and prepared.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium">Orientation Session</div>
                      <div className="text-gray-400 text-sm">Learn about Jump's platform and campaign goals</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium">Skills Training</div>
                      <div className="text-gray-400 text-sm">Hands-on practice with experienced volunteers</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-white font-medium">Ongoing Support</div>
                      <div className="text-gray-400 text-sm">Regular check-ins and additional resources</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-900/20 border border-yellow-800 p-8 rounded-2xl">
                <h3 className="text-headline text-2xl text-white mb-4">Volunteer Benefits</h3>
                <p className="text-gray-300 mb-6">
                  As a campaign volunteer, you'll gain valuable experience and skills.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Political organizing experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Network with like-minded activists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Make a real difference in your community</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300">Volunteer appreciation events</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
                <h3 className="text-headline text-2xl text-white mb-4">Contact Our Team</h3>
                <p className="text-gray-300 mb-6">
                  Have questions about volunteering? Reach out to our volunteer coordinator.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <a href="mailto:volunteers@jump2026.com" className="text-blue-400 hover:underline">
                      volunteers@jump2026.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">(312) 555-JUMP</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300">Campaign Office: Downtown Chicago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section-advanced">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h2 className="text-headline text-4xl lg:text-5xl mb-6">
              Every Vote Counts
            </h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              This election will be decided by grassroots volunteers like you. Join our movement and help us win this crucial Senate seat.
            </p>
            <div className="cta-buttons">
              <a href="mailto:blue@jump2026.com">
                <span className="btn-primary-large">Contact the Campaign</span>
              </a>
              <Link href="/campaign">
                <span className="btn-secondary-large">View Our Platform</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}