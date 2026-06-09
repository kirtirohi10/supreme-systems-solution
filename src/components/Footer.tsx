"use client";

import React from 'react';
import Link from 'next/link';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaFacebook, FaTwitter } from 'react-icons/fa';

export const Footer: React.FC = () => {

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* About/Logo Column */}
        <div className="space-y-4">
          <Link href="/" className="flex items-center gap-3 group">
            <img 
              src="/images/logo.png" 
              alt="Supreme Systems Solution Logo" 
              className="h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-black text-xl tracking-wide text-white leading-none font-display uppercase">
              SUPREME SYSTEMS SOLUTION
            </span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            Powering Innovation Through Precision Magnetics.
            <span className="block mt-2">
              Manufacturer of transformers, inductors, and custom coil solutions.
            </span>
          </p>
          <div className="flex gap-4 pt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" aria-label="Twitter">
              <FaTwitter size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6 font-display">Company</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link href="/" className="hover:text-accent hover:underline transition-all">Home</Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-accent hover:underline transition-all">About Us</Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-accent hover:underline transition-all">Products</Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-accent hover:underline transition-all">Services</Link>
            </li>
            <li>
              <Link href="/industries" className="hover:text-accent hover:underline transition-all">Industries</Link>
            </li>
            <li>
              <Link href="/quality" className="hover:text-accent hover:underline transition-all">Quality Assurance</Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent hover:underline transition-all">Contact Us</Link>
            </li>
          </ul>
        </div>

        {/* Products Column */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-6 font-display">Our Products</h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <Link href="/products/switching-transformers" className="hover:text-accent hover:underline transition-all">Switching Transformers</Link>
            </li>
            <li>
              <Link href="/products/power-inductors" className="hover:text-accent hover:underline transition-all">Power Inductors</Link>
            </li>
            <li>
              <Link href="/products/current-transformers" className="hover:text-accent hover:underline transition-all">Current Transformers</Link>
            </li>
            <li>
              <Link href="/products/common-mode-chokes" className="hover:text-accent hover:underline transition-all">Common Mode Chokes</Link>
            </li>
            <li>
              <Link href="/products/line-filters" className="hover:text-accent hover:underline transition-all">Line & Noise Filters</Link>
            </li>
            <li>
              <Link href="/products/ei-ui-transformers" className="hover:text-accent hover:underline transition-all">EI & UI Pin Transformers</Link>
            </li>
            <li>
              <Link href="/products/custom-coils-magnetics" className="hover:text-accent hover:underline transition-all">Custom Coils</Link>
            </li>
          </ul>
        </div>

        {/* Contact/Newsletter Column */}
        <div className="space-y-6">
          <div>
            <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4 font-display">Contact Info</h4>
            <ul className="space-y-3.5 text-xs sm:text-sm">
              <li className="flex items-start gap-2.5">
                <FaMapMarkerAlt className="text-accent mt-1 shrink-0" size={16} />
                <span className="leading-snug">
                  Khasra No. 7181 2220 Gali No.1, West Rajiv Nagar, Gurugram – 122001, Haryana, India
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <FaPhoneAlt className="text-accent shrink-0" size={14} />
                <a href="tel:+919811922446" className="hover:text-accent transition-colors">+91 9811922446</a>
              </li>
              <li className="flex items-center gap-2.5">
                <FaEnvelope className="text-accent shrink-0" size={14} />
                <a href="mailto:info.supremesystemssolution@gmail.com" className="hover:text-accent transition-colors truncate">
                  info.supremesystemssolution@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>
          &copy; {new Date().getFullYear()} Supreme Systems Solution. All Rights Reserved. Made in Gurugram, India.
        </p>
      </div>
    </footer>
  );
};
