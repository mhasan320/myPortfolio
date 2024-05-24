import emailjs from "emailjs-com";
import { useState } from "react";
import InputBox from "./InputBox";
import TextBox from "./TextBox";

export default function ContactForm() {
  const [contactmessage, setContactMessage] = useState(false);
  function submitFunction(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_0e6qdxp",
        "template_mr2itv1",
        e.target,
        "user_0hX7q1vraiWaMczOklbcl"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setContactMessage(true);
  }
  return (
    <form className="mt-0 md:px-5" onSubmit={submitFunction}>
      <InputBox
        LabelText="Full Name"
        name="name"
        type="text"
        placeholder="Enter your full name"
        required="required"
      />
      <InputBox
        LabelText="Subject"
        name="subject"
        type="text"
        placeholder="Enter your subject here"
      />
      <InputBox
        LabelText="Email"
        name="email"
        type="email"
        placeholder="Enter your email here"
        required="required"
      />
      <TextBox
        name="message"
        LabelText="Message"
        type="text"
        placeholder="Lorem text....."
      />
      <button
        type="submit"
        className="w-full btn-primary text-pink-500 border-pink-500 hover:text-white hover:bg-pink-500 block md:block m-auto transition duration-75"
      >
        Submit
      </button>
      <span className="mt-3 text-center text-indigo-600 text-sm block">
        {contactmessage
          ? "Your message has been send. We will contact with you soon"
          : null}
      </span>
    </form>
  );
}
