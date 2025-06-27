import { Link } from "wouter";
import { SiTiktok, SiLinkedin, SiYoutube, SiFacebook, SiX, SiInstagram } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold campaign-blue mb-4">JUMP</div>
            <p className="text-gray-300 mb-4">
              Fighting for working families in the U.S. Senate. Together, we can build a better future for all.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiFacebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiX size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiInstagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <SiTiktok size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <span className="text-gray-300 hover:text-white transition-colors cursor-pointer">
                    Home
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
              <li>Email: info@jumpforsenate.com</li>
              <li>Phone: (312) 555-0123</li>
              <li>Address: Chicago, IL</li>
            </ul>
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
