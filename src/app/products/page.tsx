"use client";

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaAngleRight, FaIndustry } from 'react-icons/fa';
import { products, Product } from '@/data/products';
import { Button } from '@/components/ui/Button';

const categories = ['all', 'transformers', 'inductors', 'chokes', 'custom'] as const;

function ProductsCatalogContent() {
  const searchParams = useSearchParams();
  const queryParam = searchParams.get('q') || "";

  const [searchQuery, setSearchQuery] = useState(queryParam);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    setSearchQuery(queryParam);
  }, [queryParam]);

  useEffect(() => {
    let result = products;

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.tagline.toLowerCase().includes(q) || 
        p.description.toLowerCase().includes(q)
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    setFilteredProducts(result);
  }, [searchQuery, selectedCategory]);

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
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display">Our Magnetic Components</h1>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed">
            Industrial-grade magnetic solutions and power conversion components. Engineered for high-frequency operations, thermal efficiency, and complete EMI suppression. We manufacture Switching Transformers, Power Inductors, Current Transformers, and Common Mode Chokes custom-tailored to global compliance standards.
          </p>
        </div>
      </section>

      {/* Main Catalog Search & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        
        {/* Search & Tabs Row */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center bg-white dark:bg-dark-card p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          
          {/* Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg uppercase tracking-wider transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-primary text-white dark:bg-primary-light'
                    : 'text-slate-600 hover:bg-slate-200 bg-slate-100 dark:text-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary text-xs sm:text-sm"
            />
            <FaSearch className="absolute left-3.5 top-3.5 text-slate-400" size={14} />
          </div>

        </div>

        {/* Results Info */}
        <div className="flex justify-between items-center text-xs sm:text-sm text-slate-500">
          <p>Showing <span className="font-bold text-slate-800 dark:text-slate-200">{filteredProducts.length}</span> components</p>
          {(selectedCategory !== 'all' || searchQuery.trim()) && (
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="text-accent font-bold hover:underline cursor-pointer"
            >
              Clear filters
            </button>
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <motion.div
                  key={product.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="bg-white dark:bg-dark-card border border-slate-200/60 dark:border-slate-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
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
                    <div className="pt-2">
                      <ul className="grid grid-cols-2 gap-2 text-[11px] font-semibold text-slate-500 dark:text-slate-400">
                        {product.specifications.slice(0, 4).map((spec) => (
                          <li key={spec.label} className="bg-slate-50 dark:bg-slate-900/60 px-2.5 py-1.5 rounded border border-slate-100 dark:border-slate-800">
                            <span className="block text-slate-400 text-[9px] uppercase font-bold">{spec.label}</span>
                            <span className="text-slate-700 dark:text-slate-200 truncate block">{spec.value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-900/35 flex items-center justify-between">
                    <Link href={`/products/${product.slug}`} className="text-primary dark:text-primary-light font-bold text-xs sm:text-sm flex items-center gap-1 hover:text-accent dark:hover:text-accent transition-colors">
                      View full specs & Get Quote <FaAngleRight />
                    </Link>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-16 text-center bg-white dark:bg-dark-card rounded-2xl border border-slate-200 dark:border-slate-800">
                <p className="text-slate-500 text-sm">No components match your search. Contact us for custom configurations.</p>
                <Link href="/contact" className="inline-block mt-4">
                  <Button variant="outline">Request Custom Design</Button>
                </Link>
              </div>
            )}
          </AnimatePresence>
        </div>

      </section>

    </div>
  );
}

export default function ProductsCatalog() {
  return (
    <Suspense fallback={
      <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900/30 flex items-center justify-center py-20 text-sm text-slate-500">
        Loading product catalog specifications...
      </div>
    }>
      <ProductsCatalogContent />
    </Suspense>
  );
}
