import ChatInputBox from "../ChatInputBox";
import Header from "./Header";
import InnovationStarterPack from "./innovationPack";

const WorkspaceOverview = () => {
  return (

    <div className="min-h-screen bg-noble-black-500 font-plus p-2  ">
      <div>
        <Header />
        <InnovationStarterPack />
        <ChatInputBox />
      </div>

    <div className="min-h-screen font-plus p-2  ">
      <Header />
      <InnovationStarterPack />
      <ChatInputBox />

    </div>
  );
};

export default WorkspaceOverview;
