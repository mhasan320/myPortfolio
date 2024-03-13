import { Link } from 'react-router-dom';
import assain from '../assets/img/assian.jpg';
import business from '../assets/img/businessSummit.jpg';
import eejara from '../assets/img/eejara.jpg';
import eunoia from '../assets/img/eunoia.jpg';
import ipsslGroup from '../assets/img/ipssl.jpg';
import kibaba from '../assets/img/kibaba.jpg';
import noir from '../assets/img/noir.jpg';
import parkingKori from '../assets/img/parkingKori.jpg';
import unigamsa from '../assets/img/unigamsa.jpg';
import useAosAnimation from '../hooks/useAosAnimation';
import GoWebsite from './GoWebsite';
export default function WorkList() {
  useAosAnimation();
  return (
    <>
      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: 'https://www.noirbd.com' }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-2 lg:mt-0">
          <h3 className="text-2xl mb-2 font-semibold">Noir BD</h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            Ecommerce Website
          </h5>
          <p className="text-justify md:w-5/6 mb-4">
            ‘Noir’ is a ecommerce website of Evience company. Which is created
            by Bit Byte Technology. I am doing front-end coding into this
            project.
          </p>
          <div className="flex flex-wrap pb-4">
            <span className="technology dark:text-white  dark:bg-gray-700">
              Javascript
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              React Js
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Next Js
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Php
            </span>
          </div>
          <GoWebsite />
        </div>
        <div className="col-span-1">
          <img
            src={noir}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="noir"
          />
        </div>
      </Link>
      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: 'https://acumenits.com/kibaba/' }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-1">
          <img
            src={kibaba}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="kibaba"
          />
        </div>
        <div className="col-span-2 lg:mt-0 md:ml-20">
          <h3 className="text-2xl mb-2 font-semibold">Kibaba</h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            Informative Website
          </h5>
          <p className="text-justify md:w-5/6 mb-4">
            Cloud-based web hosting that empowers creatives and supercharges the
            future of ideas.
          </p>
          <div className="flex flex-wrap pb-4">
            <span className="technology dark:text-white  dark:bg-gray-700">
              HTML
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              CSS
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Bootstrap 5
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              Jquery
            </span>
          </div>
          <GoWebsite />
        </div>
      </Link>
      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: 'https://unigamsa.com/' }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-2 lg:mt-0">
          <h3 className="text-2xl mb-2 font-semibold">Unigamsa</h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            Informative Website
          </h5>
          <p className="text-justify md:w-5/6 mb-4">
            We hope to create a system where the weakness of one will be covered
            by the strength of another, where the problem of one will be the
            problem of all. We would like to promote the general will and secure
            the right to sovereignty to ourselves and posterity through
            solidarity and goodwill.
          </p>
          <div className="flex flex-wrap pb-4">
            <span className="technology dark:text-white  dark:bg-gray-700">
              Elementor Theme
            </span>
            <span className="technology dark:text-white  dark:bg-gray-700">
              WordPress
            </span>
          </div>
          <GoWebsite />
        </div>
        <div className="col-span-1">
          <img
            src={unigamsa}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="Unigamsa"
          />
        </div>
      </Link>
      {/* <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: 'https://www.charuta.com' }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-2 lg:mt-0">
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
      </Link> */}
      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: 'https://eunoiaits.com/' }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-1 mb-24 md:mb-0">
          <img
            src={eunoia}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="Charuta"
          />
        </div>
        <div className="col-span-2 lg:mt-0 md:ml-20">
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
      </Link>
      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: 'https://www.eejara.com/' }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-2 lg:mt-0">
          <h3 className="text-2xl mb-2 font-semibold">Eejara</h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            Web Application
          </h5>
          <p className="text-justify md:w-5/6 mb-4">
            Eejara is an online platform for machine owners to rent out their
            unused construction equipment and tools to other users or companies.
            The objective is to enable equipment and tools owners to generate
            cash when they are not actively using their equipment’s and tools.
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
            <span className="technology dark:text-white  dark:bg-gray-700">
              Php
            </span>
          </div>
          <GoWebsite />
        </div>
        <div className="col-span-1">
          <img
            src={eejara}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="Eejara"
          />
        </div>
      </Link>
      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: 'https://www.businesssummit.net/' }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-1 mb-24 md:mb-0">
          <img
            src={business}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="Charuta"
          />
        </div>
        <div className="col-span-2 lg:mt-0 md:ml-20">
          <h3 className="text-2xl mb-2 font-semibold">Business Summit</h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            Web Application
          </h5>
          <p className="text-justify mb-4">
            Business Summit is the brainchild of a highly respected business
            innovator, Dr. M. Haider Uzzaman. This summit, which has been
            physically running with tremendous success since 2017, will now
            transform to the digital centre point for businesses all around the
            world.
          </p>
          <div className="flex flex-wrap pb-4">
            <span className="technology dark:text-white dark:bg-gray-700">
              HTML
            </span>
            <span className="technology dark:text-white dark:bg-gray-700">
              CSS
            </span>
            <span className="technology dark:text-white dark:bg-gray-700">
              Bootstrap 4
            </span>
            <span className="technology dark:text-white dark:bg-gray-700">
              Vanila JavaScript
            </span>
            <span className="technology dark:text-white dark:bg-gray-700">
              Jquery
            </span>
            <span className="technology dark:text-white dark:bg-gray-700">
              Asp.net
            </span>
          </div>
          <GoWebsite />
        </div>
      </Link>

      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: 'https://parkingkori.com/' }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-2 lg:mt-0">
          <h3 className="text-2xl mb-2 font-semibold">Parking Kori</h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            Web Application
          </h5>
          <p className="text-justify md:w-5/6 mb-4">
            We here at DexHUB believe that there's always a better way of doing
            things namely by digitizing and automating every possible aspect of
            your business. We are obsessively passionate about making your day
            to day workflow easier.
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
            <span className="technology dark:text-white  dark:bg-gray-700">
              Php
            </span>
          </div>
          <GoWebsite />
        </div>
        <div className="col-span-1">
          <img
            src={parkingKori}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="Parking Kori"
          />
        </div>
      </Link>
      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: 'https://www.ipsslgroup.com/' }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-1 mb-24 md:mb-0">
          <img
            src={ipsslGroup}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="Charuta"
          />
        </div>
        <div className="col-span-2 lg:mt-0 md:ml-20">
          <h3 className="text-2xl mb-2 font-semibold">IPSSL Group</h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            Informative Website
          </h5>
          <p className="text-justify mb-4">
            IPSSL initially launched its journey as a one-stop logistics &
            support services provider. Since its beginning it has been
            customer-driven and we made a mark almost instantly. With our
            approach of “One Call Does It All”, the company pioneered in the
            service industry in Bangladesh and in South East Asia.
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
            <span className="technology dark:text-white dark:bg-gray-700">
              Php
            </span>
          </div>
          <GoWebsite />
        </div>
      </Link>
      <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: 'http://acumenits.com/acsui/' }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-2 lg:mt-0">
          <h3 className="text-2xl mb-2 font-semibold">
            Asian Concierge Service Co. Ltd
          </h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            Informative Website
          </h5>
          <p className="text-justify md:w-5/6 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
            illo amet eveniet adipisci, quae doloribus fuga, fugiat enim, sequi
            a nam? Rerum, tempore, porro. Quam quibusdam amet voluptatem aliquid
            ratione.
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
            src={assain}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="Assain"
          />
        </div>
      </Link>
      {/* <Link
        className="portfolioSection dark:text-white"
        to={{ pathname: 'http://thesanctuaryfigtreepocket.com.au/' }}
        target="_blank"
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        <div className="col-span-1 mb-24 md:mb-0">
          <img
            src={santuray}
            className="portfolioHover group-hover:scale-105 group-hover:shadow-xl"
            alt="Charuta"
          />
        </div>
        <div className="col-span-2 lg:mt-0 md:ml-20">
          <h3 className="text-2xl mb-2 font-semibold">
            The Sanctuary Fig Tree Pocket
          </h3>
          <h5 className="text-md mb-2 text-gray-600 font-medium bg-gray-100 py-1 px-3 inline-block rounded dark:bg-gray-700 dark:text-gray-400">
            Informative Website
          </h5>
          <p className="text-justify mb-4">
            Located in the heart of one of Brisbane’s most desirable suburbs,
            The Sanctuary provides a haven that brings you closer to nature and
            yet positions you close to everything you need and desire. It’s a
            rare opportunity to secure land in the highly sought-after
            inner-west, and to build your future, your way.
          </p>
          <div className="flex flex-wrap pb-4">
            <span className="technology dark:text-white dark:bg-gray-700">
              Divi
            </span>
            <span className="technology dark:text-white dark:bg-gray-700">
              Wordpress
            </span>
          </div>
          <GoWebsite />
        </div>
      </Link> */}
    </>
  );
}
