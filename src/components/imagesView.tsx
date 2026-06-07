"use client"
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

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
    <div className="w-full py-8">
      {/* Luxury Portrait Grid with Symmetrical Alignments */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {srcs.map((src, index) => (
          <div 
            key={index} 
            onClick={() => setActiveIdx(index)}
            className="overflow-hidden rounded-2xl bg-neutral-900 border border-neutral-200/50 shadow-md hover:shadow-2xl hover:border-[#c5a880]/30 transition-all duration-700 cursor-pointer group relative aspect-[4/5]"
          >
            {/* Elegant inner gold border frame on hover */}
            <div className="absolute inset-4 border border-[#c5a880]/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 pointer-events-none scale-95 group-hover:scale-100" />
            
            {/* Luxury Editorial Overlay Info (Slide-up effect) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 flex flex-col justify-end p-8">
              <span className="text-[10px] uppercase text-[#c5a880] tracking-[0.2em] font-mono font-semibold transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                Visual Artistry
              </span>
              <h4 className="text-white text-lg font-normal font-serif-luxury tracking-wide mt-1.5 mb-3 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-100">
                Sagar Films Gallery
              </h4>
              <div className="w-8 h-[1px] bg-[#c5a880] mb-4 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 delay-150" />
              <span className="text-white/80 text-[10px] tracking-[0.15em] uppercase flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                Expand Image <span className="text-[#c5a880] text-sm leading-none">&#10230;</span>
              </span>
            </div>
            
            <Image 
              src={src} 
              alt={`Gallery Image ${index + 1}`}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="object-cover rounded-2xl block group-hover:scale-105 group-hover:opacity-60 transition-all duration-700"
              quality={80}
              priority={index < 4}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeIdx !== null && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md transition-all duration-300">
          {/* Close button top right */}
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/80 hover:text-white hover:rotate-90 transition-all duration-300 text-3xl focus:outline-none p-2 z-50 cursor-pointer"
            aria-label="Close Gallery"
          >
            &times;
          </button>

          {/* Left Arrow */}
          <button 
            onClick={showPrev}
            className="absolute left-6 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full h-12 w-12 flex items-center justify-center transition-colors duration-300 focus:outline-none z-50 cursor-pointer text-xl"
            aria-label="Previous Photo"
          >
            &#10094;
          </button>

          {/* Right Arrow */}
          <button 
            onClick={showNext}
            className="absolute right-6 text-white/70 hover:text-white bg-white/5 hover:bg-white/10 rounded-full h-12 w-12 flex items-center justify-center transition-colors duration-300 focus:outline-none z-50 cursor-pointer text-xl"
            aria-label="Next Photo"
          >
            &#10095;
          </button>

          {/* Photo Counter */}
          <div className="absolute bottom-6 text-white/60 text-xs sm:text-sm tracking-widest font-mono z-50">
            {activeIdx + 1} / {srcs.length}
          </div>

          {/* Active Image container */}
          <div className="relative max-w-[90vw] max-h-[80vh] flex items-center justify-center animate-scale-in">
            <img 
              src={srcs[activeIdx]} 
              alt="Expanded Gallery View"
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl border border-white/5" 
            />
          </div>
        </div>
      )}
    </div>
  )
}