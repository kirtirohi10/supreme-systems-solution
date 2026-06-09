"use client";

import React, { useState } from 'react';
import { FaComments, FaTimes, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export const LiveChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean; time: string }>>([
    { text: "Welcome to Supreme Systems Solution support! How can we help you with our magnetic components or custom coils today?", isUser: false, time: "Just now" }
  ]);
  const [inputText, setInputText] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMessage = { text: inputText, isUser: true, time: "Just now" };
    setMessages(prev => [...prev, userMessage]);
    setInputText("");

    // Simulate reply
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          text: "Thank you for reaching out. A design engineer has been notified and will contact you via email shortly. Alternatively, you can reach us immediately at +91 9811922446.",
          isUser: false,
          time: "Just now"
        }
      ]);
    }, 1500);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 rounded-2xl shadow-2xl w-80 sm:w-96 h-[450px] flex flex-col overflow-hidden mb-4"
          >
            {/* Header */}
            <div className="bg-primary text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-green-400 rounded-full animate-ping" />
                <div>
                  <h4 className="font-bold text-sm font-display">Technical Support Desk</h4>
                  <p className="text-xs text-slate-200">Online | Average reply: 5 mins</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-slate-200 cursor-pointer"
              >
                <FaTimes size={18} />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-slate-50 dark:bg-slate-900/50">
              {messages.map((msg, index) => (
                <div 
                  key={index}
                  className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-xl px-4 py-2.5 text-xs sm:text-sm ${
                      msg.isUser 
                        ? 'bg-accent text-white rounded-tr-none' 
                        : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-100 dark:border-slate-700/50 rounded-tl-none'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-[10px] text-right mt-1 opacity-70">{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="p-3 border-t border-slate-200 dark:border-slate-800 flex gap-2 items-center bg-white dark:bg-dark-card">
              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                placeholder="Ask about custom specifications..."
                className="flex-1 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-full px-4 py-2 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-slate-800 dark:text-slate-100"
              />
              <button 
                type="submit"
                className="w-10 h-10 bg-primary hover:bg-primary-dark text-white rounded-full flex items-center justify-center focus:outline-none cursor-pointer"
              >
                <FaPaperPlane size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(prev => !prev)}
        className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-xl hover:bg-primary-dark transition-colors focus:outline-none focus:ring-4 focus:ring-primary/40 cursor-pointer"
        aria-label="Open support chat"
      >
        {isOpen ? <FaTimes size={22} /> : <FaComments size={24} />}
      </motion.button>
    </div>
  );
};
