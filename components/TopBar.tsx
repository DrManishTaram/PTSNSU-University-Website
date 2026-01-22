import React, { useState, useEffect, useCallback } from 'react';
import { Phone, Mail, Facebook, Twitter, Instagram, Youtube, Volume2, VolumeX, Ear } from 'lucide-react';

const TopBar: React.FC = () => {
  const [isScreenReaderOn, setIsScreenReaderOn] = useState(false);

  // Screen Reader Logic using Web Speech API
  const speak = useCallback((text: string) => {
    if (!isScreenReaderOn || !text.trim()) return;
    
    // Cancel any ongoing speech
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

    // Announce activation
    const activationMsg = new SpeechSynthesisUtterance("Screen reader activated. Hover over any element to hear it.");
    activationMsg.lang = 'en-IN';
    window.speechSynthesis.speak(activationMsg);

    // Event handlers for reading elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      // Get readable text from the element
      let text = '';
      
      // Check for aria-label first
      if (target.getAttribute('aria-label')) {
        text = target.getAttribute('aria-label') || '';
      } 
      // Then alt text for images
      else if (target.tagName === 'IMG' && (target as HTMLImageElement).alt) {
        text = `Image: ${(target as HTMLImageElement).alt}`;
      }
      // Then button/link text
      else if (target.tagName === 'BUTTON' || target.tagName === 'A') {
        text = target.innerText || target.getAttribute('title') || '';
        if (target.tagName === 'A') text = `Link: ${text}`;
        if (target.tagName === 'BUTTON') text = `Button: ${text}`;
      }
      // Then headings
      else if (['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(target.tagName)) {
        text = `Heading: ${target.innerText}`;
      }
      // Then paragraphs and spans with text
      else if (['P', 'SPAN', 'LI', 'LABEL'].includes(target.tagName) && target.innerText) {
        text = target.innerText;
      }
      // Input fields
      else if (target.tagName === 'INPUT') {
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

  return (
    <div id="topbar" className="relative bg-white text-gray-800 text-xs sm:text-sm block overflow-hidden h-auto md:h-12 font-medium z-[60] shadow-[0_15px_35px_-5px_rgba(0,0,0,0.25)] border-b border-gray-100 hidden md:block">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 xl:max-w-[95%] flex h-full justify-between items-center relative py-1.5 sm:py-2 md:py-0">
        
        {/* Dynamic Skewed Background - Removed */}
        
        {/* Left Content */}
        <div className="relative z-10 flex items-center h-full pl-0 gap-2 sm:gap-4 lg:gap-8 justify-between w-full md:w-auto">
             
             {/* G.I. Tag Section - Rearranged */}
             <div className="flex items-center gap-1.5 sm:gap-3 group cursor-default">
                {/* Text: Shahdol District - With Oval Badge */}
                <div className="relative inline-flex items-center justify-center px-2 sm:px-2.5 md:px-3 lg:px-2.5 py-0.5 sm:py-1 md:py-1.5 lg:py-1 rounded-full bg-white border-2 border-blue-600 shadow-sm hover:shadow-md transition-all duration-300 lg:-ml-1">
                    <span className="relative text-[10px] sm:text-xs md:text-sm lg:text-[13px] font-serif font-extrabold uppercase tracking-widest bg-gradient-to-r from-turmeric-600 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">Shahdol District</span>
                </div>

                {/* Logo Container 1 */}
                <div className="relative flex-shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-[#b45309] shadow-lg overflow-hidden bg-white flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <img 
                           src="/gitag.png" 
                           alt="GI Tag Logo" 
                           className="w-full h-full object-contain p-0.5"
                        />
                    </div>
                </div>

                {/* Text: G.I. TAG FOR HALDI */}
                <div className="flex flex-col leading-tight justify-center text-blue-600">
                    <span className="text-[6px] sm:text-[8px] md:text-xs font-extrabold tracking-tight drop-shadow-sm font-sans whitespace-nowrap">
                        G.I. TAG FOR HALDI
                    </span>
                </div>

                {/* Logo Container 2 */}
                <div className="relative flex-shrink-0">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full border-2 border-[#b45309] shadow-lg overflow-hidden bg-white flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <img 
                           src="/gitag.png" 
                           alt="GI Tag Logo" 
                           className="w-full h-full object-contain p-0.5"
                        />
                    </div>
                </div>

                {/* Text: TRIBAL HERITAGE */}
                <div className="flex flex-col leading-tight justify-center text-blue-600">
                    <span className="text-[6px] sm:text-[8px] md:text-xs font-extrabold tracking-tight drop-shadow-sm font-sans whitespace-nowrap">
                        TRIBAL HERITAGE
                    </span>
                </div>
             </div>
</div>

        {/* Right Content (On Navy Background) - Hidden on Mobile */}
        <div className="relative z-10 hidden md:flex items-center gap-4 lg:gap-6 pl-4">
             {/* Screen Reader Toggle */}
             <button 
                 onClick={toggleScreenReader}
                 className={`flex items-center gap-2 px-2 lg:px-3 py-1.5 rounded-full border transition-all duration-300 ${
                   isScreenReaderOn 
                     ? 'bg-green-500 border-green-500 text-white shadow-lg shadow-green-500/30' 
                     : 'border-blue-500 text-blue-600 hover:bg-blue-50'
                 }`}
                 title={isScreenReaderOn ? "Turn Off Screen Reader" : "Turn On Screen Reader"}
                 aria-label={isScreenReaderOn ? "Screen Reader is On. Click to turn off." : "Screen Reader is Off. Click to turn on."}
             >
                 <Volume2 size={14} className="lg:size-[16px]" />
                 <span className="text-[9px] lg:text-[10px] font-bold uppercase tracking-wide hidden lg:inline">
                   Screen Reader
                 </span>
             </button>

             {/* Font Size Controls */}
             <div className="flex items-center gap-1.5 lg:gap-2 mr-2 lg:mr-3 border-r border-gray-200 pr-4 lg:pr-6 h-8">
                <button 
                    onClick={() => document.documentElement.style.fontSize = '90%'}
                    className="w-6 lg:w-7 h-6 lg:h-7 flex items-center justify-center rounded-full border border-blue-500 text-blue-600 text-[9px] lg:text-[10px] font-bold hover:bg-blue-50 transition-colors uppercase"
                    title="Decrease Font Size"
                    aria-label="Decrease font size"
                >
                    A-
                </button>
                <button 
                    onClick={() => document.documentElement.style.fontSize = '100%'}
                    className="w-6 lg:w-7 h-6 lg:h-7 flex items-center justify-center rounded-full border border-blue-500 text-blue-600 text-[9px] lg:text-xs font-bold hover:bg-blue-50 transition-colors uppercase"
                    title="Default Font Size"
                    aria-label="Reset font size to default"
                >
                    A
                </button>
                <button 
                    onClick={() => document.documentElement.style.fontSize = '110%'}
                    className="w-6 lg:w-7 h-6 lg:h-7 flex items-center justify-center rounded-full border border-blue-500 text-blue-600 text-sm lg:text-sm font-bold hover:bg-blue-50 transition-colors uppercase"
                    title="Increase Font Size"
                    aria-label="Increase font size"
                >
                    A+
                </button>
             </div>

             <a href="tel:+917052101786" className="flex items-center gap-1.5 lg:gap-2 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <div className="p-1.5 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors shadow-sm">
                    <Phone size={13} className="lg:size-[14px] text-white group-hover:text-white transition-colors" />
                </div>
                <span className="text-[9px] lg:text-xs text-blue-800 group-hover:text-blue-600 transition-colors tracking-wide font-semibold hidden xl:inline">+91 7052 101 786</span>
             </a>
             <a href="mailto:info@psnsu.ac.in" className="flex items-center gap-1.5 lg:gap-2 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
                <div className="p-1.5 bg-blue-600 rounded-full group-hover:bg-blue-700 transition-colors shadow-sm">
                    <Mail size={13} className="lg:size-[14px] text-white group-hover:text-white transition-colors" />
                </div>
                <span className="text-[9px] lg:text-xs text-blue-800 group-hover:text-blue-600 transition-colors tracking-wide font-semibold hidden xl:inline">info@psnsu.ac.in</span>
             </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;