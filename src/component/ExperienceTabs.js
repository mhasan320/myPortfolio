/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-target-blank */
import { Tab } from "@headlessui/react";
import { Link } from "react-router-dom";
import Progressbar from "./Progressbar";

export default function ExperienceTabs() {
  return (
    <div className="pt-16 mx-2 md:mx-0">
      <Tab.Group>
        <div className="pb-10">
          <Tab.List>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-pink-500 border-pink-500 rounded text-white cursor-pointer border-2 inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0 mr-5"
                  : "text-pink-500 border-pink-500 rounded cursor-pointer border-2 inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0 mr-5"
              }
            >
              Experience
            </Tab>
            <Tab
              className={({ selected }) =>
                selected
                  ? "bg-pink-500 border-pink-500 rounded text-white cursor-pointer border-2 inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0"
                  : "text-pink-500 border-pink-500 rounded cursor-pointer border-2  inline-block py-2 px-4 font-semibold  mb-4 sm:mb-0"
              }
            >
              Education & Skills
            </Tab>
          </Tab.List>
        </div>
        <Tab.Panels>
         
          <Tab.Panel>
            <div className="gridLayout">
              <div
                className="col-span-1 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-4 md:p-8 mb-4 lg:mb-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h2 className="text-lg font-semibold">Front-end Developer</h2>
                <h4 className="text-sm italic mb-2">Full Time | Remote</h4>
                <h3 className=" mb-3 text-gray-500">2017 - Present</h3>
                <hr className="dark:border-gray-600" />
                <span className="tab-title text-purple-500 hover:bg-purple-500 hover:text-white transition-all md:mb-5 md:inline-block mt-5 dark:bg-gray-600 dark:text-white dark:hover:bg-purple-500 dark:hover:text-white">
                  <Link
                    target="_blank"
                    to={{ pathname: "https://eunoiaits.com/" }}
                  >
                    Eunoia I.T Solutions
                  </Link>
                </span>
                <p className="mb-4 text-sm">Responsibilities : </p>
                <ul className="list-disc pl-4 text-sm leading-7">
                  <li>
                    Working closely with designers and working to bridge the gap between engineering and design teams.
                  </li>
                  <li>
                    Developed many professional websites with HTML5, CSS3, JavaScript & jQuery.
                  </li>
                  <li>Helped backend team to build fully functional websites.</li>
                  <li>
                    Designed and developed some informative websites with various WordPress themes.
                  </li>
                </ul>
              </div>
              <div
                className="col-span-2 bg-white dark:bg-gray-900 dark:text-white rounded-lg shadow-lg p-4 md:p-8 md:mb-0 "
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h2 className="text-lg font-semibold">Front-end Developer</h2>
                <h4 className="text-sm italic mb-2">Part Time | Remote</h4>
                <h3 className=" mb-3 text-gray-500">2016 - 2020</h3>
                <hr />
                <span className="tab-title text-purple-500 hover:bg-purple-500 hover:text-white transition-all md:mb-5 md:inline-block mt-5 dark:bg-gray-600 dark:text-white dark:hover:bg-purple-500">
                  <Link
                    to={{
                      pathname:
                        "https://www.upwork.com/freelancers/~01e280a2acdda918e9",
                    }}
                    target="_blank"
                  >
                    Upwork
                  </Link>
                </span>
                <p className="mb-4 text-sm">
                  I was doing Freelancing as Front-end Developer for the last 6
                  years.{" "}
                </p>
                <ul className="list-disc pl-4 leading-7 text-sm">
                  <li>Successfully completed 17 Jobs with 5-StarRatings.</li>
                </ul>
              </div>
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="gridLayout">
              <div
                className="col-span-2 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 md:p-8 mb-4 lg:mb-0"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <span className="tab-title md:mb-16 md:inline-block dark:bg-gray-700 dark:text-white text-gray-700">
                  Education
                </span>
                <div className="single-section border-b dark:text-white dark:border-gray-600">
                  <h2 className="text-lg font-semibold">BSC in CSE</h2>
                  <h4>
                    Dhaka International University
                    <span className="text-gray-400 text-sm">
                      - Dhaka, Bangladesh
                    </span>
                  </h4>
                  <p>2016-2020</p>
                </div>
                <div className="single-section border-b dark:text-white dark:border-gray-600">
                  <h2 className="text-lg font-semibold">Diploma in CSE</h2>
                  <h4>
                    Cumilla Polytechnic Institute
                    <span className="text-gray-400 text-sm">
                      - Cumilla, Bangladesh
                    </span>
                  </h4>
                  <p>2011-2015</p>
                </div>
                <div className="single-section dark:text-white">
                  <h2 className="text-lg font-semibold">SSC</h2>
                  <h4>
                    Madartek Abdul Aziz High School
                    <span className="text-gray-400 text-sm">
                      - Dhaka, Bangladesh
                    </span>
                  </h4>
                  <p>2011</p>
                </div>
              </div>
              <div
                className="col-span-1 bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4 md:p-8"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <span className="tab-title text-gray-700 dark:bg-gray-700 dark:text-white">
                  Skills
                </span>
                <Progressbar text="HTML" progressDone="95" />
                <Progressbar text="CSS/SASS" progressDone="90" />
                <Progressbar text="JavaScript" progressDone="85" />
                <Progressbar text="jQuery" progressDone="90" />
                <Progressbar text="React" progressDone="60" />
                <Progressbar text="WordPress" progressDone="80" />
                <Progressbar text="Photoshop/Illustrator" progressDone="70" />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
