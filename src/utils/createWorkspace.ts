import toast from "react-hot-toast";
import axiosInstance from "./axiosInstance";
import axios from "axios";
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const createWorkspace = async function (
  workspaceData: {
    name: string;
    category: string;
    description: string;
    image?: File | null;
    visibility: boolean;
  },
  onClose: () => void,
  setIsLoading: (loading: boolean) => void
) {
  try {
    setIsLoading(true);
    const response = await axiosInstance.post(
      `${BASE_URL}/workspace`,
      workspaceData,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    const data = response.data.data;
    toast.success(data.messages || "Workspace created successfully", {
      duration: 5000,
    });
    return data; // Return the created workspace data if needed
    onClose();
  } catch (error) {
    console.error(error);
    let errorMessage = "An error occurred while creating the workspace.";
    if (axios.isAxiosError(error) && error.response?.data?.message) {
      errorMessage = error.response.data.message;
    }
    toast.error(errorMessage, { duration: 5000 });
  } finally {
    setIsLoading(false);
  }
};
