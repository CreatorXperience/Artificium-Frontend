import { useState } from "react";
import ChatMemberBtn from "../ChatMemberBtn";
import OnlineOffline from "../OnlineOfflineCard";
import MembersCard from "../MembersCard";

const ChatPanel = () => {
  const [activeTab, setActiveTab] = useState<"chats" | "members">("chats");

  return (
    <div className="pt-9 p-2  dark:bg-noble-black-700 dark:text-noble-black-100 rounded-xl shadow-md h-screen w-[23rem] max-w-md flex flex-col overflow-hidden relative">
      {/* Scrollable content container */}
      <div className="flex-1 overflow-y-auto pr-2 space-y-6">
        {activeTab === "chats" ? <OnlineOffline /> : <MembersCard />}
      </div>

      {/* Sticky Chat/Member button */}
      <div className="sticky bottom-0 z-2 pt-4 pb-2">
        <ChatMemberBtn activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    </div>
  );
};

export default ChatPanel;
