import React from 'react'

type TTitleWithDescription = {
  title: string;
  description: string;
}

export const TitleWithDescription = ({ title, description }: TTitleWithDescription) => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-16 space-y-4">
      <h2 className="text-3xl sm:text-4xl font-normal text-[#121212] font-serif-luxury tracking-wide">
        {title}
      </h2>
      <div className="w-12 h-[1px] bg-[#c5a880] mx-auto my-4" />
      <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
        {description}
      </p>
    </div>
  )
}
