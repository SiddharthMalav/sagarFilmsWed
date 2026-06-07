import React from 'react'
import Counter from './counter'

export const CompanyStatics = () => {
  return (
    <section className="relative py-20 sm:py-28 bg-[#121212] overflow-hidden">
      {/* Abstract luxury background decor */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#c5a880]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <span className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#c5a880] uppercase block mb-3">
            Our Legacy & Milestones
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-white font-serif-luxury tracking-wide mb-6">
            Our Remarkable Achievements
          </h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            We take pride in showcasing our accomplishments that reflect our dedication, passion, and artistic growth. Explore the highlights of our wedding storytelling journey!
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Card 1: Cities */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#c5a880]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="h-14 w-14 rounded-full bg-[#c5a880]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <img height={28} width={28} src="/images/staticsIcon/cities.svg" alt="Cities Icon" className="brightness-0 invert opacity-90" />
            </div>
            <div className="flex items-baseline text-4xl sm:text-5xl font-light text-white tracking-tight mb-2">
              <Counter MaxNumber="20" />
              <span className="text-[#c5a880] ml-1 font-semibold">+</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-semibold">Cities Covered</span>
          </div>

          {/* Card 2: Happy Customers */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#c5a880]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="h-14 w-14 rounded-full bg-[#c5a880]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <img height={28} width={28} src="/images/staticsIcon/customer.svg" alt="Customers Icon" className="brightness-0 invert opacity-90" />
            </div>
            <div className="flex items-baseline text-4xl sm:text-5xl font-light text-white tracking-tight mb-2">
              <Counter MaxNumber="800" />
              <span className="text-[#c5a880] ml-1 font-semibold">+</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-semibold">Happy Couples</span>
          </div>

          {/* Card 3: Photos */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#c5a880]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="h-14 w-14 rounded-full bg-[#c5a880]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <img height={28} width={28} src="/images/staticsIcon/photos.svg" alt="Photos Icon" className="brightness-0 invert opacity-90" />
            </div>
            <div className="flex items-baseline text-4xl sm:text-5xl font-light text-white tracking-tight mb-2">
              <Counter MaxNumber="50000" />
              <span className="text-[#c5a880] ml-1 font-semibold">+</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-semibold">Photos Captured</span>
          </div>

          {/* Card 4: Videos */}
          <div className="flex flex-col items-center justify-center p-6 sm:p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-[#c5a880]/40 transition-all duration-300 group hover:-translate-y-1">
            <div className="h-14 w-14 rounded-full bg-[#c5a880]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
              <img height={28} width={28} src="/images/staticsIcon/video.svg" alt="Videos Icon" className="brightness-0 invert opacity-90" />
            </div>
            <div className="flex items-baseline text-4xl sm:text-5xl font-light text-white tracking-tight mb-2">
              <Counter MaxNumber="500" />
              <span className="text-[#c5a880] ml-1 font-semibold">+</span>
            </div>
            <span className="text-xs sm:text-sm text-gray-400 uppercase tracking-widest font-semibold">Films Produced</span>
          </div>
        </div>
      </div>
    </section>
  )
}
