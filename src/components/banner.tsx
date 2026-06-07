import React from 'react'

type TBanner = {
  src: string;
  title?: string;
  subtitle?: string;
}

export const Banner = ({ src, title, subtitle }: TBanner) => {
  return (
    <section className="relative h-[55vh] min-h-[360px] w-full overflow-hidden bg-neutral-900">
      {/* Premium dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 z-10" />
      
      <img 
        className="h-full w-full object-cover object-center animate-fade-in" 
        src={src} 
        alt="Banner background" 
      />

      {/* Decorative lines & text */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
        {subtitle && (
          <span className="text-[11px] sm:text-xs tracking-[0.3em] font-semibold text-[#c5a880] mb-2 uppercase">
            {subtitle}
          </span>
        )}
        {title && (
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-normal text-white font-serif-luxury tracking-widest leading-tight">
            {title}
          </h2>
        )}
        <div className="w-16 h-[1px] bg-[#c5a880]/60 mt-4"></div>
      </div>
    </section>
  )
}
