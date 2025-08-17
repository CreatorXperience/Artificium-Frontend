import axiosInstance from "./axiosInstance";

export const getAlProjects = async (workspaceId: string) => {
  try {
    const response = await axiosInstance.get(
      `/workspace/project/${workspaceId}`
    );

    return response.data.data;
  } catch (error: any) {
    console.error(
      "API error while fetching projects:",
      error.response?.data || error.message
    );
    throw error;
  }
};
