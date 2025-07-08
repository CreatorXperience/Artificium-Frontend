import { RxCaretDown } from 'react-icons/rx';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { useState } from 'react';
import { TbCircleMinus } from 'react-icons/tb';

interface WithRole<R extends string> {
  id: string;
  avatar: string;
  name: string;
  username: string;
  role: R;
}

export default function InitialMembersDisplay<
  TRole extends string,
  TMembers extends WithRole<TRole>,
>({
  initialProjectMembers,
  projectRoles,
  handleChangeMemberRole,
}: {
  initialProjectMembers: TMembers[];
  projectRoles: TRole[];
  handleChangeMemberRole: (userId: string, newRole: string) => void;
}) {
  const [isFullyDisplayed, setIsFullyDisplayed] = useState(false);

  const currentlyDisplayed = isFullyDisplayed
    ? initialProjectMembers.length
    : 4;

  return (
    <div className={`space-y-4 ${isFullyDisplayed && 'mr-4'}`}>
      {initialProjectMembers.slice(0, currentlyDisplayed).map((member) => (
        <div key={member.id} className='flex items-center justify-between'>
          <div className='flex gap-3 items-center'>
            <img
              src={member.avatar}
              alt={member.name}
              className='w-10 h-10 rounded-full object-cover'
            />
            <div>
              <p className='text-noble-black-100 font-medium'>{member.name}</p>
              <p className='text-gradient-blue-green-500 text-sm'>
                @{member.username}
              </p>
            </div>
          </div>
          <div className='relative'>
            <select
              aria-label='role'
              className={`${
                member.role === 'Owner'
                  ? 'bg-noble-black-800 text-electric-green-600'
                  : member.role === 'Editor'
                  ? 'text-heisenberg-blue-600 bg-noble-black-800 outline-0 pr-5'
                  : 'text-purple-blue-300 bg-noble-black-800 pr-8'
              } rounded-lg py-1.5 cursor-pointer font-medium appearance-none text-xs text-shadow-2xs px-2`}
              // name=''
              // id=''
              value={member.role}
              disabled={member.role === 'Owner'}
              onChange={(e) =>
                handleChangeMemberRole(member.id, e.target.value)
              }
            >
              {projectRoles.map((role) => (
                <option
                  key={role}
                  value={role}
                  disabled={
                    (member.role === 'Owner' && role !== 'Owner') ||
                    role === 'Owner'
                  }
                >
                  {role}
                </option>
              ))}
            </select>
            {member.role !== 'Owner' && ( // Only show dropdown arrow if not owner
              <div
                className={`${
                  member.role === 'Editor'
                    ? 'text-heisenberg-blue-600'
                    : 'text-purple-blue-300'
                } pointer-events-none absolute inset-y-0 right-0 flex items-center px-2`}
              >
                <RxCaretDown />
              </div>
            )}
          </div>
        </div>
      ))}
      {initialProjectMembers.length > 4 && (
        <div
          className={` text-noble-black-300 text-xs mt-4 cursor-pointer hover:text-noble-black-100 flex items-center gap-1`}
          onClick={() => setIsFullyDisplayed(!isFullyDisplayed)}
        >
          <span>
            {!isFullyDisplayed ? (
              <MdOutlineAddCircleOutline />
            ) : (
              <TbCircleMinus />
            )}
          </span>
          <span>
            {!isFullyDisplayed
              ? `and ${
                  initialProjectMembers.length - currentlyDisplayed
                } more others`
              : `collapse`}
          </span>
        </div>
      )}
    </div>
  );
}
