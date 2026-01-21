import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const GoToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const footer = document.querySelector('footer');
    
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show button when footer is intersecting (visible)
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Trigger when 10% of footer is visible
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
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
