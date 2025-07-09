import { LiaUserFriendsSolid } from "react-icons/lia";
import { IoChatboxOutline } from "react-icons/io5";

type Props = {
  activeTab: "chats" | "members";
  setActiveTab: (tab: "chats" | "members") => void;
};

const ChatMemberBtn = ({ activeTab, setActiveTab }: Props) => {
  return (
    <div className="flex border border-gray-700 justify-between p-1 rounded-2xl overflow-hidden">
      <button
        onClick={() => setActiveTab("chats")}
        className={`flex items-center justify-center gap-2 w-1/2 py-2 transition  ${
          activeTab === "chats"
            ? "bg-noble-black-600 rounded-lg h-[100%] text-white"
            : "text-white hover:bg-noble-black-500 rounded-lg"
        }`}
      >
        <IoChatboxOutline className="text-green-600" />
        <span>Chats</span>
      </button>
      <button
        onClick={() => setActiveTab("members")}
        className={`flex items-center justify-center gap-2 w-1/2 py-2 transition ${
          activeTab === "members"
            ? "bg-noble-black-600 rounded-lg h-[100%]"
            : "text-white hover:bg-noble-black-500 rounded-lg"
        }`}
      >
        <span>Members</span>
        <LiaUserFriendsSolid className="text-gray-500" />
      </button>
    </div>
  );
};

export default ChatMemberBtn;
