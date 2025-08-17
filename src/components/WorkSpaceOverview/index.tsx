import Header from "./Header";
import InnovationStarterPack from "./innovationPack";
import IntegrationManager from "../IntegrationManager";
import { useProject } from "../../hooks/useProject";

const WorkspaceOverview = () => {
  const Project = useProject();

  return (
    <div className="min-h-screen bg-noble-black-500 font-plus p-2">
      <div>
        {Project ? (
          <>
            <Header />
            <InnovationStarterPack />
            <IntegrationManager />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center text-white">
            <p className="text-lg mb-4">No project in this workspace</p>
            <button className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
              Add New Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkspaceOverview;
