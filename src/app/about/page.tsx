"use client";

import React from 'react';
import { FaCheckCircle, FaAward, FaCogs, FaUsers, FaShieldAlt } from 'react-icons/fa';

export default function About() {
  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900/30">
      
      {/* Title Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="15, 15" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display">About the Company</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            A trusted Indian manufacturer powering international electronic systems with precision-engineered magnetics.
          </p>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-md text-xs font-bold uppercase tracking-wider">
              Company Profile
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white">
              Leading the Industry in Custom Magnetics
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Founded with a commitment to engineering excellence, Supreme Systems Solution is a leading developer of high-frequency transformers, power inductors, and specialized coils. Our factory is situated in the industrial hub of Gurugram, India, enabling smooth distribution networks nationwide and globally.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              We specialize in custom solutions. We know that standard, off-the-shelf magnetic components often lead to thermal leakage and poor EMI compliance. Therefore, our design experts collaborate with clients from the CAD stage onwards, matching exact power topologies, mechanical restrictions, and electrical specifications.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex gap-2">
                <FaCheckCircle className="text-accent mt-1 shrink-0" size={16} />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">100% Quality Verification</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-accent mt-1 shrink-0" size={16} />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Advanced CNC winding routes</span>
              </div>
              <div className="flex gap-2">
                <FaCheckCircle className="text-accent mt-1 shrink-0" size={16} />
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">Export Grade Packaging</span>
              </div>
            </div>
          </div>

          {/* Core Values Panel */}
          <div className="bg-slate-50 dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-6 shadow-sm">
            <h3 className="text-lg font-bold font-display text-primary dark:text-primary-light uppercase tracking-wider">Our Core Values</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FaAward size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Quality First</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Insisting quality be designed into every single product and service we offer.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <FaCogs size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Continuous Innovation</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Proactive approach to continuous design improvements and core tuning.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FaUsers size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Customer Satisfaction</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Matching product excellence with a lifelong dedication to our customers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <FaShieldAlt size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">Absolute Reliability</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Consistent quality and dependable delivery timelines for every order.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-slate-100/50 dark:bg-slate-900/40 border-y border-slate-200/50 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-xl mx-auto mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-md text-xs font-bold uppercase tracking-wider">
              Our Philosophy
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white mt-2">Vision & Commitment</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
              <h3 className="text-lg font-bold font-display text-primary dark:text-primary-light">Goal & Reputation</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                Supreme Systems goal is to become most preferred source of high quality magnetic components. By ensuring consistent quality in production, dependable response in delivery, and fair competitive prices, we intend to match our reputation for product excellence with an equal commitment to customer satisfaction.
              </p>
            </div>
            
            <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
              <h3 className="text-lg font-bold font-display text-accent">Customer Focus</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                The future of our success, growth and prosperity is and always will be our customers. Their need will receive continuous attention from our entire team of employees at every level.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
              <h3 className="text-lg font-bold font-display text-accent">Exceeding Expectations</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                We are committed to meeting or exceeding customers’ expectations with every order. Our dedication to superior results is built on a foundation of teamwork.
              </p>
            </div>

            <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3 shadow-sm">
              <h3 className="text-lg font-bold font-display text-primary dark:text-primary-light">Quality Philosophy</h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                Management’s philosophy insists quality be designed into every product and service we offer. Supreme Systems is dedicated to a proactive approach to continuous improvement.
              </p>
          </div>
        </div>
      </div>
    </section>



    </div>
  );
}
