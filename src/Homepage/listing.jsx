/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState, useRef } from "react";
import ReactModal from "react-modal";
import Contactform from "../contactForm";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { LuBed } from "react-icons/lu";
import { LuBath } from "react-icons/lu";
import { PiSquareLogo } from "react-icons/pi";
import { IoIosShareAlt } from "react-icons/io";
import { PiHandTapBold } from "react-icons/pi";
import { MdFavoriteBorder } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { getDatabase, ref, onValue } from "firebase/database";
import app from "../fireBase";

export default function Listing() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    const database = getDatabase(app);
    const addedPropertyInDB = ref(database, "Properties");

    const fetchData = () => {
      onValue(addedPropertyInDB, (snapshot) => {
        const propertyData = snapshot.val();

        if (propertyData) {
          const propertyList = Object.values(propertyData);
          const homeDisplay = propertyList.slice(-8);
          setProperties(homeDisplay);
        }
      });
    };
    fetchData();

    return () => {
      // Unsubscribe from the database changes
    };
  }, []);

  // Carousel

  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  const [selectedProperty, setSelectedProperty] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const reactModalStyle = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)",
    },
    content: {
      margin: "auto",
      padding: "20px",
    },
  };

  return (
    <div>
      <div
        ref={carousel}
        className="invisible-scrollbar gap-3 mt-8 pl-6 md:pl-3 flex justify-between overflow-x-scroll  mb-11 scroll-smooth snap-x snap-mandatory touch-pan-x"
      >
        {properties.map((property, index) => (
          <div
            key={index}
            className="w-72 bg-slate-100 rounded-lg shadow-lg sm:w-72 "
          >
            <div>
              <div className=" relative">
                <img
                  src={property.img[0]}
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
                <div className=" text-sm text-gray-500">
                  {property.location}
                </div>
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
                  <div
                    onClick={() => {
                      openModal();
                      setSelectedProperty(property);
                    }}
                    className=" flex flex-col items-center cursor-pointer"
                  >
                    <PiHandTapBold className="TabGlow" />
                    <div className=" text-xs">Tap Here</div>
                  </div>
                  <div className=" flex flex-col items-center">
                    <MdFavoriteBorder className=" bg-green-500 fill-transparent rounded-xl" />
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    className=" flex flex-col items-center"
                  >
                    <div className=" flex flex-col items-center">
                      <IoIosShareAlt />
                      <div className=" text-xs">share</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className=" flex justify-center items-center mb-5 gap-24">
        <div className=" cursor-pointer text-amber-500 font-extrabold text-5xl">
          <FaArrowAltCircleLeft
            onClick={movePrev}
            disabled={isDisabled("prev")}
          />
        </div>
        <div className=" cursor-pointer text-amber-500 font-extrabold text-5xl">
          <FaArrowAltCircleRight
            onClick={moveNext}
            disabled={isDisabled("next")}
          />
        </div>
      </div>

      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Property Modal"
        style={reactModalStyle}
        ariaHideApp={false}
      >
        {selectedProperty && (
          <div>
            <Carousel
              showArrows={true}
              showThumbs={false}
              autoPlay={true}
              infiniteLoop={true}
              interval={5000}
            >
              {/* <div className=""> */}
              <img
                src={selectedProperty.img[0]}
                alt=""
                className=" w-screen rounded-md shadow-lg react-modal-carosel"
              />
              <img
                src={selectedProperty.img[1]}
                alt=""
                className=" w-screen rounded-md shadow-lg react-modal-carosel"
              />
              <img
                src={selectedProperty.img[2]}
                alt=""
                className=" w-screen rounded-md shadow-lg react-modal-carosel"
              />
              <img
                src={selectedProperty.img[3]}
                alt=""
                className=" w-screen rounded-md shadow-lg react-modal-carosel"
              />
              <img
                src={selectedProperty.img[4]}
                alt=""
                className=" w-screen rounded-md shadow-lg react-modal-carosel"
              />
              {/* </div> */}
            </Carousel>
            <div className=" flex sm:flex-wrap justify-between items-center">
              <h1 className=" font-bold text-3xl 2sm:text-xl sm:text-2xl mb-3">
                {selectedProperty.title}
              </h1>
              <div className="sm:text-lg sm:font-medium font-bold text-2xl">
                ₦{selectedProperty.price}
              </div>
            </div>
            <div className=" mb-3 2sm:text-sm">{selectedProperty.location}</div>
            <div className=" text-amber-600 2sm:text-sm">
              <span>*</span>For {selectedProperty.terms}
            </div>
            {/*  */}
            <div className=" mt-2 mb-3 flex gap-6 items-center pb-2 border-b-2 border-amber-400">
              <div className=" text-lg mt-2 flex items-center">
                <LuBed className=" text-base" />{" "}
                <div className=" text-xs ml-1">{selectedProperty.bed} bed</div>
              </div>
              <div className=" mt-2 flex justify-between items-center">
                <LuBath className=" text-base" />{" "}
                <div className=" text-xs ml-1">
                  {selectedProperty.bath} bath
                </div>
              </div>
              <div className=" mt-2 flex justify-between items-center">
                <PiSquareLogo className=" text-base" />
                <div className=" text-xs ml-1">
                  {selectedProperty.sqft} sqft
                </div>
              </div>
            </div>
            {/*  */}
            <div className=" flex gap-5 md:flex-wrap md:justify-center">
              <div className=" flex-grow">
                <div className=" pt-4 mb-12 md:w-96 2sm:w-60 sm:w-72 2xsm:w-56">
                  <div className=" font-semibold text-lg mb-3 2sm:text-base">
                    Property Description
                  </div>
                  <pre className=" font-sans mb-3 2sm:text-sm w-4/5 md:w-full md:whitespace-pre-line whitespace-pre-wrap">
                    {selectedProperty.despt}
                  </pre>
                </div>
                <div className=" mb-12">
                  <div className=" font-semibold text-lg 2sm:text-base">
                    Map Location
                  </div>
                  <div className=" h-72 w-4/5 md:w-full border-2 rounded-md">
                    <iframe
                      title="Map"
                      src={selectedProperty.googleMap}
                      width="100%"
                      height="100%"
                      frameBorder={0}
                      allowFullScreen=""
                      loading="lazy"
                      referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
                <div className=" mb-12">
                  <div className=" font-semibold text-lg 2sm:text-base">
                    Evironmental Tour
                  </div>
                  <div className=" h-72 w-4/5 md:w-full border-2 rounded-md">
                    <iframe
                      title="Environmental Tour"
                      className="ku-embed"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="xr-spatial-tracking; gyroscope; accelerometer"
                      allowFullScreen
                      scrolling="no"
                      src={selectedProperty.exterior}
                    ></iframe>
                  </div>
                </div>
                <div className=" mb-12">
                  <div className=" font-semibold text-lg 2sm:text-base">
                    Building Virtual Tour
                  </div>
                  <div className=" h-72 w-4/5 md:w-full border-2 rounded-md">
                    <iframe
                      title="Building Tour"
                      className="ku-embed"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      allow="xr-spatial-tracking; gyroscope; accelerometer"
                      allowFullScreen
                      scrolling="no"
                      src={selectedProperty.interior}
                    ></iframe>
                  </div>
                </div>
              </div>
              <div>
                <Contactform />
              </div>
            </div>

            <button
              onClick={closeModal}
              className=" bg-red-600 rounded-lg active:bg-red-400 hover:bg-red-400 px-3 py-2 text-white font-semibold fixed top-20 right-1 z-10"
            >
              X <span className=" md:hidden">close</span>{" "}
            </button>
          </div>
        )}
      </ReactModal>
    </div>
  );
}
