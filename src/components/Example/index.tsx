import { useState } from "react";
import viteLogo from "../../../public/vite.svg";
import reactLogo from "../../assets/react.svg";
import { FiMail } from "react-icons/fi";
import FormInput from "../Ui/FormInput";
import ChatInputBox from "../Ui/ChatInputBox";
import ActionButton from "../Ui/ActionButton";
import SocialButton from "../Ui/SocialButton";
import { FaApple,FaGoogle } from "react-icons/fa";




const ExampleComponent = () => {
  const [count, setCount] = useState<number>(0);
  const handleLogin = () => {
    alert("login successful")
    console.log('====================================');
    console.log("working");
    console.log('====================================');
  }
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="bg-gradient-green-blue-500 font-plus">Vite + React</h1>
      <h1 className="bg-gradient-green-blue-500">Vite + React</h1>
      <h1 className="bg-gradient-blue-green-500">Vite + React</h1>
      <h1 className="bg-gradient-green-blue-dayblue-500">Vite + React</h1>
      <h1 className="bg-gradient-dayblue-blue-green-500">Vite + React</h1>
      <h1 className="bg-gradient-green-blue-dayblue-600">Vite + React</h1>
      <h1 className="bg-gradient-dayblue-blue-green-600">Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          {/* count is {count} */}
        </button>
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
      <SocialButton icon={<FaGoogle />} text="Login" onClick={handleLogin} active={false} />
      <SocialButton icon={<FaApple />} text="Login" onClick={handleLogin} active={false} />

      <FormInput
        placeholder="Email"
        icon={<FiMail />}
        placeholderPosition="left"
      />

     
    </>
  );
};

export default ExampleComponent;
