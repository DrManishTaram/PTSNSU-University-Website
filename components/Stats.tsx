import React, { useState, useEffect, useRef } from 'react';
import { Users, BookOpen, Award, GraduationCap } from 'lucide-react';

// Animated Counter Component
const Counter: React.FC<{ end: number; duration?: number; suffix?: string }> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLHeadingElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const increment = end / (duration / 16); // 60fps
          
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return <span ref={countRef}>{count}{suffix}</span>;
};

const StatItem: React.FC<{ icon: React.ReactNode; count: number; suffix: string; label: string; delay: string }> = ({ icon, count, suffix, label, delay }) => (
  <div className={`flex flex-col items-center justify-center p-8 group relative animate-fade-up`} style={{ animationDelay: delay }}>
    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
    <div className="mb-6 p-5 bg-gradient-to-br from-white/10 to-white/5 rounded-full text-turmeric-400 group-hover:bg-turmeric-600 group-hover:text-white transition-all duration-500 transform group-hover:scale-110 shadow-lg border border-white/10">
      {React.cloneElement(icon as React.ReactElement, { size: 36 })}
    </div>
    <h3 className="text-5xl font-bold text-white mb-3 font-serif flex items-baseline">
        <Counter end={count} suffix={suffix} />
    </h3>
    <p className="text-turmeric-100 font-bold tracking-widest uppercase text-xs relative z-10">
        <span className="w-2 h-2 bg-turmeric-500 inline-block rounded-full mr-2"></span>
        {label}
    </p>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-earth-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/cubes.png')` }}></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10">
          <StatItem icon={<Users />} count={5000} suffix="+" label="Students Enrolled" delay="0s" />
          <StatItem icon={<BookOpen />} count={120} suffix="+" label="Courses Offered" delay="0.1s" />
          <StatItem icon={<Award />} count={50} suffix="+" label="Awards Won" delay="0.2s" />
          <StatItem icon={<GraduationCap />} count={15000} suffix="+" label="Alumni Network" delay="0.3s" />
        </div>
      </div>
    </section>
  );
};

export default Stats;