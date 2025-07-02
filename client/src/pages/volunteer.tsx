import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MapPin, Calendar, Share2, Car, Wrench } from "lucide-react";

export default function VolunteerPage() {
  return (
    <div className="bg-white">
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every movement needs dedicated volunteers. Whether you have an hour a week or can commit to more, there's a way for you to make a difference.
            </p>
          </div>

          {/* Volunteer Opportunities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 border-blue-600 p-6 shadow-lg">
              <Phone className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Phone Banking</h3>
              <p className="text-gray-600 mb-6">
                Connect with voters from the comfort of your home and help spread our message.
              </p>
              <Button className="bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 font-bold w-full">
                Sign Up
              </Button>
            </Card>

            <Card className="border-2 border-green-600 p-6 shadow-lg">
              <MapPin className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Canvassing</h3>
              <p className="text-gray-600 mb-6">
                Go door-to-door in your neighborhood to talk with voters about the issues that matter.
              </p>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 font-bold w-full">
                Sign Up
              </Button>
            </Card>

            <Card className="border-2 border-purple-600 p-6 shadow-lg">
              <Calendar className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Support</h3>
              <p className="text-gray-600 mb-6">
                Help organize and run campaign events, rallies, and community meetings.
              </p>
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 font-bold w-full">
                Sign Up
              </Button>
            </Card>

            <Card className="border-2 border-red-600 p-6 shadow-lg">
              <Share2 className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Organizing</h3>
              <p className="text-gray-600 mb-6">
                Help manage social media, create content, and engage voters online.
              </p>
              <Button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 font-bold w-full">
                Sign Up
              </Button>
            </Card>

            <Card className="border-2 border-yellow-600 p-6 shadow-lg">
              <Car className="w-8 h-8 text-yellow-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Voter Transportation</h3>
              <p className="text-gray-600 mb-6">
                Help ensure everyone can get to the polls on election day.
              </p>
              <Button className="bg-yellow-600 hover:bg-yellow-700 text-white px-6 py-3 font-bold w-full">
                Sign Up
              </Button>
            </Card>

            <Card className="border-2 border-gray-600 p-6 shadow-lg">
              <Wrench className="w-8 h-8 text-gray-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Other Skills</h3>
              <p className="text-gray-600 mb-6">
                Have a special skill? We can find a way to put your talents to work for the campaign.
              </p>
              <Button className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 font-bold w-full">
                Contact Us
              </Button>
            </Card>
          </div>

          {/* Google Form Button */}
          <Card className="bg-gray-50 p-10 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Apply to Volunteer or Join Our Campaign Team</h2>
            <p className="text-gray-600 mb-6">
              Fill out the form below and we'll be in touch with volunteer opportunities that match your interests and availability.
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeYck9CXsbD_F5L2vmrRAAuFKnja57TuZ9o4slpfcIDfIrdng/viewform?usp=header"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-blue-600 hover:bg-blue-800 text-white px-8 py-4 text-lg font-bold">
                Fill Out the Form
              </Button>
            </a>
          </Card>

          {/* Community Photos */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Volunteers in Action</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <img
                src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Volunteers at campaign event"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Volunteers phone banking"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400"
                alt="Volunteers canvassing"
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

