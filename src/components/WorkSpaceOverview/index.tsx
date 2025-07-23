// import ChatInputBox from "../ChatInputBox";
import Header from './Header';
import InnovationStarterPack from './innovationPack';
import IntegrationManager from '../IntegrationManager';

const WorkspaceOverview = () => {
  return (
    <div className='min-h-screen font-plus p-2'>
      <Header />
      <InnovationStarterPack />
      <IntegrationManager />
    </div>
  );
};

export default WorkspaceOverview;
