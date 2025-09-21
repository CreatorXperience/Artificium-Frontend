import type {
  EPage,
  GetAllWorkspacesResponse,
  GetWorkspaceAllMembersResponse,
  GetWorkspaceResponse,
} from '../types/workspaces';
import axiosInstance from '../utils/axiosInstance';

export async function getAllWorkspaces({
  take,
  skip,
  page,
}: {
  take: number;
  skip: number;
  page: EPage;
}): Promise<GetAllWorkspacesResponse> {
  const res = await axiosInstance.get(
    `/workspace/all?take=${take}&skip=${skip}&page=${page}`,
  );
  return res.data;
}

export async function getWorkspace(id: string): Promise<GetWorkspaceResponse> {
  const res = await axiosInstance.get(`/workspace/${id}`);
  return res.data;
}

export async function getWorkspaceAllMembers(
  id: string,
): Promise<GetWorkspaceAllMembersResponse> {
  const res = await axiosInstance.get(`/workspace/members?workspaceId=${id}`);
  return res.data;
}
