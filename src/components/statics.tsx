import React from 'react'
import Counter from './counter'

export const CompanyStatics = () => {
  return (
    <section className="flex lg:flex-row flex-col text-6xl bg-gray-900 text-white md:gap-20 gap-10 items-center justify-center px-6 py-6 md:py-8">
      <div className="flex flex-col justify-center"> <div className="flex justify-center">
        <Counter MaxNumber={"20"} />
        <span>+</span>
      </div>
        <span className="text-2xl text-center">Cities</span></div>
      <div className="flex flex-col justify-center"> <div className="flex justify-center">
        <Counter MaxNumber={"800"} />
        <span >+</span>
      </div>
        <span className="text-2xl text-center">Happy Customers</span></div>
      <div className="flex flex-col justify-center"> <div className="flex justify-center">
        <Counter MaxNumber={"50000"} />
        <span >+</span>
      </div>
        <span className="text-2xl text-center">Photos</span></div>
      <div className="flex flex-col justify-center"> <div className="flex justify-center">
        <Counter MaxNumber={"500"} />
        <span >+</span>
      </div>
        <span className="text-2xl text-center">Videos</span></div>
    </section>
  )
}
