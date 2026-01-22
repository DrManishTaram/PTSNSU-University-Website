import React, { useEffect } from 'react';
import { Target, Lightbulb, Users, Award, BookOpen, Calculator, Calendar, ArrowRight, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white font-sans selection:bg-turmeric-200 selection:text-turmeric-900">
            
            {/* 1. Hero Section - Parallax Style */}
            <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://ptsnsuniversity.ac.in/assets/college.png" 
                        alt="University Campus" 
                        className="w-full h-full object-cover object-center scale-105 animate-ken-burns"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-earth-900/60 to-earth-900/30"></div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 container mx-auto px-4 text-center text-white">
                     <span className="inline-block py-1 px-4 rounded-full bg-turmeric-500/20 border border-turmeric-400/30 backdrop-blur-md text-turmeric-300 font-bold tracking-[0.2em] text-xs uppercase mb-6 animate-fade-in">
                        Est. 2016 • Shahdol, M.P.
                     </span>
                     <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight mb-8 animate-fade-up">
                        Legacy of <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-turmeric-200 via-white to-turmeric-200">Excellence</span>
                     </h1>
                     <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-200 font-light leading-relaxed mb-10 animate-fade-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
                        Pandit Shambhunath Shukla University stands as a beacon of knowledge in the tribal heartland of Madhya Pradesh, bridging tradition with modern innovation.
                     </p>
                     
                     <div className="animate-bounce absolute bottom-10 left-1/2 -translate-x-1/2 opacity-70">
                        <ChevronDown size={32} />
                     </div>
                </div>
            </div>

            {/* 2. Introduction & Story */}
            <section className="py-20 md:py-32 bg-white relative">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-16 items-start">
                        <div className="w-full md:w-1/3 sticky top-32">
                            <h3 className="text-turmeric-600 font-bold uppercase tracking-widest text-sm mb-4">Our Story</h3>
                            <h2 className="text-4xl font-serif font-bold text-earth-900 leading-snug mb-6">
                                Providing quality education to the unreached.
                            </h2>
                            <div className="w-20 h-1 bg-turmeric-500 mb-8"></div>
                            <p className="text-gray-500 italic">
                                "We believe that education is the catalyst for social transformation and economic empowerment."
                            </p>
                        </div>
                        <div className="w-full md:w-2/3 space-y-8 text-lg text-gray-600 leading-relaxed">
                            <p>
                                <span className="text-6xl float-left mr-4 mt-[-10px] font-serif font-bold text-turmeric-500">P</span>
                                andit Shambhunath Shukla University was established in 2016, but its roots go much deeper. Named after the illustrious freedom fighter and the first Chief Minister of Vindhya Pradesh, Pandit Shambhu Nath Shukla, our institution carries a rich legacy of service and nation-building.
                            </p>
                            <p>
                                Located in Shahdol, a region with a significant tribal population, the University was conceived with a singular noble purpose: to bring world-class higher education to the doorsteps of those who have been historically marginalized. We are committed to nurturing talent from rural hinterlands and molding them into global citizens.
                            </p>
                            <p>
                                Today, with over 50+ diverse courses, state-of-the-art laboratories, and a vibrant campus life, PTSNS University has emerged as a premier center of learning effectively implementing the National Education Policy (NEP) 2020.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Vision & Mission Horizontal Scroll/Grid */}
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                        
                        {/* Vision Card */}
                        <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-turmeric-50 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700"></div>
                             <div className="relative z-10">
                                 <div className="w-16 h-16 bg-turmeric-100 text-turmeric-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-turmeric-600 group-hover:text-white transition-colors duration-300">
                                     <Lightbulb size={32} />
                                 </div>
                                 <h3 className="text-3xl font-serif font-bold text-earth-900 mb-4">Our Vision</h3>
                                 <p className="text-gray-600 leading-relaxed text-lg">
                                     To be a global center of learning that fosters innovation, ethical leadership, and inclusive growth, empowering the youth of the tribal heartland to compete on the world stage.
                                 </p>
                             </div>
                        </div>

                        {/* Mission Card */}
                        <div className="group relative bg-white rounded-3xl p-10 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100">
                             <div className="absolute top-0 right-0 w-64 h-64 bg-forest-50 rounded-full -translate-y-1/2 translate-x-1/3 group-hover:scale-110 transition-transform duration-700"></div>
                             <div className="relative z-10">
                                 <div className="w-16 h-16 bg-forest-100 text-forest-600 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-forest-600 group-hover:text-white transition-colors duration-300">
                                     <Target size={32} />
                                 </div>
                                 <h3 className="text-3xl font-serif font-bold text-earth-900 mb-4">Our Mission</h3>
                                 <ul className="space-y-4 text-gray-600 leading-relaxed text-lg">
                                     <li className="flex items-start gap-3">
                                         <span className="w-2 h-2 mt-2 bg-forest-400 rounded-full flex-shrink-0"></span>
                                         <span>To provide affordable, quality education to all sections of society.</span>
                                     </li>
                                     <li className="flex items-start gap-3">
                                         <span className="w-2 h-2 mt-2 bg-forest-400 rounded-full flex-shrink-0"></span>
                                         <span>To preserve and promote local tribal art, culture, and heritage.</span>
                                     </li>
                                     <li className="flex items-start gap-3">
                                         <span className="w-2 h-2 mt-2 bg-forest-400 rounded-full flex-shrink-0"></span>
                                         <span>To encourage research and innovation relevant to regional needs.</span>
                                     </li>
                                 </ul>
                             </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. Stats Counter */}
            <section className="py-20 bg-earth-900 text-white relative isolate overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
                        {[
                            { label: "Established", value: "2016", icon: Calendar },
                            { label: "Students", value: "10k+", icon: Users },
                            { label: "Courses", value: "50+", icon: BookOpen },
                            { label: "Faculties", value: "8", icon: Award },
                        ].map((stat, idx) => (
                            <div key={idx} className="p-4">
                                <stat.icon className="w-8 h-8 mx-auto text-turmeric-400 mb-4" />
                                <div className="text-4xl md:text-5xl font-bold font-serif mb-2">{stat.value}</div>
                                <div className="text-gray-400 uppercase tracking-widest text-sm font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Core Values / Pillars */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <span className="text-turmeric-600 font-bold uppercase tracking-widest text-sm">Why Choose Us</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mt-3 mb-16">Pillars of Excellence</h2>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {[
                            { title: "Academic Rigor", desc: "Curriculum designed by experts to meet global standards." },
                            { title: "Research Focus", desc: "Funding and support for innovative research projects." },
                            { title: "Inclusive Campus", desc: "A safe, welcoming space for students from all backgrounds." },
                            { title: "Skill Development", desc: "Focus on vocational training and employability." },
                            { title: "Sports & Culture", desc: "World-class sports facilities and vibrant cultural clubs." },
                            { title: "Digital Ready", desc: "Smart classrooms and fully Wi-Fi enabled campus." },
                        ].map((item, idx) => (
                            <div key={idx} className="bg-slate-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100 group text-left">
                                <div className="h-2 w-12 bg-gray-200 group-hover:bg-turmeric-500 transition-colors rounded-full mb-6"></div>
                                <h4 className="text-xl font-bold text-earth-900 mb-3">{item.title}</h4>
                                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Call to Action */}
            <section className="py-20 bg-gradient-to-r from-turmeric-600 to-turmeric-500 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Be a Part of Our Growing Legacy</h2>
                    <p className="text-turmeric-100 text-lg mb-8 max-w-2xl mx-auto">
                        Join thousands of students who are shaping their future at Pandit Shambhunath Shukla University.
                    </p>
                    <div className="flex justify-center gap-4">
                        <Link to="/admission-notification" className="bg-white text-earth-900 px-8 py-4 rounded-full font-bold hover:bg-earth-900 hover:text-white transition-all shadow-lg flex items-center gap-2">
                           Apply for Admission <ArrowRight size={18} />
                        </Link>
                        <Link to="/contact" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white/10 transition-all">
                           Contact Us
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
