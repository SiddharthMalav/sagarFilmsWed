import React from 'react'

export const TitleWithDescription = (props:TTitleWithDescription) => {
  return (
    <div>  <h2 className="mt-10 mb-8 text-2xl text-center font-bold tracking-tight text-gray-900 sm:text-3xl">{props.title}</h2>
      <p className="lg:pl-4 mb-6 mb-2 text-center w-[70%] m-auto text-gray-500 max-lg:text-center">{props.description}</p>
    </div>
  )
}
type TTitleWithDescription = {
  title:string;
  description : string;
}
