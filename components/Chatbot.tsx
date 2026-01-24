import React, { useState, useRef, useEffect } from 'react';
import { MessagesSquare, X, Send, Bot, User, Sparkles, ChevronRight } from 'lucide-react';
import { useHideOnSections } from './hooks/useHideOnSections';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Namaste! I'm Medha Bot, your AI Assistant. How can I help you today? Ask me about admissions, exams, or courses.",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const { isHiddenAreaVisible } = useHideOnSections();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  useEffect(() => {
    if (isHiddenAreaVisible) setIsOpen(false);
  }, [isHiddenAreaVisible]);

  // Knowledge Base "AI" Logic
  const generateResponse = (query: string) => {
    const q = query.toLowerCase();

    if (q.includes('hello') || q.includes('hi')) return "Hello! Welcome to Pandit Shambhunath Shukla University. I'm Medha Bot. What would you like to know?";
    if (q.includes('admission') || q.includes('apply')) return "Admissions for the 2025-26 academic session are currently OPEN. You can apply online through the 'Admissions' tab on our website. Would you like the link?";
    if (q.includes('fee') || q.includes('cost')) return "The fee structure varies by course. Generally, B.A./B.Com starts around ₹5,000/yr and B.Tech/MBA is higher. Please visit the 'Fee Structure' page under Admissions for the PDF.";
    if (q.includes('exam') || q.includes('schedule')) return "Semester exams typically begin in May and December. The latest Entrance Exam for 2025 is scheduled for June 15th.";
    if (q.includes('course') || q.includes('program') || q.includes('subject')) return "We offer various undergraduate and postgraduate programs including B.A., B.Sc., B.Com, B.Tech, MBA, and Ph.D. Check the 'Academics' section for a full list.";
    if (q.includes('vc') || q.includes('chancellor')) return "Our Hon'ble Vice Chancellor leads with a vision of excellence. You can read his full message on the 'VC Message' page.";
    if (q.includes('contact') || q.includes('email') || q.includes('phone')) return "You can reach the university administration at info@psnsu.ac.in or call +91 7052 101 786.";
    if (q.includes('result')) return "Results are declared on the official university portal. Please keep your Enrollment Number handy.";
    if (q.includes('hostel')) return "Yes, we have separate hostels for boys and girls with modern amenities and 24/7 security.";

    return "I'm still learning! For specific queries, please contact the administration directly at info@psnsu.ac.in or try asking about 'admissions', 'exams', or 'courses'.";
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      text: input,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    // Simulate AI thinking delay
    setTimeout(() => {
      const responseText = generateResponse(userMsg.text);
      const botMsg: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') handleSend();
  };

  const quickReplies = ["Admissions 2025", "Exam Schedule", "Hostel Facilities", "Contact Us"];

  return (
    <>
      {/* Mobile stacked floating buttons (mobile only) */}
      <div className={`fixed right-6 bottom-6 md:hidden z-50 flex flex-col-reverse items-end gap-[5px] transition-all duration-500 ${isHiddenAreaVisible ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
        {/* Mobile Chat Toggle (small) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative z-50 shadow-2xl transition-all duration-300 flex items-center justify-center gap-2.5 h-7 px-3 rounded-full bg-blue-600 hover:bg-blue-700 active:scale-95 text-white border-2 border-white ${isOpen ? 'w-7 h-7 rounded-full bg-gray-800 rotate-90' : ''}`}
        >
          {isOpen ? <X className="w-5 h-5" /> : <MessagesSquare className="text-white w-5 h-5" />}
          {!isOpen && (
            <span className="font-bold text-[11px] tracking-wide whitespace-nowrap">Chat with us</span>
          )}
          {!isOpen && (
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
          )}
        </button>

        {/* Mobile Admission (small) */}
        <a
          href="/admission-notification"
          className="z-40 transition-all duration-300 group"
          style={{ animationDuration: '3s' }}
        >
          <div className="relative">
            <div className="bg-gradient-to-r from-violet-700 to-violet-600 text-white h-7 px-3 rounded-full shadow-[0_4px_20px_rgba(109,40,217,0.4)] border-2 border-white flex items-center gap-2 font-bold text-[11px] tracking-wide uppercase hover:scale-105 transition-transform">
              <span>Admission Open</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </div>
            {/* Alert Badge */}
            <div className="absolute -top-1 -left-2 bg-turmeric-400 text-earth-900 text-[8px] font-black px-1.5 py-0.5 rounded shadow-sm border border-white transform -rotate-12 animate-pulse">
              NOW!
            </div>
          </div>
        </a>
      </div>

      {/* Floating Admission Button for md+ - Hidden on mobile */}
      <a
        href="/admission-notification"
        className={`hidden md:block fixed md:bottom-20 right-6 z-40 transition-all duration-500 group ${isHiddenAreaVisible ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}`}
        style={{ animationDuration: '3s' }}
      >
        <div className="relative">
          <div className="bg-gradient-to-r from-violet-700 to-violet-600 text-white px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(109,40,217,0.4)] border-2 border-white flex items-center gap-1.5 font-bold text-xs tracking-wide uppercase hover:scale-105 transition-transform">
            <span>Admission Open</span>
            <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </div>
          {/* Alert Badge */}
          <div className="absolute -top-3 -left-2 bg-turmeric-400 text-earth-900 text-[9px] font-black px-1.5 py-0.5 rounded shadow-sm border border-white transform -rotate-12 animate-pulse">
            NOW!
          </div>
        </div>
      </a>

      {/* Floating Toggle Button for md+ - Hidden on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hidden md:flex fixed bottom-6 right-6 z-50 shadow-2xl transition-all duration-500 flex items-center justify-center gap-2
          ${isOpen
            ? 'w-11 h-11 rounded-full bg-gray-800 rotate-90'
            : 'h-11 px-5 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-105 active:scale-95'} 
          ${isHiddenAreaVisible ? 'opacity-0 translate-y-10 pointer-events-none' : 'opacity-100 translate-y-0'}
          text-white border-[3px] border-white`}
      >
        {isOpen ? <X size={20} /> : <MessagesSquare size={20} className="text-white" />}
        {!isOpen && (
          <span className="font-bold text-xs tracking-wide whitespace-nowrap font-sans">Chat with us</span>
        )}

        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 rounded-full border-2 border-white animate-pulse"></span>
        )}
      </button>

      {/* Chat Window - Also hidden when Contact Section is visible */}
      <div
        className={`fixed bottom-24 right-4 md:bottom-28 md:right-8 z-50 w-[90vw] md:w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col transition-all duration-300 origin-bottom-right transform
          ${isOpen && !isHiddenAreaVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'}
        `}
        style={{ height: 'min(600px, 70vh)' }}
      >
        {/* Header */}
        <div className="bg-earth-900 p-4 rounded-t-2xl flex items-center gap-3 shadow-md">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-turmeric-400 overflow-hidden p-0.5">
            <img src="/medha-ai.png" alt="Medha AI" className="w-full h-full object-cover rounded-full" />
          </div>
          <div>
            <h3 className="text-white font-serif font-bold tracking-wide text-lg">Medha Bot</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs text-gray-300">Online | AI Powered</span>
            </div>
          </div>
        </div>

        {/* Messages Buffer */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-stone-50 scrollbar-thin scrollbar-thumb-gray-300">
          {messages.map((msg) => (
            <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`
                        max-w-[80%] p-3.5 rounded-2xl text-sm leading-relaxed shadow-sm
                        ${msg.sender === 'user'
                  ? 'bg-turmeric-500 text-white rounded-br-none'
                  : 'bg-white text-gray-700 border border-gray-100 rounded-bl-none'}
                    `}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm flex gap-1">
                <span className="w-2 h-2 bg-turmeric-400 rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-turmeric-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-turmeric-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Quick Replies */}
        {messages.length < 3 && (
          <div className="px-4 py-2 bg-stone-50 flex gap-2 overflow-x-auto no-scrollbar">
            {quickReplies.map(reply => (
              <button
                key={reply}
                onClick={() => { setInput(reply); handleSend(); }}
                className="whitespace-nowrap px-3 py-1.5 bg-white border border-turmeric-200 rounded-full text-xs text-turmeric-700 hover:bg-turmeric-50 transition-colors shadow-sm"
              >
                {reply}
              </button>
            ))}
          </div>
        )}

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100 rounded-b-2xl">
          <div className="flex items-center gap-2 bg-stone-50 p-1.5 pr-2 rounded-full border border-gray-200 focus-within:border-turmeric-500 focus-within:ring-2 focus-within:ring-turmeric-100 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask Medha about admissions..."
              className="flex-1 bg-transparent border-none focus:outline-none text-sm px-3 text-gray-700 placeholder-gray-400"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-2.5 bg-earth-900 text-white rounded-full hover:bg-turmeric-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
            >
              <Send size={16} />
            </button>
          </div>
          <div className="text-center mt-2">
            <p className="text-[10px] text-gray-400">Powered by Medha AI • Answers are simulated</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Chatbot;
