import { useQuery } from '@tanstack/react-query';
import { getWorkspace } from '../lib/workspaces';

function useGetWorkspace(id: string) {
  const {
    data: workspaceDetail,
    isLoading: worspaceDetailLoading,
    error: workspaceDetailError,
  } = useQuery({
    queryFn: () => getWorkspace(id),
    queryKey: ['workspaceId', id],
  });

  return { workspaceDetail, worspaceDetailLoading, workspaceDetailError };
}

export default useGetWorkspace;
