import { useQuery } from '@tanstack/react-query';
import { getAllWorkspaces } from '../lib/workspaces';

export default function useGetAllWorkspaces() {
  const {
    data: allWorkspaces,
    isLoading: isGettingWorkspacesLoading,
    error: isGettingWorkspacesError,
  } = useQuery({
    queryFn: getAllWorkspaces,
    queryKey: ['workspaces'],
  });

  return {
    allWorkspaces,
    isGettingWorkspacesLoading,
    isGettingWorkspacesError,
  };
}
