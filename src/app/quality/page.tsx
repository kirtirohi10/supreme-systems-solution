"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaAward, FaThermometerHalf, FaMicroscope, FaVial, FaHistory } from 'react-icons/fa';

const checkpoints = [
  { step: '01', title: 'Incoming Material Verification', desc: 'We audit copper wire insulation thickness, ferrite core permeabilities, and bobbin UL ratings before production.' },
  { step: '02', title: 'First Article Inspection', desc: 'Prior to running batch winders, our lab winds a first article sample, logging exact turns, DCR, and physical fits.' },
  { step: '03', title: 'In-Process Winding Verification', desc: 'Automatic winding machines monitor copper tension and wrap counts. Regular manual checkpoints prevent overlaps.' },
  { step: '04', title: 'Impregnation & Insulation', desc: 'Vacuum varnishing ensures that insulation resins fully penetrate coils, removing air pockets to prevent hum and corrosion.' },
  { step: '05', title: '100% Outgoing Testing', desc: 'Every transformer and choke undergoes final test loops (LCR check, High-pot, Impulse, turns-ratio) with registered test logs.' }
];

export default function QualityAssurance() {
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
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display">Quality Assurance & Testing</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Rigorous checking and calibration of magnetic parts. Our Gurugram plant delivers near-zero failure rates.
          </p>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-md text-xs font-bold uppercase tracking-wider">
            Quality First
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 dark:text-white leading-tight">
            Quality Management
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
            Our primary goal is customer satisfaction. Each member of the Supreme Systems team is responsible for ensuring that all customer requirements, expectations and needs are met. Every employee is involved and committed to pursue the principles of excellence. We achieve this by improving processes, methods and work environment to ensure each customer is receiving the highest quality product, the best possible delivery and competitive pricing.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex gap-2 text-slate-800 dark:text-slate-200">
              <FaCheckCircle className="text-accent mt-0.5 shrink-0" size={15} />
              <span className="text-sm font-semibold">100% Outgoing Testing</span>
            </div>
            <div className="flex gap-2 text-slate-800 dark:text-slate-200">
              <FaCheckCircle className="text-accent mt-0.5 shrink-0" size={15} />
              <span className="text-sm font-semibold">Traceable Batch Logs</span>
            </div>
          </div>
        </div>

        {/* Quality Lab Instruments Graphic */}
        <div className="bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-8 rounded-2xl space-y-6 shadow-sm">
          <h3 className="text-lg font-bold font-display text-primary dark:text-primary-light uppercase tracking-wider">Our QA Testing Lab</h3>
          <div className="space-y-4">
            
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <FaMicroscope size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">LCR Meters & Inductance Testing</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Precise measurement of inductance, leakage inductance, DC resistance (DCR), and quality factor (Q) at actual operating frequencies.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <FaVial size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">High-Voltage Dielectric Testing (Hi-Pot)</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Verifying insulation breakdown limits up to 5kV AC/DC to ensure robust user safety and electrical isolation.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                <FaThermometerHalf size={18} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">Thermal Burn-in & Aging Chambers</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Stress testing components under loaded current profiles at temperature limits to ensure long operational lifespan.
                </p>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* Manufacturing Checkpoints */}
      <section className="py-20 bg-white dark:bg-dark-bg border-t border-slate-200/50 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-accent/10 text-accent rounded-md text-xs font-bold uppercase tracking-wider">
              Manufacturing Checkpoints
            </div>
            <h2 className="text-3xl font-bold font-display text-slate-900 dark:text-white">Our 5-Step Quality Checkpoints</h2>
            <p className="text-slate-500 text-sm">Ensuring consistency and compliance at every production milestone.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {checkpoints.map((cp) => (
              <div 
                key={cp.step}
                className="bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-slate-800 p-6 rounded-xl space-y-3 shadow-sm"
              >
                <span className="block text-2xl font-extrabold font-display text-accent">{cp.step}</span>
                <h3 className="font-bold text-sm text-slate-900 dark:text-white font-display leading-tight">{cp.title}</h3>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{cp.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
