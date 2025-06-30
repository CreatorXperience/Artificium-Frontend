import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const LeftSidebarHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pb-6 mb-6 border-b font-plus 
                    dark:border-noble-black-500 border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full space-x-4 focus:outline-none"
      >
        <img
          alt="Profile avatar of Intellisys"
          className="rounded-full"
          height={40}
          width={40}
          src="https://storage.googleapis.com/a1aa/image/d59255ec-612d-48f4-a2aa-4acbf841c7cd.jpg"
        />
        <div className="flex-1 text-left">
          <p className="text-base font-semibold leading-tight 
                        dark:text-noble-black-100 text-noble-black-900">
            Intellisys
          </p>
          <p className="text-sm font-medium leading-tight 
                        dark:text-electric-green-600 text-electric-green-700">
            12 members
          </p>
        </div>
        <FaChevronDown
          className={`transition-transform duration-300 text-base 
                      dark:text-noble-black-300 text-gray-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute top-full mt-3 left-0 w-full z-10 rounded-md shadow-lg 
                        dark:bg-noble-black-700 bg-white 
                        dark:border-noble-black-500 border border-gray-200">
          <a
            href="#"
            className="block px-5 py-3 text-sm 
                       dark:text-noble-black-100 text-noble-black-900 
                       dark:hover:bg-noble-black-600 hover:bg-gray-100 
                       transition"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-5 py-3 text-sm 
                       dark:text-noble-black-100 text-noble-black-900 
                       dark:hover:bg-noble-black-600 hover:bg-gray-100 
                       transition"
          >
            Logout
          </a>
        </div>
      )}
    </div>
  );
};

export default LeftSidebarHeader;
