import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { CiGrid41 } from "react-icons/ci";
import { PiListThin } from "react-icons/pi";
import WorkspaceCard from "./WorkspaceCard";
import Pagination from "./Pagination";
import FooterSummary from "./FooterSummary";
import WorkspaceListSkeleton from "./WorkspaceListSkeleton";
import useGetAllWorkspaces from "../../hooks/useGetAllWorkspaces";
import type { FilterParam } from "../../constants/sidebar";
import useFilteredWorkspaces from "../../hooks/useFilteredWorkspaces";
import toast from "react-hot-toast";
import CreateWorkspaceModal from "../../pages/Workspace/CreateWorkspaceModal";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router";

const WorkspaceList = ({
  filter,
  searchTerm,
  showCreateWorkspaceModal,
  setShowCreateWorkspaceModal,
}: {
  showCreateWorkspaceModal: boolean;
  setShowCreateWorkspaceModal: (value: boolean) => void;
  filter: FilterParam;
  searchTerm: string;
}) => {
  const [view, setView] = useState<"grid" | "list">("grid");
  const { id } = useUser().user;
  const navigate = useNavigate();

  const {
    isGettingWorkspacesLoading,
    isGettingWorkspacesError,
    allWorkspaces,
  } = useGetAllWorkspaces();

  const finalWorkspacesView = useFilteredWorkspaces({
    allWorkspaces: allWorkspaces?.data ?? {
      personalWorkspaces: [],
      otherPublicWorkspace: [],
      workspaceAmIn: [],
    },
    filter,
    searchTerm,
  });

  // 🔹 handle workspace click (private/public/member check)
  const handleWorkspaceClick = (workspace: any) => {
    try {
      const isMember = workspace.members.includes(id);

      if (isMember) {
        navigate(`/workspace/${workspace.id}`);
        return;
      }

      if (workspace.visibility === false) {
        navigate(`/access-request/${workspace.id}`);
        return;
      }

      if (workspace.visibility === true) {
        navigate(`/workSpacePreview/${workspace.id}`);
      }
    } catch (error: any) {
      const message =
        error?.response?.data?.message || "Could not open workspace";
      toast.error(message);
    }
  };

  if (isGettingWorkspacesError) {
    toast.error(isGettingWorkspacesError.message);
    return <WorkspaceListSkeleton />;
  }

  if (isGettingWorkspacesLoading || !allWorkspaces) {
    return <WorkspaceListSkeleton />;
  }

  return (
    <section className="flex flex-col px-2 sm:px-4 md:px-8 py-6 md:py-8 gap-6 w-full bg-noble-black-800 overflow-y-auto custom-scrollbar h-full">
      {/* Header + View toggle */}
      <div className="flex flex-wrap justify-between mb-4 gap-2 items-center">
        <div>
          <h2 className="text-xl font-bold text-stem-green-600">Workspaces</h2>
          <span className="text-xs text-gray-500">
            Project Collaboration Platform
          </span>
        </div>

        <div className="space-x-4">
          <button
            type="button"
            aria-label="grid"
            className={`p-2 rounded-lg border shadow ${
              view === "grid"
                ? "border-stem-green-500 text-stem-green-500"
                : "border-noble-black-600 text-noble-black-400"
            }`}
            onClick={() => setView("grid")}
          >
            <CiGrid41 />
          </button>
          <button
            type="button"
            aria-label="list"
            className={`p-2 rounded-lg border shadow ${
              view === "list"
                ? "border-stem-green-500 text-stem-green-500"
                : "border-noble-black-600 text-noble-black-400"
            }`}
            onClick={() => setView("list")}
          >
            <PiListThin />
          </button>
        </div>
      </div>

      {/* Workspace grid/list */}
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            : "flex flex-col gap-4 md:gap-6"
        }
      >
        {finalWorkspacesView.map((ws) => (
          <div
            key={ws.id}
            onClick={() => handleWorkspaceClick(ws)}
            className="cursor-pointer"
          >
            <WorkspaceCard workspace={ws} view={view} />
          </div>
        ))}

        {/* Create New Workspace Card */}
        <div
          className="bg-stem-green-500/20 border-2 border-noble-black-500 rounded-xl flex flex-col items-center justify-center p-4 sm:p-5 gap-2 cursor-pointer transition min-w-0"
          tabIndex={0}
          role="button"
          aria-label="Create new workspace"
          onClick={() => setShowCreateWorkspaceModal(true)}
        >
          <span className="text-xl sm:text-2xl text-stem-green-500">
            <FaPlus />
          </span>
          <h3 className="font-bold text-stem-green-500 text-base sm:text-lg text-center">
            Create New Workspace
          </h3>
          <span className="text-xs sm:text-sm text-stem-green-500 text-center">
            Start collaborating on a new project
          </span>
        </div>
      </div>

      {/* Footer + Pagination */}
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center mb-10">
        <FooterSummary />
        <Pagination />
      </div>

      {showCreateWorkspaceModal && (
        <CreateWorkspaceModal
          onClose={() => setShowCreateWorkspaceModal(false)}
        />
      )}
    </section>
  );
};

export default WorkspaceList;
