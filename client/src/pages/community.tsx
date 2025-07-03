import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { SiTiktok, SiLinkedin, SiYoutube } from "react-icons/si";
import { Calendar, Megaphone, Newspaper } from "lucide-react";

export default function CommunityPage() {
  return (
    <div className="bg-black text-white">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">Community</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with our movement, stay updated on events, and show your support.
            </p>
          </div>

          {/* Follow Us Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Follow Us!</h2>
            <div className="flex justify-center space-x-8">
              <a href="#" className="bg-pink-600 hover:bg-pink-700 rounded-xl p-6 text-center transition-colors">
                <SiTiktok size={48} className="mx-auto mb-4" />
                <div className="font-bold">TikTok</div>
              </a>
              <a href="#" className="bg-blue-600 hover:bg-blue-700 rounded-xl p-6 text-center transition-colors">
                <SiLinkedin size={48} className="mx-auto mb-4" />
                <div className="font-bold">LinkedIn</div>
              </a>
              <a href="#" className="bg-red-600 hover:bg-red-700 rounded-xl p-6 text-center transition-colors">
                <SiYoutube size={48} className="mx-auto mb-4" />
                <div className="font-bold">YouTube</div>
              </a>
            </div>
          </div>

          {/* Fundraising Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Fundraising</h2>
            <Card className="bg-gray-900 border-gray-800 p-8 text-white">
              {/* Fundraising Flyer */}
              <div className="text-center mb-8">
                <img 
                  src="https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                  alt="The Senator's Cup Basketball Tournament Flyer" 
                  className="rounded-xl shadow-lg mx-auto w-full max-w-md" 
                />
              </div>

              <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">Join The Senator's Cup</h3>
                <p className="text-lg text-gray-300 mb-6">
                  Join The Senator's Cup, our first fundraiser for the campaign.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  Think you can ball? Put it to the test. 8-player tournament, $100 entry, $300 prizes. Remaining proceeds go to the campaign. We're running events three times a week throughout this election cycle, and we'll be adding bonus brackets for bigger challenges for those who can't get enough of winning.
                </p>
                <p className="text-lg text-gray-300 mb-6">
                  In addition, join our the Cup Discord. A place for men who are serious about being a person of influence in their community. Hang with the guys, talk politics, sports, gaming, cash, and business as you get direct-from-Jump updates on the campaign while participating in a community of men with power and confidence.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  Brackets will begin soon. If you'd like to be on the staff team for The Senator's Cup, please let us know. There are remote and local positions available.
                </p>
                <div className="text-center">
                  <Button className="bg-campaign-blue hover:bg-blue-800 text-white px-8 py-4 text-lg font-bold">
                    Register for Tournament
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Merch Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Merch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-800 p-6 text-center text-white">
                <img 
                  src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                  alt="Jump Campaign T-Shirt" 
                  className="rounded-lg mb-4 w-full h-64 object-cover" 
                />
                <h3 className="text-xl font-bold mb-2">Campaign T-Shirt</h3>
                <p className="text-gray-300 mb-4">Show your support with our signature tee</p>
                <Button className="bg-campaign-blue hover:bg-blue-800 text-white px-6 py-3 font-bold">
                  $25.00
                </Button>
              </Card>

              <Card className="bg-gray-900 border-gray-800 p-6 text-center text-white">
                <img 
                  src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                  alt="Jump Campaign Tote Bag" 
                  className="rounded-lg mb-4 w-full h-64 object-cover" 
                />
                <h3 className="text-xl font-bold mb-2">Tote Bag</h3>
                <p className="text-gray-300 mb-4">Eco-friendly and campaign-ready</p>
                <Button className="bg-campaign-blue hover:bg-blue-800 text-white px-6 py-3 font-bold">
                  $15.00
                </Button>
              </Card>

              <Card className="bg-gray-900 border-gray-800 p-6 text-center text-white">
                <img 
                  src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=400" 
                  alt="Jump Campaign Stickers" 
                  className="rounded-lg mb-4 w-full h-64 object-cover" 
                />
                <h3 className="text-xl font-bold mb-2">Sticker Pack</h3>
                <p className="text-gray-300 mb-4">Spread the message everywhere</p>
                <Button className="bg-campaign-blue hover:bg-blue-800 text-white px-6 py-3 font-bold">
                  $10.00
                </Button>
              </Card>
            </div>
          </div>

          {/* Campaign Updates Section */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">Campaign Updates</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Calendar */}
              <Card className="bg-gradient-to-br from-blue-600 to-blue-700 p-8 text-center text-white border-0">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Calendar</h3>
                <p className="text-blue-100 mb-6">Stay updated on all upcoming campaign events, rallies, and community meetings.</p>
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 font-bold">
                  View Events
                </Button>
              </Card>

              {/* Main Updates */}
              <Card className="bg-gradient-to-br from-green-600 to-green-700 p-8 text-center text-white border-0">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Megaphone className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Main</h3>
                <p className="text-green-100 mb-6">Latest campaign announcements, policy updates, and major developments.</p>
                <Button className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 font-bold">
                  Read Updates
                </Button>
              </Card>

              {/* Press */}
              <Card className="bg-gradient-to-br from-purple-600 to-purple-700 p-8 text-center text-white border-0">
                <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                  <Newspaper className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Press</h3>
                <p className="text-purple-100 mb-6">Media coverage, press releases, and official campaign statements.</p>
                <Button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 font-bold">
                  Press Room
                </Button>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
