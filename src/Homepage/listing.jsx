import React, { useEffect, useState } from "react";
import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { PiSquareLogo } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { PiShareFat } from "react-icons/pi";
import { initializeApp } from "'firebase/app'";
import {
  getDatabase,
  ref,
  onValue,
} from "firebase/database";

export default function Listing() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const firebaseConfig = {
      apiKey: "AIzaSyBjw6uBT7UdCYFeOEuse-yP7XmAo4wvWkc",
      authDomain: "real-estate-pro-bdf8b.firebaseapp.com",
      databaseURL:
        "https://real-estate-pro-bdf8b-default-rtdb.europe-west1.firebasedatabase.app",
      projectId: "real-estate-pro-bdf8b",
      storageBucket: "real-estate-pro-bdf8b.appspot.com",
      messagingSenderId: "990812988530",
      appId: "1:990812988530:web:903cc84c1c10ab05a64eeb",
      measurementId: "G-3BE0QXKHFV",
    };

    const app = initializeApp(firebaseConfig);
    const database = getDatabase(app);
    const addedPropertyInDB = ref(database, "Properties");

    const fetchData = () => {
      onValue(addedPropertyInDB, (snapshot) => {
        const propertyData = snapshot.val();

        if (propertyData) {
          const propertyList = Object.values(propertyData);

          setProperties(propertyList);
        }
      });
    };
    fetchData();

    return () => {
      // Unsubscribe from the database changes
    };
  }, []);

  return (
    <div className="invisible-scrollbar mt-8 pl-6 md:pl-3 flex justify-between overflow-x-scroll  mb-11">
      {properties.map((property, index) => (
        <div
          key={index}
          className=" w-72 bg-slate-100 rounded-lg shadow-lg sm:w-72 mr-6"
        >
          <div>
            <div className=" relative">
              <img
                src={property.img}
                alt="House for sale"
                className=" rounded-t-xl h-44 w-72"
              />
              <h5 className=" absolute bottom-0 bg-amber-50/75 px-2 py-1 rounded-e-lg text-sm font-bold">
                ₦{property.price}/{property.subscription}
              </h5>
              <h5 className="absolute bottom-0 right-0 bg-amber-400/75 px-2 py-1 rounded-s-lg text-sm font-bold">
                {property.terms}
              </h5>
            </div>
            <div className=" p-3 w-72">
              <div className=" font-bold">{property.title}</div>
              <div className=" text-sm text-gray-500">{property.location}</div>
              <div className=" mt-2 flex justify-between items-center pb-2 border-b-2 border-amber-400">
                <div className=" flex items-center">
                  <LuBed className=" text-base" />{" "}
                  <div className=" text-xs ml-1">{property.bed} bed</div>
                </div>
                <div className=" mt-2 flex justify-between items-center">
                  <LuBath className=" text-base" />{" "}
                  <div className=" text-xs ml-1">{property.bath} bath</div>
                </div>
                <div className=" mt-2 flex justify-between items-center">
                  <PiSquareLogo className=" text-base" />
                  <div className=" text-xs ml-1">{property.sqft} sqft</div>
                </div>
              </div>
              <div className=" pb-2 flex justify-between items-center mt-3">
                <div className=" flex flex-col items-center">
                  <MdFavoriteBorder />
                  <div className=" text-xs">58</div>
                </div>
                <div className=" flex flex-col items-center">
                  <IoEyeOutline />
                  <div className=" text-xs">233</div>
                </div>
                <div className=" flex flex-col items-center">
                  <PiShareFat />
                  <div className=" text-xs">202</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
