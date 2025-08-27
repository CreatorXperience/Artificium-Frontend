import type { AxiosError } from "axios";
import axiosInstance from "../../utils/axiosInstance";
import ActionButton from "../ActionButton";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { getAllMembers } from "../../utils/getAllMembers";
import type { Member } from "../../types/types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

const AccessRequest = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [AllMembersData, setAllMembersData] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchedMembers = async () => {
      if (id) {
        const members = await getAllMembers(id);
        setAllMembersData(members);
      }
    };
    fetchedMembers();
  }, [id]);
  const requestJoinWorkspace = async () => {
    if (!id) {
      toast.error("Workspace ID is missing");
      return;
    }

    try {
      setIsLoading(true);
      const response = await axiosInstance.get(
        `${BASE_URL}/workspace/access/request`,
        {
          params: {
            workspaceId: id,
          },
        }
      );

      toast.success("Access request sent");

      navigate(`/workspace`);
    } catch (error: unknown) {
      setIsLoading(false);
      const axiosError = error as AxiosError<{ message: string }>;
      const message =
        axiosError.response?.data?.message || "Failed to request access.";
      toast.error(message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-noble-black-900 text-white font-plus overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-3/5 flex flex-col justify-between sm:px-10 md:px-16 py-10 relative">
        {/* Logo */}
        <div className="mb-6">
          <img
            src="https://i.postimg.cc/nLFY8Q8d/Logo.png"
            alt="Logo"
            className="h-6"
          />
        </div>

        {/* Center */}
        <div className="flex flex-col items-center justify-center flex-grow text-center">
          <div className="flex -space-x-3 mb-6">
            {AllMembersData.map((member) => (
              <img
                key={member.id}
                src={member.image}
                alt="user"
                className="w-10 h-10 rounded-full border-2 border-noble-black-900"
              />
            ))}
          </div>

          <h1 className="text-2xl sm:text-3xl font-semibold mb-4 max-w-md leading-snug">
            {AllMembersData.length >= 3 ? (
              <>
                {AllMembersData.slice(0, 3).map((member, index) => (
                  <span key={member.id}>
                    {member.name}
                    {index < 2 ? ", " : ""}
                  </span>
                ))}{" "}
                and {AllMembersData.length - 3} other
                {AllMembersData.length - 3 !== 1 ? "s" : ""} are already here!
              </>
            ) : (
              `${AllMembersData.length} ${AllMembersData.length === 1 ? "person" : "people"} are already here!`
            )}
          </h1>

          <p className="text-sm sm:text-base text-noble-black-300 mb-8 max-w-sm leading-relaxed">
            But... it looks like you don’t have access to this workspace.
          </p>

          <div className="flex flex-col items-center space-y-3 w-[200px] max-w-xs">
            <div className="w-full">
              <ActionButton
                text={isLoading ? "Requesting Access " : "Request Access"}
                onClick={requestJoinWorkspace}
              />
            </div>
            <span className="text-noble-black-300 text-sm">or</span>
            <div className="w-full">
              <ActionButton
                text="Back"
                active={false}
                onClick={() => navigate("/workspace")}
              />
            </div>
          </div>
        </div>

        {/* Footer */}
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
          src="https://i.postimg.cc/c4xjZPTx/1f867457e8a72ca41bfe3580945af97f73e4bd96.png"
          alt="Workspace Illustration"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default AccessRequest;
