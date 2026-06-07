"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

type TBanner = {
  src: string;
  title?: string;
  subtitle?: string;
}

export const Banner = ({ src, title, subtitle }: TBanner) => {
  return (
    <section className="relative h-[65vh] min-h-[420px] w-full overflow-hidden bg-neutral-950 flex items-center justify-center">
      {/* Premium dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-[#0a0a0a]/30 to-[#0a0a0a] z-10" />
      
      {/* Background image with kinetic zoom-out entry */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.65 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 h-full w-full select-none"
      >
        <Image 
          src={src} 
          fill
          sizes="100vw"
          priority
          className="object-cover object-center" 
          alt="Banner background" 
          quality={85}
        />
      </motion.div>

      {/* Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          {subtitle && (
            <div className="overflow-hidden">
              <motion.span 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[10px] sm:text-xs tracking-[0.4em] font-bold text-[#c5a880] uppercase block"
              >
                {subtitle}
              </motion.span>
            </div>
          )}
          
          {title && (
            <div className="overflow-hidden py-1">
              <motion.h1 
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="text-3xl sm:text-5xl md:text-6xl font-light text-white font-serif-luxury tracking-[0.15em] leading-tight uppercase"
              >
                {title}
              </motion.h1>
            </div>
          )}
          
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-16 h-[1.5px] bg-[#c5a880]/60 mx-auto mt-4" 
          />
        </div>
      </div>
    </section>
  );
}
