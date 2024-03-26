import React from "react";

export default function nextDesigner() {
  return (
    <section className="w-screen h-max bg-cYellow flex flex-col justify-between items-center p-10 lg:p-20 lg:px-96 text-center gap-8">
      <p className="text-6xl Serif4 ">
        Find your next <br /> designer today
      </p>
      <p className="text-xl ">
        The world’s leading brands use Dribbble to hire creative talent. Browse
        millions of top-rated portfolios to find your perfect creative match.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <button className="p-3 md:px-5 rounded-full bg-dark text-light ">
          Get Started Now
        </button>
        <button className="p-3 md:px-5 rounded-full bg-light text-dark ">
          Learn about hiring
        </button>
      </div>
      <div>
        <p>
          Are you a designer?{" "}
          <a href="" className="underline decoration-1">
            Join Dribbble
          </a>
        </p>
      </div>
    </section>
  );
}
