import React from 'react';
import { Quote, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const VCMessageSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-turmeric-50 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.15)] z-0">
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]"></div>
      
      {/* Abstract Shapes for Official Look */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-turmeric-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-forest-100/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Section */}
          <div className="order-1 lg:order-1 w-full lg:w-5/12 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-500">
               <div className="absolute inset-0 bg-gradient-to-t from-earth-900/80 via-transparent to-transparent z-10"></div>
               <img 
                 src="vc-seated.jpg" 
                 alt="Prof. Ram Shankar - Vice Chancellor" 
                 className="w-full h-[300px] md:h-[500px] object-cover object-top transform hover:scale-105 transition-transform duration-700"
               />
               <div className="absolute bottom-6 left-6 z-20 text-white">
                 <h3 className="text-xl md:text-2xl font-serif font-bold">Prof. Ram Shankar</h3>
                 <p className="text-forest-400 font-medium uppercase text-xs md:text-sm tracking-wider mt-1">Vice Chancellor</p>
               </div>
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-6 -right-6 lg:-right-10 bg-forest-500 text-white p-4 rounded-xl shadow-lg z-30 hidden md:block animate-fade-in">
              <div className="text-center">
                <span className="block text-3xl font-bold">25+</span>
                <span className="text-xs uppercase font-medium tracking-wide">Years Exp.</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="order-2 lg:order-2 w-full lg:w-7/12 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-turmeric-50 text-turmeric-600 font-bold text-xs uppercase tracking-widest border border-turmeric-100">
                Vice Chancellor's Desk
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 leading-tight">
                A Message from
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-turmeric-600 to-forest-500">
                  The Vice Chancellor
                </span>
              </h2>
            </div>
            
            <div className="relative">
              <Quote className="absolute -top-4 -left-6 text-turmeric-100 w-16 h-16 -z-10" />
              <p className="text-lg md:text-xl text-earth-800 leading-relaxed italic font-medium">
                "We are dedicated to empowering our youth with skills that bridge the gap between tradition and modernity. At Pt. S.N. Shukla University, we don't just educate; we cultivate the leaders of tomorrow."
              </p>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Pandit S.N. Shukla University stands as a beacon of knowledge, committed to academic excellence, inclusive growth, and research-driven development. Our curriculum honors our rich heritage while embracing global standards.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <button 
                onClick={() => navigate('/vc-message')}
                className="group px-8 py-4 bg-blue-600 text-white rounded-lg font-bold shadow-lg hover:bg-blue-700 transition-all duration-300 flex items-center gap-2"
              >
                Read VC's Message
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                 onClick={() => navigate('/vision-mission')}
                 className="px-8 py-4 bg-white text-earth-900 border border-gray-200 rounded-lg font-bold shadow-sm hover:shadow-md hover:border-turmeric-200 transition-all duration-300"
              >
                Our Vision
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default VCMessageSection;
