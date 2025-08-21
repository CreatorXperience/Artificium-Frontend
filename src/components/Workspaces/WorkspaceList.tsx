import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { CiGrid41 } from 'react-icons/ci';
import { PiListThin } from 'react-icons/pi';
import WorkspaceCard from './WorkspaceCard';

import Pagination from './Pagination';
import FooterSummary from './FooterSummary';
import WorkspaceListSkeleton from './WorkspaceListSkeleton';
import useGetAllWorkspaces from '../../hooks/useGetAllWorkspaces';
import type { FilterParam } from '../../constants/sidebar';
import useFilteredWorkspaces from '../../hooks/useFilteredWorkspaces';

const WorkspaceList = ({
  filter,
  searchTerm,
}: {
  filter: FilterParam;
  searchTerm: string;
}) => {
  const [view, setView] = useState<'grid' | 'list'>('grid');

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

  if (
    isGettingWorkspacesLoading ||
    isGettingWorkspacesError ||
    !allWorkspaces
  ) {
    return <WorkspaceListSkeleton />;
  }

  return (
    <section className='flex flex-col px-2 sm:px-4 md:px-8 py-6 md:py-8 gap-6 w-full bg-noble-black-800 overflow-y-auto custom-scrollbar h-full'>
      {/* View toggle buttons */}
      <div className='flex flex-wrap justify-between mb-4 gap-2  items-center'>
        <div className='flex items-center gap-3'>
          <div>
            <h2 className='text-xl font-bold text-stem-green-600'>
              Workspaces
            </h2>
            <span className='text-xs text-gray-500'>
              Project Collaboration Platform
            </span>
          </div>
        </div>
        <div className='space-x-4'>
          <button
            type='button'
            aria-label='grid'
            className={`p-2 rounded-lg border bg-transparent  font-semibold shadow active cursor-pointer ${view === 'grid' ? 'border-stem-green-500 text-stem-green-500' : ' border-noble-black-600 text-noble-black-400'}`}
            onClick={() => setView('grid')}
          >
            <CiGrid41 />
          </button>
          <button
            type='button'
            aria-label='list'
            className={` p-2 rounded-lg border  bg-transparent  font-semibold shadow cursor-pointer ${view === 'list' ? 'border-stem-green-500 text-stem-green-500' : ' border-noble-black-600 text-noble-black-400'}`}
            onClick={() => setView('list')}
          >
            <PiListThin />
          </button>
        </div>
      </div>
      {/* Workspace cards grid */}
      <div
        className={
          view === 'grid'
            ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'
            : 'flex flex-col gap-4 md:gap-6'
        }
      >
        {/* Workspace Cards */}
        {finalWorkspacesView.map((ws) => (
          <WorkspaceCard workspace={ws} key={ws.id} view={view} />
        ))}
        {/* Create New Workspace Card */}
        <div
          className='bg-stem-green-500/20 border-2 border-noble-black-500 rounded-xl flex flex-col items-center justify-center p-4 sm:p-5 gap-2 cursor-pointer transition min-w-0'
          tabIndex={0}
          role='button'
          aria-label='Create new workspace'
        >
          <span className='text-xl sm:text-2xl text-stem-green-500'>
            <FaPlus />
          </span>
          <h3 className='font-bold text-stem-green-500 text-base sm:text-lg text-center'>
            Create New Workspace
          </h3>
          <span className='text-xs sm:text-sm text-stem-green-500 text-center'>
            Start collaborating on a new project
          </span>
        </div>
      </div>
      {/* Modal for creating workspace */}
      <div className='flex flex-col-reverse lg:flex-row justify-between items-center mb-10'>
        <FooterSummary />
        <Pagination />
      </div>
    </section>
  );
};

export default WorkspaceList;
