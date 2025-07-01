import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Users, Calendar, MapPin, Heart, Target, Share2 } from "lucide-react";

export default function VolunteerPage() {
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Show thank you modal
    setShowThankYouModal(true);
    // TODO: Add Google Sheets integration for Sheet 2 (Volunteer Applications)
  };

  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <section className="py-16">
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
      <section className="section-spacing-tight bg-blue-600">
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
            <div className="bg-white border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl">
              <div className="flex items-center mb-4">
                <Phone className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-black">Phone Banking</h3>
              </div>
              <p className="text-black mb-4">Call voters across Illinois to share Jump's message and register new supporters.</p>
              <ul className="text-gray-800 text-sm space-y-1 mb-4">
                <li>• Flexible scheduling</li>
                <li>• Training provided</li>
                <li>• Work from home</li>
              </ul>

            </div>
            
            <div className="bg-white border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-green-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-black">Door Knocking</h3>
              </div>
              <p className="text-black mb-4">Go door-to-door in your neighborhood to meet voters and build grassroots support.</p>
              <ul className="text-gray-800 text-sm space-y-1 mb-4">
                <li>• Weekend shifts available</li>
                <li>• Paired with experienced volunteers</li>
                <li>• Local neighborhood focus</li>
              </ul>
            </div>
            
            <div className="bg-white border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl">
              <div className="flex items-center mb-4">
                <Calendar className="w-8 h-8 text-yellow-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-black">Event Support</h3>
              </div>
              <p className="text-black mb-4">Help organize and run campaign events, town halls, and community meetings.</p>
              <ul className="text-gray-800 text-sm space-y-1 mb-4">
                <li>• Setup and logistics</li>
                <li>• Voter registration</li>
                <li>• Event coordination</li>
              </ul>
            </div>
            
            <div className="bg-white border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl">
              <div className="flex items-center mb-4">
                <Share2 className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-black">Digital Organizing</h3>
              </div>
              <p className="text-black mb-4">Spread the word on social media and help manage our online presence.</p>
              <ul className="text-gray-800 text-sm space-y-1 mb-4">
                <li>• Content creation</li>
                <li>• Social media management</li>
                <li>• Online voter outreach</li>
              </ul>
            </div>
            
            <div className="bg-white border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-red-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-black">Community Organizing</h3>
              </div>
              <p className="text-black mb-4">Build coalitions and organize in your community around key issues.</p>
              <ul className="text-gray-800 text-sm space-y-1 mb-4">
                <li>• Coalition building</li>
                <li>• Issue advocacy</li>
                <li>• Leadership development</li>
              </ul>
            </div>
            
            <div className="bg-white border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-pink-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-black">Fundraising</h3>
              </div>
              <p className="text-black mb-4">Help raise funds from small donors to power our people-funded campaign.</p>
              <ul className="text-gray-800 text-sm space-y-1 mb-4">
                <li>• House parties</li>
                <li>• Donor outreach</li>
                <li>• Fundraising events</li>
              </ul>
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
            
            <form className="space-y-6" onSubmit={handleFormSubmit}>
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
                    'Other'
                  ].map((interest) => (
                    <label key={interest} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-gray-300">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Availability (Check all that apply)</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Weekdays',
                    'Weekends',
                    'Evenings',
                    'Flexible'
                  ].map((availability) => (
                    <label key={availability} className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded text-blue-600" />
                      <span className="text-gray-300">{availability}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Do you speak any of these languages?</label>
                <select className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none">
                  <option value="">Select a language</option>
                  <option value="spanish">Spanish</option>
                  <option value="arabic">Arabic</option>
                  <option value="mandarin">Mandarin</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Resume Upload (Optional)</label>
                <input 
                  type="file" 
                  accept=".pdf,.doc,.docx"
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                />
                <p className="text-gray-400 text-sm mt-1">Accepted formats: PDF, DOC, DOCX</p>
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Additional Comments</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                  placeholder="Tell us about your experience or specific interests..."
                />
              </div>
              
              <Button type="submit" className="w-full bg-yellow-600 hover:bg-yellow-700 text-black font-semibold py-4 text-lg">
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
                    <a href="mailto:sims@jump2026.com" className="text-blue-400 hover:underline">
                      sims@jump2026.com
                    </a>
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

      {/* Meet the Campaign Team Section */}
      <section className="bg-gray-900 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Meet the Campaign Team!
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get to know the dedicated team working to bring change to Illinois
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Campaign Manager */}
            <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">RB</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Robert Blue II</h3>
              <p className="text-blue-400 text-lg font-semibold mb-4">Campaign Manager</p>
              <p className="text-gray-300">
                Leading our grassroots movement with strategic vision and community organizing expertise.
              </p>
            </div>

            {/* Director of Information and Volunteer Coordinator */}
            <div className="bg-black border-4 border-yellow-500 rounded-2xl p-8 text-center">
              <div className="w-24 h-24 bg-yellow-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-black text-2xl font-bold">JS</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">James Sims</h3>
              <p className="text-yellow-400 text-lg font-semibold mb-4">Director of Information and Volunteer Coordinator</p>
              <p className="text-gray-300">
                Coordinating our volunteer efforts and managing information flow to keep our movement connected.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      {showThankYouModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in volunteering! We have received your application and will be in touch regarding the next steps.
              </p>
              <Button 
                onClick={() => setShowThankYouModal(false)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2"
              >
                Close
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}