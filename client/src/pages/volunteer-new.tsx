import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Users, Calendar, MapPin, Heart, Target, Share2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function VolunteerPage() {
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    zipCode: "",
    interests: [] as string[],
    availability: [] as string[],
    languagePreference: "",
    additionalInfo: ""
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleCheckboxChange = (field: 'interests' | 'availability', value: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields (First Name, Last Name, Email)",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/volunteer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setShowThankYouModal(true);
        // Reset form
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          zipCode: "",
          interests: [],
          availability: [],
          languagePreference: "",
          additionalInfo: ""
        });
      } else {
        const errorData = await response.json();
        toast({
          title: "Error",
          description: errorData.message || "Failed to submit volunteer application",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Network error. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
              <span className="text-yellow-400 font-bold">for Change</span>
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
            <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 ">
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
            
            <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 ">
              <div className="flex items-center mb-4">
                <MapPin className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-black">Door Knocking</h3>
              </div>
              <p className="text-black mb-4">Go door-to-door in your neighborhood to meet voters and build grassroots support.</p>
              <ul className="text-gray-800 text-sm space-y-1 mb-4">
                <li>• Weekend shifts available</li>
                <li>• Paired with experienced volunteers</li>
                <li>• Local neighborhood focus</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 ">
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
            
            <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 ">
              <div className="flex items-center mb-4">
                <Share2 className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-black">Digital Organizing</h3>
              </div>
              <p className="text-black mb-4">Spread the word on social media and help manage our online presence.</p>
              <ul className="text-gray-800 text-sm space-y-1 mb-4">
                <li>• Content creation</li>
                <li>• Social media management</li>
                <li>• Online voter outreach</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 ">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-black">Community Organizing</h3>
              </div>
              <p className="text-black mb-4">Build coalitions and organize in your community around key issues.</p>
              <ul className="text-gray-800 text-sm space-y-1 mb-4">
                <li>• Coalition building</li>
                <li>• Issue advocacy</li>
                <li>• Leadership development</li>
              </ul>
            </div>
            
            <div className="bg-white border-2 border-blue-500 rounded-2xl p-8 ">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
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
      <section className="section-spacing-loose bg-white">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h2 className="text-headline text-4xl lg:text-5xl text-black">
                Join Our Team
              </h2>
              <p className="text-body-large text-gray-700">
                Fill out the form below and we'll be in touch with volunteer opportunities that match your interests and availability.
              </p>
            </div>
            
            <form className="space-y-6" onSubmit={handleFormSubmit}>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-black font-medium mb-2">First Name *</label>
                  <input 
                    type="text" 
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your first name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-black font-medium mb-2">Last Name *</label>
                  <input 
                    type="text" 
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                    placeholder="Enter your last name"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-black font-medium mb-2">Email Address *</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-black font-medium mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div>
                <label className="block text-black font-medium mb-2">ZIP Code</label>
                <input 
                  type="text" 
                  value={formData.zipCode}
                  onChange={(e) => handleInputChange('zipCode', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Enter your ZIP code"
                />
              </div>
              
              <div>
                <label className="block text-black font-medium mb-2">Volunteer Interests (Check all that apply)</label>
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
                      <input 
                        type="checkbox" 
                        checked={formData.interests.includes(interest)}
                        onChange={(e) => handleCheckboxChange('interests', interest, e.target.checked)}
                        className="rounded text-blue-600" 
                      />
                      <span className="text-black">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-black font-medium mb-2">Campaign Team (Check all that apply)</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Policywriter',
                    'Discord Manager',
                    'Sales Team',
                    'Media Coordinator (Must be local to Chicago)',
                    'Social Media Manager',
                    'Content Writer'
                  ].map((team) => (
                    <label key={team} className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        checked={formData.interests.includes(team)}
                        onChange={(e) => handleCheckboxChange('interests', team, e.target.checked)}
                        className="rounded text-blue-600" 
                      />
                      <span className="text-black">{team}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-black font-medium mb-2">Availability (Check all that apply)</label>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Weekdays',
                    'Weekends',
                    'Evenings',
                    'Flexible'
                  ].map((availability) => (
                    <label key={availability} className="flex items-center space-x-2">
                      <input 
                        type="checkbox" 
                        checked={formData.availability.includes(availability)}
                        onChange={(e) => handleCheckboxChange('availability', availability, e.target.checked)}
                        className="rounded text-blue-600" 
                      />
                      <span className="text-black">{availability}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              <div>
                <label className="block text-black font-medium mb-2">Do you speak any of these languages?</label>
                <select 
                  value={formData.languagePreference}
                  onChange={(e) => handleInputChange('languagePreference', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select a language</option>
                  <option value="spanish">Spanish</option>
                  <option value="arabic">Arabic</option>
                  <option value="mandarin">Mandarin</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-black font-medium mb-2">Additional Comments</label>
                <textarea 
                  rows={4}
                  value={formData.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-blue-500 focus:outline-none"
                  placeholder="Tell us about your experience or specific interests..."
                />
              </div>
              
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 text-lg disabled:opacity-50 shadow-lg"
              >
                {isSubmitting ? "Submitting..." : "Join the Movement"}
              </Button>
            </form>
          </div>
          
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-8">
              <div className="bg-white border border-gray-300 p-8 rounded-2xl">
                <h3 className="text-headline text-2xl text-black mb-4">Volunteer Training</h3>
                <p className="text-gray-700 mb-6">
                  All volunteers receive comprehensive training to ensure you feel confident and prepared.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-black font-medium">Orientation Session</div>
                      <div className="text-gray-600 text-sm">Learn about Jump's platform and campaign goals</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-black font-medium">Skills Training</div>
                      <div className="text-gray-600 text-sm">Hands-on practice with experienced volunteers</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <div className="text-black font-medium">Ongoing Support</div>
                      <div className="text-gray-600 text-sm">Regular check-ins and additional resources</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 border border-blue-300 p-8 rounded-2xl">
                <h3 className="text-headline text-2xl text-blue-900 mb-4">Volunteer Benefits</h3>
                <p className="text-blue-800 mb-6">
                  As a campaign volunteer, you'll gain valuable experience and skills.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800">Political organizing experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800">Network with like-minded activists</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Heart className="w-5 h-5 text-blue-600" />
                    <span className="text-blue-800">Make a real difference in your community</span>
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
            <div className="bg-black border-2 border-blue-500 rounded-2xl p-8 text-center">
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
            <div className="bg-black border-2 border-yellow-500 rounded-2xl p-8 text-center">
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
              <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
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
