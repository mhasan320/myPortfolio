import ExperienceTabs from "./ExperienceTabs";
import SectionTitle from "./SectionTitle";

export default function MyJourny() {
  return (
    <div className="bg-gray-50 dark:bg-gray-700 CurveBg relative z-50">
      <div className="container px-5 mx-auto text-left md:text-left py-16 md:pt-24 md:pb-96">
        <SectionTitle text1="Experience" text2="My Journy" text3="Experience" />
        <ExperienceTabs />
      </div>
    </div>
  );
}
