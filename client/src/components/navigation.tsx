import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/campaign", label: "Campaign" },
    { href: "/community", label: "Community" },
    { href: "/volunteer", label: "Volunteer" },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location === "/") return true;
    if (href !== "/" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-xl sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/">
              <div className="relative group cursor-pointer">
                <div className="w-24 h-12 gradient-primary rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
                  <span className="text-white font-black text-lg tracking-wider">JUMP</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-campaign-yellow rounded-full animate-pulse"></div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <span
                    className={`px-6 py-3 text-lg font-bold transition-all duration-300 cursor-pointer rounded-xl ${
                      isActive(item.href)
                        ? "gradient-primary text-white shadow-lg transform scale-105"
                        : "text-gray-900 hover:text-white hover:bg-gradient-to-r hover:from-campaign-blue hover:to-campaign-purple hover:shadow-lg hover:scale-105"
                    }`}
                  >
                    {item.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <span
                  className={`block px-3 py-2 text-base font-medium cursor-pointer ${
                    isActive(item.href)
                      ? "campaign-blue"
                      : "text-gray-900 hover:text-blue-600"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
