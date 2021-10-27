import mailImg from "../assets/img/mail.png";
import ContactForm from "./ContactForm";
import SectionTitle from "./SectionTitle";
import Social from "./Social";

export default function ContactArea() {
  return (
    <div
      className="relative CurveBgFooter dark:bg-indigo-900 bg-purple-50 z-50"
      id="contact-section"
    >
      <div
        className="container px-5 mx-auto text-center md:text-left py-16 md:pt-36 md:pb-24"
        id="contact-form"
      >
        <SectionTitle text1="Contact" text2="Message Me.." text3="Contact" />

        <div className="bg-text md:right-64 lg:right-72 top-72 hidden md:block z-10">
          <img src={mailImg} alt="paper-plane" className="md:w-20 md:h-20" />
        </div>
        <div className="block md:grid grid-cols-2 gap-4 mt-2 dark:text-white">
          <div className="md:col-span-1">
            <p className="text-justify mb-14 text-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              quisquam praesentium perferendis maxime, laboriosam doloribus
              corrupti? Distinctio molestiae nostrum officia odio ipsam aliquid
              tenetur nobis, minus incidunt repellat dolore inventore!
            </p>
            <p className="text-black dark:text-white text-lg mb-2">
              <span className="font-bold">Email :</span>{" "}
              <a href="mailto:mhhasan320@gmail.com">mhhasan320@gmail.com</a>
            </p>
            <p className="text-black dark:text-white text-lg mb-2">
              <span className="font-bold">Phone :</span> +880 1517828396
            </p>
            <p className="text-black dark:text-white text-lg mb-2">
              <span className="font-bold">Adress :</span> Khilgoan, Dhaka,
              Bangladesh
            </p>

            <div className="mt-3 md:mt-8">
              <ul className="flex justify-center md:justify-start ">
                <Social />
              </ul>
            </div>
          </div>
          <div className="md:col-span-1">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
