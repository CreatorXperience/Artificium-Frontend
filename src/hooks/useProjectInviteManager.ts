import { useState } from 'react';
import {
  initialProjectMembers,
  workSpaceMembers,
  projectRoles,
  publicAccessLevels,
  type AccessLevels,
  type ProjectMember,
  type Role,
  type User,
} from '../data/dummyUserdata';

export function useProjectInviteManager() {
  const [currentWorkSpaceMembers] = useState<User[]>(workSpaceMembers);

  const [currentProjectMembers, setCurrentProjectMembers] = useState<
    ProjectMember[]
  >(initialProjectMembers);

  const [selectedUsersToInvite, setSelectedUsersToInvite] = useState<User[]>(
    [],
  );
  const [inviteRole, setInviteRole] = useState<Role>('Editor');

  const [publicLinkAccess, setPublicLinkAccess] =
    useState<AccessLevels>('can view');

  const handleAddUserToInvite = function (user: User) {
    setSelectedUsersToInvite((prev) => {
      if (!prev.some((u) => u.id === user.id)) {
        return [...prev, user];
      }
      return prev;
    });
  };

  const handleRemoveUserToInvite = function (userId: string) {
    setSelectedUsersToInvite((prev) =>
      prev.filter((user) => user.id !== userId),
    );
  };

  const handleChangeMemberRole = function (userId: string, newRole: string) {
    setCurrentProjectMembers((members) =>
      members.map((member) =>
        member.id === userId ? { ...member, role: newRole as Role } : member,
      ),
    );
  };

  // Dummy function to simulate inviting users
  const handleInviteUsers = () => {
    if (selectedUsersToInvite.length > 0) {
      const newMembers = selectedUsersToInvite.map((user) => ({
        ...user,
        role: inviteRole, // Use the selected invite role
      }));

      // Filter out any new members who are already present in currentProjectMembers
      const existingMemberIds = new Set(currentProjectMembers.map((m) => m.id));
      const membersToAdd = newMembers.filter(
        (newMem) => !existingMemberIds.has(newMem.id),
      );

      setCurrentProjectMembers((prev) => [...prev, ...membersToAdd]);
      setSelectedUsersToInvite([]);
    }
  };

  return {
    currentWorkSpaceMembers,
    currentProjectMembers,
    selectedUsersToInvite,
    inviteRole,
    publicLinkAccess,
    projectRoles,
    publicAccessLevels,
    handleAddUserToInvite,
    handleRemoveUserToInvite,
    handleChangeMemberRole,
    handleInviteUsers,
    setInviteRole,
    setPublicLinkAccess,
  };
}
