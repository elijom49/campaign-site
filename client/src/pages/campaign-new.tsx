import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";

export default function CampaignPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="content-grid-advanced py-16">
        {/* Page Header */}
        <div className="col-span-12 text-center mb-16 pt-8">
          <h1 className="text-6xl font-bold text-yellow-400 mb-4">Policies</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Our comprehensive policy platform for creating positive change in Illinois
          </p>
        </div>

        {/* Policy Platform Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-20">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="text-4xl font-bold text-white text-center mb-16">
              Our Policy Platform
            </h2>
            
            {/* Top Row - Two boxes flanking candidate photo */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              {/* Left Policy Box */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
                <div className="text-blue-600 font-bold text-lg mb-2">→</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Policy</h3>
                <p className="text-gray-600">
                  Championing environmental policy and supporting farmers while protecting our natural resources for future generations.
                </p>
              </div>

              {/* Center - Candidate Image */}
              <div className="flex justify-center items-center">
                <div className="relative">
                  <img 
                    src={candidatePhoto} 
                    alt="Jump - Candidate for U.S. Senate" 
                    className="w-56 h-72 object-cover object-center shadow-2xl rounded-lg" 
                    style={{
                      objectPosition: 'center 20%',
                      filter: 'sepia(100%) saturate(200%) hue-rotate(200deg) brightness(0.9)'
                    }}
                  />
                </div>
              </div>

              {/* Right Policy Box */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
                <div className="text-blue-600 font-bold text-lg mb-2">→</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Billionaire's Bill</h3>
                <p className="text-gray-600">
                  The Billionaire's Bill, where billionaires pay their fair share. They pay at a 92% tax rate after their first $10 million. We kickin' Walmart outta here.
                </p>
              </div>
            </div>

            {/* Bottom Row - Three boxes below */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
                <div className="text-blue-600 font-bold text-lg mb-2">→</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Elimination of The Pink Tax</h3>
                <p className="text-gray-600">
                  The Pink Tax includes women's products--when women have to pay for things men don't have to pay for, it's unfair. So we're talking about tampons, pads, period products, pregnancy, and childbirth products. Those are gonna be tax-deductible. Women will not have to pay to be women.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
                <div className="text-blue-600 font-bold text-lg mb-2">→</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Healthcare Policy</h3>
                <p className="text-gray-600">
                  Ensuring affordable, accessible healthcare for all Illinoisans with comprehensive coverage and reduced costs.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
                <div className="text-blue-600 font-bold text-lg mb-2">→</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Education Funding</h3>
                <p className="text-gray-600">
                  Investing in our children's future through proper school funding and educational opportunities for all communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Endorsements Section */}
      <div className="bg-black py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Endorsements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations and leaders who believe in our movement for change
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {/* Placeholder circles for endorsement logos */}
            {Array.from({ length: 8 }, (_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-gray-800 border-4 border-blue-500 flex items-center justify-center mb-4">
                  <span className="text-white text-center text-sm font-medium px-2">
                    Coming Soon!
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}