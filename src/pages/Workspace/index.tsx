import { useState } from "react";
import ActionButton from "../../components/ActionButton";
import FormInput from "../../components/FormInput";
import CreateWorkspaceModal from "./CreateWorkspaceModal";
import axiosInstance from "../../utils/axiosInstance";
import { useUser } from "../../hooks/useUser";
import { useNavigate } from "react-router";
import toast, { Toaster } from "react-hot-toast";
import type { AxiosError } from "axios";

const Workspace = () => {
  const { id } = useUser().user;
  const [url, setUrl] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const extractWorkspaceId = (url: string): string | null => {
    if (!url.trim()) return null;
    try {
      const formattedUrl = url.includes("http") ? url : `https://${url}`;
      const parsedUrl = new URL(formattedUrl);
      const parts = parsedUrl.pathname.split("/");
      return parts[2] || null;
    } catch (error) {
      console.error("Invalid URL", error);
      return null;
    }
  };

  const getWorkspace = async (workspaceId: string) => {
    try {
      setLoading(true);
      const response = await axiosInstance.get(`/workspace/${workspaceId}`);
      const workspaceData = response.data.data;

      const isMember = workspaceData.members.includes(id);

      if (workspaceData.visibility === false && !isMember) {
        // Private → redirect to access request page
        navigate(`/access-request/${workspaceId}`);
      } else if (workspaceData.visibility === true && !isMember) {
        // Public → redirect to preview page (join handled there)
        navigate(`/workSpacePreview/${workspaceId}`);
      } else {
        // Already a member
        toast.success("You are already a member of this workspace", {
          duration: 5000,
        });
        navigate("/");
      }
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      const message =
        axiosError.response?.data?.message || "Default error message";
      toast.error(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-noble-black-800 text-white font-plus">
      <Toaster position="top-right" reverseOrder={false} />

      {/* Left Section */}
      <div className="w-full md:w-3/5 flex flex-col justify-between px-6 sm:px-10 md:px-16 py-10">
        <div className="w-full max-w-xl mx-auto">
          <img
            src="https://i.postimg.cc/nLFY8Q8d/Logo.png"
            alt="Logo"
            className="h-6 mb-8"
          />
        </div>

        <div className="w-full max-w-xl mx-auto mt-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-snug">
            Join or Create a Workspace
          </h1>
          <p className="text-noble-black-300 mb-8 text-base leading-relaxed">
            Connect with others by joining an existing workspace or create a new
            one to collaborate with your team.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch gap-4 mb-6">
            <div className="flex-1">
              <FormInput
                placeholder="Your workspace URL .artificium.app"
                placeholderPosition="center"
                onInput={(e) => setUrl((e.target as HTMLInputElement).value)}
              />
            </div>
            <div className="w-full sm:w-auto">
              <ActionButton
                text={loading ? "Loading..." : "Join Workspace"}
                onClick={() => {
                  const workspaceId = extractWorkspaceId(url);
                  if (workspaceId) {
                    getWorkspace(workspaceId);
                  } else {
                    toast.error("Please enter a valid workspace URL.");
                  }
                }}
              />
            </div>
          </div>

          <div className="flex items-center my-6">
            <hr className="flex-grow border-noble-black-600" />
            <span className="mx-3 text-noble-black-400 text-sm">or</span>
            <hr className="flex-grow border-noble-black-600" />
          </div>

          <ActionButton
            text="Create new Workspace"
            active={false}
            onClick={() => setShowModal(true)}
          />
        </div>

        <footer className="flex flex-col sm:flex-row justify-between items-center text-noble-black-400 text-xs sm:text-sm mt-12 max-w-xl w-full mx-auto gap-2 sm:gap-0">
          <span>Artificium.app © {new Date().getFullYear()}</span>
          <a href="/privacy" className="underline hover:text-white">
            Privacy Policy
          </a>
        </footer>
      </div>

      {/* Right Section */}
      <div className="hidden md:block md:w-2/5 relative">
        <img
          src="https://i.postimg.cc/brTZfThC/abstract-03.png"
          alt="Workspace Illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {showModal && (
        <CreateWorkspaceModal onClose={() => setShowModal(false)} />
      )}
    </div>
  );
};

export default Workspace;
