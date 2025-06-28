import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import { ExternalLink, Calendar, Megaphone, Users, DollarSign, Camera, Share2 } from "lucide-react";

export default function CampaignPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="content-grid-advanced py-12">
        {/* Header Section */}
        <div className="col-span-12 mb-12 pt-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Title Only */}
            <div className="flex items-center justify-center h-full">
              <h1 className="text-7xl lg:text-8xl font-bold text-yellow-400 leading-tight ml-24">How Can You Help?</h1>
            </div>
            
            {/* Right Side - Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-2xl text-white leading-relaxed">
                Join our movement to bring real change to Illinois. Every contribution, 
                every volunteer hour, and every voice matters in our fight for justice and equality.
              </p>
              <p className="text-xl text-gray-300">
                Together, we can build a better future for all Illinoisans.
              </p>
            </div>
          </div>
          
          {/* ACLU-Inspired Action Section - Moved directly under intro */}
          <div className="aclu-action-section mt-12">
            <h2 className="aclu-page-header text-gray-900">Actions Needed Now</h2>
            
            <div className="aclu-action-grid">
              {/* Volunteering Action Card */}
              <div className="aclu-action-card">
                <div className="flex items-center mb-4">
                  <Users className="w-12 h-12 text-yellow-400 mr-4" />
                  <h3>Join Our Volunteer Team</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Be the change you want to see. Join our dedicated team of volunteers 
                  working to transform Illinois communities through grassroots organizing.
                </p>
                <button className="aclu-action-button">
                  Get Involved
                </button>
              </div>

              {/* Donations Action Card */}
              <div className="aclu-action-card">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-12 h-12 text-yellow-400 mr-4" />
                  <h3>Support the Campaign</h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Every contribution helps us reach more voters and build our movement. 
                  Your donation directly supports organizing, outreach, and advocacy efforts.
                </p>
                <button className="aclu-action-button">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Volunteer Opportunities Section */}
        <div className="col-span-12">
          <div className="bg-black p-8 shadow-2xl">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <Users className="w-12 h-12 text-yellow-400" />
              </div>
              <h2 className="text-4xl font-bold text-yellow-400 mb-4">Volunteer Opportunities</h2>
              <p className="text-lg text-white max-w-2xl mx-auto">
                Multiple ways to get involved and make a difference in our campaign.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Phone Banking */}
              <div className="bg-gray-900 border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <Megaphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Phone Banking</h3>
                <p className="text-gray-300 mb-6">
                  Connect with voters across Illinois and share our message of hope and change.
                </p>
                <div className="space-y-3">
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Sign Up for Phone Banking
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Training Materials
                  </a>
                </div>
              </div>

              {/* Canvassing */}
              <div className="bg-gray-900 border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Canvassing</h3>
                <p className="text-gray-300 mb-6">
                  Go door-to-door in your neighborhood and have meaningful conversations with voters.
                </p>
                <div className="space-y-3">
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Find Canvassing Events
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Canvassing Guide
                  </a>
                </div>
              </div>

              {/* Events */}
              <div className="bg-gray-900 border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <Calendar className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Events</h3>
                <p className="text-gray-300 mb-6">
                  Help organize and run campaign events, rallies, and community gatherings.
                </p>
                <div className="space-y-3">
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Upcoming Events
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Event Volunteer Form
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Donations Section */}
          <div className="bg-black border-4 border-blue-500 rounded-3xl p-12 shadow-2xl drop-shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-yellow-400 mb-4">Donations</h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Your financial support helps us reach more voters, organize more events, 
                and amplify our message across Illinois.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* ActBlue Donation */}
              <div className="bg-gray-900 border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-4">Donate Now</h3>
                  <p className="text-gray-300 mb-6">
                    Make a secure donation through ActBlue and join thousands of supporters 
                    investing in Illinois' future.
                  </p>
                </div>
                <a 
                  href="https://secure.actblue.com/donate/jump2026" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Donate on ActBlue
                </a>
              </div>

              {/* Fundraising */}
              <div className="bg-gray-900 border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold text-white mb-4">Fundraise</h3>
                  <p className="text-gray-300 mb-6">
                    Host a fundraising event in your community or start your own 
                    peer-to-peer fundraising campaign.
                  </p>
                </div>
                <div className="space-y-3">
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Host an Event
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Start a Fundraising Page
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Fundraising Toolkit
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Press Section */}
          <div className="bg-black border-4 border-blue-500 rounded-3xl p-12 shadow-2xl drop-shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-yellow-400 mb-4">Press</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Social Media */}
              <div className="bg-gray-900 border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <Share2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Social Media</h3>
                <p className="text-gray-300 mb-6">
                  Share our content, engage with supporters, and help us reach new audiences online.
                </p>
                <div className="space-y-3">
                  <a href="https://tiktok.com/@jump2026" target="_blank" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Follow on TikTok
                  </a>
                  <a href="https://instagram.com/jump2026" target="_blank" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Follow on Instagram
                  </a>
                  <a href="https://youtube.com/@jump2026" target="_blank" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Subscribe on YouTube
                  </a>
                </div>
              </div>

              {/* In the News */}
              <div className="bg-gray-900 border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <Megaphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">In the News</h3>
                <p className="text-gray-300 mb-6">
                  Latest news coverage and press mentions about our campaign.
                </p>
                <div className="space-y-3">
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Press Releases
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Media Coverage
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Press Kit
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}