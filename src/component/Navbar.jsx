import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";

import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className="navbar bg-light px-10 ">
      <div className="flex flex-warp justify-start align-center gap-5 basis-1/2">
        <div className="dropdown dropdown-hover hover:text-black/[0.7] duration-300 ease-in-out">
          <div
            tabIndex={0}
            role="button"
            className="p-3 flex items-center gap-2"
          >
            Find Designers <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-7 shadow bg-base-100 rounded-xl w-64 flex flex-col gap-5"
          >
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm text-dark font-semibold">Designer Search</p>
              <p className="text-xs text-gray">
                Quickly find your next designer
              </p>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm text-dark font-semibold">Poast a Job</p>
              <p className="text-xs text-gray">
                The #1 job board for designer talent
              </p>
            </div>
          </ul>
        </div>
        <Link
          to={"/services"}
          className="hover:text-black/[0.7] duration-300 ease-in-out"
        >
          Our Service
        </Link>
        <div className="dropdown dropdown-hover hover:text-black/[0.7] duration-300 ease-in-out">
          <div
            tabIndex={0}
            role="button"
            className="p-3 flex items-center gap-2"
          >
            Courses <IoIosArrowDown />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-7 shadow bg-base-100 rounded-xl w-72 flex flex-col gap-5"
          >
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm text-dark font-semibold">UX Diploma</p>
              <p className="text-xs text-gray">
                Learn UX design from scratch in 6 months
              </p>
            </div>
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm text-dark font-semibold">UI Certificate</p>
              <p className="text-xs text-gray">
                12-week UI skill building for designers
              </p>
            </div>
            <hr className="border-1 border-gray/40" />
            <div className="flex flex-col justify-start items-start">
              <p className="text-sm text-dark font-semibold">
                Live ineractive workshops
              </p>
              <p className="text-xs text-gray">with design preofessionals</p>
            </div>
          </ul>
        </div>
        <p className="hover:text-black/[0.7] duration-300 ease-in-out">Jobs</p>
        <p className="hover:text-black/[0.7] duration-300 ease-in-out">
          Go Pro
        </p>
      </div>

      <Link to={"/"} className="">
        <img src={logo} alt="" className="w-20 text-center " />
      </Link>

      <div className="flex justify-end itmes-center gap-5 basis-1/2">
        <div className="bg-white p-3 rounded-full flex flex items-center gap-2">
          <CiSearch />

          <input
            type="search"
            className="flex-1 placeholder:text-gray "
            placeholder="Search..."
          />
        </div>
        <p className="font-semibold">Log in</p>
        <p className="p-3 px-6 rounded-full bg-black text-light">Sing up</p>
      </div>
    </section>
  );
}
