import { ArrowRight, Users, Heart, Zap } from "lucide-react";
import candidatePhoto from "@assets/main headshot no bg.png";
import chicagoSkyline from "@assets/chicago-river-5249198_1280_1751144895089.jpg";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Advanced Hero Section - CHANGED BACKGROUND TO BLUE */}
      <section className="hero-section-advanced min-h-screen flex items-center" style={{ backgroundColor: "#1e75ff" }}>
        <div className="content-grid-advanced relative z-10">
          <div className="col-span-12 lg:col-span-7 space-y-8 lg:ml-24">
            <div className="space-y-6">
              {/* CHANGED TEXT TO WHITE & FONT TO GREVE */}
              <h1
                className="text-display text-5xl lg:text-6xl xl:text-7xl text-white leading-tight mt-12"
                style={{ fontFamily: "Greve, sans-serif" }}
              >
                Fighting for Working Families in Illinois
              </h1>
              {/* CHANGED TEXT TO YELLOW, BIGGER, BOLD */}
              <p className="text-body-large font-bold text-2xl" style={{ color: "#fed709" }}>
                Together, we can build a fairer, stronger, and more just future for everyone.
              </p>
            </div>

            {/* Four CTA Buttons in 2x2 Grid - UPDATED DONATE BUTTONS */}
            <div className="grid grid-cols-2 gap-4 w-full sm:w-96 mt-6">
              <a
                href="https://jump4senate.com/volunteer"
                className="text-center py-3 rounded-lg font-semibold shadow-md"
                style={{ backgroundColor: "#FFD60A", color: "#000" }}
              >
                Get Involved
              </a>
              {/* CHANGED DONATE BUTTON - BLUE BACKGROUND, WHITE TEXT, WHITE OUTLINE */}
              <a
                href="https://secure.actblue.com/donate/jumpforsenate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3 rounded-lg font-semibold shadow-md"
                style={{ backgroundColor: "#1e75ff", color: "#fff", border: "2px solid #ffffff" }}
              >
                Donate
              </a>
              <a
                href="https://jump4senate.com/community"
                className="text-center py-3 rounded-lg font-semibold shadow-md"
                style={{ backgroundColor: "#2E8B57", color: "#fff" }}
              >
                Follow Us on Socials
              </a>
              {/* REMOVED GRAY OUTLINE FROM SIGN PETITION BUTTON */}
              <a
                href="https://jump4senate.com/volunteer"
                className="text-center py-3 rounded-lg font-semibold shadow-md"
                style={{ backgroundColor: "#ffffff", color: "#000" }}
              >
                Sign Petition
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:-ml-24">
            <div className="relative">
              {/* CHANGED TO NEW HEADSHOT IMAGE - REMOVED SHADOW */}
              <img
                src={candidatePhoto}
                alt="Jump - Candidate for U.S. Senate"
                className="w-4/5 h-auto rounded-2xl mx-auto"
              />
              {/* CHANGED QUOTE BOX - WHITE BOX, YELLOW BORDER, WHITE TEXT, GREEN QUOTES, 3X BIGGER */}
              <div className="absolute bottom-4 right-4 p-8 rounded-lg shadow-lg max-w-md text-2xl" style={{ 
                backgroundColor: "white", 
                border: "4px solid #fed709" 
              }}>
                <blockquote className="font-bold" style={{ color: "black" }}>
                  <span className="text-4xl font-black" style={{ color: "#2E8B57" }}>"</span>
                  It's not Red vs. Blue, it's Oligarchs vs. You 🫵🏽
                  <span className="text-4xl font-black" style={{ color: "#2E8B57" }}>"</span>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="content-grid-advanced">
          <div className="col-span-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="stat-item">
                <div className="stat-number">12.7M</div>
                <div className="stat-label">People in Illinois</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">2026</div>
                <div className="stat-label">Election Year</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">1</div>
                <div className="stat-label">Voice That Matters: Yours</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Platform Section */}
      <section
        className="section-spacing-loose relative"
        style={{
          backgroundImage: `url(${chicagoSkyline})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-blue-600 bg-opacity-70"></div>

        <div className="content-grid-advanced relative z-10">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-headline text-4xl lg:text-5xl text-white mb-6">
              Fighting for What Matters
            </h2>
            <p className="text-body-large text-white max-w-2xl mx-auto">
              From lowering costs to protecting our planet, we're building a campaign for all of us.
            </p>
          </div>

          <div className="col-span-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* REMOVED BLUE OUTLINE FROM POLICY CARDS */}
            <div className="aclu-card" style={{ border: "none" }}>
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Lowering the Cost of Living</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Families deserve affordable healthcare, housing, and everyday essentials.
              </p>
              <a
                href="/policies"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="aclu-card" style={{ border: "none" }}>
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Protecting Our Environment</h3>
              </div>
              <p className="text-gray-600 mb-4">
                A livable planet for our kids means bold action on climate change now.
              </p>
              <a
                href="/policies"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>

            <div className="aclu-card" style={{ border: "none" }}>
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Ending the Pink Tax</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Equal pay and fair prices for women and families—no exceptions.
              </p>
              <a
                href="/policies"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section-advanced">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h2 className="text-headline text-4xl lg:text-5xl mb-6">
              Join the Movement
            </h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              Be part of the campaign that puts people before profits.
            </p>

            {/* Four CTA Buttons in 2x2 Grid - UPDATED DONATE BUTTONS */}
            <div className="grid grid-cols-2 gap-4 w-full sm:w-96 mx-auto">
              <a
                href="https://jump4senate.com/volunteer"
                className="text-center py-3 rounded-lg font-semibold shadow-md"
                style={{ backgroundColor: "#FFD60A", color: "#000" }}
              >
                Get Involved
              </a>
              {/* CHANGED DONATE BUTTON - BLUE BACKGROUND, WHITE TEXT, WHITE OUTLINE */}
              <a
                href="https://secure.actblue.com/donate/jumpforsenate"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center py-3 rounded-lg font-semibold shadow-md"
                style={{ backgroundColor: "#1e75ff", color: "#fff", border: "2px solid #ffffff" }}
              >
                Donate Today
              </a>
              <a
                href="https://jump4senate.com/community"
                className="text-center py-3 rounded-lg font-semibold shadow-md"
                style={{ backgroundColor: "#2E8B57", color: "#fff" }}
              >
                Follow Us on Socials
              </a>
              {/* REMOVED GRAY OUTLINE FROM SECOND SIGN PETITION BUTTON */}
              <a
                href="https://jump4senate.com/volunteer"
                className="text-center py-3 rounded-lg font-semibold shadow-md"
                style={{ backgroundColor: "#ffffff", color: "#000" }}
              >
                Sign Petition
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Election Day Banner */}
      <div className="bg-orange-600 py-4 overflow-hidden">
        <div className="animate-marquee text-white font-bold text-xl md:text-2xl">
          <span className="pr-20">
            Primary is March 17, 2026! • Primary is March 17, 2026! • Primary is March 17, 2026!
          </span>
          <span className="pr-20">
            Primary is March 17, 2026! • Primary is March 17, 2026! • Primary is March 17, 2026!
          </span>
        </div>
      </div>
    </div>
  );
}
