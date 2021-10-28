/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useAosAnimation from "../hooks/useAosAnimation";
export default function Social() {
  useAosAnimation();
  return (
    <ul
      className="flex justify-center md:justify-start"
      data-aos="fade-in"
      data-aos-delay="200"
      data-aos-easing="ease-in-out"
    >
      <li>
        <Link
          to={{ pathname: "https://www.facebook.com/mahmudulhasan.fs" }}
          target="_blank"
          className="social-icon  dark:text-white dark:hover:text-blue-800 ml-0.5 hover:text-blue-800 transition duration-75"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </Link>
      </li>
      <li>
        <Link
          to={{ pathname: "https://www.linkedin.com/in/mahmudulhasan12/" }}
          target="_blank"
          className="social-icon dark:text-white dark:hover:text-blue-500 ml-6 hover:text-blue-500 transition duration-75"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </Link>
      </li>
      <li>
        <Link
          to={{ pathname: "https://www.instagram.com/mahasan.xo/" }}
          target="_blank"
          className="social-icon  dark:text-white dark:hover:text-red-600  ml-6 hover:text-red-600 transition duration-75"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </Link>
      </li>
      <li>
        <Link
          to={{ pathname: "https://codepen.io/mhhasan320" }}
          target="_blank"
          className="social-icon dark:hover:text-white  ml-6 hover:text-black dark:text-white transition duration-75"
        >
          <FontAwesomeIcon icon={["fab", "codepen"]} />
        </Link>
      </li>
      <li>
        <Link
          to={{ pathname: "https://github.com/mhasan320" }}
          target="_blank"
          className="social-icon dark:hover:text-white  ml-6 hover:text-black dark:text-white transition duration-75"
        >
          <FontAwesomeIcon icon={["fab", "github"]} />
        </Link>
      </li>
    </ul>
  );
}
