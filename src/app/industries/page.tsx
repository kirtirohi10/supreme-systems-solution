"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaIndustry, FaChargingStation, FaTv, FaBroadcastTower, FaBolt, FaHeartbeat } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

const industriesData = [
  {
    icon: <FaTv size={24} />,
    name: 'SMPS & Power Supplies',
    tagline: 'Chargers, Laptop Adapters, LED Drivers',
    desc: 'Our high-frequency switching transformers and input common-mode chokes are built into adapters and power supplies globally. We ensure low EMI profiles and compact packaging to meet tight height constraints.',
    benefits: ['Low leakage inductance (<1%)', 'Safety standards compliance', 'High efficiency up to 99%']
  },
  {
    icon: <FaChargingStation size={24} />,
    name: 'Automotive & EV Charging',
    tagline: 'DC-DC Converters, ADAS, BMS',
    desc: 'Automotive modules demand magnetic components that function stably in high thermal ranges and resist mechanical vibrations. We construct shielded inductors and power conversion coils conforming to rigorous standards.',
    benefits: ['High thermal stability (-40°C to +155°C)', 'Soft saturation under high currents', 'AEC-Q200 testing standards compliance']
  },
  {
    icon: <FaBolt size={24} />,
    name: 'Energy Metering & Monitoring',
    tagline: 'Smart Meters, Protection Relays',
    desc: 'Precision turns-ratio matching and high linear stability are necessary for exact energy monitoring. We supply highly accurate current transformers (CTs) to major meter manufacturers.',
    benefits: ['Accuracy class 0.1, 0.2, 0.5', 'High galvanic isolation (up to 4kV)', 'Toroidal shapes resisting external fields']
  },
  {
    icon: <FaBroadcastTower size={24} />,
    name: 'Telecom & Signal Systems',
    tagline: 'Base Stations, Network Filters',
    desc: 'Signal lines and telecommunication circuits require high-performance chokes to filter out background electromagnetic interference without degrading the signal integrity.',
    benefits: ['Wideband EMI attenuation', 'High saturation currents', 'Compact surface mount designs']
  },
  {
    icon: <FaHeartbeat size={24} />,
    name: 'Medical & Aerospace Magnetics',
    tagline: 'Custom solenoid coils, Diagnostic gear',
    desc: 'Highly critical components require custom winding geometries, premium insulation ratings, and comprehensive validation records. We develop bespoke coils and encapsulated transformers matching exact specs.',
    benefits: ['100% custom-wound specifications', 'Double insulation with high dielectric protection', 'Comprehensive burn-in lab logs']
  }
];

export default function Industries() {
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
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display">Industries We Serve</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Delivering high-reliability components to sectors where power efficiency and safety are non-negotiable.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {industriesData.map((ind, index) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-card border border-slate-200/60 dark:border-slate-800 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light flex items-center justify-center">
                  {ind.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">{ind.name}</h3>
                  <p className="text-xs text-accent font-semibold uppercase tracking-wider mt-0.5">{ind.tagline}</p>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                  {ind.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 mt-6 space-y-3">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Key Engineering Solutions:</p>
                <div className="flex flex-wrap gap-2">
                  {ind.benefits.map((ben) => (
                    <span key={ben} className="bg-slate-50 dark:bg-slate-900 text-slate-600 dark:text-slate-300 text-[11px] font-semibold px-2.5 py-1 rounded border border-slate-100 dark:border-slate-800">
                      {ben}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
          
          {/* Custom Inquire Box */}
          <div className="bg-slate-950 text-white border border-slate-800 p-8 rounded-2xl flex flex-col justify-between items-start space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <FaIndustry size={150} />
            </div>
            <div className="space-y-3 relative z-10">
              <h3 className="text-xl font-bold font-display text-white">Have a Niche Application?</h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                If your design does not fall within standard industries, our R&D engineers can review your parameters. We specialize in custom winding, custom bobbins, and potting encapsulation.
              </p>
            </div>
            <Link href="/contact" className="relative z-10">
              <Button variant="accent">
                Consult with an Expert
              </Button>
            </Link>
          </div>

        </div>

      </section>

    </div>
  );
}
