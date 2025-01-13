import React from 'react'
import MultiCrousal from './multiCarousel';

export const Reviews = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  // JSON data for the cards
  const cardData = [
    { id: 1, rating: 5, name: "Rhea & Manish", date: "2025-01-10", image: "", description: "Sagar Films did an outstanding job at our wedding! They were professional, fun, and made sure every moment was captured beautifully. We couldn’t be happier with the results." },
    { id: 2, rating: 5, name: "Sara & Amit", date: "2025-01-12", description: "The team at Sagar Films exceeded our expectations. From our pre-wedding shoot to the final wedding video, every moment was captured with such care and creativity. Highly recommended!" },
    { id: 3, rating: 5, name: "Ananya & Arjun", date: "2024-08-07", description: "We are absolutely in love with the wedding film that Sagar Films created for us. The cinematography is stunning and really tells the story of our day. The photographers were so skilled at capturing the smallest details that made our wedding feel so personal. The entire team went above and beyond our expectations. Thank you for the amazing memories!" },
    { id: 4, rating: 5, name: "Priya & Ravi", date: "2024-06-04", description: "Sagar Films is truly exceptional! From the first consultation to the final delivery of our wedding album, everything was smooth, and the results were beyond our expectations. The photos are pure art, and the team was so patient and professional. They made us feel like superstars on our big day. We couldn’t have asked for a better team to capture such an important milestone in our lives." },
  ];

  // Generate cards from JSON data
  const cards = cardData.map((item) => (
    <div
      key={item.id}
      className="shadow-lg min-h-28 h-full carousel-item p-4 bg-white border rounded-xl flex flex-col justify-between space-y-4"
    >
      {/* Stars and Date */}
      <div className="flex justify-between items-center">
        <div className="text-yellow-500">
          {"★".repeat(item.rating).padEnd(5, "☆")}
        </div>
        <div className="text-gray-500 text-sm">{item.date}</div>
      </div>

      {/* Review Text */}
      <p className="text-sm text-gray-600 text-center">{item.description}</p>

      {/* Avatar and Name */}
      <div className="py-2 flex items-center space-x-4">
        <img
          className="h-10 w-10 rounded-full border"
          src={"/images/svgs/avatar.svg"}
        />
        <div className="text-sm font-medium text-gray-800">{item.name}</div>
      </div>
    </div>
  ));

  return (
    <div style={{
      background: 'radial-gradient(circle, rgba(178,207,212,0.5) 0%, rgba(55,86,106,1) 100%)',
    }}>
      <div className='mx-auto lg:max-w-7xl max-w-2xl items-center px-4 sm:px-6 lg:px-8  py-16 sm:py-20'>
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pb-4">Client Testimonial</h2>

        <MultiCrousal items={cards} responsive={responsive} />
      </div></div>
  )
}
