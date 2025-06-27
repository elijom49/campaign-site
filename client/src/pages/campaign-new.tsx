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
            <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-4">
                <h2 className="text-headline text-3xl font-bold text-yellow-400 mb-2">Environmental Policy</h2>
              </div>
              <h3 className="text-subheadline text-xl font-semibold text-white mb-4">Policy Details</h3>
              <p className="text-body-large text-white">XXXXXXXX</p>
            </div>
            
            {/* Bottom Left Policy */}
            <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-4">
                <h2 className="text-headline text-3xl font-bold text-yellow-400 mb-2">XXXXX Policy</h2>
              </div>
              <h3 className="text-subheadline text-xl font-semibold text-white mb-4">Policy Details</h3>
              <p className="text-body-large text-white">XXXXXXX</p>
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
            <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-4">
                <h2 className="text-headline text-3xl font-bold text-yellow-400 mb-2">The Billionaire's Bill</h2>
              </div>
              <h3 className="text-subheadline text-xl font-semibold text-white mb-4">Tax Policy</h3>
              <p className="text-body-large text-white">
                The Billionaire's Bill, where billionaires pay their fair share. They pay at a 92% tax rate after their first $10 million. We kickin' Walmart outta here.
              </p>
            </div>
            
            {/* XXX Policy */}
            <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl">
              <div className="text-center mb-4">
                <h2 className="text-headline text-3xl font-bold text-yellow-400 mb-2">XXX Policy</h2>
              </div>
              <h3 className="text-subheadline text-xl font-semibold text-white mb-4">Policy Details</h3>
              <p className="text-body-large text-white">XXXXXXX</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Pink Tax */}
        <div className="col-span-12">
          <div className="max-w-4xl mx-auto">
            <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl text-center">
              <div className="text-center mb-6">
                <h2 className="text-headline text-4xl font-bold text-yellow-400 mb-2">Elimination of The Pink Tax</h2>
              </div>
              <h3 className="text-subheadline text-xl font-semibold text-white mb-6">Women's Rights Policy</h3>
              <p className="text-body-large text-white leading-relaxed">
                The Pink Tax includes women's products--when women have to pay for things men don't have to pay for, it's unfair. So we're talking about tampons, pads, period products, pregnancy, and childbirth products. Those are gonna be tax-deductible. Women will not have to pay to be women.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}