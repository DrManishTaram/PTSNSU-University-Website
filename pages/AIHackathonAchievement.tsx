import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trophy, Award, Calendar, MapPin, Users, Sparkles, Quote, ExternalLink, Newspaper, ZoomIn, X, ChevronLeft, ChevronRight, Star, Building2, Briefcase } from 'lucide-react';

const AIHackathonAchievement: React.FC = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  
  const newsImages = ['/news-article-1.png', '/news-article-2.png', '/news-article-3.png'];

  const openLightbox = (index: number) => {
    setCurrentImage(index);
    setLightboxOpen(true);
  };

  return (
    <main className="bg-gradient-to-b from-slate-50 to-white min-h-screen overflow-x-hidden">
      
      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={() => setLightboxOpen(false)}>
          <button className="absolute top-6 right-6 text-white hover:text-turmeric-400 transition-colors" onClick={() => setLightboxOpen(false)}>
            <X size={32} />
          </button>
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-turmeric-400 transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); setCurrentImage((prev) => (prev - 1 + newsImages.length) % newsImages.length); }}
          >
            <ChevronLeft size={40} />
          </button>
          <img 
            src={newsImages[currentImage]} 
            alt={`News Article ${currentImage + 1}`}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-turmeric-400 transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); setCurrentImage((prev) => (prev + 1) % newsImages.length); }}
          >
            <ChevronRight size={40} />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
            {newsImages.map((_, idx) => (
              <button 
                key={idx}
                className={`w-3 h-3 rounded-full transition-colors ${idx === currentImage ? 'bg-turmeric-500' : 'bg-white/30 hover:bg-white/50'}`}
                onClick={(e) => { e.stopPropagation(); setCurrentImage(idx); }}
              />
            ))}
          </div>
        </div>
      )}

      {/* Hero Section - Enhanced */}
      <section className="relative py-24 md:py-40 bg-gradient-to-br from-earth-900 via-indigo-900 to-earth-900 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-turmeric-500/20 via-transparent to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-earth-900 via-transparent to-transparent"></div>
        </div>
        
        {/* Animated Floating Elements - Hidden on mobile */}
        <div className="hidden md:block absolute top-20 left-10 w-24 h-24 border-4 border-turmeric-500/40 rounded-full animate-pulse"></div>
        <div className="hidden md:block absolute top-40 right-20 w-16 h-16 border-4 border-blue-400/30 rounded-full animate-float"></div>
        <div className="hidden md:block absolute bottom-32 left-1/4 w-8 h-8 bg-turmeric-500/20 rounded-full animate-bounce-small"></div>
        <div className="hidden lg:block absolute bottom-20 right-1/3 w-40 h-40 border-2 border-white/5 rounded-full animate-spin-slow"></div>
        
        {/* Stars decoration - Hidden on mobile */}
        <div className="hidden md:block absolute top-1/4 right-1/4">
          <Star size={16} className="text-turmeric-400/50 animate-pulse" fill="currentColor" />
        </div>
        <div className="hidden md:block absolute top-1/3 left-1/3">
          <Star size={12} className="text-blue-400/40 animate-pulse" style={{ animationDelay: '1s' }} fill="currentColor" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-300 hover:text-turmeric-400 mb-10 transition-colors group bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          <div className="max-w-5xl">
            {/* Enhanced Badges */}
            <div className="flex flex-wrap gap-3 mb-8 animate-fade-up">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-turmeric-500 to-amber-500 text-black text-xs font-bold uppercase tracking-wider shadow-lg shadow-turmeric-500/30">
                <Trophy size={16} />
                Historic Achievement
              </span>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 text-white text-xs font-medium backdrop-blur-md border border-white/20">
                <Calendar size={14} />
                January 2025
              </span>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-green-500/20 text-green-300 text-xs font-medium backdrop-blur-md border border-green-500/30">
                <Briefcase size={14} />
                MNC Investment Offers
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 md:mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
              PTSNS University Students Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-turmeric-400 via-yellow-300 to-turmeric-400 animate-shimmer bg-[length:200%_auto]">History</span> at India's Biggest AI Hackathon
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-3xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
              Ranked <strong className="text-turmeric-400 font-bold">2nd among 26,000 participants</strong>, defeating 32 IITs. AI Club students receive investment offers from multinational companies.
            </p>

            {/* Hero Stats Row */}
            <div className="grid grid-cols-3 gap-3 md:flex md:flex-wrap md:gap-6 mt-8 md:mt-12 animate-fade-up" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl px-3 md:px-6 py-3 md:py-4 border border-white/10 text-center md:text-left">
                <div className="text-xl md:text-3xl font-bold text-white">26k+</div>
                <div className="text-[10px] md:text-xs text-turmeric-300 uppercase tracking-wider font-medium">Participants</div>
              </div>
              <div className="bg-gradient-to-r from-turmeric-500/20 to-amber-500/20 backdrop-blur-md rounded-xl md:rounded-2xl px-3 md:px-6 py-3 md:py-4 border border-turmeric-500/30 text-center md:text-left">
                <div className="text-xl md:text-3xl font-bold text-turmeric-400">2nd</div>
                <div className="text-[10px] md:text-xs text-turmeric-200 uppercase tracking-wider font-medium">Rank</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl px-3 md:px-6 py-3 md:py-4 border border-white/10 text-center md:text-left">
                <div className="text-xl md:text-3xl font-bold text-white">32</div>
                <div className="text-[10px] md:text-xs text-turmeric-300 uppercase tracking-wider font-medium">IITs Beat</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 relative">
        {/* Decorative Background - Hidden overflow */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-turmeric-100/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 md:translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Article Content */}
            <article className="lg:col-span-2 prose prose-lg max-w-none">
              <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-2xl border border-gray-100 relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-turmeric-50 to-transparent rounded-bl-full"></div>
                
                {/* Lead Paragraph */}
                <p className="text-xl text-gray-700 leading-relaxed mb-10 font-medium border-l-4 border-turmeric-500 pl-6 italic bg-turmeric-50/50 py-4 pr-4 rounded-r-xl">
                  It is a moment of pride and honor for Pandit Shambhunath Shukla University. Two talented students of the university's AI Club, <strong className="text-earth-900">Anukalp Dwivedi</strong> and <strong className="text-earth-900">Sourabh Majhee</strong>, have secured second place in a national-level competition, surpassing prestigious institutions across the country.
                </p>

                <h2 className="text-2xl font-serif font-bold text-earth-900 mt-10 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Building2 size={20} className="text-blue-600" />
                  </div>
                  The Competition
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Nearly 26,000 students from across the country participated in the competition, including students from 32 Indian Institutes of Technology (IITs). Students from <strong>IIT Patna</strong> secured first place, while <strong>Pandit Shambhunath Shukla University, Shahdol</strong>, secured second place. <strong>IIT Dhanbad</strong> secured third place.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  This achievement is considered historic for the Vidya region, as the university's AI Club has achieved this distinction. The students not only demonstrated technical knowledge but also excelled in innovation, reasoning, and presentation.
                </p>

                {/* Enhanced Quote Block */}
                <div className="relative bg-gradient-to-br from-earth-900 via-indigo-900 to-earth-900 text-white p-10 rounded-3xl my-12 overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-turmeric-500/10 rounded-full blur-2xl"></div>
                  <Quote className="absolute top-6 left-6 text-turmeric-500/20 w-20 h-20" />
                  <blockquote className="relative z-10 text-xl italic leading-relaxed mb-6 font-light">
                    "Our students are now competing with the country's top technical institutions. This is a result of the university's academic standards and our commitment to innovation."
                  </blockquote>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-turmeric-500 rounded-full flex items-center justify-center text-black font-bold text-lg">VC</div>
                    <div>
                      <cite className="block text-turmeric-400 font-bold not-italic text-lg">Prof. Ramshankar</cite>
                      <span className="text-gray-400 text-sm">Vice-Chancellor, PTSNS University</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-serif font-bold text-earth-900 mt-10 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                    <Briefcase size={20} className="text-green-600" />
                  </div>
                  Investment Offers from MNCs
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Registrar <strong>Dr. Ashish Tiwari</strong> stated that both students who excelled in the competition have now received investment offers from top multinational companies (MNCs). Both students are currently in the process of negotiating a business agreement, which will open new avenues for industry-institution collaboration within the university.
                </p>

                <h2 className="text-2xl font-serif font-bold text-earth-900 mt-10 mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
                    <Sparkles size={20} className="text-purple-600" />
                  </div>
                  A New Chapter in Innovation
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  The coordinator of the university's AI Club stated that this success is not only a result of technical excellence but also a symbol of the hard work and dedication of the youth from rural areas. This achievement is giving Pandit Shambhunath Shukla University a new identity in the field of technology and innovation at the national level.
                </p>
                <p className="text-gray-800 leading-relaxed font-semibold text-lg bg-gradient-to-r from-turmeric-50 to-amber-50 p-6 rounded-2xl border border-turmeric-100">
                  ✨ The youth of Shahdol, who have rivaled the IITs, are now writing a new chapter in the country's startup and innovation landscape.
                </p>

                {/* Media Coverage Section - Enhanced */}
                <div className="mt-16 pt-10 border-t-2 border-gray-100">
                  <h2 className="text-2xl font-serif font-bold text-earth-900 mb-4 flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
                      <Newspaper size={20} className="text-rose-600" />
                    </div>
                    Media Coverage
                  </h2>
                  <p className="text-gray-600 mb-8">
                    This historic achievement was widely covered by leading newspapers across Madhya Pradesh. Click to view.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {newsImages.map((src, index) => (
                      <div 
                        key={index}
                        className="group relative overflow-hidden rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:border-turmeric-300 hover:-translate-y-1"
                        onClick={() => openLightbox(index)}
                      >
                        <img 
                          src={src} 
                          alt={`News Article ${index + 1}`}
                          className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-earth-900/90 via-earth-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-end p-6">
                          <span className="text-white text-sm font-bold flex items-center gap-2 bg-turmeric-500 px-4 py-2 rounded-full">
                            <ZoomIn size={16} /> View Full Article
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Call to Action - Updated Colors */}
                <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t-2 border-gray-100 flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4">
                  <Link 
                    to="/about" 
                    className="group px-5 md:px-8 py-3 md:py-4 bg-gradient-to-r from-earth-900 to-indigo-900 text-white rounded-full font-bold hover:shadow-xl hover:shadow-indigo-500/20 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 hover:-translate-y-0.5 text-sm md:text-base"
                  >
                    Learn About University 
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-turmeric-500 transition-colors">
                      <ExternalLink size={14} />
                    </div>
                  </Link>
                  <Link 
                    to="/admission-notification" 
                    className="group px-5 md:px-8 py-3 md:py-4 bg-gradient-to-r from-turmeric-500 to-amber-500 text-earth-900 rounded-full font-bold hover:shadow-xl hover:shadow-turmeric-500/30 transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 hover:-translate-y-0.5 text-sm md:text-base"
                  >
                    Apply for Admission
                    <div className="w-7 h-7 md:w-8 md:h-8 bg-black/10 rounded-full flex items-center justify-center group-hover:bg-black/20 transition-colors">
                      <ChevronRight size={16} />
                    </div>
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar - Enhanced */}
            <aside className="lg:col-span-1 space-y-8">
              {/* Students Card - Enhanced */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 sticky top-8">
                <h3 className="font-bold text-earth-900 mb-6 flex items-center gap-2 text-lg">
                  <Trophy size={20} className="text-turmeric-500" />
                  The Achievers
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <img src="/anukalp-profile.jpg" alt="Anukalp Dwivedi" className="w-14 h-14 rounded-full object-cover shadow-lg border-2 border-white" />
                    <div>
                      <div className="font-bold text-earth-900 text-lg">Anukalp Dwivedi</div>
                      <div className="text-sm text-blue-600 font-medium">AI Club Member</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-turmeric-50 to-amber-50 rounded-xl border border-turmeric-100 hover:shadow-md transition-shadow">
                    <img src="/sourabh-profile.png" alt="Sourabh Majhee" className="w-14 h-14 rounded-full object-cover shadow-lg border-2 border-white" />
                    <div>
                      <div className="font-bold text-earth-900 text-lg">Sourabh Majhee</div>
                      <div className="text-sm text-turmeric-600 font-medium">AI Club Member</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Facts - Enhanced */}
              <div className="bg-gradient-to-br from-earth-900 via-indigo-900 to-earth-900 rounded-2xl p-6 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-turmeric-500/10 rounded-full blur-2xl"></div>
                <h3 className="font-bold mb-6 flex items-center gap-2 text-lg relative z-10">
                  <Sparkles size={20} className="text-turmeric-400" />
                  Quick Facts
                </h3>
                <ul className="space-y-4 text-sm relative z-10">
                  <li className="flex items-start gap-4 p-3 bg-white/5 rounded-xl">
                    <Award size={18} className="text-turmeric-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">India's Biggest Agentic AI Hackathon</span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-white/5 rounded-xl">
                    <Trophy size={18} className="text-turmeric-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">2nd Rank among 26,000+ participants</span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-white/5 rounded-xl">
                    <MapPin size={18} className="text-turmeric-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">PTSNS University, Shahdol (M.P.)</span>
                  </li>
                  <li className="flex items-start gap-4 p-3 bg-white/5 rounded-xl">
                    <Users size={18} className="text-turmeric-400 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">Defeated teams from 32 IITs</span>
                  </li>
                </ul>
              </div>

              {/* Share - Enhanced */}
              <div className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                <h3 className="font-bold text-earth-900 mb-4 flex items-center gap-2">
                  <ExternalLink size={18} className="text-gray-400" />
                  Share This Story
                </h3>
                <div className="grid grid-cols-3 gap-3">
                  <button className="py-3 bg-[#1877F2] text-white rounded-xl text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center">FB</button>
                  <button className="py-3 bg-[#1DA1F2] text-white rounded-xl text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center">X</button>
                  <button className="py-3 bg-[#25D366] text-white rounded-xl text-sm font-bold hover:opacity-90 transition-opacity flex items-center justify-center">WA</button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AIHackathonAchievement;
