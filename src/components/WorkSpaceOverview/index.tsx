import Header from "./Header";
import InnovationStarterPack from "./innovationPack";
import IntegrationManager from "../IntegrationManager";
import { useProject } from "../../hooks/useProject";
import LeftSidebar from "../LeftSidebar";

const WorkspaceOverview = () => {
  const Project = useProject();

  return (
    <div className="border-red-400 w-full min-h-screen bg-noble-black-800 font-plus p-2 sm:flex">
      <div className="sm:h-[42rem] fixed sm:static z-50 sm:z-0 ">
        <LeftSidebar />
      </div>

      <div className="min-h-screen w-full">
        {Project ? (
          <>
            <div className="h-auto w-full">
              <Header />
            </div>

            <div className="h-[38rem] sm:h-[42rem] ">
              <InnovationStarterPack />
            </div>
            <div className="border-red-600 flex  flex-row align-bottom justify-end">
              <IntegrationManager />
            </div>
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
