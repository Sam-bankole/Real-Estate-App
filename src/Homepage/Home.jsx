import React from "react";
import Hero from "./hero";
import Abt from "./abt";
import "./homepage.css"
import Listing from "./listing";

export default function Home(){
    return (
        <div className=" home">
            <Hero/>
            <Abt/>
            <Listing/>
        </div>
    )
}