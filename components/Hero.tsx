import React, { useState, useEffect } from 'react';
import { ArrowRight, PlayCircle } from 'lucide-react';

const slides = [
  {
    image: "/8.jpg",
    title: "Education is the Key to Success",
    subtitle: "Pandit Shambhu Nath Shukla Vishwavidyalaya is committed to creating a vibrant and ethical campus culture, fostering academic excellence."
  },
  {
    image: "/9.jpg",
    title: "Empowering Minds, Enriching Future",
    subtitle: "State-of-the-art laboratories and research facilities designed to push the boundaries of knowledge in Science and Arts."
  },
  {
    image: "/10.jpg",
    title: "A Legacy of Academic Leadership",
    subtitle: "Join a diverse community of scholars and leaders dedicated to serving society through education and integrity."
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(148);
  const [isMobileViewport, setIsMobileViewport] = useState<boolean>(false);

  // Measure header heights (TopBar + Navbar) so hero exactly fills remaining viewport
  useEffect(() => {
    const measure = () => {
      const topbar = document.getElementById('topbar');
      const navbar = document.querySelector('nav');
      const topH = topbar ? topbar.clientHeight : 0;
      const navH = navbar ? (navbar as HTMLElement).clientHeight : 0;
      setHeaderHeight(topH + navH);
    };

    measure();
    // also set mobile viewport flag so we only clamp on small screens
    const checkMobile = () => setIsMobileViewport(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', measure);
    window.addEventListener('resize', checkMobile);
    // also re-measure after fonts/images load
    window.addEventListener('load', measure);
    return () => {
      window.removeEventListener('resize', measure);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('load', measure);
    };
  }, []);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000); 
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    // Make hero fill available viewport height (accounting for header). Show two images side-by-side on md+.
    <section
      className="relative w-full overflow-hidden group"
      style={{
        height: `calc(100vh - ${headerHeight + 60}px)`,
        maxHeight: `calc(100vh - ${headerHeight + 60}px)`,
        minHeight: isMobileViewport ? '280px' : '300px',
        backgroundColor: 'transparent'
      }}
    >
      {/* Dual-tone background: top half white, bottom half wavy solid color (behind the card) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Top half - light teal wavy */}
        <div className="absolute top-0 left-0 right-0 h-1/2 overflow-hidden">
          <svg className="w-full h-full block" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#7dd3d0" d="M0,224L48,213.3C96,203,192,181,288,170.7C384,160,480,160,576,154.7C672,149,768,139,864,117.3C960,96,1056,64,1152,58.7C1248,53,1344,75,1392,85.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        {/* Bottom half - wavy dark navy blue */}
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-transparent">
          <svg className="w-full h-full block" viewBox="0 0 1440 320" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <path fill="#001f3f" d="M0,64L48,69.3C96,75,192,85,288,106.7C384,128,480,160,576,149.3C672,139,768,85,864,74.7C960,64,1056,96,1152,112C1248,128,1344,128,1392,128L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      {/* Product card: centered, use slide image as full background inside the rounded card and place hero text over it on the left */}
      <div className="absolute inset-0 flex items-center justify-center px-2 sm:px-3 md:px-4">
        <div
          key={current}
          className="w-full h-[90%] sm:h-[85%] md:h-[62vh] rounded-2xl sm:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden relative"
          style={{
            backgroundColor: '#f0f0f0',
            padding: '3px',
            boxSizing: 'border-box',
            border: '3px sm:border-4 md:border-5 solid #0099ff',
          }}
        >
          {/* Inner container for overlays - respects the padding and rounded corners */}
          <div 
            className="absolute inset-0 rounded-[calc(1rem-2px)] sm:rounded-[calc(1.25rem-2px)] md:rounded-[calc(1.5rem-2px)] overflow-hidden"
            style={{
              top: '3px',
              left: '3px',
              right: '3px',
              bottom: '3px',
              backgroundImage: `url('${slides[current].image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            {/* Soft bluish tint overlay to add hue over the image (kept subtle) */}
            <div className="absolute inset-0 pointer-events-none" style={{mixBlendMode: 'overlay', backgroundColor: 'rgba(96,165,250,0.06)'}}></div>
            {/* Dark gradient overlay so text is readable and image appears only within the card */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent"></div>
          </div>

          {/* Left content placed over the background image - increased safe padding and responsive scaling to avoid cropping */}
          <div className="relative z-10 w-full h-full flex items-center">
            {/* Add larger left padding so text never reaches curved edges; allow content to wrap and scale using clamp() */}
            <div className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-4 sm:py-5 md:py-6 box-border md:w-1/2">
              <div className="text-turmeric-400 font-bold uppercase tracking-widest mb-2 sm:mb-3 md:mb-4 inline-block bg-black/30 px-2 sm:px-3 py-0.5 sm:py-1 rounded" style={{fontSize: 'clamp(0.55rem, 1.2vw, 0.7rem)'}}>EST. 2016</div>

              {/* Responsive heading: reduced sizes by 20% to avoid cropping; constrained maxWidth so it wraps before hitting rounded corners */}
              <h1
                style={{
                  fontSize: 'clamp(0.95rem, 2.5vw, 2.56rem)',
                  lineHeight: 1.03,
                  wordBreak: 'break-word',
                  maxWidth: '90%'
                }}
                className="text-white font-serif font-extrabold mt-2 sm:mt-3 md:mt-4 mb-2 sm:mb-3 md:mb-4"
              >
                {slides[current].title}
              </h1>

              <p className="text-gray-300 max-w-2xl mb-3 sm:mb-4 md:mb-6 break-words" style={{fontSize: 'clamp(0.7rem, 1.4vw, 0.95rem)'}}>{slides[current].subtitle}</p>

              <div className="flex gap-2 sm:gap-3 md:gap-4 flex-wrap items-center max-w-full" style={{overflow: 'visible'}}>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-2.5 sm:px-3 md:px-3 py-1 sm:py-1.5 md:py-1.5 rounded-full font-semibold" style={{fontSize: 'clamp(0.65rem, 1vw, 0.85rem)'}}>Discover More</button>
                <button className="border border-white/30 text-white px-2 sm:px-2.5 md:px-2.5 py-1 sm:py-1.5 md:py-1.5 rounded-full" style={{fontSize: 'clamp(0.65rem, 1vw, 0.85rem)'}}>Virtual Tour</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Navigation Arrows: REMOVED - Using dot indicators instead */}

      {/* Dot Indicators - visible on all screens, prominent and interactive */}
      <div className="absolute left-1/2 -translate-x-1/2 z-30 flex gap-2 sm:gap-2.5 md:gap-3 items-center justify-center" style={{ bottom: isMobileViewport ? '16px' : '20px' }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`transition-all duration-300 rounded-full hover:opacity-100 ${
              index === current
                ? 'bg-white shadow-lg'
                : 'bg-white/60 hover:bg-white/80'
            }`}
            style={{
              width: index === current ? 'clamp(24px, 4vw, 32px)' : 'clamp(10px, 2vw, 14px)',
              height: index === current ? 'clamp(10px, 1.5vw, 14px)' : 'clamp(8px, 1.2vw, 10px)',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;