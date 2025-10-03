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

      {/* Video + Petition Section */}
      <section className="py-12 bg-gray-900">
        <div className="content-grid-advanced grid md:grid-cols-2 gap-8 items-center">
          <div className="col-span-1">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-64 md:h-80 rounded-xl"
                src="https://www.youtube.com/embed/xnNF3vN5QfY"
                title="YouTube video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="col-span-1 flex justify-center">
            <a
              href="/attached_assets/Petition Form.pdf"
              download="Petition Form.pdf"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-8 text-lg rounded shadow-lg"
            >
              Download Petition Form
            </a>
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

      {/* Volunteer Section */}
      <section className="section-spacing-loose bg-white">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-6 text-center mb-8">
            <h2 className="text-headline text-4xl lg:text-5xl text-black">
              Join Our Team
            </h2>
            <p className="text-body-large text-gray-700 mt-4 mb-6">
              Fill out the form below and we'll be in touch with volunteer opportunities that match your interests and availability.
            </p>
            <a
              href="https://forms.gle/5vCwGBvk11Tn72Nm6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 px-8 text-lg rounded shadow-lg"
            >
              Sign Up to Volunteer or Apply to Join Our Team
            </a>

            {/* Volunteer Training Box under button */}
            <div className="bg-white border border-gray-300 p-8 rounded-2xl mt-8 text-left max-w-md mx-auto">
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
          </div>

          {/* Volunteer Benefits and Contact Box side by side */}
          <div className="col-span-12 lg:col-span-6 flex flex-col gap-8">
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
              <div className="text-4xl mb-4">🎉</div>
              <h2 className="text-2xl font-bold mb-4">Thank you for signing up to volunteer!</h2>
              <p className="mb-6">
                We appreciate your interest and will be in touch soon with next steps.
              </p>
              <Button onClick={() => setShowThankYouModal(false)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
