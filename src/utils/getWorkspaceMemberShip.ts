import axiosInstance from "./axiosInstance";

export const getWorkspaceMemberShip = async (workspaceId: string) => {
  try {
    const response = await axiosInstance.get(
      `/workspace/workspace/${workspaceId}/membership`,
      {}
    );
    if (response.status !== 200) {
      throw new Error("Failed to fetch workspace membership");
    }
    //response from the workspaceMembership

    return response.data.data; // returns { id, userId, workspaceId, role }
  } catch (error: unknown) {
    console.error("Error fetching workspace membership:", error);
    throw error;
  }
};
