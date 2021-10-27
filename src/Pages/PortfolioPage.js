import Portfolio from "../component/Portfolio";
import Section from "../component/Section";

export default function PortfolioPage() {
  return (
    <div>
      <Section SecTitle1="Portfolio" SecTitle2="Recent Work" />
      <Portfolio />
    </div>
  );
}
