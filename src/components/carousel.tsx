'use client';
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css'

const DummyImages = [
  "/images/477A8760 (1)_11zon.jpg",
  "/images/730A0580 copy_11zon.jpg",
  "/images/IMG_9403_11zon.jpg",
  "/images/IMG_9407_11zon.jpg",
  "/images/IMG_9412_11zon.jpg",
];

export default function CarouselComponent() {
  const settings = {
    showArrows: false,
    interval: 3500,
    dynamicHeight: false,
    stopOnHover: false,
    infiniteLoop: true,
    showStatus: false,
    transitionTime: 500,
    showThumbs: false,
    showIndicators: true,
    swipeable: true,
    emulateTouch: true,
    autoPlay: true,
  };
  return (
    <Carousel {...settings}>
      {DummyImages.map((image, index) => (
        <div key={index}>
          <img src={image} className="object-cover w-full md:h-[70vh]" alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}
