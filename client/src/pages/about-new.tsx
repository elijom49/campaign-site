import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { MapPin, Users, Heart, Target, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";

export default function AboutPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="section-spacing-loose">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 rounded text-sm font-semibold">
                Meet Your Candidate
              </div>
              <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-white leading-[0.9]">
                Meet
                <br />
                <span className="text-blue-400">Jump</span>
              </h1>
              <p className="text-body-large text-gray-300 leading-relaxed">
                A lifelong Illinois resident fighting for economic justice, healthcare access, and true representation for working families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/campaign">
                  <span className="btn-primary-large">View Platform</span>
                </Link>
                <Link href="/volunteer">
                  <span className="btn-secondary-large">Get Involved</span>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <img 
                src={candidatePhoto} 
                alt="Jump - Candidate for U.S. Senate" 
                className="w-full h-auto rounded-2xl shadow-2xl" 
              />
              <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-black p-6 rounded-xl shadow-lg">
                <div className="font-bold text-lg">2026 U.S. Senate</div>
                <div className="text-sm">Illinois • Chicago</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="section-spacing-tight bg-gray-900">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-8 mx-auto text-center space-y-8">
            <h2 className="text-headline text-4xl lg:text-5xl text-white">
              Background & Experience
            </h2>
            <div className="space-y-6 text-left">
              <p className="text-body-large text-gray-300 leading-relaxed">
                Born and raised in Chicago, Jump understands the challenges facing working families because they've lived them. From growing up in a working-class neighborhood to seeing family members struggle with healthcare costs and housing affordability, Jump's commitment to economic justice isn't theoretical—it's personal.
              </p>
              <p className="text-body-large text-gray-300 leading-relaxed">
                Throughout their career, Jump has been a tireless advocate for progressive causes, organizing communities around healthcare access, workers' rights, and climate justice. They believe that government should work for the people, not corporate interests.
              </p>
              <p className="text-body-large text-gray-300 leading-relaxed">
                As your U.S. Senator, Jump will bring this grassroots organizing experience to Washington, fighting every day to ensure that Illinois families have a voice in the halls of power.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-spacing-loose bg-black">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-headline text-4xl lg:text-5xl text-white mb-6">
              Core Values
            </h2>
            <p className="text-body-large text-gray-300">
              The principles that guide every decision and vote
            </p>
          </div>
          
          <div className="col-span-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subheadline text-xl font-semibold text-white">Compassion</h3>
              <p className="text-gray-300">Leading with empathy and understanding for all people</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto">
                <Target className="w-8 h-8 text-black" />
              </div>
              <h3 className="text-subheadline text-xl font-semibold text-white">Justice</h3>
              <p className="text-gray-300">Fighting for equality and fairness in all systems</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subheadline text-xl font-semibold text-white">Community</h3>
              <p className="text-gray-300">Building solidarity and collective action</p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-subheadline text-xl font-semibold text-white">Accountability</h3>
              <p className="text-gray-300">Transparent governance answerable to the people</p>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Deep Dive */}
      <section className="section-spacing-tight bg-gray-900">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <h2 className="text-headline text-4xl text-white">
                Policy Priorities
              </h2>
              <p className="text-body-large text-gray-300">
                Detailed positions on the issues that matter most to Illinois families.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="border-l-4 border-blue-400 pl-6 space-y-2">
                <h4 className="text-white font-semibold text-lg">Universal Healthcare</h4>
                <p className="text-gray-300">Medicare for All with comprehensive coverage, including mental health, dental, and vision care. Healthcare is a human right, not a privilege.</p>
              </div>
              
              <div className="border-l-4 border-yellow-400 pl-6 space-y-2">
                <h4 className="text-white font-semibold text-lg">Economic Democracy</h4>
                <p className="text-gray-300">$30 minimum wage by 2030, stronger union protections, and worker ownership programs to democratize the economy.</p>
              </div>
              
              <div className="border-l-4 border-green-400 pl-6 space-y-2">
                <h4 className="text-white font-semibold text-lg">Climate Justice</h4>
                <p className="text-gray-300">A just transition to renewable energy that prioritizes frontline communities and creates millions of good-paying green jobs.</p>
              </div>
              
              <div className="border-l-4 border-purple-400 pl-6 space-y-2">
                <h4 className="text-white font-semibold text-lg">Housing as a Right</h4>
                <p className="text-gray-300">Massive public housing investment, strong tenant protections, and an end to corporate speculation in housing markets.</p>
              </div>
            </div>
          </div>
          
          <div className="col-span-12 lg:col-span-6">
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800">
              <h3 className="text-headline text-2xl text-white mb-6">Why Jump is Running</h3>
              <blockquote className="text-lg text-gray-300 italic leading-relaxed mb-6">
                "I'm running for U.S. Senate because I believe the government should promote equality for everyone. Too many politicians serve corporate donors instead of the people who elected them. It's time for a senator who will fight for working families, not Wall Street."
              </blockquote>
              <div className="text-yellow-400 font-semibold">— Jump, Candidate for U.S. Senate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Story Section */}
      <section className="section-spacing-loose bg-black">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-8 mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-headline text-4xl lg:text-5xl text-white mb-6">
                Personal Story
              </h2>
              <p className="text-body-large text-gray-300">
                Understanding the struggles of working families through lived experience
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-subheadline text-2xl text-white">Growing Up in Chicago</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Jump grew up in a working-class Chicago neighborhood, where they witnessed firsthand the challenges facing families trying to make ends meet. Their parents worked multiple jobs to pay the bills, and healthcare was always a source of financial stress.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-subheadline text-2xl text-white">Community Organizing</h3>
                  <p className="text-gray-300 leading-relaxed">
                    For over a decade, Jump has organized communities around issues of economic justice, healthcare access, and climate action. They've seen how grassroots organizing can create real change when people come together.
                  </p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-subheadline text-2xl text-white">Fighting for Change</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Jump has led campaigns for affordable housing, workers' rights, and environmental justice. They believe that real change comes from the bottom up, not from corporate boardrooms or lobbyist meetings.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-subheadline text-2xl text-white">Vision for Illinois</h3>
                  <p className="text-gray-300 leading-relaxed">
                    As your U.S. Senator, Jump will bring this community organizing experience to Washington, fighting every day to ensure that Illinois families have a voice in the decisions that affect their lives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section-advanced">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h2 className="text-headline text-4xl lg:text-5xl mb-6">
              Ready to Fight Together?
            </h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              This campaign is about building a movement for change. Join thousands of Illinois residents who are ready to fight for a better future.
            </p>
            <div className="cta-buttons">
              <Link href="/volunteer">
                <span className="btn-primary-large">Join the Movement</span>
              </Link>
              <a href="https://secure.actblue.com/donate/jumpforsenate" target="_blank" rel="noopener noreferrer">
                <span className="btn-secondary-large">Support the Campaign</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}