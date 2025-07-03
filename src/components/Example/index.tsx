import { useState } from "react";
import { FiMail } from "react-icons/fi";
import FormInput from "../FormInput";
import ChatInputBox from "../ChatInputBox";

import SocialButton from "../SocialButton";
import { FaApple, FaGoogle } from "react-icons/fa";
import IdeaCard_1 from "../IdeaCard_1";
import IdeaCard_2 from "../IdeaCard_2";
import IdeaCard_3 from "../IdeaCard_3";
import ActionButton from "../ActionButton";
import ChatPanel from "../ChatPanel";
import LeftSidebar from "../LeftSidebar";
import ManageProjectAccessModal from "../ManageProjectAccessModal";
import WorkspaceOverview from "../WorkSpaceOverview/index";

const ExampleComponent = () => {
  const [count, setCount] = useState<number>(0);
  const [isAccessModalOpen, setIsAccessModalOpen] = useState<boolean>(false);

  const handleOpenAccessModal = () => setIsAccessModalOpen(true);
  const handleCloseAccessModal = () => setIsAccessModalOpen(false);

  const handleLogin = () => {
    alert("login successful");
    console.log("====================================");
    console.log("working");
    console.log("====================================");
  };

  return (
    <>
      <h1 className="text-noble-black-100 text-3xl">Project Access Manager</h1>
      <button
        onClick={handleOpenAccessModal}
        className="ml-4 px-4 py-2 bg-day-blue-500 text-noble-black-900 rounded-md hover:bg-day-blue-600 transition-colors"
      >
        Open Manage Access
      </button>

      {isAccessModalOpen && (
        <ManageProjectAccessModal onCloseModal={handleCloseAccessModal} />
      )}

      <div>
        <div>
          <IdeaCard_1 />
          <IdeaCard_2 />
          <IdeaCard_3 />
        </div>
        <ChatPanel />
      </div>

      <h1 className="bg-gradient-green-blue-500 font-plus">Vite + React</h1>
      <h1 className="bg-gradient-green-blue-500">Vite + React</h1>
      <h1 className="bg-gradient-blue-green-500">Vite + React</h1>
      <h1 className="bg-gradient-green-blue-dayblue-500">Vite + React</h1>
      <h1 className="bg-gradient-dayblue-blue-green-500">Vite + React</h1>
      <h1 className="bg-gradient-green-blue-dayblue-600">Vite + React</h1>
      <h1 className="bg-gradient-dayblue-blue-green-600">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gradient-green-blue-500">
        Click on the Vite and React logos to learn more
      </p>
      <p className="text-gradient-blue-green-500">
        Click on the Vite and React logos to learn more
      </p>
      <p className="text-gradient-green-blue-dayblue-500">
        Click on the Vite and React logos to learn more
      </p>
      <p className="text-gradient-dayblue-blue-green-500">
        Click on the Vite and React logos to learn more
      </p>
      <p className="text-gradient-dayblue-blue-green-600">
        Click on the Vite and React logos to learn more
      </p>
      <p className="text-gradient-dayblue-blue-green-600 mb-7">
        Click on the Vite and React logos to learn more
      </p>

      <FormInput placeholder="Email" icon={<FiMail />} />
      <ChatInputBox />
      <ActionButton text="Login" onClick={handleLogin} active={true} />
      <ActionButton text="Login" onClick={handleLogin} active={false} />
      <SocialButton
        icon={<FaGoogle />}
        text="Login"
        onClick={handleLogin}
        // active={false}
      />
      <SocialButton
        icon={<FaApple />}
        text="Login"
        onClick={handleLogin}
        // active={false}
      />

      <FormInput
        placeholder="Email"
        icon={<FiMail />}
        placeholderPosition="left"
      />
      <LeftSidebar />
      <WorkspaceOverview />
    </>
  );
};

export default ExampleComponent;
