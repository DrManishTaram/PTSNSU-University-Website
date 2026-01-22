import React from 'react';
import { Bell, FileText, Briefcase, ArrowRight } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  items: { text: string; link?: string; date?: string }[];
  accentColor: string; // Tailwind class like 'bg-turmeric-600'
  borderColor: string; // Tailwind border class like 'border-turmeric-200'
  lightBgColor: string; // Light background for rows like 'bg-turmeric-50'
}

const InfoCard: React.FC<CardProps> = ({ icon, title, items, accentColor, borderColor, lightBgColor }) => {
  const itemCount = items.length;
  const animationDuration = itemCount * 4; // 4 seconds per item
  const sanitizedTitle = title.replace(/[^a-zA-Z0-9]/g, '').toLowerCase(); // Sanitize for CSS class

  return (
    <div 
      className="bg-white p-0 shadow-2xl rounded-sm overflow-hidden transform transition-all duration-500 hover:-translate-y-3 group h-full flex flex-col relative z-20"
    >
      {/* Top Accent Bar */}
      <div className={`h-1.5 w-full ${accentColor}`}></div>
      
      <div className="p-6 flex-grow relative flex flex-col">
          {/* Background Icon Watermark - More Prominent */}
          <div className={`absolute -right-6 -top-6 opacity-[0.15] transform rotate-12 transition-transform group-hover:rotate-0 duration-700`}>
              {React.cloneElement(icon as React.ReactElement, { size: 140, className: accentColor.replace('bg-', 'text-') })}
          </div>

          <div className="flex items-center space-x-3 mb-4 relative z-10">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg ${accentColor}`}>
                  {React.cloneElement(icon as React.ReactElement, { size: 18 })}
              </div>
              <h3 className="text-lg font-bold font-serif text-earth-900 group-hover:text-turmeric-700 transition-colors">{title}</h3>
          </div>
          
          {/* Marquee Container */}
          <div className="relative z-10 flex-grow overflow-hidden h-80">
            <style>{`
              @keyframes marqueeUp-${sanitizedTitle} {
                0% {
                  transform: translateY(0);
                }
                100% {
                  transform: translateY(-${itemCount * 75}px);
                }
              }
              .marquee-container-${sanitizedTitle} {
                animation: marqueeUp-${sanitizedTitle} ${animationDuration}s linear infinite;
              }
            `}</style>
            <ul className={`space-y-2 marquee-container-${sanitizedTitle}`}>
                {[...items, ...items].map((item, idx) => (
                <li key={idx} className={`${lightBgColor} border-l-4 ${borderColor} p-3 rounded-sm group/item transition-all hover:shadow-md flex flex-col justify-between flex-shrink-0 h-[75px]`}>
                    <a href={item.link || '#'} className="block">
                      <span className="text-gray-700 text-xs font-medium group-hover/item:text-gray-900 transition-colors line-clamp-2 block mb-1">
                          {item.text}
                      </span>
                      {item.date && (
                        <span className="text-xs text-gray-500 font-semibold block">
                          {item.date}
                        </span>
                      )}
                    </a>
                </li>
                ))}
            </ul>
          </div>
      </div>
      
      <div className="bg-slate-50 p-2 border-t border-gray-100 flex justify-between items-center group-hover:bg-gray-100 transition-colors">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider text-sm">Discover</span>
          <button className={`w-7 h-7 rounded-full flex items-center justify-center ${accentColor} text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300`}>
              <ArrowRight size={12} />
          </button>
      </div>
    </div>
  );
};

const InfoCards: React.FC = () => {
  return (
    // New standalone section for notifications placed below the hero/slider
    <section className="relative z-10 mt-6 sm:mt-8 md:mt-12 pb-10 sm:pb-12 md:pb-16 px-2 sm:px-4 bg-transparent">
      <div className="container mx-auto">
        {/* Section header - Enhanced with gradient and larger size */}
        <div className="mb-2 sm:mb-3 md:mb-4 text-center max-w-3xl mx-auto">
          <h2 className="text-[21px] sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-2 sm:mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-orange-400">
              University Notifications
            </span>
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-600 font-medium">Latest updates, quick links and highlights from the university</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          <InfoCard 
            icon={<Bell />}
            title="Student Notifications"
            items={[
              { text: "Exam Schedule for B.A./B.Sc. First Year Private Students (2024-25)", date: "Jan 20, 2026" },
              { text: "Registration date extended for PhD Entrance Exam Phase II", date: "Jan 18, 2026" },
              { text: "Important Notice regarding Merit Scholarships", date: "Jan 15, 2026" },
              { text: "Department of English seminar postponed", date: "Jan 12, 2026" }
            ]}
            accentColor="bg-turmeric-600"
            borderColor="border-turmeric-300"
            lightBgColor="bg-turmeric-50"
          />
          <InfoCard 
            icon={<FileText />}
            title="University Circulars"
            items={[
              { text: "Academic Calendar & Holiday List 2025", link: "#", date: "Jan 22, 2026" },
              { text: "Office Memo: Updated Leave Policy for Staff", link: "#", date: "Jan 19, 2026" },
              { text: "Circular: Revised Fee Structure 2025-26", link: "#", date: "Jan 16, 2026" },
              { text: "Administrative Notice: Campus Development Plan", link: "#", date: "Jan 13, 2026" }
            ]}
            accentColor="bg-forest-600"
            borderColor="border-forest-300"
            lightBgColor="bg-forest-50"
          />
          <InfoCard 
            icon={<Briefcase />}
            title="Recruitment & Tenders"
            items={[
              { text: "Mega Job Fair: 50+ Companies Visiting Campus", date: "Jan 22, 2026" },
              { text: "Tender Notice: Campus Infrastructure Development Project", date: "Jan 19, 2026" },
              { text: "Faculty Recruitment: 15 Positions Open in Various Departments", date: "Jan 15, 2026" },
              { text: "Tender for Supply of Laboratory Equipment", date: "Jan 10, 2026" }
            ]}
            accentColor="bg-emerald-700"
            borderColor="border-emerald-300"
            lightBgColor="bg-emerald-50"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoCards;