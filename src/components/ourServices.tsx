import React from 'react'
import MultiCrousal from './multiCarousel'

export default function OurServices() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 640 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

  const cardData = [
    { 
      id: 1, 
      image: "/images/svgs/weddingPhotography.svg", 
      title: "Wedding Photography", 
      description: "From pre-wedding shoots to final details, we capture your wedding with artistic precision, blending traditional & contemporary styles." 
    },
    { 
      id: 2, 
      image: "/images/svgs/camera.png", 
      title: "Candid Photography", 
      description: "Specializing in unfiltered emotional snapshots—tears of joy, spontaneous laughter, and subtle expressions of love." 
    },
    { 
      id: 3, 
      image: "/images/svgs/engaement.png", 
      title: "Pre-Wedding Shoots", 
      description: "Beautifully choreographed cinematic couples portrait sessions in dream backdrops before you take your final vows." 
    },
    { 
      id: 4, 
      image: "/images/svgs/destination.png", 
      title: "Destination Weddings", 
      description: "Available to travel globally to capture your grand wedding celebrations in exotic luxury venues around the world." 
    },
    { 
      id: 5, 
      image: "/images/svgs/wedding.svg", 
      title: "Cinematic Films", 
      description: "High-definition narrative movies that encapsulate all the audio, music, emotions, and scale of your wedding day." 
    },
  ];

  const cards = cardData.map((item) => (
    <div 
      key={item.id} 
      className="bg-white border border-neutral-200/50 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:border-[#c5a880]/30 transition-all duration-500 h-full flex flex-col justify-between group cursor-default"
    >
      <div>
        <div className="h-14 w-14 rounded-full bg-[#c5a880]/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
          <img className="h-8 w-8 object-contain" src={item.image} alt={item.title} />
        </div>
        <h3 className="text-xl sm:text-2xl font-normal text-gray-900 font-serif-luxury tracking-wide mb-3">
          {item.title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed">
          {item.description}
        </p>
      </div>
      <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#c5a880] group-hover:text-amber-700 transition-colors duration-300">
        View Gallery
        <span className="transform group-hover:translate-x-1 transition-transform duration-300">&#10230;</span>
      </div>
    </div>
  ));

  return (
    <section className="bg-neutral-50 py-20 sm:py-28 border-t border-neutral-200/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#c5a880] uppercase block mb-3">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-[#121212] font-serif-luxury tracking-wide">
            Our Premium Services
          </h2>
        </div>

        <MultiCrousal items={cards} responsive={responsive} />
      </div>
    </section>
  )
}