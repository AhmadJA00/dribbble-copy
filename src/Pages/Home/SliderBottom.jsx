import React from "react";
import test from "../../assets/test.png";

export default function SliderBottom() {
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
    <section className="flex w-max justify-center items-center p-5 gap-8 overflow-hidden py-10 ">
      {data.map((item, index) => {
        return (
          <div key={index} className="relative">
            <div
              className="
                        before:bg-purple-200 before:p-20 before:absolute before:rounded-2xl
                        before:border before:border-2 before:border-light before:bottom-[-5px]
                        before:right-[-5px] before:top-0 before:left-0 before:translate-x-2
                        before:-translate-y-3 before:origin-top-left  before:duration-200 
                       before:hover:rounded-xl
                        before:ease-out before:z-0 
                        before:hover:-translate-y-4 before:hover:translate-x-3"
            >
              <div
                className="before:bg-blue-100 before:p-20 before:absolute before:rounded-2xl
                        before:border before:border-2 before:border-light before:bottom-[-5px]
                        before:right-[-5px] before:top-0 before:left-0 before:translate-x-0
                        before:-translate-y-1 before:origin-top-left before:duration-500
                        before:hover:rounded-xl
                        before:ease-out before:z-0 
                        before:hover:-translate-y-2 before:hover:translate-x-1
                        "
              >
                <div className="rounded-2xl relative  overflow-hidden">
                  <img
                    src={item.img}
                    alt=""
                    className="h-[200px] w-[200px] object-cover bg-pink z-5"
                  />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black text-[12px] text-light px-6 w-full h-20">
                    <p className="">{item.name}</p>
                    <p className="">{item.posation}</p>
                    <div className="flex justify-start items-center my-2 text-[10px] gap-2">
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
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
