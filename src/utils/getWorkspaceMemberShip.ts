import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance";

export const getWorkspaceMemberShip = async (workspaceId: string) => {
  try {
    const response = await axiosInstance.get(
      `/workspace/workspace/${workspaceId}/membership`
    );

    if (response.status !== 200) {
      throw new Error("Failed to fetch workspace membership");
    }

    return response.data.data; // returns { id, userId, workspaceId, role }
  } catch (error: any) {
    console.error("Error fetching workspace membership:", error);

    // ✅ Fix error handling
    const errorMessage =
      error.response?.data?.message || "Error fetching workspace membership";

    toast.error(errorMessage);
    throw error;
  }
};
