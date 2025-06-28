import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import heroPhoto from "@assets/Jump Shepherd America_1751141710805.jpg";

export default function PoliciesPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-80 bg-black flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left: Text Content */}
          <div className="text-left">
            <h1 className="text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight">
              POLICIES
            </h1>
            <p className="text-xl lg:text-2xl text-white font-medium">
              Our comprehensive policy platform for creating positive change in Illinois
            </p>
          </div>
          
          {/* Right: Image */}
          <div className="flex justify-end items-start">
            <div className="relative mt-6">
              <img 
                src={heroPhoto} 
                alt="Jump Shepherd - Working for Illinois" 
                className="w-80 h-60 object-cover rounded-lg shadow-lg"
                style={{
                  filter: 'sepia(100%) saturate(200%) hue-rotate(200deg) brightness(0.9)',
                  objectPosition: 'center bottom'
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Policy Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Policy Platform
          </h2>
          
          {/* First Row: Two policies + photo */}
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg">
                <div className="text-blue-600 text-xl font-bold mb-2">→</div>
                <h3 className="text-xl font-bold text-black mb-3">Environmental Policy</h3>
                <p className="text-gray-700">
                  Championing environmental policy and supporting farmers while protecting our natural resources for future generations.
                </p>
              </div>
              
              <div className="flex justify-center">
                <img 
                  src={candidatePhoto} 
                  alt="Jump - Candidate for U.S. Senate" 
                  className="w-48 h-64 object-cover rounded-lg shadow-lg"
                  style={{
                    objectPosition: 'center 20%',
                    filter: 'sepia(100%) saturate(200%) hue-rotate(200deg) brightness(0.9)'
                  }}
                />
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <div className="text-blue-600 text-xl font-bold mb-2">→</div>
                <h3 className="text-xl font-bold text-black mb-3">The Billionaire's Bill</h3>
                <p className="text-gray-700">
                  The Billionaire's Bill, where billionaires pay their fair share. They pay at a 92% tax rate after their first $10 million. We kickin' Walmart outta here.
                </p>
              </div>
            </div>
          </div>
          
          {/* Second Row: Three policies */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg">
              <div className="text-blue-600 text-xl font-bold mb-2">→</div>
              <h3 className="text-xl font-bold text-black mb-3">Elimination of The Pink Tax</h3>
              <p className="text-gray-700">
                The Pink Tax includes women's products--when women have to pay for things men don't have to pay for, it's unfair. So we're talking about tampons, pads, period products, pregnancy, and childbirth products. Those are gonna be tax-deductible. Women will not have to pay to be women.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <div className="text-blue-600 text-xl font-bold mb-2">→</div>
              <h3 className="text-xl font-bold text-black mb-3">Healthcare Policy</h3>
              <p className="text-gray-700">
                Ensuring affordable, accessible healthcare for all Illinoisans with comprehensive coverage and reduced costs.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg">
              <div className="text-blue-600 text-xl font-bold mb-2">→</div>
              <h3 className="text-xl font-bold text-black mb-3">Education Funding</h3>
              <p className="text-gray-700">
                Investing in our children's future through proper school funding and educational opportunities for all communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}