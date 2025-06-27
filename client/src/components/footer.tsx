import { Link } from "wouter";
import { SiTiktok, SiLinkedin, SiYoutube } from "react-icons/si";
import { Button } from "@/components/ui/button";
import jumpLogo from "@assets/Jump For Senate White Chicago Trans _1751061793394.png";

export default function Footer() {
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
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiTiktok size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiLinkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiYoutube size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/campaign">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Campaign
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/community">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Community
                  </span>
                </Link>
              </li>
              <li>
                <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                  Resources
                </span>
              </li>
              <li>
                <a 
                  href="https://secure.actblue.com/donate" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Donate
                </a>
              </li>
              <li>
                <Link href="/volunteer">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Volunteer
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a 
                  href="mailto:jumpshepherd@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  jumpshepherd@gmail.com
                </a>
              </li>
            </ul>
            <div className="mt-4">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 text-sm font-semibold rounded-none">
                Sign Up for Updates
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
    </footer>
  );
}
