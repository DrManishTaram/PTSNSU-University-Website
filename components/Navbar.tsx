import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronRight, X, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useMobileMenu } from '../context/MobileMenuContext';

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
  megaMenu?: MegaMenuSection[];
}

const Navbar: React.FC = () => {
  const { isMobileMenuOpen, closeMobileMenu } = useMobileMenu();
  const [mobileExpandedMenu, setMobileExpandedMenu] = useState<string | null>(null);
  const navLinks: NavItem[] = [
    { name: 'Home', href: '/' },
    {
      name: 'About Us',
      megaMenu: [
        {
          title: 'Overview', // Single section, will be split automatically by our new logic because items > 6
          items: [
            { name: "Chancellor's Message", href: '/chancellor-message' },
            { name: "Vice Chancellor's Message", href: '/vc-message' },
            { name: 'Overview', href: '/overview' },
            { name: 'युगदृष्टा पंडित शंभूनाथ शुक्ल', href: '/shambhunath-shukla' },
            { name: 'Vision & Mission', href: '/vision-mission' },
            { name: 'Act, Statutes and Ordinances', href: '/act-statutes' },
            { name: 'List of Affiliated Colleges', href: '/affiliated-colleges' },
            { name: 'Kulgeet', href: '/kulgeet' },
            { name: 'Virtual Tour', href: '/virtual-tour' }
          ]
        }
      ]
    },
    {
      name: 'Administration',
      megaMenu: [
        {
          title: 'Governance', // Single section, will be split automatically because items > 6
          items: [
            { name: 'Chancellor', href: '/chancellor' },
            { name: 'Vice-Chancellor', href: '/vc' },
            { name: 'Registrar', href: '/registrar' },
            { name: 'Exam Controller', href: '/exam-controller' },
            { name: 'Executive Council', href: '/executive-council' },
            { name: 'Finance Officer', href: '/finance-officer' },
            { name: 'Deans of Faculties', href: '/deans' },
            { name: 'DSW', href: '/dsw' },
            { name: 'Premises In-Charge', href: '/premises-in-charge' },
            { name: 'Heads Of Departments', href: '/hods' },
            { name: 'Ombudsperson', href: '/ombudsperson' },
            { name: 'IT Cell', href: '/it-cell' },
            { name: 'Administrative Login', href: '/admin-login' }
          ]
        }
      ]
    },
    {
      name: 'Admission and Fee',
      megaMenu: [
        {
          title: 'Admission', // Items < 6, so this will stay 1 column
          items: [
            { name: 'Admission Notification', href: '/admission-notification' },
            { name: 'Entrance Exam', href: '/entrance-exam' },
            { name: 'Fee Refund Policy', href: '/fee-refund-policy' }
          ]
        }
      ]
    },
    {
      name: 'Academics',
      megaMenu: [
        {
          title: 'Academic Wing', // Single section, will be split automatically because items > 6
          items: [
            { name: 'Details of Academic Programs', href: '/academic-programs' },
            { name: 'Schools & Departments', href: '/schools-departments' },
            { name: 'IQAC Cell', href: '/iqac' },
            { name: 'Finishing School', href: '/finishing-school' },
            { name: 'Central Library', href: '/library' },
            { name: 'भारतीय ज्ञान परंपरा', href: '/indian-knowledge-system' },
            { name: 'PhD', href: '/phd' },
            { name: 'Syllabus NEP', href: '/syllabus-nep' },
            { name: 'Scholarships', href: '/scholarships' },
            { name: 'Academic Calendar', href: '/calendar' },
            { name: 'Convocation', href: '/convocation' }
          ]
        }
      ]
    },
    {
      name: 'Research',
      megaMenu: [
        {
          title: 'Research', // Items < 6, so this will stay 1 column
          items: [
            { name: 'Research and Development', href: '/research-development' },
            { name: 'Patent', href: '/patent' }
          ]
        }
      ]
    },
    {
      name: 'Student Life',
      megaMenu: [
        {
          title: 'Facilities & Support', // Items > 6, so this will split into 2 columns
          items: [
            { name: 'Student Portal', href: '/student-portal' },
            { name: 'Campus', href: '/campus' },
            { name: 'Sports Facilities', href: '/sports' },
            { name: 'Placement Cell', href: '/placement-cell' },
            { name: 'Anti Ragging Cell', href: '/anti-ragging' },
            { name: 'Academic Bank Of Credit (ABC)', href: '/abc' },
            { name: 'National Cadet Corps (NCC)', href: '/ncc' },
            { name: 'National Service Scheme (NSS)', href: '/nss' },
            { name: 'Student Grievance Cell', href: '/grievance-cell' },
            { name: 'Equal Opportunity Cell', href: '/equal-opportunity' },
            { name: 'Student Council', href: '/student-council' },
            { name: 'Club Culture', href: '/club-culture' }
          ]
        }
      ]
    },
    {
      name: 'Information Corner',
      megaMenu: [
        {
          title: 'Information', // Items <= 6, so this will stay 1 column
          items: [
            { name: 'RTI Cell', href: '/rti-cell' },
            { name: 'Tender Notice', href: '/tender-notice' },
            { name: 'Tender List', href: '/tender-list' },
            { name: 'External Links', href: '/external-links' },
            { name: 'Our Concerns and Directions', href: '/concerns-directions' },
            { name: "Vice-Chancellor's Communique", href: '/vc-communique' }
          ]
        }
      ]
    },
    { name: 'Online Services', href: '/online-services' },
    { name: 'Event Gallery', href: '/gallery' },
    { name: 'NAAC', href: '/naac' }
  ];

  // Helper function to count total items in mega menu
  const getTotalItems = (megaMenu: MegaMenuSection[]) => {
    return megaMenu.reduce((total, section) => total + section.items.length, 0);
  };

  // Helper to split menu into balanced columns if items > 6
  const getMenuColumns = (megaMenu: MegaMenuSection[], totalItems: number): [MegaMenuSection[], MegaMenuSection[]] => {
    if (totalItems <= 6) return [megaMenu, []];

    // Case 1: Single Section -> Split Items
    if (megaMenu.length === 1) {
      const section = megaMenu[0];
      const mid = Math.ceil(section.items.length / 2);
      return [
        [{ ...section, items: section.items.slice(0, mid) }],
        [{ ...section, title: '', items: section.items.slice(mid) }] // Empty title for alignment
      ];
    }

    // Case 2: Multiple Sections -> Balance Sections
    const left: MegaMenuSection[] = [];
    const right: MegaMenuSection[] = [];
    let leftCount = 0;
    const half = totalItems / 2;

    megaMenu.forEach(section => {
      // Fill left column until it reaches roughly half, but ensure at least one section in left
      if (leftCount < half || left.length === 0) {
        left.push(section);
        leftCount += section.items.length;
      } else {
        right.push(section);
      }
    });

    return [left, right];
  };

  return (
    <>
      <div className="hidden md:block bg-[#071133] shadow-md relative z-50">
        <nav className="max-w-screen-xl mx-auto px-4">
          {/* Decreased vertical padding (py-0) and use flex items to define height */}
          <div className="flex justify-center items-center gap-1 text-[13px] font-medium text-white h-[45px]">

            {navLinks.map(link => {
              const totalItems = link.megaMenu ? getTotalItems(link.megaMenu) : 0;
              const useTwoColumns = totalItems > 6;
              const [leftCol, rightCol] = (useTwoColumns && link.megaMenu)
                ? getMenuColumns(link.megaMenu, totalItems)
                : [[], []];

              return (
                <div
                  key={link.name}
                  className="relative group h-full flex items-center"
                >
                  {link.href ? (
                    <Link
                      to={link.href}
                      className="px-3 py-1.5 inline-flex items-center gap-1 whitespace-nowrap rounded transition-all duration-200 hover:bg-[#3b82f6]/20 hover:text-blue-200"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    <button className="px-3 py-1.5 inline-flex items-center gap-1 whitespace-nowrap rounded transition-all duration-200 hover:bg-[#3b82f6]/20 hover:text-blue-200 cursor-default">
                      {link.name}
                      {link.megaMenu && (
                        <ChevronDown
                          size={12}
                          className="transition-transform duration-300 group-hover:rotate-180"
                        />
                      )}
                    </button>
                  )}

                  {/* MEGA MENU DROPDOWN */}
                  {link.megaMenu && (
                    <div
                      className="absolute left-0 top-full pt-0 w-max min-w-[300px] transition-all duration-200 ease-out origin-top-left opacity-0 invisible -translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 text-left"
                    >
                      <div className="bg-white/95 backdrop-blur-md shadow-xl rounded-lg border-t-2 border-blue-600 overflow-hidden ring-1 ring-black/5 mt-1">
                        <div className="p-5">
                          {useTwoColumns ? (
                            // Two-column layout for > 6 items
                            <div className="grid grid-cols-2 gap-8 relative">
                              {/* Left Column */}
                              <div className="space-y-5">
                                {leftCol.map((section, idx) => (
                                  <div key={idx + section.title}>
                                    <div className={`flex items-center gap-2 mb-3 pb-2 border-b border-gray-100 ${!section.title ? 'invisible' : ''}`}>
                                      <span className="w-1 h-4 bg-blue-600 rounded-full" />
                                      <h4 className="text-xs font-bold uppercase text-[#071133] tracking-wide">
                                        {section.title || 'Spacer'}
                                      </h4>
                                    </div>
                                    <ul className="space-y-0.5">
                                      {section.items.map(item => (
                                        <li key={item.name}>
                                          <Link
                                            to={item.href}
                                            className="block px-2 py-1.5 rounded text-[13px] text-blue-700 font-medium hover:text-blue-900 hover:bg-pink-50 transition-all duration-200 group/item flex items-center gap-2"
                                          >
                                            <div className="w-1 h-1 rounded-full bg-blue-400 group-hover/item:bg-blue-600 transition-colors" />
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>

                              {/* Right Column */}
                              <div className="space-y-5">
                                {rightCol.map((section, idx) => (
                                  <div key={idx + section.title}>
                                    {/* Render header invisibly if title is empty to keep alignment */}
                                    <div className={`flex items-center gap-2 mb-3 pb-2 border-b border-gray-100 ${!section.title ? 'invisible select-none' : ''}`}>
                                      <span className="w-1 h-4 bg-blue-600 rounded-full" />
                                      <h4 className="text-xs font-bold uppercase text-[#071133] tracking-wide">
                                        {section.title || 'Spacer'}
                                      </h4>
                                    </div>
                                    <ul className="space-y-0.5">
                                      {section.items.map(item => (
                                        <li key={item.name}>
                                          <Link
                                            to={item.href}
                                            className="block px-2 py-1.5 rounded text-[13px] text-blue-700 font-medium hover:text-blue-900 hover:bg-pink-50 transition-all duration-200 group/item flex items-center gap-2"
                                          >
                                            <div className="w-1 h-1 rounded-full bg-blue-400 group-hover/item:bg-blue-600 transition-colors" />
                                            {item.name}
                                          </Link>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>

                              {/* Vertical separator between columns */}
                              <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-blue-600/30" />
                            </div>
                          ) : (
                            // Single column layout for ≤ 6 items
                            <div className="space-y-5">
                              {link.megaMenu.map(section => (
                                <div key={section.title}>
                                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                                    <span className="w-1 h-4 bg-blue-600 rounded-full" />
                                    <h4 className="text-xs font-bold uppercase text-[#071133] tracking-wide">
                                      {section.title}
                                    </h4>
                                  </div>

                                  <ul className="space-y-0.5">
                                    {section.items.map(item => (
                                      <li key={item.name}>
                                        <Link
                                          to={item.href}
                                          className="block px-2 py-1.5 rounded text-[13px] text-blue-700 font-medium hover:text-blue-900 hover:bg-pink-50 transition-all duration-200 group/item flex items-center gap-2"
                                        >
                                          <div className="w-1 h-1 rounded-full bg-blue-400 group-hover/item:bg-blue-600 transition-colors" />
                                          {item.name}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}

          </div>
        </nav>
      </div>

      {/* Mobile Sidebar - Only visible on mobile */}
      <>
        {/* Backdrop Overlay */}
        {isMobileMenuOpen && (
          <div
            className="md:hidden fixed inset-0 bg-black/50 z-[90] transition-opacity duration-300"
            onClick={closeMobileMenu}
          />
        )}

        {/* Sidebar */}
        <div
          className={`md:hidden fixed top-0 right-0 h-full w-[70%] bg-white shadow-2xl z-[100] transform transition-transform duration-300 ease-in-out overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Sidebar Header */}
          <div className="sticky top-0 bg-gray-100 text-black p-4 flex items-center justify-between shadow-md z-10">
            <h2 className="text-lg font-bold">Menu</h2>
            <button
              onClick={closeMobileMenu}
              className="p-2 hover:bg-gray-200 rounded-md transition-colors"
              aria-label="Close Menu"
            >
              <ChevronRight size={24} className="text-black" />
            </button>
          </div>

          {/* Sidebar Navigation */}
          <nav className="p-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  {link.href ? (
                    // Simple link without submenu
                    <Link
                      to={link.href}
                      onClick={closeMobileMenu}
                      className="block px-4 py-3 text-[#071133] font-semibold rounded-md hover:bg-blue-50 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ) : (
                    // Accordion for mega menu
                    <div>
                      <button
                        onClick={() =>
                          setMobileExpandedMenu(
                            mobileExpandedMenu === link.name ? null : link.name
                          )
                        }
                        className="w-full flex items-center justify-between px-4 py-3 text-[#071133] font-semibold rounded-md hover:bg-blue-50 transition-colors"
                      >
                        <span>{link.name}</span>
                        <Plus
                          size={18}
                          className={`text-blue-600 transition-transform duration-200 ${mobileExpandedMenu === link.name ? 'rotate-45' : ''
                            }`}
                        />
                      </button>

                      {/* Submenu Items */}
                      {mobileExpandedMenu === link.name && link.megaMenu && (
                        <div className="mt-2 ml-4 space-y-1 border-l-2 border-blue-200 pl-4">
                          {link.megaMenu.map((section, sectionIdx) => (
                            <div key={sectionIdx}>
                              {section.title && (
                                <h4 className="text-xs font-bold uppercase text-blue-600 tracking-wide mb-2 mt-3 first:mt-0">
                                  {section.title}
                                </h4>
                              )}
                              <ul className="space-y-1">
                                {section.items.map((item) => (
                                  <li key={item.name}>
                                    <Link
                                      to={item.href}
                                      onClick={closeMobileMenu}
                                      className="block px-3 py-2 text-sm text-gray-700 rounded hover:bg-blue-50 hover:text-blue-600 transition-colors"
                                    >
                                      {item.name}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </>
    </>
  );
};

export default Navbar;
