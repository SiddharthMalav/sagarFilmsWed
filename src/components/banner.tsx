import React from 'react'

type TBanner = {
  src: string
}
export const Banner = (props: TBanner) => {
  return (
    <section className='h-[70vh] max-sm:h-[30vh]'>
      <img className='h-full w-full object-cover origin-center' src={props.src} alt="" />
    </section>
  )
}
