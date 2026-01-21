import { Cpu, Drama, Camera, Palette, MessageCircle, Music, Activity, PenTool, Leaf, BookOpen, Utensils, Shield, Plane, Component, LucideIcon } from 'lucide-react';

export interface ClubMember {
  name: string;
  role: string;
  image?: string;
  year?: string;
}

export interface ClubProject {
  title: string;
  description: string;
  image?: string;
  date?: string;
}

export interface ClubAchievement {
  title: string;
  description: string;
  date?: string;
}

export interface Club {
  id: string;
  name: string;
  iconName: string; // We'll store string and map to icon component in UI to avoid serializing issues if needed, or just import icons here
  theme: string; // Gradient class
  description: string;
  fullDescription: string;
  facultyCoordinator: {
    name: string;
    designation: string;
    image?: string;
  };
  leads: ClubMember[];
  members: ClubMember[];
  achievements: ClubAchievement[];
  projects: ClubProject[];
  stats: {
    members: number;
    events: number;
    projects: number;
  };
  featured?: boolean;
  logo?: string;
}

export const clubsInputData = [
  {
    id: 'ai-club',
    name: 'AI Club',
    iconName: 'Cpu',
    logo: '/clubs/ai-club-logo.jpg',
    theme: 'from-blue-600 to-indigo-700',
    description: 'Pioneering Artificial Intelligence & Innovation on campus.',
    fullDescription: 'The AI Club at PTSNS University is a hub for innovation and technological excellence. We are dedicated to exploring the frontiers of Artificial Intelligence, Machine Learning, and Robotics. Our mission is to empower students with cutting-edge skills through workshops, hackathons, and real-world projects, bridging the gap between academic learning and industry demands.',
    facultyCoordinator: {
      name: 'Dr. Manish Taram',
      designation: 'Department of Computer Science',
      image: '/faculty/manish-taram.png' 
    },
    leads: [
      { name: 'Anukalp Dwivedi', role: 'President', image: '/anukalp-profile.jpg', year: 'Final Year' },
      { name: 'Sourabh Majhee', role: 'Vice President', image: '/sourabh-profile.png', year: '2nd Year' }
    ],
    members: [
      { name: 'Ashrut Tiwari', role: 'Tech Lead', year: '2nd Year' },
      { name: 'Aditya Barman', role: 'Event Coordinator', year: '1st Year' },
      { name: 'Aditya Singh', role: 'Member', year: '2nd Year' },
      { name: 'Priya Sharma', role: 'Designer', year: '3rd Year' },
      { name: 'Rohan Gupta', role: 'Developer', year: '2nd Year' },
      { name: 'Neha Varma', role: 'Content Writer', year: '1st Year' },
      { name: 'Siddharth Rao', role: 'ML Engineer', year: '3rd Year' },
      { name: 'Anjali Mehta', role: 'Member', year: '1st Year' },
      { name: 'Vikram Singh', role: 'Researcher', year: 'Final Year' },
      { name: 'Sneha Patel', role: 'Member', year: '2nd Year' },
    ],
    achievements: [
      { title: "2nd Runner Up - India's Biggest AI Hackathon", description: "Secured 2nd rank among 26,000+ participants, beating teams from 32 IITs.", date: "Jan 2025" },
      { title: "Best Innovation Award", description: "Inter-University Technical Fest 2024", date: "Nov 2024" }
    ],
    projects: [
      { title: "Agentic SaaS Platform", description: "The winning project of the AI Hackathon, facilitating autonomous agent workflows.", date: "2025" },
      { title: "India's own LLM 'Chaitanya AI'", description: "An AI-powered assistant for student queries and campus navigation.", date: "2024" }
    ],
    stats: { members: 150, events: 12, projects: 8 },
    featured: true
  },
  {
    id: 'abhivyakti-club',
    name: 'Abhivyakti Club',
    iconName: 'Drama',
    theme: 'from-rose-500 to-pink-600',
    description: 'Unleashing creativity through Drama and Theatre.',
    fullDescription: 'Abhivyakti acts as the soul of cultural expression at PTSNS. We provide a platform for students to express themselves through street plays (Nukkad Natak), stage dramas, and mime. We address social issues and entertain through the art of acting.',
    facultyCoordinator: { name: 'Dr. Anita Mishra', designation: 'Department of Humanities' },
    leads: [
      { name: 'Sanskriti Gupta', role: 'President', year: '3rd Year' },
      { name: 'Amit Patel', role: 'General Secretary', year: '3rd Year' }
    ],
    members: [],
    achievements: [
        { title: "1st Prize - State Drama Fest", description: "For the play 'Badlav' on social reform." }
    ],
    projects: [
        { title: "Annual Production 'Aagaz'", description: "A full-length play performed at the University Auditorium." }
    ],
    stats: { members: 85, events: 6, projects: 4 }
  },
  {
    id: 'chhavi-club',
    name: 'Chhavi Photography Club',
    iconName: 'Camera',
    theme: 'from-amber-500 to-orange-600',
    description: 'Capturing moments, creating memories.',
    fullDescription: 'Chhavi is for those who see the world differently. We document every major event of the university and organize photo walks, exhibitions, and workshops to master the art of visual storytelling.',
    facultyCoordinator: { name: 'Prof. S.K. Tiwari', designation: 'Media & Mass Comm' },
    leads: [
        { name: 'Rohan Das', role: 'Lead Photographer', year: 'Final Year' }
    ],
    members: [],
    achievements: [
        { title: "Best Photo Story", description: "National Photography Contest 2024" }
    ],
    projects: [
        { title: "Campus Through Lens", description: "A year-long photo documentation project of university biodiversity." }
    ],
    stats: { members: 60, events: 15, projects: 12 }
  },
  // Adding condensed versions for the rest to fit file size comfortably while remaining functional
  {
    id: 'kalakriti-club',
    name: 'Kalakriti Club',
    iconName: 'Palette',
    theme: 'from-purple-500 to-violet-600',
    description: 'The Fine Arts and Creativity Hub.',
    fullDescription: 'Kalakriti brings color to campus life. From painting and sketching to digital art and crafts, we nurture the artist within every student.',
    facultyCoordinator: { name: 'Dr. Meera Singh', designation: 'Dept of Arts' },
    leads: [{ name: 'Ishita Roy', role: 'President', year: '3rd Year' }],
    members: [],
    achievements: [{ title: "Wall Art Marathon", description: "Decorated the entire Student Activity Center" }],
    projects: [{ title: "Eco-Friendly Ganesh Idol Workshop", description: "Promoting sustainability through art." }],
    stats: { members: 90, events: 8, projects: 20 }
  },
  {
    id: 'manthan-club',
    name: 'Manthan Club',
    iconName: 'MessageCircle',
    theme: 'from-teal-500 to-cyan-600',
    description: 'Debating, Public Speaking & Literary Discourse.',
    fullDescription: 'Manthan is the intellectual powerhouse of the university. We organize debates, Model United Nations (MUNs), and group discussions to foster critical thinking and articulate expression.',
    facultyCoordinator: { name: 'Dr. P.L. Verma', designation: 'Dept of Pol. Science' },
    leads: [{ name: 'Arjun Kapoor', role: 'President', year: 'Final Year' }],
    members: [],
    achievements: [{ title: "Best Delegation", description: "Regional Model UN 2024" }],
    projects: [{ title: "Voice of Youth", description: "Weekly panel discussion series." }],
    stats: { members: 120, events: 20, projects: 5 }
  },
    {
    id: 'natraj-club',
    name: 'Natraj Club',
    iconName: 'Activity', // Fallback for dance icon
    theme: 'from-fuchsia-500 to-pink-600',
    description: 'Expressing rhythm through Dance.',
    fullDescription: 'Natraj Club celebrates the joy of movement. Whether it is Classical, Folk, or Western, we bring energy to every stage we step on.',
    facultyCoordinator: { name: 'Dr. Shweta Rani', designation: 'Cultural Coordinator' },
    leads: [{ name: 'Nisha Yadav', role: 'Choreographer', year: '3rd Year' }],
    members: [],
    achievements: [{ title: "Inter-University Dance Champions", description: "Group Dance Category 2024" }],
    projects: [{ title: "Nritya Utsav", description: "Annual dance showcase." }],
    stats: { members: 110, events: 5, projects: 8 }
  },
  {
    id: 'sadhana-club',
    name: 'Sadhana Club',
    iconName: 'Leaf', // Yoga/Wellness
    theme: 'from-green-500 to-emerald-600',
    description: 'Yoga, Meditation & Holistic Wellness.',
    fullDescription: 'Sadhana focuses on the mind-body connection. We promote physical and mental well-being through regular yoga sessions, meditation camps, and stress-management workshops.',
    facultyCoordinator: { name: 'Dr. Ayush Sharma', designation: 'Sports Dept' },
    leads: [{ name: 'Vikram Malhotra', role: 'Lead Instructor', year: 'Final Year' }],
    members: [],
    achievements: [{ title: "Record Participation", description: "International Yoga Day 2024" }],
    projects: [{ title: "7-Day Wellness Camp", description: "Intensive yoga retreat for students." }],
    stats: { members: 200, events: 50, projects: 3 }
  },
  {
    id: 'sargam-club',
    name: 'Sargam Club',
    iconName: 'Music',
    theme: 'from-blue-500 to-indigo-600',
    description: 'The melody of PTSNS. Music & Singing.',
    fullDescription: 'Sargam is home to singers, instrumentalists, and music producers. We create the soundtrack of university life, performing at invocations, concerts, and jams.',
    facultyCoordinator: { name: 'Dr. K.K. Menon', designation: 'Music Dept' },
    leads: [{ name: 'Suraj Kumar', role: 'Band Leader', year: '3rd Year' }],
    members: [],
    achievements: [{ title: "Battle of Bands Winner", description: "Regional Fest 2024" }],
    projects: [{ title: "University Anthem", description: "Composed and recorded the new anthem." }],
    stats: { members: 75, events: 10, projects: 15 }
  },
  {
    id: 'toolika-club',
    name: 'Toolika Club',
    iconName: 'PenTool',
    theme: 'from-yellow-500 to-amber-600',
    description: 'Creative Writing, Literature & Journalism.',
    fullDescription: 'Toolika is for the wordsmiths. We manage the university magazine, newsletter, and organize poetry slams, storytelling sessions, and literary quizzes.',
    facultyCoordinator: { name: 'Dr. H.S. Bhati', designation: 'Dept of English' },
    leads: [{ name: 'Kavya Singh', role: 'Editor in Chief', year: 'Final Year' }],
    members: [],
    achievements: [{ title: "Best College Magazine", description: "State Education Awards" }],
    projects: [{ title: "PTSNS Chronicles", description: "Monthly newsletter publication." }],
    stats: { members: 55, events: 12, projects: 12 }
  },
  {
    id: 'vatika-club',
    name: 'Vatika Club',
    iconName: 'Leaf',
    theme: 'from-lime-500 to-green-600',
    description: 'Green Campus & Environmental Stewardship.',
    fullDescription: 'Vatika is dedicated to environmental conservation. We maintain the campus gardens, organize plantation drives, and advocate for sustainability.',
    facultyCoordinator: { name: 'Dr. G.P. Forest', designation: 'Dept of Botany' },
    leads: [{ name: 'Aryan Green', role: 'President', year: '2nd Year' }],
    members: [],
    achievements: [{ title: "Green Campus Award", description: "Ministry of New & Renewable Energy" }],
    projects: [{ title: "Medicinal Garden", description: "Established a garden with 50+ medicinal plant species." }],
    stats: { members: 150, events: 8, projects: 5 }
  },
  {
    id: 'vedic-club',
    name: 'Vedic Club',
    iconName: 'BookOpen',
    theme: 'from-orange-500 to-red-600',
    description: 'Exploring Traditional Knowledge & Wisdom.',
    fullDescription: 'The Vedic Club bridges ancient wisdom with modern life. We explore Indian philosophy, Sanskrit literature, and the scientific relevance of traditional practices.',
    facultyCoordinator: { name: 'Acharya V. Shastri', designation: 'Dept of Sanskrit' },
    leads: [{ name: 'Om Prakash', role: 'Secretary', year: '3rd Year' }],
    members: [],
    achievements: [{ title: "State Level Sanskrit Quiz Winner", description: "2024" }],
    projects: [{ title: "Manuscript Digitization", description: "Preserving rare texts from the library." }],
    stats: { members: 40, events: 6, projects: 2 }
  },
  {
    id: 'vyanjan-club',
    name: 'Vyanjan Club',
    iconName: 'Utensils',
    theme: 'from-red-500 to-rose-600',
    description: 'Culinary Arts & Nutrition.',
    fullDescription: 'Vyanjan celebrates the art of cooking. We organize food festivals, cooking without fire competitions, and workshops on nutrition and dietetics.',
    facultyCoordinator: { name: 'Dr. N. Gupta', designation: 'Home Science Dept' },
    leads: [{ name: 'Riya Cook', role: 'Head Chef', year: 'Final Year' }],
    members: [],
    achievements: [{ title: "Best Stall Award", description: "Annual University Fete" }],
    projects: [{ title: "Healthy Tiffin Initiative", description: "Workshops for school children." }],
    stats: { members: 65, events: 4, projects: 3 }
  },
  {
    id: 'women-defence-club',
    name: 'Women Self Defence Club',
    iconName: 'Shield',
    theme: 'from-slate-600 to-slate-800',
    description: 'Empowerment through Strength & Safety.',
    fullDescription: 'This club is dedicated to the safety and empowerment of female students. We organize regular self-defense training, martial arts workshops, and safety awareness seminars.',
    facultyCoordinator: { name: 'Mrs. S. Inspector', designation: 'Sports Officer' },
    leads: [{ name: 'Kiran Bedi', role: 'Captain', year: 'Final Year' }],
    members: [],
    achievements: [{ title: "Zero Harassment Campus Status", description: "Contributed creating a safe environment" }],
    projects: [{ title: "Mission Shakti", description: "Week-long intensive training camp." }],
    stats: { members: 200, events: 10, projects: 5 }
  },
  {
    id: 'robotics-drone-club',
    name: 'Robotics & Drone Club',
    iconName: 'Plane',
    theme: 'from-sky-500 to-blue-700',
    description: 'Building the Future with Automation.',
    fullDescription: 'For the geeks and makers. We design, build, and fly drones and robots. From line-follower robots to aerial surveillance drones, we build it all.',
    facultyCoordinator: { name: 'Er. Tech Lead', designation: 'Dept of Electronics' },
    leads: [{ name: 'Iron Man', role: 'President', year: '4th Year' }],
    members: [],
    achievements: [{ title: "Best Drone Design", description: "TechFest 2024" }],
    projects: [{ title: "Surveillance Drone", description: "For campus security monitoring." }],
    stats: { members: 80, events: 6, projects: 10 }
  }
];
