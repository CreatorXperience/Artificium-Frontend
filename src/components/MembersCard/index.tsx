import { useState } from "react";
// import ChatMemberBtn from "../ChatMemberBtn";
import { IoIosArrowForward } from "react-icons/io";
import { AiTwotoneLock } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
// import UserCard from "../UserCard";
import useUsers from "../UserData";
import GroupCard from "../GroupCard";


const MembersCard = () => {
  const [showSecrets, setShowSecrets] = useState(false);
  const [showInformation, setShowInformation] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const users = useUsers();

  

  return (
    <div className="">
      <div className="flex flex-col gap-10">

        <div className="flex flex-col gap-3 ml-3">
          <div
            className="flex items-center gap-3 ml-[0.7rem] cursor-pointer"
            onClick={() => setShowInformation((prev) => !prev)}
          >
            <IoIosArrowForward
              className={`transition-transform duration-200 ${
                showInformation ? "rotate-90" : ""
              }`}
            />
            <p>Information</p>
          </div>

          {showInformation && (
            <div className="mt-2 flex flex-col gap-5 text-gray-400">
              <div className="flex items-center ml-[0.7rem] gap-3">
                <AiTwotoneLock className="text-gray-500 size-6" />
                <p>Top Secret</p>
              </div>
              <GroupCard users={users} title="Feedback" icon={<TfiWorld className="size-6"/>}/>
              <GroupCard users={users} title="Spaceship" icon={<TfiWorld className="size-6"/>}/>
              <GroupCard users={users} title="User Interface" icon={<TfiWorld className="size-6"/>}/>
              <GroupCard users={users} title="User Experience" icon={<TfiWorld className="size-6"/>}/>

            </div>
          )}
        </div>


        <div className="flex flex-col gap-3 ml-3">
          <div
            className="flex items-center gap-3 ml-[0.7rem] cursor-pointer"
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
            <div className="mt-2 flex flex-col gap-5 text-gray-400">
              <div className="flex items-center ml-[0.7rem] gap-3">
                <AiTwotoneLock className="text-gray-500 size-6" />
                <p>Top Secret</p>
              </div>
              <GroupCard users={users} title="Feedback" icon={<TfiWorld className="size-6"/>}/>
              <GroupCard users={users} title="Spaceship" icon={<TfiWorld className="size-6"/>}/>
              <GroupCard users={users} title="User Interface" icon={<TfiWorld className="size-6"/>}/>
              <GroupCard users={users} title="User Experience" icon={<TfiWorld className="size-6"/>}/>

            </div>
          )}
        </div>


        <div className="flex flex-col gap-3 ml-3">
          <div
            className="flex items-center gap-3 ml-[0.7rem] cursor-pointer"
            onClick={() => setShowPrivacy((prev) => !prev)}
          >
            <IoIosArrowForward
              className={`transition-transform duration-200 ${
                showPrivacy ? "rotate-90" : ""
              }`}
            />
            <p>Private Channels</p>
          </div>

          {showPrivacy && (
            <div className="mt-2 flex flex-col gap-5 text-gray-400">
              <div className="flex items-center ml-[0.7rem] gap-3">
                <AiTwotoneLock className="text-gray-500 size-6" />
                <p>Top Secret</p>
              </div>
              <GroupCard users={users} title="Feedback" icon={<TfiWorld className="size-6"/>}/>
              <GroupCard users={users} title="Spaceship" icon={<TfiWorld className="size-6"/>}/>
              <GroupCard users={users} title="User Interface" icon={<TfiWorld className="size-6"/>}/>
              <GroupCard users={users} title="User Experience" icon={<TfiWorld className="size-6"/>}/>

            </div>
          )}
        </div>
        {/* <ChatMemberBtn /> */}
      </div>
    </div>
  );
};

export default MembersCard;
