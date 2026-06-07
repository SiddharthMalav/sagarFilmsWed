import React from 'react'

const AboutUs = () => {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Text block (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#c5a880] uppercase block">
              Our Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#121212] font-serif-luxury tracking-wide leading-tight">
              About Us – Sagar Films
            </h2>
            <div className="space-y-4 text-gray-500 text-sm sm:text-base leading-relaxed">
              <p>
                Welcome to Sagar Films, where we capture your love story in the most magical and unforgettable way. We are a passionate team of wedding photographers and cinematographers dedicated to preserving your special moments through beautiful imagery and creative storytelling.
              </p>
              <p>
                At Sagar Films, we understand that your wedding day is one of the most significant moments of your life. It’s filled with love, emotions, and timeless memories that deserve to be captured in their truest form. Whether it’s the intimate smile shared between you and your partner, the joy of your family, or the grandeur of your celebration, we believe every moment should be immortalized.
              </p>
              <p>
                With years of experience in the wedding industry, we specialize in both traditional and contemporary wedding photography. From candid shots that capture the raw emotions to cinematic wedding films that narrate the entire journey of your day, we ensure that each frame is a work of art.
              </p>
            </div>
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-block bg-[#121212] hover:bg-[#c5a880] text-white px-6 py-3 rounded-lg text-xs uppercase tracking-widest font-semibold transition-all duration-300 cursor-pointer"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image grid block (5 Cols) */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4 sm:gap-6 items-start">
            <div className="overflow-hidden rounded-2xl border border-neutral-200/40 shadow-sm group">
              <img src="/images/0I1A9668_11zon.jpg" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 block" alt="Wedding guest candid" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-neutral-200/40 shadow-sm group mt-4 sm:mt-6">
              <img src="/images/IMG_9406_11zon.jpg" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 block" alt="Pre-wedding pose" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-neutral-200/40 shadow-sm group">
              <img src="/images/IMG_9401_11zon.jpg" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 block" alt="Couple smile" />
            </div>
            <div className="overflow-hidden rounded-2xl border border-neutral-200/40 shadow-sm group mt-4 sm:mt-6">
              <img src="/images/0G6A8779-2_11zon.jpg" className="w-full h-44 object-cover group-hover:scale-105 transition-transform duration-500 block" alt="Candid portrait" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default AboutUs