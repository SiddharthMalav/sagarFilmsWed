import { Banner } from '@/components/banner';
import FollowUs from '@/components/followUs';
import { TitleWithDescription } from '@/components/titleWithDescription';
import YouTubeVideo from '@/components/UtubeLinks';
import React from 'react'

export default function WeddingFilms() {

  return (
    <main className="bg-[#faf8f5]">
      <Banner 
        src="/images/0G6A8937j_11zon.jpg" 
        title="WEDDING FILMS" 
        subtitle="CINEMATIC WEDDING STORIES" 
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <TitleWithDescription 
          title="Timeless Love: Capturing Your Wedding Story with Wedding Films" 
          description="Wedding Films captures the essence of love and commitment through beautifully crafted visual stories. Specializing in pre-wedding, wedding, and candid moments, it highlights the emotions, joy, and unique journey of each couple. We ensure every cherished memory is preserved as an unforgettable cinematic experience." 
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <YouTubeVideo videoUrl="https://youtu.be/hdJE6Fo4GBU?si=6rxeiOQ4_nnfv2-3" />
          <YouTubeVideo videoUrl="https://youtu.be/Db3K65gpyEY?si=hP9moTpHu-z8tlIY" />
          <YouTubeVideo videoUrl="https://youtu.be/IKTjnWAc1ww?si=fX3G-b4P0C5H_QQg" />
        </div>
      </section>
      <FollowUs />
    </main>
  );
}
