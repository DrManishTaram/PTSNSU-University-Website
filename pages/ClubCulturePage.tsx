import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, Search, Users, Calendar, Trophy, ChevronRight, 
  Cpu, Drama, Camera, Palette, MessageCircle, Music, Activity, PenTool, 
  BookOpen, Utensils, Shield, Plane, Leaf, Star, Sparkles, Heart, Zap, Award
} from 'lucide-react';
import { clubsInputData } from '../data/clubs';

const iconMap: { [key: string]: React.ElementType } = {
  Cpu, Drama, Camera, Palette, MessageCircle, Activity, Leaf, Music, PenTool, 
  BookOpen, Utensils, Shield, Plane
};

// Curated "Artistic" Gradients for a Wow Effect
const artGradients = [
    "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-100 to-indigo-100",
    "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-pink-200 via-slate-100 to-rose-100",
    "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-amber-200 via-slate-100 to-orange-100",
    "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-emerald-200 via-slate-100 to-teal-100",
    "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-purple-200 via-slate-100 to-violet-100",
    "bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-cyan-200 via-slate-100 to-sky-100",
];

const ClubCulturePage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    // Helper to render icon
    const getIcon = (iconName: string, className?: string) => {
        const Icon = iconMap[iconName] || Star;
        return <Icon className={className} strokeWidth={1.5} />;
    };

    // Filter Logic
    const filteredClubs = clubsInputData.filter(club => {
        const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                              club.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        let category = 'All';
        const techKeywords = ['AI', 'Robotics', 'Drone', 'Coding', 'Tech'];
        const artKeywords = ['Drama', 'Photography', 'Art', 'Music', 'Dance', 'Writing', 'Culinary'];
        
        if (techKeywords.some(k => club.name.includes(k))) category = 'Technical';
        else if (artKeywords.some(k => club.name.includes(k) || club.description.includes(k))) category = 'Cultural';
        else category = 'Social';

        const matchesCategory = activeCategory === 'All' || category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    const categories = [
        { id: 'All', label: 'All Clubs' },
        { id: 'Technical', label: 'Innovation & Tech' },
        { id: 'Cultural', label: 'Art & Culture' },
        { id: 'Social', label: 'Social Impact' }
    ];

  return (
    <main className="min-h-screen bg-[#FDFCFE] text-slate-800 font-sans selection:bg-rose-100 selection:text-rose-900 overflow-x-hidden">
      
      {/* 
        ------------------------------------------
        HERO SECTION 
        ------------------------------------------
      */}
      <section className="relative pt-32 pb-40 lg:min-h-[85vh] flex flex-col justify-center overflow-hidden bg-white">
        
        {/* Soft Artistic Shapes Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-indigo-200/30 rounded-full blur-[120px] mix-blend-multiply animate-float"></div>
            <div className="absolute top-[10%] right-[-10%] w-[40vw] h-[40vw] bg-rose-200/30 rounded-full blur-[100px] mix-blend-multiply animate-float delay-1000"></div>
            <div className="absolute bottom-[-10%] left-[20%] w-[60vw] h-[60vw] bg-amber-100/40 rounded-full blur-[130px] mix-blend-multiply animate-float delay-2000"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.3] brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/50 border border-white/60 mb-8 animate-fade-in-up shadow-[0_2px_20px_rgba(0,0,0,0.04)] backdrop-blur-md">
                    <Sparkles size={14} className="text-indigo-500" />
                    <span className="text-xs font-bold uppercase tracking-widest text-slate-600">Student Activity Centre</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-medium tracking-tight mb-8 leading-[0.9] text-slate-900 animate-fade-in-up delay-100">
                    Find Your <br />
                    <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 pr-4">
                        Passion.
                    </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-500 max-w-3xl leading-relaxed mb-16 animate-fade-in-up delay-200 font-light">
                    Join a thriving community of <span className="text-slate-900 font-semibold underline decoration-indigo-200 decoration-4 underline-offset-4">700+ student leaders</span>. 
                    Explore, create, and lead.
                </p>

                {/* Stat Cards - Floating Glass */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-5xl animate-fade-in-up delay-300">
                    {[
                         { label: "Active Clubs", value: "14+", icon: Users },
                         { label: "Events / Year", value: "50+", icon: Calendar },
                         { label: "Awards Won", value: "25+", icon: Trophy },
                         { label: "Impact", value: "High", icon: Zap }
                    ].map((stat, i) => (
                        <div key={i} className="group bg-white/40 backdrop-blur-sm border border-white/50 rounded-3xl p-6 hover:-translate-y-2 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.05)]">
                            <div className="mb-4 text-slate-400 group-hover:text-indigo-500 transition-colors">
                                <stat.icon size={28} strokeWidth={1.5} />
                            </div>
                            <div className="text-4xl font-serif font-medium text-slate-900 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>


      {/* 
        ------------------------------------------
        CONTENT SECTION 
        ------------------------------------------
      */}
      <section className="relative z-20 pb-32 bg-white">
        <div className="container mx-auto px-4">
            
            {/* Filter Bar */}
            <div className="sticky top-24 z-50 mb-16 animate-fade-in-up delay-500 -mt-10">
                <div className="bg-white/90 backdrop-blur-2xl border border-slate-100 p-2.5 rounded-[2rem] shadow-[0_20px_40px_rgba(0,0,0,0.08)] flex flex-col md:flex-row gap-4 max-w-4xl mx-auto">
                    
                    {/* Categories */}
                    <div className="flex p-1 bg-slate-100/50 rounded-[1.5rem] overflow-x-auto md:overflow-visible no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-8 py-3 rounded-[1.2rem] text-sm font-bold transition-all whitespace-nowrap ${
                                    activeCategory === cat.id 
                                    ? 'bg-white text-slate-900 shadow-md transform scale-105' 
                                    : 'text-slate-500 hover:text-slate-900 hover:bg-white/50'
                                }`}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="flex-1 relative group">
                        <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors" size={20} />
                        <input 
                            type="text" 
                            placeholder="Find your vibe..." 
                            className="w-full h-full bg-transparent border-NONE focus:bg-white rounded-[1.5rem] pl-14 pr-6 text-base text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 transition-all"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            {/* ARTISTIC GRID LAYOUT */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {filteredClubs.map((club, idx) => {
                    // Assign a unique artistic gradient based on index if theme is default, or map theme loosely
                    const artisticBg = artGradients[idx % artGradients.length];
                    
                    return (
                    <Link 
                        key={club.id} 
                        to={`/club/${club.id}`}
                        className="group relative flex flex-col bg-white rounded-[2.5rem] hover:shadow-[0_30px_60px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 border border-slate-100 hover:-translate-y-3 h-full overflow-visible"
                    >
                        {/* 
                            Artistic Header 
                        */}
                        <div className={`h-56 relative rounded-[2.5rem] overflow-hidden m-2 transform transition-all duration-700`}>
                             {/* Mesh Gradient Background */}
                             <div className={`absolute inset-0 ${artisticBg} opacity-80 group-hover:opacity-100 transition-opacity duration-700`}></div>
                             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-40 mix-blend-soft-light"></div>
                             
                             {/* Floating Elements (Abstract) */}
                             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/20 blur-3xl rounded-full"></div>
                             
                             {/* Icon or Logo - Centered and Big */}
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <div className="relative">
                                    <div className="w-24 h-24 bg-white/30 backdrop-blur-md rounded-2xl border border-white/40 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500 overflow-hidden">
                                        {club.logo ? (
                                            <img src={club.logo} alt={club.name} className="w-full h-full object-cover p-2" />
                                        ) : (
                                            <div className="text-slate-900 drop-shadow-sm">
                                                {getIcon(club.iconName, "w-10 h-10")}
                                            </div>
                                        )}
                                    </div>
                                 </div>
                             </div>

                             {/* Status Badge */}
                             <div className="absolute top-6 right-6 flex gap-2">
                                 {club.featured && (
                                    <div className="bg-white/70 backdrop-blur-md border border-white/50 text-slate-800 text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-sm">
                                        <Star size={10} fill="currentColor" className="text-yellow-500" /> Premium
                                    </div>
                                 )}
                             </div>
                        </div>

                        {/* Content Body - Minimalist */}
                        <div className="px-8 pb-8 pt-4 flex-1 flex flex-col items-center text-center">
                            
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 group-hover:text-indigo-600 transition-colors">
                                {club.name}
                            </h3>
                            
                            <div className="flex items-center justify-center gap-4 text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">
                                <span className="flex items-center gap-1">
                                    <Users size={12} className="text-slate-400" /> 
                                    {club.stats?.members || 50}
                                </span>
                                <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                <span className="flex items-center gap-1">
                                    <Calendar size={12} className="text-slate-400" /> 
                                    2024
                                </span>
                            </div>

                            <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-2 px-4">
                                {club.description}
                            </p>

                            {/* Action Button */}
                            <div className="mt-auto">
                                <span className="px-6 py-3 rounded-full bg-slate-50 text-slate-600 font-bold text-xs group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm flex items-center gap-2">
                                    Explore Club <ArrowLeft className="rotate-180" size={12} />
                                </span>
                            </div>
                        </div>
                    </Link>
                )})}
            </div>

            {/* Empty State */}
            {filteredClubs.length === 0 && (
                <div className="py-20 text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-slate-50 mb-6 text-slate-300">
                        <Search size={40} />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-2">No clubs found</h3>
                    <p className="text-slate-500">Try adjusting your filters.</p>
                </div>
            )}
        </div>
      </section>

      {/* 
        ------------------------------------------
        CTA SECTION 
        ------------------------------------------
      */}
      <section className="py-32 relative overflow-hidden bg-white">
         <div className="container mx-auto px-4 relative z-10 text-center">
             <div className="inline-block p-5 rounded-[2rem] bg-pink-50 text-pink-500 mb-8 animate-bounce-small rotate-3">
                 <Heart className="w-10 h-10" fill="currentColor" />
             </div>
             <h2 className="text-5xl md:text-7xl font-serif font-medium text-slate-900 mb-6 tracking-tight">
                 Start a Legacy.
             </h2>
             <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                 Got an idea that keeps you up at night? <br/>
                 Turn it into a movement. We've got your back.
             </p>
             
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <Link to="/admission-notification" className="px-10 py-5 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800 transition-all shadow-2xl hover:-translate-y-1">
                     Create a New Club
                 </Link>
             </div>
         </div>
      </section>

    </main>
  );
};

export default ClubCulturePage;
