import { Link } from "react-scroll";
import useAosAnimation from "../hooks/useAosAnimation";

export default function HireButton() {
  useAosAnimation();
  return (
    <Link
      to="contact-section"
      spy={true}
      smooth={true}
      className="relative flex md:inline-block mt-6 cursor-pointer"
      data-aos="fade-in"
      data-aos-delay="250"
      data-aos-easing="ease-in-out"
    >
      <div className="btn-primary text-purple-500 border-purple-500 hover:text-white hover:bg-purple-500 block md:inline-block m-auto">
        Hire
      </div>
      <span className="hidden md:flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
      </span>
    </Link>
  );
}
