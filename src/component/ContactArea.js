import { animated, useSpring } from "react-spring";
import mailImg from "../assets/img/mail.png";
import useAosAnimation from "../hooks/useAosAnimation";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";
import Social from "./Social";

// mouse over animation with Spring
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

export default function ContactArea() {
  useAosAnimation();

  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div
      className="relative CurveBgFooter dark:bg-indigo-900 bg-purple-50 z-50"
      id="contact-section"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div
        className="container px-5 mx-auto text-center md:text-left py-16 md:pt-36 md:pb-24"
        id="contact-form"
      >
        <SectionTitle text1="Contact" text2="Message Me.." text3="Contact" />

        <animated.div
          style={{ transform: props.xy.interpolate(trans1) }}
          className="bg-text md:right-64 lg:right-72 top-72 hidden md:block z-10"
        >
          <img src={mailImg} alt="paper-plane" className="md:w-20 md:h-20" />
        </animated.div>
        <div className="block md:grid grid-cols-2 gap-4 mt-2 dark:text-white">
          <div
            className="md:col-span-1 md:mr-8"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
          >
            <p className="text-justify mb-14 text-md">
              Need to develop React or WordPress website ? I am here to help you.
            </p>
            <p className="text-black dark:text-white text-lg mb-2">
              <span className="font-bold">Email :</span>{" "}
              <a href="mailto:mhhasan320@gmail.com">mhhasan320@gmail.com</a>
            </p>
            <p className="text-black dark:text-white text-lg mb-2">
              <span className="font-bold">Phone :</span> +880 1517828396
            </p>
            <p className="text-black dark:text-white text-lg mb-2">
              <span className="font-bold">Address :</span> Khilgoan, Dhaka,
              Bangladesh
            </p>

            <div className="mt-3 md:mt-8">
              <ul className="flex justify-center md:justify-start ">
                <Social />
              </ul>
            </div>
          </div>
          <div
            className="md:col-span-1"
            data-aos="fade-left"
            data-aos-delay="100"
            data-aos-easing="ease-in-out"
          >
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
