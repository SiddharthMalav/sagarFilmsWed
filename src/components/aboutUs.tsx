"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Images = [
  { src: "/images/0I1A9668_11zon.jpg", alt: "Wedding guest candid", delay: 0.1 },
  { src: "/images/IMG_9406_11zon.jpg", alt: "Pre-wedding pose", delay: 0.2, offset: true },
  { src: "/images/IMG_9401_11zon.jpg", alt: "Couple smile", delay: 0.3 },
  { src: "/images/0G6A8779-2_11zon.jpg", alt: "Candid portrait", delay: 0.4, offset: true }
];

export default function AboutUs() {
  return (
    <section className="bg-white py-24 sm:py-36 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Text storytelling block (7 Cols) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-4">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[10px] sm:text-xs tracking-[0.3em] font-bold text-[#c5a880] uppercase block"
              >
                Our Philosophy
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-light text-[#0a0a0a] font-serif-luxury tracking-wide leading-tight"
              >
                Crafting Visual Legacies, <br />Preserving True Emotion
              </motion.h2>
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="space-y-6 text-gray-500 text-sm sm:text-base font-light leading-relaxed"
            >
              <p>
                Welcome to Sagar Films, where we capture your love story in the most magical and unforgettable way. We are a passionate team of wedding photographers and cinematographers dedicated to preserving your special moments through beautiful imagery and creative storytelling.
              </p>
              <p>
                At Sagar Films, we understand that your wedding day is one of the most significant moments of your life. It’s filled with love, emotions, and timeless memories that deserve to be captured in their truest form. Whether it’s the intimate smile shared between you and your partner, the joy of your family, or the grandeur of your celebration, we believe every moment should be immortalized.
              </p>
              <p>
                With years of experience in the wedding industry, we specialize in both traditional and contemporary wedding photography. From candid shots that capture the raw emotions to cinematic wedding films that narrate the entire journey of your day, we ensure that each frame is a work of art.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="pt-4"
            >
              <a 
                href="#contact" 
                className="btn-premium-dark inline-block px-8 py-3.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold"
              >
                <span>Book Consultation</span>
              </a>
            </motion.div>
          </div>

          {/* Image grid block (6 Cols) with asymmetrical staggering */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-6 items-start">
            {Images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 1.2, delay: img.delay, ease: [0.16, 1, 0.3, 1] }}
                className={`overflow-hidden rounded-3xl border border-neutral-200/30 shadow-md group relative h-48 sm:h-60 ${
                  img.offset ? 'mt-6 sm:mt-8' : ''
                }`}
              >
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image 
                  src={img.src} 
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 block" 
                  alt={img.alt} 
                  quality={80}
                />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}