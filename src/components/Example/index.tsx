
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdContentCopy } from "react-icons/md";
import { GrGallery } from "react-icons/gr";

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
    <div>
      <div>

        {/* card1 */}

        {/* <div className="flex w-[70rem] gap-3 leading-13 px-10 rounded-3xl py-3  border border-gray-700">
          <img
            className="flex w-10 h-10 rounded-2xl"
            src="https://thumbs.dreamstime.com/b/vector-brush-strokes-circles-paint-white-background-ink-hand-drawn-paint-brush-circle-logo-label-design-element-vector-brush-143779821.jpg"
            alt=""
          />
          <div className="flex justify-between w-full">
            <div>
              <p className="text-gray-400">
                Artificium <span className="text-gray-600">11sec Now</span>{" "}
              </p>
              <p className="text-gray-400">
                Of course! What kind of Ideas are you looking for?
              </p>
              <div className="flex items-center gap-2">
                <p className="bg-noble-black-500 text-gray-300 text-sm rounded-2xl px-4 py-2 cursor-pointer">
                  Regenerate response
                </p>
                <div className="flex items-center bg-noble-black-500 text-gray-300 text-sm rounded-2xl px-4 py-2 cursor-pointer">
                  {" "}
                  <p>Modify</p> <p>{<RiArrowDropDownLine />}</p>{" "}
                </div>
              </div>
            </div>
            <p className="text-gray-600 cursor-pointer">{<MdContentCopy />}</p>
          </div>
        </div> */}

        {/* card 2 */}
        
        {/* <div className="flex w-[70rem] gap-3 leading-13 px-10 rounded-3xl py-4  border border-gray-700">
          <img
            className="flex w-10 h-10 rounded-2xl"
            src="https://thumbs.dreamstime.com/b/vector-brush-strokes-circles-paint-white-background-ink-hand-drawn-paint-brush-circle-logo-label-design-element-vector-brush-143779821.jpg"
            alt=""
          />
          <div className="flex justify-between w-full">
            <div>
              <p className="text-gray-300 font-bold">
                RyanLee <span className="text-gray-500">4sec ago</span>{" "}
              </p>
              <p className="text-gray-300">
                I'm not sure, maybe something related to the spaceship?
              </p>
            </div>
            <p className="text-gray-600 cursor-pointer">{<MdContentCopy />}</p>
          </div>
        </div> */}

        {/* card3 */}
        {/* <div className="flex w-[70rem] gap-3 px-10 rounded-3xl py-3  border border-gray-700">
          <img
            className="flex w-10 h-10 rounded-2xl"
            src="https://thumbs.dreamstime.com/b/vector-brush-strokes-circles-paint-white-background-ink-hand-drawn-paint-brush-circle-logo-label-design-element-vector-brush-143779821.jpg"
            alt=""
          />
          <div className="flex justify-between w-full my-4">
            <div className="flex flex-col gap-5">
              <p className="text-gray-300 font-semibold">
                Artificium <span className="text-gray-600">11sec Now</span>{" "}
              </p>
              <p className="text-gray-400">
                Of course! What kind of Ideas are you looking for?
              </p>

              <div className="flex gap-6">
                
                <div className="border border-gray-700 bg-noble-black-500/70 flex flex-col gap-4 items-left w-[12rem] pl-3 py-10 rounded-3xl">
                  <GrGallery className="text-indigo-500" size={30}/>
                  <div className="leading-5">
                  <p>Image</p>
                  <p>Generator</p>
                  </div>
                </div>
                <div className="border border-gray-700 bg-noble-black-500/70 flex flex-col gap-4 items-left w-[11rem] pl-3 py-10 rounded-3xl">
                  <GrGallery size={30}/>
                  <div className="leading-5">
                  <p>Code</p>
                  <p>Engeneering</p>
                  </div>
                </div>
                <div className="border border-gray-700 bg-noble-black-500/70 flex flex-col gap-4 items-left w-[11rem] pl-3 py-10 rounded-3xl">
                  <GrGallery size={30}/>
                  <div className="leading-5">
                  <p>Content</p>
                  <p>Creation</p>
                  </div>
                </div>
                <div className="border border-gray-700 bg-noble-black-500/70 flex flex-col gap-4 items-left w-[11rem] pl-3 py-10 rounded-3xl">
                  <GrGallery size={30}/>
                  <div className="leading-5">
                  <p>Idea</p>
                  <p>Generation</p>
                  </div>
                </div>
                <div className="border border-gray-700 bg-noble-black-500/70 flex flex-col gap-4 items-left w-[11rem] pl-3 py-10 rounded-3xl">
                  <GrGallery size={30}/>
                  <div className="leading-5">
                  <p>Audio/Video</p>
                  <p>Creation</p>
                  </div>
                </div>
              </div>


              <div className="flex items-center gap-2">
                <p className="bg-noble-black-500 text-gray-300 text-sm rounded-2xl px-4 py-2 cursor-pointer">
                  Regenerate response
                </p>
                <div className="flex items-center bg-noble-black-500 text-gray-300 text-sm rounded-2xl px-4 py-2 cursor-pointer">
                  {" "}
                  <p>Modify</p> <p>{<RiArrowDropDownLine />}</p>{" "}
                </div>
              </div>
            </div>
            <p className="text-gray-600 cursor-pointer">{<MdContentCopy />}</p>
          </div>
        </div> */}
      </div>
    </div>

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
