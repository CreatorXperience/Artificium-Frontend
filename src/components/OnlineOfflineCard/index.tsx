import { IoMoonOutline } from "react-icons/io5";
import { MdDoNotDisturbOnTotalSilence } from "react-icons/md";
import { FiCircle } from "react-icons/fi";

type UserStatus = "online" | "offline" | "away" | "dnd";

type User = {
  name: string;
  status: UserStatus;
  activity: string;
  location: string;
  image: string;
};

const users: User[] = [
  {
    name: "Adam Green",
    status: "online",
    activity: "Exploring",
    location: "Library",
    image:
      "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Sarah White",
    status: "offline",
    activity: "10-11-0",
    location: "Café",
    image:
      "https://i.pinimg.com/736x/e1/c6/0e/e1c60e9b11744e70db6fe425296a5471.jpg",
  },
  {
    name: "Luke Sky",
    status: "away",
    activity: "On a break",
    location: "Garden",
    image:
      "https://gratisography.com/wp-content/uploads/2024/11/gratisography-augmented-reality-800x525.jpg",
  },
  {
    name: "Jane Doe",
    status: "dnd",
    activity: "Do not disturb",
    location: "Studio",
    image:
      "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg",
  },
];

const OnlineOffline = () => {
  return (
    <div className="p-4 border border-gray-600 rounded-xl shadow-md space-y-6 w-[23rem] max-w-md">
      <div>
        <p className="text-gray-500 ml-4 text-sm mb-2">Currently Online</p>
        <div className="flex flex-col gap-4">
        {users
          .filter((user) => user.status !== "offline")
          .map((user, index) => (
            <UserCard key={index} user={user} />
          ))}

        </div>
      </div>

      <div>
        <p className="text-gray-500 ml-4 text-sm mb-2">Offline</p>
        {users
          .filter((user) => user.status === "offline")
          .map((user, index) => (
            <UserCard key={index} user={user} />
          ))}
      </div>
    </div>
  );
};

type UserCardProps = {
  user: User;
};

const UserCard = ({ user }: UserCardProps) => {

  const renderStatusIndicator = () => {
    switch (user.status) {
      case "online":
        return <span className="absolute bottom-12 right-0 w-3 h-3 bg-green-500 rounded-full" />;
      case "offline":
        return <span className="absolute bottom-12 right-0 w-3 h-3 bg-gray-400 rounded-full" />;
      case "away":
        return (
          <IoMoonOutline
            size={16}
            className="absolute bottom-12 right-0 text-orange-400 font-bold rounded-full p-0.5"
          />
        );
      case "dnd":
        return (
          <MdDoNotDisturbOnTotalSilence
            size={16}
            className="absolute bottom-12 right-0 text-red-300 rounded-full p-0.5"
          />
        );
      default:
        return null;
    }
  };
  

  return (
    <div className="flex ml-4 items-center gap-4 relative">
      <div className="relative">
        <img
          src={user.image}
          alt={user.name}
          className={`w-[55px] h-[55px] object-cover rounded-2xl ${user.status === "offline" ? "opacity-40" : ""}`}
        />
        {renderStatusIndicator()}
      </div>
      <div>
        <p className={`font-semibold ${user.status === "offline" ? "text-gray-600" : ""}`}>{user.name}</p>
        <p className={`text-sm ${user.status === "dnd" ? "text-red-500" : user.status === "away" ? "text-orange-500" : user.status === "offline" ? "text-gray-500" : "text-gray-500"}`}>
          {user.activity}{" "}
          <span className={`${user.status === "away" ? "text-gray-400" : user.status === "dnd" ? "hidden" :  user.status === "offline" ? "text-orange-500 hidden" : "text-blue-600"} font-medium`}>{user.status === "offline" ? "12:99-00" : user.status === "dnd" ? "Do not disturb" :  user.location}</span>
        </p>
      </div>
    </div>
  );
};

export default OnlineOffline;
