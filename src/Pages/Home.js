import About from "../component/About";
import Herro from "../component/Herro";
import MyJourny from "../component/MyJourny";
import Portfolio from "../component/Portfolio";

export default function Home() {
  return (
    <div>
      <Herro />
      <About />
      <MyJourny />
      {/* <Portfolio /> */}
    </div>
  );
}
