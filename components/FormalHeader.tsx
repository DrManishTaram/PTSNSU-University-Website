import React from 'react';

const FormalHeader: React.FC = () => {
  return (
    <div className="w-full bg-white border-b-4 border-blue-900 shadow-md">
      <div className="container mx-auto px-4 lg:px-6 xl:max-w-[95%] py-5 md:py-8">
        {/* Main Header Content */}
        <div className="flex flex-col items-center justify-center text-center space-y-1 md:space-y-2">
          
          {/* English Title - Cinzel Bold */}
          <h1 
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-wider letter-spacing"
            style={{ 
              fontFamily: '"Cinzel", serif',
              fontWeight: 900,
              letterSpacing: '0.08em',
              color: '#070738'
            }}
          >
            PANDIT SHAMBHUNATH SHUKLA VISHWAVIDYALAYA, SHAHDOL (M.P.)
          </h1>

          {/* Decorative Line */}
          <div className="w-24 h-0.5 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 rounded-full mx-auto my-2 md:my-2"></div>

          {/* Hindi Title - Noto Serif Devanagari */}
          <h2 
            className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold"
            style={{ 
              fontFamily: '"Noto Serif Devanagari", serif',
              fontWeight: 700,
              letterSpacing: '0.02em',
              color: '#070738'
            }}
          >
            पंडित शंभूनाथ शुक्ल विश्वविद्यालय, शहडोल (म.प्र.)
          </h2>

          {/* Bottom Accent Line */}
          <div className="w-20 h-0.5 bg-blue-900/60 rounded-full mx-auto mt-2 md:mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default FormalHeader;