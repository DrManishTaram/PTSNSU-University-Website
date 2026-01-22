import React, { useState } from 'react';
import { BookOpen, GraduationCap, Scroll, Award, ChevronRight, CheckCircle2 } from 'lucide-react';

// Data types
type ProgramLevel = 'Diploma' | 'UG' | 'PG' | 'PhD';

interface Program {
  title: string;
  duration: string;
  description: string;
  icon: React.ReactNode;
}

const programsData: Record<ProgramLevel, Program[]> = {
  Diploma: [
    { title: "Diploma in Pharmacy", duration: "2 Years", description: "Foundational course in pharmaceutical sciences and practice.", icon: <Scroll size={20} /> },
    { title: "D.C.A.", duration: "1 Year", description: "Diploma in Computer Applications covering basics of IT.", icon: <Scroll size={20} /> },
    { title: "P.G.D.C.A.", duration: "1 Year", description: "Post Graduate Diploma in Computer Applications for advanced IT skills.", icon: <Scroll size={20} /> },
    { title: "Post Graduate Diploma in Yoga", duration: "1 Year", description: "Comprehensive training in Yoga and holistic health.", icon: <Scroll size={20} /> }
  ],
  UG: [
    { title: "Bachelor of Arts (B.A.)", duration: "3/4 Years", description: "Specializations in History, Pol. Science, Sociology, Economics, Hindi, English, Sanskrit, Geography.", icon: <GraduationCap size={20} /> },
    { title: "Bachelor of Science (B.Sc.)", duration: "3/4 Years", description: "Physics, Chemistry, Maths, Botany, Zoology, Geology, Biotechnology, Computer Science.", icon: <GraduationCap size={20} /> },
    { title: "Bachelor of Commerce (B.Com)", duration: "3/4 Years", description: "Comprehensive commerce education including Honors and Tax Procedure.", icon: <GraduationCap size={20} /> },
    { title: "B.B.A.", duration: "3/4 Years", description: "Bachelor of Business Administration focusing on management skills.", icon: <GraduationCap size={20} /> },
    { title: "B.C.A.", duration: "3/4 Years", description: "Bachelor of Computer Applications for software development careers.", icon: <GraduationCap size={20} /> },
    { title: "B.S.W.", duration: "3/4 Years", description: "Bachelor of Social Work dedicated to community service and social welfare.", icon: <GraduationCap size={20} /> }
  ],
  PG: [
    { title: "Master of Arts (M.A.)", duration: "2 Years", description: "Advanced studies in Humanities and Social Sciences disciplines.", icon: <BookOpen size={20} /> },
    { title: "Master of Science (M.Sc.)", duration: "2 Years", description: "Specialized research-oriented programs in various Science subjects.", icon: <BookOpen size={20} /> },
    { title: "Master of Commerce (M.Com)", duration: "2 Years", description: "Advanced commerce studies focusing on accounting and finance.", icon: <BookOpen size={20} /> },
    { title: "M.B.A.", duration: "2 Years", description: "Master of Business Administration developing future corporate leaders.", icon: <BookOpen size={20} /> },
    { title: "M.S.W.", duration: "2 Years", description: "Master of Social Work for professional social work practice.", icon: <BookOpen size={20} /> }
  ],
  PhD: [
    { title: "Doctoral Programs", duration: "Min. 3 Years", description: "Research opportunities in Hindi, English, Sociology, Pol. Sci, Economics, Geography, Physics, Chemistry, Botany, Zoology, Maths, Commerce.", icon: <Award size={20} /> }
  ]
};

