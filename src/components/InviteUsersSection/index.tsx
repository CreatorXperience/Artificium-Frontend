import { RxCaretDown } from 'react-icons/rx';
import InviteModalButton from '../InviteModalButton';
import UserSearchInput from '../UserSearchInput';

interface BaseUser {
  id: string;
  avatar: string;
  name: string;
  username: string;
}

interface WithRole<R extends string = string> extends BaseUser {
  role: R;
}

interface InviteUsersSectionProps<
  TUser extends BaseUser,
  TMember extends WithRole,
  TRole extends string = string,
> {
  currentProjectMembers: TMember[];
  currentWorkSpaceMembers: TUser[];
  handleAddUserToInvite: (user: TUser) => void;
  handleRemoveUserToInvite: (userId: string) => void;
  selectedUsersToInvite: TUser[];
  setInviteRole: React.Dispatch<React.SetStateAction<TRole>>;
  projectRoles: string[];
  handleInviteUsers: () => void;
}

export default function InviteUsersSection<
  TUser extends BaseUser,
  TMember extends WithRole<TRole>,
  TRole extends string = string,
>({
  currentProjectMembers,
  currentWorkSpaceMembers,
  handleAddUserToInvite,
  handleRemoveUserToInvite,
  selectedUsersToInvite,
  setInviteRole,
  projectRoles,
  handleInviteUsers,
}: InviteUsersSectionProps<TUser, TMember, TRole>) {
  return (
    <div className='flex w-full justify-between gap-4'>
      <div className='p-4 py-2 border rounded-2xl border-noble-black-600 flex-grow'>
        <div className='flex items-start justify-between gap-2'>
          {/* Changed to items-start for better alignment with chips */}

          <UserSearchInput
            allUsers={currentWorkSpaceMembers}
            existingMembers={currentProjectMembers}
            onSelectUser={handleAddUserToInvite}
            onRemoveUser={handleRemoveUserToInvite}
            selectedUsers={selectedUsersToInvite}
          />

          <div className='relative flex items-center'>
            <select
              aria-label='role'
              className='text-gradient-blue-green-500 bg-transparent hover:bg-noble-black-700 hover:text-electric-green-600  px-4 appearance-none cursor-pointer pr-6 outline-0 text-xs'
              onChange={(e) => setInviteRole(e.target.value as TRole)}
            >
              {/* Map projectRoles for options, maybe filter to 'Editor' and 'Viewer' */}
              {projectRoles
                .filter((role) => role !== 'Owner')
                .map((role) => (
                  <option key={role} value={role}>
                    {role.toLowerCase().includes('editor')
                      ? 'can edit'
                      : 'can view'}
                  </option>
                ))}
            </select>
            <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-electric-green-600'>
              <RxCaretDown />
            </div>
          </div>
        </div>
      </div>
      <InviteModalButton handleInvite={handleInviteUsers} />
    </div>
  );
}
