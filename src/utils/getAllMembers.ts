// src/api/workspace.ts
import axiosInstance from "../utils/axiosInstance";

export const getAllMembers = async (workspaceId: string) => {
  const response = await axiosInstance.get("/workspace/members", {
    params: { workspaceId },
  });
  return response.data.data;
};
