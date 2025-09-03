import { useCallback, useEffect, useState } from "react";
import Category from "../../components/Category";
import IntegrationManager from "../../components/IntegrationManager";
import ProjectHeader from "../../components/ProjectHeader";
import SidebarNav from "../../components/Sidebar";
import { FaCaretRight, FaTimes } from "react-icons/fa";
import { useNavigate, useParams } from "react-router";
import { getWorkspaceMemberShip } from "../../utils/getWorkspaceMemberShip";
import { useQuery } from "@tanstack/react-query";
import { workspaceMemberShipContext } from "../../context/workspaceMembershipContext";
import { projectMemberShipContext } from "../../context/projectMembershipContext.tsx";
import type { WorkspaceMemberType } from "../../types/workspaceMemberType";
import { getAlProjects } from "../../utils/getAllProject";
import LaunchPage from "../../components/LoaderPage.tsx";
import type { TProjectMembership } from "../../types/projectMembertype.ts";
import route from "../../constants/routes.ts";

const IconStack = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path
      fill="currentColor"
      d="M12 2l9 4.5-9 4.5-9-4.5L12 2zm9 8l-9 4.5-9-4.5v3l9 4.5 9-4.5v-3z"
    />
  </svg>
);

const IconCode = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path
      fill="currentColor"
      d="M8 17l-5-5 5-5 1.5 1.5L6 12l3.5 3.5L8 17zm8-10l5 5-5 5-1.5-1.5L18 12l-3.5-3.5L16 7z"
    />
  </svg>
);

const IconPen = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path
      fill="currentColor"
      d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"
    />
  </svg>
);

const IconBulb = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path
      fill="currentColor"
      d="M9 21h6v-1H9v1zm3-20a7 7 0 00-4 12.9V16h8v-2.1A7 7 0 0012 1z"
    />
  </svg>
);

const Workspace = () => {
  const [tab, setTab] = useState("artificium");
  const [show, setShow] = useState(false);
  const param = useParams<{ workspaceId: string }>();
  const [workspaceMembership, updateWorkspaceMembership] =
    useState<WorkspaceMemberType | null>(null);

  const navigate = useNavigate();

  const [projectMembership, updateProjectMembership] =
    useState<TProjectMembership | null>(null);

  const workspaceId = param.workspaceId || "";

  const workspaceMembershipQ = useQuery({
    queryKey: ["workspaceMembership", workspaceId],
    refetchIntervalInBackground: true,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    staleTime: 10000,
    queryFn: () => getWorkspaceMemberShip(workspaceId),
  });

  const projectsQ = useQuery({
    queryKey: ["workspace-project", workspaceId],
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
    refetchIntervalInBackground: true,
    staleTime: 10000,
    queryFn: () => getAlProjects(workspaceId),
  });

  useEffect(() => {
    if (
      (!workspaceMembershipQ.isLoading && !workspaceMembershipQ.data) ||
      workspaceMembershipQ.error
    ) {
      navigate(`${route.AccessRequest}/${workspaceId}`, { replace: true });
      return;
    }

    updateWorkspaceMembership(workspaceMembershipQ.data);
  }, [workspaceMembershipQ.data, workspaceMembershipQ.error]);

  const data = [
    {
      title: "Creative Assets",
      color: "#1ddf79",
      icon: <IconStack />,
      items: [
        { label: "UI wireframe" },
        { label: "Brochure design" },
        { label: "Social media" },
        { label: "Brand guidelines" },
      ],
    },
    {
      title: "Developer Tools",
      color: "#43b0ff",
      icon: <IconCode />,
      items: [
        { label: "API integration" },
        { label: "Test automation" },
        { label: "DB optimization" },
        { label: "Code review" },
      ],
    },
    {
      title: "Content Creation",
      color: "#9b5cff",
      icon: <IconPen />,
      items: [
        { label: "Product description" },
        { label: "E-mail copy" },
        { label: "Whitepaper" },
        { label: "Press release" },
      ],
    },
    {
      title: "Idea Generation",
      color: "#ffd166",
      icon: <IconBulb />,
      items: [
        { label: "Hashtag ideas" },
        { label: "Brainstorming" },
        { label: "Trend analysis" },
        { label: "Social media posts" },
      ],
    },
  ];

  const updateProjectMembershipCallback = useCallback(
    (projectMembership: TProjectMembership) => {
      updateProjectMembership(projectMembership);
    },
    []
  );

  return (
    <div>
      {(projectsQ.isFetching || workspaceMembershipQ.isFetching) && (
        <LaunchPage />
      )}
      {workspaceMembershipQ &&
      !workspaceMembershipQ.isFetching &&
      !projectsQ.isFetching ? (
        <workspaceMemberShipContext.Provider value={workspaceMembership}>
          <projectMemberShipContext.Provider
            value={{
              data: projectMembership,
              updateProject: updateProjectMembershipCallback,
            }}
          >
            <div className="h-screen flex bg-noble-black-800 ">
              <div className="">
                <button
                  className="md:hidden fixed h-[20px] top-2 left-1  px-3 py-2 rounded shadow 
         dark:text-noble-black-100 
          text-noble-black-800 z-50 "
                  onClick={() => setShow(!show)}
                >
                  {show == true ? (
                    <FaTimes className="right-4 fixed" />
                  ) : (
                    <FaCaretRight />
                  )}
                </button>
              </div>
              <div
                className={`fixed lg:static z-20 h-full ${show ? "md:block" : "hidden md:block"}`}
              >
                {" "}
                <SidebarNav projects={projectsQ.data} />
              </div>

              {/* Main */}

              <main className="flex-1 w-full h-full ">
                <div className="w-full px-0 md:px-4 py-2  ">
                  <ProjectHeader activeTab={tab} onTabChange={setTab} />
                </div>

                <section className=" md:px-12 flex-1 h-[54%]  md:h-[68%] overflow-auto   w-full">
                  <div className="glass rounded-2xl h-auto p-8 md:p-10  md:w-full">
                    <header className="text-center mb-10">
                      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Innovation Starter Pack
                      </h1>
                      <p className="text-gray-400 mt-3 text-sm">
                        Kickstart your innovation process with our comprehensive
                        selection of predefined prompts.
                      </p>
                    </header>

                    <div className="grid h-[400px] max-h-[20%] md:max-h-96 overflow-y-scroll no-scrollbar lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                      {data.map((cat) => (
                        <Category key={cat.title} {...cat} />
                      ))}
                    </div>
                  </div>
                </section>

                <div className="border-red-600  w-full px-">
                  <IntegrationManager />
                </div>
              </main>
            </div>
          </projectMemberShipContext.Provider>
        </workspaceMemberShipContext.Provider>
      ) : (
        ""
      )}
    </div>
  );
};

export default Workspace;
