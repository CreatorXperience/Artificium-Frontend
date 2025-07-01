import { IoMoonOutline } from "react-icons/io5";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import type { UserStatus } from "../UserData";

type Props = {
  status: UserStatus;
  position?: string;
};

const StatusIndicator = ({ status, position = "bottom-6 right-0" }: Props) => {
  switch (status) {
    case "online":
      return <span className={`absolute ${position} w-2 h-2 bg-green-500 rounded-full`} />;
    case "offline":
      return <span className={`absolute ${position} w-2 h-2 bg-gray-400 rounded-full`} />;
    case "away":
      return (
        <IoMoonOutline
          size={16}
          className={`absolute ${position} text-orange-400 rounded-full p-0.5`}
        />
      );
    case "dnd":
      return (
        <MdDoNotDisturbOnTotalSilence
          size={16}
          className={`absolute ${position} text-red-300 rounded-full p-0.5`}
        />
      );
    default:
      return null;
  }
};

export default StatusIndicator;
