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
  { name: "Contact", href: "contact" },
];

export function Footer() {
  const handleNavClick = (href: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    smoothScrollTo(href);
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold font-space">Ray Thompson</h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">Est. 2025</p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={(e) => handleNavClick(link.href, e)}
                className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
            >
              <i className="ri-github-fill"></i>
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-colors duration-200"
            >
              <i className="ri-twitter-fill"></i>
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-500 text-sm">© {new Date().getFullYear()} Ray Thompson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
