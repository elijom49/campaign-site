import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-8">About Me</h1>
          </div>

          {/* Bio Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Bio</h2>
              <div className="space-y-4 text-lg text-gray-300">
                <p>
                  Born and raised in Chicago, I understand firsthand the challenges facing working families in our communities. My journey from the South Side to the halls of public service has been shaped by the belief that everyone deserves a fair shot at the American Dream.
                </p>
                <p>
                  As a community organizer, I've spent years fighting for affordable housing, quality education, and economic justice. I've seen how policy decisions made in Washington directly impact families struggling to make ends meet, and I'm running to be their voice in the Senate.
                </p>
                <p>
                  My vision for Illinois and America is simple: a country where your zip code doesn't determine your destiny, where healthcare is a human right, and where the economy works for everyone, not just the wealthy few.
                </p>
              </div>
            </div>
            
            <div>
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=800" 
                alt="Jump - About Me Photo" 
                className="rounded-xl shadow-2xl w-full h-auto" 
              />
            </div>
          </div>

          {/* My Policies Section */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">My Policies</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Card className="bg-gray-900 border-gray-800 p-6 text-white">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">Economic Justice</h3>
                  <p className="text-gray-300">Fighting for a $20 minimum wage, strengthening unions, and ensuring corporations pay their fair share in taxes.</p>
                </Card>
                
                <Card className="bg-gray-900 border-gray-800 p-6 text-white">
                  <h3 className="text-2xl font-bold text-green-400 mb-4">Climate Action</h3>
                  <p className="text-gray-300">Implementing the Green New Deal to create millions of jobs while protecting our environment for future generations.</p>
                </Card>
                
                <Card className="bg-gray-900 border-gray-800 p-6 text-white">
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">Healthcare for All</h3>
                  <p className="text-gray-300">Medicare for All to ensure every American has access to quality healthcare regardless of their ability to pay.</p>
                </Card>
              </div>
              
              <Card className="bg-gray-900 border-gray-800 p-4 text-white">
                {/* Placeholder for policy video */}
                <div className="aspect-video bg-gray-800 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-blue-400 mb-4 mx-auto" />
                    <p className="text-xl font-bold text-white">Policy Video</p>
                    <p className="text-gray-400">Coming Soon</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
