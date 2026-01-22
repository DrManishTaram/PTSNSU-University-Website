import React, { useEffect, useState } from 'react';
import { ArrowRight, SkipForward } from 'lucide-react';

const Loader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [showSkip, setShowSkip] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [startProgress, setStartProgress] = useState(false);

  useEffect(() => {
    // Add 3-second delay before showing loader
    const delayTimer = setTimeout(() => {
      setShowLoader(true);
    }, 3000);

    return () => clearTimeout(delayTimer);
  }, []);

  useEffect(() => {
    // Add 3-second delay before starting progress bar
    const progressDelayTimer = setTimeout(() => {
      setStartProgress(true);
    }, 3000);

    return () => clearTimeout(progressDelayTimer);
  }, []);

  useEffect(() => {
    // Check if page is already loaded
    if (document.readyState === 'complete') {
      setIsPageLoaded(true);
    } else {
      window.addEventListener('load', () => setIsPageLoaded(true));
      return () => window.removeEventListener('load', () => setIsPageLoaded(true));
    }
  }, []);

  useEffect(() => {
    // Show skip button after 7 seconds (3 second delay + 4 seconds)
    const skipTimer = setTimeout(() => {
      setShowSkip(true);
    }, 7000);

    return () => clearTimeout(skipTimer);
  }, []);

  useEffect(() => {
    let interval: any;

    if (isExiting || !startProgress) return;

    if (isPageLoaded) {
      // Fast finish if loaded
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            handleComplete();
            return 100;
          }
          return prev + 5; // Fast increment
        });
      }, 20);
    } else {
      // Slow trickle if still loading
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 90) return 90; // Stall at 90% until loaded
          return prev + 0.5; // Slow increment
        });
      }, 50);
    }

    return () => clearInterval(interval);
  }, [isPageLoaded, isExiting, startProgress]);

  const handleComplete = () => {
    setIsExiting(true);
    setTimeout(() => {
        onComplete();
    }, 800); // Wait for exit animation
  };

  return (
    <div className={`fixed inset-0 z-[100] bg-[#0f172a] flex items-center justify-center overflow-hidden transition-opacity duration-700 ${isExiting ? 'opacity-0' : 'opacity-100'} ${showLoader ? 'visible' : 'invisible'}`}>
      
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/20 blur-[120px] rounded-full animate-pulse"></div>
          
          {/* Floating Particles (CSS Animation) */}
          {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute bg-white/20 rounded-full animate-float"
                style={{
                    width: Math.random() * 4 + 2 + 'px',
                    height: Math.random() * 4 + 2 + 'px',
                    top: Math.random() * 100 + '%',
                    left: Math.random() * 100 + '%',
                    animationDuration: Math.random() * 5 + 5 + 's',
                    animationDelay: Math.random() * 5 + 's',
                }}
              ></div>
          ))}
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center perspective-1000">
        
        {/* 3D Content Container */}
        <div className="transform-style-3d rotate-x-10 animate-[float_6s_ease-in-out_infinite]">
            {/* Logo Container with 3D animation */}
            <div className="relative w-40 h-40 md:w-56 md:h-56 mb-10 flex items-center justify-center">
            {/* Multi-layer glowing rings */}
            <div className="absolute inset-0 rounded-full border-[3px] border-turmeric-500/40 border-t-transparent animate-[spin_3s_linear_infinite]"></div>
            <div className="absolute -inset-4 rounded-full border-[1px] border-blue-400/20 border-b-transparent animate-[spin_5s_linear_infinite_reverse]"></div>
            <div className="absolute inset-4 rounded-full border-[2px] border-white/10 animate-pulse"></div>
            
            {/* Main Logo Sphere */}
            <div className="relative w-32 h-32 md:w-44 md:h-44 bg-white rounded-full shadow-[0_0_60px_rgba(59,130,246,0.4)] flex items-center justify-center overflow-hidden z-20 transform hover:scale-105 transition-transform duration-500">
                 <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-gray-200"></div>
                 <img src="/logo.jpg" alt="Logo" className="w-[85%] h-[85%] object-contain relative z-10 animate-[zoomIn_1s_ease-out]" />
            </div>

            {/* Orbiting Tech Elements */}
            <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2 w-3 h-3 bg-turmeric-500 rounded-full blur-[1px] shadow-[0_0_10px_#eab308]"></div>
            </div>
            </div>
        </div>

        {/* Cinematic Text Reveal */}
        <div className="text-center space-y-3 relative">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 tracking-wide drop-shadow-2xl">
            <span className="text-blue-500">P</span>andit <span className="text-blue-500">S</span>hambhunath <span className="text-blue-500">S</span>hukla <span className="text-blue-500">U</span>niversity
          </h1>
          <p className="text-blue-200 uppercase tracking-[0.3em] text-xs md:text-sm font-medium animate-fade-in opacity-80">
            Shahdol (M.P) • Established in 2017
          </p>
        </div>

        {/* Futuristic Loading Bar */}
        <div className="mt-16 w-80 max-w-[80vw] h-1.5 bg-gray-800/50 backdrop-blur-sm rounded-full overflow-hidden relative border border-white/5">
           <div 
             className="h-full bg-gradient-to-r from-turmeric-500 via-orange-400 to-blue-500 shadow-[0_0_20px_rgba(234,179,8,0.5)] transition-all duration-300 ease-out relative"
             style={{ width: `${progress}%` }}
           >
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]"></div>
           </div>
        </div>
        
        <div className="mt-4 flex flex-col items-center gap-1">
            <span className="text-turmeric-500 font-mono text-xl font-bold">{Math.round(progress)}%</span>
            <span className="text-gray-500 text-[10px] uppercase tracking-widest">{isPageLoaded ? 'Initializing...' : 'Loading Resources...'}</span>
        </div>
      </div>

      {/* Skip Button - Appears after 4s */}
      <div className={`absolute bottom-10 right-10 transition-all duration-500 transform ${showSkip ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
        <button 
            onClick={handleComplete}
            className="group flex items-center gap-3 px-6 py-3 bg-white/5 hover:bg-white/10 backdrop-blur-md rounded-full border border-white/10 text-white transition-all hover:scale-105 active:scale-95 ring-1 ring-white/20 hover:ring-turmeric-500/50"
        >
            <span className="text-sm font-medium tracking-wide">Skip Intro</span>
            <div className="bg-white/10 p-1.5 rounded-full group-hover:bg-turmeric-500 group-hover:text-black transition-colors">
                <SkipForward size={16} />
            </div>
        </button>
      </div>

    </div>
  );
};

export default Loader;
