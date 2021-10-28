import aboutImg from "../assets/img/about.png";
import useAosAnimation from "../hooks/useAosAnimation";
import SectionTitle from "./SectionTitle";

export default function About() {
  useAosAnimation();
  return (
    <div className="bg-gray-50 dark:bg-gray-700 relative z-50 transition duration-75">
      <div className="container px-5 mx-auto text-center md:text-left py-16 md:py-24">
        {/*-- section title --*/}
        <SectionTitle text1="About Me" text2="My Story" text3="About Me" />

        <div className="block lg:flex mt-20">
          <div
            className="lg:w-4/12 w-full m-auto"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
            <img
              src={aboutImg}
              alt="about"
              className="w-6/12 mb-5 md:mb-0 lg:w-9/12 m-auto"
            />
          </div>
          <div
            className="lg:w-8/12 px-5 md:px-0 md:ml-7 mt-0 md:mt-12 ml-0"
            data-aos="fade-left"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
            <div className="dark:text-white m-auto sm:ml-0 text-justify mt-3 text-md transition duration-75">
              <p>
                I’m an Innovative and professional Front-end Developer with 5
                years of experience building and maintaining websites in the IT
                industry. I Developed 40+ beautiful & creative Websites. Highly
                skilled in HTML, CSS, JavaScript, jQuery, WordPress. I have also
                acceptable knowledge of Photoshop, illustrator, SASS/LESS,
                GitHub/Gitlab, and Basic SEO.
              </p>
            </div>
            <hr className="mt-5 dark:border-gray-800 transition duration-75" />
            <div className="text-center dark:text-white sm:text-left block md:flex justify-between mt-5 md:text-lg transition duration-75">
              <div className="inline-block">
                <p className=" leading-8">
                  <span className="text-purple-500 font-semibold mr-4">
                    Age :
                  </span>{" "}
                  28
                </p>
                <p className=" leading-8">
                  <span className="text-purple-500 font-semibold mr-4">
                    Nationality :
                  </span>{" "}
                  Bangladeshi
                </p>
                <p className=" leading-8">
                  <span className="text-purple-500 font-semibold mr-4">
                    Language :
                  </span>{" "}
                  Bangla, English
                </p>
              </div>
              <div className="inline-block">
                <p className=" leading-8">
                  <span className="text-pink-500 font-semibold mr-4">
                    Address :
                  </span>{" "}
                  Dhaka, Bangladesh
                </p>
                <p className=" leading-8">
                  <span className="text-pink-500 font-semibold mr-4">
                    Email :
                  </span>{" "}
                  mhhasan320@gmail.com
                </p>
                <p className=" leading-8">
                  <span className="text-pink-500 font-semibold mr-4">
                    Phone :
                  </span>{" "}
                  +8801517828396
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
