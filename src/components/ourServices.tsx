"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Heart, Compass, Film, Sparkles } from 'lucide-react';

const services = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "From pre-wedding shoots to final details, we capture your wedding with artistic precision, blending traditional & contemporary styles."
  },
  {
    icon: Sparkles,
    title: "Candid Photography",
    description: "Specializing in unfiltered emotional snapshots—tears of joy, spontaneous laughter, and subtle expressions of love."
  },
  {
    icon: Heart,
    title: "Pre-Wedding Shoots",
    description: "Beautifully choreographed cinematic couples portrait sessions in dream backdrops before you take your final vows."
  },
  {
    icon: Compass,
    title: "Destination Weddings",
    description: "Available to travel globally to capture your grand wedding celebrations in exotic luxury venues around the world."
  },
  {
    icon: Film,
    title: "Cinematic Films",
    description: "High-definition narrative movies that encapsulate all the audio, music, emotions, and scale of your wedding day."
  }
];

export default function OurServices() {
  return (
    <section className="bg-neutral-950 py-24 sm:py-36 border-t border-neutral-900 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[10px] sm:text-xs tracking-[0.3em] font-bold text-[#c5a880] uppercase block mb-3"
          >
            What We Do
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-light text-white font-serif-luxury tracking-wide"
          >
            Our Premium Services
          </motion.h2>
        </div>

        {/* Modular Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            // Make the 4th and 5th items span dynamically for balance
            const spanClass = index === 3 ? "lg:col-span-1" : index === 4 ? "lg:col-span-2" : "lg:col-span-1";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`${spanClass} h-full`}
              >
                <div 
                  className="bg-neutral-900/40 border border-white/5 p-8 rounded-3xl h-full flex flex-col justify-between group transition-all duration-500 hover:border-[#c5a880]/30 hover:bg-neutral-900/60 shadow-lg hover:shadow-2xl relative overflow-hidden"
                >
                  {/* Glowing hover backdrop */}
                  <div className="absolute -inset-px bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />
                  
                  <div>
                    {/* Icon Badge */}
                    <div className="h-14 w-14 rounded-2xl bg-[#c5a880]/10 border border-[#c5a880]/20 flex items-center justify-center mb-8 text-[#c5a880] group-hover:bg-[#c5a880] group-hover:text-neutral-950 transition-all duration-500">
                      <IconComponent className="h-6 w-6 stroke-[1.5]" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-light text-white font-serif-luxury tracking-wide mb-4">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-400 leading-relaxed font-light mb-8 max-w-xl">
                      {service.description}
                    </p>
                  </div>

                  {/* View Details Link */}
                  <div className="flex items-center gap-2.5 text-[10px] uppercase tracking-[0.2em] font-bold text-[#c5a880] group-hover:text-[#e5d5c0] transition-colors duration-300 select-none">
                    View Gallery
                    <span className="transform group-hover:translate-x-1.5 transition-transform duration-300 text-xs">&#10230;</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}