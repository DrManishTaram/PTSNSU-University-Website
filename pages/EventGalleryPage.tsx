import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
    Calendar, Camera, Image, MapPin, Users, ArrowRight
} from 'lucide-react';

// Mock Event Data
interface GalleryImage {
    id: string;
    src: string;
    alt: string;
    type: 'image' | 'video';
}

interface Event {
    id: string;
    title: string;
    date: string;
    month: string;
    year: number;
    location: string;
    description: string;
    attendees: number;
    coverImage: string;
    gallery: GalleryImage[];
    tags: string[];
}

const eventsData: Event[] = [
    {
        id: 'convocation-2025',
        title: 'Annual Convocation 2025',
        date: '25 February 2025',
        month: 'February',
        year: 2025,
        location: 'University Auditorium',
        description: 'The grand ceremony honoring our graduating batch with dignitaries and special guests.',
        attendees: 2500,
        coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&q=80', alt: 'Convocation Main', type: 'image' },
            { id: '2', src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&q=80', alt: 'Graduates', type: 'image' },
            { id: '3', src: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=600&q=80', alt: 'Ceremony', type: 'image' },
        ],
        tags: ['Official', 'Annual']
    },
    {
        id: 'ai-hackathon-2025',
        title: "India's Biggest AI Hackathon Victory",
        date: '15 January 2025',
        month: 'January',
        year: 2025,
        location: 'Virtual Event',
        description: 'PTSNS AI Club secured 2nd Runner-Up position among 26,000+ participants.',
        attendees: 150,
        coverImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80', alt: 'Hackathon', type: 'image' },
            { id: '2', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80', alt: 'Team', type: 'image' },
        ],
        tags: ['Achievement', 'Tech']
    },
    {
        id: 'annual-fest-2024',
        title: 'Sharad Utsav 2024',
        date: '20 November 2024',
        month: 'November',
        year: 2024,
        location: 'University Campus',
        description: 'The annual cultural extravaganza featuring music, dance, drama, and art.',
        attendees: 5000,
        coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80', alt: 'Festival', type: 'image' },
            { id: '2', src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80', alt: 'Performance', type: 'image' },
            { id: '3', src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=600&q=80', alt: 'Concert', type: 'image' },
            { id: '4', src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&q=80', alt: 'Crowd', type: 'image' },
        ],
        tags: ['Cultural', 'Annual']
    },
    {
        id: 'yoga-day-2024',
        title: 'International Yoga Day',
        date: '21 June 2024',
        month: 'June',
        year: 2024,
        location: 'University Ground',
        description: 'Mass yoga session with participation from faculty and students.',
        attendees: 1200,
        coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80', alt: 'Yoga', type: 'image' },
        ],
        tags: ['Wellness', 'NSS']
    },
    {
        id: 'orientation-2024',
        title: 'Freshers Orientation 2024',
        date: '10 August 2024',
        month: 'August',
        year: 2024,
        location: 'Main Auditorium',
        description: 'Welcoming the new batch of students to the PTSNS family.',
        attendees: 800,
        coverImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=600&q=80', alt: 'Orientation', type: 'image' },
            { id: '2', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80', alt: 'Welcome', type: 'image' },
        ],
        tags: ['Academic', 'Orientation']
    },
    {
        id: 'republic-day-2024',
        title: 'Republic Day Celebration',
        date: '26 January 2024',
        month: 'January',
        year: 2024,
        location: 'Central Lawn',
        description: 'Flag hoisting ceremony followed by cultural programs and NCC parade.',
        attendees: 1500,
        coverImage: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=600&q=80', alt: 'Republic Day', type: 'image' },
        ],
        tags: ['National', 'NCC']
    },
    {
        id: 'sports-meet-2023',
        title: 'Inter-University Sports Meet',
        date: '15 December 2023',
        month: 'December',
        year: 2023,
        location: 'Sports Complex',
        description: 'Three-day sports extravaganza with teams from 20+ universities.',
        attendees: 3000,
        coverImage: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=600&q=80', alt: 'Sports', type: 'image' },
            { id: '2', src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80', alt: 'Athletics', type: 'image' },
        ],
        tags: ['Sports', 'Annual']
    },
];

const years = [2025, 2024, 2023];
const months = ['All', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const EventGalleryPage: React.FC = () => {
    const [selectedYear, setSelectedYear] = useState<number>(2025);
    const [selectedMonth, setSelectedMonth] = useState<string>('All');

    // Filter events
    const filteredEvents = eventsData.filter(event => {
        const yearMatch = event.year === selectedYear;
        const monthMatch = selectedMonth === 'All' || event.month === selectedMonth;
        return yearMatch && monthMatch;
    });

    return (
        <main className="min-h-screen bg-[#FDFCFE] text-slate-800 font-sans selection:bg-amber-100 selection:text-amber-900">
            
            {/* 
                HERO SECTION
            */}
            <section className="relative pt-32 pb-40 overflow-hidden bg-white">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-amber-100/40 rounded-full blur-[120px] mix-blend-multiply"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-indigo-100/30 rounded-full blur-[100px] mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.25] mix-blend-overlay"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/60 border border-white/70 mb-8 shadow-sm backdrop-blur-md">
                            <Camera size={14} className="text-amber-600" />
                            <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Media & Archives</span>
                        </div>

                        <h1 className="text-6xl md:text-8xl font-serif font-medium tracking-tight mb-6 leading-[0.95] text-slate-900">
                            Moments <br/>
                            <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-500 to-rose-500">
                                That Matter.
                            </span>
                        </h1>

                        <p className="text-xl text-slate-500 max-w-2xl leading-relaxed mb-12 font-light">
                            Relive the history, celebrations, and milestones of <span className="text-slate-900 font-semibold">PTSNS University</span> through our curated gallery.
                        </p>

                        {/* Year Tabs */}
                        <div className="flex items-center gap-2 p-2 bg-white/70 backdrop-blur-md rounded-full border border-slate-100 shadow-lg shadow-slate-200/50">
                            {years.map((year) => (
                                <button
                                    key={year}
                                    onClick={() => { setSelectedYear(year); setSelectedMonth('All'); }}
                                    className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                                        selectedYear === year
                                            ? 'bg-slate-900 text-white shadow-md'
                                            : 'text-slate-600 hover:bg-slate-100'
                                    }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                FILTER & GALLERY
            */}
            <section className="relative z-20 pb-32 -mt-16">
                <div className="container mx-auto px-4">
                    
                    {/* Month Filter Bar */}
                    <div className="mb-12 overflow-x-auto pb-4 no-scrollbar">
                        <div className="flex items-center gap-3 w-max mx-auto">
                            {months.map((month) => (
                                <button
                                    key={month}
                                    onClick={() => setSelectedMonth(month)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all border ${
                                        selectedMonth === month
                                            ? 'bg-amber-500 text-white border-amber-500 shadow-lg shadow-amber-200'
                                            : 'bg-white text-slate-500 border-slate-200 hover:border-amber-300 hover:text-amber-600'
                                    }`}
                                >
                                    {month}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Events Grid */}
                    {filteredEvents.length > 0 ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredEvents.map((event, idx) => (
                                <Link 
                                    key={event.id} 
                                    to={`/gallery/${event.id}`}
                                    className="group bg-white rounded-[2rem] overflow-hidden border border-slate-100 hover:shadow-2xl hover:shadow-slate-200/60 transition-all duration-500 hover:-translate-y-2 flex flex-col"
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    {/* Cover Image */}
                                    <div className="relative h-56 overflow-hidden">
                                        <img 
                                            src={event.coverImage} 
                                            alt={event.title} 
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                        
                                        {/* Tags */}
                                        <div className="absolute top-4 left-4 flex gap-2">
                                            {event.tags.map(tag => (
                                                <span key={tag} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest rounded-full border border-white/30">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>

                                        {/* Gallery Count */}
                                        <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-md text-white text-xs font-bold rounded-full">
                                            <Image size={12} /> {event.gallery.length} Photos
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-1 flex flex-col">
                                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-3 uppercase tracking-wider">
                                            <span className="flex items-center gap-1"><Calendar size={12} className="text-amber-500" /> {event.date}</span>
                                        </div>
                                        
                                        <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                                            {event.title}
                                        </h3>
                                        
                                        <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-2">
                                            {event.description}
                                        </p>

                                        <div className="mt-auto pt-4 border-t border-slate-50 flex items-center justify-between text-xs text-slate-400">
                                            <span className="flex items-center gap-1"><MapPin size={12} /> {event.location}</span>
                                            <span className="flex items-center gap-2 text-amber-600 font-bold group-hover:gap-3 transition-all">
                                                View Gallery <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="py-20 text-center bg-white rounded-3xl border border-slate-100 shadow-sm">
                            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-slate-50 flex items-center justify-center text-slate-300">
                                <Calendar size={32} />
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">No Events Found</h3>
                            <p className="text-slate-500">There are no events recorded for {selectedMonth === 'All' ? '' : selectedMonth} {selectedYear}.</p>
                        </div>
                    )}
                </div>
            </section>

        </main>
    );
};

export default EventGalleryPage;
