import React, { useEffect, useState, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { getworkspace } from "../../utils/getWorkspace";
import type { Workspace } from "../../types/workspace";
import { useParams } from "react-router";

const LeftSidebarHeader: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [workspace, setWorkspace] = useState<Workspace>();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { workspaceId } = useParams<{ workspaceId: string }>();

  // Fetch workspace data
  useEffect(() => {
    const fetchWorkspace = async () => {
      const ws = await getworkspace(workspaceId || "");
      setWorkspace(ws);
    };
    fetchWorkspace();
  }, [workspaceId]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative pb-6 mb-6 border-b dark:border-noble-black-500 border-gray-200 font-plus"
    >
      {/* Header Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center w-full gap-4 px-2 py-1 rounded-md transition hover:bg-gray-50 dark:hover:bg-noble-black-700 focus:outline-none"
      >
        {/* Avatar */}
        <img
          alt={`Profile avatar of ${workspace?.name || "Workspace"}`}
          className="rounded-full w-10 h-10 object-cover ring-2 ring-gray-200 dark:ring-noble-black-500 shadow-sm"
          src={
            workspace?.image ||
            "https://i.pinimg.com/736x/81/7c/4b/817c4bcdb0674e9ca636493bdc9e5c25.jpg"
          }
        />

        {/* Workspace Info */}
        <div className="flex-1 min-w-0 text-left">
          <p className="text-base font-semibold leading-tight truncate dark:text-noble-black-100 text-noble-black-900">
            {workspace?.name || "Workspace Name"}
          </p>
          <p className="text-sm font-medium leading-tight dark:text-electric-green-600 text-electric-green-700">
            {workspace?.members.length || 0} Members
          </p>
        </div>

        {/* Dropdown Icon */}
        <FaChevronDown
          className={`transition-transform duration-300 text-base dark:text-noble-black-300 text-gray-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-3 w-full z-10 rounded-lg shadow-lg border border-gray-200 dark:border-noble-black-500 bg-white dark:bg-noble-black-700 animate-fadeIn">
          {["Settings", "Logout"].map((item) => (
            <a
              key={item}
              href="#"
              className="block px-5 py-3 text-sm dark:text-noble-black-100 text-noble-black-900 dark:hover:bg-noble-black-600 hover:bg-gray-100 transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default LeftSidebarHeader;
