import { Link } from "react-scroll";

export default function SourceCode() {
  return (
    <div className="group text-center fixed w-10 h-10 bottom-5 right-2 bg-gray-300 pt-1.5 shadow-md hover:bg-pink-600 rounded-full z-60 cursor-pointer transition duration-75">
      <Link to="herro-section" spy={true} smooth={true}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 inline-block text-pink-600 group-hover:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </Link>
    </div>
  );
}
