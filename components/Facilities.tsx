import React, { useState, useEffect } from 'react';
import { BookOpen, Microscope, Trophy, Monitor, Bed, Languages, ArrowRight, ChevronRight } from 'lucide-react';

const facilitiesData = [
  {
    id: 'library',
    title: 'Central Library',
    subtitle: "Knowledge Hub",
    icon: <BookOpen size={24} />,
    description: 'Our central library is a sanctuary of knowledge, housing over 500,000 volumes, rare manuscripts, and providing access to thousands of international digital journals. It features dedicated quiet zones, collaborative pods, and a state-of-the-art digital reading room.',
    image: 'https://ptsnsuniversity.ac.in/PTSNS%20VISHWAVIDYALAYA_files/Library-3LIid-D_.jpg',
    stats: ["500k+ Books", "24/7 Access", "Digital Database"]
  },
  {
    id: 'labs',
    title: 'Advanced Research Labs',
    subtitle: "Innovation Center",
    icon: <Microscope size={24} />,
    description: 'Experience science in action at our NABL-accredited laboratories. Equipped with the latest chromatography, spectroscopy, and molecular modeling tools, these spaces are designed to foster breakthrough research in Physics, Chemistry, and Life Sciences.',
    image: 'https://science.nirmauni.ac.in/wp-content/uploads/sites/18/2024/03/DSF0278_res-lab-1-scaled.jpg',
    stats: ["12 Labs", "Modern Equipment", "Safety First"]
  },
  {
    id: 'sports',
    title: 'Sports Complex',
    subtitle: "Champions Arena",
    icon: <Trophy size={24} />,
    description: 'A sprawling 50-acre sports complex featuring an Olympic-size swimming pool, synthetic athletics track, indoor badminton courts, and a cricket stadium. We believe in nurturing both mental and physical fortitude.',
    image: '/sports.jpg',
    stats: ["50 Acres", "Indoor Stadium", "Olympic Pool"]
  },
  {
    id: 'classrooms',
    title: 'Smart Classrooms',
    subtitle: "Future Learning",
    icon: <Monitor size={24} />,
    description: 'Step into the future of learning with our acoustically treated smart classrooms. Each room is equipped with interactive flat panels, lecture capture systems, and climate control to ensure an immersive learning experience.',
    image: '/smart-class.jpeg',
    stats: ["AC Rooms", "Smart Boards", "Lecture Record"]
  },
  {
    id: 'hostel',
    title: 'Student Residence',
    subtitle: "Home Away From Home",
    icon: <Bed size={24} />,
    description: 'Secure, modern, and vibrant separate hostels for boys and girls. Featuring high-speed Wi-Fi, nutritious collaborative dining halls, gymnasiums, and common rooms that foster lifelong friendships.',
    image: 'https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2000&auto=format&fit=crop',
    stats: ["Wi-Fi Enabled", "Nutritious Food", "24x7 Security"]
  }
];

