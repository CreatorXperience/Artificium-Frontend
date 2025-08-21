import { useQuery } from '@tanstack/react-query';
import { getWorkspaceAllMembers } from '../lib/workspaces';

function useGetWorkspaceMembers(id: string) {
  const {
    data: allWorkspaceMembersData,
    isLoading: isLoadingAllWorkspaceMembers,
    error: allWorkspaceMembersError,
  } = useQuery({
    queryKey: ['workspaceMembers', id],
    queryFn: () => getWorkspaceAllMembers(id),
  });

  return {
    allWorkspaceMembersData,
    isLoadingAllWorkspaceMembers,
    allWorkspaceMembersError,
  };
}

export default useGetWorkspaceMembers;
