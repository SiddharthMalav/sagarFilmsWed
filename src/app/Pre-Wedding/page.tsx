"use client"
import { Banner } from '@/components/banner';
import React from 'react';
import './pre-wedding.css';
import FollowUs from '@/components/followUs';
import { TitleWithDescription } from '@/components/titleWithDescription';
import { ImagesView } from '@/components/imagesView';

export default function PreWedding() {
  const imagesSrcs = [
    "/images/pre-wedding/0G6A8779-2.JPG",
    "/images/pre-wedding/0G6A9149d-1_11zon.jpg",
    "/images/pre-wedding/730A4377 copy_11zon.jpg",
    "/images/pre-wedding/a16_11zon (1).jpg",
    "/images/pre-wedding/DSC01354_11zon.jpg",
    "/images/pre-wedding/DSC02600 copyf_11zon.jpg",
    "/images/pre-wedding/GPK_7144 (1)_11zon.jpg",
    "/images/pre-wedding/IMG_9401_11zon.jpg",
    "/images/pre-wedding/IMG_9406_11zon.jpg",
    "/images/pre-wedding/IMG_9407_11zon.jpg",
    "/images/pre-wedding/IMG_9413_11zon.jpg",
    "/images/pre-wedding/IMG_9437_11zon.jpg",
    "/images/pre-wedding/IMG_9447_11zon.jpg",
    "/images/pre-wedding/DSC09404-0_11zon.jpg",
    "/images/pre-wedding/DSC09485_11zon (1).jpg",
    "/images/pre-wedding/0G6A9130-2_11zon.jpg",
    "/images/pre-wedding/DSC09140-0_11zon.jpg",
    "/images/pre-wedding/0I1A5644.JPG",
    "/images/pre-wedding/DSC01354-1.jpg",
    "/images/pre-wedding/IMG_9437.JPG",
    "/images/pre-wedding/0I1A9751.jpg",
  ]
  return (
    <section className="pt-[64px]">
      <Banner src={'/images/pre-wedding/a9_11zon (1).jpg'} />
      <section className='mx-auto lg:max-w-7xl max-w-2xl items-center px-4 sm:px-6 lg:px-8'>
        <TitleWithDescription title={'Journey to Forever: Celebrating Love Before the Vows'} description={`
The pre-wedding phase is a meaningful celebration of love and commitment, capturing the couple's journey through shared dreams, cherished moments, and bonding with loved ones. Marked by intimate gatherings, photoshoots, or rituals, it reflects their unique story and unites families and cultures. This special time adds joy, laughter, and personal touches to the wedding journey, making it a magical prelude to "happily ever after".`} />
        <ImagesView srcs={imagesSrcs} />
      </section>
      <FollowUs />
    </section>
  );
}
