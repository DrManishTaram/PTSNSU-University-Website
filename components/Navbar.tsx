import React, { useState, useEffect } from 'react';
import { Search, Menu, X, ChevronDown, Phone, ChevronRight } from 'lucide-react';
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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

      /* Mobile navbar header styles */
      @media (max-width: 768px) {
        .mobile-navbar-container {
          display: flex !important;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          width: 100%;
          padding-left: 0.5rem;
          padding-right: 0.5rem;
          box-sizing: border-box;
        }
        .mobile-navbar-branding {
          display: flex !important;
          align-items: center;
          justify-content: flex-start;
          gap: 0.5rem;
          flex: 1;
          min-width: 0;
          overflow: visible;
        }
        .mobile-navbar-names {
          display: flex !important;
          flex-direction: column;
          justify-content: center;
          align-items: center; /* center both names horizontally */
          text-align: center;
          flex: 1;
          min-width: 0;
          overflow: visible;
        }
        /* Reduce English name size to avoid cropping on small screens; allow wrapping if needed */
        .mobile-navbar-names h1 {
          font-family: serif;
          font-weight: 700;
          font-size: clamp(7px, 2.2vw, 9px) !important; /* reduced so it fits better */
          line-height: 1.0; /* tighter to allow up to two lines without huge height */
          letter-spacing: 0.01em;
          text-transform: uppercase;
          color: #070738;
          margin: 0;
          padding: 0;
          white-space: normal; /* allow wrapping instead of forcing ellipsis */
          overflow: visible;
          text-overflow: unset;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* visually limit to two lines */
          -webkit-box-orient: vertical;
          max-width: 100%;
          word-break: break-word;
        }
        /* Hindi name centered and allowed to wrap if necessary */
        .mobile-navbar-names h2 {
          font-family: serif;
          font-weight: 700;
          font-size: clamp(9px, 3.2vw, 11px) !important;
          line-height: 1.05;
          letter-spacing: 0.02em;
          color: #070738;
          margin: 0;
          padding: 0;
          white-space: normal; /* allow wrapping for devanagari */
          overflow: visible;
          text-overflow: unset;
          overflow-wrap: anywhere; /* support devanagari breaks */
          display: block;
        }
        .mobile-navbar-logo {
          width: 36px !important;
          height: 36px !important;
          flex-shrink: 0;
        }
        .mobile-navbar-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          display: block;
        }
        .mobile-navbar-hamburger {
          padding: 0.5rem;
          display: flex !important;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        /* Make English and Hindi names equal size on mobile and prevent wrapping
           by using nowrap + ellipsis. Keep them centered and readable. */
        .mobile-navbar-names h1,
        .mobile-navbar-names h2 {
          font-family: serif;
          font-weight: 700;
          font-size: clamp(9px, 3vw, 11px) !important; /* same size for both */
          line-height: 1;
          letter-spacing: 0.01em;
          color: #070738;
          margin: 0;
          padding: 0;
          white-space: nowrap; /* keep single line */
          overflow: hidden;
          text-overflow: ellipsis; /* show ellipsis if space is insufficient */
          display: block;
          max-width: 100%;
        }
        .mobile-navbar-names h1 { text-transform: uppercase; }
      }

      /* Extra small screens: slightly reduce logo to give more text width */
      @media (max-width: 360px) {
        .mobile-navbar-logo {
          width: 28px !important;
          height: 28px !important;
        }
        /* Allow wrapping on very small screens and reduce font so name doesn't get cropped */
        .mobile-navbar-names h1 {
          font-size: clamp(7px, 3.6vw, 9px) !important;
          white-space: normal; /* allow wrapping */
          overflow: visible;
          text-overflow: unset;
          display: -webkit-box;
          -webkit-line-clamp: 2; /* keep max two lines */
          -webkit-box-orient: vertical;
          line-height: 1.0;
        }
        .mobile-navbar-names h2 { font-size: clamp(8px, 3.6vw, 10px) !important; }
        .mobile-navbar-names h1,
        .mobile-navbar-names h2 {
          font-size: clamp(8px, 3.6vw, 10px) !important;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          line-height: 1;
        }
      }

      /* Desktop navbar header styles */
      @media (min-width: 769px) {
        .mobile-navbar-container {
          display: none !important;
        }
      }
    `}</style>
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-500 bg-white animate-slide-down ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
        {/* Row 1: Branding & Actions */}
      <div className="relative bg-white z-30 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] border-b border-gray-200">
        <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:max-w-[95%] py-2 md:py-3 min-h-[60px] sm:min-h-[80px] md:min-h-[100px]">
            
            {/* Mobile Layout */}
            <div className="mobile-navbar-container">
                {/* Left/Center: Logo + Names (fills most space) */}
                <Link to="/" className="group cursor-pointer mobile-navbar-branding">
                    {/* Logo */}
                    <div className="mobile-navbar-logo flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                        <img 
                            src="/logo.jpg" 
                            alt="University Logo" 
                            className="object-contain drop-shadow-md hover:brightness-110 transition-all"
                            style={{ filter: 'contrast(1.25)' }}
                        />
                    </div>
                    
                    {/* Names */}
                    <div className="mobile-navbar-names">
                        <h1>
                            Pandit Shambhunath Shukla Vishwavidyalaya, Shahdol (M.P.)
                        </h1>
                        <h2>
                            पंडित शंभूनाथ शुक्ल विश्वविद्यालय, शहडोल (म.प्र.)
                        </h2>
                    </div>
                </Link>

                {/* Right: Hamburger Menu */}
                <button 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="mobile-navbar-hamburger text-earth-900 focus:outline-none hover:bg-gray-100 rounded-md transition-colors"
                >
                    {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </button>
            </div>

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
        <div className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${isSearchOpen ? 'h-16 sm:h-20 opacity-100 visible' : 'h-0 opacity-0 invisible'}`}>
            <form onSubmit={handleSearch} className="container mx-auto px-2 sm:px-4 h-full flex items-center justify-center">
                <div className="relative w-full max-w-3xl">
                    <input 
                        type="text" 
                        placeholder="Search..." 
                        className="w-full pl-9 sm:pl-12 pr-20 sm:pr-28 py-2 sm:py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-700 text-sm sm:text-base"
                        autoFocus={isSearchOpen}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <Search className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-blue-500 sm:size-20" size={16} />
                    <button 
                        type="submit"
                        className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-3 sm:px-6 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-semibold hover:bg-blue-700 transition-colors"
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