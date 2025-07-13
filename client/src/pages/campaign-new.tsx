import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";

export default function CampaignPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Page Header */}
      <div className="px-4 py-16 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4">Policies</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Our comprehensive policy platform for creating positive change in Illinois
        </p>
      </div>

      {/* Policy Platform */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">
          Our Policy Platform
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center mb-12">
          {/* Left Box */}
          <div className="bg-white w-full lg:w-1/3 rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
            <div className="text-blue-600 font-bold text-lg mb-2">→</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Policy</h3>
            <p className="text-gray-600">
              Championing environmental policy and supporting farmers while protecting our natural resources for future generations.
            </p>
          </div>

          {/* Center Image */}
          <div className="w-48 h-64 lg:w-56 lg:h-72">
            <img
              src={candidatePhoto}
              alt="Jump - Candidate for U.S. Senate"
              className="w-full h-full object-cover shadow-2xl rounded-lg"
              style={{
                objectPosition: "center 20%",
                filter: "sepia(100%) saturate(200%) hue-rotate(200deg) brightness(0.9)",
              }}
            />
          </div>

          {/* Right Box */}
          <div className="bg-white w-full lg:w-1/3 rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
            <div className="text-blue-600 font-bold text-lg mb-2">→</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Billionaire's Bill</h3>
            <p className="text-gray-600">
              The Billionaire's Bill, where billionaires pay their fair share. They pay at a 92% tax rate after their first $10 million. We kickin' Walmart outta here.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Elimination of The Pink Tax",
              text: "The Pink Tax includes women's products--when women have to pay for things men don't have to pay for, it's unfair. So we're talking about tampons, pads, period products, pregnancy, and childbirth products. Those are gonna be tax-deductible. Women will not have to pay to be women.",
            },
            {
              title: "Healthcare Policy",
              text: "Ensuring affordable, accessible healthcare for all Illinoisans with comprehensive coverage and reduced costs.",
            },
            {
              title: "Education Funding",
              text: "Investing in our children's future through proper school funding and educational opportunities for all communities.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-white w-full rounded-xl p-6 shadow-lg border-l-4 border-yellow-400"
            >
              <div className="text-blue-600 font-bold text-lg mb-2">→</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How Can You Help */}
      <div className="bg-black py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">How Can You Help?</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join our movement to bring real change to Illinois. Every contribution and every voice matters.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:grid md:grid-cols-3">
          {/* Volunteering */}
          <div className="bg-white w-full rounded-xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857..." />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteering</h3>
            <p className="text-gray-600 mb-6">
              Join our team of dedicated volunteers making a difference in communities across Illinois.
            </p>
            <button
              onClick={() => (window.location.href = "/volunteer")}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Involved
            </button>
          </div>

          {/* Donations */}
          <div className="bg-white w-full rounded-xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2..." />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Donations</h3>
            <p className="text-gray-600 mb-6">
              Support our grassroots movement with a contribution that helps us reach more voters.
            </p>
            <a
              href="https://secure.actblue.com/donate/jumpforsenate"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Donate Now
            </a>
          </div>

          {/* Press */}
          <div className="bg-white w-full rounded-xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0..." />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Press</h3>
            <p className="text-gray-600 mb-6">
              Media inquiries and press-related questions for our campaign.
            </p>
            <a
              href="mailto:blue@jump2026.com"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Thank You */}
      <div className="bg-yellow-500 py-8 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">
          Thank you to all of our donors, contributors, supporters, and volunteers!
        </h2>
      </div>
    </div>
  );
}
