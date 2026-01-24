import { Button } from "@/components/Button";
import { Menu, X, Home, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-200 py-3" 
          : "bg-white py-4"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          aria-label="Homepage"
          className="flex items-center gap-2 text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-teal-500 flex items-center justify-center">
            <Home className="w-4 h-4 text-white" />
          </div>
          <span className="text-gray-900">Ibrahim</span>
          <span className="text-blue-600">Ndagiwe</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                activeSection === link.href.substring(1)
                  ? "text-blue-600 bg-blue-50"
                  : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/EngIbrah"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
            aria-label="GitHub Profile"
          >
            GitHub
          </a>
          <Button 
            size="sm" 
            asChild 
            className="bg-blue-600 hover:bg-blue-700 text-white border-0"
          >
            <a href="#contact" className="flex items-center gap-1.5">
              Contact
              <ChevronRight className="w-4 h-4" />
            </a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
          className="md:hidden p-2 text-gray-700 hover:text-blue-600 transition-colors"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        >
          {isMobileMenuOpen ? (
            <X size={24} className="text-gray-700" />
          ) : (
            <Menu size={24} className="text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in">
          <div className="container mx-auto px-6 py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center justify-between px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-blue-600 bg-blue-50"
                    : ""
                }`}
              >
                <span className="font-medium">{link.label}</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-gray-200">
              <a
                href="https://github.com/EngIbrah"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-300 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                GitHub Profile
              </a>
              
              <Button 
                asChild 
                className="w-full mt-3 bg-blue-600 hover:bg-blue-700 text-white border-0"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <a href="#contact" className="flex items-center justify-center gap-2">
                  Contact Me
                  <ChevronRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};