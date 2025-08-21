import type {
  GetAllWorkspacesResponse,
  GetWorkspaceAllMembersResponse,
  GetWorkspaceResponse,
} from '../types/workspaces';
import axiosInstance from '../utils/axiosInstance';

export async function getAllWorkspaces(): Promise<GetAllWorkspacesResponse> {
  const res = await axiosInstance.get('/workspace/all');
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
