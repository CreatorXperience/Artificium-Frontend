import type { TProjectMembership } from "../types/projectMembertype";
import axiosInstance from "./axiosInstance";

export const getProjectMembership = async (
  workspaceId: string,
  projectId: string,
  workspaceMembershipId: string
) => {
  try {
    const response = await axiosInstance.get(`/workspace/project/membership`, {
      params: {
        workspaceId,
        projectId,
        workspaceMembershipId,
      },
    });
    return response.data as TProjectMembership & { message: string };
  } catch (error) {
    console.error("Error fetching project membership:", error);
    throw error;
  }
};
