import React from 'react';
import { Quote, CheckCircle, ArrowRight, User, Mail, Phone } from 'lucide-react';

const VCMessage: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* Page Header */}
      <div className="bg-earth-900 text-white relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
            <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">Vice Chancellor's Message</h1>
            <div className="flex justify-center gap-2 text-turmeric-400 text-sm font-bold uppercase tracking-widest">
                <span>Administration</span>
                <span>•</span>
                <span>Leadership</span>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Sidebar / Profile Card */}
            <div className="w-full lg:w-1/3 order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden sticky top-24 border border-gray-100">
                    <div className="h-32 bg-gradient-to-r from-turmeric-600 to-turmeric-500 relative">
                        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 p-1.5 bg-white rounded-full">
                             <img 
                                src="/vice-chancellor.jpg" 
                                alt="Vice Chancellor" 
                                className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg"
                            />
                        </div>
                    </div>
                    <div className="pt-20 pb-8 px-6 text-center">
                        <h3 className="text-2xl font-serif font-bold text-earth-900">Prof. Ram Shankar</h3>
                        <p className="text-turmeric-600 font-bold text-sm uppercase tracking-wide mt-1">Vice Chancellor</p>
                        <p className="text-gray-500 text-sm mt-4 italic">"Leading with Vision, Inspiring Excellence"</p>
                        
                        <div className="mt-8 space-y-4 text-left border-t border-gray-100 pt-6">
                            <div className="flex items-center gap-3 text-gray-600 text-sm">
                                <span className="p-2 bg-stone-100 rounded-full text-turmeric-600"><Mail size={16} /></span>
                                <a href="mailto:vc@ptsns.edu.in" className="hover:text-turmeric-600 transition-colors">vc@ptsns.edu.in</a>
                            </div>
                            <div className="flex items-center gap-3 text-gray-600 text-sm">
                                <span className="p-2 bg-stone-100 rounded-full text-turmeric-600"><Phone size={16} /></span>
                                <span>+91 7652 123456</span>
                            </div>
                        </div>

                        <div className="mt-8">
                            <a href="#" className="block w-full py-3 bg-earth-900 text-white rounded-lg font-bold hover:bg-turmeric-600 transition-colors shadow-lg">
                                View Full Profile
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content: Message */}
            <div className="w-full lg:w-2/3 order-1 lg:order-2">
                <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 relative">
                    <Quote className="absolute top-8 left-8 text-turmeric-100 w-20 h-20 -z-0" />
                    
                    <div className="relative z-10">
                        <h2 className="text-3xl font-serif font-bold text-earth-900 mb-6">Welcome to Pandit Shambhunath Shukla University</h2>
                        
                        <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
                            <p className="mb-4">
                                <strong>Dear Students, Parents, and Faculty,</strong>
                            </p>
                            <p className="mb-6">
                                It gives me immense pleasure to welcome you to Pandit Shambhunath Shukla University, an institution dedicated to academic excellence, research, and holistic development. Our university stands as a beacon of knowledge in the region, committed to empowering the youth with skills that bridge the gap between tradition and modernity.
                            </p>
                            <p className="mb-6">
                                In today's rapidly evolving world, education is not just about acquiring degrees but about developing critical thinking, ethical leadership, and a spirit of innovation. We have aligned our curriculum with the <strong>National Education Policy (NEP) 2020</strong> to ensure our students are ready for the global challenges of the 21st century.
                            </p>
                            <p className="mb-6">
                                Our focus remains steadfast on creating a vibrant ecosystem where:
                            </p>
                            <ul className="space-y-3 pl-4 mb-8">
                                {[
                                    "Research drives innovation and societal impact.",
                                    "Inclusivity ensures education for all, regardless of background.",
                                    "Technology integrates seamlessly with pedagogy.",
                                    "Cultural values are cherished alongside scientific temper."
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="text-turmeric-500 w-5 h-5 flex-shrink-0 mt-1" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                I invite you to join us in this journey of transformation. Together, let us build a future that is sustainable, inclusive, and prosperous.
                            </p>
                        </div>

                        <div className="mt-12 flex items-end justify-between border-t border-gray-100 pt-8">
                            <div>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signature" className="h-12 opacity-80 mb-2" />
                                <h4 className="font-serif font-bold text-lg text-earth-900">Prof. Ram Shankar</h4>
                                <p className="text-sm text-gray-500">Vice Chancellor</p>
                            </div>
                            <div className="hidden md:block">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Emblem_of_India.svg" alt="Emblem" className="h-16 opacity-20 grayscale" />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Quick Links Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                    <a href="/vision-mission" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                        <span className="font-bold text-earth-900 group-hover:text-turmeric-600 transition-colors">Our Vision & Mission</span>
                        <ArrowRight className="text-gray-300 group-hover:text-turmeric-600 transition-colors" size={20} />
                    </a>
                    <a href="/admin-login" className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between group">
                        <span className="font-bold text-earth-900 group-hover:text-turmeric-600 transition-colors">Administration</span>
                        <ArrowRight className="text-gray-300 group-hover:text-turmeric-600 transition-colors" size={20} />
                    </a>
                </div>
            </div>

        </div>
      </div>
    </div>
  );
};

export default VCMessage;
