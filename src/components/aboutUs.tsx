import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-white">
    <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Sagar Films</h2>
        <p className="mt-4 text-gray-500">Sagar Films, located in Kunhari, Kota, Rajasthan, is a professional photography business dedicated to capturing your special moments with precision and creativity. With years of experience in the photography industry, Sagar Films has earned a reputation as a trusted name in the field.</p>
        <p className="mt-4 text-gray-500">Their expertise covers a wide range of photography services, and they are known for their unwavering commitment to creating stunning and memorable images. With an impressive rating of 4.9 based on 44 reviews, Sagar Films continues to deliver exceptional service to clients in Kunhari, Kota, Rajasthan.</p>

      </div>
      <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <img src="/images/0I1A9668_11zon.jpg" className="rounded-lg bg-gray-100" />
        <img src="/images/IMG_9406_11zon.jpg" className="rounded-lg bg-gray-100" />
        <img src="/images/IMG_9401_11zon.jpg" className="rounded-lg bg-gray-100" />
        <img src="/images/0G6A8779-2_11zon.jpg" className="rounded-lg bg-gray-100" />
      </div>
    </div>
  </div>
  )
}

export default AboutUs