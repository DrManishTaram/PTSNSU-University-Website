import React from 'react';
import { Calendar, FileText, Download, Bell, ChevronRight, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AdmissionNotification: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-50">
      
      {/* Hero Header */}
      <div className="bg-earth-900 text-white relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-turmeric-900/20"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-turmeric-600/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex items-center gap-2 text-turmeric-400 font-bold uppercase tracking-widest text-xs mb-4">
                <Bell size={14} />
                <span>Admission Updates</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                Admissions 2025-26 <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-turmeric-400 to-turmeric-200">
                    Now Open
                </span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl">
                Join Pandit Shambhunath Shukla University to embark on a journey of academic excellence and innovation. Check the latest notifications below.
            </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12">
            
            {/* Main Content: Notifications */}
            <div className="w-full lg:w-2/3">
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-12">
                    <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-stone-50">
                        <h3 className="font-serif font-bold text-xl text-earth-900 flex items-center gap-2">
                            <Bell className="text-turmeric-600" size={20} />
                            Latest Notifications
                        </h3>
                        <span className="text-xs font-bold text-turmeric-600 bg-turmeric-50 px-3 py-1 rounded-full animate-pulse">
                            Live Updates
                        </span>
                    </div>
                    <div className="divide-y divide-gray-100">
                        {[
                            { title: "Admission Notification for Ph.D. Entrance Exam 2025", date: "18 Jan 2025", type: "New" },
                            { title: "Last Date Extended for UG Registration (Phase II)", date: "15 Jan 2025", type: "Important" },
                            { title: "Merit List declared for M.Sc. Biotechnology", date: "10 Jan 2025", type: "Result" },
                            { title: "Counseling Schedule for B.A. / B.Com / B.Sc.", date: "05 Jan 2025", type: "Notice" },
                            { title: "Fee Submission Guidelines for New Batches", date: "01 Jan 2025", type: "Info" }
                        ].map((notice, idx) => (
                            <div key={idx} className="p-6 hover:bg-stone-50 transition-colors flex items-start gap-4 group cursor-pointer">
                                <div className="text-center bg-white border border-gray-200 rounded-lg p-2 min-w-[70px] shadow-sm group-hover:border-turmeric-300 transition-colors">
                                    <span className="block text-xs text-gray-400 font-bold uppercase">{notice.date.split(' ')[1]}</span>
                                    <span className="block text-xl font-bold text-earth-900">{notice.date.split(' ')[0]}</span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center gap-2 mb-1">
                                        <h4 className="font-bold text-gray-800 text-lg group-hover:text-turmeric-600 transition-colors">
                                            {notice.title}
                                        </h4>
                                        {notice.type === 'New' && <span className="bg-red-100 text-red-600 text-[10px] font-bold px-2 py-0.5 rounded uppercase">New</span>}
                                    </div>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1"><FileText size={14} /> Ref No: PTSNS/ADM/2025/{100+idx}</span>
                                        <span className="flex items-center gap-1 text-turmeric-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                                            View Details <ArrowRight size={14} />
                                        </span>
                                    </div>
                                </div>
                                <button className="p-2 text-gray-400 hover:text-earth-900 bg-stone-100 hover:bg-stone-200 rounded-full transition-colors">
                                    <Download size={18} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Application Process */}
                <div>
                     <h3 className="font-serif font-bold text-2xl text-earth-900 mb-6">How to Apply?</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { step: "01", title: "Registration", desc: "Create an account on the admission portal with your email and mobile number." },
                            { step: "02", title: "Fill Application", desc: "Complete the form with personal, academic details and upload documents." },
                            { step: "03", title: "Fee Payment", desc: "Pay the application fee online via Net Banking, UPI, or Credit Card." },
                            { step: "04", title: "Print Receipt", desc: "Download the confirmation receipt and application form for future reference." }
                        ].map((item, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                                <div className="absolute right-0 top-0 text-[80px] font-bold text-gray-50 opacity-10 leading-none -mr-4 -mt-4 group-hover:text-turmeric-50 transition-colors">
                                    {item.step}
                                </div>
                                <div className="relative z-10">
                                    <span className="text-turmeric-600 font-bold text-lg mb-2 block">Step {item.step}</span>
                                    <h4 className="text-xl font-bold text-earth-900 mb-2">{item.title}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                     </div>
                </div>
            </div>

            {/* Sidebar Widgets */}
            <div className="w-full lg:w-1/3 space-y-8">
                
                {/* Important Dates */}
                <div className="bg-earth-900 text-white rounded-xl shadow-xl overflow-hidden">
                    <div className="p-6 bg-turmeric-600">
                        <h3 className="font-serif font-bold text-xl flex items-center gap-2">
                            <Calendar size={20} /> Important Dates
                        </h3>
                    </div>
                    <div className="p-6 space-y-6">
                        {[
                            { label: "Online Application Starts", date: "01 Jan 2025" },
                            { label: "Last Date to Apply", date: "15 Feb 2025" },
                            { label: "Entrance Exam Date", date: "01 Mar 2025" },
                            { label: "Result Declaration", date: "15 Mar 2025" }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between border-b border-white/10 last:border-0 pb-4 last:pb-0">
                                <span className="text-gray-300 text-sm font-medium">{item.label}</span>
                                <span className="font-bold text-white text-sm">{item.date}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Help */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h3 className="font-bold text-lg text-earth-900 mb-4">Need Help?</h3>
                    <p className="text-gray-500 text-sm mb-4">
                        For any queries regarding the admission process, contact our helpline.
                    </p>
                    <div className="p-4 bg-stone-50 rounded-lg border border-stone-200 mb-4">
                        <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Helpline Number</p>
                        <p className="text-xl font-bold text-turmeric-600">+91 7652 987654</p>
                    </div>
                    <a href="/contact" className="block w-full text-center py-2.5 bg-earth-900 text-white rounded-lg font-bold hover:bg-black transition-colors">
                        Contact Support
                    </a>
                </div>

                {/* Login CTA */}
                <div className="bg-gradient-to-br from-turmeric-500 to-turmeric-600 p-8 rounded-xl shadow-lg text-white text-center">
                    <h3 className="font-serif font-bold text-2xl mb-2">Already Applied?</h3>
                    <p className="text-turmeric-100 text-sm mb-6">Login to the portal to check the status of your application.</p>
                    <a href="/student-portal" className="inline-block bg-white text-turmeric-600 px-8 py-3 rounded-full font-bold shadow-md hover:shadow-xl hover:scale-105 transition-all">
                        Student Login
                    </a>
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionNotification;
