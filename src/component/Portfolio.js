import { animated, useSpring } from "react-spring";
import SectionTitle from "./SectionTitle";
import WorkList from "./WorkList";

// mouse over animation with Spring
const calc = (x, y) => [x - window.innerWidth / 2, y - window.innerHeight / 2];
const trans1 = (x, y) => `translate3d(${x / 20}px,${y / 20}px,0)`;

export default function Portfolio() {
  const [props, set] = useSpring(() => ({
    xy: [0, 0],
    config: { mass: 10, tension: 550, friction: 140 },
  }));

  return (
    <div
      className="relative overflow-hidden z-50"
      onMouseMove={({ clientX: x, clientY: y }) => set({ xy: calc(x, y) })}
    >
      <div className="container px-5 mx-auto text-center md:text-left py-16 md:py-24">
        {/*-- section title --*/}
        <SectionTitle text1="Portfolio" text2="My Work" text3="Portfolio" />
        <animated.div
          style={{ transform: props.xy.interpolate(trans1) }}
          className="hidden dark:bg-gray-700 md:block absolute -right-36 top-24 md:w-72 md:h-72 lg:w-96 bg-purple-50 rounded-full lg:h-96"
        ></animated.div>
        {/*-- Work List --*/}
        <WorkList />
      </div>
    </div>
  );
}
