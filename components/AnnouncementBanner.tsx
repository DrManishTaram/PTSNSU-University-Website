import React from 'react';
import { Megaphone, ArrowRight } from 'lucide-react';

const AnnouncementBanner: React.FC = () => {
  const announcements = [
    { text: "Admissions for Academic Session 2025-26 are now open!", link: "#apply", label: "New" },
    { text: "PhD Entrance Exam Results declared - Check Now", link: "#results", label: "Results" },
    { text: "International Conference on AI & Sustainability - Register Today", link: "#conference", label: "Event" },
    { text: "Scholarship applications open for Merit Students", link: "#scholarship", label: "Notice" }
  ];

  return (
    <div className="bg-white border-t border-b border-[#001f3f] text-earth-900 relative z-40 h-[38px] overflow-hidden flex items-center">
      <div className="w-full flex items-center gap-4 h-full">

        {/* Label Icon - Stationary */}
        <div className="flex-shrink-0 flex items-center gap-3 z-10 bg-blue-600 px-4 border-r border-blue-700 h-full">
          <span className="flex-shrink-0 bg-white p-1 rounded-full text-blue-600 animate-pulse">
            <Megaphone size={14} />
          </span>
          <span className="font-bold text-[11px] uppercase tracking-wider text-white hidden md:block">
            Announcements
          </span>
        </div>

        {/* Marquee Container */}
        <div className="flex-1 overflow-hidden relative h-full flex items-center group">
          <div className="flex items-center space-x-12 whitespace-nowrap animate-marquee group-hover:[animation-play-state:paused] will-change-transform">
            {/* Duplicate the content enough times to ensure smooth loop */}
            {[...announcements, ...announcements, ...announcements].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 text-xs font-medium">
                <span className={`
                            px-1.5 py-0.5 rounded-[3px] text-[10px] font-bold uppercase tracking-wide
                            ${item.label === 'New' ? 'bg-red-100 text-red-600' :
                    item.label === 'Results' ? 'bg-green-100 text-green-600' :
                      item.label === 'Event' ? 'bg-purple-100 text-purple-600' :
                        'bg-blue-100 text-blue-600'}
                        `}>
                  {item.label}
                </span>
                <span className="text-earth-800">{item.text}</span>
                <a href={item.link} className="flex items-center text-[10px] sm:text-xs font-bold text-turmeric-700 hover:text-turmeric-900 underline decoration-turmeric-300 hover:decoration-turmeric-600 underline-offset-2 transition-all">
                  Check Details <ArrowRight size={10} className="ml-1" />
                </a>
                <span className="text-turmeric-300 mx-2">•</span>
              </div>
            ))}
          </div>

          {/* Fade Gradients for visual polish */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBanner;