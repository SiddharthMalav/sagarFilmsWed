import React from 'react'

export default function WhatWeProvide() {
  return (
    <section className="bg-[#faf9f6] py-20 sm:py-28 border-t border-neutral-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#c5a880] uppercase block mb-3">
            Portfolio Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#121212] font-serif-luxury tracking-wide">
            What We Provide
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Card 1 */}
          <div className="bg-white border border-neutral-200/50 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:border-[#c5a880]/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="overflow-hidden rounded-xl bg-neutral-100 aspect-[4/5] relative">
              <img 
                src="/images/730A0138 copy_11zon.jpg" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Golden Hour Vows"
              />
            </div>
            <div className="pt-6 text-center">
              <span className="text-[10px] uppercase text-[#c5a880] tracking-widest font-mono font-semibold">Candid Moments</span>
              <h3 className="mt-2 text-xl font-normal text-gray-900 font-serif-luxury tracking-wide">Golden Hour Vows</h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-neutral-200/50 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:border-[#c5a880]/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="overflow-hidden rounded-xl bg-neutral-100 aspect-[4/5] relative">
              <img 
                src="/images/pre-wedding/730A4377 copy_11zon.jpg" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Journey to Forever"
              />
            </div>
            <div className="pt-6 text-center">
              <span className="text-[10px] uppercase text-[#c5a880] tracking-widest font-mono font-semibold">Pre-Wedding</span>
              <h3 className="mt-2 text-xl font-normal text-gray-900 font-serif-luxury tracking-wide">Journey to Forever</h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-neutral-200/50 rounded-2xl p-4 shadow-sm hover:shadow-xl hover:border-[#c5a880]/30 hover:-translate-y-1 transition-all duration-300 group">
            <div className="overflow-hidden rounded-xl bg-neutral-100 aspect-[4/5] relative">
              <img 
                src="/images/pre-wedding/a16_11zon (1).jpg" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                alt="Candid Charm"
              />
            </div>
            <div className="pt-6 text-center">
              <span className="text-[10px] uppercase text-[#c5a880] tracking-widest font-mono font-semibold">Portraits</span>
              <h3 className="mt-2 text-xl font-normal text-gray-900 font-serif-luxury tracking-wide">Candid Charm</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
