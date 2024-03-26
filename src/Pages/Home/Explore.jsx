import React from "react";
import test from "../../assets/test.png";

const data = [
  {
    name: "Aniea Joth",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    img: "https://cdn.dribbble.com/userupload/13563093/file/original-e1cbdf2f60cdf772fe1f64f29e77ceb1.png?resize=752x564",
    like: 105,
    view: 2,
  },
  {
    name: "Aniea Joth",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    img: "https://cdn.dribbble.com/userupload/13563093/file/original-e1cbdf2f60cdf772fe1f64f29e77ceb1.png?resize=752x564",
    like: 105,
    view: 2,
  },
  {
    name: "Aniea Joth",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    img: "https://cdn.dribbble.com/userupload/13563093/file/original-e1cbdf2f60cdf772fe1f64f29e77ceb1.png?resize=752x564",
    like: 105,
    view: 2,
  },
  {
    name: "Aniea Joth",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    img: "https://cdn.dribbble.com/userupload/13563093/file/original-e1cbdf2f60cdf772fe1f64f29e77ceb1.png?resize=752x564",
    like: 105,
    view: 2,
  },
  {
    name: "Aniea Joth",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    img: "https://cdn.dribbble.com/userupload/13563093/file/original-e1cbdf2f60cdf772fe1f64f29e77ceb1.png?resize=752x564",
    like: 105,
    view: 2,
  },
  {
    name: "Aniea Joth",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    img: "https://cdn.dribbble.com/userupload/13563093/file/original-e1cbdf2f60cdf772fe1f64f29e77ceb1.png?resize=752x564",
    like: 105,
    view: 2,
  },
  {
    name: "Aniea Joth",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    img: "https://cdn.dribbble.com/userupload/13563093/file/original-e1cbdf2f60cdf772fe1f64f29e77ceb1.png?resize=752x564",
    like: 105,
    view: 2,
  },
  {
    name: "Aniea Joth",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    img: "https://cdn.dribbble.com/userupload/13563093/file/original-e1cbdf2f60cdf772fe1f64f29e77ceb1.png?resize=752x564",
    like: 105,
    view: 2,
  },
  {
    name: "Aniea Joth",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    img: "https://cdn.dribbble.com/userupload/13563093/file/original-e1cbdf2f60cdf772fe1f64f29e77ceb1.png?resize=752x564",
    like: 105,
    view: 2,
  },
  {
    name: "Aniea Joth",
    avatar:
      "https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
    img: "https://cdn.dribbble.com/userupload/13563093/file/original-e1cbdf2f60cdf772fe1f64f29e77ceb1.png?resize=752x564",
    like: 105,
    view: 2,
  },
];

export default function Explore() {
  return (
    <section className="p-5 py-10 flex flex-col justify-center items-center gap-10">
      <p className="text-6xl">Explore inspiring designs</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 px-10">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 w-full"
            >
              <div className="w-full">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-80 md:h-60 2xl:h-80 rounded-xl object-cover"
                />
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex flex justify-center items-center gap-3">
                  <div className="avatar">
                    <div className="w-8 rounded-full">
                      <img src={item.avatar} />
                    </div>
                  </div>
                  <p>{item.name}</p>
                  <p className="bg-black/20 px-1 rounded text-sm text-light font-bold">
                    Pro
                  </p>
                </div>
                <div className="flex gap-2 text-black/60">
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-heart-fill fill-black/60 hover:fill-pink-500 duration-200 ease-in-out"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fillRule="evenodd"
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      />
                    </svg>
                    <p>{item.like}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-eye-fill fill-black/60"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
                    </svg>
                    <p>{item.view}k</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <button className="p-3 md:px-5 rounded-full border border-dark text-dark hover:bg-dark hover:border-1 hover:text-light duration-300 ease-in-out">
        Browse more inspiration
      </button>
    </section>
  );
}
