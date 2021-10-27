/* eslint-disable jsx-a11y/anchor-is-valid */
import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import logo from "../assets/img/logo.jpg";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white dark:bg-gray-900 shadow relative">
      <div className="container m-auto p-4 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <a href="#">
              <img
                src={logo}
                className="w-8 h-8 rounded-full shadow"
                alt="Logo"
              />
            </a>
          </div>

          {/*-- desktop menubar --*/}
          <div className="hidden md:flex justify-end mt-4 md:mt-0 2xl:mr-20 md:mr-32">
            <div className="flex flex-col md:flex-row md:ml-6">
              <a
                className="nav-class active:text-pink-500 active"
                href="index.html"
                aria-current="page"
              >
                Home
              </a>
              <a className="nav-class dark:text-gray-50" href="portfolio.html">
                Portfolio
              </a>
              <a
                className="btn-primary text-center border-pink-500 text-pink-500 md:ml-6 hover:bg-pink-500 hover:text-white"
                href="#"
              >
                Download CV
              </a>
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
          <div className="flex absolute right-10 md:right-5 top:20">
            <span className="text-xs text-gray-800 dark:text-gray-700 hidden md:block">
              Light
            </span>
            <input id="toggle" type="checkbox" className="hidden" />
            <label
              htmlFor="toggle"
              className="w-9 h-5 mx-2 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer duration-300 ease-in-out dark:bg-gray-600"
            >
              <div className="toggle-dot bg-white dark:text-gray-100 w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out"></div>
            </label>
            <span className="text-xs text-gray-400 dark:text-white hidden md:block">
              Dark
            </span>
          </div>
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
                <a
                  className="nav-class active:text-pink-500 active"
                  href="index.html"
                  aria-current="page"
                >
                  Home
                </a>
                <a
                  className="nav-class dark:text-gray-50"
                  href="portfolio.html"
                >
                  Portfolio
                </a>
                <a
                  className="btn-primary text-center border-pink-500 text-pink-500 md:ml-6 hover:bg-pink-500 hover:text-white"
                  href="#"
                >
                  Download CV
                </a>
              </div>
            </div>
          )}
        </Transition>
      </div>
    </nav>
  );
}
