import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Leaf, Globe, ArrowRight, Activity, ShieldCheck, Users } from 'lucide-react';

const InitiativeCard: React.FC<{
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  link?: string;
}> = ({ title, subtitle, description, icon, color, gradient, link }) => {
  const CardContent = () => (
  <div className="group relative overflow-hidden bg-white rounded-3xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
    {/* Background Gradient - Now Default */}
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-100`}></div>
    
    <div className="relative p-8 h-full flex flex-col z-10">
      <div className="flex items-start justify-between mb-6">
        <div className={`w-16 h-16 rounded-2xl ${color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
           {icon}
        </div>
        <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <ArrowRight size={20} className="text-white transition-colors" />
        </div>
      </div>

      <div className="mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-white/80">{subtitle}</span>
          <h3 className="text-2xl font-serif font-bold text-white mt-1 leading-tight">
            {title}
          </h3>
      </div>

      <p className="text-white/90 leading-relaxed mb-6">
        {description}
      </p>

      {/* Decorative 'App' elements for visual flair */}
      <div className="mt-auto pt-6 border-t border-white/20">
         <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white"></span>
            <span className="text-xs font-bold text-white/80 uppercase tracking-widest">Active Initiative</span>
         </div>
      </div>
    </div>

    {/* Abstract Shapes */}
    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/5 rounded-full"></div>
  </div>
  );

  if (link) {
    return (
      <Link to={link} className="block">
        <CardContent />
      </Link>
    );
  }
  return <CardContent />;
};

const InitiativesSection: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      <div className="absolute -left-40 top-40 w-96 h-96 bg-turmeric-100/30 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob"></div>
      <div className="absolute -right-40 bottom-40 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl mix-blend-multiply opacity-70 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-4 rounded-full bg-forest-50 border border-forest-100 text-forest-700 font-bold tracking-widest uppercase text-xs mb-4 shadow-sm">
               Key University Initiatives
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 leading-tight mb-6">
              Our Digital & <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest-600 to-turmeric-600">Green Campus</span> Programs
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed font-light">
               Leveraging technology and innovation to foster a sustainable, efficient, and healthy campus ecosystem.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <InitiativeCard 
                title="Aarogyam App"
                subtitle="Health & Wellness"
                description="Empowering Health, One Click Away. Access healthcare resources, track wellness activities, and stay informed — anytime, anywhere."
                icon={<Activity size={32} />}
                color="bg-rose-500"
                gradient="from-rose-500 to-rose-600"
            />
            
            <InitiativeCard 
                title="Club Culture"
                subtitle="Student Life"
                description="Discover 14+ vibrant clubs from AI to Arts. Join a community of passionate students and develop skills beyond academics."
                icon={<Users size={32} />}
                color="bg-purple-600"
                gradient="from-purple-600 to-pink-600"
                link="/club-culture"
            />

            <InitiativeCard 
                title="Samarth Portal"
                subtitle="Student Services"
                description="Integrated University Management System. A one-stop portal for admissions, examinations, results, and student lifecycle management."
                icon={<Smartphone size={32} />}
                color="bg-turmeric-500"
                gradient="from-turmeric-500 to-orange-500"
            />

            <InitiativeCard 
                title="Green Campus"
                subtitle="Sustainability"
                description="Eco-friendly initiatives including solar energy adoption, rainwater harvesting, and plastic-free campus drives."
                icon={<Leaf size={32} />}
                color="bg-forest-500"
                gradient="from-forest-500 to-green-600"
            />
        </div>

        {/* Floating App Showcase (Optional Aesthetic Touch) */}
        <div className="mt-20 relative rounded-3xl bg-earth-900 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-earth-900 via-earth-800 to-earth-900 opacity-90"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-12 gap-10">
                <div className="max-w-xl text-white">
                    <h3 className="text-3xl font-serif font-bold mb-4">Arogyam App</h3>
                    <p className="text-gray-300 text-lg mb-8">
                        Experience the convenience of our digital university ecosystem. Download our official apps to stay connected and productive.
                    </p>
                    <div className="flex gap-4">
                        <button className="flex items-center gap-3 bg-white text-earth-900 px-6 py-3 rounded-xl font-bold hover:bg-turmeric-400 transition-colors">
                            <Smartphone size={24} />
                            <div className="text-left leading-tight">
                                <div className="text-[10px] uppercase tracking-wider">Download on the</div>
                                <div className="text-sm">App Store</div>
                            </div>
                        </button>
                        <button className="flex items-center gap-3 bg-white/10 text-white border border-white/20 px-6 py-3 rounded-xl font-bold hover:bg-white/20 transition-colors">
                           <Globe size={24} />
                            <div className="text-left leading-tight">
                                <div className="text-[10px] uppercase tracking-wider">Get it on</div>
                                <div className="text-sm">Google Play</div>
                            </div>
                        </button>
                    </div>
                </div>
                
                {/* Abstract Phone Mockup Art */}
                <div className="relative w-full max-w-sm h-64 md:h-80 flex items-center justify-center">
                    <div className="absolute w-44 h-full bg-white/5 rounded-[3rem] border-8 border-white/10 rotate-[-10deg] transform translate-y-4 blur-sm"></div>
                    <div className="relative w-44 h-full bg-black rounded-[3rem] border-8 border-gray-800 shadow-2xl rotate-[5deg] overflow-hidden group hover:rotate-0 transition-transform duration-500">
                        <div className="absolute top-0 w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 flex flex-col items-center justify-center">
                            <ShieldCheck size={48} className="text-turmeric-500 mb-4" />
                            <span className="text-white font-bold tracking-widest">PTSNS</span>
                            <span className="text-xs text-gray-500 uppercase mt-1">Digital Campus</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default InitiativesSection;
