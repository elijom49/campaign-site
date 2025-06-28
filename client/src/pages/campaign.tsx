import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import { ExternalLink, Heart, Megaphone, Users, DollarSign, Camera, Share2 } from "lucide-react";

export default function CampaignPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="content-grid-advanced py-16">
        {/* Header Section */}
        <div className="col-span-12 mb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Header and Photo */}
            <div>
              <h1 className="text-6xl font-bold text-yellow-400 mb-8">How Can You Help?</h1>
              <div className="relative">
                <img 
                  src={candidatePhoto} 
                  alt="Jump - Candidate for U.S. Senate" 
                  className="w-full max-w-lg h-96 object-cover object-center rounded-2xl shadow-2xl drop-shadow-2xl border-4 border-blue-500" 
                  style={{objectPosition: 'center 20%'}}
                />
              </div>
            </div>
            
            {/* Right Side - Introduction */}
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
        </div>

        {/* Three Main Sections */}
        <div className="col-span-12 space-y-16">
          {/* Volunteering Section */}
          <div className="bg-black border-4 border-blue-500 rounded-3xl p-12 shadow-2xl drop-shadow-2xl">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Users className="w-16 h-16 text-yellow-400" />
              </div>
              <h2 className="text-5xl font-bold text-yellow-400 mb-4">Volunteering</h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Be the change you want to see. Join our dedicated team of volunteers 
                working to transform Illinois communities.
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
                <Heart className="w-12 h-12 text-blue-400 mx-auto mb-4" />
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
              <div className="flex justify-center mb-6">
                <DollarSign className="w-16 h-16 text-yellow-400" />
              </div>
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

          {/* Media Section */}
          <div className="bg-black border-4 border-blue-500 rounded-3xl p-12 shadow-2xl drop-shadow-2xl">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <Camera className="w-16 h-16 text-yellow-400" />
              </div>
              <h2 className="text-5xl font-bold text-yellow-400 mb-4">Media</h2>
              <p className="text-xl text-white max-w-3xl mx-auto">
                Help spread our message through social media, content creation, 
                and digital outreach efforts.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
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

              {/* Content Creation */}
              <div className="bg-gray-900 border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <Camera className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Content Creation</h3>
                <p className="text-gray-300 mb-6">
                  Help create videos, graphics, and written content to support our campaign.
                </p>
                <div className="space-y-3">
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Content Guidelines
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Brand Assets
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Submit Content
                  </a>
                </div>
              </div>

              {/* Press & Outreach */}
              <div className="bg-gray-900 border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <Megaphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Press & Outreach</h3>
                <p className="text-gray-300 mb-6">
                  Connect with local media, write letters to editors, and help amplify our message.
                </p>
                <div className="space-y-3">
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Press Kit
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Letter Templates
                  </a>
                  <a href="#" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Media Contacts
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