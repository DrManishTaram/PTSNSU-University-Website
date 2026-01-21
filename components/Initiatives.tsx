import React from 'react';
import { Heart, Award, Globe, Shield } from 'lucide-react';

const InitiativeCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  btnText: string;
}> = ({ icon, title, subtitle, description, btnText }) => (
  <div className="bg-gradient-to-br from-turmeric-500 to-amber-600 rounded-xl p-8 text-white relative overflow-hidden group hover:shadow-2xl hover:scale-[1.02] transition-all duration-300">
    <div className="absolute top-0 right-0 p-8 opacity-10 transform scale-150 group-hover:scale-125 transition-transform duration-700">
      {React.cloneElement(icon as React.ReactElement, { size: 120 })}
    </div>
    
    <div className="relative z-10 h-full flex flex-col">
      <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mb-6 backdrop-blur-sm">
        {icon}
      </div>
      
      <h3 className="text-2xl font-bold mb-1">{title}</h3>
      <p className="text-turmeric-100 text-sm mb-4 font-medium uppercase tracking-wide">{subtitle}</p>
      
      <p className="text-white/90 leading-relaxed mb-8 flex-grow">
        {description}
      </p>
      
      <button className="flex items-center text-sm font-bold uppercase tracking-wider border border-white/30 rounded-full px-6 py-2 hover:bg-white hover:text-amber-600 transition-all w-fit">
        {btnText} <span className="ml-2">→</span>
      </button>
    </div>
  </div>
);

const Initiatives: React.FC = () => {
  return (
    <section className="py-20 bg-stone-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-earth-900 uppercase tracking-wide">
            University Initiatives
          </h2>
          <div className="w-24 h-1 bg-turmeric-600 mx-auto mt-4 mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse range of programs and initiatives that enrich campus life and extend our impact beyond the classroom.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <InitiativeCard 
            icon={<Heart size={24} />}
            title="Aarogyam App"
            subtitle="Health & Wellness"
            description="Access healthcare resources, track wellness activities, and stay informed — anytime, anywhere."
            btnText="More Detail"
          />
          <InitiativeCard 
            icon={<Award size={24} />}
            title="Success Stories"
            subtitle="Inspiration"
            description="Faculty Excellence: A Symphony of Roles that inspire the next generation of leaders."
            btnText="Explore Stories"
          />
          <InitiativeCard 
            icon={<Globe size={24} />}
            title="Beyond Academics"
            subtitle="Service Beyond Self"
            description="Hands-on community initiatives that make a difference in society and build character."
            btnText="Discover"
          />
          <InitiativeCard 
            icon={<Shield size={24} />}
            title="Campus Ethos"
            subtitle="Our Principles"
            description="We uphold a vibrant and ethical campus culture rooted in tradition and integrity."
            btnText="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default Initiatives;