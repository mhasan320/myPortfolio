import charuta from "../assets/img/charuta.jpg";
import eunoia from "../assets/img/eunoia.jpg";
import GoWebsite from "./GoWebsite";
export default function WorkList() {
  return (
    <>
      <a
        className="portfolioSection dark:text-white"
        href="https://www.charuta.com"
      >
        <div className="col-span-2 lg:mt-20">
          <h3 className="text-2xl mb-2 font-semibold">
            Charuta Private Limited
          </h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            Informative Website
          </h5>
          <p className="text-justify md:w-5/6 mb-4">
            ‘CHARUTA’ is a General Construction Company, with an additional
            window of Interior Decoration and Renovation of buildings. We
            emerged in the market as the pioneer in the building interior
            decoration and supplier of furniture both imported and local.
          </p>
          <div className="flex flex-wrap pb-4">
            <span className="technology dark:text-white  dark:bg-gray-700">
              HTML
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              CSS
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Bootstrap 3
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Jquery
            </span>
          </div>
          <GoWebsite />
        </div>
        <div className="col-span-1">
          <img
            src={charuta}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="Charuta"
          />
        </div>
      </a>
      <a
        className="portfolioSection dark:text-white"
        href="https://eunoiaits.com/"
      >
        <div className="col-span-1 mb-24 md:mb-0">
          <img
            src={eunoia}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="Charuta"
          />
        </div>
        <div className="col-span-2 lg:mt-20 md:ml-36">
          <h3 className="text-2xl mb-2 font-semibold">Eunoia I.T Solutions</h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            Informative Website
          </h5>
          <p className="text-justify mb-4">
            Eunoia I.T Solutions is the brainchild of like-minded group of
            entrepreneurs whom foresee what bright future the technologically
            enhanced sectors could bring to the world. Coming from different
            parts of the world, a board of directors has been set up to exert
            the company's potential with groups of capable and highly
            experienced developers, system analysts, as well as designers.
          </p>
          <div className="flex flex-wrap pb-4">
            <span className="technology dark:text-white dark:bg-gray-700">
              HTML
            </span>
            <span className="technology dark:text-white dark:bg-gray-700">
              CSS
            </span>
            <span className="technology dark:text-white dark:bg-gray-700">
              Bootstrap 3
            </span>
            <span className="technology dark:text-white dark:bg-gray-700">
              Vanila JavaScript
            </span>
            <span className="technology dark:text-white dark:bg-gray-700">
              Jquery
            </span>
          </div>
          <GoWebsite />
        </div>
      </a>
    </>
  );
}
