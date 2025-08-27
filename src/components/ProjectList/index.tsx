import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { BsCircle, BsSquare, BsTriangle, BsApp } from "react-icons/bs";
import getRandomColor from "../../utils/getRandomColor";
import type { Member, Project } from "../../types/types";
import toast from "react-hot-toast";
import { useUser } from "../../hooks/useUser";
import { getWorkspaceMemberShip } from "../../utils/getWorkspaceMemberShip";
import axiosInstance from "../../utils/axiosInstance";
import { getAlProjects } from "../../utils/getAllProject";
import { useNavigate, useParams } from "react-router";
import { MiniLoader } from "../Loader/MiniLoader";
import { useProject } from "../../hooks/useProject";

const shapeIcons = [BsCircle, BsSquare, BsTriangle, BsApp];
const getRandomShape = () =>
  shapeIcons[Math.floor(Math.random() * shapeIcons.length)];

const createProjectAPI = async (projectData: {
  workspaceId: string;
  name: string;
  purpose: string;
  members?: Member[];
}) => {
  try {
    const response = await axiosInstance.post(
      `/workspace/project`,
      projectData
    );

    if (response.status < 200 || response.status >= 300) {
      throw new Error(response.data?.message || "Failed to create project");
    }

    return response.data.data;
  } catch (error: any) {
    console.error(
      "API error while creating project:",
      error.response?.data || error.message
    );
    throw error;
  }
};

const ProjectList: React.FC = () => {
  const navigate = useNavigate();
  const { user } = useUser();
  const { activeProject, setActiveProject } = useProject();
  const [projects, setProjects] = useState<Project[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const { workspaceId } = useParams<{ workspaceId: string }>();
  const [isProjectsLoading, setIsProjectsLoading] = useState(false);

  const urlWorkspaceId = workspaceId || "";

  const handleProjectClick = (project: Project) => {
    setActiveProject(project);
    navigate(`/workspace-home/${workspaceId}/${project.id}`, { replace: true });
  };

  // --- Load workspace membership ---
  const [workspaceMemberShip, setWorkspaceMemberShip] = useState<string>("");
  useEffect(() => {
    const fetchWorkspaceMembership = async () => {
      try {
        const wsMemberShip = await getWorkspaceMemberShip(urlWorkspaceId);
        const wsMemberShipId = wsMemberShip.id || wsMemberShip._id;
        setWorkspaceMemberShip(wsMemberShipId);
      } catch (err) {
        console.error("Failed to fetch workspace membership:", err);
      }
    };
    fetchWorkspaceMembership();
  }, [urlWorkspaceId]);

  // --- Load projects ---
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setIsProjectsLoading(true);
        const fetchedProjects = await getAlProjects(urlWorkspaceId);
        console.log("Fetched Projects:", fetchedProjects);
        setProjects(
          fetchedProjects.map((project: Project) => ({
            ...project,
            color: getRandomColor(),
            Shape: getRandomShape(),
            members: Array.isArray(project.members) ? project.members : [],
          }))
        );
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setIsProjectsLoading(false);
      }
    };

    fetchProjects();
  }, [urlWorkspaceId, setProjects]);

  // --- Create project handler ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const newProject = await createProjectAPI({
        workspaceId: urlWorkspaceId,
        name: projectName,
        purpose: description,
        members: workspaceMemberShip
          ? [
              {
                id: user.id,
                name: `${user.firstname} ${user.lastname}`,
                email: user.email,
                image: user.image || "",
                memberId: workspaceMemberShip,
                userId: user.id,
                workspaceId: urlWorkspaceId,
              },
            ]
          : [],
      });

      const projectWithExtras: Project = {
        ...newProject,
        color: getRandomColor(),
        Shape: getRandomShape(),
      };

      setProjects((prev) => [...prev, projectWithExtras]);
      setActiveProject(projectWithExtras);

      toast.success("Project successfully created!");
      setIsModalOpen(false);
      setProjectName("");
      setDescription("");
    } catch (err: any) {
      console.error(err);
      toast.error(err.response?.data?.message || "Failed to create project.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="text-xs uppercase font-semibold mb-3 tracking-wider select-none text-gray-600 dark:text-noble-black-300">
        Projects
      </div>

      {/* Project List */}
      <div className="space-y-2 max-h-52 overflow-y-auto pr-1 custom-scrollbar">
        {isProjectsLoading ? (
          <MiniLoader />
        ) : (
          projects.map((project) => {
            const isActive = activeProject?.id === project.id;
            return (
              <a
                key={project.id}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleProjectClick(project);
                }}
                className={`flex items-center text-sm font-medium rounded-md px-3 py-2 transition-colors duration-200 ${
                  isActive
                    ? "bg-gray-200 text-black dark:bg-noble-black-600 dark:text-white"
                    : "text-gray-700 dark:text-noble-black-300 hover:text-black hover:bg-gray-200 dark:hover:text-white dark:hover:bg-noble-black-600"
                }`}
              >
                {project.Shape ? (
                  <project.Shape
                    className="mr-3 text-lg"
                    style={{ color: project.color }}
                  />
                ) : (
                  <div
                    className="mr-3 text-lg w-4 h-4"
                    style={{ backgroundColor: project.color }}
                  />
                )}
                {project.name}
              </a>
            );
          })
        )}
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
          <div
            className="rounded-lg p-6 w-full max-w-md font-plus border
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

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Project Name</label>
                <input
                  type="text"
                  required
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  className="w-full rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-electric-green-600
                    dark:bg-noble-black-800 dark:text-noble-black-100 dark:border-noble-black-600
                    bg-white text-black border border-gray-300"
                />
              </div>

              <div>
                <label className="block text-sm mb-1">Description</label>
                <textarea
                  rows={3}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
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
                  disabled={loading}
                  className="px-4 py-2 text-sm rounded bg-electric-green-600 text-black font-semibold hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading ? "Adding..." : "Add Project"}
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
