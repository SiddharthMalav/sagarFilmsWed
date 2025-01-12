import React from 'react'

const AboutUs = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto lg:max-w-7xl max-w-2xl items-center px-4 sm:px-6 lg:px-8 grid  grid-cols-1  gap-x-8 gap-y-16  py-24  sm:py-32  lg:grid-cols-2 ">
        <div>
          <h2 className="max-lg:text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About Us – Sagar Films</h2>
          <p className="mt-4 text-gray-500">Welcome to Sagar Films, where we capture your love story in the most magical and unforgettable way. We are a passionate team of wedding photographers and cinematographers dedicated to preserving your special moments through beautiful imagery and creative storytelling.</p>
          <p className="mt-4 text-gray-500">At Sagar Films, we understand that your wedding day is one of the most significant moments of your life. It’s filled with love, emotions, and timeless memories that deserve to be captured in their truest form. Whether it’s the intimate smile shared between you and your partner, the joy of your family, or the grandeur of your celebration, we believe every moment should be immortalized.</p>
          <p className="mt-4 text-gray-500">With years of experience in the wedding industry, we specialize in both traditional and contemporary wedding photography. From candid shots that capture the raw emotions to cinematic wedding films that narrate the entire journey of your day, we ensure that each frame is a work of art. We take a personalized approach to every wedding, working closely with couples to understand their vision and style.</p>
          <p className="mt-4 text-gray-500">Our team is not just about taking photos – we are storytellers. We strive to capture not just the moments but the feelings that make those moments extraordinary. We blend creativity with professionalism, ensuring every detail is beautifully documented and every memory preserved for years to come.</p>
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