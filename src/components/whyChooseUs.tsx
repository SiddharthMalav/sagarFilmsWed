import React from 'react'

export const WhyChooseUs = () => {
  return (
    <div className="bg-[radial-gradient(circle,_rgba(212,178,211,0.4767156862745098)_0%,_rgba(174,238,235,1)_100%)]">
      <div className="mx-auto lg:max-w-7xl lg:grid-cols-[40%,60%]  max-w-2xl items-center px-4 sm:px-6 lg:px-8 grid  grid-cols-1  gap-x-8 gap-y-16  py-24  sm:py-32  lg:grid-cols-2 ">
        <div>
          <h2 className="max-lg:text-center text-3xl pb-4 font-bold tracking-tight text-gray-900 sm:text-4xl">Why Choose Us?</h2>
          <p className="text-sm text-gray-600 pt-2 pb-4">At Sagar Films, we believe that every wedding is a story waiting to be told, and we are here to capture those precious moments with love, precision, and expertise. Here are a few reasons why couples choose us for their special day.
          </p>
          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <img src="/images/0I1A9668_11zon.jpg" className=" rounded-lg bg-gray-100" />
            <img src="/images/IMG_9406_11zon.jpg" className=" rounded-lg bg-gray-100" />
            <img src="/images/IMG_9401_11zon.jpg" className=" rounded-lg bg-gray-100" />
            <img src="/images/0G6A8779-2_11zon.jpg" className="  rounded-lg bg-gray-100" />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 grid-rows-2 sm:grid-cols-2 sm:grid-rows-1  gap-6">
            <div>
              <div className='inline-block shadow-lg rounded-lg p-4 text-2xl font-bold italic bg-white text-cyan-500'>01</div>
              <h2 className="my-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Experienced Photographers</h2>
              <p className="text-sm text-gray-600 ">With years of experience in wedding photography, our team knows how to capture the most meaningful moments with precision and artistry.</p>
            </div>
            <div>
              <div className='inline-block shadow-lg rounded-lg p-4 text-2xl font-bold italic bg-white text-cyan-500'>02</div>
              <h2 className="my-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Tailored Approach</h2>
              <p className="text-sm text-gray-600 ">Every couple is different, and so is every wedding. We work closely with you to understand your vision and tailor our approach to suit your unique style.
              </p>
            </div>
            <div>
              <div className='inline-block shadow-lg rounded-lg p-4 text-2xl font-bold italic bg-white text-cyan-500'>03</div>
              <h2 className="my-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">High-Quality Equipment
              </h2>
              <p className="text-sm text-gray-600 ">We use the latest in photography and videography equipment to ensure your memories are preserved in the highest quality.
              </p>
            </div>
            <div>
              <div className='inline-block shadow-lg rounded-lg p-4 text-2xl font-bold italic bg-white text-cyan-500'>04</div>
              <h2 className="my-2 text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Passionate Storytellers</h2>
              <p className="text-sm text-gray-600 ">We don’t just take photos; we tell your love story. Our goal is to create an emotional connection through every image we capture.</p>
            </div>
          </div>
        </div>
      </div>
    </div>)
}
