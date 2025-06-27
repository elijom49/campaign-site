import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, Leaf, Equal, Building, Users, HandHeart, DollarSign, Calendar, ArrowRight } from "lucide-react";
import { useLanguage } from "@/hooks/use-language";

export default function CampaignPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white">
      {/* Advanced Header Section */}
      <section className="section-spacing-loose">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center">
            <h1 className="text-display text-5xl lg:text-6xl xl:text-7xl text-white mb-8">
              {t('campaign.title')}
            </h1>
            <p className="text-body-large text-gray-300 max-w-3xl mx-auto">
              {t('campaign.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Policy Section */}
      <section className="section-spacing-tight bg-gray-900">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-6 space-y-8">
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 bg-blue-900/30 text-blue-400 rounded text-sm font-semibold">
                Priority #1
              </div>
              <h2 className="text-headline text-4xl lg:text-5xl text-white">
                Healthcare for All
              </h2>
              <p className="text-body-large text-gray-300 leading-relaxed">
                Universal healthcare coverage that puts patients over profits. No one should go bankrupt because they got sick.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">Medicare for All with comprehensive coverage</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">Prescription drug price controls</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full mt-3 flex-shrink-0"></div>
                  <p className="text-gray-300">Mental health services integration</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Healthcare workers in action" 
                className="w-full h-80 object-cover rounded-2xl shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Policy Grid Section */}
      <section className="section-spacing-loose bg-black">
        <div className="content-grid-advanced">
          <div className="col-span-12 text-center mb-16">
            <h2 className="text-headline text-4xl lg:text-5xl text-white mb-6">
              Policy Platform
            </h2>
            <p className="text-body-large text-gray-300">
              Comprehensive solutions for the challenges facing Illinois families
            </p>
          </div>
          
          <div className="col-span-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="policy-card-advanced bg-gray-900 border-gray-800">
              <div className="flex items-center mb-4">
                <Home className="w-8 h-8 text-blue-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Housing Justice</h3>
              </div>
              <p className="text-gray-300 mb-4">Affordable housing for all, rent control, and an end to corporate landlord exploitation.</p>
              <div className="text-blue-400 font-medium inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            
            <div className="policy-card-advanced bg-gray-900 border-gray-800">
              <div className="flex items-center mb-4">
                <DollarSign className="w-8 h-8 text-yellow-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Economic Justice</h3>
              </div>
              <p className="text-gray-300 mb-4">$30 minimum wage, worker protections, and wealth taxes on the ultra-rich.</p>
              <div className="text-blue-400 font-medium inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            
            <div className="policy-card-advanced bg-gray-900 border-gray-800">
              <div className="flex items-center mb-4">
                <Leaf className="w-8 h-8 text-green-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Climate Action</h3>
              </div>
              <p className="text-gray-300 mb-4">Green New Deal, clean energy jobs, and environmental justice for all communities.</p>
              <div className="text-blue-400 font-medium inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            
            <div className="policy-card-advanced bg-gray-900 border-gray-800">
              <div className="flex items-center mb-4">
                <Equal className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Civil Rights</h3>
              </div>
              <p className="text-gray-300 mb-4">Protecting voting rights, criminal justice reform, and equality for all Americans.</p>
              <div className="text-blue-400 font-medium inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            
            <div className="policy-card-advanced bg-gray-900 border-gray-800">
              <div className="flex items-center mb-4">
                <Users className="w-8 h-8 text-orange-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Education</h3>
              </div>
              <p className="text-gray-300 mb-4">Free public college, student debt relief, and fully funded public schools.</p>
              <div className="text-blue-400 font-medium inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            
            <div className="policy-card-advanced bg-gray-900 border-gray-800">
              <div className="flex items-center mb-4">
                <Building className="w-8 h-8 text-red-400 mr-3" />
                <h3 className="text-subheadline text-xl font-semibold text-white">Infrastructure</h3>
              </div>
              <p className="text-gray-300 mb-4">Rebuilding America's infrastructure with good-paying union jobs.</p>
              <div className="text-blue-400 font-medium inline-flex items-center">
                Learn more <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voting Record/Endorsements Section */}
      <section className="section-spacing-tight bg-gray-900">
        <div className="content-grid-advanced">
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-6">
              <h2 className="text-headline text-4xl text-white">
                Endorsed By
              </h2>
              <p className="text-body-large text-gray-300">
                Grassroots organizations and labor unions that fight for working families.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <div className="text-white font-semibold">Local 150</div>
                  <div className="text-gray-400 text-sm">Operating Engineers</div>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <div className="text-white font-semibold">Our Revolution</div>
                  <div className="text-gray-400 text-sm">Progressive Coalition</div>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <div className="text-white font-semibold">Justice Democrats</div>
                  <div className="text-gray-400 text-sm">Progressive Movement</div>
                </div>
                <div className="bg-black/50 p-4 rounded-lg border border-gray-800">
                  <div className="text-white font-semibold">Sunrise Movement</div>
                  <div className="text-gray-400 text-sm">Climate Activism</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-6">
              <h2 className="text-headline text-4xl text-white">
                The Issues
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="text-white font-semibold">Corruption in Politics</h4>
                  <p className="text-gray-300 text-sm">End corporate influence and restore democracy to the people.</p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="text-white font-semibold">Income Inequality</h4>
                  <p className="text-gray-300 text-sm">Close the wealth gap with progressive taxation and worker empowerment.</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <h4 className="text-white font-semibold">Climate Crisis</h4>
                  <p className="text-gray-300 text-sm">Bold action to address the existential threat of climate change.</p>
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
              Join Our Movement
            </h2>
            <p className="text-body-large mb-8 max-w-2xl mx-auto">
              Real change happens when we organize together. Join thousands of Illinois residents fighting for a better future.
            </p>
            <div className="cta-buttons">
              <Link href="/volunteer">
                <span className="btn-primary-large">Get Involved</span>
              </Link>
              <a href="https://secure.actblue.com/donate/jumpforsenate" target="_blank" rel="noopener noreferrer">
                <span className="btn-secondary-large">Contribute</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}