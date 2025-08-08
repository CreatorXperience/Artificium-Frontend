import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";
import axiosInstance from "../../utils/axiosInstance";
import ActionButton from "../ActionButton";
import { getAllMembers } from "../../utils/getAllMembers";
import type { Member } from "../../types/types";

type Workspace = {
  id: string;
  name: string;
  description: string;
  image: string;
  members: string[];
  owner: string;
  plan: string;
  visibility: boolean;
};

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const WorkspacePreviewPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [workspace, setWorkspace] = useState<Workspace | null>(null);
  const [allMembersData, setAllMembersData] = useState<Member[]>([]);

  useEffect(() => {
    const fetchWorkspaceAndMembers = async () => {
      if (!id) return;

      try {
        setLoading(true);
        const [workspaceRes, members] = await Promise.all([
          axiosInstance.get(`${BASE_URL}/workspace/${id}`),
          getAllMembers(id),
        ]);

        setWorkspace(workspaceRes.data.data);
        setAllMembersData(members);
      } catch (error: unknown) {
        const axiosError = error as AxiosError<{ message: string }>;
        const message =
          axiosError.response?.data?.message || "Unable to fetch workspace.";
        toast.error(message);
      } finally {
        setLoading(false);
      }
    };

    fetchWorkspaceAndMembers();
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-noble-black-900 text-white font-plus overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-3/5 flex flex-col justify-between px-6 sm:px-10 md:px-16 py-10 relative z-10">
        <div className="w-full max-w-xl mx-auto">
          {/* Logo */}
          <img
            src="https://i.postimg.cc/nLFY8Q8d/Logo.png"
            alt="Logo"
            className="h-6 mb-12"
          />

          {/* Workspace Preview */}
          <div className="text-center">
            {/* Member Avatars */}
            <div className="flex justify-center -space-x-3 mb-4">
              {allMembersData.slice(0, 4).map((member, idx) => (
                <img
                  key={idx}
                  src={member.image || `/image${(idx % 4) + 1}.jpg`}
                  alt={member.name || "member"}
                  className="w-8 h-8 rounded-full border-2 border-noble-black-900"
                />
              ))}
            </div>

            {/* Workspace Name */}
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              {workspace?.name || "Workspace Name"}
            </h1>

            {/* Description */}
            <p className="text-noble-black-400 mb-6 text-sm">
              {workspace?.description || "No description available."}
            </p>

            {/* CTA Button */}
            <ActionButton
              text={loading ? "Loading..." : "Join Now"}
              disabled={loading}
            />

            {/* Divider */}
            <div className="flex items-center my-8">
              <hr className="flex-grow border-noble-black-600" />
              <span className="mx-3 text-noble-black-500 text-sm">or</span>
              <hr className="flex-grow border-noble-black-600" />
            </div>

            {/* Back Button */}
            <ActionButton
              text="change Workspace"
              active={false}
              onClick={() => navigate("/workspace")}
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="flex flex-col sm:flex-row justify-between items-center text-noble-black-500 text-xs sm:text-sm mt-12 max-w-xl w-full mx-auto gap-2 sm:gap-0">
          <span>Artificium.app © {new Date().getFullYear()}</span>
          <a href="/privacy" className="underline hover:text-white">
            Privacy Policy
          </a>
        </footer>
      </div>

      {/* Right Section (Visual) */}
      <div className="hidden md:block md:w-2/5 relative">
        <img
          src={"https://i.postimg.cc/brTZfThC/abstract-03.png"}
          alt="Workspace Illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default WorkspacePreviewPage;
