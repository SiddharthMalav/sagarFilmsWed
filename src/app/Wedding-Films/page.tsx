import { Banner } from '@/components/banner';
import FollowUs from '@/components/followUs';
import { TitleWithDescription } from '@/components/titleWithDescription';
import YouTubeVideo from '@/components/UtubeLinks';
import React from 'react'

export default function WeddingFilms() {

  return (
    <section className="pt-[64px]">
      <Banner src={"/images/IMG_9412_11zon.jpg"} />
      <section className='mx-auto lg:max-w-7xl max-w-2xl items-center px-4 sm:px-6 lg:px-8'>
      <TitleWithDescription title={'Timeless Love: Capturing Your Wedding Story with Wedding Films'} description={`Wedding Films captures the essence of love and commitment through beautifully crafted visual stories. Specializing in pre-wedding, wedding, and candid moments, it highlights the emotions, joy, and unique journey of each couple. With a blend of creativity and precision, WeddingFilms ensures every cherished memory is preserved, turning your special day into an unforgettable cinematic experience.`} />
      <section className='flex flex-wrap justify-center gap-2 p-2'>
        <YouTubeVideo videoUrl={"https://youtu.be/hdJE6Fo4GBU?si=6rxeiOQ4_nnfv2-3"} />
        <YouTubeVideo videoUrl={"https://youtu.be/Db3K65gpyEY?si=hP9moTpHu-z8tlIY"} />
        <YouTubeVideo videoUrl={"https://youtu.be/IKTjnWAc1ww?si=fX3G-b4P0C5H_QQg"} />
      </section>
      </section> 
      <FollowUs />
    </section>
  );
}
