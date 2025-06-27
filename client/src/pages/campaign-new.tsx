import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";

export default function CampaignPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="content-grid-advanced py-16">
        {/* Top Section with Picture in Center */}
        <div className="col-span-12 grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Top */}
          <div className="space-y-8">
            {/* Environmental Policy */}
            <div className="policy-card-advanced bg-gray-900 border-gray-800">
              <h3 className="text-subheadline text-2xl font-semibold text-white mb-4">Environmental Policy</h3>
              <p className="text-body-large text-gray-300">XXXXXXXX</p>
            </div>
            
            {/* Bottom Left Policy */}
            <div className="policy-card-advanced bg-gray-900 border-gray-800">
              <h3 className="text-subheadline text-2xl font-semibold text-white mb-4">XXXXX Policy</h3>
              <p className="text-body-large text-gray-300">XXXXXXX</p>
            </div>
          </div>
          
          {/* Center Column - Picture */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={candidatePhoto} 
                alt="Jump - Candidate for U.S. Senate" 
                className="w-full max-w-md h-96 object-cover object-center rounded-2xl shadow-2xl" 
                style={{objectPosition: 'center 20%'}}
              />
            </div>
          </div>
          
          {/* Right Column */}
          <div className="space-y-8">
            {/* The Billionaire's Bill */}
            <div className="policy-card-advanced bg-gray-900 border-gray-800">
              <h3 className="text-subheadline text-2xl font-semibold text-white mb-4">The Billionaire's Bill</h3>
              <p className="text-body-large text-gray-300">
                The Billionaire's Bill, where billionaires pay their fair share. They pay at a 92% tax rate after their first $10 million. We kickin' Walmart outta here.
              </p>
            </div>
            
            {/* XXX Policy */}
            <div className="policy-card-advanced bg-gray-900 border-gray-800">
              <h3 className="text-subheadline text-2xl font-semibold text-white mb-4">XXX Policy</h3>
              <p className="text-body-large text-gray-300">XXXXXXX</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Pink Tax */}
        <div className="col-span-12">
          <div className="max-w-4xl mx-auto">
            <div className="policy-card-advanced bg-gray-900 border-gray-800 text-center">
              <h3 className="text-headline text-3xl font-semibold text-white mb-6">Elimination of The Pink Tax</h3>
              <p className="text-body-large text-gray-300 leading-relaxed">
                The Pink Tax includes women's products--when women have to pay for things men don't have to pay for, it's unfair. So we're talking about tampons, pads, period products, pregnancy, and childbirth products. Those are gonna be tax-deductible. Women will not have to pay to be women.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}