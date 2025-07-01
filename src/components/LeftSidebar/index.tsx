import React, { useState } from "react";
import ProjectList from "../ProjectList";
import SidebarHeader from "../LeftSidebarHeader";
import SidebarFooter from "../LeftSidebarFooter";

const LeftSidebar: React.FC = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <>
      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 px-3 py-2 rounded shadow 
                   dark:bg-noble-black-700 dark:text-noble-black-100 
                   bg-white text-noble-black-800"
        onClick={() => setMobileSidebarOpen(true)}
      >
        ☰
      </button>

      {/* Mobile Sidebar */}
      {mobileSidebarOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="fixed inset-y-0 left-0 w-72 p-6 overflow-y-auto z-50 
                          dark:bg-noble-black-800 bg-white text-black">
            <div className="flex justify-end mb-4">
              <button
                className="text-xl dark:text-noble-black-100 text-noble-black-800"
                onClick={() => setMobileSidebarOpen(false)}
              >
                ✕
              </button>
            </div>
            {/* Add your mobile content if needed */}
          </div>
        </>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex h-screen w-72 flex-col justify-between p-6 border-r font-plus 
                       dark:bg-noble-black-800 dark:text-noble-black-100 dark:border-noble-black-600 
                       bg-white text-noble-black-800 border-gray-200">
        <div>
          <SidebarHeader />

          {/* General Section */}
          <div className="text-xs uppercase font-semibold mb-3 tracking-wider select-none 
                          dark:text-noble-black-300 text-noble-black-500">
            General
          </div>

          {/* Navigation */}
          <nav className="space-y-2 mb-8">
            <button
              className="w-full flex items-center text-sm font-medium rounded-md px-3 py-2 transition-all duration-200 
                         dark:text-noble-black-200 dark:hover:text-noble-black-100 dark:hover:bg-noble-black-600 
                         text-noble-black-700 hover:text-noble-black-900 hover:bg-gray-100"
            >
              <i className="fas fa-search mr-3 
                         dark:text-noble-black-300 text-noble-black-500" />
              Search
              <span className="ml-auto text-[10px] font-semibold rounded px-2 py-0.5 select-none 
                             dark:bg-noble-black-500 dark:text-noble-black-300 
                             bg-gray-200 text-gray-500">
                ⌘ S
              </span>
            </button>

            <a
              href="#"
              className="flex items-center text-sm font-medium rounded-md px-3 py-2 transition-all duration-200 
                         dark:text-noble-black-200 dark:hover:text-noble-black-100 dark:hover:bg-noble-black-600 
                         text-noble-black-700 hover:text-noble-black-900 hover:bg-gray-100"
            >
              <i className="far fa-credit-card mr-3 
                         dark:text-noble-black-300 text-noble-black-500" />
              Billing
            </a>
          </nav>

          {/* Project List */}
          <div className="mb-3">
            <ProjectList />
          </div>
        </div>

        {/* Footer */}
        <SidebarFooter />
      </aside>
    </>
  );
};

export default LeftSidebar;
