import React from 'react'
import MultiCrousal from './multiCarousel'

export default function OurServices() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // JSON data for the cards
  const cardData = [
    { id: 1, image: "/images/svgs/weddingPhotography.svg", title: "Wedding Photography", description: "From the pre-wedding shoot to the final moments of your celebration, our wedding photography service ensures that every precious moment is captured with detail and care. We take pride in blending traditional and contemporary styles to create a collection of images you will cherish forever." },
    { id: 2, image: "/images/svgs/camera.png", title: "Candid Photography", description: "We specialize in candid photography that captures the natural, raw moments. From tears of joy to spontaneous laughter, our team is dedicated to documenting the heartfelt moments that tell the true story of your wedding day." },
    { id: 3, image: "/images/svgs/engaement.png", title: "Pre-Wedding & Engagement Shoots", description: "Planning a destination wedding? Let Sagar Films travel with you to capture the beauty of your special day in the most breathtaking locations. Our team is experienced in destination weddings and understands the nuances of capturing every unique detail." },
    { id: 4, image: "/images/svgs/destination.png", title: "Destination Wedding", description: "Planning a destination wedding? Let Sagar Films travel with you to capture the beauty of your special day in the most breathtaking locations. Our team is experienced in destination weddings and understands the nuances of capturing every unique detail." },
    { id: 5, image: "/images/svgs/wedding.svg", title: "Cinematography & Wedding Films", description: "In addition to photography, we offer cinematic wedding films that encapsulate the emotion and excitement of your day. Our wedding films are professionally edited to create a beautiful narrative you can revisit for years to come." },
  ];

  // Generate cards from JSON data
  const cards = cardData.map((item) => (
    <div key={item.id} className="shadow-lg min-h-80 carousel-item p-4 bg-white border rounded-xl shadow h-full">
      <div className='py-2 flex justify-center'>
        <img className='h-10 w-10' src={item.image} alt="" />
      </div>
      <h2 className="min-h-[56px] sm:min-h-[64px]  my-2 text-center text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">{item.title}</h2>
      <p className="text-sm text-gray-600 text-center">{item.description}</p>
    </div>
  ));

  return (
    <div className="bg-[url('/images/reachOutToUsBg.png')]">
      <div className='mx-auto lg:max-w-7xl max-w-2xl items-center px-4 sm:px-6 lg:px-8  py-16 sm:py-20'>
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">Our Services</h2>

        <MultiCrousal items={cards} responsive={responsive} />
      </div></div>
  )
}