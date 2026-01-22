import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface GenericPageProps {
  title: string;
  category?: string;
  children?: React.ReactNode;
}

const GenericPage: React.FC<GenericPageProps> = ({ title, category = "Pages", children }) => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-earth-900 text-white relative overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-earth-900 via-earth-900/90 to-earth-900/50"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col gap-4">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-turmeric-300 font-medium uppercase tracking-wider mb-2">
              <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
                <Home size={14} /> Home
              </Link>
              <ChevronRight size={14} />
              <span className="text-white/60">{category}</span>
              <ChevronRight size={14} />
              <span className="text-white">{title}</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight">
              {title}
            </h1>
            <div className="w-20 h-1.5 bg-turmeric-500 rounded-full mt-2"></div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar / Quick Links */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-serif font-bold text-xl text-earth-900 mb-4 border-b pb-2">In This Section</h3>
              <ul className="space-y-2">
                {[
                  'Overview', 'Vision & Mission', 'Administration', 'Departments', 'Contact Us'
                ].map((item, idx) => (
                  <li key={idx}>
                    <a href="#" className="block px-4 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-turmeric-50 hover:text-turmeric-700 transition-colors flex items-center justify-between group">
                      {item}
                      <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-turmeric-500" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-turmeric-600 text-white p-6 rounded-xl shadow-lg relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 rounded-full border-[12px] border-white"></div>
              </div>
              <h3 className="font-serif font-bold text-xl mb-2 relative z-10">Need Help?</h3>
              <p className="text-turmeric-100 text-sm mb-4 relative z-10">Contact our administrative office for assistance.</p>
              <a href="tel:+911234567890" className="inline-block bg-white text-turmeric-700 px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-wider hover:bg-turmeric-50 transition-colors relative z-10">
                Contact Now
              </a>
            </div>
          </div>

          {/* Content Body */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 min-h-[400px]">
              {children ? children : (
                <div className="space-y-6 text-gray-600 leading-relaxed">
                  <p className="text-lg text-earth-800 font-medium">Welcome to the {title} page of Pandit Shambhunath Shukla University.</p>
                  
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  
                  <blockquote className="border-l-4 border-turmeric-500 pl-4 py-2 my-8 bg-turmeric-50/50 rounded-r-lg italic text-earth-800 font-serif text-lg">
                    "Education is the most powerful weapon which you can use to change the world."
                  </blockquote>

                  <h3 className="text-2xl font-serif font-bold text-earth-900 mt-8 mb-4">Key Information</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-8">
                    <img 
                        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1000&auto=format&fit=crop" 
                        alt="University Campus" 
                        className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-48 w-full"
                    />
                    <img 
                        src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=1000&auto=format&fit=crop" 
                        alt="Students Learning" 
                        className="rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 object-cover h-48 w-full"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default GenericPage;
