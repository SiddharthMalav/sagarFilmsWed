"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const Highlights = [
  {
    image: "/images/730A0138 copy_11zon.jpg",
    category: "Candid Moments",
    title: "Golden Hour Vows",
    spanClass: "lg:col-span-7",
    aspectRatio: "aspect-[4/3]",
    link: "/Candids"
  },
  {
    image: "/images/pre-wedding/730A4377 copy_11zon.jpg",
    category: "Pre-Wedding",
    title: "Journey to Forever",
    spanClass: "lg:col-span-5",
    aspectRatio: "aspect-[3/4]",
    link: "/Pre-Wedding"
  },
  {
    image: "/images/pre-wedding/a16_11zon (1).jpg",
    category: "Luxury Portraits",
    title: "Candid Charm",
    spanClass: "lg:col-span-6",
    aspectRatio: "aspect-[16/10]",
    link: "/Elegance-Studio"
  },
];

export default function WhatWeProvide() {
  return (
    <section className="bg-[#faf8f5] py-24 sm:py-36 border-t border-neutral-200/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Block with Staggered Fade-in */}
        <div className="max-w-3xl mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-[10px] sm:text-xs tracking-[0.3em] font-bold text-[#c5a880] uppercase block mb-3"
          >
            Portfolio Highlights
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-light text-[#0a0a0a] font-serif-luxury tracking-wide leading-tight"
          >
            Preserving the Poetry <br />of Your Celebrations
          </motion.h2>
        </div>

        {/* Asymmetrical Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {Highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 1.2, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`${item.spanClass} group cursor-pointer`}
              onClick={() => window.location.href = item.link}
            >
              {/* Image Frame with Zoom Overlay */}
              <div className={`overflow-hidden rounded-3xl bg-neutral-100 relative ${item.aspectRatio} border border-neutral-200/30 shadow-md group-hover:shadow-2xl transition-all duration-700`}>
                
                {/* Thin gold border alignment guides */}
                <div className="absolute inset-5 border border-[#c5a880]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 pointer-events-none scale-95 group-hover:scale-100" />
                
                <img 
                  src={item.image} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out" 
                  alt={item.title}
                />
                
                {/* Shadow Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-8" />
              </div>

              {/* Descriptions */}
              <div className="pt-6 flex justify-between items-baseline border-b border-neutral-200/60 pb-4">
                <div>
                  <span className="text-[10px] uppercase text-[#c5a880] tracking-[0.2em] font-bold block mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-light text-neutral-900 font-serif-luxury tracking-wide">
                    {item.title}
                  </h3>
                </div>
                <div className="h-8 w-8 rounded-full border border-neutral-200 group-hover:border-[#c5a880] group-hover:bg-[#c5a880]/10 flex items-center justify-center transition-all duration-300">
                  <span className="text-sm text-neutral-400 group-hover:text-[#c5a880] font-light transform group-hover:translate-x-0.5 transition-transform duration-300">
                    &#10230;
                  </span>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA block in the remaining 6-column slot on row 2 */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center py-12 lg:py-20 lg:pl-12 space-y-6"
          >
            <span className="text-[10px] uppercase text-[#c5a880] tracking-[0.2em] font-bold block">
              Behind the Lens
            </span>
            <p className="text-xl sm:text-2xl font-light text-neutral-800 font-serif-luxury tracking-wide leading-relaxed">
              We travel globally to capture honest, unscripted emotions and preserve them as visual legacies for generations.
            </p>
            <div className="pt-2">
              <Link
                href="/Elegance-Studio"
                className="btn-premium-light inline-block px-8 py-3.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold"
              >
                <span>Browse All Portfolios</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
