import ContactArea from "./ContactArea";
import FooterCredit from "./FooterCredit";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <ContactArea />
      <FooterCredit />
    </div>
  );
}
