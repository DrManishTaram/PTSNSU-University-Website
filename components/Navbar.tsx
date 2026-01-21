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
    <nav 
      className={`sticky top-0 z-50 w-full transition-all duration-500 bg-white animate-slide-down ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}
    >
        {/* Row 1: Branding & Actions */}
      <div className="relative bg-white z-30 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.12)] border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-6 xl:max-w-[95%] py-2 md:py-3 min-h-[80px] md:min-h-[100px]">
            
            {/* Desktop Layout: Grid for perfect centering */}
            <div className="grid grid-cols-[auto_1fr_auto] xl:grid-cols-[1fr_auto_1fr] items-center gap-4">

                {/* Left: Mobile Toggle / Spacer */}
                <div className="flex items-center justify-start">
                    <div className="xl:hidden flex items-center gap-3">
                        <button 
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-earth-900 focus:outline-none p-2 hover:bg-gray-100 rounded-md transition-colors"
                        >
                        {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Center: Branding (Logo + Name) */}
                <Link to="/" className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 group cursor-pointer text-center relative z-10 w-full overflow-hidden">
                    <div className="relative flex-shrink-0 transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110 animate-zoom-in">
                        <img 
                        src="/logo.jpg" 
                        alt="Pt. S.N. Shukla University Logo" 
                        className="w-12 h-12 md:w-20 md:h-20 object-contain drop-shadow-md filter contrast-125 hover:brightness-110 transition-all"
                        />
                    </div>
                    <div className="flex flex-col items-center justify-center min-w-0 flex-shrink">
                        <h1 className="font-serif font-extrabold text-[#1a1c20] leading-tight text-[10px] sm:text-sm md:text-xl xl:text-2xl tracking-wide uppercase drop-shadow-sm text-center md:whitespace-nowrap animate-fade-in">
                            Pandit Shambhunath Shukla Vishwavidyalaya, Shahdol (M.P.)
                        </h1>
                        <h2 className="font-serif font-bold text-[#1a1c20] leading-snug text-[10px] sm:text-sm md:text-xl xl:text-2xl tracking-wide mt-0.5 md:mt-1 text-center md:whitespace-nowrap animate-fade-in" style={{ animationDelay: '0.2s' }}>
                            पंडित शंभूनाथ शुक्ल विश्वविद्यालय, शहडोल (म.प्र.)
                        </h2>
                    </div>
                </Link>

                {/* Right: Actions (Search & Mobile Call) */}
                <div className="flex items-center justify-end gap-3 md:gap-4">
                     {/* Desktop Only Actions */}
                    <div className="hidden xl:flex items-center gap-4">
                        <div className="relative group">
                            <button 
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                                className={`transition-all duration-300 p-2.5 rounded-full hover:bg-blue-50 text-blue-600 ${isSearchOpen ? 'bg-blue-50' : 'hover:bg-blue-100'}`}
                            >
                                {isSearchOpen ? <X size={22} strokeWidth={2.5} /> : <Search size={22} strokeWidth={2.5} />}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Call Icon */}
                    <div className="xl:hidden">
                        <a href="tel:123" className="p-2.5 text-blue-600 bg-blue-50 rounded-full border border-blue-100 flex items-center justify-center active:scale-95 transition-transform">
                            <Phone size={20} />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        {/* Search Overlay */}
        <div className={`absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg transition-all duration-300 overflow-hidden ${isSearchOpen ? 'h-20 opacity-100 visible' : 'h-0 opacity-0 invisible'}`}>
            <form onSubmit={handleSearch} className="container mx-auto px-4 h-full flex items-center justify-center">
                <div className="relative w-full max-w-3xl">
                    <input 
                        type="text" 
                        placeholder="Search for courses, departments, notifications..." 
                        className="w-full pl-12 pr-28 py-3 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all text-gray-700"
                        autoFocus={isSearchOpen}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    />
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500" size={20} />
                    <button 
                        type="submit"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Search
                    </button>
                </div>
            </form>
        </div>
      </div>

      {/* Row 2: Navigation Links (Desktop Only) */}
      <div className="hidden xl:block shadow-md" style={{ backgroundColor: '#006eb6', borderBottom: '1px solid #006eb6' }}>
        <div className="container mx-auto px-2 lg:px-4 xl:max-w-[98%]">
            <ul className="flex justify-between items-center gap-4 font-bold text-white">
                {navLinks.map((link) => (
                <li key={link.name} className="relative group flex items-center py-3">
                    <Link 
                    to={link.href || '#'} 
                    className="hover:text-turmeric-400 transition-colors flex items-center gap-1.5 relative z-10 text-[14px] lg:text-[15px] tracking-wide font-semibold whitespace-nowrap"
                    >
                    <span>{link.name}</span>
                    {(link.megaMenu || link.submenu) && (
                        <ChevronDown 
                            size={14} 
                            className="text-blue-300 group-hover:text-turmeric-400 group-hover:rotate-180 transition-all duration-300" 
                            strokeWidth={2.5}
                        />
                    )}
                    </Link>
                    
                    {/* Animated Underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-turmeric-400 transition-all duration-300 group-hover:w-full"></span>

                    {/* Dropdown Menu */}
                    {(link.megaMenu || link.submenu) && (
                    <div className="dropdown-content absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50">
                        <div className={`
                            bg-white/60 backdrop-blur-xl shadow-[0_30px_80px_-10px_rgba(0,0,0,0.25)] 
                            rounded-2xl border border-white/80 overflow-hidden
                            ${link.megaMenu ? 'p-10 w-max max-w-[90vw] grid gap-12' : 'py-3 min-w-[260px] space-y-1'}
                            transform origin-top transition-all duration-300 animate-fade-up
                        `}
                        style={{ gridTemplateColumns: link.megaMenu ? `repeat(${link.megaMenu.length}, minmax(220px, 1fr))` : '1fr' }}
                        >
                             {/* Top Accent Line */}
                             <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-turmeric-500/80 to-transparent"></div>

                            {/* Mega Menu Layout */}
                            {link.megaMenu && link.megaMenu.map((section, idx) => (
                                <div key={idx} className="space-y-4">
                                    <h3 className="font-serif font-bold text-lg border-b border-gray-400/30 pb-3 mb-4 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-turmeric-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
                                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-800 to-blue-600">
                                            {section.title}
                                        </span>
                                    </h3>
                                    <div className="flex flex-col space-y-1">
                                        {section.items.map((subItem) => (
                                            <Link 
                                                key={subItem.name}
                                                to={subItem.href}
                                                className="group/item flex items-center gap-3 px-4 py-3 -mx-2 rounded-xl text-[15px] text-blue-950 hover:text-blue-700 hover:bg-gradient-to-r hover:from-white/60 hover:to-white/20 hover:shadow-sm transition-all duration-300 font-bold relative overflow-hidden"
                                            >
                                                {/* Hover Highlight Line */}
                                                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 scale-y-0 group-hover/item:scale-y-100 transition-transform duration-300 origin-bottom"></div>
                                                
                                                <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center group-hover/item:bg-blue-100 transition-colors shadow-sm">
                                                     <ChevronRight size={14} className="text-blue-700 group-hover/item:text-blue-600 transition-colors" />
                                                </div>
                                                {subItem.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            {/* Standard Submenu Layout */}
                            {link.submenu && link.submenu.map((subItem) => (
                                <Link 
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="flex items-center justify-between px-5 py-3 mx-2 rounded-xl text-sm text-blue-950 hover:text-blue-700 hover:bg-gradient-to-r hover:from-white/60 hover:to-white/20 hover:shadow-sm transition-all duration-300 font-bold group/sub relative overflow-hidden"
                                >
                                     {/* Hover Highlight Line */}
                                     <div className="absolute left-0 top-0 bottom-0 w-1 bg-turmeric-500 scale-y-0 group-hover/sub:scale-y-100 transition-transform duration-300 origin-bottom"></div>

                                    {subItem.name}
                                    <ChevronRight size={16} className="text-blue-950 group-hover/sub:text-blue-600 opacity-70 group-hover/sub:opacity-100 transition-all transform group-hover/sub:translate-x-1" />
                                </Link>
                            ))}
                        </div>
                    </div>
                    )}
                </li>
                ))}
            </ul>
        </div>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 xl:hidden ${
            mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setMobileMenuOpen(false)}
    ></div>

    {/* Mobile Menu Content */}
    <div 
        className={`fixed top-[60px] left-0 w-full bg-white z-40 xl:hidden overflow-y-auto transition-all duration-300 ease-in-out shadow-xl flex flex-col border-t border-gray-100 ${
            mobileMenuOpen ? 'translate-y-0 opacity-100 h-[calc(100vh-60px)]' : '-translate-y-10 opacity-0 h-0 pointer-events-none'
        }`}
    >
        <div className="flex flex-col h-full bg-white">
            <div className="p-4 space-y-1 overflow-y-auto flex-grow pb-24">
                {navLinks.map((link, index) => (
                    <div 
                        key={link.name} 
                        className="border-b border-gray-50 last:border-0"
                        style={{ 
                            animation: mobileMenuOpen ? `fadeUp 0.3s ease-out forwards ${index * 0.05}s` : 'none',
                            opacity: 0 
                        }}
                    >
                        <div 
                            className="flex justify-between items-center py-4 px-2 text-earth-800 font-bold hover:text-turmeric-700 cursor-pointer active:bg-gray-50 rounded-lg transition-colors"
                            onClick={() => (link.megaMenu || link.submenu) ? toggleMobileSubmenu(link.name) : setMobileMenuOpen(false)}
                        >
                            <span className="text-lg font-serif">{link.name}</span>
                            {(link.megaMenu || link.submenu) && (
                                <div className={`p-1 rounded-full transition-all duration-300 ${activeMobileSubmenu === link.name ? 'bg-turmeric-100 text-turmeric-700' : 'text-gray-400'}`}>
                                    <ChevronDown 
                                        size={18} 
                                        className={`transition-transform duration-300 ${activeMobileSubmenu === link.name ? 'rotate-180' : ''}`} 
                                    />
                                </div>
                            )}
                        </div>
                        
                        {/* Mobile Submenu/MegaMenu */}
                        {(link.megaMenu || link.submenu) && (
                            <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-500 ease-in-out ${activeMobileSubmenu === link.name ? 'max-h-[1000px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                                <div className="border-l-2 border-turmeric-200 ml-2 pl-4 py-2 space-y-4">
                                    
                                    {/* Render Mega Menu Categories for Mobile */}
                                    {link.megaMenu && link.megaMenu.map((section, idx) => (
                                        <div key={idx} className="space-y-2">
                                            <h4 className="text-xs font-bold text-turmeric-600 uppercase tracking-widest">{section.title}</h4>
                                            <div className="flex flex-col space-y-2 pl-1">
                                                {section.items.map((item) => (
                                                    <Link 
                                                        key={item.name} 
                                                        to={item.href}
                                                        className="text-gray-600 text-[15px] font-medium hover:text-earth-900"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}

                                    {/* Render Standard Submenu for Mobile */}
                                    {link.submenu && link.submenu.map((subItem) => (
                                        <Link 
                                            key={subItem.name} 
                                            to={subItem.href}
                                            className="block text-[15px] text-gray-600 font-medium hover:text-earth-900"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {subItem.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Action Area */}
            <div className="p-5 bg-gray-50 border-t border-gray-200 mt-auto">
                <Link 
                to="/admission-notification" 
                className="flex items-center justify-center w-full bg-gradient-to-r from-turmeric-600 to-turmeric-500 text-white px-4 py-4 rounded-xl font-bold uppercase tracking-wider hover:shadow-lg transition-all shadow-turmeric-500/20 text-sm gap-2 animate-bounce-small"
                onClick={() => setMobileMenuOpen(false)}
                >
                <span>Apply for Admission</span>
                <ChevronRight size={16} />
                </Link>
                <div className="mt-6 flex justify-center space-x-6 text-gray-400">
                    <span className="text-xs font-medium">© 2025 PSNS Vishwavidyalaya</span>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default Navbar;