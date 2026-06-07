"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Phone, Send, Check } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    service: 'Wedding Photography',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate API request
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        service: 'Wedding Photography',
        message: ''
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-36 bg-[#faf8f5] border-t border-neutral-200/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs tracking-[0.3em] font-bold text-[#c5a880] uppercase block mb-3"
          >
            Get In Touch
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-[#0a0a0a] font-serif-luxury tracking-wide mb-6"
          >
            Book Your Consultation
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-sm sm:text-base font-light leading-relaxed max-w-xl mx-auto"
          >
            Let us turn your special moments into eternal masterpieces. Drop us a message to discuss your wedding plans, custom packages, and dates.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Info Side (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-neutral-200/50 p-8 sm:p-10 rounded-3xl shadow-sm space-y-8">
              <h3 className="text-2xl font-light text-[#0a0a0a] font-serif-luxury tracking-wide border-b border-neutral-100 pb-4">
                Studio Details
              </h3>
              
              {/* Location */}
              <div className="flex gap-5 items-start group">
                <div className="h-11 w-11 rounded-2xl bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880] shrink-0 group-hover:bg-[#c5a880] group-hover:text-[#0a0a0a] transition-all duration-300">
                  <MapPin className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-800 mb-1">Our Location</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">H NO. 114 Laxman Vihar II,<br />Kunhadi, Kota</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-5 items-start group">
                <div className="h-11 w-11 rounded-2xl bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880] shrink-0 group-hover:bg-[#c5a880] group-hover:text-[#0a0a0a] transition-all duration-300">
                  <Clock className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-800 mb-1">Working Hours</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light">Monday to Saturday:<br />10.00 AM – 10.00 PM</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-5 items-start group">
                <div className="h-11 w-11 rounded-2xl bg-[#c5a880]/10 flex items-center justify-center text-[#c5a880] shrink-0 group-hover:bg-[#c5a880] group-hover:text-[#0a0a0a] transition-all duration-300">
                  <Phone className="h-5 w-5 stroke-[1.5]" />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.15em] text-gray-800 mb-1">Call / WhatsApp</h4>
                  <p className="text-gray-500 text-sm leading-relaxed font-light font-semibold">+91 79768 81511</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-200/50 p-8 sm:p-10 rounded-3xl shadow-sm relative min-h-[500px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="text-center py-12 space-y-6"
                  >
                    <div className="h-16 w-16 bg-[#c5a880]/10 rounded-full flex items-center justify-center mx-auto border border-[#c5a880]/30 text-[#c5a880] shadow-inner">
                      <Check className="h-6 w-6 stroke-[2]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-2xl font-light text-[#0a0a0a] font-serif-luxury tracking-wide">Request Received</h3>
                      <p className="text-gray-500 max-w-md mx-auto text-sm font-light leading-relaxed">
                        Thank you. We have registered your wedding inquiry details. Our team will contact you within 24 hours to schedule your design consultation.
                      </p>
                    </div>
                    <div>
                      <button 
                        onClick={() => setStatus('idle')}
                        className="btn-premium-light inline-block px-6 py-2.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold"
                      >
                        <span>Send another inquiry</span>
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-gray-700">Name *</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#faf8f5] border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880]/30 transition-all duration-300 font-light"
                          placeholder="Your full name"
                        />
                      </div>
                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-gray-700">Phone *</label>
                        <input 
                          type="tel" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full bg-[#faf8f5] border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880]/30 transition-all duration-300 font-light"
                          placeholder="Your contact number"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Email */}
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-gray-700">Email Address</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-[#faf8f5] border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880]/30 transition-all duration-300 font-light"
                          placeholder="yourname@domain.com"
                        />
                      </div>
                      {/* Event Date */}
                      <div className="space-y-2">
                        <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-gray-700">Wedding / Event Date</label>
                        <input 
                          type="date" 
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full bg-[#faf8f5] border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880]/30 transition-all duration-300 font-light text-gray-500"
                        />
                      </div>
                    </div>

                    {/* Service dropdown */}
                    <div className="space-y-2">
                      <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-gray-700">Service of Interest</label>
                      <div className="relative">
                        <select 
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-[#faf8f5] border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880]/30 transition-all duration-300 font-light text-gray-500 appearance-none"
                        >
                          <option value="Wedding Photography">Wedding Photography</option>
                          <option value="Candid Photography">Candid Photography</option>
                          <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                          <option value="Cinematography & Films">Cinematography & Films</option>
                          <option value="Elegance Studio Portraits">Elegance Studio Portraits</option>
                          <option value="Custom Complete Package">Custom Complete Package</option>
                        </select>
                        <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                          &#9662;
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="block text-[10px] uppercase tracking-[0.15em] font-bold text-gray-700">Tell Us About Your Vision</label>
                      <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-[#faf8f5] border border-neutral-200 rounded-2xl px-5 py-3.5 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880]/30 transition-all duration-300 font-light"
                        placeholder="Share details like venue, style preferences, or custom requirements..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button 
                      type="submit"
                      disabled={status === 'submitting'}
                      className="btn-premium-dark w-full px-6 py-4 rounded-2xl text-[10px] tracking-[0.25em] uppercase font-bold transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
                    >
                      {status === 'submitting' ? (
                        <>
                          <svg className="animate-spin h-4 w-4 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          <span>Sending inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Request A Quote</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;