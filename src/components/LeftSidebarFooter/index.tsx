import React from "react";
import { FaCog } from "react-icons/fa";

const SidebarFooter: React.FC = () => {
  return (
    <div className="flex items-center justify-between rounded-lg p-4 font-plus 
                    dark:bg-noble-black-700 bg-white 
                    dark:border-none border border-gray-200">
      <div className="flex items-center space-x-4">
        <img
          alt="Profile avatar of Ryan Lee"
          className="rounded-full"
          height={40}
          width={40}
          src="https://storage.googleapis.com/a1aa/image/53aa7f82-1747-4c6f-8803-717a3595865d.jpg"
        />
        <div>
          <p className="text-base font-semibold 
                        dark:text-noble-black-100 text-noble-black-900">
            Ryan Lee
          </p>
          <p className="text-sm font-medium text-electric-green-600">
            Premium
          </p>
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
