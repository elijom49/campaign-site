import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";

export default function CampaignPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="content-grid-advanced py-16">
        {/* Page Header */}
        <div className="col-span-12 text-center mb-16">
          <h1 className="text-6xl font-bold text-yellow-400 mb-4">Policies</h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Our comprehensive policy platform for creating positive change in Illinois
          </p>
        </div>

        {/* Top Section - Two boxes on sides of picture */}
        <div className="col-span-12 grid lg:grid-cols-3 gap-8 mb-16">
          {/* Left Policy Box */}
          <div className="flex items-center">
            <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl w-full h-80 flex flex-col justify-center">
              <div className="text-center mb-4">
                <h2 className="text-headline text-3xl font-bold text-yellow-400 mb-2">Environmental Policy</h2>
              </div>
              <h3 className="text-subheadline text-xl font-semibold text-white mb-4 text-center">Policy Details</h3>
              <p className="text-body-large text-white text-center">XXXXXXXX</p>
            </div>
          </div>
          
          {/* Center Column - Picture */}
          <div className="flex justify-center">
            <div className="relative">
              <img 
                src={candidatePhoto} 
                alt="Jump - Candidate for U.S. Senate" 
                className="w-full max-w-md h-96 object-cover object-center rounded-2xl shadow-2xl drop-shadow-2xl" 
                style={{objectPosition: 'center 20%'}}
              />
            </div>
          </div>
          
          {/* Right Policy Box */}
          <div className="flex items-center">
            <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl w-full h-80 flex flex-col justify-center">
              <div className="text-center mb-4">
                <h2 className="text-headline text-3xl font-bold text-yellow-400 mb-2">The Billionaire's Bill</h2>
              </div>
              <h3 className="text-subheadline text-xl font-semibold text-white mb-4 text-center">Tax Policy</h3>
              <p className="text-body-large text-white text-center">
                The Billionaire's Bill, where billionaires pay their fair share. They pay at a 92% tax rate after their first $10 million. We kickin' Walmart outta here.
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Section - Three Policy Boxes */}
        <div className="col-span-12 grid lg:grid-cols-3 gap-8">
          {/* Pink Tax Policy */}
          <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl h-80 flex flex-col justify-center">
            <div className="text-center mb-4">
              <h2 className="text-headline text-3xl font-bold text-yellow-400 mb-2">Elimination of The Pink Tax</h2>
            </div>
            <h3 className="text-subheadline text-xl font-semibold text-white mb-4 text-center">Women's Rights Policy</h3>
            <p className="text-body-large text-white text-center leading-relaxed">
              The Pink Tax includes women's products--when women have to pay for things men don't have to pay for, it's unfair. So we're talking about tampons, pads, period products, pregnancy, and childbirth products. Those are gonna be tax-deductible. Women will not have to pay to be women.
            </p>
          </div>
          
          {/* Additional Policy Box 1 */}
          <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl h-80 flex flex-col justify-center">
            <div className="text-center mb-4">
              <h2 className="text-headline text-3xl font-bold text-yellow-400 mb-2">Healthcare Policy</h2>
            </div>
            <h3 className="text-subheadline text-xl font-semibold text-white mb-4 text-center">Policy Details</h3>
            <p className="text-body-large text-white text-center">XXXXXXXX</p>
          </div>
          
          {/* Additional Policy Box 2 */}
          <div className="bg-black border-4 border-blue-500 rounded-2xl p-8 shadow-2xl drop-shadow-2xl h-80 flex flex-col justify-center">
            <div className="text-center mb-4">
              <h2 className="text-headline text-3xl font-bold text-yellow-400 mb-2">Education Policy</h2>
            </div>
            <h3 className="text-subheadline text-xl font-semibold text-white mb-4 text-center">Policy Details</h3>
            <p className="text-body-large text-white text-center">XXXXXXXX</p>
          </div>
        </div>
      </div>
    </div>
  );
}