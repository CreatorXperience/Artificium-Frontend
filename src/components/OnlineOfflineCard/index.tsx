import useUsers from "../UserData";
import UserCard from "../UserCard";

const OnlineOffline = () => {
  const users = useUsers();

  return (
    <div className="">
      <div>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 ml-4 text-sm mb-2">Currently Online</p>
          <p className="text-gray-500 text-sm">
            {users.filter((u) => u.status !== "offline").length}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {users
            .filter((user) => user.status !== "offline")
            .map((user, index) => (
              <UserCard key={index} {...user} />
            ))}
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 ml-4 text-sm mt-4">Offline</p>
          <p className="text-gray-500 text-sm">
            {users.filter((u) => u.status === "offline").length}
          </p>
        </div>
        {users
          .filter((user) => user.status === "offline")
          .map((user, index) => (
            <UserCard key={index} {...user} />
          ))}
      </div>
    </div>
  );
};

export default OnlineOffline;
