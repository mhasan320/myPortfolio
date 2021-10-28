import useAosAnimation from "../hooks/useAosAnimation";

export default function HerroTitle() {
  useAosAnimation();
  return (
    <div>
      <p
        className="text-lg text-center dark:text-white md:text-left text-gray-700 pl-1.5 transition duration-75"
        data-aos="fade-in"
        data-aos-delay="50"
        data-aos-easing="ease-in-out"
      >
        Hi, This is
      </p>
      <h3
        className="tex-xl dark:text-white md:text-5xl text-center md:text-left text-gray-900 font-bold pl-0.5 transition duration-75"
        data-aos="fade-in"
        data-aos-delay="100"
        data-aos-easing="ease-in-out"
      >
        Mahmudul Hasan
      </h3>
      <h2
        className="text-2xl text-center md:text-left md:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient"
        data-aos="fade-in"
        data-aos-delay="150"
        data-aos-easing="ease-in-out"
      >
        Front-end Developer
      </h2>
    </div>
  );
}
