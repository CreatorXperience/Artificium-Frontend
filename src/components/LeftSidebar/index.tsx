import React, { useState } from "react";
import ProjectList from "../ProjectList";
import SidebarHeader from "../LeftSidebarHeader";
import SidebarFooter from "../LeftSidebarFooter";
import { Search, CreditCard } from "lucide-react";

const LeftSidebar: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <button
        className="md:hidden fixed top-4 left-4 px-3 py-2 rounded-lg shadow 
                   bg-white text-noble-black-800 dark:bg-noble-black-700 dark:text-noble-black-100 
                   z-50"
        onClick={() => setOpen(true)}
      >
        ☰
      </button>

      {/* Overlay (mobile) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 w-72 p-6 flex flex-col justify-between border-r font-plus
                    dark:bg-noble-black-900 dark:text-noble-black-100 dark:border-noble-black-700
                    bg-white text-noble-black-800 border-gray-200 z-50
                    transform transition-transform duration-300
                    ${open ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
      >
        {/* Mobile Header */}
        <div className="flex justify-between items-center mb-6 md:hidden">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={() => setOpen(false)} className="text-2xl">
            ✕
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="flex flex-col h-full">
          <SidebarHeader />

          {/* General */}
          <div className="text-xs uppercase font-semibold mb-3 tracking-wider text-noble-black-400">
            General
          </div>

          <nav className="space-y-2 mb-8">
            <button className="w-full flex items-center text-sm font-medium rounded-lg px-3 py-2 transition-all duration-200 hover:bg-noble-black-700/60">
              <Search size={16} className="mr-3 text-noble-black-400" />
              Search
              <span className="ml-auto text-[10px] font-semibold rounded px-2 py-0.5 bg-noble-black-700 text-noble-black-300">
                ⌘ S
              </span>
            </button>

            <a
              href="#"
              className="flex items-center text-sm font-medium rounded-lg px-3 py-2 transition-all duration-200 hover:bg-noble-black-700/60"
            >
              <CreditCard size={16} className="mr-3 text-noble-black-400" />
              Billing
            </a>
          </nav>

          <div className="relative flex-1">
            <ProjectList />
          </div>
        </div>

        <SidebarFooter />
      </aside>
    </>
  );
};

export default LeftSidebar;
