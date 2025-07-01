import StatusIndicator from "../StatusIndicator";
import type { User } from "../UserData";

type Props = User & {
  size?: "sm" | "md";
};

const UserCard = ({
  name,
  image,
  status,
  activity,
  location,
  size = "md",
}: Props) => {
  const imageSize = size === "sm" ? "w-[35px] h-[35px]" : "w-[55px] h-[55px]";
  const position = size === "sm" ? "bottom-6 right-0" : "bottom-12 right-0";

  return (
    <div className="flex items-center gap-4 relative ml-4">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className={`${imageSize} object-cover rounded-2xl ${
            status === "offline" ? "opacity-40" : ""
          }`}
        />
        <StatusIndicator status={status} position={position} />
      </div>
      <div>
        <p
          className={`font-semibold ${
            status === "offline" ? "text-gray-600" : "text-white"
          }`}
        >
          {name}
        </p>
        {activity && (
          <p
            className={`text-sm ${
              status === "dnd"
                ? "text-red-500"
                : status === "away"
                ? "text-orange-500"
                : "text-gray-400"
            }`}
          >
            {activity}{" "}
            {location && (
              <span
                className={`text-blue-600 font-medium ${
                  status === "away"
                    ? "text-gray-500"
                    : status === "dnd"
                    ? "hidden"
                    : ""
                }`}
              >
                {status === "offline" ? "" : location}
              </span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default UserCard;
