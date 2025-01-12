import AboutUs from "@/components/aboutUs";
import CarouselComponent from "@/components/carousel"
import ContactUs from "@/components/contactUs";
import FollowUs from "@/components/followUs";
import OurServices from "@/components/ourServices";
// import { Reviews } from "@/components/reviews";
import { CompanyStatics } from "@/components/statics";
import WhatWeProvide from "@/components/whatWeProvide";
import { WhyChooseUs } from "@/components/whyChooseUs";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <WhatWeProvide />
      <OurServices />
      <AboutUs />
      <CompanyStatics />
      <WhyChooseUs/>
      {/* <Reviews/> */}
      <ContactUs />
      <FollowUs />
    </>
  );
}
