import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { TfiWorld } from "react-icons/tfi";
import useUsers from "../UserData";
import GroupCard from "../GroupCard";
const MembersCard = () => {
  const [showSecrets, setShowSecrets] = useState(true);
  const [showInformation, setShowInformation] = useState(false);
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
            <p>Private Channels</p>
          </div>

          {showInformation && (
            <div className="mt-2 flex flex-col gap-5 text-gray-400">
              <GroupCard
                users={users}
                title="Top Secret"
                icon={<TfiWorld className="size-6" />}
              />
              <GroupCard
                users={users}
                title="Feedback"
                icon={<TfiWorld className="size-6" />}
              />
              <GroupCard
                users={users}
                title="Spaceship"
                icon={<TfiWorld className="size-6" />}
              />
              <GroupCard
                users={users}
                title="User Interface"
                icon={<TfiWorld className="size-6" />}
              />
              <GroupCard
                users={users}
                title="User Experience"
                icon={<TfiWorld className="size-6" />}
              />
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
              <GroupCard
                users={users}
                title="Top Secret"
                icon={<TfiWorld className="size-6" />}
              />
              <GroupCard
                users={users}
                title="Feedback"
                icon={<TfiWorld className="size-6" />}
              />
              <GroupCard
                users={users}
                title="Spaceship"
                icon={<TfiWorld className="size-6" />}
              />
              <GroupCard
                users={users}
                title="User Interface"
                icon={<TfiWorld className="size-6" />}
              />
              <GroupCard
                users={users}
                title="User Experience"
                icon={<TfiWorld className="size-6" />}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
