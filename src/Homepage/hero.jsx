import React from "react";
import HeroBackground from  '../images/heroBackground.jpg'
import './homepage.css'

export default function Hero() {
  return (
    <div className="Hero relative">
      <div className="Hero-img h-fit">
      <img src={HeroBackground} alt="" className=" h-fit w-screen" />
      </div>
      <div className=" hero-position"></div>
      <div className="hero-info">
        <h1 className=" text-4xl font-bold text-neutral-200 mb-8 drop-shadow-lg">Modern Living, Timeless Excellence</h1>
        <p className="  text-slate-200 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
          voluptate dolorem, minus expedita fuga ea!
        </p>
        <ul className="hero-features uppercase font-semibold text-neutral-200">
            <li>Innovative Design Solutions</li>
            <li>Transparent Transactions</li>
            <li>Community-Centric Approach</li>
            <li>Environmental Sustainability</li>
        </ul>
      </div>
    </div>
  );
}
