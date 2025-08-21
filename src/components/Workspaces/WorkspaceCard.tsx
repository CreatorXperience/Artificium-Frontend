import type { Workspace } from '../../types/workspaces';
import useGetWorkspaceMembers from '../../hooks/useGetWorkspaceMembers';
import { IoEllipsisHorizontalSharp } from 'react-icons/io5';
import { categoryMap } from '../../constants/categories';
import { BsLaptop } from 'react-icons/bs';
import AvatarSkeleton from './AvatarSkeleton';
import { useNavigate } from 'react-router';

export default function WorkspaceCard({
  workspace,
  view,
}: {
  workspace: Workspace;
  view: 'grid' | 'list';
}) {
  const navigate = useNavigate();
  const {
    allWorkspaceMembersData,
    allWorkspaceMembersError,
    isLoadingAllWorkspaceMembers,
  } = useGetWorkspaceMembers(workspace.id);

  const { data: allMembers } = allWorkspaceMembersData || { data: [] };
  const updatedAt = workspace.updatedAt || 'Recently';
  const description = workspace.description || 'No description';
  const isPublic = workspace.visibility;
  const Icon = categoryMap[workspace.category]?.icon ?? BsLaptop;
  const categoryClass =
    categoryMap[workspace.category]?.className ??
    'bg-noble-black-200 text-noble-black-500';

  // Avatar rendering helper
  const renderAvatars = (size: 'grid' | 'list') => {
    if (isLoadingAllWorkspaceMembers || allWorkspaceMembersError) {
      return (
        <div className='flex items-center -space-x-2'>
          {Array.from({ length: 3 }).map((_, idx) => (
            <AvatarSkeleton key={idx} />
          ))}
        </div>
      );
    }

    return (
      <div className='flex items-center -space-x-2'>
        {allMembers
          .slice(0, 3)
          .map((member, idx) =>
            member.image ? (
              <img
                key={idx}
                src={member.image}
                alt={member.name}
                className={
                  size === 'grid'
                    ? 'w-6 h-6 sm:w-7 sm:h-7 rounded-full ring-2 ring-noble-black-500 object-cover'
                    : 'w-3 h-3 sm:w-4 sm:h-4 rounded-full ring-2 ring-noble-black-500 object-cover'
                }
              />
            ) : null,
          )}
      </div>
    );
  };

  // Card content
  if (view === 'grid') {
    return (
      <div
        className='bg-noble-black-700 rounded-xl shadow-md p-4 sm:p-5 flex flex-col gap-3 border border-noble-black-600 hover:shadow-lg transition cursor-pointer min-w-0 justify-between'
        tabIndex={0}
        aria-label={`Open workspace ${workspace.name}`}
        onClick={() => navigate(`/workspace/${workspace.id}`)}
      >
        <div className='flex items-center justify-between'>
          <span className={`text-xl sm:text-2xl p-2 rounded ${categoryClass}`}>
            {Icon && <Icon />}
          </span>
          <span
            className={`px-2 py-1 rounded text-xs font-semibold ${isPublic ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}
          >
            {isPublic ? 'Public' : 'Private'}
          </span>
        </div>
        <h3 className='font-bold text-base sm:text-lg text-noble-black-400 break-words capitalize'>
          {workspace.name}
        </h3>
        <p className='text-xs sm:text-sm text-noble-black-500 line-clamp-2 break-words'>
          {description}
        </p>
        <div className='flex items-center gap-2 mt-2 flex-wrap'>
          {renderAvatars('grid')}
          <span className='ml-auto text-xs text-gray-400 whitespace-nowrap'>
            Updated {updatedAt}
          </span>
          <button
            className='ml-2 text-gray-400 hover:text-gray-700'
            title='Workspace actions'
            aria-label='Workspace actions'
          >
            <IoEllipsisHorizontalSharp />
          </button>
        </div>
      </div>
    );
  }

  // List view
  return (
    <div
      className='bg-noble-black-700 rounded-xl shadow-md px-4 sm:px-5 py-1 flex gap-3 border border-noble-black-600 hover:shadow-lg transition cursor-pointer min-w-0 justify-between'
      tabIndex={0}
      aria-label={`Open workspace ${workspace.name}`}
    >
      <div className='flex gap-4 items-center w-full'>
        <span className={`text-xl sm:text-2xl p-2 rounded ${categoryClass}`}>
          {Icon && <Icon />}
        </span>
        <span className='flex-1 flex justify-between items-start'>
          <span>
            <h3 className='font-bold text-base sm:text-lg text-noble-black-400 break-words capitalize'>
              {workspace.name}
            </h3>
            <p className='text-xs sm:text-sm text-noble-black-500 line-clamp-2 break-words'>
              {description.length > 50
                ? `${description.slice(0, 50)}...`
                : description}
            </p>
          </span>
          <button
            className='ml-2 text-gray-400 hover:text-gray-700 sm:hidden'
            title='Workspace actions'
            aria-label='Workspace actions'
          >
            <IoEllipsisHorizontalSharp />
          </button>
        </span>
      </div>
      <div className='w-full sm:flex flex-col items-end hidden'>
        <div className='w-full flex justify-end gap-1 items-center'>
          <span
            className={`px-1 py-1 rounded-full text-xs font-semibold ${isPublic ? 'bg-green-700' : 'bg-blue-700'}`}
          ></span>
          <span className='text-xs text-noble-black-500'>
            {isPublic ? 'Public' : 'Private'}
          </span>
        </div>
        <div className='flex items-center gap-2 mt-2 flex-wrap w-full justify-end h-full'>
          {renderAvatars('list')}
          <span className='ml-2 text-xs text-gray-400 whitespace-nowrap'>
            Updated {updatedAt}
          </span>
          <button
            className='ml-2 text-gray-400 hover:text-gray-700'
            title='Workspace actions'
            aria-label='Workspace actions'
          >
            <IoEllipsisHorizontalSharp />
          </button>
        </div>
      </div>
    </div>
  );
}
