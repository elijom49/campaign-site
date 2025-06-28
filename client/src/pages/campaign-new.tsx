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

        {/* Candidate Image Section */}
        <div className="bg-white py-12">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={candidatePhoto} 
              alt="Jump - Candidate for U.S. Senate" 
              className="w-64 h-80 object-cover object-center shadow-2xl mx-auto rounded-lg" 
              style={{objectPosition: 'center 20%'}}
            />
          </div>
        </div>

        {/* Policy Platform Section */}
        <div className="aclu-blue-section">
          <h2 className="aclu-section-title">
            Our Policy Platform
          </h2>
          
          <div className="aclu-content-grid">
            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <h3>Environmental Policy</h3>
              <p className="text-gray-600 mt-4">
                Championing environmental policy and supporting farmers while protecting our natural resources for future generations.
              </p>
            </div>

            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <h3>The Billionaire's Bill</h3>
              <p className="text-gray-600 mt-4">
                The Billionaire's Bill, where billionaires pay their fair share. They pay at a 92% tax rate after their first $10 million. We kickin' Walmart outta here.
              </p>
            </div>

            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <h3>Elimination of The Pink Tax</h3>
              <p className="text-gray-600 mt-4">
                The Pink Tax includes women's products--when women have to pay for things men don't have to pay for, it's unfair. So we're talking about tampons, pads, period products, pregnancy, and childbirth products. Those are gonna be tax-deductible. Women will not have to pay to be women.
              </p>
            </div>

            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <h3>Healthcare Policy</h3>
              <p className="text-gray-600 mt-4">
                Ensuring affordable, accessible healthcare for all Illinoisans with comprehensive coverage and reduced costs.
              </p>
            </div>

            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <h3>Education Funding</h3>
              <p className="text-gray-600 mt-4">
                Investing in our children's future through proper school funding and educational opportunities for all communities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}