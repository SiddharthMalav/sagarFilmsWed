"use client"
import { useEffect } from 'react';
import { Banner } from '@/components/banner';
import React from 'react';
import './elegance-studio.css';
import FollowUs from '@/components/followUs';

export default function EleganceStudio() {
  useEffect(() => {
    const images = document.querySelectorAll('.animation img');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-popup'); // Add animation class
            observer.unobserve(entry.target); // Stop observing to avoid re-triggering
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the image is visible
      }
    );

    images.forEach((img) => observer.observe(img));

    return () => {
      observer.disconnect(); // Clean up the observer on component unmount
    };
  }, []);

  return (
    <section className="pt-[64px]">
      <Banner src={'/images/477A8760 (1)_11zon.jpg'} />
      {/* <section className="animation flex flex-wrap justify-center gap-2 p-2"> */}
      <h2 className="mt-10 mb-8 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">Explore Our Stunning Bride and Groom Gallery</h2>
      <p className="lg:pl-4 mb-6 mb-2 text-center w-[70%] m-auto text-gray-500 max-lg:text-center">Step into a world of romance and elegance as you explore our stunning collection of bride and groom portraits. Each image is a masterpiece, capturing the heartfelt emotions, the joy of the occasion, and the deep connection between couples on their special day. From candid moments filled with laughter to intimate, breathtaking poses, our gallery showcases the beauty and charm of every couple. Whether you&apos;re seeking inspiration for your own wedding or simply admiring the art of love, our gallery highlights the perfect harmony of bridal grace and groom&apos;s charm. Allow these timeless images to transport you to a place of love, happiness, and unforgettable memories.</p>

      <section className="animation flex flex-wrap justify-center gap-2 p-2">
        <img className="rounded-lg h-80 object-cover" src="/images/0G6A8937j_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/0G6A9432-1_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/0G6A8779-2_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/0I1A1750_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/0I1A6143_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/0I1A7164_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/0I1A9668_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/0I1A9732_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/0I1A9742 copy_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/1O3A2522 copy_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/477A8760 (1)_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/730A0138 copy_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/730A0580 copy_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/IMG_9401_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/IMG_9406_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/IMG_9447_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/IMG_9407_11zon.jpg" alt="" />
        <img className="rounded-lg h-80 object-cover" src="/images/IMG_9412_11zon.jpg" alt="" />
      </section>
      <FollowUs />
    </section>
  );
}
