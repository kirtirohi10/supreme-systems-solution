"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { FaSun, FaMoon, FaBars, FaTimes, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Products', href: '/products' },
  { name: 'Services', href: '/services' },
  { name: 'Industries', href: '/industries' },
  { name: 'Quality', href: '/quality' },
  { name: 'Contact', href: '/contact' }
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile nav when changing paths
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-100 dark:border-slate-900 bg-white/90 dark:bg-dark-bg/90 backdrop-blur-md transition-colors duration-200 shadow-sm">
      
      {/* Desktop Layout (lg and up) */}
      <div className="hidden lg:flex flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Brand Row */}
        <div className="relative flex items-center justify-center pt-6 pb-2">
          
          {/* Centered Brand & Logo */}
          <Link href="/" className="flex items-center gap-4 group">
            <img 
              src="/images/logo.png" 
              alt="Supreme Systems Solution Logo" 
              className="h-20 w-20 object-contain dark:invert-0 invert transition-transform duration-300 group-hover:scale-105"
            />
            <span className="font-black text-[40px] tracking-wide text-primary dark:text-white leading-none font-display uppercase">
              SUPREME SYSTEMS SOLUTION
            </span>
          </Link>

          {/* Right Actions */}
          <div className="absolute right-0 flex items-center gap-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2.5 text-slate-500 hover:text-primary dark:text-slate-300 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle Search"
              >
                <FaSearch size={16} />
              </button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    className="absolute right-0 mt-2 w-64 p-2 bg-white dark:bg-dark-card border border-slate-200/80 dark:border-slate-800/80 rounded-lg shadow-xl"
                  >
                    <form action="/products" method="GET" className="flex gap-2">
                      <input
                        name="q"
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="flex-1 px-3 py-1.5 text-xs bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-md focus:outline-none focus:ring-1 focus:ring-primary text-slate-800 dark:text-slate-100"
                      />
                      <button type="submit" className="px-3 py-1.5 bg-primary text-white text-xs font-semibold rounded-md hover:bg-primary-dark cursor-pointer">
                        Go
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2.5 text-slate-500 hover:text-primary dark:text-slate-300 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'dark' ? <FaSun size={16} /> : <FaMoon size={16} />}
              </button>
            )}

            {/* Quote Button */}
            <Link href="/contact" className="inline-flex items-center justify-center px-4 py-2 text-xs font-bold bg-accent hover:bg-accent-dark text-white rounded-lg transition-colors shadow-sm focus:outline-none">
              Get Quote
            </Link>
          </div>
        </div>

        {/* Bottom Navigation Row */}
        <div className="flex justify-center pb-4 pt-1">
          <nav className="flex items-center space-x-6 text-sm font-semibold">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-md transition-colors relative ${
                    isActive 
                      ? 'text-primary dark:text-primary-light' 
                      : 'text-slate-600 hover:text-primary dark:text-slate-300 dark:hover:text-slate-100'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicatorDesktop"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Mobile & Tablet Layout (less than lg) */}
      <div className="lg:hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between relative">
        {/* Centered Brand & Logo on Mobile */}
        <div className="w-full flex items-center justify-center px-8">
          <Link href="/" className="flex items-center gap-3 group text-center">
            <img 
              src="/images/logo.png" 
              alt="Supreme Systems Solution Logo" 
              className="h-12 w-12 object-contain dark:invert-0 invert" 
            />
            <span className="font-black text-base sm:text-2xl tracking-wide text-primary dark:text-white uppercase leading-none font-display">
              SUPREME SYSTEMS SOLUTION
            </span>
          </Link>
        </div>

        {/* Absolute Right Controls */}
        <div className="absolute right-4 flex items-center gap-1.5">
          {/* Theme Toggle */}
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-1.5 text-slate-500 hover:text-primary dark:text-slate-300 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
              aria-label="Toggle Dark Mode"
            >
              {theme === 'dark' ? <FaSun size={15} /> : <FaMoon size={15} />}
            </button>
          )}

          {/* Mobile hamburger menu */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 text-slate-650 hover:text-primary dark:text-slate-300 dark:hover:text-slate-100 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {isOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-slate-200/80 dark:border-slate-850 bg-white dark:bg-dark-bg"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                      isActive 
                        ? 'bg-primary/5 text-primary dark:bg-primary-light/10 dark:text-primary-light' 
                        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800/50 dark:hover:text-slate-100'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-3">
                <Link 
                  href="/contact"
                  className="w-full flex items-center justify-center px-4 py-3 bg-accent hover:bg-accent-dark text-white rounded-lg font-bold text-sm shadow-md transition-colors"
                >
                  Request Fast Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
