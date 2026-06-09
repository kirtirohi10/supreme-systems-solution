"use client";

/**
 * PillNav — Premium GSAP-powered pill-shaped navigation, adapted for Next.js.
 *
 * Key features:
 *  - Rising-circle background animation on hover (GSAP)
 *  - Text swap animation (old label scrolls up, new label rises in)
 *  - Rotating logo interaction
 *  - GSAP-animated mobile drawer (always rendered, works without a logo prop)
 *  - Theme-aware: accent circle color adapts via prop
 */

import React, { useCallback, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { Menu, X } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export type PillNavItem = {
  label: string;
  href: string;
  ariaLabel?: string;
};

export interface PillNavProps {
  /** Optional logo — a React node (icon) or an image URL string. */
  logo?: React.ReactNode | string;
  /** Alt text for logo images. */
  logoAlt?: string;
  /** Navigation link items. */
  items: PillNavItem[];
  /** Currently active href for highlighting. */
  activeHref?: string;
  /** Extra class names on the outer wrapper. */
  className?: string;
  /** GSAP easing function string. */
  ease?: string;
  /** Background color of the nav container / pill strip. */
  baseColor?: string;
  /** Resting background color of each pill. */
  pillColor?: string;
  /** Text color shown while a pill is hovered (hovered-label layer). */
  hoveredPillTextColor?: string;
  /** Resting text color for pills. */
  pillTextColor?: string;
  /** Color of the rising hover circle. Defaults to a complementary accent. */
  hoverCircleColor?: string;
  /** Whether to animate items in on first mount. */
  initialLoadAnimation?: boolean;
  /** Mobile-menu toggle callback. */
  onMobileMenuClick?: () => void;
}

// ─── Component ────────────────────────────────────────────────────────────────

export const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = 'Logo',
  items,
  activeHref,
  className = '',
  ease = 'power3.out',
  baseColor = '#0A3D91',
  pillColor = '#f8fafc',
  hoveredPillTextColor = '#ffffff',
  pillTextColor = '#0A3D91',
  hoverCircleColor,
  initialLoadAnimation = false,
  onMobileMenuClick,
}) => {
  // Resolved hover-circle color: if not provided, fall back to baseColor
  const resolvedCircleColor = hoverCircleColor ?? baseColor;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Refs
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs     = useRef<Array<gsap.core.Timeline | null>>([]);
  const tweenRefs  = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const navItemsRef  = useRef<HTMLDivElement | null>(null);
  const logoContainerRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef  = useRef<HTMLButtonElement | null>(null);

  // ── Build / rebuild GSAP timelines after each render ──────────────────────
  const buildTimelines = useCallback(() => {
    circleRefs.current.forEach((circle, i) => {
      if (!circle?.parentElement) return;

      const pill = circle.parentElement as HTMLElement;
      const { width: w, height: h } = pill.getBoundingClientRect();
      if (!w || !h) return;

      // Exact circle size so it just covers the pill rectangle
      const R      = ((w * w) / 4 + h * h) / (2 * h);
      const D      = Math.ceil(2 * R) + 2;
      const delta  = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width  = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`,
      });

      const label = pill.querySelector<HTMLElement>('.pill-label');
      const ghost = pill.querySelector<HTMLElement>('.pill-label-hover');

      if (label) gsap.set(label, { y: 0, clearProps: 'all' });
      if (ghost) gsap.set(ghost, { y: Math.ceil(h + 20), opacity: 0 });

      tlRefs.current[i]?.kill();
      const tl = gsap.timeline({ paused: true });

      tl.to(circle, { scale: 1.2, xPercent: -50, duration: 0.8, ease, overwrite: 'auto' }, 0);

      if (label) {
        tl.to(label, { y: -(h + 8), duration: 0.6, ease, overwrite: 'auto' }, 0);
      }
      if (ghost) {
        tl.to(ghost, { y: 0, opacity: 1, duration: 0.6, ease, overwrite: 'auto' }, 0);
      }

      tlRefs.current[i] = tl;
    });
  }, [ease]);

  useEffect(() => {
    buildTimelines();

    const onResize = () => buildTimelines();
    window.addEventListener('resize', onResize);
    if (document.fonts) {
      document.fonts.ready.then(buildTimelines).catch(() => {});
    }

    // Optional entrance animation
    if (initialLoadAnimation && navItemsRef.current) {
      const listItems = navItemsRef.current.querySelectorAll('li');
      gsap.set(listItems, { opacity: 0, x: -16 });
      gsap.to(listItems, {
        opacity: 1,
        x: 0,
        duration: 0.5,
        stagger: 0.04,
        ease: 'power2.out',
        delay: 0.1,
      });
    }

    return () => window.removeEventListener('resize', onResize);
  }, [items, buildTimelines, initialLoadAnimation]);

  // ── Hover handlers ────────────────────────────────────────────────────────
  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    tweenRefs.current[i]?.kill();
    tweenRefs.current[i] = tl.tweenTo(tl.duration(), { duration: 0.4, ease, overwrite: 'auto' });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    tweenRefs.current[i]?.kill();
    tweenRefs.current[i] = tl.tweenTo(0, { duration: 0.3, ease, overwrite: 'auto' });
  };

  const handleLogoHover = () => {
    const el = logoImgRef.current;
    if (!el) return;
    logoTweenRef.current?.kill();
    logoTweenRef.current = gsap.to(el, {
      rotate: 360,
      duration: 0.7,
      ease: 'elastic.out(1, 0.5)',
      overwrite: 'auto',
      onComplete: () => gsap.set(el, { rotate: 0 }),
    });
  };

  // ── Mobile menu toggle ────────────────────────────────────────────────────
  const toggleMobile = () => {
    const next = !isMobileMenuOpen;
    setIsMobileMenuOpen(next);
    const menu = mobileMenuRef.current;
    if (!menu) return;

    if (next) {
      gsap.set(menu, { display: 'block', opacity: 0, y: -16 });
      gsap.to(menu, { opacity: 1, y: 0, duration: 0.35, ease: 'power3.out' });
    } else {
      gsap.to(menu, {
        opacity: 0,
        y: -16,
        duration: 0.25,
        ease: 'power3.in',
        onComplete: () => gsap.set(menu, { display: 'none' }),
      });
    }
    onMobileMenuClick?.();
  };

  // ── Helpers ───────────────────────────────────────────────────────────────
  const isExternal = (href: string) =>
    /^(https?:\/\/|\/\/|mailto:|tel:|#)/.test(href);

  const renderLogo = () => {
    if (!logo) return null;
    if (typeof logo === 'string') {
      return (
        <img
          // @ts-expect-error — logoImgRef accepts any HTML element
          ref={logoImgRef}
          src={logo}
          alt={logoAlt}
          className="w-7 h-7 object-contain pointer-events-none"
        />
      );
    }
    return (
      <div
        // @ts-expect-error
        ref={logoImgRef}
        className="flex items-center justify-center pointer-events-none"
      >
        {logo}
      </div>
    );
  };

  // ── CSS custom-property bag ───────────────────────────────────────────────
  const cssVars = {
    '--pn-base':   baseColor,
    '--pn-pill':   pillColor,
    '--pn-text':   pillTextColor,
    '--pn-hover':  hoveredPillTextColor,
    '--pn-circle': resolvedCircleColor,
    '--pn-h':      '44px',
    '--pn-gap':    '5px',
    '--pn-px':     '18px',
  } as React.CSSProperties;

  const pillStyle: React.CSSProperties = {
    background: 'var(--pn-pill)',
    color: 'var(--pn-text)',
    paddingLeft: 'var(--pn-px)',
    paddingRight: 'var(--pn-px)',
  };

  const basePillCls =
    'relative overflow-hidden inline-flex items-center justify-center ' +
    'h-[calc(var(--pn-h)-8px)] self-center rounded-full box-border ' +
    'font-bold text-[11px] uppercase tracking-wider cursor-pointer hover:z-10 ' +
    'select-none no-underline';

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <div className={`relative w-full max-w-4xl mx-auto ${className}`} style={cssVars}>
      <nav
        className="flex items-center justify-between md:justify-center py-1 px-3 gap-3"
        aria-label="Primary navigation"
      >
        {/* ── Logo ──────────────────────────────────────────────── */}
        {logo && (
          <div
            ref={logoContainerRef}
            onMouseEnter={handleLogoHover}
            className="flex-shrink-0"
          >
            <Link
              href="/"
              className="flex items-center justify-center rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
              style={{
                width: 'var(--pn-h)',
                height: 'var(--pn-h)',
                background: 'var(--pn-base)',
                color: 'var(--pn-pill)',
              }}
            >
              {renderLogo()}
            </Link>
          </div>
        )}

        {/* ── Desktop pill strip ────────────────────────────────── */}
        <div
          ref={navItemsRef}
          className="hidden md:flex items-center rounded-full px-1"
          style={{ height: 'var(--pn-h)', background: 'var(--pn-base)', gap: 'var(--pn-gap)' }}
        >
          <ul role="menubar" className="list-none flex items-stretch m-0 p-0 h-full" style={{ gap: 'var(--pn-gap)' }}>
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              const PillInner = (
                <>
                  {/* Rising hover circle */}
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] pointer-events-none block"
                    style={{ background: 'var(--pn-circle)', willChange: 'transform' }}
                    aria-hidden="true"
                    ref={el => { circleRefs.current[i] = el; }}
                  />

                  {/* Text swap stack */}
                  <span className="label-stack relative inline-block leading-none z-[2] overflow-hidden py-[3px]">
                    {/* Resting label */}
                    <span className="pill-label relative z-[2] inline-block" style={{ willChange: 'transform' }}>
                      {item.label}
                    </span>
                    {/* Hovered (ghost) label */}
                    <span
                      className="pill-label-hover absolute left-0 top-[3px] z-[3] inline-block w-full text-center"
                      style={{ color: 'var(--pn-hover)', willChange: 'transform, opacity' }}
                      aria-hidden="true"
                    >
                      {item.label}
                    </span>
                  </span>

                  {/* Active dot */}
                  {isActive && (
                    <span
                      className="absolute left-1/2 bottom-[3px] -translate-x-1/2 w-1 h-1 rounded-full z-[4]"
                      style={{ background: 'var(--pn-base)' }}
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              return (
                <li key={item.href} role="none" className="flex items-center">
                  {isExternal(item.href) ? (
                    <a
                      role="menuitem"
                      href={item.href}
                      className={basePillCls}
                      style={pillStyle}
                      aria-label={item.ariaLabel ?? item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillInner}
                    </a>
                  ) : (
                    <Link
                      role="menuitem"
                      href={item.href}
                      className={basePillCls}
                      style={pillStyle}
                      aria-label={item.ariaLabel ?? item.label}
                      onMouseEnter={() => handleEnter(i)}
                      onMouseLeave={() => handleLeave(i)}
                    >
                      {PillInner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* ── Mobile hamburger ──────────────────────────────────── */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobile}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          className="md:hidden flex items-center justify-center rounded-full transition-transform active:scale-90"
          style={{
            width: 'var(--pn-h)',
            height: 'var(--pn-h)',
            background: 'var(--pn-base)',
            color: 'var(--pn-pill)',
          }}
        >
          {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </nav>

      {/* ── Mobile drawer ──────────────────────────────────────── */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-full left-0 right-0 mt-2 rounded-2xl overflow-hidden shadow-2xl z-[999]"
        style={{ background: 'var(--pn-base)', display: 'none' }}
      >
        <ul className="list-none m-0 p-2 flex flex-col gap-1">
          {items.map((item) => {
            const isActive = activeHref === item.href;
            const mobileCls = `block py-3 px-6 text-xs font-bold uppercase tracking-widest rounded-xl transition-all ${
              isActive ? 'opacity-100' : 'opacity-60 hover:opacity-90'
            }`;
            const mobileStyle: React.CSSProperties = {
              color: 'var(--pn-hover)',
              background: isActive ? 'rgba(255,255,255,0.12)' : 'transparent',
            };

            return (
              <li key={item.href}>
                {isExternal(item.href) ? (
                  <a href={item.href} className={mobileCls} style={mobileStyle} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={mobileCls} style={mobileStyle} onClick={() => setIsMobileMenuOpen(false)}>
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
