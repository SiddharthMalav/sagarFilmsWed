"use client"
import { Banner } from '@/components/banner';
import React from 'react';
import './elegance-studio.css';
import FollowUs from '@/components/followUs';
import { ImagesView } from '@/components/imagesView';
import { TitleWithDescription } from '@/components/titleWithDescription';

export default function EleganceStudio() {
  const imagesSrcs = ["/images/0G6A8779-2_11zon.jpg", "/images/0G6A9432-1_11zon.jpg", "/images/0I1A1750_11zon.jpg", "/images/0I1A6143_11zon.jpg", "/images/0I1A7164_11zon.jpg", "/images/0I1A9668_11zon.jpg", "/images/0I1A9732_11zon.jpg", "/images/0I1A9742 copy_11zon.jpg", "/images/1O3A2522 copy_11zon.jpg", "/images/477A8760 (1)_11zon.jpg", "/images/730A0138 copy_11zon.jpg", "/images/IMG_9401_11zon.jpg", "/images/IMG_9406_11zon.jpg", "/images/IMG_9447_11zon.jpg", "/images/IMG_9407_11zon.jpg", '/images/477A8760 (1)_11zon.jpg']

  return (
    <main className="bg-[#faf9f6]">
      <Banner 
        src="/images/IMG_9412_11zon.jpg" 
        title="ELEGANCE STUDIO" 
        subtitle="OUR BRIDE & GROOM PORTFOLIO" 
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <TitleWithDescription 
          title="Explore Our Stunning Bride and Groom Gallery" 
          description="Step into a world of romance and elegance as you explore our stunning collection of bride and groom portraits. Each image is a masterpiece, capturing the heartfelt emotions, the joy of the occasion, and the deep connection between couples on their special day. From candid moments filled with laughter to intimate, breathtaking poses, our gallery showcases the beauty and charm of every couple." 
        />
        <ImagesView srcs={imagesSrcs} />
      </section>
      <FollowUs />
    </main>
  );
}
