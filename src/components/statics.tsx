"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Map, Heart, Camera, Film } from 'lucide-react';
import Counter from './counter';

const stats = [
  {
    icon: Map,
    value: "20",
    label: "Cities Covered"
  },
  {
    icon: Heart,
    value: "800",
    label: "Happy Couples"
  },
  {
    icon: Camera,
    value: "50000",
    label: "Photos Captured"
  },
  {
    icon: Film,
    value: "500",
    label: "Films Produced"
  }
];

export const CompanyStatics = () => {
  return (
    <section className="relative py-24 sm:py-36 bg-[#0a0a0a] overflow-hidden border-t border-white/5">
      {/* Abstract premium glowing lights in background */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#c5a880]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-20 sm:mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs tracking-[0.3em] font-bold text-[#c5a880] uppercase block mb-3"
          >
            Our Legacy & Milestones
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-light text-white font-serif-luxury tracking-wide mb-6"
          >
            Milestones of Trust
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-sm sm:text-base font-light leading-relaxed max-w-2xl mx-auto"
          >
            We take pride in showcasing our accomplishments that reflect our dedication, passion, and artistic growth. Explore the highlights of our wedding storytelling journey!
          </motion.p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center justify-center p-8 bg-white/[0.02] border border-white/5 rounded-3xl hover:border-[#c5a880]/30 transition-all duration-500 group relative overflow-hidden"
              >
                {/* Micro-glow on hover */}
                <div className="absolute -inset-px bg-gradient-to-b from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />
                
                {/* Icon Badge */}
                <div className="h-14 w-14 rounded-2xl bg-[#c5a880]/5 border border-white/5 flex items-center justify-center mb-6 text-[#c5a880] group-hover:scale-110 transition-transform duration-500">
                  <IconComponent className="h-6 w-6 stroke-[1.2]" />
                </div>

                {/* Counter */}
                <div className="flex items-baseline text-4xl sm:text-5xl font-light text-white tracking-tight mb-3">
                  <Counter MaxNumber={stat.value} />
                  <span className="text-[#c5a880] ml-1 font-light">+</span>
                </div>

                {/* Label */}
                <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-[0.2em] font-bold text-center">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
