import { useState } from "react";
import { Link } from "wouter";
import { SiTiktok, SiLinkedin, SiYoutube, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/use-language";
import SignupModal from "@/components/signup-modal";
import jumpLogo from "@assets/Jump For Senate White Chicago Trans _1751061793394.png";

export default function Footer() {
  const { t } = useLanguage();
  const [showSignupModal, setShowSignupModal] = useState(false);
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <img 
              src={jumpLogo} 
              alt="Jump for Senate Logo" 
              className="h-12 w-auto mb-4"
            />
            <div className="flex space-x-4 mb-6">
              <a href="https://www.tiktok.com/@jumpforsenate" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <SiTiktok size={24} />
              </a>
              <a href="https://www.youtube.com/@JumpForSenate" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <SiYoutube size={24} />
              </a>
              <a href="https://www.instagram.com/jumpforsenate" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <SiInstagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.connect')}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {t('nav.about')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/campaign">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {t('nav.campaign')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/community">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {t('nav.community')}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/community">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Voting Resources
                  </span>
                </Link>
              </li>
              <li>
                <a 
                  href="https://secure.actblue.com/donate/jumpforsenate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('home.donate')}
                </a>
              </li>
              <li>
                <Link href="/volunteer">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    {t('nav.volunteer')}
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">{t('footer.contact')}</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="mailto:blue@jump2026.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  blue@jump2026.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Button 
                onClick={() => setShowSignupModal(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-semibold rounded-none"
              >
                {t('footer.signUpUpdates')}
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8 text-center">
          <p className="text-gray-400">
            &copy; 2024 Jump for Senate. Paid for by Jump for Senate Committee. All rights reserved.
          </p>
        </div>
      </div>
      
      <SignupModal 
        isOpen={showSignupModal} 
        onClose={() => setShowSignupModal(false)} 
      />
    </footer>
  );
}
