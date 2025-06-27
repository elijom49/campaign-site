import { Card } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";

export default function AboutPage() {
  const { t } = useLanguage();
  
  return (
    <div className="bg-black min-h-screen">
      {/* Meet Jump Section */}
      <div className="relative overflow-hidden bg-black">
        {/* Clean decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 border-4 border-blue-500 opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 border-4 border-yellow-500 opacity-50"></div>
          <div className="absolute top-1/2 right-32 w-16 h-16 border-2 border-blue-500 opacity-60"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Meet Jump Section */}
          <div className="flex flex-col lg:flex-row items-start gap-12 mb-16">
            {/* Meet Jump Title - Left side */}
            <div className="flex-1">
              <div className="inline-block relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white px-8 py-4 bg-blue-500 rounded-xl shadow-2xl border-4 border-yellow-500 relative z-10">
                  {t('about.meetJump')}
                </h1>
                <div className="absolute inset-0 bg-yellow-500 rounded-xl transform rotate-1 -z-10"></div>
              </div>
            </div>
            
            {/* Picture and Video Boxes - Right side */}
            <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Picture Box */}
              <div className="card-elevated rounded-lg overflow-hidden">
                <img 
                  src={candidatePhoto} 
                  alt="Jump - Candidate for U.S. Senate" 
                  className="w-full h-80 object-cover"
                />
              </div>
              
              {/* Video Box */}
              <div className="card-elevated rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-80"
                  src="https://www.youtube.com/embed/lcbYrTEnyOM"
                  title="Jump for Senate Campaign Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Policies Section */}
      <div className="relative py-16 bg-black">        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Policies Header with beautiful frame */}
          <div className="text-center mb-12">
            <div className="inline-block relative">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 px-12 py-6 bg-blue-500 rounded-xl shadow-2xl border-4 border-yellow-500 relative z-10">
                {t('about.policies')}
              </h2>
              <div className="absolute inset-0 bg-yellow-500 rounded-xl transform rotate-1 -z-10"></div>
            </div>
          </div>

          {/* Policy Description */}
          <div className="text-center mb-16">
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-normal leading-relaxed">
              {t('about.policiesDesc')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
