import React, { useState } from "react";
import { TfiWorld } from "react-icons/tfi";
import UserCard from "../UserCard";
import type {User} from "../UserData"
// import UserCard from "./UserCard"; // Adjust this path as needed
// type User = {
//   name: string;
//   status: "online" | "offline" | string;
//   image: string;
// };

type GroupCardProps = {
  title: string;
  icon?: React.ReactNode;
  users: User[];
};

const GroupCard: React.FC<GroupCardProps> = ({ title, icon = <TfiWorld className="text-gray-200 size-6" />, users }) => {
    const [isOpen, setIsOpen] = useState(false);
  const activeUsers = users.filter((user) => user.status !== "offline");

  const toggleOpen = ()=> setIsOpen((prev)=> !prev);

  return (
    <div className={`${isOpen ? "border" : ""} border-gray-700 p-3 mr-7 rounded-2xl`}>
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleOpen}>
        <div className="flex items-center gap-3">
          {icon}
          <p>{title}</p>
        </div>
        <p className="text-[12px] bg-heisenberg-blue-800 p-2 rounded-2xl">
          {users.length}
        </p>
      </div>

    { isOpen && (<div className="flex mt-4 ml-2">
        <div>
          <p className="border border-gray-600 h-37"></p>
        </div>
        <div className="flex flex-col gap-2">
          {activeUsers.map((user, index) => (
            <div key={index} className="flex items-center">
              <p className="border border-gray-500 w-4"></p>
              <UserCard
                name={user.name}
                status={user.status}
                image={user.image}
                size="sm"
              />
            </div>
          ))}
        </div>
      </div>)}
    </div>
  );
};

export default GroupCard;
