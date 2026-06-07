"use client"
import React from 'react';
import { motion } from 'framer-motion';

const points = [
  {
    num: "01",
    title: "Experienced Team",
    desc: "With years of documenting weddings, our photographers capture meaningful moments with technical perfection and artistic vision."
  },
  {
    num: "02",
    title: "Tailored Approach",
    desc: "Every wedding is different. We work closely with you to understand your aesthetic vision, catering customized packages for your special day."
  },
  {
    num: "03",
    title: "State-Of-The-Art Gear",
    desc: "We use high-end cinema cameras and professional lighting gear to ensure your photos and films are saved with high quality and color science."
  },
  {
    num: "04",
    title: "Passionate Storytellers",
    desc: "We don't just snap pictures; we curate visual legacy. We build emotional connections through imagery that lasts generations."
  }
];

export const WhyChooseUs = () => {
  return (
    <section className="bg-[#faf8f5] py-24 sm:py-36 border-t border-neutral-200/40 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Staggered Columns Masonry Image Grid (6 Cols) */}
          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4 items-start">
              
              {/* Column 1 */}
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden rounded-3xl border border-neutral-200/40 shadow-md group relative aspect-[3/4]"
                >
                  <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src="/images/IMG_9447_11zon.jpg" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block" 
                    alt="Wedding couple" 
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden rounded-3xl border border-neutral-200/40 shadow-md group relative aspect-square"
                >
                  <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src="/images/pre-wedding/GPK_7144 (1)_11zon.jpg" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block" 
                    alt="Couple portrait" 
                  />
                </motion.div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4 pt-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden rounded-3xl border border-neutral-200/40 shadow-md group relative aspect-square"
                >
                  <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src="/images/pre-wedding/0G6A9149d-1_11zon.jpg" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block" 
                    alt="Pre-wedding shoot" 
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden rounded-3xl border border-neutral-200/40 shadow-md group relative aspect-[3/4]"
                >
                  <div className="absolute inset-0 bg-neutral-900/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src="/images/pre-wedding/0I1A5644.JPG" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 block" 
                    alt="Scenic couple shoot" 
                  />
                </motion.div>
              </div>

            </div>
          </div>

          {/* Points List (6 Cols) */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] sm:text-xs tracking-[0.3em] font-bold text-[#c5a880] uppercase block"
              >
                Why Sagar Films
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a0a0a] font-serif-luxury tracking-wide leading-tight"
              >
                Creating Art From Your <br />Unrepeatable Love Story
              </motion.h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
              {points.map((pt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="bg-white p-8 border border-neutral-200/50 rounded-3xl shadow-sm hover:border-[#c5a880]/30 transition-all duration-300 group hover:-translate-y-1 relative"
                >
                  <div className="absolute top-6 right-6 text-3xl font-light font-serif-luxury text-[#c5a880]/20 group-hover:text-[#c5a880]/40 transition-colors duration-300">
                    {pt.num}
                  </div>
                  <h3 className="text-lg font-semibold text-[#0a0a0a] mb-3 group-hover:text-[#c5a880] transition-colors duration-300">
                    {pt.title}
                  </h3>
                  <p className="text-gray-500 text-xs sm:text-sm leading-relaxed font-light">
                    {pt.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
