"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FaAngleRight, FaCogs, FaCheckCircle } from 'react-icons/fa';
import { services } from '@/data/services';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Services() {
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
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display">Our Engineering Services</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            From electromagnetic simulations to automatic winding lines, we support you through the product lifecycle.
          </p>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="space-y-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`flex flex-col lg:flex-row gap-8 items-center bg-white dark:bg-dark-card border border-slate-200/60 dark:border-slate-800 p-8 rounded-2xl shadow-sm ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              
              {/* Graphic Element */}
              <div className="w-full lg:w-1/3 aspect-[4/3] rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800/80 flex flex-col justify-between p-6 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-accent/5 pointer-events-none" />
                <div className="flex justify-between items-center text-primary dark:text-primary-light">
                  <FaCogs size={20} className="animate-spin" style={{ animationDuration: '10s' }} />
                  <span className="text-[10px] font-extrabold tracking-widest uppercase">Service Log: {service.id}</span>
                </div>
                <div className="text-center font-bold text-slate-800 dark:text-slate-200 py-4">
                  {service.title}
                </div>
                <div className="text-right text-[10px] text-slate-400 font-semibold uppercase">
                  Supreme Systems Solution
                </div>
              </div>

              {/* Text Description */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-slate-650 dark:text-slate-350 text-sm sm:text-base leading-relaxed">
                  {service.fullDesc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.features.map((feat) => (
                    <div key={feat} className="flex gap-2">
                      <FaCheckCircle className="text-accent shrink-0 mt-0.5" size={14} />
                      <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link href="/contact">
                    <Button variant="outline" size="sm">
                      Inquire about this capability <FaAngleRight className="ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </section>

    </div>
  );
}
