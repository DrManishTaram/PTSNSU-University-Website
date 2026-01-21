import React from 'react';
import { MapPin, Phone, Mail, Clock, Send, Globe, ArrowRight } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact-section" className="relative py-24 bg-gradient-to-b from-stone-50 via-white to-turmeric-50/30 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-turmeric-200/40 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-violet-200/30 rounded-full blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Subtle Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%231a1c20\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-to-r from-turmeric-500 to-turmeric-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full shadow-lg shadow-turmeric-500/20 mb-4">
            Contact the University
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 leading-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-turmeric-600 to-violet-600">Touch</span> With Us
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Whether you have a question about admissions, research, or campus life, our dedicated team is here to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
          
          {/* Contact Information - Left Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Address Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-turmeric-400 to-turmeric-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-turmeric-500/30 group-hover:scale-110 transition-transform">
                  <MapPin size={26} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-earth-900 mb-2">Campus Location</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Pandit S.N. Shukla University,<br />
                    Near Sarfa Dam Rd, Nawalpur,<br />
                    Shahdol, Madhya Pradesh 484001
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Info Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                  <Phone size={26} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-earth-900 mb-2">Contact Details</h3>
                  <div className="space-y-2 text-sm text-gray-500">
                    <p className="flex items-center gap-2 hover:text-earth-900 transition-colors cursor-pointer">
                      <Phone size={14} className="text-blue-500" /> +91 7652-240976
                    </p>
                    <p className="flex items-center gap-2 hover:text-earth-900 transition-colors cursor-pointer">
                      <Mail size={14} className="text-blue-500" /> info@psnsu.ac.in
                    </p>
                    <p className="flex items-center gap-2 hover:text-earth-900 transition-colors cursor-pointer">
                      <Globe size={14} className="text-blue-500" /> www.psnsu.ac.in
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timing Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-green-500/30 group-hover:scale-110 transition-transform">
                  <Clock size={26} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-earth-900 mb-2">Office Hours</h3>
                  <p className="text-gray-500 text-sm">
                    Mon - Sat: 10:00 AM - 05:00 PM <br />
                    Closed on Sundays & Public Holidays
                  </p>
                </div>
              </div>
            </div>

            {/* Map Preview */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-100 group">
              <div className="h-40 relative overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.7486712301998!2d81.45010068379764!3d23.288580252189004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3986f90055702bbd%3A0x183a5e16f32a79a8!2sPtsns%20university%20main%20campus%20shahdol!5e0!3m2!1sen!2sin!4v1768051688999!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="University Location Map"
                  className="grayscale group-hover:grayscale-0 transition-all duration-500 scale-105 group-hover:scale-100"
                ></iframe>
              </div>
              <a 
                href="https://maps.app.goo.gl/yWFEQMhW3fT7hAK28" 
                target="_blank" 
                className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-turmeric-600 hover:bg-turmeric-50 transition-colors"
              >
                View on Google Maps <ArrowRight size={16} />
              </a>
            </div>
          </div>

          {/* Contact Form - Right Column */}
          <div className="lg:col-span-3 bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl relative overflow-hidden border border-gray-100">
            {/* Decorative Corners */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-turmeric-100 to-transparent rounded-bl-[100px] -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-violet-100 to-transparent rounded-tr-[100px] -ml-8 -mb-8"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-earth-900 mb-2">Send us a Message</h3>
              <p className="text-gray-500 mb-8">Fill out the form below and we'll get back to you shortly.</p>
            
              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                      <label className="text-xs font-bold text-earth-800 uppercase tracking-wider">Your Name</label>
                      <input 
                          type="text" 
                          placeholder="Anukalp Dwivedi" 
                          className="w-full bg-gray-50/80 text-earth-900 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-turmeric-500 focus:bg-white focus:ring-4 focus:ring-turmeric-500/10 transition-all font-medium placeholder-gray-400"
                      />
                  </div>
                  <div className="space-y-2">
                      <label className="text-xs font-bold text-earth-800 uppercase tracking-wider">Phone Number</label>
                      <input 
                          type="tel" 
                          placeholder="+91 98765 43210" 
                          className="w-full bg-gray-50/80 text-earth-900 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-turmeric-500 focus:bg-white focus:ring-4 focus:ring-turmeric-500/10 transition-all font-medium placeholder-gray-400"
                      />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-earth-800 uppercase tracking-wider">Email Address</label>
                  <input 
                      type="email" 
                      placeholder="anukalp@example.com" 
                      className="w-full bg-gray-50/80 text-earth-900 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-turmeric-500 focus:bg-white focus:ring-4 focus:ring-turmeric-500/10 transition-all font-medium placeholder-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-earth-800 uppercase tracking-wider">Subject</label>
                  <select className="w-full bg-gray-50/80 text-earth-900 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-turmeric-500 focus:bg-white focus:ring-4 focus:ring-turmeric-500/10 transition-all font-medium appearance-none cursor-pointer">
                      <option>General Inquiry</option>
                      <option>Admissions</option>
                      <option>Examination</option>
                      <option>Research</option>
                      <option>Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-earth-800 uppercase tracking-wider">Message</label>
                  <textarea 
                      rows={4}
                      placeholder="How can we help you?" 
                      className="w-full bg-gray-50/80 text-earth-900 border border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-turmeric-500 focus:bg-white focus:ring-4 focus:ring-turmeric-500/10 transition-all font-medium resize-none placeholder-gray-400"
                  ></textarea>
                </div>

                <button className="w-full bg-gradient-to-r from-turmeric-600 via-turmeric-500 to-turmeric-600 hover:from-turmeric-700 hover:via-turmeric-600 hover:to-turmeric-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-turmeric-500/30 hover:shadow-xl hover:shadow-turmeric-500/40 hover:translate-y-[-2px] active:translate-y-0 transition-all flex items-center justify-center gap-2.5 text-base group">
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
