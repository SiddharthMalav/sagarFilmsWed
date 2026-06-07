"use client";
import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const HeroSlides = [
  {
    image: "/images/477A8760 (1)_11zon.jpg",
    title: "Capturing Love in its Purest Form",
    subtitle: "PREMIUM WEDDING PHOTOGRAPHY & CINEMATOGRAPHY",
    link: "/Candids"
  },
  {
    image: "/images/730A0580 copy_11zon.jpg",
    title: "Where Every Frame Tells a Story",
    subtitle: "CANDID & CINEMATIC EXPERIENCES",
    link: "/Wedding-Films"
  },
  {
    image: "/images/IMG_9403_11zon.jpg",
    title: "Elegance Captured in Every Detail",
    subtitle: "LUXURY BRIDAL & GROOM PORTRAITS",
    link: "/Elegance-Studio"
  },
  {
    image: "/images/IMG_9407_11zon.jpg",
    title: "Your Journey to Forever, Preserved",
    subtitle: "BATHED IN ROMANTIC GOLDEN LIGHT",
    link: "/Pre-Wedding"
  },
];

export default function CarouselComponent() {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % HeroSlides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + HeroSlides.length) % HeroSlides.length);
  }, []);

  // Autoplay
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[95vh] min-h-[600px] overflow-hidden bg-neutral-950">
      {/* Slide Images Container */}
      <AnimatePresence initial={false} mode="popLayout">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 w-full h-full"
        >
          {/* Heavy cinematic dark overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/30 to-neutral-950/40 z-10" />
          <img 
            src={HeroSlides[current].image} 
            className="object-cover w-full h-full select-none" 
            alt={`Slide ${current + 1}`} 
          />
        </motion.div>
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          
          {/* Subtitle with reveal */}
          <div className="overflow-hidden mb-4">
            <motion.span 
              key={`sub-${current}`}
              initial={{ y: 25, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-[10px] sm:text-xs tracking-[0.4em] font-bold text-[#c5a880] uppercase block"
            >
              {HeroSlides[current].subtitle}
            </motion.span>
          </div>

          {/* Title with animated character entry */}
          <div className="overflow-hidden mb-8 py-2">
            <motion.h1 
              key={`title-${current}`}
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-6xl md:text-7xl font-light text-white font-serif-luxury tracking-wide leading-[1.15]"
            >
              {HeroSlides[current].title}
            </motion.h1>
          </div>

          {/* Call to Action Button */}
          <motion.div 
            key={`btn-${current}`}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link 
              href={HeroSlides[current].link} 
              className="btn-premium-gold inline-block px-8 py-3.5 text-[10px] tracking-[0.25em] uppercase font-bold rounded-full cursor-pointer shadow-lg hover:shadow-[#c5a880]/10"
            >
              <span>Explore Portfolio</span>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Arrow Controls */}
      <div className="absolute inset-y-0 left-6 right-6 z-30 flex items-center justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          className="h-12 w-12 rounded-full border border-white/10 hover:border-white/40 bg-black/10 hover:bg-black/30 flex items-center justify-center text-white pointer-events-auto transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Previous slide"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>
        <button
          onClick={nextSlide}
          className="h-12 w-12 rounded-full border border-white/10 hover:border-white/40 bg-black/10 hover:bg-black/30 flex items-center justify-center text-white pointer-events-auto transition-all duration-300 focus:outline-none cursor-pointer"
          aria-label="Next slide"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Slide Indicators / Custom linear progress bars */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
        {HeroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > current ? 1 : -1);
              setCurrent(index);
            }}
            className="group relative h-1.5 w-12 rounded-full overflow-hidden bg-white/20 focus:outline-none cursor-pointer"
            aria-label={`Go to slide ${index + 1}`}
          >
            {current === index && (
              <motion.div
                layoutId="activeBar"
                className="absolute inset-0 bg-[#c5a880]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 6, ease: "linear" }}
                style={{ originX: 0 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Cinematic Mouse Scroll Cue */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center">
        <div className="w-[18px] h-[30px] rounded-full border border-white/20 flex justify-center p-1">
          <motion.div 
            animate={{ 
              y: [0, 8, 0],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-1.5 h-1.5 rounded-full bg-[#c5a880]"
          />
        </div>
      </div>
    </div>
  );
}
