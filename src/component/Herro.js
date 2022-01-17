import { animated, useSpring } from "react-spring";
import hasanDark from "../assets/img/hasan-dark.png";
import hasanLight from "../assets/img/hasan.png";
import HerroTitle from "./HerroTitle";
import HireButton from "./HireButton";
import Social from "./Social";

// mouse over animation with Spring
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

export default function Herro() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div
      className="flex relative h-77vh items-center justify-center"
      id="herro-section"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="container px-3 z-10">
        {/*-- Herro section title --*/}
        <HerroTitle />
        <div className="mt-3 md:mt-5">
          {/*-- social component --*/}
          <ul className="flex justify-center md:justify-start">
            <Social />
          </ul>
        </div>

        {/*-- hire button --*/}
        <HireButton />
      </div>
      <animated.h3
        style={{ transform: props.xy.interpolate(trans1) }}
        className="bg-text-landing left-0 top-40 text-gray-100 dark:text-gray-700 dark:text-opacity-40 text-9xl"
      >
        Mahmudul
      </animated.h3>
      <animated.h3
        style={{ transform: props.xy.interpolate(trans1) }}
        className="bg-text-landing right-0 md:bottom-40 text-gray-100 text-11xl dark:text-gray-700 dark:text-opacity-40"
        data-depth="0.07"
      >
        Hasan
      </animated.h3>
      {/*-- Herro Image --*/}
      <div className="hidden lg:block absolute right-12 md:-bottom-31.5 w-106 z-60">
        <img
          src={hasanLight}
          alt="Mahmudul Hasan"
          className="lightImage block dark:hidden"
        />
        <img
          src={hasanDark}
          alt="Mahmudul Hasan"
          className="darkImage hidden dark:block"
        />
      </div>
    </div>
  );
}
