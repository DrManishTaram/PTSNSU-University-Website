import React, { useState, useEffect, useCallback } from 'react';
import { Phone, Mail, Search, ChevronRight, ExternalLink, FileText, Volume2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useSearch } from '../context/SearchContext';

// Search Index - Define all searchable content
interface SearchResult {
  title: string;
  description: string;
  type: 'page' | 'section' | 'document';
  path?: string; // For page navigation
  sectionId?: string; // For scrolling to section
  keywords: string[];
}

const searchIndex: SearchResult[] = [
  // Pages
  { title: 'Home', description: 'University homepage', type: 'page', path: '/', keywords: ['home', 'main', 'homepage', 'landing'] },
  { title: 'About Us', description: 'Learn about our university', type: 'page', path: '/about', keywords: ['about', 'university', 'profile', 'information'] },
  { title: 'Vision & Mission', description: 'Our vision and mission statements', type: 'page', path: '/vision-mission', keywords: ['vision', 'mission', 'goals', 'objectives'] },
  { title: 'History', description: 'University history and heritage', type: 'page', path: '/history', keywords: ['history', 'heritage', 'background', 'establishment'] },
  { title: 'Kulgeet', description: 'University anthem', type: 'page', path: '/kulgeet', keywords: ['kulgeet', 'anthem', 'song'] },
  { title: "Chancellor's Message", description: 'Message from the Chancellor', type: 'page', path: '/chancellor-message', keywords: ['chancellor', 'message', 'leadership'] },
  { title: "Vice Chancellor's Message", description: 'Message from the Vice Chancellor', type: 'page', path: '/vc-message', keywords: ['vice chancellor', 'vc', 'message', 'leadership'] },
  { title: 'Admission', description: 'Admission information and process', type: 'page', path: '/admission-notification', keywords: ['admission', 'apply', 'enrollment', 'join'] },
  { title: 'Fee Structure', description: 'University fee details', type: 'page', path: '/fees', keywords: ['fee', 'fees', 'payment', 'cost', 'tuition'] },
  { title: 'Programs', description: 'Academic programs offered', type: 'page', path: '/programs', keywords: ['programs', 'courses', 'degrees', 'academic'] },
  { title: 'Library', description: 'University library facilities', type: 'page', path: '/library', keywords: ['library', 'books', 'resources', 'reading'] },
  { title: 'Hostel', description: 'Hostel and accommodation', type: 'page', path: '/hostel', keywords: ['hostel', 'accommodation', 'residence', 'housing'] },
  { title: 'Sports', description: 'Sports facilities and activities', type: 'page', path: '/sports', keywords: ['sports', 'athletics', 'games', 'physical'] },
  { title: 'Notices', description: 'Latest notices and circulars', type: 'page', path: '/notices', keywords: ['notice', 'notices', 'circular', 'announcement', 'news'] },
  { title: 'Contact', description: 'Contact information', type: 'page', path: '/contact', keywords: ['contact', 'phone', 'email', 'address', 'reach'] },

  // Sections (for homepage scrolling)
  { title: 'Hero Section', description: 'Main banner and introduction', type: 'section', sectionId: 'hero', keywords: ['banner', 'introduction', 'welcome'] },
  { title: 'Features', description: 'University features and highlights', type: 'section', sectionId: 'features', keywords: ['features', 'highlights', 'benefits'] },
  { title: 'Gallery', description: 'Photo gallery', type: 'page', path: '/gallery', keywords: ['gallery', 'photos', 'images', 'pictures', 'events'] },
];

