"use client";

/**
 * CardNav - A premium, expandable navigation component.
 * Features:
 * - GSAP-powered height transitions
 * - Card-based submenu reveals with staggered animations
 * - Mobile-responsive design
 * - Highly customizable colors and animations
 */

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ArrowUpRight, Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

// Isomorphic Layout Effect for Next.js SSR compatibility
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? React.useLayoutEffect : useEffect;

export type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo?: string;
  logoAlt?: string;
  items: CardNavItem[];
  className?: string;
  ease?: string;
  baseColor?: string;
  menuColor?: string;
  buttonBgColor?: string;
  buttonTextColor?: string;
  buttonText?: string;
}

export const CardNav: React.FC<CardNavProps> = ({
  logo = '/images/logo.png',
  logoAlt = 'Logo',
  items,
  className = '',
  ease = 'power3.out',
  baseColor = '', // Default empty to use Tailwind CSS variables
  menuColor = '',
  buttonBgColor = '',
  buttonTextColor = '',
  buttonText = 'Get Started'
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') setTheme('light');
    else setTheme('dark');
  };

  const calculateHeight = () => {
    const navEl = navRef.current;
    if (!navEl) return 260;
    
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    if (isMobile) {
      const contentEl = navEl.querySelector('.card-nav-content') as HTMLElement;
      if (contentEl) {
        const wasVisible = contentEl.style.visibility;
        const wasPosition = contentEl.style.position;
        const wasHeight = contentEl.style.height;
        
        contentEl.style.visibility = 'visible';
        contentEl.style.position = 'static';
        contentEl.style.height = 'auto';
        
        const topBar = 60;
        const padding = 16;
        const contentHeight = contentEl.scrollHeight;
        
        contentEl.style.visibility = wasVisible;
        contentEl.style.position = wasPosition;
        contentEl.style.height = wasHeight;
        
        return topBar + contentHeight + padding;
      }
    }
    return 280;
  };

  const createTimeline = () => {
    const navEl = navRef.current;
    if (!navEl) return null;

    gsap.set(navEl, { height: 60, overflow: 'hidden' });
    gsap.set(cardsRef.current, { y: 30, opacity: 0 });

    const tl = gsap.timeline({ paused: true });
    
    tl.to(navEl, {
      height: calculateHeight,
      duration: 0.5,
      ease: ease
    });

    tl.to(cardsRef.current, { 
      y: 0, 
      opacity: 1, 
      duration: 0.4, 
      ease: ease, 
      stagger: 0.08 
    }, '-=0.2');

    return tl;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = createTimeline();
      tlRef.current = tl;
    }, navRef);

    return () => ctx.revert();
  }, [ease, items]);

  useIsomorphicLayoutEffect(() => {
    const handleResize = () => {
      if (!tlRef.current) return;
      if (isExpanded) {
        const newHeight = calculateHeight();
        gsap.to(navRef.current, { height: newHeight, duration: 0.3 });
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isExpanded]);

  const toggleMenu = () => {
    const tl = tlRef.current;
    if (!tl) return;
    
    if (!isExpanded) {
      setIsExpanded(true);
      tl.play();
    } else {
      tl.reverse().eventCallback('onReverseComplete', () => setIsExpanded(false));
    }
  };

  const closeMenu = () => {
    const tl = tlRef.current;
    if (tl && isExpanded) {
      tl.reverse().eventCallback('onReverseComplete', () => setIsExpanded(false));
    }
  };

  const setCardRef = (i: number) => (el: HTMLDivElement | null) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className={`card-nav-container relative w-full max-w-[800px] mx-auto z-[99] ${className}`}>
      <nav
        ref={navRef}
        className={`card-nav ${isExpanded ? 'open' : ''} block h-[60px] p-0 rounded-2xl shadow-md relative overflow-hidden will-change-[height] border transition-colors duration-300 ${
          baseColor ? '' : 'bg-white/95 dark:bg-dark-card/95 border-slate-200/80 dark:border-slate-800/80 backdrop-blur-md'
        }`}
        style={baseColor ? { backgroundColor: baseColor } : undefined}
      >
        {/* Top Bar */}
        <div className="card-nav-top absolute inset-x-0 top-0 h-[60px] flex items-center justify-between px-4 z-[2]">
          <button
            onClick={toggleMenu}
            className={`group h-10 w-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer ${
              menuColor ? '' : 'text-slate-800 dark:text-slate-100'
            }`}
            aria-label={isExpanded ? 'Close menu' : 'Open menu'}
            style={menuColor ? { color: menuColor } : undefined}
          >
            {isExpanded ? (
              <X size={22} className="transition-transform duration-300 rotate-0 group-hover:rotate-90" />
            ) : (
              <Menu size={22} className="transition-transform duration-300" />
            )}
          </button>

          <Link href="/" onClick={closeMenu} className="logo-container absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center gap-2">
            <img src={logo} alt={logoAlt} className="h-9 w-auto object-contain dark:invert-0 invert" />
            <span className="font-extrabold tracking-wider text-xs md:text-sm text-primary dark:text-white uppercase leading-none font-display hidden sm:inline-block">
              Supreme Systems
            </span>
          </Link>

          <div className="flex items-center gap-1.5 md:gap-3">
            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={toggleTheme}
                className="h-10 w-10 flex items-center justify-center rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800/60 transition-colors cursor-pointer text-slate-500 hover:text-primary dark:text-slate-350 dark:hover:text-slate-100"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}

            <Link
              href="/contact"
              onClick={closeMenu}
              className={`card-nav-cta-button hidden md:inline-flex rounded-xl px-5 items-center justify-center h-10 font-bold text-xs uppercase tracking-wider transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${
                buttonBgColor ? '' : 'bg-primary dark:bg-primary-light hover:bg-primary-dark text-white shadow-sm'
              }`}
              style={{
                backgroundColor: buttonBgColor || undefined,
                color: buttonTextColor || undefined
              }}
            >
              {buttonText}
            </Link>
          </div>
        </div>

        {/* Content/Cards */}
        <div
          className={`card-nav-content absolute left-0 right-0 top-[60px] bottom-0 p-3 flex flex-col gap-3 justify-start z-[1] ${
            isExpanded ? 'visible pointer-events-auto' : 'invisible pointer-events-none'
          } md:flex-row md:items-stretch md:gap-4`}
          aria-hidden={!isExpanded}
        >
          {items.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              ref={setCardRef(idx)}
              className="nav-card relative flex flex-col gap-3 p-5 rounded-xl min-w-0 flex-[1_1_auto] md:flex-1 group/card transition-all duration-300 shadow-sm"
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <div className="nav-card-label font-extrabold tracking-tight text-lg md:text-xl font-display">
                {item.label}
              </div>
              <div className="nav-card-links mt-auto flex flex-col gap-2 pt-4">
                {item.links.map((lnk, i) => (
                  <Link
                    key={`${lnk.label}-${i}`}
                    className="nav-card-link inline-flex items-center gap-2 no-underline cursor-pointer transition-all duration-300 hover:translate-x-1.5 text-xs md:text-sm opacity-80 hover:opacity-100"
                    href={lnk.href}
                    aria-label={lnk.ariaLabel}
                    onClick={closeMenu}
                  >
                    <ArrowUpRight size={14} className="shrink-0" />
                    <span className="font-semibold">{lnk.label}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
