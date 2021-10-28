import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SourceCode() {
  return (
    <div className="text-center absolute -top-6 md:-top-5 right-2 dark:bg-white dark:text-black bg-gray-700 px-3 py-1 shadow-md text-white rounded-full">
      <Link
        to={{ pathname: "https://github.com/mhasan320/myPortfolio" }}
        target="_blank"
      >
        <FontAwesomeIcon
          icon={["fab", "github"]}
          className="mr-2 hidden md:inline-block"
        />
        Source Code
      </Link>
    </div>
  );
}
