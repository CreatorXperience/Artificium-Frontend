import { keepPreviousData, useQuery } from '@tanstack/react-query';
import { getAllWorkspaces } from '../lib/workspaces';
import type { EPage } from '../types/workspaces';

export default function useGetAllWorkspaces({
  take,
  skip,
  page,
}: {
  take: number;
  skip: number;
  page: EPage;
}) {
  const {
    data: allWorkspaces,
    isLoading: isGettingWorkspacesLoading,
    isFetching: isGettingWorkspacesFetching,
    error: isGettingWorkspacesError,
  } = useQuery({
    queryFn: () => getAllWorkspaces({ take, skip, page }),
    enabled: !!page,
    queryKey: ['workspaces', page, take, skip],
    placeholderData: keepPreviousData,
    //Cache data
    staleTime: 10 * 60 * 1000, // 10 minutes fresh
  });

  return {
    allWorkspaces: allWorkspaces?.data,
    isGettingWorkspacesLoading,
    isGettingWorkspacesFetching,
    isGettingWorkspacesError,
  };
}
