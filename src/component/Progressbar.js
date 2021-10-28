import { useState } from "react";

export default function Progressbar({ text, progressDone }) {
  const [style, setStyle] = useState({});

  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${progressDone}%`,
    };

    setStyle(newStyle);
  }, 1000);
  return (
    <div>
      <div className="relative mb-7">
        <div className="flex mb-2 items-center justify-between">
          <div>
            <span className="text-sm md:text-lg font-semibold inline-block text-gray-600 dark:text-white">
              {text}
            </span>
          </div>
          <div className="text-right">
            <span className="text-sm font-semibold inline-block text-purple-500 dark:text-white">
              {progressDone}%
            </span>
          </div>
        </div>
        <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-purple-200">
          <div
            style={style}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500 transition duration-1000"
          ></div>
        </div>
      </div>
    </div>
  );
}
