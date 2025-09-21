import { useContext, useEffect, useState, type ReactNode } from "react";
import getRandomColor from "../../utils/getRandomColor";
import { useQuery } from "@tanstack/react-query";
import { getProjectMembership } from "../../utils/getProjectMembership";
import { workspaceMemberShipContext } from "../../context/workspaceMembershipContext";
import type { TProject, TProjects } from "../../types/projectMembertype";
import { projectMemberShipContext } from "../../context/projectMembershipContext";

/** tiny icon set */
const IconSearch = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <circle cx="11" cy="11" r="6"></circle>
    <path d="M20 20l-3.2-3.2"></path>
  </svg>
);
const IconCard = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <rect x="3" y="5" width="18" height="14" rx="2"></rect>
    <path d="M3 10h18"></path>
  </svg>
);
const IconPlus = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M12 5v14M5 12h14"></path>
  </svg>
);
const IconChevron = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 text-gray-400"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M9 6l6 6-6 6"></path>
  </svg>
);
const IconGear = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z"></path>
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 01-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.1a1.65 1.65 0 00-1-1.51 1.65 1.65 0 00-1.82.33l-.06.06A2 2 0 013.8 17.9l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H2a2 2 0 010-4h.1a1.65 1.65 0 001.51-1 1.65 1.65 0 00-.33-1.82l-.06-.06A2 2 0 014.96 2.3l.06.06a1.65 1.65 0 001.82.33 1.65 1.65 0 001-1.51V1a2 2 0 014 0v.1a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06A2 2 0 0120.2 6.1l-.06.06a1.65 1.65 0 00-.33 1.82 1.65 1.65 0 001.51 1H22a2 2 0 010 4h-.1a1.65 1.65 0 00-1.51 1z"></path>
  </svg>
);

/** colored project bullets */
const Bullet = ({ color = "#7b7b7b" }) => (
  <span
    aria-hidden
    className="inline-block h-4 w-4 rounded-md border border-white/10 mr-3"
    style={{
      boxShadow: `0 0 0 2px ${color}33 inset`,
      background: "transparent",
    }}
  />
);

const KbdChip = ({ children }: { children: ReactNode }) => (
  <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[10px] tracking-wider text-gray-300">
    {children}
  </span>
);

const SectionLabel = ({ children }: { children: ReactNode }) => (
  <div className="px-4 pt-6 pb-2 text-[11px] uppercase tracking-[0.18em] text-gray-400">
    {children}
  </div>
);

const Row = ({ icon, label, right }: any) => (
  <button className="group flex w-full items-center justify-between gap-3 rounded-xl px-4 py-3 text-left hover:bg-white/[0.04]">
    <div className="flex items-center gap-3">
      <span className="text-gray-300">{icon}</span>
      <span className="text-[15px] font-medium text-gray-100">{label}</span>
    </div>
    {right}
  </button>
);

type TProjectRow = {
  color: string;
  label: string;
  active?: boolean;
  onClick?: () => void;
};

const ProjectRow = ({
  color,
  label,
  active = false,
  onClick = () => {},
}: TProjectRow) => (
  <button
    className={[
      "flex w-full items-center rounded-xl px-4 py-4 text-left transition",
      active
        ? "bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.45)]"
        : "hover:bg-white/[0.04]",
    ].join(" ")}
    onClick={onClick}
  >
    <div className="flex items-center">
      <Bullet color={color} />
      <span className="text-[15px] font-medium text-gray-100">{label}</span>
    </div>
  </button>
);

