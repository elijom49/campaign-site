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

        {/* Policy Focus Section - ACLU-Inspired Design */}
        <div className="aclu-blue-section">
          <div className="aclu-geometric-accent top-left"></div>
          <div className="aclu-geometric-accent bottom-right"></div>
          <h2 className="aclu-section-title">
            Our Policy Platform
          </h2>
          
          <div className="aclu-content-grid">
            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <h3>Environmental Policy</h3>
              <p>Comprehensive climate action and environmental protection for Illinois communities.</p>
              <div className="space-y-2">
                <div>
                  <strong className="text-gray-900">Green Infrastructure</strong>
                  <p className="text-sm text-gray-600 mt-1">Clean energy jobs and sustainable development</p>
                </div>
              </div>
            </div>

            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <h3>The Billionaire's Bill</h3>
              <p>Tax Policy</p>
              <div className="space-y-2">
                <strong className="text-gray-900">Progressive Taxation</strong>
                <p className="text-sm text-gray-600 mt-1">
                  The Billionaire's Bill, where billionaires pay their fair share. They pay at a 92% tax rate after their first $10 million. We kickin' Walmart outta here.
                </p>
              </div>
            </div>

            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <h3>Elimination of The Pink Tax</h3>
              <p>Women's Rights Policy</p>
              <div className="space-y-2">
                <strong className="text-gray-900">Gender Equality</strong>
                <p className="text-sm text-gray-600 mt-1">
                  The Pink Tax includes women's products--when women have to pay for things men don't have to pay for, it's unfair. So we're talking about tampons, pads, period products, pregnancy, and childbirth products. Those are gonna be tax-deductible. Women will not have to pay to be women.
                </p>
              </div>
            </div>

            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <h3>Healthcare Policy</h3>
              <p>Expanding healthcare access and reducing costs for all Illinois families.</p>
              <div className="space-y-2">
                <div>
                  <strong className="text-gray-900">Universal Access</strong>
                  <p className="text-sm text-gray-600 mt-1">Healthcare as a human right for all</p>
                </div>
              </div>
            </div>

            <div className="aclu-card">
              <div className="aclu-card-arrow">→</div>
              <h3>Education Funding</h3>
              <p>Investing in quality education from early childhood through higher education.</p>
              <div className="space-y-2">
                <div>
                  <strong className="text-gray-900">Public Investment</strong>
                  <p className="text-sm text-gray-600 mt-1">Fully funded schools and affordable college</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Candidate Image Section */}
        <div className="col-span-12 flex justify-center py-16">
          <div className="relative aclu-hero-image">
            <img 
              src={candidatePhoto} 
              alt="Jump - Candidate for U.S. Senate" 
              className="w-full max-w-md h-96 object-cover object-center shadow-2xl" 
              style={{objectPosition: 'center 20%'}}
            />
          </div>
        </div>
      </div>
    </div>
  );
}