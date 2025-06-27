import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home, Leaf, Equal, Building, Users, HandHeart, DollarSign, Calendar } from "lucide-react";

export default function CampaignPage() {
  return (
    <div className="bg-black text-white">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">Campaign Platform</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive plan to fight for working families and build a better future for all.
            </p>
          </div>

          {/* Policy Issues with Picture in Center */}
          <div className="relative mb-16">
            {/* Center Image */}
            <div className="text-center mb-12">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800" 
                alt="Jump campaigning in the community" 
                className="rounded-xl shadow-2xl mx-auto w-80 h-96 object-cover" 
              />
            </div>

            {/* Policy Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Left of Picture */}
              <div className="lg:col-span-1">
                <Card className="bg-gray-800 border-gray-700 p-6 h-full text-white">
                  <Home className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Lowering Cost of Living</h3>
                  <p className="text-gray-300">Implementing rent control, expanding affordable housing, and fighting price gouging on essential goods.</p>
                </Card>
              </div>

              {/* Right of Picture */}
              <div className="lg:col-span-1 lg:col-start-3">
                <Card className="bg-gray-800 border-gray-700 p-6 h-full text-white">
                  <Leaf className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Environmental Policy</h3>
                  <p className="text-gray-300">Green New Deal implementation, clean energy jobs, and environmental justice for all communities.</p>
                </Card>
              </div>

              {/* Below Picture Row */}
              <div className="lg:col-span-1">
                <Card className="bg-gray-800 border-gray-700 p-6 h-full text-white">
                  <Equal className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Elimination of The Pink Tax</h3>
                  <p className="text-gray-300">Ending discriminatory pricing and ensuring gender equity in all markets.</p>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <Card className="bg-gray-800 border-gray-700 p-6 h-full text-white">
                  <Building className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Placeholder Policy 1</h3>
                  <p className="text-gray-300">Additional policy positions and initiatives to be announced during the campaign.</p>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <Card className="bg-gray-800 border-gray-700 p-6 h-full text-white">
                  <Users className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="text-xl font-bold mb-4">Placeholder Policy 2</h3>
                  <p className="text-gray-300">More comprehensive policy details coming soon as our platform develops.</p>
                </Card>
              </div>
            </div>
          </div>

          {/* Fighting for Our Future Full Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-12">Fighting for Our Future</h2>
            <Card className="bg-gray-900 border-gray-800 p-8 text-white">
              <p className="text-lg text-gray-300 mb-6">
                Our campaign represents a fundamental shift in how we approach governance. We're not here to maintain the status quo—we're here to challenge it, disrupt it, and rebuild it in favor of working families.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                From healthcare as a human right to transforming our economy for the 21st century, every policy we champion is designed with one goal: ensuring that prosperity and opportunity reach every person, not just the privileged few.
              </p>
              <p className="text-lg text-gray-300">
                This is our moment. This is our fight. This is our future.
              </p>
            </Card>
          </div>

          {/* How You Can Help */}
          <Card className="bg-gray-900 border-gray-800 p-8 text-white">
            <h2 className="text-4xl font-bold text-center mb-12">How You Can Help</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-campaign-blue rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <HandHeart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Volunteer</h3>
                <p className="text-gray-300 mb-6">Join our grassroots movement and help us reach voters across the state.</p>
                <Link href="/volunteer">
                  <Button className="bg-campaign-blue hover:bg-blue-800 text-white px-6 py-3 font-bold">
                    Get Involved
                  </Button>
                </Link>
              </div>

              <div className="text-center">
                <div className="bg-campaign-red rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Donate</h3>
                <p className="text-gray-300 mb-6">Fuel our people-powered campaign with your grassroots contribution.</p>
                <a 
                  href="https://secure.actblue.com/donate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-campaign-red hover:bg-red-600 text-white px-6 py-3 font-bold">
                    Donate Now
                  </Button>
                </a>
              </div>

              <div className="text-center">
                <div className="bg-campaign-green rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Attend a Meeting</h3>
                <p className="text-gray-300 mb-6">Join us at community meetings and campaign events near you.</p>
                <Button variant="secondary" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 font-bold" disabled>
                  Coming Soon
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
