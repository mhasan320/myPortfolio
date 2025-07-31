/* eslint-disable jsx-a11y/anchor-is-valid */
import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/img/logo.jpg";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <nav className="bg-white dark:bg-gray-900 shadow relative transition duration-75">
      <div className="container m-auto p-4 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <Link to="/">
              <img
                src={logo}
                className="w-8 h-8 rounded-full shadow"
                alt="Logo"
              />
            </Link>
          </div>

          {/*-- desktop menubar --*/}
          <div className="hidden md:flex justify-end mt-4 md:mt-0 md:mr-32 2xl:mr-0">
            <div className="flex flex-col md:flex-row md:ml-6">
              <li
                className={`nav-class list-none ${
                  splitLocation[1] === "" ? "active" : ""
                }`}
              >
                <Link to="/"> Home </Link>
              </li>
              {/* <li
                className={`nav-class list-none ${
                  splitLocation[1] === "PortfolioPage" ? "active" : ""
                }`}
              >
                <Link className="" to="/PortfolioPage">
                  Portfolio
                </Link>
              </li> */}
              <Link
                className="btn-primary text-center border-pink-500 text-pink-500 md:ml-6 hover:bg-pink-500 hover:text-white"
                to={{
                  pathname:
                    "https://drive.google.com/file/d/1z3Tl_YxxcaKwKtgU9svBlBg3JfRmtmvI/view?usp=sharing",
                }}
                target="_blank"
              >
                Download CV
              </Link>
            </div>
          </div>

          {/*-- mobile menu  --*/}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen((isOpen) => !isOpen)}
              type="button"
              className="text-gray-300 hover:text-gray-500 focus:outline-none focus:text-gray-500"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/*-- dark theme toggle --*/}
          <DarkModeToggle />
        </div>

        {/*--  menu item, if menu set to hidden --*/}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:flex items-center mt-4 md:mt-0">
              <div ref={ref} className="flex flex-col md:flex-row md:ml-6">
                <Link className="nav-class" to="/" aria-current="page">
                  Home
                </Link>
                <Link
                  className="nav-class dark:text-gray-50 transition duration-75"
                  to="/PortfolioPage"
                >
                  Portfolio
                </Link>
                <Link
                  className="btn-primary text-center border-pink-500 text-pink-500 md:ml-6 hover:bg-pink-500 hover:text-white"
                  to={{
                    pathname:
                      "https://me.mhasan.acumenits.com/wp-content/uploads/2021/10/Mahmudul-Hasan.pdf",
                  }}
                >
                  Download CV
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  );
}
