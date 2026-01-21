import React from 'react';
import Hero from '../components/Hero';
import InfoCards from '../components/InfoCards';
import VCMessageSection from '../components/VCMessageSection';
import AboutSection from '../components/AboutSection';
import Stats from '../components/Stats';
import Achievements from '../components/Achievements';
import Academics from '../components/Academics';
import Facilities from '../components/Facilities';
import Testimonials from '../components/Testimonials';
import ContactSection from '../components/ContactSection';
import InitiativesSection from '../components/InitiativesSection';

const Home: React.FC = () => {
  return (
    <main className="flex-grow">
      <Hero />
      {/* InfoCards overlaps the Hero, creating the Qeducato effect */}
      <InfoCards />
      <VCMessageSection />
      <AboutSection />
      <Academics />
      <Facilities />
      <Stats />
      <Achievements />
      <InitiativesSection />
      <Testimonials />
      <ContactSection />
    </main>
  );
};

export default Home;
