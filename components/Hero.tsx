import React, { useState, useEffect } from 'react';

const slides = [
  {
    image: "/8.jpg",
    title: "Expert Faculty",
    subtitle: "Our distinguished faculty members are leaders in their respective fields, dedicated to mentoring the next generation."
  },
  {
    image: "/9.jpg",
    title: "Academic Excellence",
    subtitle: "Fostering an environment of intellectual curiosity and rigorous academic pursuit."
  },
  {
    image: "/10.jpg",
    title: "Research & Innovation",
    subtitle: "Pioneering research initiatives that contribute to societal growth and development."
  },
  {
    image: "/11.jpg",
    title: "Student Mentorship",
    subtitle: "Personalized guidance and support to help every student achieve their full potential."
  },
  {
    image: "/12.jpg",
    title: "Global Perspective",
    subtitle: "Preparing students for a connected world through diverse learning experiences."
  }
];

const Hero: React.FC = () => {
  const [current, setCurrent] = useState(0);

  // Ensure max 10 images (5 paired slides)
  const activeSlides = slides.slice(0, 10);
  const numSlides = Math.ceil(activeSlides.length / 2);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % numSlides);
    }, 7000);
    return () => clearInterval(timer);
  }, [numSlides]);

  return (
    <section className="relative w-full bg-blue-200 pt-[19px] pb-6 md:pt-[35px] md:pb-10 overflow-hidden">
      {/* Slider Container */}
      <div className="w-full px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-[url('/slider-bg.png')] bg-cover bg-center">
          {/* Slider Track */}
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {Array.from({ length: numSlides }).map((_, index) => {
              // Calculate indices for the pair
              let leftIndex = index * 2;
              let rightIndex = leftIndex + 1;

              // Handle odd number of slides: overlap the last slide
              if (rightIndex >= activeSlides.length && activeSlides.length > 1) {
                leftIndex = activeSlides.length - 2;
                rightIndex = activeSlides.length - 1;
              } else if (activeSlides.length === 1) {
                // Determine behavior for single image (duplicate it)
                rightIndex = 0;
              }

              const leftSlide = activeSlides[leftIndex];
              const rightSlide = activeSlides[rightIndex] || activeSlides[0];

              return (
                <div key={index} className="flex-shrink-0 w-full">
                  {/* Split Layout - Single column on mobile, two columns on desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 min-h-[280px] md:min-h-[360px]">

                    {/* LEFT SIDE - Framed Image */}
                    <div className="relative bg-transparent p-1.5 md:p-2 flex items-center justify-center">
                      {/* Detailed Navy Blue Border Frame */}
                      <div className="relative w-full aspect-[16/9] rounded-2xl p-[2px] bg-[#001f3f] shadow-2xl">
                        {/* Inner White Border - Thinner for elegance */}
                        <div className="w-full h-full bg-white rounded-2xl p-1.5">
                          {/* Image Container */}
                          <div className="relative w-full h-full rounded-xl overflow-hidden bg-gray-900 group">
                            {/* Background Image */}
                            <img
                              src={leftSlide.image}
                              alt={leftSlide.title}
                              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* RIGHT SIDE - Framed Image - Hidden on mobile */}
                    <div className="hidden md:block relative bg-transparent p-1.5 md:p-2 md:flex items-center justify-center">
                      {/* Detailed Navy Blue Border Frame */}
                      <div className="relative w-full aspect-[16/9] rounded-2xl p-[2px] bg-[#001f3f] shadow-2xl">
                        {/* Inner White Border - Thinner for elegance */}
                        <div className="w-full h-full bg-white rounded-2xl p-1.5">
                          {/* Image Container */}
                          <div className="w-full h-full rounded-xl overflow-hidden bg-gray-900">
                            <img
                              src={rightSlide.image}
                              alt={rightSlide.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dot Indicators */}
        <div className="absolute bottom-1 md:bottom-2 left-1/2 -translate-x-1/2 z-10 flex gap-3 items-center justify-center">
          {Array.from({ length: Math.ceil(slides.slice(0, 10).length / 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${index === current
                ? 'bg-[#001f3f] shadow-lg w-12 h-3'
                : 'bg-blue-600 hover:bg-blue-800 w-3 h-3'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;