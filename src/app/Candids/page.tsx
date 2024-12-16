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
    <section className="pt-[64px] ">
      <Banner src={'/images/candids/0I1A1776_11zon.jpg'} />
      <section className='mx-auto lg:max-w-7xl max-w-2xl items-center px-4 sm:px-6 lg:px-8'>
        <TitleWithDescription title={'Timeless Moments: The Art of Candid Photography'} description={`Candids capture the raw, unfiltered essence of life's most beautiful moments. They tell stories through spontaneous expressions, heartfelt emotions, and natural interactions, preserving memories as they unfold. These photographs go beyond posed perfection, focusing on the authenticity of the moment. Whether it's a shared laugh, a stolen glance, or a fleeting joy, candids bring out the true spirit of the occasion. Each frame is a timeless reminder of life's genuine beauty, filled with emotions that words cannot express.`} />
        <ImagesView srcs={imagesSrcs} /></section>
      <FollowUs />
    </section>
  );
}
