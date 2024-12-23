import React from 'react'

export default function WhatWeProvide() {
  return (
    <div className="mx-auto lg:max-w-7xl max-w-2xl items-center px-4 sm:px-6 lg:px-8 grid  gap-x-8 gap-t-16  pt-24  sm:pt-32 ">
      <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">What We Provide</h2>
      <div className="font-serif mt-4 grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <div>
          <img src="/images/0I1A9668_11zon.jpg" className="rounded-lg bg-gray-100" />
          <h2 className="mt-2 text-center text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Golden Hour Vows
          </h2>
        </div>
        <div>
          <img src="/images/IMG_9406_11zon.jpg" className="rounded-lg bg-gray-100" />
          <h2 className="mt-2 text-center text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Journey to Forever</h2>
        </div>
        <div>
          <img src="/images/IMG_9401_11zon.jpg" className="rounded-lg bg-gray-100" />
          <h2 className="mt-2 text-center text-xl font-semibold tracking-tight text-gray-900 sm:text-2xl">Candid Charm</h2>
        </div> </div>
    </div>)
}
