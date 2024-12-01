'use client';
import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const DummyImages = [
  "https://picsum.photos/1000/1000?random=1",
  "https://picsum.photos/1000/1000?random=2",
  "https://picsum.photos/1000/1000?random=3",
  "https://picsum.photos/1000/1000?random=4",
  "https://picsum.photos/1000/1000?random=5",
];

export default function CarouselComponent() {
  return (
    <Carousel stopOnHover={false}
      animationHandler={"fade"} autoPlay infiniteLoop showIndicators={false} showThumbs={false}>
      {DummyImages.map((image, index) => (
        <div key={index}>
          <img src={image} className="w-full h-[70vh]" alt={`Image ${index + 1}`} />
        </div>
      ))}
    </Carousel>
  );
}
