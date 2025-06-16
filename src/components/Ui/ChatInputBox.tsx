import { FiMic, FiPaperclip, FiSend } from "react-icons/fi";

function ChatInput() {
  return (
    <div className="w-full px-4 py-3 rounded-xl bg-[rgba(6,7,8,1)] flex items-center gap-3 font-plus">
      {/* Microphone Icon */}
      <button className="cursor-pointer text-[rgba(155, 156, 158, 1)]">
        <FiMic className="w-5 h-5" />
      </button>

      {/* Input Field */}
      <input
        type="text"
        placeholder="You can ask me anything! I am here to help."
        className="flex-1 bg-transparent text-white placeholder-[rgba(155, 156, 158, 1)] focus:outline-none"
      />

      {/* Attachment Icon */}
      <button className="text-[rgba(155, 156, 158, 1)] cursor-pointer">
        <FiPaperclip className="w-5 h-5" />
      </button>

      {/* Send Button */}
      <button className="bg-[rgba(19,22,25,1)] rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
        <FiSend className="w-4 h-4 text-white" />
      </button>
    </div>
  );
}

export default ChatInput;
