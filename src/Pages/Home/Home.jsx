import React from "react";
import Slider from "./Slider";
import SliderBottom from "./SliderBottom";
import Explore from "./Explore";
import NextDesigner from "./NextDesigner";
export default function Home() {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col justify-center items-center gap-5 p-5 py-10">
        <div className="p-2 px-4 bg-animated rounded-full">
          <p>Over 3 million ready-to-work creatives!</p>
        </div>
        <div className="flex flex-col items-center gap-5">
          <p className="text-6xl Serif4 text-center">
            The world’s destination <br /> for design
          </p>
          <p>
            Get inspired by the work of millions of top-rated designers &
            agencies around the world.
          </p>
          <p className="p-4 px-6 rounded-full bg-black text-light">
            Get Started
          </p>
        </div>
      </div>
      <Slider />
      <Explore />
      <NextDesigner />
      <SliderBottom />
    </section>
  );
}
