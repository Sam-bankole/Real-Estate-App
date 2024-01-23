import React from "react";
import Hero from "./hero";
import Abt from "./abt";
import "./homepage.css"
import Listing from "./listing";
import Testimony from "./Testinmonials";


export default function Home(){
    return (
        <div className=" home">
            <Hero/>
            <Abt/>
            <Listing/>
            <img src="https://i.im.ge/2024/01/23/YfOOrM.Cyan-Modern-Real-Estate-Blog-Banner.png" alt="" className=" h-80 w-screen mb-8"/>
            <Testimony/>
        </div>
    )
}