import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ExternalLink, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-earth-900 text-white pt-20 pb-10 border-t-4 border-turmeric-500 relative overflow-hidden">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-turmeric-500/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-turmeric-600/5 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-turmeric-400 p-1 bg-white/5 backdrop-blur-sm">
                <img src="/logo.jpg" alt="University Logo" className="w-full h-full object-contain rounded-full" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-xl leading-none text-turmeric-400">Pt. S.N. Shukla</h3>
                <h4 className="font-sans font-bold text-sm tracking-widest text-white/90 mt-1 uppercase">University</h4>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed border-l-2 border-turmeric-500/30 pl-4">
              A premier institution dedicated to higher learning, research, and community service. We strive to mold the leaders of tomorrow through holistic education and clear vision.
            </p>
            <div className="flex gap-3 pt-2">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-turmeric-500 hover:text-white transition-all duration-300 border border-white/10 hover:border-turmeric-400 hover:shadow-[0_0_15px_rgba(234,179,8,0.4)] group">
                  <Icon size={18} className="text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-turmeric-500 rounded-full"></span>
                Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                  { name: 'Admission Procedure', href: '/admission-notification' },
                  { name: 'Academic Calendar', href: '/calendar' },
                  { name: 'Examination Result', href: '#' },
                  { name: 'University Kulgeet', href: '/kulgeet' },
                  { name: 'Alumni Network', href: '#' },
                  { name: 'Anti-Ragging Cell', href: '/anti-ragging' }
              ].map((link) => (
                <li key={link.name}>
                    <Link to={link.href} className="group flex items-center gap-2 text-gray-400 hover:text-turmeric-400 transition-colors text-sm">
                        <ChevronRight size={14} className="text-turmeric-600 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                    </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-turmeric-500 rounded-full"></span>
                Contact Us
            </h3>
            <ul className="space-y-5">
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-turmeric-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-turmeric-500 transition-colors duration-300">
                    <MapPin size={20} className="text-turmeric-500 group-hover:text-white" />
                </div>
                <div>
                    <h5 className="text-white text-sm font-bold mb-1">Campus Address</h5>
                    <p className="text-gray-400 text-xs leading-relaxed">
                        Near Sarfa Dam Rd, Nawalpur, Shahdol,<br/>Madhya Pradesh, India (484001)
                    </p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-turmeric-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-turmeric-500 transition-colors duration-300">
                    <Phone size={20} className="text-turmeric-500 group-hover:text-white" />
                </div>
                <div>
                    <h5 className="text-white text-sm font-bold mb-1">Phone</h5>
                    <p className="text-gray-400 text-xs">+91 7052 101 786</p>
                    <p className="text-gray-400 text-xs">+91 7223 828 512</p>
                </div>
              </li>
              <li className="flex items-start gap-4 group">
                <div className="w-10 h-10 rounded-lg bg-turmeric-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-turmeric-500 transition-colors duration-300">
                    <Mail size={20} className="text-turmeric-500 group-hover:text-white" />
                </div>
                <div>
                    <h5 className="text-white text-sm font-bold mb-1">Email</h5>
                    <p className="text-gray-400 text-xs">info@psnsu.ac.in</p>
                    <p className="text-gray-400 text-xs">registrar@psnsu.ac.in</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Location Map */}
          <div>
             <h3 className="font-bold text-lg mb-8 flex items-center gap-3">
                <span className="w-8 h-1 bg-turmeric-500 rounded-full"></span>
                Locate Us
             </h3>
             <div className="w-full h-48 bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700/50 group relative">
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.7486712301998!2d81.45010068379764!3d23.288580252189004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3986f90055702bbd%3A0x183a5e16f32a79a8!2sPtsns%20university%20main%20campus%20shahdol!5e0!3m2!1sen!2sin!4v1768051688999!5m2!1sen!2sin" 
                 width="100%" 
                 height="100%" 
                 style={{ border: 0 }} 
                 allowFullScreen 
                 loading="lazy" 
                 title="University Location Map"
                 className="grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-100 group-hover:scale-105"
               ></iframe>
               <a 
                href="https://goo.gl/maps/example" 
                target="_blank" 
                className="absolute bottom-2 right-2 bg-white/90 text-earth-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1"
               >
                 Open Map <ExternalLink size={10} />
               </a>
             </div>
             <p className="text-[10px] text-turmeric-500/60 mt-4 text-right">
                Pandit S.N. Shukla University Campus
             </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p className="font-medium tracking-wide">
            &copy; {new Date().getFullYear()} <span className="text-turmeric-500">Pt. S.N. Shukla University</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-turmeric-400 transition-colors">Privacy Policy</a>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <a href="#" className="hover:text-turmeric-400 transition-colors">Terms of Use</a>
            <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
            <a href="#" className="hover:text-turmeric-400 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;