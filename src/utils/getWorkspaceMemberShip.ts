import axiosInstance from "./axiosInstance";

export const getWorkspaceMemberShip = async (workspaceId: string) => {
  try {
    const response = await axiosInstance.get(
      `/workspace/${workspaceId}/membership`,
      {}
    );
    if (response.status !== 200) {
      throw new Error("Failed to fetch workspace membership");
    }
    return response.data.data;
  } catch (error) {
    console.error("Error fetching workspace membership:", error);
    throw error;
  }
};
