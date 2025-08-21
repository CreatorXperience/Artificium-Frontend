import { useState } from 'react';
import Sidebar from '../../components/Workspaces/Sidebar';
import WorkspaceHeader from '../../components/Workspaces/WorkspaceHeader';
import WorkspaceList from '../../components/Workspaces/WorkspaceList';
import { useSearchParams } from 'react-router';
import type { FilterParam } from '../../constants/sidebar';

const WorkspacePage = () => {
  const [searcTerm, setSearcTerm] = useState<string>('');
  const [searchParams] = useSearchParams();
  const filter: FilterParam =
    (searchParams.get('workspace') as FilterParam) ?? 'explore';

  const handleSearch = (text: string) => setSearcTerm(text);

  return (
    <div className='w-full h-screen overflow-hidden max-h-screen flex min-h-screen bg-noble-black-800 flex-col'>
      <div className='w-full'>
        <WorkspaceHeader setSearchTerm={handleSearch} />
      </div>
      <div className='flex-1 flex h-screen min-h-screen overflow-y-auto'>
        <Sidebar filter={filter} />
        <WorkspaceList filter={filter} searchTerm={searcTerm} />
      </div>
    </div>
  );
};

export default WorkspacePage;
