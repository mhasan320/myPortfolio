/* eslint-disable jsx-a11y/anchor-is-valid */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
export default function Social() {
  return (
    <ul className="flex justify-center md:justify-start">
      <li>
        <a
          href="#"
          className="social-icon  dark:text-white dark:hover:text-blue-800 ml-0.5 hover:text-blue-800"
        >
          <FontAwesomeIcon icon={["fab", "facebook"]} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="social-icon dark:text-white dark:hover:text-blue-500 ml-6 hover:text-blue-500"
        >
          <FontAwesomeIcon icon={["fab", "linkedin"]} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="social-icon  dark:text-white dark:hover:text-red-600  ml-6 hover:text-red-600"
        >
          <FontAwesomeIcon icon={["fab", "instagram"]} />
        </a>
      </li>
      <li>
        <a
          href="#"
          className="social-icon dark:hover:text-white  ml-6 hover:text-black dark:text-white"
        >
          <FontAwesomeIcon icon={["fab", "codepen"]} />
        </a>
      </li>
    </ul>
  );
}
