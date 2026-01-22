import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trophy, Award, Medal, Star, Filter, ArrowUpRight, GraduationCap, Users, Landmark, Cpu } from 'lucide-react';

// Data Mock
const achievements = [
  {
    id: 1,
    category: 'Student',
    title: "Won India's Biggest AI Hackathon",
    description: "AI Club students Anukalp Dwivedi & Sourabh Majhi secured 2nd place among 26,000 participants, beating 32 IITs. Received investment offers from MNCs.",
    date: "Jan 2025",
    image: "/hackathon-winners.jpg",
    icon: <Cpu size={20} />,
    link: "/achievements/ai-hackathon"
  },
  {
    id: 2,
    category: 'University',
    title: "NAAC 'A++' Grade Accreditation",
    description: "Awarded the highest grade by the National Assessment and Accreditation Council for excellence in education and infrastructure.",
    date: "Dec 2024",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1000&auto=format&fit=crop",
    icon: <Landmark size={20} />
  },
  {
    id: 3,
    category: 'Professor',
    title: "Dr. Sharma Published in 'Nature'",
    description: "Dr. Anjali Sharma's groundbreaking research on renewable energy materials was featured in the prestigious Nature Journal.",
    date: "Nov 2024",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
    icon: <Users size={20} />
  },
  {
    id: 4,
    category: 'University',
    title: "Best Emerging University Award",
    description: "Recognized by the Ministry of Education as the fastest-growing state university in Central India.",
    date: "Aug 2024",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop",
    icon: <Trophy size={20} />
  },
  {
    id: 5,
    category: 'Student',
    title: "National Sports Championship",
    description: "Rohan Singh represented the university and won the Gold Medal in Archery at the All India Inter-University Meet.",
    date: "Oct 2024",
    image: "https://images.unsplash.com/photo-1620310228384-7557760c6d26?q=80&w=1000&auto=format&fit=crop",
    icon: <Medal size={20} />
  },
  {
    id: 6,
    category: 'Professor',
    title: "Lifetime Achievement Award",
    description: "Prof. R.K. Mishra received the Lifetime Achievement Award from the State Science Congress for his contribution to Botany.",
    date: "Sep 2024",
    image: "https://images.unsplash.com/photo-1544526226-d4568090ffb8?q=80&w=1000&auto=format&fit=crop",
    icon: <Award size={20} />
  }
];

