import axiosInstance from "./axiosInstance";

export const getworkspace = async (workspaceId: string) => {
  try {
    const response = await axiosInstance.get(`/workspace/${workspaceId}`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching workspace:", error);
    throw error;
  }
};
