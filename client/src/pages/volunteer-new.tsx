import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, Mail, Users, Calendar, MapPin, Heart, Target, Share2 } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";

export default function VolunteerPage() {
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
            {/* [Cards remain unchanged] */}
            {/* ... [Phone Banking, Door Knocking, etc.] */}
          </div>
        </div>
      </section>

      {/* Volunteer Signup Section */}
      <section className="section-spacing-loose bg-white">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center mb-8">
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
          </div>

          {/* Two Column Grid */}
          <div className="col-span-12 grid lg:grid-cols-2 gap-8">
            {/* Volunteer Training Box */}
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

            {/* Volunteer Benefits Box */}
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
          </div>

          {/* Contact Box Moved Below */}
          <div className="col-span-12 mt-8">
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
      {/* [CTA section remains unchanged] */}

      {/* Meet the Campaign Team Section */}
      {/* [Team section remains unchanged] */}
    </div>
  );
}
