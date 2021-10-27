import hasanDark from "../assets/img/hasan-dark.png";
import hasanLight from "../assets/img/hasan.png";
import Social from "./Social";

export default function Herro() {
  return (
    <div className="flex relative" id="landingSeciton">
      <div className="container px-5 mx-auto my-32 md:mt-40 md:mb-72 z-10">
        <p className="text-lg text-center dark:text-white md:text-left text-gray-700 pl-1.5">
          Hi, This is
        </p>
        <h3 className="tex-xl dark:text-white md:text-5xl text-center md:text-left text-gray-900 font-bold pl-0.5">
          Mahmudul Hasan
        </h3>
        <h2 className="text-2xl text-center md:text-left md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient">
          Front-end Developer
        </h2>
        <div className="mt-3 md:mt-5">
          {/*-- social component --*/}
          <ul className="flex justify-center md:justify-start">
            <Social />
          </ul>
        </div>
        {/*-- hire button --*/}
        <div className="relative flex md:inline-block mt-6">
          <a
            href="#contact-section"
            className="btn-primary text-purple-500 border-purple-500 hover:text-white hover:bg-purple-500 block md:inline-block m-auto"
          >
            Hire
          </a>
          <span className="hidden md:flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        </div>
      </div>
      <h3
        className="bg-text-landing left-0 top-36 text-gray-100 dark:text-gray-700 dark:text-opacity-40 text-9xl"
        data-depth="0.07"
      >
        Mahmudul
      </h3>
      <h3
        className="bg-text-landing right-0 md:bottom-40 text-gray-100 text-11xl dark:text-gray-700 dark:text-opacity-40"
        data-depth="0.07"
      >
        Hasan
      </h3>
      {/*-- Herro Image --*/}
      <div className="hidden lg:block absolute right-12 md:-bottom-31.5 w-106 z-60">
        <img src={hasanLight} alt="Mahmudul Hasan" className="lightImage" />
        <img
          src={hasanDark}
          alt="Mahmudul Hasan"
          className="darkImage hidden"
        />
      </div>
    </div>
  );
}
