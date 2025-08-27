import Header from "./Header";
import InnovationStarterPack from "./innovationPack";
import IntegrationManager from "../IntegrationManager";
import { useProject } from "../../hooks/useProject";
import LeftSidebar from "../LeftSidebar";
import { Rocket } from "lucide-react";

const WorkspaceOverview = () => {
  const { activeProject } = useProject();

  return (
    <div className="flex min-h-screen bg-noble-black-900 text-white font-plus w-full">
      {/* Sidebar */}
      <LeftSidebar />

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {activeProject ? (
          <div className="flex-1 flex flex-col">
            {/* Top Header */}
            <div className="sticky top-0 z-20 bg-noble-black-900/90 backdrop-blur-md border-b border-noble-black-700 shadow-md">
              <Header />
            </div>

            {/* Content */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* Innovation Pack */}
              <section className="w-full h-[40rem] rounded-2xl bg-noble-black-800 shadow-xl border border-noble-black-700 p-6 transition hover:border-electric-green-600/40">
                <InnovationStarterPack />
              </section>

              {/* Integration Manager */}
              <section className="w-full rounded-2xl bg-noble-black-800 shadow-xl border border-noble-black-700 p-6">
                <IntegrationManager />
              </section>
            </div>
          </div>
        ) : (
          // Empty State
          <div className="flex-1 flex items-center justify-center p-6">
            <div className="rounded-2xl bg-noble-black-800 shadow-xl border border-noble-black-700 p-10 text-center max-w-md">
              <div className="flex justify-center mb-6">
                <Rocket size={48} className="text-electric-green-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">No Active Project</h2>
              <p className="text-noble-black-400 mb-6">
                Create or select a project to unlock your workspace.
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default WorkspaceOverview;
