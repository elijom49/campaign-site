import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Calendar, Users, MapPin, Share2, ArrowUpRight, ShoppingBag, Shirt, SignpostBig } from "lucide-react";
import { FaTiktok, FaLinkedin } from "react-icons/fa";
import senatorsCupPoster from "@assets/Sen-Cup-Flyer-Official_1751137281159.png";
import threadsIcon from "@assets/threads.png";

export default function CommunityPage() {
  return (
    <div className="bg-black text-white">
      {/* Header Section */}
      <section className="py-16">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-white mb-8">
              Join Our
              <br />
              <span className="text-blue-600 font-bold">Community</span>
            </h1>
            <p className="text-body-large text-gray-300 max-w-3xl mx-auto">
              Connect with Illinois residents building a grassroots movement for economic justice and progressive change.
            </p>

            {/* Google Calendar Section */}
            <div className="mt-12 max-w-5xl mx-auto">
              <iframe
                src="https://calendar.google.com/calendar/embed?src=elisejonesms@gmail.com&ctz=America%2FChicago"
                style={{ border: 0, width: "100%", minHeight: "60vh" }}
                frameBorder="0"
                scrolling="no"
                className="rounded-lg"
                title="Community Calendar"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="section-spacing-tight bg-blue-600">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-headline text-4xl lg:text-5xl text-white mb-6">
              Follow the Campaign
            </h2>
            <p className="text-body-large text-gray-300">
              Stay connected with daily updates, behind-the-scenes content, and live events
            </p>
          </div>
          
          <div className="col-span-12 grid md:grid-cols-3 gap-8">
            <a 
              href="https://www.tiktok.com/@jumpforsenate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="policy-card-advanced bg-black border-gray-800 interactive-element group"
            >
              <div className="flex items-center mb-4">
                <FaTiktok className="w-8 h-8 text-pink-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">TikTok</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-white transition-colors" />
              </div>
              <div className="text-blue-400 font-medium">@jumpforsenate</div>
            </a>
            
            <a 
              href="https://www.instagram.com/jumpforsenate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="policy-card-advanced bg-black border-gray-800 interactive-element group"
            >
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-lg flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <h3 className="text-subheadline text-xl font-semibold text-white">Instagram</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-white transition-colors" />
              </div>
              <div className="text-blue-400 font-medium">@jumpforsenate</div>
            </a>
            
            <a 
              href="https://www.threads.com/@jumpforsenate" 
              target="_blank" 
              rel="noopener noreferrer"
              className="policy-card-advanced bg-black border-gray-800 interactive-element group"
            >
              <div className="flex items-center mb-4">
                <img src={threadsIcon} alt="Threads" className="w-8 h-8 mr-3" style={{ filter: "invert(33%) sepia(86%) saturate(7400%) hue-rotate(357deg) brightness(100%) contrast(104%)" }} />
                <h3 className="text-subheadline text-xl font-semibold text-white">Threads</h3>
                <ArrowUpRight className="w-5 h-5 text-gray-400 ml-auto group-hover:text-white transition-colors" />
              </div>
              <div className="text-blue-400 font-medium">@jumpforsenate</div>
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section-spacing-tight bg-white">
        <div className="content-grid-advanced">
          <div className="col-span-12 mx-auto text-center space-y-8 max-w-4xl">
            <h2 className="text-headline text-4xl lg:text-5xl text-black">
              Stay Informed
            </h2>
            <p className="text-body-large text-gray-700">
              Get weekly updates on campaign progress, policy positions, and upcoming events delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <a
                href="https://forms.gle/bYsyVqDZFKm7TVZ36"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-blue-600 hover:bg-blue-700 px-8 py-3 text-lg font-semibold w-full"
                >
                  Sign Up for Updates
                </Button>
              </a>
              <p className="text-gray-600 text-sm mt-4">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section remains the same */}
    </div>
  );
}
