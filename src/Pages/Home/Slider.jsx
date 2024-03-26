import React from "react";
import test from "../../assets/test.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function Slider() {
  const data = [
    {
      name: "Ahmed Jihad",
      img: test,
      posation: "UI/UX Designer",
      scales: ["UI", "UX", "Product"],
    },
    {
      name: "Ahmed Jihad",
      img: test,
      posation: "UI/UX Designer",
      scales: ["UI", "UX", "Product"],
    },
    {
      name: "Ahmed Jihad",
      img: test,
      posation: "UI/UX Designer",
      scales: ["UI", "UX", "Product"],
    },
    {
      name: "Ahmed Jihad",
      img: test,
      posation: "UI/UX Designer",
      scales: ["UI", "UX", "Product"],
    },
    {
      name: "Ahmed Jihad",
      img: test,
      posation: "UI/UX Designer",
      scales: ["UI", "UX", "Product"],
    },
    {
      name: "Ahmed Jihad",
      img: test,
      posation: "UI/UX Designer",
      scales: ["UI", "UX", "Product"],
    },
  ];
  return (
    <Swiper
      slidesPerView={4}
      spaceBetween={50}
      centeredSlides={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      // navigation={true}
      // pagination={{
      //   clickable: true,
      // }}
      loop={true}
      modules={[Pagination, Navigation, Autoplay]}
      className="flex w-max justify-center items-center p-5 gap-5 overflow-hidden w-screen select-none"
    >
      {data.map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            className="rounded-[2rem] overflow-hidden relative  "
          >
            <img
              src={item.img}
              alt=""
              className="h-[340px] w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-[12px] text-light px-6 w-full h-20">
              <p className="">{item.name}</p>
              <p className="">{item.posation}</p>
              <div className="flex justify-start items-center my-2 text-[10px] gap-2 ">
                {item.scales.map((scale, index) => {
                  return (
                    <p
                      key={index}
                      className="border border-light/30 p-1 px-2 rounded-full"
                    >
                      {scale}
                    </p>
                  );
                })}
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
