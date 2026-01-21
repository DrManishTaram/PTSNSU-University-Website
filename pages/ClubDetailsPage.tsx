import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Users, Trophy, Calendar, Star, Sparkles, Award, Target, Heart, 
  Cpu, Drama, Camera, Palette, MessageCircle, Activity, Leaf, Music, PenTool, 
  BookOpen, Utensils, Shield, Plane, GraduationCap, Zap, ChevronRight, Mail, Linkedin
} from 'lucide-react';
import { clubsInputData, Club } from '../data/clubs';

const iconMap: { [key: string]: React.ElementType } = {
  Cpu, Drama, Camera, Palette, MessageCircle, Activity, Leaf, Music, PenTool, 
  BookOpen, Utensils, Shield, Plane
};

const ClubDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [club, setClub] = useState<Club | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const foundClub = clubsInputData.find(c => c.id === id);
    setClub(foundClub || null);
  }, [id]);

  if (!club) return (
     <div className="min-h-screen bg-slate-50 flex items-center justify-center text-center">
        <div className="p-8">
            <h1 className="text-2xl font-bold text-slate-900 mb-4">Club Not Found</h1>
            <Link to="/club-culture" className="text-indigo-600 hover:text-indigo-700 underline">Return to Clubs</Link>
        </div>
     </div>
  );

  const IconComponent = iconMap[club.iconName] || Star;

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900">
      
      {/* 
        ------------------------------------------
        HERO SECTION - "Royal & Clean"
        ------------------------------------------
      */}
      <section className="relative pt-32 pb-32 overflow-hidden bg-slate-50 border-b border-slate-200">
        
        {/* Background Patterns */}
        <div className="absolute inset-0 overflow-hidden">
             <div className="absolute top-0 right-0 w-[40%] h-full bg-gradient-to-l from-indigo-50/50 to-transparent"></div>
             <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-100/40 rounded-full blur-[100px]"></div>
             <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-t from-white to-transparent"></div>
             <div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <Link to="/club-culture" className="inline-flex items-center gap-2 text-slate-500 hover:text-indigo-700 mb-12 transition-colors group font-medium text-sm">
            <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:border-indigo-300 transition-colors">
                 <ArrowLeft size={14} />
            </div>
            Back to Directory
          </Link>
          
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-12">
            
            {/* Club Logo / Visual */}
            <div className="relative group shrink-0">
                <div className={`absolute inset-0 bg-gradient-to-br ${club.theme} blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-700`}></div>
                <div className="relative w-40 h-40 md:w-56 md:h-56 bg-white rounded-[2.5rem] flex items-center justify-center shadow-2xl shadow-slate-200/50 border-4 border-white ring-1 ring-slate-100 transition-all duration-500 overflow-hidden">
                    {club.logo ? (
                         <img src={club.logo} alt={club.name} className="w-full h-full object-cover p-2" />
                    ) : (
                        <div className={`text-transparent bg-clip-text bg-gradient-to-br ${club.theme}`}>
                            <IconComponent size={88} strokeWidth={1} />
                        </div>
                    )}
                </div>
                {club.featured && (
                   <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-amber-100 text-amber-800 border border-amber-200 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg flex items-center gap-1 whitespace-nowrap">
                       <Trophy size={10} /> Top Performer
                   </div>
                )}
            </div>

            {/* Header Content */}
            <div className="flex-1 text-center lg:text-left">
               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-6">
                 <div className="px-4 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                    Est. 2024
                 </div>
                 <div className="px-4 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-bold uppercase tracking-wider text-indigo-600">
                    Official Club
                 </div>
               </div>
               
               <h1 className="text-5xl md:text-7xl font-serif font-bold text-slate-900 mb-6 leading-none tracking-tight">
                 {club.name}
               </h1>
               
               <p className="text-xl text-slate-600 max-w-2xl leading-relaxed font-light mx-auto lg:mx-0">
                 {club.description}
               </p>

               {/* Key Stats Row */}
               <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 mt-8 pt-8 border-t border-slate-200/60">
                    <div className="text-center lg:text-left">
                        <div className="text-2xl font-bold text-slate-900">{club.stats.members}+</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Members</div>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div className="text-center lg:text-left">
                        <div className="text-2xl font-bold text-slate-900">{club.stats.events}+</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Events</div>
                    </div>
                    <div className="w-px h-10 bg-slate-200"></div>
                    <div className="text-center lg:text-left">
                        <div className="text-2xl font-bold text-slate-900">{club.stats.projects}+</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Projects</div>
                    </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ------------------------------------------
        MAIN CONTENT GRID
        ------------------------------------------
      */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* CONTENT AREA */}
            <div className="lg:col-span-8 space-y-12">
                
                {/* About Section */}
                <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-600"><Sparkles size={16} /></span>
                        About Us
                    </h2>
                    <div className="prose prose-lg text-slate-600 leading-relaxed font-light">
                        {club.fullDescription}
                    </div>
                </div>

                {/* Projects Section */}
                <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600"><Zap size={16} /></span>
                        Latest Initiatives
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {club.projects.map((project, idx) => (
                            <div key={idx} className="group p-6 rounded-2xl bg-white border border-slate-100 hover:border-blue-200 transition-all shadow-lg shadow-slate-200/50 hover:shadow-blue-200/50">
                                <div className="mb-4 w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-sm font-bold text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    {idx + 1}
                                </div>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{project.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed mb-4">{project.description}</p>
                                {project.date && <div className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full inline-block">{project.date}</div>}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Achievements Section */}
                <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 flex items-center gap-3">
                        <span className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center text-green-600"><Award size={16} /></span>
                        Hall of Fame
                    </h2>
                    <div className="space-y-4">
                        {club.achievements.map((achievement, idx) => (
                            <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-slate-50 to-white border border-slate-100">
                                <div className="shrink-0 w-16 h-16 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 shadow-inner">
                                   <Trophy size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-lg mb-1">{achievement.title}</h3>
                                    <p className="text-slate-500">{achievement.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 
                   -----------------------
                   FULL MEMBERS GRID
                   -----------------------
                */}
                <div id="members" className="pt-8 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-3">
                            <span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600"><Users size={16} /></span>
                            Club Members
                        </h2>
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">{club.members.length} Active Members</span>
                    </div>
                    
                    {club.members.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {club.members.map((member, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-700 font-bold text-xs shrink-0">
                                        {member.name.charAt(0)}
                                    </div>
                                    <div className="min-w-0">
                                        <div className="font-bold text-slate-900 text-sm truncate">{member.name}</div>
                                        <div className="text-xs text-slate-500 truncate">{member.role} • {member.year}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center p-8 bg-slate-50 rounded-2xl border border-dashed border-slate-200 text-slate-400 text-sm italic">
                            Member list is being updated.
                        </div>
                    )}
                </div>

            </div>

            {/* SIDEBAR */}
            <div className="lg:col-span-4 space-y-8">
                
                {/* Faculty Card */}
                <div className="bg-white border border-slate-100 p-8 rounded-[2rem] shadow-xl shadow-slate-200/40 text-center relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-slate-50 to-transparent"></div>
                    <div className="relative z-10">
                        <div className="w-24 h-24 rounded-3xl bg-white p-1 shadow-lg mx-auto mb-4">
                           {club.facultyCoordinator.image ? (
                             <img src={club.facultyCoordinator.image} alt={club.facultyCoordinator.name} className="w-full h-full object-cover rounded-[20px]" />
                           ) : (
                             <div className="w-full h-full flex items-center justify-center bg-slate-50 rounded-[20px] text-slate-300">
                                <GraduationCap size={32} />
                             </div>
                           )}
                        </div>
                        <div className="text-xs font-bold text-indigo-600 uppercase tracking-widest mb-2">Faculty Mentor</div>
                        <h3 className="text-xl font-serif font-bold text-slate-900 mb-1">{club.facultyCoordinator.name}</h3>
                        <p className="text-slate-500 text-sm">{club.facultyCoordinator.designation}</p>
                    </div>
                </div>

                {/* Core Team (Leads) */}
                <div>
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Leadership</h3>
                    <div className="space-y-4">
                        {club.leads.map((lead, idx) => (
                            <div key={idx} className="bg-white border border-slate-100 p-4 rounded-2xl flex items-center gap-4 shadow-sm hover:shadow-md transition-all group">
                                <div className="w-14 h-14 rounded-full bg-slate-100 p-1 group-hover:scale-105 transition-transform">
                                    {lead.image ? (
                                        <img src={lead.image} alt={lead.name} className="w-full h-full object-cover rounded-full" />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-white rounded-full text-slate-600 font-bold border border-slate-200">
                                            {lead.name.charAt(0)}
                                        </div>
                                    )}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{lead.name}</h4>
                                    <div className="text-xs font-bold text-indigo-600 uppercase tracking-wide">{lead.role}</div>
                                    <div className="text-xs text-slate-400">{lead.year}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Admission/Join Card */}
                <div className="bg-indigo-900 rounded-[2rem] p-8 text-center text-white relative overflow-hidden group">
                     {/* Decorative Circles */}
                     <div className="absolute -top-12 -right-12 w-32 h-32 bg-indigo-700/50 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                     <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-purple-600/50 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>

                     <div className="relative z-10">
                         <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-md">
                             <Heart className="text-pink-400" fill="currentColor" size={20} />
                         </div>
                         <h3 className="text-2xl font-serif font-bold mb-2">Join the Club</h3>
                         <p className="text-indigo-200 text-sm mb-8 leading-relaxed">
                             Applications for new members are now open.
                         </p>
                         <button className="w-full py-4 bg-white text-indigo-900 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg">
                             Apply Now
                         </button>
                         <div className="mt-4 text-xs text-indigo-300">
                             Questions? <a href="#" className="text-white underline hover:text-indigo-100">Contact Leads</a>
                         </div>
                     </div>
                </div>

            </div>
        </div>
      </div>
    </main>
  );
};

export default ClubDetailsPage;
