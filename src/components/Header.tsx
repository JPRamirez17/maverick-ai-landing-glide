
import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const languageOptions = [
    { code: 'it', label: '🇮🇹 Italiano' },
    { code: 'en', label: '🇬🇧 English' },
    { code: 'fr', label: '🇫🇷 Français' },
    { code: 'es', label: '🇪🇸 Español' }
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-4 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="text-xl font-bold">
          <span className="text-slate-900">Maverick</span>
          <span className="text-purple-600">AI</span>
        </div>
        <nav className="flex items-center">
          <ul className="flex space-x-4 md:space-x-6 uppercase text-xs tracking-wider font-medium mr-4">
            {[
              { key: 'about', href: '#about' },
              { key: 'product', href: '#product' },
              { key: 'features', href: '#features' },
              { key: 'contacts', href: '#contacts' }
            ].map((item) => (
              <li key={item.key}>
                <a 
                  href={item.href}
                  className="text-slate-800 hover:text-purple-600 py-2 relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-purple-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
                >
                  {t(`header.${item.key}`)}
                </a>
              </li>
            ))}
          </ul>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-md p-2 text-slate-800 hover:text-purple-600 hover:bg-slate-100 focus:outline-none">
              <Globe className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languageOptions.map((option) => (
                <DropdownMenuItem 
                  key={option.code}
                  className={cn(
                    "cursor-pointer",
                    language === option.code && "bg-slate-100"
                  )}
                  onClick={() => setLanguage(option.code as 'it' | 'en' | 'fr' | 'es')}
                >
                  {option.label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  );
};

export default Header;
