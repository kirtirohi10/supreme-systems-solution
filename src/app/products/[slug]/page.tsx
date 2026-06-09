import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FaArrowLeft, FaCheck, FaEnvelope, FaIndustry } from 'react-icons/fa';
import { products } from '@/data/products';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';

// Next.js 15 route params must be defined as a Promise of an object.
interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generates static paths for all products during builds
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function ProductDetails({ params }: PageProps) {
  const resolvedParams = await params;
  const product = products.find(p => p.slug === resolvedParams.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900/30">
      
      {/* Detail Header / Nav Bar */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Link href="/products" className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white transition-colors">
            <FaArrowLeft /> Back to Catalog
          </Link>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold font-display text-white">
                {product.name}
              </h1>
              <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
                {product.tagline}
              </p>
            </div>
            
            {/* Action buttons */}
            <div className="flex flex-wrap gap-3">
              <a href="#inquiry">
                <Button variant="accent" size="lg">
                  <FaEnvelope className="mr-2" /> Request Quote / Specifications
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Product Information Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Specs Table & Details (Left Column) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Long Description */}
          <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 shadow-sm">
            <div className="md:col-span-2 space-y-4">
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white flex items-center gap-2">
                <FaIndustry className="text-primary dark:text-primary-light" size={18} /> Description
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {product.description}
              </p>
            </div>
            <div className="flex items-center justify-center p-0 bg-transparent">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="max-h-36 max-w-full object-contain"
              />
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Technical Specifications</h3>
            <div className="overflow-hidden rounded-xl border border-slate-100 dark:border-slate-800">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-900/60 text-slate-500 uppercase tracking-wider font-semibold text-[10px] sm:text-xs">
                    <th className="px-4 py-3">Parameters</th>
                    <th className="px-4 py-3">Values / Range</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  {product.specifications.map((spec) => (
                    <tr key={spec.label} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/10">
                      <td className="px-4 py-3 font-semibold text-slate-950 dark:text-white">{spec.label}</td>
                      <td className="px-4 py-3">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Features and Applications Grids */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Features */}
            <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Key Features</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {product.features.map((feat) => (
                  <li key={feat} className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck size={10} />
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 leading-tight">{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Applications */}
            <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Target Applications</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {product.applications.map((app) => (
                  <li key={app} className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck size={10} />
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 leading-tight">{app}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Industries and Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            
            {/* Industries Served */}
            <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Industries Served</h3>
              <div className="flex flex-wrap gap-2 pt-1">
                {product.industries.map((ind) => (
                  <span 
                    key={ind} 
                    className="inline-flex items-center px-3 py-1.5 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-xs font-semibold"
                  >
                    {ind}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Benefits */}
            <div className="bg-white dark:bg-dark-card p-6 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
              <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Key Benefits</h3>
              <ul className="space-y-2.5 text-xs sm:text-sm">
                {product.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2.5 items-start">
                    <span className="w-5 h-5 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                      <FaCheck size={10} />
                    </span>
                    <span className="text-slate-600 dark:text-slate-400 leading-tight">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Customization Options */}
          <div className="bg-white dark:bg-dark-card p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-lg font-bold font-display text-slate-900 dark:text-white">Available Customization Options</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-2">
              As an OEM/ODM manufacturer based in India, we custom-engineer components to fit exact client constraints.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.customizations.map((cust, cIdx) => (
                <div 
                  key={cIdx} 
                  className="p-4 bg-slate-50 dark:bg-slate-900/40 rounded-xl border border-slate-100 dark:border-slate-800 text-xs text-slate-600 dark:text-slate-400 flex flex-col justify-between"
                >
                  <span className="font-bold text-slate-900 dark:text-white mb-1.5 block">Custom Option {cIdx + 1}</span>
                  <p className="leading-relaxed">{cust}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Dynamic Sidebar Inquiry Form (Right Column) */}
        <div id="inquiry" className="space-y-8 scroll-mt-24">
          <div className="bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-6">
            <div>
              <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white">Inquire about {product.name}</h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                Need specific dimensions, inductance ratios, or custom tooling? Fill out the specs form and our sales manager will reply with quotes.
              </p>
            </div>
            
            <form className="space-y-4">
              <Input
                label="Full Name"
                name="name"
                placeholder="Rahul Kumar"
                required
              />
              <Input
                label="Corporate Email"
                name="email"
                type="email"
                placeholder="rahul@company.com"
                required
              />
              <Input
                label="Company Name"
                name="company"
                placeholder="Acme Electronics Ltd"
                required
              />
              <Input
                label="Phone Number"
                name="phone"
                placeholder="+91 98765 43210"
                required
              />
              <TextArea
                label="Custom Requirements"
                name="message"
                defaultValue={`Hello, I would like to receive pricing for custom batches of ${product.name}. My core geometry is standard, but I need secondary turns ratio validation...`}
                rows={4}
                required
              />
              <Button type="submit" variant="accent" className="w-full justify-center">
                Send Request
              </Button>
            </form>
          </div>

          <div className="bg-slate-900 text-slate-300 p-6 rounded-2xl border border-slate-800 text-center space-y-4">
            <h4 className="font-bold text-white text-base font-display">Need Immediate Engineering Help?</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              If your SMPS transformer has saturation issues, contact our R&D desk directly in Haryana.
            </p>
            <a href="tel:+919811922446" className="block">
              <Button variant="secondary" className="w-full text-slate-900 bg-white">
                Call +91 9811922446
              </Button>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
