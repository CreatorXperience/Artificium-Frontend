import { useState } from "react";
import { FaShareAlt } from "react-icons/fa";
import { FiEdit2 } from "react-icons/fi";
import { HiOutlineChat } from "react-icons/hi";
import { HiOutlineFolder } from "react-icons/hi2";
import { useProject } from "../../hooks/useProject";
import ManageProjectAccessModal from "../ManageProjectAccessModal";

const users = [
  "https://i.postimg.cc/zGZC6dSs/Screenshot-from-2025-07-03-21-11-31.png",
  "https://i.postimg.cc/KYQtKmSb/Screenshot-from-2025-07-03-21-11-43.png",
  "https://i.postimg.cc/gcgB9Pnf/Screenshot-from-2025-07-03-21-11-53.png",
  "https://i.postimg.cc/gcgB9Pnf/Screenshot-from-2025-07-03-21-11-53.png",
];

const tabs = [
  { label: "Artificium", key: "artificium" },
  { label: "Chat", icon: <HiOutlineChat />, key: "chat" },
  { label: "Library", icon: <HiOutlineFolder />, key: "library" },
];

export default function Header() {
  const [activeTab, setActiveTab] = useState("artificium");
  const [isAccessModalOpen, setIsAccessModalOpen] = useState<boolean>(false);

  const project = useProject().activeProject;

  const handleOpenAccessModal = () => setIsAccessModalOpen(true);
  const handleCloseAccessModal = () => setIsAccessModalOpen(false);

  return (
    <div className="rounded-lg" style={{ backgroundColor: "rgba(6, 7, 8, 1)" }}>
      {/* Header */}
      <div
        className="flex items-center justify-between px-6 py-4 border-b"
        style={{ borderColor: "rgba(19, 22, 25, 1)" }}
      >
        {/* Left */}
        <div>
          <h1 className="text-lg font-semibold text-white">{project?.name}</h1>
          <p className="text-sm" style={{ color: "rgba(155, 156, 158, 1)" }}>
            {project?.purpose || "No Description defined for this project."}
          </p>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          {/* Avatars */}
          <div className="flex -space-x-3 items-center">
            {users.map((url, index) => (
              <div
                key={index}
                className="relative w-8 h-8 rounded-md overflow-hidden border-2"
                style={{ borderColor: "rgba(19, 22, 25, 1)" }}
              >
                <img
                  src={url}
                  alt="User"
                  className="w-full h-full object-cover"
                />
                <span
                  className="absolute top-0 right-0 w-2 h-2 rounded-full border-2"
                  style={{
                    backgroundColor: "rgba(74, 201, 126, 1)",
                    borderColor: "rgba(19, 22, 25, 1)",
                  }}
                />
              </div>
            ))}
            <div
              className="w-8 h-8 flex items-center justify-center text-xs text-white font-semibold rounded-md border-2"
              style={{
                backgroundColor: "rgba(26, 29, 33, 1)",
                borderColor: "rgba(19, 22, 25, 1)",
              }}
            >
              +4
            </div>
          </div>

          {/* Share Button */}
          <div
            className="flex items-center gap-2 text-sm cursor-pointer transition-colors"
            style={{ color: "rgba(155, 156, 158, 1)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "rgba(77, 98, 229, 1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "rgba(155, 156, 158, 1)")
            }
            onClick={handleOpenAccessModal}
          >
            <FaShareAlt size={16} />
            <span>Share</span>
          </div>

          {/* Edit Button */}
          <div
            className="w-8 h-8 flex items-center justify-center rounded-md cursor-pointer transition-colors"
            style={{ backgroundColor: "rgba(26, 29, 33, 1)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(77, 98, 229, 1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(26, 29, 33, 1)")
            }
          >
            <FiEdit2 className="text-white" />
          </div>
        </div>
      </div>
      {isAccessModalOpen && (
        <ManageProjectAccessModal onCloseModal={handleCloseAccessModal} />
      )}

      {/* Tabs */}
      <nav className="flex gap-10 px-6  py-6 text-sm">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <div
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className="flex items-center gap-2 mt-2 cursor-pointer relative transition-colors"
              style={{
                color: isActive
                  ? "rgba(154, 211, 127, 1)"
                  : "rgba(155, 156, 158, 1)",
              }}
            >
              {tab.icon ? (
                tab.icon
              ) : (
                <div className="">
                  <img
                    src="https://i.postimg.cc/nLFY8Q8d/Logo.png"
                    alt="Logo"
                    className="h-3"
                  />
                </div>
              )}
              <span>{tab.label}</span>
              {isActive && (
                <div
                  className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full top-[40px]"
                  style={{ backgroundColor: "rgba(154, 211, 127, 1)" }}
                />
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
}
