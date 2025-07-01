import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import { ExternalLink, Calendar, Megaphone, Users, DollarSign, Camera, Share2 } from "lucide-react";

export default function CampaignPage() {

  return (
    <div className="bg-white text-black min-h-screen">
      <div className="content-grid-advanced py-12">
        {/* Header Section */}
        <div className="col-span-12 mb-12 pt-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left Side - Title Only */}
            <div className="flex items-center justify-center h-full">
              <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-yellow-400 leading-tight ml-24">How Can You Help?</h1>
            </div>
            
            {/* Right Side - Text Content */}
            <div className="flex flex-col justify-center space-y-6">
              <p className="text-2xl text-black leading-relaxed">
                Join our movement to bring real change to Illinois. Every contribution, 
                every volunteer hour, and every voice matters in our fight for justice and equality.
              </p>
              <p className="text-xl text-gray-700">
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
                <button 
                  className="aclu-action-button"
                  onClick={() => window.location.href = '/volunteer'}
                >
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
                <button 
                  className="aclu-action-button"
                  onClick={() => window.open('https://secure.actblue.com/donate/jumpforsenate', '_blank')}
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>



        {/* Donations Section */}
        <div className="col-span-12">
          {/* Donations Section */}
          <div className="bg-white border-4 border-blue-500 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-blue-600 mb-4">Donations</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Your financial support helps us reach more voters, organize more events, 
                and amplify our message across Illinois.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* ActBlue Donation */}
              <div className="bg-white border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <DollarSign className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">Donate Now</h3>
                  <p className="text-gray-600 mb-6">
                    Make a secure donation through ActBlue and join thousands of supporters 
                    investing in Illinois' future.
                  </p>
                </div>
                <a 
                  href="https://secure.actblue.com/donate/jumpforsenate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-300 transition-colors"
                >
                  <ExternalLink className="w-5 h-5 mr-2" />
                  Donate on ActBlue
                </a>
              </div>

              {/* Fundraising */}
              <div className="bg-white border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl font-semibold text-gray-900 mb-4">Fundraise</h3>
                  <p className="text-gray-600 mb-6">
                    Host a fundraising event in your community or start your own 
                    peer-to-peer fundraising campaign.
                  </p>
                </div>
                <a 
                  href="mailto:blue@jump2026.com" 
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>

          <div className="py-12"></div>

          {/* Press Section */}
          <div className="bg-white border-4 border-blue-500 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-blue-600 mb-4">Press</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Social Media */}
              <div className="bg-white border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <Share2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Social Media</h3>
                <p className="text-gray-600 mb-6">
                  Share our content, engage with supporters, and help us reach new audiences online.
                </p>
                <div className="space-y-3">
                  <a href="https://www.tiktok.com/@jumpforsenate" target="_blank" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Follow on TikTok
                  </a>
                  <a href="https://www.instagram.com/jumpforsenate" target="_blank" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Follow on Instagram
                  </a>
                  <a href="https://www.youtube.com/@JumpForSenate" target="_blank" className="block text-blue-400 hover:text-yellow-400 transition-colors">
                    <ExternalLink className="w-4 h-4 inline mr-2" />
                    Subscribe on YouTube
                  </a>
                </div>
              </div>

              {/* In the News */}
              <div className="bg-white border-2 border-blue-400 rounded-2xl p-8 text-center hover:border-yellow-400 transition-colors">
                <Megaphone className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">In the News</h3>
                <p className="text-gray-600 mb-6">
                  Latest news coverage and press mentions about our campaign.
                </p>
                <a 
                  href="mailto:blue@jump2026.com" 
                  className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-bold transition-colors"
                >
                  Contact Press Team
                </a>
              </div>
            </div>
          </div>
          
          {/* Space under press section */}
          <div className="py-12"></div>
        </div>
      </div>

      {/* Thank You Banner */}
      <div className="bg-green-600 py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Thank you to all of our donors, contributors, supporters, and volunteers!
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}