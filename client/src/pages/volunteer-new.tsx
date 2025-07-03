import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Users, Calendar, MapPin, Heart, Target, Share2 } from "lucide-react";

export default function VolunteerPage() {
  const [showThankYouModal, setShowThankYouModal] = useState(false);

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
            {[
              {
                icon: <Phone className="w-8 h-8 text-blue-600 mr-3" />,
                title: "Phone Banking",
                desc: "Call voters across Illinois to share Jump's message and register new supporters.",
                bullets: ["Flexible scheduling", "Training provided", "Work from home"]
              },
              {
                icon: <MapPin className="w-8 h-8 text-blue-600 mr-3" />,
                title: "Door Knocking",
                desc: "Go door-to-door in your neighborhood to meet voters and build grassroots support.",
                bullets: ["Weekend shifts available", "Paired with experienced volunteers", "Local neighborhood focus"]
              },
              {
                icon: <Calendar className="w-8 h-8 text-yellow-600 mr-3" />,
                title: "Event Support",
                desc: "Help organize and run campaign events, town halls, and community meetings.",
                bullets: ["Setup and logistics", "Voter registration", "Event coordination"]
              },
              {
                icon: <Share2 className="w-8 h-8 text-blue-600 mr-3" />,
                title: "Digital Organizing",
                desc: "Spread the word on social media and help manage our online presence.",
                bullets: ["Content creation", "Social media management", "Online voter outreach"]
              },
              {
                icon: <Users className="w-8 h-8 text-blue-600 mr-3" />,
                title: "Community Organizing",
                desc: "Build coalitions and organize in your community around key issues.",
                bullets: ["Coalition building", "Issue advocacy", "Leadership development"]
              },
              {
                icon: <Heart className="w-8 h-8 text-blue-600 mr-3" />,
                title: "Fundraising",
                desc: "Help raise funds from small donors to power our people-funded campaign.",
                bullets: ["House parties", "Donor outreach", "Fundraising events"]
              }
            ].map(({ icon, title, desc, bullets }) => (
              <div key={title} className="bg-white border-2 border-blue-500 rounded-2xl p-8 ">
                <div className="flex items-center mb-4">
                  {icon}
                  <h3 className="text-subheadline text-xl font-semibold text-black">{title}</h3>
                </div>
                <p className="text-black mb-4">{desc}</p>
                <ul className="text-gray-800 text-sm space-y-1 mb-4">
                  {bullets.map(b => <li key={b}>• {b}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteer Button + Benefits + Contact */}
      <section className="section-spacing-loose bg-white">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h2 className="text-headline text-4xl lg:text-5xl text-black">
                Join Our Team
              </h2>
              <p className="text-body-large text-gray-700">
                Sign up to volunteer or apply to join our campaign team.
              </p>
              <a
                href="https://forms.gle/5vCwGBvk11Tn72Nm6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-4 text-lg shadow-lg">
                  Sign Up to Volunteer or Apply to Join Our Team
                </Button>
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-6 space-y-8">
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

      {/* Thank You Modal (no longer needed for form, but left in case reused) */}
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
                Thank you for your interest in volunteering!
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
