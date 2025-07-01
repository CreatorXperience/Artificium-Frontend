import React from "react";
import { FaCog } from "react-icons/fa";

const SidebarFooter: React.FC = () => {
  return (
    <div
      className="flex items-center justify-between rounded-lg p-4 font-plus 
                    dark:bg-noble-black-700 bg-white 
                    dark:border-none border border-gray-200"
    >
      <div className="flex items-center space-x-4">
        <img
          alt="Profile avatar of Ryan Lee"
          className="rounded-full w-[40px] h-[40px]"
          src="https://i.pinimg.com/736x/8d/95/57/8d9557860af3c901534b152e4cc106ad.jpg"
        />
        <div>
          <p
            className="text-base font-semibold 
                        dark:text-noble-black-100 text-noble-black-900"
          >
            Ryan Lee
          </p>
          <p className="text-sm font-medium text-electric-green-600">Premium</p>
        </div>
      </div>

      <button
        aria-label="Settings"
        className="text-xl 
                   dark:text-noble-black-300 text-gray-500 
                   dark:hover:text-noble-black-100 hover:text-gray-800 
                   transition-colors duration-200"
      >
        <FaCog />
      </button>
    </div>
  );
};

export default SidebarFooter;
