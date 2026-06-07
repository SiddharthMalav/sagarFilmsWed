"use client"
import React, { useState } from 'react'

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
    <section id="contact" className="relative py-20 sm:py-28 bg-[#faf9f6] border-t border-neutral-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#c5a880] uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#121212] font-serif-luxury tracking-wide mb-4">
            Book Your Consultation
          </h2>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
            Let us turn your special moments into eternal masterpieces. Drop us a message to discuss your wedding plans, custom packages, and dates.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Info Side (5 Cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white border border-neutral-200/50 p-8 sm:p-10 rounded-2xl shadow-sm space-y-8">
              <h3 className="text-2xl font-normal text-[#121212] font-serif-luxury tracking-wide border-b border-neutral-100 pb-4">
                Studio Details
              </h3>
              
              {/* Office Section */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-[#c5a880]/10 flex items-center justify-center shrink-0">
                  <svg className="fill-[#c5a880]" height={18} width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-1">Our Location</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">H NO. 114 Laxman Vihar II,<br />Kunhadi, Kota</p>
                </div>
              </div>

              {/* Working Hours Section */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-[#c5a880]/10 flex items-center justify-center shrink-0">
                  <svg className="fill-[#c5a880]" height={18} width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-1">Working Hours</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">Monday to Saturday:<br />10.00 AM – 10.00 PM</p>
                </div>
              </div>

              {/* Quick Contacts */}
              <div className="flex gap-4 items-start">
                <div className="h-10 w-10 rounded-full bg-[#c5a880]/10 flex items-center justify-center shrink-0">
                  <svg className="fill-[#c5a880]" height={18} width={18} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-21.9L70 18.3C41.3 28.1 20.8 52.8 17 82.9c-8.9 70.9 9.3 147.2 46.3 214c37 66.8 95.3 122.9 163.9 155.8c66 31.6 141.6 44.5 210.8 35.6c29.1-3.7 53.1-23.5 62.1-51.3l20.4-62.9c6.1-18.7-3.1-39.1-21.2-47.2l-96.1-43c-16.7-7.5-36.4-3.2-48.4 10.7l-41.9 48.7c-50-28-91.8-68.5-119.9-116.9l48-41.2c13.7-11.8 18.2-30.7 11.2-47L164.9 24.6z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-800 mb-1">Call / WhatsApp</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">+91 79768 81511</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-neutral-200/50 p-8 sm:p-10 rounded-2xl shadow-sm">
              {status === 'success' ? (
                <div className="text-center py-12 space-y-4 animate-scale-in">
                  <div className="h-16 w-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-green-200">
                    <svg className="fill-green-600" height={24} width={24} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                      <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-normal text-gray-900 font-serif-luxury">Booking Request Received!</h3>
                  <p className="text-gray-600 max-w-md mx-auto text-sm">
                    Thank you so much. We have registered your wedding inquiry details. Our lead artist will reach out to you within 24 hours to schedule a consultation call.
                  </p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 inline-block text-xs uppercase tracking-widest text-[#c5a880] border border-[#c5a880]/30 hover:border-[#c5a880] px-6 py-2.5 rounded-lg transition-all duration-300 font-semibold cursor-pointer"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">Name *</label>
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    {/* Phone */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">Phone *</label>
                      <input 
                        type="tel" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-all duration-300"
                        placeholder="Your contact number"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">Email Address</label>
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-all duration-300"
                        placeholder="yourname@domain.com"
                      />
                    </div>
                    {/* Event Date */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">Wedding / Event Date</label>
                      <input 
                        type="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-all duration-300 text-gray-600"
                      />
                    </div>
                  </div>

                  {/* Service dropdown */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">Service of Interest</label>
                    <select 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-all duration-300 text-gray-600 appearance-none"
                    >
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Candid Photography">Candid Photography</option>
                      <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                      <option value="Cinematography & Films">Cinematography & Films</option>
                      <option value="Elegance Studio Portraits">Elegance Studio Portraits</option>
                      <option value="Custom Complete Package">Custom Complete Package</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-gray-700 mb-2">Tell Us About Your Vision</label>
                    <textarea 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#c5a880] focus:ring-1 focus:ring-[#c5a880] transition-all duration-300"
                      placeholder="Share details like venue, style preferences, or custom requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full bg-[#121212] hover:bg-[#c5a880] text-white hover:text-white px-6 py-4 rounded-xl text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 cursor-pointer disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending Booking Inquiry...
                      </>
                    ) : 'Request A Quote'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )  
}

export default ContactUs