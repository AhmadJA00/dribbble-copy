import React from "react";
import logo from "../../assets/logo.png";
import img1 from "../../assets/img1.png";

export default function Shots() {
  return (
    <section className="py-5 lg:py-10 flex flex-col items-center gap-10 lg:max-w-[1400px] mx-auto ">
      <div className="flex flex-col justify-center items-start lg:px-40 gap-7">
        <p className="font-bold text-xl lg:text-2xl px-5 ">
          Software Development Company
        </p>
        <div className="w-full sticky top-[-4px]">
          <div
            className="flex justify-between items-center w-full  bg-light p-3 px-5 z-5
            // before:content-[''] before:absolute before:top-0 before:left-[50%] before:w-screen before:h-full
            // before:-translate-x-2/4 before:duration-300 before:ease-in-out before:bg-light
          "
          >
            <div className="flex justify-center relative itmes-center gap-3">
              <div className="avatar relative">
                <div className="w-8 md:w-12 rounded-full ">
                  <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
                <div className="avatar absolute bottom-[-6px] right-[-6px] md:bottom-[-8px] md:right-[-8px]">
                  <div className="w-4 md:w-6 rounded-full border border-2 border-light bg-light p-[2px]">
                    <img src={logo} className="" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs md:text-sm font-bold">
                  Ahmed Jihad <span className="font-normal">for</span> TechEye
                  Company
                </p>
                <div className="flex itmes-start justify-start gap-2 text-xs">
                  <p className="text-green-500">Available for work</p>
                  <div className="tooltip" data-tip="Ahmed Jihad">
                    <p className="text-gray hidden md:block">Follow</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center gap-3">
              <div className="border border-1 border-gray/70 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-heart hover:fill-pink-700 duration-300 ease-in-out"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                </svg>
              </div>
              <div className="border border-1 border-gray/70 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-floppy hover:fill-blue-700 duration-300 ease-in-out"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 2H9v3h2z" />
                  <path d="M1.5 0h11.586a1.5 1.5 0 0 1 1.06.44l1.415 1.414A1.5 1.5 0 0 1 16 2.914V14.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5v-13A1.5 1.5 0 0 1 1.5 0M1 1.5v13a.5.5 0 0 0 .5.5H2v-4.5A1.5 1.5 0 0 1 3.5 9h9a1.5 1.5 0 0 1 1.5 1.5V15h.5a.5.5 0 0 0 .5-.5V2.914a.5.5 0 0 0-.146-.353l-1.415-1.415A.5.5 0 0 0 13.086 1H13v4.5A1.5 1.5 0 0 1 11.5 7h-7A1.5 1.5 0 0 1 3 5.5V1H1.5a.5.5 0 0 0-.5.5m3 4a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5V1H4zM3 15h10v-4.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5z" />
                </svg>
              </div>
              <div className="bg-black rounded-full p-2 block md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill="currentColor"
                  className="bi bi-envelope fill-light"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
              </div>
              <p className="p-2 px-5 rounded-full bg-black text-light hidden md:block">
                Get in touch
              </p>
            </div>
          </div>
        </div>
        <div className="md:px-5 lg:place-self-center w-full">
          <img className=" md:rounded-lg w-full" src={img1} alt="" />
        </div>
      </div>

      <div className="p-5 text-xl flex flex-col ">
        <p className="text-center text-2xl font-bold underline underline-offset-8 decoration-pink-400">
          Download Template Here
        </p>
        <p className="mt-10">Hello Dribbble! 👋</p>
        <p className="mt-10">
          This is our latest website design exploration for a software house or
          IT solutions.
        </p>
        <p className="mt-10">Do you have a project in mind? </p>
        <p className="italic">Let's get in touch!</p>
        <p>---</p>
        <p className="text-md mt-1">
          Email:{" "}
          <span className="underline underline-offset-8 decoration-pink-400">
            hello@peterdraw.co
          </span>
        </p>
        <p className="text-md mt-1">
          Website:{" "}
          <span className="underline underline-offset-8 decoration-pink-400">
            peterdraw.co
          </span>
        </p>
        <p className="text-md mt-1">
          Instagram:{" "}
          <span className="underline underline-offset-8 decoration-pink-400">
            @peterdraw.co{" "}
          </span>
        </p>
      </div>
      <div className="p-5 w-full flex flex-col justify-center itmes-center gap-5 text-center px-28">
        <div className="divider">
          <img src={logo} alt="" className="w-20" />
        </div>
        <div className="flex flex-col justify-center itesm-center gap-3">
          <p className="text-xl">TechEye Company</p>
          <p className="text-sm">
            Visualize your incredible ideas through exceptional designs!
          </p>
          <p className="p-2 px-5 rounded-full bg-black text-light w-max mx-auto">
            Get in touch
          </p>
        </div>
        <div>
          <div className="flex justify-between lg:mt-10">
            <p className="font-bold">More by TechEye Compnay</p>
            <p>View Profile</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-5 ">
            <img
              className="rounded-xl"
              src="https://cdn.dribbble.com/userupload/7565561/file/original-803a3e5842440d7c771ef9c2b7f50f51.png?resize=1200x900&vertical=center"
              alt=""
            />
            <img
              className="rounded-xl"
              src="https://cdn.dribbble.com/userupload/6837033/file/original-18a83a0741fc6201b8535210f27064ba.png?resize=400x300&vertical=center"
              alt=""
            />
            <img
              className="rounded-xl"
              src="https://cdn.dribbble.com/userupload/6704546/file/original-84dae1a67ae62346558bac94f6ae9886.png?resize=400x300&vertical=center"
              alt=""
            />
            <img
              className="rounded-xl"
              src="https://cdn.dribbble.com/userupload/6533822/file/original-7f134615a58be4c3fd2eec55e28bfd56.png?resize=400x300&vertical=center"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
