import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
    ArrowLeft, Calendar, MapPin, Users, X, ChevronLeft, ChevronRight, 
    Download, Share2, Heart, ZoomIn, Grid3X3
} from 'lucide-react';

// Import events data (shared with EventGalleryPage)
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

// Mock Event Data (same as EventGalleryPage - ideally this would be in a shared data file)
const eventsData: Event[] = [
    {
        id: 'convocation-2025',
        title: 'Annual Convocation 2025',
        date: '25 February 2025',
        month: 'February',
        year: 2025,
        location: 'University Auditorium',
        description: 'The grand ceremony honoring our graduating batch with dignitaries and special guests. This marks a significant milestone in the journey of our students as they step into the professional world.',
        attendees: 2500,
        coverImage: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=90', alt: 'Convocation Main Stage', type: 'image' },
            { id: '2', src: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=1200&q=90', alt: 'Graduates Celebrating', type: 'image' },
            { id: '3', src: 'https://images.unsplash.com/photo-1627556704290-2b1f5853ff78?w=1200&q=90', alt: 'Ceremony Proceedings', type: 'image' },
            { id: '4', src: 'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=1200&q=90', alt: 'Degree Distribution', type: 'image' },
            { id: '5', src: 'https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=1200&q=90', alt: 'Group Photo', type: 'image' },
            { id: '6', src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=1200&q=90', alt: 'Faculty and Staff', type: 'image' },
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
        description: 'PTSNS AI Club secured 2nd Runner-Up position among 26,000+ participants from across India, including teams from 32 IITs.',
        attendees: 150,
        coverImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1200&q=90', alt: 'Hackathon Workspace', type: 'image' },
            { id: '2', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&q=90', alt: 'Team Collaboration', type: 'image' },
            { id: '3', src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=90', alt: 'Coding Session', type: 'image' },
            { id: '4', src: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=90', alt: 'Victory Celebration', type: 'image' },
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
        description: 'The annual cultural extravaganza featuring music, dance, drama, and art from talented students across all departments.',
        attendees: 5000,
        coverImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=90', alt: 'Festival Lights', type: 'image' },
            { id: '2', src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=90', alt: 'Stage Performance', type: 'image' },
            { id: '3', src: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&q=90', alt: 'Concert Night', type: 'image' },
            { id: '4', src: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=1200&q=90', alt: 'Crowd Enjoying', type: 'image' },
            { id: '5', src: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=1200&q=90', alt: 'DJ Night', type: 'image' },
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
        description: 'Mass yoga session with participation from faculty, staff, and students promoting health and wellness.',
        attendees: 1200,
        coverImage: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1200&q=90', alt: 'Morning Yoga', type: 'image' },
            { id: '2', src: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&q=90', alt: 'Group Meditation', type: 'image' },
            { id: '3', src: 'https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?w=1200&q=90', alt: 'Yoga Poses', type: 'image' },
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
        description: 'Welcoming the new batch of students to the PTSNS family with an informative and engaging orientation program.',
        attendees: 800,
        coverImage: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=1200&q=90', alt: 'Welcome Session', type: 'image' },
            { id: '2', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=90', alt: 'Ice-breaking Games', type: 'image' },
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
            { id: '1', src: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=1200&q=90', alt: 'Flag Hoisting', type: 'image' },
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
        description: 'Three-day sports extravaganza with teams from 20+ universities competing in various disciplines.',
        attendees: 3000,
        coverImage: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=800&q=80',
        gallery: [
            { id: '1', src: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200&q=90', alt: 'Athletics Track', type: 'image' },
            { id: '2', src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=1200&q=90', alt: 'Medal Ceremony', type: 'image' },
        ],
        tags: ['Sports', 'Annual']
    },
];

const EventDetailPage: React.FC = () => {
    const { eventId } = useParams<{ eventId: string }>();
    const [event, setEvent] = useState<Event | null>(null);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    useEffect(() => {
        window.scrollTo(0, 0);
        const foundEvent = eventsData.find(e => e.id === eventId);
        setEvent(foundEvent || null);
    }, [eventId]);

    // Lightbox handlers
    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'unset';
    };

    const nextImage = () => {
        if (event) {
            setLightboxIndex((prev) => (prev + 1) % event.gallery.length);
        }
    };

    const prevImage = () => {
        if (event) {
            setLightboxIndex((prev) => (prev - 1 + event.gallery.length) % event.gallery.length);
        }
    };

    // Keyboard navigation for lightbox
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!lightboxOpen) return;
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'Escape') closeLightbox();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, event]);

    if (!event) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-center p-8">
                    <h1 className="text-2xl font-bold text-slate-900 mb-4">Event Not Found</h1>
                    <Link to="/gallery" className="text-amber-600 hover:text-amber-700 underline">
                        Return to Gallery
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-[#FAFAFA] font-sans text-slate-900">
            
            {/* 
                HEADER / HERO
            */}
            <section className="relative pt-28 pb-16 bg-white border-b border-slate-100">
                <div className="container mx-auto px-4">
                    {/* Back Button */}
                    <Link 
                        to="/gallery" 
                        className="inline-flex items-center gap-2 text-slate-500 hover:text-amber-600 mb-8 transition-colors group text-sm font-medium"
                    >
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center group-hover:bg-amber-100 transition-colors">
                            <ArrowLeft size={14} />
                        </div>
                        Back to Gallery
                    </Link>

                    {/* Event Info */}
                    <div className="flex flex-col lg:flex-row lg:items-end gap-8">
                        <div className="flex-1">
                            {/* Tags */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {event.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-widest rounded-full">
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-6xl font-serif font-bold text-slate-900 mb-4 leading-tight">
                                {event.title}
                            </h1>

                            <p className="text-lg text-slate-600 max-w-3xl leading-relaxed mb-8">
                                {event.description}
                            </p>

                            {/* Meta Info */}
                            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                                <span className="flex items-center gap-2">
                                    <Calendar size={16} className="text-amber-500" />
                                    {event.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <MapPin size={16} className="text-amber-500" />
                                    {event.location}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Users size={16} className="text-amber-500" />
                                    {event.attendees.toLocaleString()} Attendees
                                </span>
                            </div>
                        </div>

                        {/* Stats */}
                        <div className="flex items-center gap-4">
                            <div className="text-center px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100">
                                <div className="text-3xl font-bold text-slate-900">{event.gallery.length}</div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Photos</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 
                PHOTO GRID - Google Photos Style
            */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                        {event.gallery.map((image, idx) => (
                            <div 
                                key={image.id}
                                onClick={() => openLightbox(idx)}
                                className={`relative cursor-pointer group overflow-hidden rounded-lg ${
                                    // Make first image larger
                                    idx === 0 ? 'col-span-2 row-span-2' : ''
                                }`}
                            >
                                <img 
                                    src={image.src} 
                                    alt={image.alt}
                                    className="w-full h-full object-cover aspect-square group-hover:scale-105 transition-transform duration-500"
                                />
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-slate-900">
                                            <ZoomIn size={20} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 
                LIGHTBOX MODAL
            */}
            {lightboxOpen && event && (
                <div 
                    className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
                    onClick={closeLightbox}
                >
                    {/* Top Bar */}
                    <div className="absolute top-0 left-0 right-0 p-4 flex items-center justify-between z-20 bg-gradient-to-b from-black/60 to-transparent">
                        <div className="text-white">
                            <div className="font-bold">{event.title}</div>
                            <div className="text-white/60 text-sm">{lightboxIndex + 1} of {event.gallery.length}</div>
                        </div>
                        <button 
                            onClick={closeLightbox}
                            className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Image */}
                    <div 
                        className="relative max-w-6xl w-full h-full flex items-center justify-center p-4 md:p-16"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img 
                            src={event.gallery[lightboxIndex].src} 
                            alt={event.gallery[lightboxIndex].alt}
                            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                        />

                        {/* Navigation Arrows */}
                        {event.gallery.length > 1 && (
                            <>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                                    className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                                >
                                    <ChevronLeft size={28} />
                                </button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                                    className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full bg-black/30 hover:bg-black/50 transition-colors"
                                >
                                    <ChevronRight size={28} />
                                </button>
                            </>
                        )}
                    </div>

                    {/* Bottom Thumbnails */}
                    {event.gallery.length > 1 && (
                        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                            <div className="flex justify-center gap-2 overflow-x-auto pb-2 max-w-4xl mx-auto">
                                {event.gallery.map((img, idx) => (
                                    <button 
                                        key={img.id}
                                        onClick={(e) => { e.stopPropagation(); setLightboxIndex(idx); }}
                                        className={`shrink-0 w-16 h-12 md:w-20 md:h-14 rounded-lg overflow-hidden border-2 transition-all ${
                                            idx === lightboxIndex 
                                                ? 'border-white scale-110 ring-2 ring-white/50' 
                                                : 'border-transparent opacity-50 hover:opacity-100'
                                        }`}
                                    >
                                        <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}

        </main>
    );
};

export default EventDetailPage;