const Facilities: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-rotate tabs if user hasn't interacted recently
  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
        interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % facilitiesData.length);
        }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden" id="facilities">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[60%] bg-stone-50 skew-y-3 transform origin-top-left -z-10"></div>
      <div className="hidden lg:block absolute right-0 top-1/4 w-64 h-64 bg-turmeric-100/50 rounded-full blur-3xl -z-10"></div>

      <div className="container mx-auto px-2 sm:px-4 md:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 md:mb-20 animate-fade-up">
          <h4 className="text-turmeric-600 font-bold uppercase tracking-[0.2em] text-xs sm:text-sm mb-2 sm:mb-3">Campus Infrastructure</h4>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-earth-900 mb-4 sm:mb-6 relative inline-block">
            Our World-Class Facilities
            <span className="absolute -bottom-1 sm:-bottom-2 left-1/4 right-1/4 h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-turmeric-500 to-transparent"></span>
          </h2>
          <p className="text-xs sm:text-lg text-gray-600 leading-relaxed">
            We provide an environment where students can thrive academically, socially, and physically with state-of-the-art infrastructure.
          </p>
        </div>

        {/* Main Content: Tabbed Interface */}
        <div className="flex flex-col lg:flex-row bg-white rounded-2xl md:rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100 min-h-0 md:min-h-[600px]">
          
          {/* Navigation Sidebar */}
          <div className="w-full lg:w-[35%] bg-earth-900 text-white flex flex-col justify-start lg:justify-center relative overflow-hidden order-1 z-20">
            {/* Texture Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            <div 
                className="
                    flex flex-row lg:flex-col 
                    overflow-x-auto lg:overflow-visible 
                    p-2 sm:p-3 md:p-8 
                    gap-1.5 sm:gap-2 md:gap-3
                    space-y-0 lg:space-y-2 
                    relative z-10 
                    no-scrollbar
                "
                onMouseEnter={() => setIsAutoPlaying(false)} 
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
              {facilitiesData.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(index)}
                  className={`
                    group flex-shrink-0 lg:flex-shrink flex items-center justify-center lg:justify-between 
                    p-2 sm:p-3 md:p-5 rounded-xl transition-all duration-500 border border-transparent 
                    min-w-[140px] sm:w-auto lg:w-full animate-flip-up
                    ${
                    activeTab === index 
                      ? 'bg-gradient-to-r from-turmeric-600 to-turmeric-500 text-white shadow-lg lg:scale-100 lg:translate-x-4' 
                      : 'text-gray-400 bg-white/5 lg:bg-transparent hover:bg-white/10 hover:text-white'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 w-full lg:w-auto">
                    <span className={`p-1 sm:p-1.5 md:p-2 rounded-lg transition-colors duration-300 ${activeTab === index ? 'bg-white/20' : 'bg-transparent group-hover:bg-white/5'}`}>
                        {React.cloneElement(item.icon as React.ReactElement, { size: 18 })}
                    </span>
                    <div className="text-left flex-1 lg:flex-none">
                        <h3 className={`font-bold text-xs sm:text-base md:text-lg leading-tight ${activeTab === index ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                            {item.title}
                        </h3>
                        <p className={`text-[9px] sm:text-xs font-medium mt-0.5 lg:block ${activeTab === index ? 'text-turmeric-100' : 'hidden'}`}>
                            {item.subtitle}
                        </p>
                    </div>
                  </div>
                  {activeTab === index && <ChevronRight size={16} className="animate-slide-in-right hidden lg:block" />}
                </button>
              ))}
            </div>

            {/* Bottom Contact/More Info - Desktop Only */}
            <div className="mt-auto md:mt-8 p-3 sm:p-4 md:p-0 md:pt-8 md:px-8 border-t border-white/10 text-center lg:text-left relative z-10 hidden lg:block">
                <p className="text-xs sm:text-sm text-gray-400 mb-2">Want to see more?</p>
                <a href="/virtual-tour" className="text-turmeric-400 font-bold hover:text-white transition-colors uppercase tracking-wider text-xs flex items-center gap-2">
                    Take a Virtual Tour <ArrowRight size={12} className="sm:size-[14px]" />
                </a>
            </div>
          </div>

          {/* Image & Detail Showcase */}
          <div className="w-full lg:w-[65%] relative bg-gray-50 lg:bg-gray-900 group min-h-[350px] sm:min-h-[400px] md:min-h-[450px] lg:min-h-auto order-2 flex flex-col lg:block">
             {facilitiesData.map((item, index) => (
               <div 
                  key={item.id}
                  className={`
                      lg:absolute lg:inset-0 transition-opacity duration-700 ease-in-out flex flex-col lg:block
                      ${activeTab === index ? 'opacity-100 pointer-events-auto block' : 'opacity-0 pointer-events-none hidden lg:block'}
                  `}
               >
                 {/* Main Image */}
                 <div className="relative h-[200px] sm:h-[250px] lg:h-full w-full overflow-hidden animate-zoom-in">
                    <img 
                       src={item.image} 
                       alt={item.title} 
                       className="w-full h-full object-cover transition-transform duration-[10s] ease-linear transform scale-100 group-hover:scale-110"
                    />
                    {/* Gradient Overlay - Desktop Only */}
                    <div className="hidden lg:block absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/80 md:via-earth-900/60 to-transparent"></div>
                    {/* Gradient Overlay - Mobile Only (Bottom Fade) */}
                    <div className="lg:hidden absolute bottom-0 left-0 w-full h-20 sm:h-24 bg-gradient-to-t from-white to-transparent"></div>
                 </div>
                 
                 {/* Content Container */}
                 <div className="relative lg:absolute lg:bottom-0 lg:left-0 w-full p-4 sm:p-6 lg:p-16 text-earth-900 lg:text-white bg-white lg:bg-transparent flex-grow">
                    <div className="flex items-center gap-2 text-turmeric-600 lg:text-turmeric-400 font-bold uppercase tracking-wider text-xs sm:text-sm mb-2 sm:mb-3">
                        <span className="w-6 sm:w-8 h-0.5 bg-turmeric-500"></span>
                        {item.subtitle}
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl lg:text-5xl font-serif font-bold mb-3 sm:mb-4 lg:mb-4 leading-tight animate-slide-down">
                        {item.title}
                    </h3>

                    <p className="text-gray-600 lg:text-gray-200 text-xs sm:text-base lg:text-lg mb-4 sm:mb-6 lg:mb-8 leading-relaxed max-w-2xl opacity-90 lg:line-clamp-none">
                      {item.description}
                    </p>

                    {/* Stats/Features Row */}
                    <div className="grid grid-cols-3 gap-2 sm:gap-3 border-t border-gray-100 lg:border-white/20 pt-3 sm:pt-4 lg:pt-6">
                        {item.stats.map((stat, idx) => (
                            <div key={idx} className="text-center lg:text-left">
                                <span className="block text-earth-800 lg:text-white font-bold text-[10px] sm:text-xs lg:text-base bg-gray-50 lg:bg-transparent rounded-lg px-2 py-1.5 sm:py-2 lg:p-0 border border-gray-100 lg:border-none h-full flex items-center justify-center lg:justify-start">
                                    {stat}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 sm:mt-6 lg:mt-8 pt-3 sm:pt-4 lg:pt-6 border-t border-gray-100 lg:hidden text-center">
                        <button className="text-turmeric-600 font-bold items-center justify-center gap-2 inline-flex text-xs sm:text-sm uppercase tracking-wide">
                            View More Details <ArrowRight size={14} className="sm:size-[16px]" />
                        </button>
                    </div>
                 </div>
               </div>
             ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Facilities;