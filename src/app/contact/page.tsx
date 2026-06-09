"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaClock, FaCalendarAlt } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { TextArea } from '@/components/ui/TextArea';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name) tempErrors.name = "Full name is required";
    if (!formData.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Invalid email format";
    }
    if (!formData.phone) tempErrors.phone = "Phone number is required";
    if (!formData.company) tempErrors.company = "Company name is required";
    if (!formData.message) tempErrors.message = "Message details are required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
      });
    } catch {
      // Ignore
    } finally {
      setIsSubmitting(false);
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Supreme Systems Solution",
    "image": "https://www.supremesystemssolution.com/images/logo.png",
    "@id": "https://www.supremesystemssolution.com",
    "url": "https://www.supremesystemssolution.com",
    "telephone": "+919811922446",
    "email": "info.supremesystemssolution@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Khasra No. 7181 2220 Gali No.1, West Rajiv Nagar, Opp. Chugg Egg Store",
      "addressLocality": "Gurugram",
      "postalCode": "122001",
      "addressRegion": "Haryana",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.4502598,
      "longitude": 77.0142823
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <div className="flex-1 w-full bg-slate-50 dark:bg-slate-900/30">
      
      {/* Schema Injection */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      {/* Title Header */}
      <section className="bg-slate-900 text-white py-16 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <rect width="100%" height="100%" fill="none" stroke="#ffffff" strokeWidth="2" strokeDasharray="15, 15" />
          </svg>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold font-display">Contact Our Engineering Desk</h1>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Get in touch with our design engineers in Haryana, India. We are ready to review your schematics.
          </p>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Columns - Contact Cards & Map (7 Cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Call */}
            <div className="bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <FaPhoneAlt size={16} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white font-display text-sm">Call Engineering Desk</h3>
              <div className="flex flex-col text-slate-655 dark:text-slate-400 text-xs sm:text-sm">
                <a href="tel:+919811922446" className="hover:text-accent font-semibold transition-colors">+91 9811922446</a>
              </div>
            </div>

            {/* Email */}
            <div className="bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary dark:bg-primary-light/10 dark:text-primary-light flex items-center justify-center shrink-0">
                <FaEnvelope size={16} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white font-display text-sm">Email Support</h3>
              <a href="mailto:info.supremesystemssolution@gmail.com" className="text-slate-650 hover:text-accent dark:text-slate-400 text-xs sm:text-sm block truncate font-semibold">
                info.supremesystemssolution@gmail.com
              </a>
            </div>

            {/* Address */}
            <div className="bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-3 sm:col-span-2">
              <div className="w-10 h-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center shrink-0">
                <FaMapMarkerAlt size={16} />
              </div>
              <h3 className="font-bold text-slate-900 dark:text-white font-display text-sm">Plant & Factory Location</h3>
              <p className="text-slate-650 dark:text-slate-400 text-xs sm:text-sm leading-relaxed">
                Khasra No. 7181 2220 Gali No.1, West Rajiv Nagar, Opp. Chugg Egg Store, Gurugram – 122001, Haryana, India
              </p>
            </div>

            {/* Hours */}
            <div className="bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm space-y-3 sm:col-span-2">
              <div className="flex gap-4">
                <span className="flex items-center gap-1.5 text-xs text-slate-450 font-semibold"><FaCalendarAlt /> Monday - Saturday</span>
                <span className="flex items-center gap-1.5 text-xs text-slate-455 font-semibold"><FaClock /> 9:00 AM - 6:00 PM</span>
              </div>
            </div>

          </div>

          {/* Google Maps Frame */}
          <div className="w-full aspect-[16/10] rounded-2xl bg-slate-100 dark:bg-dark-card border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm relative">
            <iframe
              title="Supreme Systems Solution Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.9702220304664!2d77.01428237617502!3d28.450259875765793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19e0cf55d045%3A0xe5cd8b65287f3b89!2sRajiv%20Nagar%2C%20Gurugram%2C%20Haryana%20122001!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              className="w-full h-full border-0 absolute inset-0 filter dark:invert dark:grayscale"
              allowFullScreen={false}
              loading="lazy"
            />
          </div>

        </div>

        {/* Right Columns - Form Panel (5 Cols) */}
        <div className="lg:col-span-5 bg-white dark:bg-dark-card border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-sm">
          <h3 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-2">Send Message</h3>
          <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm mb-6 leading-relaxed">
            Fill out this quick form. Our design and compliance engineers will verify details and reach back to you.
          </p>

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12 space-y-4"
            >
              <div className="w-16 h-16 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                <FaCheckCircle size={36} />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white font-display">Inquiry Sent Successfully!</h4>
              <p className="text-slate-500 dark:text-slate-405 text-xs sm:text-sm max-w-sm mx-auto">
                Thank you for contacting Supreme Systems Solution. Our sales and engineering desk will review your message and reach back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                label="Full Name"
                name="name"
                placeholder="Rahul Kumar"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                required
              />
              <Input
                label="Business Email"
                name="email"
                type="email"
                placeholder="rahul@company.com"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                required
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input
                  label="Phone / Mobile"
                  name="phone"
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                  required
                />
                <Input
                  label="Company Name"
                  name="company"
                  placeholder="Acme Power Electronics"
                  value={formData.company}
                  onChange={handleChange}
                  error={errors.company}
                  required
                />
              </div>
              <TextArea
                label="Message / Specifications"
                name="message"
                placeholder="Details of your power supply, core types, or custom coil counts..."
                rows={4}
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                required
              />
              <Button 
                type="submit" 
                variant="primary" 
                className="w-full justify-center" 
                isLoading={isSubmitting}
              >
                Send Message
              </Button>
            </form>
          )}
        </div>

      </section>

    </div>
  );
}
