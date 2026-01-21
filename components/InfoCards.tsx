import React from 'react';
import { Bell, Link, Star, ArrowRight } from 'lucide-react';

interface CardProps {
  icon: React.ReactNode;
  title: string;
  items: { text: string; link?: string }[];
  accentColor: string; // Tailwind class like 'bg-turmeric-600'
}

const InfoCard: React.FC<CardProps> = ({ icon, title, items, accentColor }) => (
  <div 
    className="bg-white p-0 shadow-2xl rounded-sm overflow-hidden transform transition-all duration-500 hover:-translate-y-3 group h-full flex flex-col relative z-20"
  >
    {/* Top Accent Bar */}
    <div className={`h-1.5 w-full ${accentColor}`}></div>
    
    <div className="p-8 flex-grow relative">
        {/* Background Icon Watermark */}
        <div className={`absolute -right-6 -top-6 opacity-[0.07] transform rotate-12 transition-transform group-hover:rotate-0 duration-700`}>
            {React.cloneElement(icon as React.ReactElement, { size: 140, className: accentColor.replace('bg-', 'text-') })}
        </div>

        <div className="flex items-center space-x-4 mb-6 relative z-10">
            <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg ${accentColor}`}>
                {React.cloneElement(icon as React.ReactElement, { size: 20 })}
            </div>
            <h3 className="text-xl font-bold font-serif text-earth-900 group-hover:text-turmeric-700 transition-colors">{title}</h3>
        </div>
        
        <ul className="space-y-4 relative z-10">
            {items.map((item, idx) => (
            <li key={idx} className="group/item border-b border-gray-100 last:border-0 pb-3 last:pb-0">
                <a href={item.link || '#'} className="flex items-start space-x-3 cursor-pointer">
                <ArrowRight size={14} className={`mt-1 flex-shrink-0 text-gray-300 group-hover/item:${accentColor.replace('bg-', 'text-')} transition-colors`} />
                <span className="text-gray-600 text-sm font-medium group-hover/item:text-gray-900 transition-colors line-clamp-2">
                    {item.text}
                </span>
                </a>
            </li>
            ))}
        </ul>
    </div>
    
    <div className="bg-slate-50 p-4 border-t border-gray-100 flex justify-between items-center group-hover:bg-gray-100 transition-colors">
        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">Discover</span>
        <button className={`w-8 h-8 rounded-full flex items-center justify-center ${accentColor} text-white opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300`}>
            <ArrowRight size={14} />
        </button>
    </div>
  </div>
);

const InfoCards: React.FC = () => {
  return (
    // New standalone section for notifications placed below the hero/slider
    <section className="relative z-10 mt-12 pb-16 px-4 bg-transparent">
      <div className="container mx-auto">
        {/* Section header */}
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-earth-900">University Notifications</h2>
          <p className="text-sm text-gray-500 mt-2">Latest updates, quick links and highlights from the university</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <InfoCard 
            icon={<Bell />}
            title="Latest Notifications"
            items={[
              { text: "Exam Schedule for B.A./B.Sc. First Year Private Students (2024-25)" },
              { text: "Registration date extended for PhD Entrance Exam Phase II" },
              { text: "Important Notice regarding Merit Scholarships" },
              { text: "Department of English seminar postponed" }
            ]}
            accentColor="bg-turmeric-600"
          />
          <InfoCard 
            icon={<Link />}
            title="Quick Links"
            items={[
              { text: "Academic Calendar & Holiday List 2025", link: "#" },
              { text: "Samarth Portal Student Login", link: "#" },
              { text: "Download Exam Admit Card", link: "#" },
              { text: "Anti-Ragging Affidavits & Guidelines", link: "#" }
            ]}
            accentColor="bg-forest-600"
          />
          <InfoCard 
            icon={<Star />}
            title="University Highlights"
            items={[
              { text: "University awarded 'A' Grade by NAAC" },
              { text: "Vice Chancellor's Vision 2030 Document released" },
              { text: "New Smart Library Block inaugurated" },
              { text: "Mega Job Fair: 50+ Companies Visiting" }
            ]}
            accentColor="bg-emerald-700"
          />
        </div>
      </div>
    </section>
  );
};

export default InfoCards;