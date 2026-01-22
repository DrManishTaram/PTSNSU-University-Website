import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Phone } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface SubItem {
  name: string;
  href: string;
}

interface MegaMenuSection {
  title: string;
  items: SubItem[];
}

interface NavItem {
  name: string;
  href?: string;
  megaMenu?: MegaMenuSection[]; // Categorized mega menu
  submenu?: SubItem[]; // Standard simple dropdown
}

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  // Track JS-level viewport so we can *conditionally render* the mobile header
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // cleanup resize listener
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [mobileMenuOpen]);

  const navLinks: NavItem[] = [
    { name: 'Home', href: '/' },
    { 
      name: 'About Us', 
      megaMenu: [
        {
          title: 'Overview',
          items: [
            { name: 'University Profile', href: '/about' },
            { name: 'Vision & Mission', href: '/vision-mission' },
            { name: 'History', href: '/history' },
            { name: 'Kulgeet', href: '/kulgeet' }
          ]
        },
        {
          title: 'Leadership',
          items: [
            { name: 'Chancellor\'s Message', href: '/chancellor-message' },
            { name: 'Vice Chancellor\'s Message', href: '/vc-message' }
          ]
        }
      ]
    },
    { 
      name: 'Administration', 
      megaMenu: [
        {
          title: 'Governance',
          items: [
            { name: 'Executive Council', href: '/executive-council' },
            { name: 'Academic Council', href: '/academic-council' },
            { name: 'Finance Committee', href: '/finance-committee' },
            { name: 'Court', href: '/court' }
          ]
        },
        {
          title: 'Officers',
          items: [
            { name: 'Registrar', href: '/registrar' },
            { name: 'Finance Officer', href: '/finance-officer' },
            { name: 'Exam Controller', href: '/exam-controller' }
          ]
        }
      ]
    },
    { 
      name: 'Admission and Fee', 
      megaMenu: [
        {
            title: 'Admission',
            items: [
                { name: 'Admission Notification', href: '/admission-notification' },
                { name: 'Apply Online', href: '/apply-online' },
                { name: 'Entrance Exam', href: '/entrance-exam' }
            ]
        },
        {
            title: 'Fee Details',
            items: [
                { name: 'Fee Structure', href: '/fees' },
                { name: 'Bank Details', href: '/bank-details' }
            ]
        }
      ]
    },
    { 
        name: 'Academics', 
        megaMenu: [
          {
            title: 'Academic Wing',
            items: [
              { name: 'Schools & Departments', href: '/schools-departments' },
              { name: 'Programmes Offered', href: '/programs' },
              { name: 'Academic Calendar', href: '/calendar' },
              { name: 'Syllabus', href: '/syllabus' }
            ]
          }
        ]
    },
    { 
        name: 'Research', 
        megaMenu: [
          {
            title: 'Research',
            items: [
              { name: 'Ph.D. Cell', href: '/phd-cell' },
              { name: 'Ordinance', href: '/ordinance' },
              { name: 'Ongoing Projects', href: '/projects' }
            ]
          }
        ]
    },
    { 
        name: 'Student Life', 
        megaMenu: [
          {
            title: 'Facilities',
            items: [
              { name: 'Hostel', href: '/hostel' },
              { name: 'Library', href: '/library' },
              { name: 'Sports', href: '/sports' },
              { name: 'NCC/NSS', href: '/ncc-nss' },
              { name: 'Club Culture', href: '/club-culture' }
            ]
          }
        ]
    },
    {
        name: 'Information Corner',
        megaMenu: [
            {
                title: 'Updates',
                items: [
                    { name: 'Notices/Circulars', href: '/notices' },
                    { name: 'Tenders', href: '/tenders' },
                    { name: 'Recruitment', href: '/recruitment' },
                    { name: 'RTI', href: '/rti' }
                ]
            }
        ]
    },
    { name: 'Online Services', href: '/online-services' },
    { name: 'Event Gallery', href: '/gallery' }
  ];

  const toggleMobileSubmenu = (name: string) => {
    setActiveMobileSubmenu(activeMobileSubmenu === name ? null : name);
  };

  // Search functionality - searches through all navigation links
  const handleSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    
    if (!searchQuery.trim()) return;
    
    const query = searchQuery.toLowerCase().trim();
    
    // Search through all nav links and their submenus
    for (const link of navLinks) {
      // Check main link name
      if (link.name.toLowerCase().includes(query) && link.href) {
        navigate(link.href);
        setIsSearchOpen(false);
        setSearchQuery('');
        return;
      }
      
      // Check mega menu items
      if (link.megaMenu) {
        for (const section of link.megaMenu) {
          // Check section title
          if (section.title.toLowerCase().includes(query)) {
            if (section.items.length > 0) {
              navigate(section.items[0].href);
              setIsSearchOpen(false);
              setSearchQuery('');
              return;
            }
          }
          // Check individual items
          for (const item of section.items) {
            if (item.name.toLowerCase().includes(query)) {
              navigate(item.href);
              setIsSearchOpen(false);
              setSearchQuery('');
              return;
            }
          }
        }
      }
      
      // Check submenu items
      if (link.submenu) {
        for (const item of link.submenu) {
          if (item.name.toLowerCase().includes(query)) {
            navigate(item.href);
            setIsSearchOpen(false);
            setSearchQuery('');
            return;
          }
        }
      }
    }
    
    // If no match found, navigate to a search results page or show message
    alert(`No results found for "${searchQuery}". Try searching for: Admission, Programs, Hostel, Library, etc.`);
  };
 
  return (
    <>
    <style>{`
      /* Hide TopBar on mobile */
      @media (max-width: 768px) {
        #topbar {
          display: none !important;
        }
      }

      /* Mobile navbar header styles - HORIZONTAL LAYOUT MATCHING DESIGN */
      @media (max-width: 768px) {
        .mobile-navbar-container {
          display: flex !important;
          flex-direction: column !important;
          gap: 0 !important;
          width: calc(100% - 0.25rem) !important;
          padding: 0 !important;
          box-sizing: border-box !important;
          position: relative !important;
          background: white !important;
          border: 2px solid #e0f4ff !important;
          border-radius: 16px !important;
          margin: 0.75rem auto !important;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.06) !important;
          overflow: hidden !important;
        }

        /* Top Section: Logo + Names */
        .mobile-navbar-top {
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.15rem !important;
          padding: 1rem !important;
          width: 100% !important;
          box-sizing: border-box !important;
        }

        .mobile-navbar-logo {
          width: 46px !important;
          height: 46px !important;
          flex-shrink: 0 !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          border-radius: 8px !important;
        }

        .mobile-navbar-logo img {
          width: 100% !important;
          height: 100% !important;
          object-fit: contain !important;
          display: block !important;
        }

        /* Names Container - Right side */
        .mobile-navbar-names {
          display: flex !important;
          flex-direction: column !important;
          align-items: center !important;
          justify-content: center !important;
          gap: 0.3rem !important;
          flex: 1 !important;
          min-width: 0 !important;
          text-align: center !important;
        }

        .mobile-navbar-names h1 {
          font-family: 'Arial', sans-serif !important;
          font-weight: 700 !important;
          font-size: 11px !important;
          line-height: 1.3 !important;
          letter-spacing: -0.3px !important;
          color: #0099ff !important;
          margin: 0 !important;
          padding: 0 !important;
          white-space: normal !important;
          word-break: break-word !important;
          max-width: 100% !important;
          text-align: center !important;
          display: none !important;
        }

        .mobile-navbar-names h2 {
          font-family: 'Arial', sans-serif !important;
          font-weight: 700 !important;
          font-size: 12px !important;
          line-height: 1.1 !important;
          letter-spacing: -0.2px !important;
          color: #0099ff !important;
          margin: 0 !important;
          padding: 0 !important;
          white-space: nowrap !important;
          overflow: hidden !important;
          text-overflow: ellipsis !important;
          max-width: 100% !important;
          text-align: center !important;
        }

        /* Contact Section - Bottom */
        .mobile-navbar-contact {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: space-between !important;
          gap: 0.5rem !important;
          width: 100% !important;
          padding: 0.5rem 0.75rem !important;
          background: #f0f9ff !important;
          border-top: 1px solid #e0f4ff !important;
          box-sizing: border-box !important;
          position: relative !important;
          flex-wrap: wrap !important;
        }

        .mobile-navbar-contact-items {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 0.5rem !important;
          flex: 1 !important;
          min-width: 0 !important;
          flex-wrap: wrap !important;
        }

        .mobile-navbar-contact-item {
          display: flex !important;
          align-items: center !important;
          justify-content: flex-start !important;
          gap: 0.3rem !important;
          font-size: 11px !important;
          color: #0099ff !important;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          white-space: nowrap !important;
        }

        .mobile-navbar-contact-item svg {
          width: 16px !important;
          height: 16px !important;
          color: #0099ff !important;
          flex-shrink: 0 !important;
        }

        /* Hamburger Menu - In contact section on the right */
        .mobile-navbar-hamburger {
          padding: 0.35rem !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          flex-shrink: 0 !important;
          color: #1f2937 !important;
          background: transparent !important;
          border: none !important;
          border-radius: 6px !important;
          transition: all 0.3s ease !important;
          cursor: pointer !important;
          z-index: 10 !important;
          width: 32px !important;
          height: 32px !important;
          margin-left: auto !important;
        }

        .mobile-navbar-hamburger:hover {
          background: #e0f4ff !important;
          transform: scale(1.05) !important;
        }

        .mobile-navbar-hamburger svg {
          color: #1f2937 !important;
          width: 20px !important;
          height: 20px !important;
        }
      }

      /* Responsive adjustments for extra small screens */
      @media (max-width: 360px) {
        .mobile-navbar-top {
          padding: 0.75rem !important;
          gap: 0.5rem !important;
        }

        .mobile-navbar-logo {
          width: 70px !important;
          height: 70px !important;
        }

        .mobile-navbar-names h1 {
          font-size: 10px !important;
        }

        .mobile-navbar-names h2 {
          font-size: 11px !important;
        }

        .mobile-navbar-contact {
          gap: 0.5rem !important;
          padding: 0.6rem 0.75rem !important;
        }

        .mobile-navbar-contact-items {
          gap: 1rem !important;
        }

        .mobile-navbar-contact-item {
          font-size: 11px !important;
        }
      }

      /* Defensive: ensure mobile header is hidden on desktop/laptop even if Tailwind isn't loaded */
      @media (min-width: 768px) {
        .mobile-navbar-container { display: none !important; }
        .mobile-navbar-hamburger { display: none !important; }
      }
    `}</style>
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-500 bg-white animate-slide-down ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
        {/* Row 1: Branding & Actions */}
      <div className="relative bg-white z-30 md:shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] md:border-b md:border-gray-200">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:max-w-[95%] py-2 md:py-3 md:min-h-[60px] sm:md:min-h-[80px] md:min-h-[100px]">
            
            {/* Mobile Layout - HORIZONTAL DESIGN */}
            {isMobile && (
              <div className="mobile-navbar-container">
                {/* Top Section: Logo + Names */}
                <div className="mobile-navbar-top">
                  {/* Logo */}
                  <Link to="/" className="group cursor-pointer flex-shrink-0">
                      <div className="mobile-navbar-logo flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2">
                          <img 
                              src="/logo.jpg" 
                              alt="University Logo" 
                              className="object-contain drop-shadow-md hover:brightness-110 transition-all"
                          />
                      </div>
                  </Link>
                  
                  {/* Names - Right side */}
                  <Link to="/" className="group cursor-pointer flex-1 min-w-0">
                      <div className="mobile-navbar-names">
                          <h1>
                              Pandit Shambhunath Shukla Vishwavidyalaya, Shahdol (M.P.)
                          </h1>
                          <h2>
                              पंडित शंभूनाथ शुक्ल विश्वविद्यालय, शहडोल (म.प्र.)
                          </h2>
                      </div>
                  </Link>
                </div>

                {/* Bottom Section: Contact Information */}
                <div className="mobile-navbar-contact">
                    <div className="mobile-navbar-contact-items">
                        <div className="mobile-navbar-contact-item">
                            <Phone size={18} strokeWidth={2.5} />
                            <span>Phone: 07652-240917</span>
                        </div>
                        <div className="mobile-navbar-contact-item">
                            <span style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#0099ff', fontSize: '14px', fontWeight: 'bold' }}>✉</span>
                            <span>ptsnuniversity@gmail.com</span>
                        </div>
                    </div>
                    {/* Right: Hamburger Menu */}
                    <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="mobile-navbar-hamburger text-gray-700 focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
                    </button>
                </div>
              </div>
            )}

            {/* Mobile menu panel (visible on small screens) */}
            {isMobile && mobileMenuOpen && (
              <div className="md:hidden absolute left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40 animate-slide-down">
                <div className="px-3 py-3">
                  <nav>
                    <ul className="space-y-1">
                      {navLinks.map((link) => (
                        <li key={link.name} className="last:border-b-0 border-b border-gray-100">
                          {/* Simple link (no submenu/mega menu) */}
                          {link.href && !link.megaMenu && !link.submenu ? (
                            <Link to={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-3 text-base font-semibold text-gray-800">
                              {link.name}
                            </Link>
                          ) : (
                            <div>
                              <button
                                type="button"
                                onClick={() => toggleMobileSubmenu(link.name)}
                                className="w-full flex items-center justify-between py-3 text-left"
                              >
                                <span className="font-semibold text-gray-800">{link.name}</span>
                                <ChevronDown className={`transition-transform ${activeMobileSubmenu === link.name ? 'rotate-180' : ''}`} />
                              </button>

                              <div className={`overflow-hidden transition-[max-height] duration-300 ${activeMobileSubmenu === link.name ? 'max-h-[800px] py-2' : 'max-h-0'}`}>
                                {/* megaMenu sections */}
                                {link.megaMenu && link.megaMenu.map((section) => (
                                  <div key={section.title} className="pl-4 pb-2">
                                    <div className="text-sm font-medium text-gray-500 py-1">{section.title}</div>
                                    <ul className="pl-2">
                                      {section.items.map((item) => (
                                        <li key={item.name}>
                                          <Link to={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700">
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}

                                {/* simple submenu items */}
                                {link.submenu && link.submenu.map((item) => (
                                  <div key={item.name} className="pl-4 pb-2">
                                    <Link to={item.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-gray-700">
                                      {item.name}
                                    </Link>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}

            {/* Desktop Layout: Grid for perfect centering */}
            <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center gap-4">

                {/* Left: Spacer */}
                <div></div>

                {/* Center: Branding (Logo + Name) */}
                <Link to="/" className="flex items-center justify-center gap-6 group cursor-pointer text-center relative z-10">
                    <div className="relative flex-shrink-0 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110 animate-zoom-in w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
                        <img 
                            src="/logo.jpg" 
                            alt="Pandit Shambhunath Shukla University Logo" 
                            className="w-full h-full object-contain drop-shadow-md filter contrast-125 hover:brightness-110 transition-all"
                            style={{ width: '100%', height: '100%', maxWidth: '80px', maxHeight: '80px', objectFit: 'contain' }}
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="font-serif font-extrabold leading-tight text-sm sm:text-base md:text-xl lg:text-2xl tracking-wide uppercase drop-shadow-sm text-center animate-fade-in" style={{ color: '#070738' }}>
                            Pandit Shambhunath Shukla Vishwavidyalaya, Shahdol (M.P.)
                        </h1>
                        <h2 className="font-serif font-bold leading-snug text-sm sm:text-base md:text-xl lg:text-2xl tracking-wide mt-1 text-center animate-fade-in" style={{ animationDelay: '0.2s', color: '#070738' }}>
                            पंडित शंभूनाथ शुक्ल विश्वविद्यालय, शहडोल (म.प्र.)
                        </h2>
                    </div>
                </Link>

                {/* Right: Search Action */}
                <div className="flex items-center justify-end">
                    <div className="relative group">
                        <button 
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className={`transition-all duration-300 p-2.5 rounded-full hover:bg-blue-50 text-blue-600 ${isSearchOpen ? 'bg-blue-50' : 'hover:bg-blue-100'}`}
                        >
                            {isSearchOpen ? <X size={20} strokeWidth={2.5} /> : <Search size={20} strokeWidth={2.5} />}
                        </button>
                    </div>
                </div>
            </div>
        </div>

        {/* Search Overlay */}
        <div className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden z-50 ${isSearchOpen ? 'h-14 sm:h-16 opacity-100 visible' : 'h-0 opacity-0 invisible'}`}>
            <form onSubmit={handleSearch} className="container mx-auto px-2 sm:px-4 h-full flex items-center justify-center">
                <div className="relative w-full max-w-lg">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="w-full pl-9 sm:pl-10 pr-16 sm:pr-20 py-1.5 sm:py-2 bg-white border-2 border-blue-500 rounded-full focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-gray-700 text-sm"
                        autoFocus={isSearchOpen}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-600" size={18} strokeWidth={2.5} />
                    <button 
                        type="submit"
                        className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;