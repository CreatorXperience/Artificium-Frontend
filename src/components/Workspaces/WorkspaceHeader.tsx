import { FaPlus } from 'react-icons/fa';
import Logo from '../Logo';

const WorkspaceHeader = ({
  setSearchTerm,
  setSetShowCreateWorkspaceModal,
}: {
  setSearchTerm: (text: string) => void;
  setSetShowCreateWorkspaceModal: (show: boolean) => void;
}) => {
  return (
    <header className='flex items-center justify-between py-4 sm:py-2 px-8 border-b border-noble-black-600 bg-noble-black-700'>
      {/* Logo and Title */}
      <div className='hidden sm:block'>
        <Logo />
      </div>
      <div className='flex items-center gap-4 justify-between w-full sm:w-fit'>
        <input
          type='text'
          placeholder='Search workspaces...'
          className='border border-noble-black-600 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-electric-green-600 text-noble-black-200 sm:ml-0 ml-4'
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className='hidden sm:block bg-stem-green-600 text-stem-green-900 px-4 py-2 rounded-lg font-semibold shadow hover:bg-stem-green-600 transition'
          onClick={() => setSetShowCreateWorkspaceModal(true)}
        >
          + New Workspace
        </button>
        <button
          aria-label='add new workspace'
          className='sm:hidden bg-stem-green-600 text-stem-green-900 px-2 py-2 rounded-lg font-semibold shadow hover:bg-stem-green-600 transition'
          onClick={() => setSetShowCreateWorkspaceModal(true)}
        >
          <FaPlus />
        </button>
      </div>
    </header>
  );
};

export default WorkspaceHeader;
