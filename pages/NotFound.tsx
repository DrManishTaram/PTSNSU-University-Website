import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search, FileQuestion } from 'lucide-react';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-slate-50 py-20 px-4">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-turmeric-100 rounded-full blur-3xl opacity-40 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-100 rounded-full blur-2xl opacity-40"></div>
        
        {/* Floating Geometric Shapes */}
        <div className="absolute top-1/4 left-10 w-12 h-12 border-4 border-blue-200 rounded-lg animate-spin-slow opacity-60"></div>
        <div className="absolute bottom-1/3 right-10 w-16 h-16 border-4 border-turmeric-200 rounded-full animate-float opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center w-full">
        {/* 404 Visual */}
        <div className="relative inline-block mb-8">
            <h1 className="text-[120px] md:text-[200px] font-black leading-none text-transparent bg-clip-text bg-gradient-to-r from-blue-900 via-blue-600 to-blue-900 select-none animate-shimmer bg-[length:200%_auto]">
                404
            </h1>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none mix-blend-overlay">
                <span className="text-[120px] md:text-[200px] font-black leading-none text-white/5 blur-sm">404</span>
            </div>
            
            {/* Overlay Icon */}
            <div className="absolute -top-4 -right-4 md:right-10 bg-white p-4 rounded-full shadow-xl border border-gray-100 animate-bounce-small">
                <FileQuestion className="w-8 h-8 md:w-12 md:h-12 text-turmeric-500" />
            </div>
        </div>

        {/* Content */}
        <div className="space-y-6 animate-fade-up">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-earth-900">
                Page Not Found
            </h2>
            <p className="text-gray-500 text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
                Oops! The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
                <button 
                    onClick={() => navigate(-1)}
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 font-bold hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center justify-center gap-2 group"
                >
                    <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
                    Go Back
                </button>
                
                <Link 
                    to="/"
                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:scale-105 transition-all flex items-center justify-center gap-2"
                >
                    <Home size={18} />
                    Back to Home
                </Link>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 pt-8 border-t border-gray-200/60 max-w-2xl mx-auto">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold mb-6">Perhaps you were looking for?</p>
                <div className="flex flex-wrap justify-center gap-3">
                    {[
                        { name: 'Admissions', path: '/admission-notification' },
                        { name: 'Programs', path: '/programs' },
                        { name: 'Results', path: '/results' },
                        { name: 'Contact', path: '/contact' }
                    ].map((link, idx) => (
                        <Link 
                            key={idx}
                            to={link.path}
                            className="px-5 py-2 rounded-lg bg-white border border-gray-100 shadow-sm text-sm font-medium text-gray-600 hover:text-blue-600 hover:border-blue-100 hover:shadow-md transition-all flex items-center gap-2"
                        >
                            <Search size={14} className="text-gray-400" />
                            {link.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
