"use client"
import { Banner } from '@/components/banner';
import React from 'react';
import './elegance-studio.css';
import FollowUs from '@/components/followUs';
import { ImagesView } from '@/components/imagesView';
import { TitleWithDescription } from '@/components/titleWithDescription';

export default function EleganceStudio() {
  const imagesSrcs = ["/images/0G6A8937j_11zon.jpg", "/images/0G6A8779-2_11zon.jpg", "/images/0G6A9432-1_11zon.jpg", "/images/0I1A1750_11zon.jpg", "/images/0I1A6143_11zon.jpg", "/images/0I1A7164_11zon.jpg", "/images/0I1A9668_11zon.jpg", "/images/0I1A9732_11zon.jpg", "/images/0I1A9742 copy_11zon.jpg", "/images/1O3A2522 copy_11zon.jpg", "/images/477A8760 (1)_11zon.jpg", "/images/730A0138 copy_11zon.jpg", "/images/IMG_9401_11zon.jpg", "/images/IMG_9406_11zon.jpg", "/images/IMG_9447_11zon.jpg", "/images/IMG_9407_11zon.jpg", '/images/477A8760 (1)_11zon.jpg']

  return (
    <section className="pt-[64px]">
      <Banner src={"/images/IMG_9412_11zon.jpg"} />
      <section className='mx-auto lg:max-w-7xl max-w-2xl items-center px-4 sm:px-6 lg:px-8'>
        <TitleWithDescription title={'Explore Our Stunning Bride and Groom Gallery'} description={`Step into a world of romance and elegance as you explore our stunning collection of bride and groom portraits. Each image is a masterpiece, capturing the heartfelt emotions, the joy of the occasion, and the deep connection between couples on their special day. From candid moments filled with laughter to intimate, breathtaking poses, our gallery showcases the beauty and charm of every couple. Whether you're seeking inspiration for your own wedding or simply admiring the art of love, our gallery highlights the perfect harmony of bridal grace and groom's charm. Allow these timeless images to transport you to a place of love, happiness, and unforgettable memories.`} />
        <ImagesView srcs={imagesSrcs} />
      </section>
      <FollowUs />
    </section>
  );
}