export default function SidebarNav({ projects }: TProjects) {
  const [activeProject, updateActiveProject] = useState<TProject>(projects[0]);

  const workspaceMembership = useContext(workspaceMemberShipContext);
  const projectMemberShip = useContext(projectMemberShipContext);

  const projectMemberShipQ = useQuery({
    queryKey: ["project-membership", workspaceMembership?.id],
    enabled: !!workspaceMembership?.id,
    queryFn: () =>
      getProjectMembership(
        activeProject.workspaceId,
        activeProject.id,
        workspaceMembership?.id as string
      ),
  });

  const onSelectProject = (project: TProject) => {
    updateActiveProject(project);
  };

  useEffect(() => {
    if (projectMemberShipQ.data) {
      projectMemberShip?.updateProject(projectMemberShipQ.data);
    }
  }, [projectMemberShipQ.data, projectMemberShip]);

  return (
    <aside
      className='
        bg-[#141618] md:bg-noble-black-800
        md:my-4 
        text-gray-200
        border border-black/10
      md:w-[100%]
        md:h-[calc(100vh-2rem)]
        h-full
        flex flex-col
        overflow-auto no-scrollbar
        shadow-[0_20px_60px_rgba(0,0,0,0.6)] pb-13
      '
    >
      {/* Header */}
      <div className='px-4 pt-4 pb-3'>
        <div className='flex items-center'>
          <div className='h-10 w-10 rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10'>
            {/* org avatar placeholder */}
            <div className='h-full w-full bg-gradient-to-br from-cyan-400/30 via-fuchsia-400/20 to-indigo-400/20' />
          </div>
          <div className='ml-3'>
            <div className='flex items-center gap-2'>
              <div className='text-[16px] font-semibold'>Intellisys</div>
              <IconChevron />
            </div>
            <div className='text-[12px] text-emerald-400'>12 members</div>
          </div>
        </div>
      </div>

      <div className='mx-4 h-px bg-white/5' />

      {/* General */}
      <SectionLabel>General</SectionLabel>
      <div className='px-3 flex flex-col gap-1'>
        <Row
          icon={<IconSearch />}
          label='Search'
          right={<KbdChip>⌘ S</KbdChip>}
        />
        <Row icon={<IconCard />} label='Billing' />
      </div>

      <div className='mx-4 mt-4 h-px bg-white/5' />

      {/* Projects */}
      <SectionLabel>Projects</SectionLabel>
      <div className='px-3 flex flex-col gap-3 z-4'>
        {projects.map((item) => (
          <ProjectRow
            color={getRandomColor()}
            label={item.name}
            onClick={() => onSelectProject(item)}
            active={activeProject.id === item.id ? true : false}
          />
        ))}

        <ProjectRow color='#ff5a52' label='Digital Product Launch' />
        <ProjectRow color='#ff9d3b' label='Brand Refresh' />
        <ProjectRow color='#6fe3ff' label='Social Media Strategy' />
        <button className='flex items-center gap-3 rounded-xl px-4 py-3 text-left text-gray-300 hover:bg-white/[0.04]'>
          <span className='text-gray-300'>
            <IconPlus />
          </span>
          <span className='text-[15px]'>Add new project</span>
        </button>
      </div>

      {/* Spacer */}
      <div className='flex-1' />

      {/* Profile card */}
      <div className='p-3'>
        <div
          className='
            fixed bottom-5 w-[18%] z-10 rounded-2xl border border-white/[0.06]
            bg-black
            shadow-[0_8px_30px_rgba(0,0,0,0.55)]
            px-3 py-3
            flex items-center justify-between 
          '
        >
          <div className='flex items-center gap-3'>
            <div className='relative'>
              <img
                src='https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=200&auto=format&fit=crop'
                alt='avatar'
                className='h-11 w-11 rounded-xl object-cover ring-1 ring-white/10'
              />
              <span className='absolute -right-0.5 -top-0.5 h-3 w-3 rounded-full bg-emerald-400 ring-2 ring-[#141618]' />
            </div>
            <div>
              <div className='text-[15px] font-semibold'>Ryan Lee</div>
              <div className='text-[12px] text-emerald-400'>Premium</div>
            </div>
          </div>
          <button className='rounded-lg p-2 text-gray-300 hover:bg-white/[0.06]'>
            <IconGear />
          </button>
        </div>
      </div>
    </aside>
  );
}
