"use client"
import Carousel, { ResponsiveType } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

type TMultiCrousal = {
  items: React.ReactNode[]; // Array of React nodes
  responsive: ResponsiveType; // Dynamic responsive settings
};
export default function MultiCrousal(props: TMultiCrousal) {
  return (
    <Carousel itemClass="p-2" responsive={props.responsive}>
      {props.items}
    </Carousel>
  )
}
