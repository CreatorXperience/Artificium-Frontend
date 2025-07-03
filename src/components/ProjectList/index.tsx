import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BsCircle, BsSquare, BsTriangle } from "react-icons/bs";

// Utility functions
const getRandomColor = (): string => {
  const letters = "0123456789ABCDEF";
  return "#" + Array.from({ length: 6 }, () => letters[Math.floor(Math.random() * 16)]).join("");
};

const shapeIcons = [BsCircle, BsSquare, BsTriangle];
const getRandomShape = () => shapeIcons[Math.floor(Math.random() * shapeIcons.length)];

const projectNames = [
  "Orbital Oddysey",
  "Digital Product Launch",
  "Brand Refresh",
  "Social Media Strategy",
  "Internal Dev Tools",
  "Client Roadmap",
  "AI Research",
  "Marketing Funnels",
];

const initialProjects = projectNames.map((name) => ({
  name,
  color: getRandomColor(),
  shape: getRandomShape(),
}));

const ProjectList: React.FC = () => {
  const [activeProject, setActiveProject] = useState("Orbital Oddysey");
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="text-xs uppercase font-semibold mb-3 tracking-wider select-none text-gray-600 dark:text-noble-black-300">
        Projects
      </div>

      {/* Project List with custom scrollbar */}
      <div className="space-y-2 max-h-52 overflow-y-auto pr-1 custom-scrollbar">
        {initialProjects.map(({ name, color, shape: Shape }) => {
          const isActive = activeProject === name;
          return (
            <a
              key={name}
              href="#"
              onClick={() => setActiveProject(name)}
              className={`flex items-center text-sm font-medium rounded-md px-3 py-2 transition-colors duration-200 ${
                isActive
                  ? "bg-gray-200 text-black dark:bg-noble-black-600 dark:text-white"
                  : "text-gray-700 dark:text-noble-black-300 hover:text-black hover:bg-gray-200 dark:hover:text-white dark:hover:bg-noble-black-600"
              }`}
            >
              <Shape className="mr-3 text-lg" style={{ color }} />
              {name}
            </a>
          );
        })}
      </div>

      {/* Add Project Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="mt-4 w-full flex items-center text-sm font-medium px-3 py-2 rounded-md transition-colors duration-200
          text-gray-700 dark:text-noble-black-300 hover:text-black hover:bg-gray-200 dark:hover:text-white dark:hover:bg-noble-black-600"
      >
        <FaPlus className="mr-3" />
        Add new project
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 dark:bg-black/90 p-4">
          <div className="rounded-lg p-6 w-full max-w-md font-plus border
            dark:bg-noble-black-700 dark:text-noble-black-100 dark:border-noble-black-500
            bg-white text-gray-900 border-gray-300"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Add New Project</h2>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-xl transition text-gray-400 hover:text-black dark:text-noble-black-300 dark:hover:text-white"
              >
                &times;
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Project submitted!");
                setIsModalOpen(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm mb-1">Project Name</label>
                <input
                  type="text"
                  required
                  className="w-full rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-electric-green-600
                    dark:bg-noble-black-800 dark:text-noble-black-100 dark:border-noble-black-600
                    bg-white text-black border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Description</label>
                <textarea
                  rows={3}
                  className="w-full rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-electric-green-600
                    dark:bg-noble-black-800 dark:text-noble-black-100 dark:border-noble-black-600
                    bg-white text-black border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Add Users</label>
                <input
                  type="text"
                  placeholder="Enter emails or usernames"
                  className="w-full rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-electric-green-600
                    dark:bg-noble-black-800 dark:text-noble-black-100 dark:border-noble-black-600
                    bg-white text-black border border-gray-300"
                />
              </div>

              <div className="flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 text-sm rounded transition
                    dark:bg-noble-black-600 dark:text-white dark:hover:bg-noble-black-500
                    bg-gray-200 text-gray-800 hover:bg-gray-300"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-sm rounded bg-electric-green-600 text-black font-semibold hover:opacity-90 transition"
                >
                  Add Project
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectList;
