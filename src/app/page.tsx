import AboutUs from "@/components/aboutUs";
import CarouselComponent from "@/components/carousel"
import ContactUs from "@/components/contactUs";
import FollowUs from "@/components/followUs";
import { CompanyStatics } from "@/components/statics";
import WhatWeProvide from "@/components/whatWeProvide";

export default function Home() {
  return (
    <>
      <CarouselComponent />
      <WhatWeProvide />
      <AboutUs />
      <CompanyStatics />
      <ContactUs />
      <FollowUs />
    </>
  );
}
