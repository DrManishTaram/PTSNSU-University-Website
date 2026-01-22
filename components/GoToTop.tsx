import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useHideOnSections } from './hooks/useHideOnSections';

const GoToTop: React.FC = () => {
  const { isHiddenAreaVisible, isScrolling, scrolledEnough } = useHideOnSections();

  const isVisible = scrolledEnough && !isHiddenAreaVisible && !isScrolling;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`
        fixed bottom-8 right-8 z-50 
        w-14 h-14 rounded-full 
        bg-gradient-to-r from-blue-600 to-blue-700 
        text-white shadow-xl shadow-blue-500/30
        flex items-center justify-center
        transition-all duration-500 ease-out
        hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/40
        active:scale-95
        ${isVisible 
          ? 'opacity-100 translate-y-0 pointer-events-auto' 
          : 'opacity-0 translate-y-10 pointer-events-none'
        }
      `}
      aria-label="Go to top"
    >
      <ArrowUp size={24} strokeWidth={2.5} />
    </button>
  );
};

export default GoToTop;
