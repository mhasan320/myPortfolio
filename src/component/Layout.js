import ContactArea from "./ContactArea";
import FooterCredit from "./FooterCredit";
import Header from "./Header";
import ScrollTop from "./ScrollTop";

export default function Layout({ children }) {
  return (
    <div className="relative">
      <Header />
      {children}
      <ContactArea />
      <FooterCredit />
      <ScrollTop />
    </div>
  );
}
