import { useState } from "react";
// import ChatMemberBtn from "../ChatMemberBtn";
import { IoIosArrowForward } from "react-icons/io";
import { BiSolidLockAlt } from "react-icons/bi";
import { TfiWorld } from "react-icons/tfi";
import UserCard from "../UserCard";
import useUsers from "../UserData";

const MembersCard = () => {
  const [showSecrets, setShowSecrets] = useState(false);
  const users = useUsers();

  return (
    <div className="">
      <div className="flex flex-col gap-10">
        <div className="flex items-center gap-3 ml-3">
          <IoIosArrowForward />
          <p>Information</p>
        </div>

        <div className="flex flex-col gap-3 ml-3">
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setShowSecrets((prev) => !prev)}
          >
            <IoIosArrowForward
              className={`transition-transform duration-200 ${
                showSecrets ? "rotate-90" : ""
              }`}
            />
            <p>Public Channels</p>
          </div>

          {showSecrets && (
            <div className="mt-2 flex flex-col gap-3 text-gray-400">
              <div className="flex items-center gap-3 py-4">
                <BiSolidLockAlt className="text-gray-500 size-6" />
                <p>Top Secret</p>
              </div>
              <div className="flex items-center gap-3">
                <TfiWorld className="text-gray-500 size-6" />
                <p>FeedBack</p>
              </div>
            </div>
          )}
        </div>

        <div className="border border-gray-700 p-3 mr-7 rounded-2xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <TfiWorld className="text-gray-200 size-6" />
              <p>Spaceship Crew</p>
            </div>
            <p className="text-[12px] bg-heisenberg-blue-800 p-2 w-[35px] flex justify-center rounded-xl inset-shadow-xs inset-shadow-noble-black-500 bg-linear-to-r from-stem-green-800 from-0%  via-stem-green-900 via-5%   to-noble-black-900 to-70% backdrop-blur-xs ">
              {users.length}
            </p>
          </div>
          {/* 
          <div className="flex mt-4 ml-2">
            <div className="flex flex-col gap-2">
              {users.map((user, index) => (
                <UserCard key={index} {...user} size="sm" />
              ))}
            </div>
          </div> */}
          <div className="flex mt-4 ml-2">
            <div>
              <p className="border border-gray-600 h-37"></p>
              {/* <p className="border border-gray-500 w-4 mt-1.5 ml-2"></p> */}
            </div>
            <div className="flex flex-col gap-2">
              {users
                .filter((user) => user.status !== "offline")
                .map((user, index) => (
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
          </div>
        </div>

        <div className="flex items-center gap-3 ml-3">
          <TfiWorld className="text-gray-200 size-6" />
          <p>User Interface</p>
        </div>
        <div className="flex items-center gap-3 ml-3">
          <TfiWorld className="text-gray-200 size-6" />
          <p>User Experience</p>
        </div>

        <div className="flex items-center gap-3 ml-3">
          <IoIosArrowForward />
          <p>Private Channels</p>
        </div>
        {/* <ChatMemberBtn /> */}
      </div>
    </div>
  );
};

export default MembersCard;
