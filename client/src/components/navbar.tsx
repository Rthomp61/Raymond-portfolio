import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { smoothScrollTo } from "@/lib/utils";

interface NavLink {
  name: string;
  href: string;
}

const navLinks: NavLink[] = [
  { name: "Projects", href: "projects" },
  { name: "Resume", href: "resume" },
  { name: "Skills", href: "skills" },
  { name: "About", href: "about" },
  { name: "Metrics", href: "metrics" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if page is scrolled
      setScrolled(window.scrollY > 10);

      // Find which section is currently in view
      const sections = navLinks.map(link => document.getElementById(link.href));
      const scrollPosition = window.scrollY + 100; // Add offset for the navbar

      sections.forEach((section) => {
        if (!section) return;
        
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    smoothScrollTo(href);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-white/90 dark:bg-slate/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800" 
               : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex items-center">
              <h1 className="text-xl font-bold font-space tracking-tight">
                <span className="gradient-text">AI PORTFOLIO</span>
              </h1>
            </a>
          </div>
          
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className={cn(
                  "inline-flex items-center px-1 py-1 text-sm font-medium border-b-2 transition-colors duration-200",
                  activeSection === link.href
                    ? "border-primary text-primary"
                    : "border-transparent hover:border-primary"
                )}
              >
                {link.name}
              </a>
            ))}
            
            <ThemeToggle />
          </div>
          
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle mobile menu"
            >
              <i className="ri-menu-line text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={cn(
        "md:hidden bg-white dark:bg-slate border-b border-gray-200 dark:border-gray-800 transition-all duration-300",
        mobileMenuOpen ? "block" : "hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={cn(
                "block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200",
                activeSection === link.href
                  ? "bg-gray-100 dark:bg-gray-800 text-primary"
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              )}
            >
              {link.name}
            </a>
          ))}
          
          <div className="px-3 py-2">
            <ThemeToggle variant="button" showLabel={true} />
          </div>
        </div>
      </div>
    </nav>
  );
}
