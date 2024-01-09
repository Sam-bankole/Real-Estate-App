import React from "react";
import curve from "../images/curve.png";
import human from "../images/human.png";
import { IoMdCheckmarkCircle } from "react-icons/io";

export default function Abt() {
  return (
    <div className=" pt-8">
      <div className=" relative">
        <h2 className=" text-center text-3xl font-bold text-slate-800 drop-shadow-md font-serif md:text-2xl">
          Unveiling Dreams, Crafting Destinies
        </h2>
        <h6 className=" text-center mt-6 mb-6 text-slate-800 md:text-xs">
          Elevate Your Living Experience with [Company Name]
        </h6>
        <div className=" flex border-y-4 items-center">
          <div>
            <p className=" mb-6 pl-8">
              Welcome to [Company Name], where we transform aspirations into
              addressable realities. As a leading real estate company, we take
              pride in creating not just homes but lifestyles that resonate with
              elegance, sustainability, and community.
            </p>
            <ul className="ml-8 my-8">
              <li className=" flex items-center mb-4 font-semibold"><IoMdCheckmarkCircle />Transparency and Integrity</li>
              <li className=" flex items-center mb-4 font-semibold"><IoMdCheckmarkCircle />Uniquness and Satisfaction</li>
              <li className=" flex items-center mb-4 font-semibold"><IoMdCheckmarkCircle />Innovative Design and Quality Construction</li>
              <li className=" flex items-center mb-4 font-semibold"><IoMdCheckmarkCircle />Reliable Guide</li>
              <li className=" flex items-center mb-4 font-semibold"><IoMdCheckmarkCircle />Strong Network and Relationships</li>
            </ul>
            <button className=" ml-6 rounded-md bg-amber-500 px-5 py-4 text-slate-200 text-lg md:text-base font-bold active:bg-amber-100 cursor-none">Contact Us Now</button>
          </div>
          <div className=" relative md:w-11/12">
            <img src={curve} alt="" className="curve" />
            <img src={human} alt="" className="human md:h-2/3 sm:h-2/6" />
          </div>
        </div>
      </div>
      <div className="p-8 sm:p-3">
        <h4 className=" font-semibold text-xl mb-6">Our Services</h4>
        <ul className=" flex justify-between item-center 2sm:flex-wrap">
          <li className=" w-40 h-40 flex justify-center items-center text-center bg-amber-500 rounded-full font-semibold p-2 shadow-md text-slate-100 sm:text-xs sm:h-20 sm:w-20 sm:p-5">
            Innovative Design Solutions
          </li>
          <li className="w-40 h-40 flex justify-center items-center text-center bg-amber-500 rounded-full font-semibold p-2 shadow-md text-slate-100 sm:text-xs sm:h-20 sm:w-20 sm:p-5">
            Transparent Transactions
          </li>
          <li className="w-40 h-40 flex justify-center items-center text-center bg-amber-500 rounded-full font-semibold p-2 shadow-md text-slate-100 sm:text-xs sm:h-20 sm:w-20 sm:p-5">
            Community Building
          </li>
          <li className="w-40 h-40 flex justify-center items-center text-center bg-amber-500 rounded-full font-semibold p-2 shadow-md text-slate-100 sm:text-xs sm:h-20 sm:w-20 sm:p-5">
            Sustainable Living Spaces
          </li>
        </ul>
      </div>
      <div className=" mt-7 p-8 sm:p-3 flex items-center justify-between">
        <div className=" text-center">
          <div className=" font-extrabold sm:font-semibold sm:text-xs sm:mb-3">HAPPY CLIENTS</div>
          <div className=" text-6xl text-amber-600 font-semibold sm:text-4xl">25k</div>
        </div>
        <div className=" text-center">
          <div className=" font-extrabold sm:font-semibold sm:text-xs sm:mb-3">PROPERTIES SOLD</div>
          <div className=" text-6xl text-amber-600 font-semibold sm:text-4xl">11k</div>
        </div>
        <div className=" text-center">
          <div className=" font-extrabold sm:font-semibold sm:text-xs sm:mb-3">OWNED ESTATE</div>
          <div className=" text-6xl text-amber-600 font-semibold sm:text-4xl">101</div>
        </div>
        <div className=" text-center">
          <div className=" font-extrabold sm:font-semibold sm:text-xs sm:mb-3">PROMISED RESULT</div>
          <div className=" text-6xl text-amber-600 font-semibold sm:text-4xl">100%</div>
        </div>
      </div>
    </div>
  );
}
