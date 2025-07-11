import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";

export default function CampaignPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Page Header */}
        <div className="text-center mb-16 pt-8 px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mb-4">Policies</h1>
          <p className="text-lg sm:text-xl text-white max-w-3xl mx-auto">
            Our comprehensive policy platform for creating positive change in Illinois
          </p>
        </div>

        {/* Policy Platform Section */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
              Our Policy Platform
            </h2>

            {/* Top Row - Stacked on Mobile */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 items-center">
              {/* Left Policy Box */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
                <div className="text-blue-600 font-bold text-lg mb-2">→</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Policy</h3>
                <p className="text-gray-600">
                  Championing environmental policy and supporting farmers while protecting our natural resources for future generations.
                </p>
              </div>

              {/* Center Image */}
              <div className="flex justify-center items-center">
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

              {/* Right Policy Box */}
              <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
                <div className="text-blue-600 font-bold text-lg mb-2">→</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Billionaire's Bill</h3>
                <p className="text-gray-600">
                  The Billionaire's Bill, where billionaires pay their fair share. They pay at a 92% tax rate after their first $10 million. We kickin' Walmart outta here.
                </p>
              </div>
            </div>

            {/* Bottom Row - Three Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Elimination of The Pink Tax",
                  desc: "The Pink Tax includes women's products--when women have to pay for things men don't have to pay for, it's unfair. So we're talking about tampons, pads, period products, pregnancy, and childbirth products. Those are gonna be tax-deductible. Women will not have to pay to be women."
                },
                {
                  title: "Healthcare Policy",
                  desc: "Ensuring affordable, accessible healthcare for all Illinoisans with comprehensive coverage and reduced costs."
                },
                {
                  title: "Education Funding",
                  desc: "Investing in our children's future through proper school funding and educational opportunities for all communities."
                }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
                  <div className="text-blue-600 font-bold text-lg mb-2">→</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How Can You Help Section */}
      <div className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              How Can You Help?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join our movement to bring real change to Illinois. Every contribution and every voice matters.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Three Boxes - Volunteering / Donations / Press */}
            {/* Keep original card code here; unchanged */}
          </div>
        </div>
      </div>

      {/* Endorsements */}
      <div className="bg-gray-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Endorsements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Organizations and leaders who believe in our movement for change
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {Array.from({ length: 8 }, (_, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gray-800 border-4 border-blue-500 flex items-center justify-center mb-4">
                  <span className="text-white text-center text-sm font-medium px-2">
                    Coming Soon!
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Thank You Banner */}
      <div className="bg-yellow-500 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-black">
            Thank you to all of our donors, contributors, supporters, and volunteers!
          </h2>
        </div>
      </div>
    </div>
  );
}
