import { useLanguage } from "@/hooks/use-language";
import candidatePhoto from "@assets/IMG_2361_1751061882818.jpg";
import flyerImage from "@assets/Logo Flyer.png"; // This is the flyer you uploaded

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
      {/* ...unchanged code... */}

      {/* How Can You Help */}
      <div className="bg-black py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">How Can You Help?</h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Join our movement to bring real change to Illinois. Every contribution and every voice matters.
          </p>
        </div>

        <div className="flex flex-col gap-8 md:flex-row md:justify-between">
          {/* Volunteering */}
          <div className="bg-white flex-1 rounded-xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857" />
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
          <div className="bg-white flex-1 rounded-xl p-8 text-center shadow-lg">
            <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2" />
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
        </div>
      </div>

      {/* Fundraiser: The Senator’s Cup */}
      <div className="bg-blue-900 py-16 px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 mb-8">Fundraiser: The Senator’s Cup</h2>

        {/* Embedded Video */}
        <div className="mb-10">
          <iframe
            width="100%"
            height="400"
            src="https://www.youtube.com/embed/HUH_y7UDAMk"
            title="The Senator's Cup"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg shadow-lg max-w-3xl mx-auto w-full"
          ></iframe>
        </div>

        {/* Flyer Image */}
        <div className="mb-10">
          <img
            src={flyerImage}
            alt="The Senator's Cup Flyer"
            className="rounded-lg shadow-lg mx-auto max-w-full sm:max-w-xl"
          />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-8">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSeiepqjERqCgBrYhsZKawbjEZWECToNAgsxPqEP__u-UqbkyA/viewform?pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Register Here
          </a>
          <a
            href="https://docs.google.com/document/d/1yTfKDPhoPCdNliP-4DPByo_L3KUPCJtSPCHkVg6ceuw/edit?tab=t.0#heading=h.4h0dyumtx284"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Terms and Conditions
          </a>
          <a
            href="https://discord.com/invite/fhWgytcNVg"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Join The Senator's Cup Discord Server!
          </a>
        </div>
      </div>

      {/* Press */}
      <div className="bg-white flex-1 rounded-xl p-8 text-center shadow-lg mb-16 mx-4">
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0" />
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

      {/* Thank You */}
      <div className="bg-yellow-500 py-8 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-black">
          Thank you to all of our donors, contributors, supporters, and volunteers!
        </h2>
      </div>
    </div>
  );
}
