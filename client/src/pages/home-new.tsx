import { Link } from "wouter";
import { ArrowRight, Users, Heart, Zap } from "lucide-react";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import chicagoSkyline from "@assets/chicago-river-5249198_1280_1751144895089.jpg";

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* Advanced Hero Section */}
      <section className="hero-section-advanced min-h-screen flex items-center">
        <div className="content-grid-advanced relative z-10">
          <div className="col-span-12 lg:col-span-7 space-y-8 lg:ml-24">
            <div className="space-y-6">
              <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-gray-900 leading-tight mt-12">
                Fighting for Working Families in Illinois
              </h1>
              <p className="text-body-large text-gray-600 max-w-lg">
                Together, we can build a fairer, stronger, and more just future for everyone.
              </p>
            </div>

            {/* Four CTA Buttons */}
            <div className="flex flex-col gap-4 w-full sm:w-64 mt-6">
              <a
                href="https://jump4senate.com/volunteer"
                className="btn-primary-large text-center"
              >
                Get Involved
              </a>
              <a
                href="https://secure.actblue.com/donate/jumpforsenate"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-large text-center"
              >
                Donate
              </a>
              <a
                href="https://jump4senate.com/community#:~:text=and%20progressive%20change.-,Follow%20the%20Campaign,-Stay%20connected%20with"
                className="btn-secondary-large text-center"
              >
                Follow Us on Socials
              </a>
              <a
                href="https://jump4senate.com/community#:~:text=Donate-,Join%20Our%0ACommunity,-Connect%20with%20Illinois"
                className="btn-secondary-large text-center"
              >
                Sign Petition
              </a>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 lg:-ml-24">
            <div className="relative">
              <img
                src={candidatePhoto}
                alt="Jump - Candidate for U.S. Senate"
                className="w-4/5 h-auto rounded-2xl shadow-2xl mx-auto"
              />
              <div className="absolute bottom-4 right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg max-w-xs border-l-4 border-yellow-400">
                <blockquote className="text-sm font-medium italic">
                  "It’s not Red vs. Blue, it’s Oligarchs vs. You 🫵🏽"
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
              From lowering costs to protecting our planet, we’re building a campaign for all of us.
            </p>
          </div>

          <div className="col-span-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="aclu-card">
              <div className="flex items-center mb-4">
                <Heart className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Lowering the Cost of Living</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Families deserve affordable healthcare, housing, and everyday essentials.
              </p>
              <Link
                href="/policies"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="aclu-card">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Protecting Our Environment</h3>
              </div>
              <p className="text-gray-600 mb-4">
                A livable planet for our kids means bold action on climate change now.
              </p>
              <Link
                href="/policies"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="aclu-card">
              <div className="flex items-center mb-4">
                <Zap className="w-8 h-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold">Ending the Pink Tax</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Equal pay and fair prices for women and families—no exceptions.
              </p>
              <Link
                href="/policies"
                className="text-blue-600 font-medium inline-flex items-center"
              >
                Learn More <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
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

            {/* Four CTA Buttons */}
            <div className="flex flex-col gap-4 w-full sm:w-64 mx-auto">
              <a
                href="https://jump4senate.com/volunteer"
                className="btn-primary-large text-center"
              >
                Get Involved
              </a>
              <a
                href="https://secure.actblue.com/donate/jumpforsenate"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary-large text-center"
              >
                Donate Today
              </a>
              <a
                href="https://jump4senate.com/community#:~:text=and%20progressive%20change.-,Follow%20the%20Campaign,-Stay%20connected%20with"
                className="btn-secondary-large text-center"
              >
                Follow Us on Socials
              </a>
              <a
                href="https://jump4senate.com/community#:~:text=Donate-,Join%20Our%0ACommunity,-Connect%20with%20Illinois"
                className="btn-secondary-large text-center"
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
