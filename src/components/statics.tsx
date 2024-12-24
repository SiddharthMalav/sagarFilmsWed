import React from 'react'
import Counter from './counter'

export const CompanyStatics = () => {
  return (
    <section className='relative py-8 md:py-10 bg-gradient-to-r from-[#000099] via-[#5a5acc] to-[#cc33ff]'>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <section className='relative z-10'> <h2 className="px-4 text-white text-center text-2xl font-semibold tracking-tight  sm:text-3xl">Our Remarkable Achievements to Share</h2>
        <p className="text-center px-4 text-white">we take pride in showcasing our accomplishments that reflect our growth and success.<br /> Explore the highlights of our journey and the impact we’ve made so far! </p>

        <section className="flex lg:flex-row flex-col max-md:text-3xl text-4xl text-white md:gap-20 gap-10 items-center justify-center px-6 pt-4 md:pt-6">
          <div className="flex flex-col justify-center">
            <div className='py-2 flex justify-center'>
              <img height={40} width={40} src="./images/staticsIcon/cities.svg" alt="" />
            </div>

            <div className="flex justify-center">
              <Counter MaxNumber={"20"} />
              <span>+</span>
            </div>
            <span className="max-md:text-xl text-xl text-center">Cities</span></div>
          <div className="flex flex-col justify-center">
            <div className='py-2 flex justify-center'>
              <img height={40} width={40} src="./images/staticsIcon/customer.svg" alt="" />
            </div>
            <div className="flex justify-center">
              <Counter MaxNumber={"800"} />
              <span >+</span>
            </div>
            <span className="max-md:text-xl text-xl text-center">Happy Customers</span></div>
          <div className="flex flex-col justify-center">
            <div className='py-2 flex justify-center'>
              <img height={40} width={40} src="./images/staticsIcon/photos.svg" alt="" />
            </div>
            <div className="flex justify-center">
              <Counter MaxNumber={"50000"} />
              <span >+</span>
            </div>
            <span className="max-md:text-xl text-xl text-center">Photos</span></div>
          <div className="flex flex-col justify-center">
            <div className='py-2 flex justify-center'>
              <img height={40} width={40} src="./images/staticsIcon/video.svg" alt="" />
            </div>
            <div className="flex justify-center">
              <Counter MaxNumber={"500"} />
              <span >+</span>
            </div>
            <span className="max-md:text-xl text-xl text-center">Videos</span></div>
        </section></section>
    </section>
  )
}