const Academics: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ProgramLevel>('UG');

  return (
    <section id="academics" className="py-16 relative overflow-hidden bg-[#F8F9FA]">
        {/* ornate background elements */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#1e3a8a 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-turmeric-50/60 to-transparent opacity-60 blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-blue-50/60 to-transparent opacity-60 blur-3xl pointer-events-none translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-2 sm:px-4 relative z-10">
        {/* Header content */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
            <span className="inline-block py-1 px-3 sm:px-4 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold tracking-widest uppercase text-[10px] sm:text-xs mb-2 sm:mb-3 shadow-sm">
              Academic Programs
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif font-bold text-earth-900 leading-tight mb-2 sm:mb-3">
              Our Academic <br/>
              <span className="relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-turmeric-600 to-amber-500">Programs & Courses</span>
                <span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-2 sm:h-3 bg-turmeric-100/50 -z-10 skew-x-12"></span>
              </span>
            </h2>
            <p className="text-gray-600 text-xs sm:text-base leading-relaxed font-light">
              Explore our comprehensive range of Diploma, Undergraduate, Postgraduate, and Doctoral programs.
            </p>
        </div>

        {/* Premium Tab Navigation */}
        <div className="flex justify-start md:justify-center mb-6 sm:mb-8 md:mb-10 overflow-x-auto pb-3 sm:pb-4 md:pb-0 no-scrollbar px-2 sm:px-0 md:px-0">
            <div className="inline-flex md:flex-wrap gap-1 sm:gap-2 p-1 sm:p-1.5 bg-white rounded-full shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] border border-gray-100 min-w-max">
                {(['UG', 'PG', 'PhD', 'Diploma'] as ProgramLevel[]).map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
                            relative px-3 sm:px-6 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm tracking-wide transition-all duration-500 overflow-hidden whitespace-nowrap
                            ${activeTab === tab 
                                ? 'text-white shadow-md' 
                                : 'text-gray-500 hover:text-earth-900 hover:bg-gray-50'}
                        `}
                    >
                        {activeTab === tab && (
                            <div className="absolute inset-0 bg-earth-900 z-0">
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] animate-shimmer"></div>
                            </div>
                        )}
                        <span className="relative z-10">
                            {tab === 'UG' ? 'Undergraduate' : tab === 'PG' ? 'Postgraduate' : tab === 'PhD' ? 'Doctoral (PhD)' : 'Diploma'}
                        </span>
                    </button>
                ))}
            </div>
        </div>

        {/* Tab Content - Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {programsData[activeTab].map((program, idx) => (
                <div 
                    key={idx} 
                    className="group relative bg-white rounded-[1.5rem] p-[2px] shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 h-full"
                >
                    {/* Default Beautiful Gradient Border */}
                    <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-turmeric-400 via-turmeric-200 to-blue-400 opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Hover Dark Fill Overlay */}
                    <div className="absolute inset-0 rounded-[1.5rem] bg-earth-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    {/* Card InnerContent */}
                    <div className="relative h-full bg-white group-hover:bg-transparent rounded-[1.3rem] p-4 sm:p-6 flex flex-col overflow-hidden transition-colors duration-500">
                        {/* Decorative background blob - Default Visible, Hide on Hover */}
                         <div className="absolute -right-10 -top-10 w-40 h-40 bg-turmeric-50 rounded-full group-hover:opacity-0 transition-opacity duration-500"></div>

                        <div className="relative z-10 flex items-start justify-between mb-4 sm:mb-6">
                            {/* Icon Container - Color by default, Glass on Hover */}
                            <div className={`
                                w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shadow-sm border border-gray-100 group-hover:border-white/10
                                ${activeTab === 'PhD' ? 'bg-forest-50 text-forest-600' : activeTab === 'PG' ? 'bg-blue-50 text-blue-600' : 'bg-turmeric-50 text-turmeric-600'}
                                group-hover:bg-white/10 group-hover:text-white
                                transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-3
                            `}>
                                {React.cloneElement(program.icon as React.ReactElement, { size: 18 })}
                            </div>
                            {/* Tag - Color by default, White Text on Hover */}
                            <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest py-1 sm:py-1.5 px-2 sm:px-2.5 rounded-lg border border-turmeric-100 text-turmeric-700 bg-white group-hover:bg-white/10 group-hover:text-white group-hover:border-white/20 transition-colors">
                                {program.duration}
                            </span>
                        </div>

                        {/* Title - Gradient by default, White on Hover */}
                        <h3 className="text-lg sm:text-xl font-serif font-bold mb-2 sm:mb-3 transition-colors duration-300">
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-turmeric-700 to-turmeric-500 group-hover:text-white group-hover:bg-none">
                            {program.title}
                            </span>
                        </h3>
                        
                        {/* Desc - Gray by default, Light Gray on Hover */}
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6 flex-grow group-hover:text-gray-300 transition-colors">
                            {program.description}
                        </p>

                        <div className="mt-auto">
                            <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold border-b-2 pb-1 transition-all duration-300 group-hover:gap-3 
                                text-earth-900 border-turmeric-500 
                                group-hover:text-turmeric-400 group-hover:border-turmeric-400">
                                 Course Details <ChevronRight size={12} className="sm:size-[14px]" />
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 sm:mt-10 md:mt-12 text-center">
             <a href="/admission-notification" className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3.5 font-bold text-white transition-all duration-200 bg-turmeric-600 font-serif rounded-full hover:bg-turmeric-700 hover:shadow-lg hover:shadow-turmeric-500/30 overflow-hidden text-xs sm:text-sm">
                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                <span className="relative flex items-center gap-2">
                    Start Your Application <CheckCircle2 size={14} className="sm:size-[16px]" />
                </span>
             </a>
             <p className="mt-2 sm:mt-3 text-[9px] sm:text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                Admission Open for 2025-26
             </p>
        </div>

      </div>
    </section>
  );
};

export default Academics;