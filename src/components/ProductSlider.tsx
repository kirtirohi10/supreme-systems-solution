"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const showcaseImages = [
  '/images/showcase/showcase-1.jpg',
  '/images/showcase/showcase-2.jpg',
  '/images/showcase/showcase-3.jpg',
  '/images/showcase/showcase-4.jpg',
  '/images/showcase/showcase-5.png',
  '/images/showcase/showcase-6.jpg',
  '/images/showcase/showcase-7.jpg',
  '/images/showcase/showcase-8.jpg',
  '/images/showcase/showcase-9.jpg',
  '/images/showcase/showcase-10.jpg',
  '/images/showcase/showcase-11.jpg',
  '/images/showcase/showcase-12.jpg',
];

export const ProductSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev === showcaseImages.length - 1 ? 0 : prev + 1));
    }, 3000); // Transitions every 3 seconds automatically

    return () => clearTimer();
  }, [currentIndex]);

  return (
    <div className="w-full max-w-xl aspect-square flex items-center justify-center relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full h-full flex items-center justify-center"
        >
          <img 
            src={showcaseImages[currentIndex]} 
            alt="Product Showcase" 
            className="w-full h-full object-contain pointer-events-none rounded-2xl" 
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
