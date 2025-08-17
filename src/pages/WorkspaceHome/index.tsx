import WorkspaceOverview from "../../components/WorkSpaceOverview";
import LeftSidebar from "../../components/LeftSidebar";

const WorkspaceHome = () => {
  return (
    <div className="min-h-screen bg-noble-black-500 font-plus p-2 flex">
      <LeftSidebar />
      <WorkspaceOverview />
    </div>
  );
};

export default WorkspaceHome;
