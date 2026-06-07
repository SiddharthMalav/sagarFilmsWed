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
      breakpoint: { max: 1024, min: 640 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1
    }
  };

  const cardData = [
    { 
      id: 1, 
      rating: 5, 
      name: "Rhea & Manish", 
      date: "Jan 2025", 
      description: "Sagar Films did an outstanding job at our wedding! They were professional, fun, and made sure every single moment was captured beautifully. We couldn't be happier with the cinematic results." 
    },
    { 
      id: 2, 
      rating: 5, 
      name: "Sara & Amit", 
      date: "Jan 2025", 
      description: "The team at Sagar Films exceeded all expectations. From our romantic pre-wedding shoot to the final wedding video, every single frame was captured with such care, storytelling, and creativity." 
    },
    { 
      id: 3, 
      rating: 5, 
      name: "Ananya & Arjun", 
      date: "Aug 2024", 
      description: "We are absolutely in love with the wedding film they created. The cinematography is stunning and really tells the story of our day. The team went above and beyond to preserve our beautiful memories." 
    },
    { 
      id: 4, 
      rating: 5, 
      name: "Priya & Ravi", 
      date: "Jun 2024", 
      description: "Exceptional service! From the first consultation to album delivery, everything was seamless. The photos are pure fine-art and they made us feel comfortable. Recommended Kota photographers!" 
    },
  ];

  const cards = cardData.map((item) => (
    <div
      key={item.id}
      className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-2xl flex flex-col justify-between space-y-6 h-full hover:border-[#c5a880]/30 transition-all duration-300"
    >
      {/* Stars and Date */}
      <div className="flex justify-between items-center">
        <div className="text-[#c5a880] text-lg tracking-widest">
          {"★".repeat(item.rating).padEnd(5, "☆")}
        </div>
        <div className="text-gray-400 text-xs tracking-wider font-mono">{item.date}</div>
      </div>

      {/* Review Text */}
      <p className="text-gray-300 text-sm leading-relaxed italic">
        &ldquo;{item.description}&rdquo;
      </p>

      {/* Avatar and Name */}
      <div className="flex items-center space-x-4 border-t border-white/10 pt-6">
        <img
          className="h-10 w-10 rounded-full border border-[#c5a880]/20 object-cover"
          src="/images/svgs/avatar.svg"
          alt="Client Avatar"
        />
        <div>
          <div className="text-sm font-semibold tracking-wider text-white">{item.name}</div>
          <div className="text-[10px] uppercase text-[#c5a880] tracking-widest font-mono">Happy Couple</div>
        </div>
      </div>
    </div>
  ));

  return (
    <section className="bg-[#121212] py-20 sm:py-28 border-t border-neutral-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm tracking-[0.2em] font-semibold text-[#c5a880] uppercase block mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-normal text-white font-serif-luxury tracking-wide">
            Love Notes From Couples
          </h2>
        </div>

        <MultiCrousal items={cards} responsive={responsive} />
      </div>
    </section>
  )
}
