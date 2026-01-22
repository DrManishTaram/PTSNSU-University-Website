import React from 'react';
import { ArrowRight, CheckCircle, BookOpen, Award, Users, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-earth-900">
      {/* Masterpiece Divider */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none select-none">
          {/* Base Line */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
          
          {/* Gold Accent Beam */}
          <div className="w-full max-w-4xl mx-auto h-[1px] bg-gradient-to-r from-transparent via-turmeric-500/60 to-transparent mt-px"></div>
          
          {/* Central Diamond Jewel */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative flex items-center justify-center animate-spin-slow">
                 {/* White Halo for Contrast */}
                 <div className="absolute w-8 h-8 bg-turmeric-500/20 blur-sm rounded-full"></div>
                 {/* The Jewel */}
                 <div className="w-3 h-3 bg-turmeric-500 rotate-45 ring-4 ring-earth-900 shadow-sm z-10"></div>
                 {/* Side Sparks */}
                 <div className="absolute w-20 h-[1px] bg-gradient-to-r from-transparent via-turmeric-400 to-transparent"></div>
              </div>
          </div>
      </div>
      {/* Sophisticated Gradient Layers */}
       <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>
       <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-turmeric-500/10 via-transparent to-transparent pointer-events-none"></div>
       
       {/* Subtle Grid Pattern */}
       <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
       
       {/* Elegant Light Bursts */}
       <div className="absolute -left-32 top-32 w-[500px] h-[500px] bg-gradient-radial from-blue-900/20 via-blue-900/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse"></div>
       <div className="absolute -right-32 bottom-20 w-[600px] h-[600px] bg-gradient-radial from-purple-900/20 via-purple-900/5 to-transparent rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-up">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-turmeric-500/10 border border-turmeric-500/20 text-turmeric-400 text-xs font-bold uppercase tracking-widest">
                <span className="w-2 h-2 rounded-full bg-turmeric-500 animate-pulse"></span>
                About the University
              </span>
              <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white leading-[1.15]">
                About <span className="text-transparent bg-clip-text bg-gradient-to-r from-turmeric-400 to-yellow-200">Pandit Shambhunath Shukla University</span>
              </h2>
            </div>
            
            <p className="text-lg text-gray-300 leading-relaxed font-light">
              Pandit Shambhunath Shukla University, Shahdol is not just an institution; it is a movement towards educational emancipation. Established to cater to the aspirations of the tribal-dominated region, we blend traditional wisdom with modern scientific temper.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                    { icon: BookOpen, title: "Modern Curriculum", desc: "Aligned with NEP 2020" },
                    { icon: Users, title: "Inquisitive Minds", desc: "Vibrant Student Community" },
                    { icon: Award, title: "Excellence", desc: "NAAC Accredited Institution" },
                    { icon: CheckCircle, title: "Holistic Growth", desc: "Sports & Cultural Focus" }
                ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all border border-white/10 hover:border-turmeric-500/30 group hover:-translate-y-1 duration-300" style={{ animationDelay: `${idx * 100}ms` }}>
                        <div className="p-3 bg-white/10 rounded-lg shadow-sm group-hover:bg-turmeric-500 group-hover:text-earth-900 transition-colors text-turmeric-400 group-hover:animate-bounce-small">
                            <item.icon size={24} />
                        </div>
                        <div>
                            <h4 className="font-bold text-white text-sm">{item.title}</h4>
                            <p className="text-xs text-gray-400 mt-1">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="pt-4">
                <Link to="/about">
                  <button className="group px-8 py-4 bg-white text-earth-900 rounded-full font-bold shadow-lg hover:bg-turmeric-500 transition-all duration-300 flex items-center gap-3 pl-10 hover:shadow-turmeric-500/30 hover:scale-105">
                  Explore Our Heritage
                  <div className="bg-earth-900/10 p-1.5 rounded-full group-hover:bg-white/20 transition-colors">
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  </button>
                </Link>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10 animate-zoom-in">
                <img 
                  src="https://ptsnsuniversity.ac.in/assets/college.png" 
                  alt="PTSNS University Campus" 
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-transparent to-transparent opacity-80"></div>
                
                {/* Bottom Content */}
                <div className="absolute bottom-6 left-6 right-6 text-white animate-fade-up" style={{ animationDelay: '0.3s' }}>
                    <p className="text-sm font-medium opacity-90 uppercase tracking-wider mb-1 text-turmeric-400">Established</p>
                    <div className="flex items-end gap-3">
                        <span className="text-4xl font-serif font-bold text-white">2016</span>
                        <span className="h-px flex-grow bg-white/20 mb-2"></span>
                        <span className="text-sm opacity-80">Shahdol, M.P.</span>
                    </div>
                </div>
            </div>

            {/* Decorative Elements replacing the old VC card */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-turmeric-500 rounded-full opacity-20 blur-2xl z-0 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600 rounded-full opacity-20 blur-3xl z-0 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
            
            {/* Experience/Stats Floating Card */}
             <div className="absolute -right-4 top-10 bg-earth-800 p-5 rounded-xl shadow-xl z-20 max-w-[200px] border-l-4 border-turmeric-500 animate-float hidden md:block border border-white/10 backdrop-blur-md">
                <p className="text-4xl font-bold text-white mb-1">50+</p>
                <p className="text-sm text-gray-400 leading-snug">Courses offered across various disciplines</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;