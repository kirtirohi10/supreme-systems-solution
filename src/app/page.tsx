"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  FaCogs, FaShieldAlt, FaAward, FaUsers, FaLeaf, 
  FaAngleRight, FaPlay, FaIndustry, FaCheckCircle, 
  FaPhoneAlt, FaEnvelope, FaMapMarkerAlt 
} from 'react-icons/fa';
import { MdOutlinePrecisionManufacturing, MdOutlineScience } from 'react-icons/md';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';
import { products } from '@/data/products';
import { ProductSlider } from '@/components/ProductSlider';

export default function Home() {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryData.name || !inquiryData.email || !inquiryData.phone || !inquiryData.message) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSuccess(true);
    setInquiryData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInquiryData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="flex-1 w-full overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden py-20">
        
        {/* Animated Background Mesh */}
        <div className="absolute inset-0 opacity-30 dark:opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.15" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            {/* Animated glowing nodes */}
            <circle cx="20%" cy="30%" r="2" fill="#FF7A00" className="animate-ping" style={{ animationDuration: '3s' }} />
            <circle cx="80%" cy="40%" r="3" fill="#0A3D91" className="animate-ping" style={{ animationDuration: '4s' }} />
            <circle cx="50%" cy="70%" r="2.5" fill="#FF7A00" className="animate-ping" style={{ animationDuration: '2.5s' }} />
          </svg>
        </div>

        {/* Diagonal Light Beam */}
        <div className="absolute -top-1/2 -left-1/4 w-[150%] h-[150%] bg-gradient-to-tr from-primary/10 via-transparent to-accent/5 rotate-12 pointer-events-none" />

        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Hero Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display leading-[1.15] text-center md:text-left">
              Powering Innovation <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-light to-accent">
                Through Precision Magnetics
              </span>
            </h1>

            <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl text-center md:text-left">
              Supreme Systems Solution designs and manufactures high-frequency switching transformers, power inductors, common mode chokes, and custom coils engineered for world-class efficiency.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
              <Link href="/products">
                <Button variant="accent" size="lg" className="shadow-lg glow-accent">
                  Explore Catalog <FaAngleRight className="ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="secondary" size="lg">
                  Request Custom Quote
                </Button>
              </Link>
            </div>
          </motion.div>

          {/* Hero Slideshow Display */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center md:justify-end w-full"
          >
            <ProductSlider />
          </motion.div>
        </div>
      </section>

      {/* 2. STATS COUNTER */}
      <section className="bg-primary text-white py-12 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-r border-white/10 last:border-0">
              <span className="block text-3xl sm:text-4xl font-extrabold font-display text-accent">25+</span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-slate-300 font-bold mt-1 block">Years of Experience</span>
            </div>
            <div className="p-4 border-r border-white/10 last:border-0">
              <span className="block text-3xl sm:text-4xl font-extrabold font-display text-accent">10M+</span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-slate-300 font-bold mt-1 block">Coils Wound</span>
            </div>
            <div className="p-4 border-r border-white/10 last:border-0">
              <span className="block text-3xl sm:text-4xl font-extrabold font-display text-accent">500+</span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-slate-300 font-bold mt-1 block">Global Clients</span>
            </div>
            <div className="p-4">
              <span className="block text-3xl sm:text-4xl font-extrabold font-display text-accent">100%</span>
              <span className="text-xs sm:text-sm uppercase tracking-wider text-slate-300 font-bold mt-1 block">Quality Audited</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. COMPANY INTRODUCTION */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-md text-xs font-bold uppercase tracking-wider">
              About Us
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white leading-tight">
              A Global Standard In <br />
              High-Frequency Magnetic Design
            </h2>
            <p className="text-slate-650 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Based in Gurugram, India, Supreme Systems Solution specializes in designing and manufacturing high-quality magnetic components. We deliver reliable, efficient, and cost-effective electromagnetic solutions tailored for complex modern electronic systems.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              From switching power supply transformers to noise-filtering common mode chokes, our focus is quality first. We serve major global clients in power electronics, automotive control systems, smart metering, and industrial electronics.
            </p>
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800" />
            <div className="pt-2">
              <Link href="/about">
                <Button variant="outline">Learn More About Us</Button>
              </Link>
            </div>
          </div>

          {/* Right Image (Factory Floor / Winding Machine) */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl border border-slate-200 dark:border-slate-800 shadow-lg relative overflow-hidden group">
              <img 
                src="/images/factory-winding-machine.png" 
                alt="Automated High-Precision Coil Winding Machine" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />
              
              <div className="absolute top-6 left-6 right-6 flex justify-between items-center z-10">
                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-900/60 backdrop-blur-md rounded-lg text-xs font-bold uppercase tracking-wider text-accent-light">
                  <FaCogs className="animate-spin text-accent" style={{ animationDuration: '8s' }} />
                  <span>Manufacturing Facility</span>
                </div>
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-lg" />
              </div>

              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="flex justify-between items-center text-xs text-slate-300">
                  <span>Location: Gurugram, India</span>
                  <span className="font-bold text-white bg-accent/90 px-2.5 py-0.5 rounded-full">99.98% Acceptance Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PRODUCT SHOWCASE */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-md text-xs font-bold uppercase tracking-wider">
              Component Catalog
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              Magnetic Solutions We Manufacture
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Explore our core product lines engineered to meet demanding power requirements, suppress noise, and provide galvanic isolation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <motion.div
                key={product.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-dark-card border border-slate-200/60 dark:border-slate-850 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="p-6 space-y-4">
                  {/* Product Image */}
                  <div className="w-full h-48 mb-4 flex items-center justify-center p-0">
                    <img 
                      src={product.imageUrl} 
                      alt={product.name} 
                      className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {product.name}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400 pt-2">
                    {product.features.slice(0, 3).map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/35 flex items-center justify-between">
                  <Link href={`/products/${product.slug}`} className="text-primary dark:text-primary-light font-bold text-xs sm:text-sm flex items-center gap-1.5 hover:text-accent dark:hover:text-accent transition-colors">
                    View Specifications <FaAngleRight />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/products">
              <Button variant="primary" size="lg">
                View Full Catalog With Search
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* 5. WHY CHOOSE US & CORE VALUES */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-md text-xs font-bold uppercase tracking-wider">
              Why Partner With Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              Engineered For Maximum Reliability
            </h2>
            <p className="text-slate-660 dark:text-slate-400 text-sm sm:text-base">
              Supreme Systems Solution is committed to providing customer satisfaction through high production quality and absolute design compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Quality First */}
            <div className="p-6 bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-slate-800 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <FaAward size={20} />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Quality First</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Our ISO 9001 compliance ensures that each transformer and inductor is strictly winding-verified, insulation-tested, and certified.
              </p>
            </div>

            {/* Innovation & R&D */}
            <div className="p-6 bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-slate-800 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light flex items-center justify-center">
                <MdOutlineScience size={22} />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Continuous Innovation</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We actively research new high-frequency core materials and automated wire winding technologies to stay at the cutting edge of power magnetics.
              </p>
            </div>

            {/* Customer Satisfaction */}
            <div className="p-6 bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-slate-800 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <FaUsers size={18} />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Global Customer Support</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We collaborate directly with your development engineers from the initial CAD schematic to prototype validation and final mass production delivery.
              </p>
            </div>

            {/* Absolute Reliability */}
            <div className="p-6 bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-slate-800 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light flex items-center justify-center">
                <FaShieldAlt size={18} />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Industrial Reliability</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Designed to operate under extreme temperature profiles (-40°C to +125°C) and harsh mechanical environments without inductance degradation.
              </p>
            </div>

            {/* Sustainability */}
            <div className="p-6 bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-slate-800 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                <FaLeaf size={18} />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Eco-Sustainability</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                All of our products are 100% RoHS & REACH compliant, using lead-free soldering and eco-certified insulation tapes and resins.
              </p>
            </div>

            {/* Custom Engineering */}
            <div className="p-6 bg-slate-50 dark:bg-dark-card border border-slate-200/60 dark:border-slate-800 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300">
              <div className="w-10 h-10 rounded-lg bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light flex items-center justify-center">
                <FaCogs size={18} />
              </div>
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Custom Engineering</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We develop customized configurations from core modifications to complex multi-tapped bobbin pin layouts based on client needs.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. MANUFACTURING PROCESS TIMELINE */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-accent/10 text-accent rounded-md text-xs font-bold uppercase tracking-wider">
              Our Workflow
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              Manufacturing Process Timeline
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              A comprehensive lifecycle representation showing how we execute projects from conceptual design to verified mass production.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            
            {/* Step 1 */}
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold font-display text-lg shadow-md z-10 relative">
                1
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">1. Custom Design</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We review client specifications, simulate electromagnetics, select the optimal core and wire gauge, and generate CAD layouts.
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold font-display text-lg shadow-md z-10 relative">
                2
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">2. Prototyping</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We wind physical prototype samples quickly (7-10 days), perform laboratory characterizations, and ship samples for board-level checks.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold font-display text-lg shadow-md z-10 relative">
                3
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">3. Mass Production</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Upon prototype approval, we setup automated winding routes, scale component sourcing, and launch automated mass assembly.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative space-y-4">
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-bold font-display text-lg shadow-md z-10 relative">
                4
              </div>
              <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">4. Quality Testing</h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Every batch undergoes 100% testing (turns ratio, LCR inductance, high-voltage dielectric insulation, DCR) before dispatch.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES SERVED */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-md text-xs font-bold uppercase tracking-wider">
              Applications
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
              Industries We Power Globally
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Our high-precision magnetic components support critical power conversion and monitoring architectures in multiple high-tech domains.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="p-6 bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-slate-800 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="font-bold text-sm">SMPS</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Power Supplies</h4>
              <p className="text-[11px] text-slate-400">LED drivers, laptop adapters, chargers</p>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-slate-800 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <span className="font-bold text-sm">AUTO</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Automotive</h4>
              <p className="text-[11px] text-slate-400">EV chargers, ADAS systems, regulators</p>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-slate-800 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="font-bold text-sm">IND</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Industrial Control</h4>
              <p className="text-[11px] text-slate-400">PLC controllers, sensors, motor drives</p>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-slate-800 rounded-2xl text-center space-y-3">
              <div className="w-12 h-12 mx-auto rounded-full bg-accent/10 text-accent flex items-center justify-center">
                <span className="font-bold text-sm">TEL</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Telecom</h4>
              <p className="text-[11px] text-slate-400">Base stations, filtering switches</p>
            </div>

            <div className="p-6 bg-slate-50 dark:bg-dark-card border border-slate-100 dark:border-slate-800 rounded-2xl text-center space-y-3 col-span-2 md:col-span-1">
              <div className="w-12 h-12 mx-auto rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <span className="font-bold text-sm">ENY</span>
              </div>
              <h4 className="font-bold text-sm text-slate-900 dark:text-white">Energy Meters</h4>
              <p className="text-[11px] text-slate-400">Smart grid monitors, current meters</p>
            </div>
          </div>

          <div className="text-center mt-10">
            <Link href="/industries" className="text-primary dark:text-primary-light hover:text-accent font-bold text-sm flex items-center justify-center gap-1">
              Learn More About Applications <FaAngleRight />
            </Link>
          </div>
        </div>
      </section>



      {/* 9. CONTACT & LEAD GENERATION FORM */}
      <section className="py-20 bg-white dark:bg-dark-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Contact Card */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-primary/10 dark:bg-primary-light/10 text-primary dark:text-primary-light rounded-md text-xs font-bold uppercase tracking-wider">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 dark:text-white">
                Request Specifications or a Quick Quote
              </h2>
              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                Have custom parameters or a technical question? Contact our engineering team in Gurugram, India. We are ready to help you prototype and mass manufacture your magnetic parts.
              </p>
            </div>

            <ul className="space-y-5 text-sm sm:text-base">
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FaMapMarkerAlt size={18} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-sm">Factory Address</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5">
                    Khasra No. 7181 2220 Gali No.1, West Rajiv Nagar, Opp. Chugg Egg Store, Gurugram – 122001, Haryana, India
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                  <FaPhoneAlt size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-sm">Phone Support</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mt-0.5">
                    +91 9811922446
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
                  <FaEnvelope size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-950 dark:text-white text-sm">Email Address</h4>
                  <a href="mailto:info.supremesystemssolution@gmail.com" className="text-slate-500 hover:text-accent dark:text-slate-400 text-xs sm:text-sm mt-0.5 block truncate">
                    info.supremesystemssolution@gmail.com
                  </a>
                </div>
              </li>
            </ul>

            {/* Google Map Placeholder Wrapper */}
            <div className="w-full aspect-[16/9] rounded-2xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm relative">
              <iframe
                title="Supreme Systems Solution Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9702220304664!2d77.01428237617502!3d28.450259875765793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e0cf55d045%3A0xe5cd8b65287f3b89!2sRajiv%20Nagar%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 absolute inset-0 filter dark:invert dark:grayscale"
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Lead Capture Box */}
          <div className="bg-slate-50 dark:bg-dark-card border border-slate-250/50 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
            <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-2">Send an Inquiry</h3>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
              Fill out this quick form. Our magnetics engineers will contact you with specific data sheets and component options.
            </p>

            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 space-y-4"
              >
                <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                  <FaCheckCircle size={36} />
                </div>
                <h4 className="text-xl font-bold text-slate-900 dark:text-white">Form Submitted Successfully!</h4>
                <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm max-w-sm mx-auto">
                  Thank you for reaching out. We will respond with technical parameters and initial quotes shortly.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  label="Contact Name"
                  name="name"
                  placeholder="e.g. Rahul Sharma"
                  value={inquiryData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Business Email"
                  name="email"
                  type="email"
                  placeholder="e.g. rahul@company.com"
                  value={inquiryData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Phone Number"
                  name="phone"
                  placeholder="e.g. +91 9876543210"
                  value={inquiryData.phone}
                  onChange={handleChange}
                  required
                />
                <TextArea
                  label="Message / Requirements"
                  name="message"
                  placeholder="Share frequency, current, and core style preferences..."
                  rows={4}
                  value={inquiryData.message}
                  onChange={handleChange}
                  required
                />
                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full justify-center" 
                  isLoading={isSubmitting}
                >
                  Send Inquiry Now
                </Button>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* 10. CALL TO ACTION */}
      <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="10, 10" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-bold font-display">
            Need Custom Wound Coils or Transformers?
          </h2>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Our design desk is ready to collaborate. We create rapid prototypes tailored to your PCB footprint and voltage constraints.
          </p>
          <div className="flex justify-center gap-4 pt-2">
            <Link href="/contact">
              <Button variant="accent" size="lg" className="shadow-lg glow-accent">
                Request Specifications <FaAngleRight className="ml-2" />
              </Button>
            </Link>
            <a href="tel:+919811922446">
              <Button variant="secondary" size="lg">
                Call Engineering Desk
              </Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
