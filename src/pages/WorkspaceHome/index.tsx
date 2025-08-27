import WorkspaceOverview from "../../components/WorkSpaceOverview";
import { useScrollToTop } from "../../hooks/useScrollToTop";

const WorkspaceHome = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen w-full overflow-x-clip font-plus  p-0 m-0 box-border  flex">
      <WorkspaceOverview />
    </div>
  );
};

export default WorkspaceHome;
