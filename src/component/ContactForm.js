import InputBox from "./InputBox";
import TextBox from "./TextBox";

export default function ContactForm() {
  return (
    <form className="mt-12 md:px-5" action="#">
      <InputBox
        LabelText="Full Name"
        type="text"
        placeholder="Enter your full name"
      />
      <InputBox
        LabelText="Subject"
        type="text"
        placeholder="Enter your subject here"
      />
      <InputBox
        LabelText="Email"
        type="email"
        placeholder="Enter your email here"
      />
      <TextBox LabelText="Message" type="text" placeholder="Lorem text....." />
      <button className="w-full btn-primary text-pink-500 border-pink-500 hover:text-white hover:bg-pink-500 block md:block m-auto">
        Submit
      </button>
    </form>
  );
}
