"use client"
import { Banner } from '@/components/banner';
import React from 'react';
import './candids.css';
import FollowUs from '@/components/followUs';
import { TitleWithDescription } from '@/components/titleWithDescription';
import { ImagesView } from '@/components/imagesView';

export default function Candids() {
  const imagesSrcs = [
    "/images/candids/0I1A1750_11zon.jpg",
    "/images/candids/0I1A3904_11zon.jpg",
    "/images/candids/0I1A3995_11zon.jpg",
    "/images/candids/0I1A5563_11zon.jpg",
    "/images/candids/0I1A7164_11zon.jpg",
    "/images/candids/0I1A7208_11zon.jpg",
    "/images/candids/0I1A7355_11zon.jpg",
    "/images/candids/0I1A9668_11zon.jpg",
    "/images/candids/730A7474 copy_11zon.jpg",
    "/images/candids/730A7484 copy_11zon.jpg",
    "/images/candids/730A7534 copy_11zon.jpg",
    "/images/candids/730A7542 copy_11zon.jpg",
    "/images/candids/730A7614 copy_11zon.jpg",
    "/images/candids/730A7624 copy_11zon.jpg",
  ]
  return (
    <main className="bg-[#faf9f6]">
      <Banner 
        src="/images/candids/0I1A1776_11zon.jpg" 
        title="CANDID MOMENTS" 
        subtitle="UNFILTERED EMOTIONS CAPTURED" 
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <TitleWithDescription 
          title="Timeless Moments: The Art of Candid Photography" 
          description="Candids capture the raw, unfiltered essence of life's most beautiful moments. They tell stories through spontaneous expressions, heartfelt emotions, and natural interactions, preserving memories as they unfold. These photographs go beyond posed perfection, focusing on the authenticity of the moment." 
        />
        <ImagesView srcs={imagesSrcs} />
      </section>
      <FollowUs />
    </main>
  );
}
