import {
  keepPreviousData,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { getAllWorkspaces } from '../lib/workspaces';
import type { EPage } from '../types/workspaces';

export default function useGetAllWorkspaces({
  take,
  skip,
  page,
  currentPage,
}: {
  take: number;
  skip: number;
  page: EPage;
  currentPage: number;
}) {
  const queryClient = useQueryClient();

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
  });

  if (
    typeof allWorkspaces?.data?.total === 'number' &&
    currentPage < allWorkspaces.data.total
  ) {
    queryClient.prefetchQuery({
      queryFn: () => getAllWorkspaces({ take, skip: skip + take, page }),
      queryKey: ['workspaces', page, take, skip + take],
    });
  }

  if (currentPage > 1) {
    queryClient.prefetchQuery({
      queryFn: () => getAllWorkspaces({ take, skip: skip - take, page }),
      queryKey: ['workspaces', page, take, skip - take],
    });
  }

  return {
    allWorkspaces: allWorkspaces?.data,
    isGettingWorkspacesLoading,
    isGettingWorkspacesFetching,
    isGettingWorkspacesError,
  };
}
