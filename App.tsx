import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import TopBar from './components/TopBar';
import FormalHeader from './components/FormalHeader';
import Navbar from './components/Navbar';
import AnnouncementBanner from './components/AnnouncementBanner';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import GenericPage from './pages/GenericPage';
import VCMessage from './pages/VCMessage';
import AdmissionNotification from './pages/AdmissionNotification';
import Chatbot from './components/Chatbot';
import NotFound from './pages/NotFound';
import AIHackathonAchievement from './pages/AIHackathonAchievement';
import ClubCulturePage from './pages/ClubCulturePage';
import ClubDetailsPage from './pages/ClubDetailsPage';
import EventGalleryPage from './pages/EventGalleryPage';
import EventDetailPage from './pages/EventDetailPage';
import Loader from './components/Loader';
import { SearchProvider } from './context/SearchContext';
import { MobileMenuProvider } from './context/MobileMenuContext';

// Component to scroll to top on every route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [loading, setLoading] = React.useState(true);

  if (loading) {
    return <Loader onComplete={() => setLoading(false)} />;
  }

  return (
    <MobileMenuProvider>
      <SearchProvider>
        <Router>
          <ScrollToTop />
          <div className="min-h-screen flex flex-col font-sans text-earth-800 relative">
            <Chatbot />
            <TopBar />
            <div className="sticky top-0 z-[100]">
              <FormalHeader />
              <Navbar />
            </div>
            <AnnouncementBanner />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />

              {/* The University */}
              <Route path="/overview" element={<GenericPage title="University Overview" category="The University" />} />
              <Route path="/history" element={<GenericPage title="History & Heritage" category="The University" />} />
              <Route path="/vision-mission" element={<GenericPage title="Vision & Mission" category="The University" />} />
              <Route path="/kulgeet" element={<GenericPage title="University Kulgeet" category="The University" />} />
              <Route path="/virtual-tour" element={<GenericPage title="Virtual Tour" category="The University" />} />
              <Route path="/chancellor-message" element={<GenericPage title="Chancellor's Message" category="Administration" />} />
              <Route path="/vc-message" element={<VCMessage />} />
              <Route path="/registrar" element={<GenericPage title="Office of The Registrar" category="Administration" />} />
              <Route path="/executive-council" element={<GenericPage title="Executive Council" category="Administration" />} />
              <Route path="/finance-officer" element={<GenericPage title="Finance Officer" category="Administration" />} />
              <Route path="/exam-controller" element={<GenericPage title="Examination Controller" category="Administration" />} />
              <Route path="/act-statutes" element={<GenericPage title="Act, Statutes & Ordinances" category="Official" />} />

              {/* Academics */}
              <Route path="/schools-departments" element={<GenericPage title="Schools & Departments" category="Academics" />} />
              <Route path="/programs" element={<GenericPage title="Academic Programs" category="Academics" />} />
              <Route path="/syllabus" element={<GenericPage title="Syllabus (NEP)" category="Academics" />} />
              <Route path="/calendar" element={<GenericPage title="Academic Calendar" category="Academics" />} />
              <Route path="/iks" element={<GenericPage title="Indian Knowledge System" category="Academics" />} />
              <Route path="/phd" element={<GenericPage title="PhD Programs" category="Research" />} />
              <Route path="/research-development" element={<GenericPage title="Research & Development" category="Research" />} />
              <Route path="/projects-grants" element={<GenericPage title="Projects & Grants" category="Research" />} />
              <Route path="/consultancy" element={<GenericPage title="Consultancy Services" category="Research" />} />
              <Route path="/patent-cell" element={<GenericPage title="Patent Cell" category="Research" />} />
              <Route path="/library" element={<GenericPage title="Central Library" category="Facilities" />} />
              <Route path="/iqac" element={<GenericPage title="IQAC Cell" category="Facilities" />} />
              <Route path="/mou" element={<GenericPage title="MOU & Collaborations" category="Facilities" />} />

              {/* Admissions */}
              <Route path="/admission-notification" element={<AdmissionNotification />} />
              <Route path="/entrance-exam" element={<GenericPage title="Entrance Exam 2025" category="Admissions" />} />
              <Route path="/international-students" element={<GenericPage title="International Students" category="Admissions" />} />
              <Route path="/fees" element={<GenericPage title="Fee Structure" category="Admissions" />} />
              <Route path="/fee-refund" element={<GenericPage title="Fee Refund Policy" category="Admissions" />} />
              <Route path="/scholarships" element={<GenericPage title="Scholarships & Financial Aid" category="Admissions" />} />

              {/* Student Zone */}
              <Route path="/hostel" element={<GenericPage title="Hostel & Campus Life" category="Student Zone" />} />
              <Route path="/sports" element={<GenericPage title="Sports Facilities" category="Student Zone" />} />
              <Route path="/clubs" element={<GenericPage title="University Clubs" category="Student Zone" />} />
              <Route path="/ncc-nss" element={<GenericPage title="NCC & NSS" category="Student Zone" />} />
              <Route path="/student-portal" element={<GenericPage title="Student Portal" category="Student Zone" />} />
              <Route path="/placements" element={<GenericPage title="Placement Cell" category="Student Zone" />} />
              <Route path="/grievance" element={<GenericPage title="Student Grievance Redressal" category="Student Zone" />} />
              <Route path="/anti-ragging" element={<GenericPage title="Anti-Ragging Cell" category="Student Zone" />} />
              <Route path="/convocation" element={<GenericPage title="Convocation" category="Student Zone" />} />

              {/* Info Desk */}
              <Route path="/tenders" element={<GenericPage title="Tender Notices" category="Info Desk" />} />
              <Route path="/jobs" element={<GenericPage title="Job Openings" category="Info Desk" />} />
              <Route path="/rti" element={<GenericPage title="RTI Cell" category="Info Desk" />} />
              <Route path="/downloads" element={<GenericPage title="Downloads & Forms" category="Info Desk" />} />
              <Route path="/contact" element={<GenericPage title="Contact Us" category="Info Desk" />} />
              <Route path="/media" element={<GenericPage title="Media Gallery" category="Info Desk" />} />

              {/* Achievement Stories */}
              <Route path="/achievements/ai-hackathon" element={<AIHackathonAchievement />} />

              {/* Student Life */}
              <Route path="/club-culture" element={<ClubCulturePage />} />
              <Route path="/club/:id" element={<ClubDetailsPage />} />

              {/* Event Gallery */}
              <Route path="/gallery" element={<EventGalleryPage />} />
              <Route path="/gallery/:eventId" element={<EventDetailPage />} />

              {/* Catch all */}
              <Route path="*" element={<NotFound />} />
            </Routes>

            <Footer />
          </div>
        </Router>
      </SearchProvider>
    </MobileMenuProvider>
  );
};

export default App;