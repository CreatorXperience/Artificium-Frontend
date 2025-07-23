// import ChatInputBox from "../ChatInputBox";
import Header from './Header';
import InnovationStarterPack from './innovationPack';
import IntegrationManager from '../IntegrationManager';

const WorkspaceOverview = () => {
  return (
    <div className='min-h-screen bg-noble-black-500 font-plus p-2  '>
      <div>
        <Header />
        <InnovationStarterPack />
        <IntegrationManager />
      </div>
    </div>
  );
};

export default WorkspaceOverview;
