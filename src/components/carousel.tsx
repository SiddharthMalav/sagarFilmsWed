'use client';
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Link from 'next/link';

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
  const settings = {
    showArrows: true,
    interval: 5000,
    dynamicHeight: false,
    stopOnHover: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 800,
    showThumbs: false,
    showIndicators: true,
    swipeable: true,
    emulateTouch: true,
    autoPlay: true,
  };

  return (
    <div className="relative w-full overflow-hidden bg-neutral-950">
      <Carousel {...settings}>
        {HeroSlides.map((slide, index) => (
          <div key={index} className="relative w-full h-[85vh] min-h-[500px]">
            {/* Soft Dark overlay to ensure text stands out */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 z-10" />
            
            <img 
              src={slide.image} 
              className="object-cover w-full h-full" 
              alt={`Slide ${index + 1}`} 
            />

            {/* Slide Content Overlay */}
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-4 text-center">
              <span className="text-xs sm:text-sm tracking-[0.3em] font-semibold text-[#c5a880] mb-3 uppercase animate-fade-in">
                {slide.subtitle}
              </span>
              <h1 className="max-w-4xl text-3xl sm:text-5xl md:text-6xl font-normal text-white font-serif-luxury tracking-wide mb-6 leading-tight animate-fade-in-up delay-100">
                {slide.title}
              </h1>
              <div className="animate-fade-in-up delay-200">
                <Link 
                  href={slide.link} 
                  className="inline-block border border-white/80 text-white hover:border-[#c5a880] hover:text-[#c5a880] hover:bg-white/5 px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all duration-300 font-semibold cursor-pointer"
                >
                  Explore Portfolio
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
