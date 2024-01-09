/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./homepage.css";
import logo from "../icons/RealEstateLogo.png";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const headerHeight = 150;
  const threshold = 70;

  const handleScroll = () => {
    setScrollPosition(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const headerStyle = {
    backgroundColor:
      scrollPosition > headerHeight ? "rgba(24,27,49,0.55)" : "#423b45",
    WebkitBackdropFilter: "blur(10px)",
    backdropFilter: "blur(10px)",
    borderBottom: "1px solid rgba(15, 17, 43, 0.796)",
    position: scrollPosition > threshold ? "fixed" : "static",
    top: 0,
    width: "100%",
    transition: "background-color 0.5s ease, position 0.5s ease",
    zIndex: "99999"
  };

  return (
    <div className="Header" style={headerStyle}>
      <div className=" flex items-center justify-between p-3">
        <img src={logo} alt="" className=" w-12 flex-none h-11" />
        <div className=" w-6/12 md:hidden">
          <ul className=" flex justify-between items-center font-bold text-slate-50">
            <li>
              <Link to="/" className=" hover:border-b-2 border-amber-400">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/about" className=" hover:border-b-2 border-amber-400">
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                to="/listing"
                className=" hover:border-b-2 border-amber-400"
              >
                LISTINGS
              </Link>
            </li>
            <li>
              <Link to="/blog" className=" hover:border-b-2 border-amber-400">
                BLOG
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className=" hover:border-b-2 border-amber-400"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
        <div className=" flex-none w-11 text-center justify-self-center text-amber-500 md:hidden cursor-pointer">
          <FaPhoneAlt />
        </div>
        <div className="hidden md:block flex-none mr-4" onClick={toggleMenu}>
          <div className="background">
            <button
              // class="menu__icon cursor-none"
              className={`menu__icon cursor-none menu__icon ${isMenuOpen ? "active" : ""}` }
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="menu-overlay">
            <div className="menu-container h-96 flex flex-col justify-between">
              <ul className=" font-bold text-center flex flex-col text-slate-100">
                <li className=" border-b-2 p-4 border-slate-400">
                  <Link to="/" className=" hover:border-b-2 border-amber-400">
                    HOME
                  </Link>
                </li>
                <li className=" border-b-2 p-4 border-slate-400">
                  <Link
                    to="/about"
                    className=" hover:border-b-2 border-amber-400"
                  >
                    ABOUT
                  </Link>
                </li>
                <li className=" border-b-2 p-4 border-slate-400">
                  <Link
                    to="/listing"
                    className=" hover:border-b-2 border-amber-400"
                  >
                    LISTINGS
                  </Link>
                </li>
                <li className=" border-b-2 p-4 border-slate-400">
                  <Link
                    to="/blog"
                    className=" hover:border-b-2 border-amber-400"
                  >
                    BLOG
                  </Link>
                </li>
                <li className=" border-b-2 p-4 border-slate-400">
                  <Link
                    to="/contact"
                    className=" hover:border-b-2 border-amber-400"
                  >
                    CONTACT
                  </Link>
                </li>
              </ul>
              <div className=" text-amber-500 mb-7 ml-3 cursor-pointer">
                <FaPhoneAlt className="w-12 h-8" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
