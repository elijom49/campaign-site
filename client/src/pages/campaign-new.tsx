{/* How Can You Help Section */}
<div className="bg-black py-16 px-4">
  <div className="max-w-6xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        How Can You Help?
      </h2>
      <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
        Join our movement to bring real change to Illinois. Every contribution and every voice matters.
      </p>
    </div>

    {/* Force vertical stacking on small screens */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-3">
      {/* Volunteering */}
      <div className="w-full bg-white rounded-xl p-8 text-center shadow-lg">
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
          onClick={() => window.location.href = '/volunteer'}
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors cursor-pointer"
        >
          Get Involved
        </button>
      </div>

      {/* Donations */}
      <div className="w-full bg-white rounded-xl p-8 text-center shadow-lg">
        <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Donations</h3>
        <p className="text-gray-600 mb-6">
          Support our grassroots movement with a contribution that helps us reach more voters.
        </p>
        <a href="https://secure.actblue.com/donate/jumpforsenate" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
          Donate Now
        </a>
      </div>

      {/* Press */}
      <div className="w-full bg-white rounded-xl p-8 text-center shadow-lg">
        <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">Press</h3>
        <p className="text-gray-600 mb-6">
          Media inquiries and press-related questions for our campaign.
        </p>
        <a href="mailto:blue@jump2026.com" className="inline-block bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
          Contact Us
        </a>
      </div>
    </div>
  </div>
</div>