const TopBar: React.FC = () => {
  const navigate = useNavigate();
  const { isSearchOpen, setIsSearchOpen, openSearch, closeSearch } = useSearch();
  const [isScreenReaderOn, setIsScreenReaderOn] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  // Screen Reader Logic using Web Speech API
  const speak = useCallback((text: string) => {
    if (!isScreenReaderOn || !text.trim()) return;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-IN'; // Indian English
    utterance.rate = 0.9;
    utterance.pitch = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  }, [isScreenReaderOn]);

  useEffect(() => {
    if (!isScreenReaderOn) {
      window.speechSynthesis.cancel();
      return;
    }

    const activationMsg = new SpeechSynthesisUtterance("Screen reader activated. Hover over any element to hear it.");
    activationMsg.lang = 'en-IN';
    window.speechSynthesis.speak(activationMsg);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let text = '';

      if (target.getAttribute('aria-label')) {
        text = target.getAttribute('aria-label') || '';
      } else if (target.tagName === 'IMG' && (target as HTMLImageElement).alt) {
        text = `Image: ${(target as HTMLImageElement).alt}`;
      } else if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        text = target.innerText || target.getAttribute('title') || '';
        if (target.tagName === 'A') text = `Link: ${text}`;
        if (target.tagName === 'BUTTON') text = `Button: ${text}`;
      } else if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(target.tagName)) {
        text = `Heading: ${target.innerText}`;
      } else if (['P', 'SPAN', 'LI', 'LABEL'].includes(target.tagName) && target.innerText) {
        text = target.innerText;
      } else if (target.tagName === 'INPUT') {
        const input = target as HTMLInputElement;
        text = `Input field: ${input.placeholder || input.name || 'text input'}`;
      }

      if (text && text.length < 300) {
        speak(text);
      }
    };

    const handleFocus = (e: FocusEvent) => {
      const target = e.target as HTMLElement;
      const text = target.getAttribute('aria-label') || target.innerText || '';
      if (text) speak(text);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('focusin', handleFocus);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('focusin', handleFocus);
      window.speechSynthesis.cancel();
    };
  }, [isScreenReaderOn, speak]);

  const toggleScreenReader = () => {
    setIsScreenReaderOn(prev => !prev);
  };

  // Search function
  const performSearch = useCallback((query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = searchIndex.filter(item => {
      return (
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery) ||
        item.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
      );
    });

    setSearchResults(results);
  }, []);

  // Handle search on query change
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, performSearch]);

  const handleResultClick = (result: SearchResult) => {
    closeSearch();
    setSearchQuery('');
    setSearchResults([]);

    if (result.type === 'section' && result.sectionId) {
      setTimeout(() => {
        const element = document.getElementById(result.sectionId!);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else if (result.type === 'page' && result.path) {
      navigate(result.path);
    }
  };

  return (
    <>
      <div id="topbar" className="relative bg-white text-gray-800 text-xs sm:text-sm block h-auto md:h-12 font-medium z-[60] shadow-[0_15px_30px_-10px_rgba(0,0,0,0.3)] border-b border-blue-400 hidden md:block">
        <div className="w-full px-2 sm:px-3 lg:px-4 flex h-full justify-between items-center relative py-1.5 sm:py-2 md:py-0">

          <div className="relative z-10 flex items-center h-full pl-1 gap-1 w-full md:w-auto">
            <div className="flex items-center gap-1">
              <span className="text-[#071133] font-bold uppercase tracking-wide text-[10px] sm:text-[11px]">Shahdol District</span>
            </div>
            <div className="h-4 w-px bg-gray-300 mx-1"></div>
            <div className="flex items-center gap-1">
              <img src="/topbar/gihaldi.png" alt="G.I Tag Haldi" className="h-8 w-auto object-contain drop-shadow-[0_0_5px_rgba(255,215,0,1)]" />
              <span className="text-[#071133] font-bold uppercase tracking-wide text-[10px] sm:text-[11px]">G.I Tag for Haldi</span>
            </div>
            <div className="h-4 w-px bg-gray-300 mx-1"></div>
            <div className="flex items-center gap-1">
              <img src="/topbar/tribal.png" alt="Tribal Heritage" className="h-[60px] w-auto object-contain drop-shadow-[0_0_3px_rgba(255,165,0,0.8)]" />
              <span className="text-[#071133] font-bold uppercase tracking-wide text-[10px] sm:text-[11px]">Tribal Heritage</span>
            </div>
          </div>

          <div className="relative z-10 hidden md:flex items-center gap-3 lg:gap-5 pl-4">
            <button
              onClick={toggleScreenReader}
              className={`flex items-center gap-1.5 px-2 py-1 rounded-full border transition-all duration-300 ${isScreenReaderOn
                ? 'bg-green-500 border-green-500 text-white shadow-lg shadow-green-500/30'
                : 'border-blue-500 text-blue-600 hover:bg-blue-50'
                }`}
              title={isScreenReaderOn ? "Turn Off Screen Reader" : "Turn On Screen Reader"}
              aria-label={isScreenReaderOn ? "Screen Reader is On. Click to turn off." : "Screen Reader is Off. Click to turn on."}
            >
              <Volume2 size={13} className="lg:size-[14px]" />
              <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-wide hidden lg:inline">
                Screen Reader
              </span>
            </button>

            <div className="flex items-center gap-1 lg:gap-1.5 mr-1.5 lg:mr-2 border-r border-gray-200 pr-3 lg:pr-4 h-7">
              <button
                onClick={() => document.documentElement.style.fontSize = '90%'}
                className="w-5 lg:w-6 h-5 lg:h-6 flex items-center justify-center rounded-full border border-blue-500 text-blue-600 text-[8px] lg:text-[9px] font-bold hover:bg-blue-50 transition-colors uppercase"
                title="Decrease Font Size"
                aria-label="Decrease font size"
              >
                A-
              </button>
              <button
                onClick={() => document.documentElement.style.fontSize = '100%'}
                className="w-5 lg:w-6 h-5 lg:h-6 flex items-center justify-center rounded-full border border-blue-500 text-blue-600 text-[8px] lg:text-[10px] font-bold hover:bg-blue-50 transition-colors uppercase"
                title="Default Font Size"
                aria-label="Reset font size to default"
              >
                A
              </button>
              <button
                onClick={() => document.documentElement.style.fontSize = '110%'}
                className="w-5 lg:w-6 h-5 lg:h-6 flex items-center justify-center rounded-full border border-blue-500 text-blue-600 text-[10px] lg:text-[11px] font-bold hover:bg-blue-50 transition-colors uppercase"
                title="Increase Font Size"
                aria-label="Increase font size"
              >
                A+
              </button>
            </div>

            <a href="tel:+917052101786" className="flex items-center gap-1.5 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
              <div className="p-1 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors shadow-sm">
                <Phone size={12} className="lg:size-[13px] text-white group-hover:text-white transition-colors" />
              </div>
              <span className="text-[9px] lg:text-[11px] text-blue-800 group-hover:text-blue-600 transition-colors tracking-wide font-semibold hidden xl:inline">+91 7052 101 786</span>
            </a>
            <a href="mailto:info@psnsu.ac.in" className="flex items-center gap-1.5 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
              <div className="p-1 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors shadow-sm">
                <Mail size={12} className="lg:size-[13px] text-white group-hover:text-white transition-colors" />
              </div>
              <span className="text-[9px] lg:text-[11px] text-blue-800 group-hover:text-blue-600 transition-colors tracking-wide font-semibold hidden xl:inline">info@psnsu.ac.in</span>
            </a>

            <button
              onClick={openSearch}
              className="flex items-center gap-1.5 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity"
            >
              <div className="p-1 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors shadow-sm">
                <Search size={12} className="lg:size-[13px] text-white group-hover:text-white transition-colors" />
              </div>
              <span className="text-[9px] lg:text-[11px] text-blue-800 group-hover:text-blue-600 transition-colors tracking-wide font-semibold hidden xl:inline">Search</span>
            </button>
          </div>
        </div>
      </div>

      {isSearchOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[200]"
          onClick={closeSearch}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white shadow-2xl z-[201] transform transition-transform duration-300 ease-in-out ${isSearchOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-blue-50">
            <h3 className="text-lg font-bold text-blue-900">Search Website</h3>
            <button
              onClick={closeSearch}
              className="p-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              aria-label="Close search"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <div className="p-4 pb-2">
            <div className="flex gap-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Enter keywords to search..."
                className="flex-1 px-4 py-2 border-2 border-blue-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Search
              </button>
            </div>
            <p className="text-gray-400 text-xs mt-2">Enter a keyword to search the website</p>
          </div>

          <div className="flex-1 flex flex-col overflow-hidden">
            <div className="px-4 py-3 flex items-center gap-3">
              <h4 className="text-sm font-semibold text-gray-700">Results</h4>
              <div className="flex-1 h-0.5 bg-blue-600"></div>
            </div>

            <div className="flex-1 px-4 pb-4 overflow-y-auto">
              {searchQuery ? (
                searchResults.length > 0 ? (
                  <div className="space-y-2">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleResultClick(result)}
                        className="w-full text-left p-3 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-all group"
                      >
                        <div className="flex items-start gap-2">
                          {result.type === 'page' ? (
                            <ExternalLink size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                          ) : (
                            <FileText size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
                          )}
                          <div className="flex-1 min-w-0">
                            <h5 className="font-semibold text-sm text-gray-900 group-hover:text-blue-600 transition-colors">
                              {result.title}
                            </h5>
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-2">
                              {result.description}
                            </p>
                            <span className="text-xs text-blue-600 mt-1 inline-block">
                              {result.type === 'page' ? 'Go to page' : 'Scroll to section'} →
                            </span>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">No results found for "{searchQuery}"</p>
                )
              ) : (
                <p className="text-gray-400 text-sm">Enter a keyword to start searching</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;