const Achievements: React.FC = () => {
    const [filter, setFilter] = useState('All');

    const filteredItems = filter === 'All' 
        ? achievements 
        : achievements.filter(item => item.category === filter);

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-stone-50 to-white relative overflow-hidden" id="achievements">
      
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-turmeric-50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-2 sm:px-4 md:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 sm:mb-12 md:mb-16 gap-3 sm:gap-4 md:gap-6">
            <div className="max-w-2xl">
                <div className="flex items-center gap-2 text-turmeric-600 font-bold uppercase tracking-widest text-[10px] sm:text-sm mb-2 sm:mb-3">
                    <Star size={14} className="sm:size-[16px]" fill="currentColor" />
                    <span>Achievements & Recognitions</span>
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-earth-900 leading-tight">
                    Our <span className="text-turmeric-600 underline decoration-turmeric-200 underline-offset-4">Achievements</span> & Awards
                </h2>
                <p className="mt-2 sm:mt-4 text-gray-600 text-xs sm:text-lg">
                    Recognizing the outstanding milestones of our institution, faculty, and students.
                </p>
            </div>

            {/* Stats Banner - Stack on mobile */}
            <div className="flex gap-3 sm:gap-6 md:gap-8 bg-white p-2.5 sm:p-4 md:p-6 rounded-2xl shadow-xl border border-turmeric-100 w-full md:w-auto flex-wrap md:flex-nowrap justify-center md:justify-start">
                <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-earth-900">50+</div>
                    <div className="text-[9px] sm:text-xs text-gray-500 uppercase tracking-wide font-medium mt-0.5">Awards</div>
                </div>
                <div className="w-px bg-gray-200 hidden sm:block"></div>
                <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-earth-900">120+</div>
                    <div className="text-[9px] sm:text-xs text-gray-500 uppercase tracking-wide font-medium mt-0.5">Patents</div>
                </div>
                <div className="w-px bg-gray-200 hidden sm:block"></div>
                <div className="text-center">
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-earth-900">15k+</div>
                    <div className="text-[9px] sm:text-xs text-gray-500 uppercase tracking-wide font-medium mt-0.5">Alumni</div>
                </div>
            </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-1.5 sm:gap-2 mb-6 sm:mb-8 md:mb-10 overflow-x-auto pb-2 sm:pb-3 no-scrollbar">
            {['All', 'University', 'Student', 'Professor'].map((cat) => (
                <button
                    key={cat}
                    onClick={() => setFilter(cat)}
                    className={`px-3 sm:px-6 py-1.5 sm:py-2.5 rounded-full font-medium text-xs sm:text-sm transition-all duration-300 border whitespace-nowrap ${
                        filter === cat 
                        ? 'bg-earth-900 text-white border-earth-900 shadow-md transform scale-105' 
                        : 'bg-white text-gray-500 border-gray-200 hover:border-turmeric-400 hover:text-turmeric-600'
                    }`}
                >
                    {cat} Achievements
                </button>
            ))}
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredItems.map((item) => {
                const CardWrapper = item.link ? Link : 'div';
                const cardProps = item.link ? { to: item.link } : {};
                
                return (
                <CardWrapper 
                    key={item.id} 
                    {...cardProps}
                    className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-turmeric-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full cursor-pointer"
                >
                    {/* Image Area */}
                    <div className="h-40 sm:h-48 md:h-60 overflow-hidden relative">
                        <img 
                            src={item.image} 
                            alt={item.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                        
                        {/* Date Badge */}
                        <div className="absolute top-2 sm:top-4 left-2 sm:left-4 bg-white/90 backdrop-blur-sm px-2 sm:px-3 py-0.5 sm:py-1 rounded-lg text-[10px] sm:text-xs font-bold text-earth-900 shadow-sm">
                            {item.date}
                        </div>

                        {/* Category Badge */}
                        <div className={`absolute bottom-2 sm:bottom-4 right-2 sm:right-4 text-white text-[9px] sm:text-xs font-bold px-2 sm:px-3 py-0.5 sm:py-1 rounded-full uppercase tracking-wide shadow-sm flex items-center gap-1
                            ${item.category === 'University' ? 'bg-turmeric-600' : 
                              item.category === 'Student' ? 'bg-blue-600' : 'bg-purple-600'}
                        `}>
                            {React.cloneElement(item.icon as React.ReactElement, { size: 12 })}
                            <span className="hidden sm:inline">{item.category}</span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-grow">
                        <h3 className="text-base sm:text-lg md:text-xl font-serif font-bold text-earth-900 mb-2 sm:mb-3 group-hover:text-turmeric-600 transition-colors">
                            {item.title}
                        </h3>
                        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 md:mb-6 flex-grow">
                            {item.description}
                        </p>
                        
                        <div className="pt-3 sm:pt-4 md:pt-6 border-t border-gray-100 flex items-center justify-between">
                            <span className="text-[9px] sm:text-xs font-bold text-gray-400 uppercase tracking-wider">Read Story</span>
                            <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-stone-50 text-earth-900 flex items-center justify-center group-hover:bg-turmeric-500 group-hover:text-white transition-all duration-300">
                                <ArrowUpRight size={16} className="sm:size-[18px]" />
                            </div>
                        </div>
                    </div>
                </CardWrapper>
            )})}
        </div>

        {/* View All Button */}
        <div className="mt-8 sm:mt-12 md:mt-16 text-center">
            <button className="inline-flex items-center gap-2 px-4 sm:px-8 py-2 sm:py-3 bg-white border-2 border-turmeric-500 text-turmeric-700 font-bold rounded-full hover:bg-turmeric-500 hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg uppercase tracking-wider text-xs sm:text-sm">
                View All Achievements
                <ArrowUpRight size={14} className="sm:size-[16px]" />
            </button>
        </div>

      </div>
    </section>
  );
};

export default Achievements;
