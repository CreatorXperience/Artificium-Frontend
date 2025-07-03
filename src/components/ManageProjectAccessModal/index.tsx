import InitialMembersDisplay from '../InitialProjectMembersDisplay';
import { ManageProjectHeading } from '../ManageProjectHeading';

import SelectedUserDisplay from '../SelectedUsersDisplay';
import { useProjectInviteManager } from '../../hooks/useProjectInviteManager';
import InviteUsersSection from '../InviteUsersSection';
import PublicLinkAccess from '../PublicLinkAccess';
import ModalWrapper from '../ModalWrapper';

export default function ManageProjectAccessModal({
  onCloseModal,
}: {
  onCloseModal: () => void;
}) {
  const {
    currentProjectMembers,
    currentWorkSpaceMembers,
    selectedUsersToInvite,
    publicLinkAccess,

    projectRoles,
    publicAccessLevels,
    setPublicLinkAccess,
    handleAddUserToInvite,
    handleChangeMemberRole,

    handleInviteUsers,
    handleRemoveUserToInvite,
    setInviteRole,
  } = useProjectInviteManager();

  return (
    <ModalWrapper>
      {/* Header */}
      <ManageProjectHeading
        onCloseModal={onCloseModal}
        heading='Manage who can view this project'
        description='Select which users can access and view this project. Only users with access can view and edit the project.'
      />
      {/* Invite Users Section */}
      <InviteUsersSection
        currentProjectMembers={currentProjectMembers}
        currentWorkSpaceMembers={currentWorkSpaceMembers}
        handleAddUserToInvite={handleAddUserToInvite}
        handleRemoveUserToInvite={handleRemoveUserToInvite}
        selectedUsersToInvite={selectedUsersToInvite}
        setInviteRole={setInviteRole}
        projectRoles={projectRoles}
        handleInviteUsers={handleInviteUsers}
      />

      <SelectedUserDisplay
        selectedUsers={selectedUsersToInvite}
        onRemoveUser={handleRemoveUserToInvite}
      />

      {/*Current Project members display */}
      <div className='my-6 max-h-[300px] overflow-y-auto custom-scrollbar'>
        <InitialMembersDisplay
          initialProjectMembers={currentProjectMembers}
          projectRoles={projectRoles}
          handleChangeMemberRole={handleChangeMemberRole}
        />
      </div>
      {/* Public Link */}
      <PublicLinkAccess
        publicLinkAccess={publicLinkAccess}
        setPublicLinkAccess={setPublicLinkAccess}
        publicAccessLevels={publicAccessLevels}
      />
    </ModalWrapper>
  );
}
