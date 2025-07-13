import { useLanguage } from "@/hooks/use-language";
import { Link } from "wouter";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";

export default function CampaignPage() {
  const { t } = useLanguage();

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-4">Policies</h1>
        <p className="text-lg sm:text-xl max-w-3xl mx-auto">
          Our comprehensive policy platform for creating positive change in Illinois
        </p>
      </div>

      {/* Policy Platform Section */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-16">
          Our Policy Platform
        </h2>

        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
          {/* Left Box */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
            <div className="text-blue-600 font-bold text-lg mb-2">→</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Environmental Policy</h3>
            <p className="text-gray-600">
              Championing environmental policy and supporting farmers while protecting our natural resources for future generations.
            </p>
          </div>

          {/* Candidate Image */}
          <div className="flex justify-center">
            <img
              src={candidatePhoto}
              alt="Jump - Candidate for U.S. Senate"
              className="w-48 sm:w-56 h-64 sm:h-72 object-cover object-center shadow-2xl rounded-lg"
              style={{
                objectPosition: "center 20%",
                filter:
                  "sepia(100%) saturate(200%) hue-rotate(200deg) brightness(0.9)",
              }}
            />
          </div>

          {/* Right Box */}
          <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400">
            <div className="text-blue-600 font-bold text-lg mb-2">→</div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">The Billionaire's Bill</h3>
            <p className="text-gray-600">
              The Billionaire's Bill, where billionaires pay their fair share. They pay at a 92% tax rate after their first $10 million. We kickin' Walmart outta here.
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col md:grid md:grid-cols-3 gap-8">
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
              className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-yellow-400"
            >
              <div className="text-blue-600 font-bold text-lg mb-2">→</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How Can You Help Section */}
      <div className="bg-black py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            How Can You Help?
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join our movement to bring real change to Illinois. Every contribution and every voice matters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Volunteering */}
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Volunteering</h3>
            <p className="text-gray-600 mb-6">
              Join our team of dedicated volunteers making a difference in communities across Illinois.
            </p>
            <button
              onClick={() => window.location.href = "/volunteer"}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              Get Involved
            </button>
          </div>

          {/* Donations */}
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
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
          <div className="bg-white rounded-xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
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

      {/* Endorsements Section */}
      <div className="bg-gray-900 py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Endorsements</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Organizations and leaders who believe in our movement for change
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {Array.from({ length: 8 }, (_, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gray-800 border-4 border-blue-500 flex items-center justify-center mb-4">
                <span className="text-white text-xs text-center px-2">Coming Soon!</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Thank You Banner */}
      <div className="bg-yellow-500 py-8 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">
          Thank you to all of our donors, contributors, supporters, and volunteers!
        </h2>
      </div>
    </div>
  );
}


