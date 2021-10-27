import SectionTitle from "./SectionTitle";
import WorkList from "./WorkList";

export default function Portfolio() {
  return (
    <div className="relative overflow-hidden z-50" id="portfoliItem">
      <div className="container px-5 mx-auto text-center md:text-left py-16 md:py-24">
        {/*-- section title --*/}
        <SectionTitle text1="Portfolio" text2="My Work" text3="Portfolio" />
        <div
          className="hidden dark:bg-gray-700 md:block absolute -right-36 top-24 md:w-72 md:h-72 lg:w-96 bg-purple-50 rounded-full lg:h-96"
          data-depth="0.02"
        ></div>
        {/*-- Work List --*/}
        <WorkList />
      </div>
    </div>
  );
}
