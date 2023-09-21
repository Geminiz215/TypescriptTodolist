import clsx from "clsx";
import { useState } from "react";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <div className="w-full py-6 pb-8 relative">
      <div className="relative inline-block">
        <button
          type="button"
          className={clsx(
            "px-4 py-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium text-sm inline-flex items-center",
            isOpen ? "rounded-tl-lg rounded-tr-lg" : "rounded-lg"
          )}
          onClick={toggleDropdown}
        >
          Dropdown{" "}
          <svg
            className="w-2.5 h-2.5 ml-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>
        <div
          className={clsx(
            "absolute top-0 translate-y- left-0 right-0 bottom-0 transition-all  bg-gray-500 bg-opacity-50",
            isOpen ? "opacity-100 " : "opacity-0 pointer-events-none"
          )}
        >
          <div className="bg-blue-700">hallo</div>
          <div className="bg-blue-700">hallo</div>
          <div className="bg-blue-700">hallo</div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
