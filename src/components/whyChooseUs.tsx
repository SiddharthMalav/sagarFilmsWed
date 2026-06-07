import React from 'react'

export const WhyChooseUs = () => {
  return (
    <section className="bg-white py-24 sm:py-32 border-t border-neutral-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Images Grid (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="max-w-xl mx-auto lg:mx-0">
              <span className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#c5a880] uppercase block mb-3">
                Why Sagar Films
              </span>
              <h2 className="text-3xl sm:text-4xl font-normal text-[#121212] font-serif-luxury tracking-wide mb-6">
                Creating Art From Your Love Stories
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-8">
                At Sagar Films, we believe every wedding is a unique story waiting to be told. We capture those precious moments with love, technical precision, and creative expertise.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-2xl border border-neutral-200/40 shadow-sm group">
                <img src="/images/IMG_9447_11zon.jpg" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 block" alt="Wedding couple" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-neutral-200/40 shadow-sm group">
                <img src="/images/pre-wedding/0G6A9149d-1_11zon.jpg" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 block" alt="Pre-wedding shoot" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-neutral-200/40 shadow-sm group">
                <img src="/images/pre-wedding/GPK_7144 (1)_11zon.jpg" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 block" alt="Couple portrait" />
              </div>
              <div className="overflow-hidden rounded-2xl border border-neutral-200/40 shadow-sm group">
                <img src="/images/pre-wedding/0I1A5644.JPG" className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500 block" alt="Scenic couple shoot" />
              </div>
            </div>
          </div>

          {/* Points List (7 Cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Point 1 */}
            <div className="bg-[#faf9f6] p-8 border border-neutral-200/50 rounded-2xl shadow-sm hover:border-[#c5a880]/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#c5a880]/10 text-sm font-semibold tracking-wider text-[#c5a880] mb-4">
                01
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Experienced Team</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                With years of documenting weddings, our photographers capture meaningful moments with technical perfection and artistic vision.
              </p>
            </div>

            {/* Point 2 */}
            <div className="bg-[#faf9f6] p-8 border border-neutral-200/50 rounded-2xl shadow-sm hover:border-[#c5a880]/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#c5a880]/10 text-sm font-semibold tracking-wider text-[#c5a880] mb-4">
                02
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tailored Approach</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                Every wedding is different. We work closely with you to understand your aesthetic vision, catering customized packages for your special day.
              </p>
            </div>

            {/* Point 3 */}
            <div className="bg-[#faf9f6] p-8 border border-neutral-200/50 rounded-2xl shadow-sm hover:border-[#c5a880]/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#c5a880]/10 text-sm font-semibold tracking-wider text-[#c5a880] mb-4">
                03
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">State-Of-The-Art Gear</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                We use high-end cinema cameras and professional lighting gear to ensure your photos and films are saved with high quality and color science.
              </p>
            </div>

            {/* Point 4 */}
            <div className="bg-[#faf9f6] p-8 border border-neutral-200/50 rounded-2xl shadow-sm hover:border-[#c5a880]/30 transition-all duration-300 group hover:-translate-y-1">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[#c5a880]/10 text-sm font-semibold tracking-wider text-[#c5a880] mb-4">
                04
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Passionate Storytellers</h3>
              <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                We don&apos;t just snap pictures; we curate visual legacy. We build emotional connections through imagery that lasts generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
