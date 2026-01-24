import React, { useState, useEffect } from 'react';
import { Search, Menu, Phone, Mail } from 'lucide-react';
import { useSearch } from '../context/SearchContext';
import { useMobileMenu } from '../context/MobileMenuContext';

const FormalHeader: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { openSearch } = useSearch();
  const { toggleMobileMenu } = useMobileMenu();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      // Hysteresis loop to prevent flickering
      // Only switch to scrolled (shrunk) state if user scrolls down past 100px
      // Only switch back to full state if user scrolls up past 50px
      setIsScrolled(prev => {
        if (!prev && currentScroll > 100) return true;
        if (prev && currentScroll < 50) return false;
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Mobile Sticky Header - Only visible on mobile */}
      <div className="md:hidden sticky top-0 z-[100] w-full bg-white shadow-md flex flex-col h-28">
        {/* Top Section - 70% Height - Navy Blue */}
        <div className="h-[70%] w-full bg-[#071133] flex items-center justify-center px-1 gap-1">
          {/* Logo - Round Shape */}
          <div className="flex-shrink-0 bg-white rounded-full p-1 h-11 w-11 flex items-center justify-center overflow-hidden">
            <img
              src="/logo.jpg"
              alt="PTSNSU Logo"
              className="h-full w-full object-contain"
            />
          </div>
          {/* University Names - Centered */}
          <div className="flex flex-col justify-center items-center text-center min-w-0">
            <h1
              className="text-white font-bold text-[11px] leading-tight uppercase"
              style={{
                fontFamily: '"Noto Serif", serif',
                fontWeight: 700
              }}
            >
              PANDIT SHAMBHUNATH SHUKLA VISHWAVIDYALAYA, SHAHDOL (M.P.)
            </h1>
            <h2
              className="text-white font-bold text-[13px] leading-tight mt-2"
              style={{
                fontFamily: '"Noto Serif Devanagari", serif',
                fontWeight: 700
              }}
            >
              पंडित शंभूनाथ शुक्ला विश्वविद्यालय, शहडोल (म.प्र.)
            </h2>
          </div>
        </div>

        {/* Bottom Section - 30% Height - Light Blue */}
        <div className="h-[30%] w-full bg-blue-100 flex items-center justify-between px-4">
          {/* Contact Info - Styled Icons */}
          <div className="flex items-center gap-4 w-full justify-start pl-10">
            <div className="flex items-center gap-2">
              <div className="bg-[#071133] rounded-full p-1 flex items-center justify-center shadow-sm">
                <Phone size={10} className="text-white" />
              </div>
              <span className="text-[#071133] text-[10px] font-semibold">07653-252525</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="bg-[#071133] rounded-full p-1 flex items-center justify-center shadow-sm">
                <Mail size={10} className="text-white" />
              </div>
              <span className="text-[#071133] text-[10px] font-semibold">info@ptsnsu.ac.in</span>
            </div>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={toggleMobileMenu}
            className="p-1 hover:bg-blue-200 rounded-md transition-colors flex-shrink-0"
            aria-label="Open Menu"
          >
            <Menu size={24} className="text-[#071133]" />
          </button>
        </div>
      </div>

      {/* Desktop Header - Hidden on mobile */}
      <div
        className={`hidden md:block w-full bg-white shadow-sm transition-all duration-300 ${isScrolled ? 'py-1' : ''
          }`}
      >
        <div className={`container mx-auto px-4 relative transition-all duration-300 ${isScrolled ? 'py-1' : 'py-2 md:py-3'
          }`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2">

            {/* Center: Logo + Text Content */}
            <div className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'gap-2' : 'gap-3 md:gap-4'
              }`}>





              {/* Logo */}
              <div className="flex-shrink-0">
                <img
                  src="/logo.jpg"
                  alt="PTSNSU Logo"
                  className={`w-auto object-contain transition-all duration-300 ${isScrolled ? 'h-6 md:h-8' : 'h-12 md:h-16'
                    }`}
                />
              </div>

              {/* Text Content */}
              <div className="flex flex-col items-center justify-center text-center space-y-1">
                {/* English Title - Cinzel Bold */}
                <h1
                  className={`font-bold tracking-wide uppercase leading-tight transition-all duration-300 ${isScrolled
                    ? 'text-xs sm:text-sm md:text-base lg:text-lg'
                    : 'text-base sm:text-lg md:text-xl lg:text-2xl'
                    }`}
                  style={{
                    fontFamily: '"Noto Serif", serif',
                    fontWeight: 700,
                    color: '#191970'
                  }}
                >
                  PANDIT SHAMBHUNATH SHUKLA VISHWAVIDYALAYA, SHAHDOL (M.P.)
                </h1>

                {/* Hindi Title - Noto Serif Devanagari - Hidden when scrolled */}
                {!isScrolled && (
                  <h2
                    className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-tight mt-1 transition-all duration-300"
                    style={{
                      fontFamily: '"Noto Serif Devanagari", serif',
                      fontWeight: 700,
                      color: '#191970'
                    }}
                  >
                    पंडित शंभूनाथ शुक्ला विश्‍वविद्यालय, शहडोल (म.प्र.)
                  </h2>
                )}
              </div>


            </div>

          </div>

          {/* Search Icon - Absolute Right */}
          {/* Search Icon - Absolute Right - Visible only when scrolled */}
          <button
            onClick={openSearch}
            className={`absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-1.5 lg:gap-2 group cursor-pointer transition-all duration-300 ${isScrolled ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-4'
              }`}
            aria-label="Search"
          >
            <div className="p-1.5 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors shadow-sm">
              <Search size={16} className="text-white group-hover:text-white transition-colors" />
            </div>
            <span className="text-xs text-blue-800 group-hover:text-blue-600 transition-colors tracking-wide font-semibold hidden lg:inline">Search</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FormalHeader;