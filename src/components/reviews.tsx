"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    rating: 5,
    name: "Rhea & Manish",
    date: "Jan 2025",
    description: "Sagar Films did an outstanding job at our wedding! They were professional, fun, and made sure every single moment was captured beautifully. We couldn't be happier with the cinematic results."
  },
  {
    rating: 5,
    name: "Sara & Amit",
    date: "Jan 2025",
    description: "The team at Sagar Films exceeded all expectations. From our romantic pre-wedding shoot to the final wedding video, every single frame was captured with such care, storytelling, and creativity."
  },
  {
    rating: 5,
    name: "Ananya & Arjun",
    date: "Aug 2024",
    description: "We are absolutely in love with the wedding film they created. The cinematography is stunning and really tells the story of our day. The team went above and beyond to preserve our beautiful memories."
  },
  {
    rating: 5,
    name: "Priya & Ravi",
    date: "Jun 2024",
    description: "Exceptional service! From the first consultation to album delivery, everything was seamless. The photos are pure fine-art and they made us feel comfortable. Recommended Kota photographers!"
  }
];

// Double the items for seamless infinite scrolling loop
const marqueeItems = [...testimonials, ...testimonials];

export const Reviews = () => {
  return (
    <section className="bg-[#0a0a0a] py-24 sm:py-36 border-t border-white/5 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-20">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs tracking-[0.3em] font-bold text-[#c5a880] uppercase block mb-3"
          >
            Testimonials
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-light text-white font-serif-luxury tracking-wide"
          >
            Love Notes From Couples
          </motion.h2>
        </div>
      </div>

      {/* Infinite Horizontal Marquee Container */}
      <div className="relative w-full flex items-center justify-start overflow-x-hidden py-4 mask-gradient">
        {/* Left & Right fading masks */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee gap-6">
          {marqueeItems.map((item, idx) => (
            <div
              key={idx}
              className="w-[320px] sm:w-[420px] bg-white/[0.02] border border-white/5 p-8 sm:p-10 rounded-3xl flex flex-col justify-between space-y-6 shrink-0 hover:border-[#c5a880]/40 transition-colors duration-500 glass-card-dark select-none"
            >
              {/* Rating and Date */}
              <div className="flex justify-between items-center">
                <div className="flex text-[#c5a880] gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current stroke-none" />
                  ))}
                </div>
                <div className="text-gray-500 text-[10px] tracking-widest uppercase font-mono">{item.date}</div>
              </div>

              {/* Description Quote */}
              <p className="text-gray-300 text-sm font-light leading-relaxed italic">
                &ldquo;{item.description}&rdquo;
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
                <div className="h-10 w-10 rounded-full border border-[#c5a880]/30 bg-neutral-800 flex items-center justify-center text-[#c5a880] text-xs font-serif-luxury">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-white uppercase">{item.name}</div>
                  <div className="text-[9px] uppercase text-[#c5a880] tracking-[0.2em] font-semibold mt-0.5">Happy Couple</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
