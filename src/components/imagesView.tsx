"use client"
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

type TImagesView = {
  srcs: string[]
}

export const ImagesView = ({ srcs }: TImagesView) => {
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  // Close lightbox
  const closeLightbox = useCallback(() => {
    setActiveIdx(null);
  }, []);

  // Navigate next
  const showNext = useCallback(() => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx + 1) % srcs.length);
    }
  }, [activeIdx, srcs.length]);

  // Navigate prev
  const showPrev = useCallback(() => {
    if (activeIdx !== null) {
      setActiveIdx((activeIdx - 1 + srcs.length) % srcs.length);
    }
  }, [activeIdx, srcs.length]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeIdx === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx, closeLightbox, showNext, showPrev]);

  // Prevent background scroll when lightbox is active
  useEffect(() => {
    if (activeIdx !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeIdx]);

  return (
    <div className="w-full py-12">
      {/* Luxury Asymmetrical Masonry/Columns Photo Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-8 space-y-8">
        {srcs.map((src, index) => (
          <motion.div 
            key={index} 
            onClick={() => setActiveIdx(index)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.8, delay: (index % 4) * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="break-inside-avoid overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-200/40 shadow-sm hover:shadow-2xl hover:border-[#c5a880]/30 transition-all duration-700 cursor-pointer group relative"
          >
            {/* Elegant inner gold border frame on hover */}
            <div className="absolute inset-4 border border-[#c5a880]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 pointer-events-none scale-95 group-hover:scale-100" />
            
            {/* Editorial overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-8">
              <span className="text-[9px] uppercase text-[#c5a880] tracking-[0.2em] font-bold transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                Visual Artistry
              </span>
              <h4 className="text-white text-lg font-light font-serif-luxury tracking-wide mt-1 mb-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Sagar Films Gallery
              </h4>
              <div className="w-8 h-[1px] bg-[#c5a880] mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-150" />
              <span className="text-white/80 text-[10px] tracking-[0.2em] uppercase flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-200 font-semibold">
                Expand Image <Maximize2 className="h-3.5 w-3.5 text-[#c5a880]" />
              </span>
            </div>
            
            <Image 
              src={src} 
              alt={`Gallery Image ${index + 1}`}
              width={500}
              height={600}
              className="w-full h-auto object-cover rounded-3xl block group-hover:scale-105 group-hover:opacity-75 transition-all duration-700"
              quality={80}
              priority={index < 4}
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal with AnimatePresence */}
      <AnimatePresence>
        {activeIdx !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl"
          >
            {/* Close button top right */}
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/80 hover:text-white hover:rotate-90 transition-all duration-300 focus:outline-none p-3 z-50 cursor-pointer bg-white/5 rounded-full"
              aria-label="Close Gallery"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Left Arrow */}
            <button 
              onClick={showPrev}
              className="absolute left-6 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full h-14 w-14 flex items-center justify-center transition-colors duration-300 focus:outline-none z-50 cursor-pointer"
              aria-label="Previous Photo"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Right Arrow */}
            <button 
              onClick={showNext}
              className="absolute right-6 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full h-14 w-14 flex items-center justify-center transition-colors duration-300 focus:outline-none z-50 cursor-pointer"
              aria-label="Next Photo"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Photo Counter */}
            <div className="absolute bottom-6 text-white/60 text-xs tracking-[0.2em] font-mono z-50">
              {activeIdx + 1} / {srcs.length}
            </div>

            {/* Active Image container */}
            <motion.div 
              key={activeIdx}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.4 }}
              className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center"
            >
              <img 
                src={srcs[activeIdx]} 
                alt="Expanded Gallery View"
                className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl border border-white/10" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}