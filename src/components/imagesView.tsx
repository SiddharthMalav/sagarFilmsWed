"use client"
import React, { useEffect } from 'react'

export const ImagesView = (props: TImagesView) => {
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
    <section className="animation flex flex-wrap justify-center gap-2 p-2">
      {props.srcs.map((item: string, index: number) => {
        return (
          <img key={index} className="rounded-lg h-80 object-cover" src={item} alt="" />
        )
      })}
    </section>
  )
}

type TImagesView = {
  srcs: string[]
}