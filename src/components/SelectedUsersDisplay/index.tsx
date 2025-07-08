import { useState } from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import { MdOutlineAddCircleOutline } from 'react-icons/md';
import { TbCircleMinus } from 'react-icons/tb';

interface WithAvartar {
  id: string;
  avatar: string;
  name: string;
}

export default function SelectedUserDisplay<T extends WithAvartar>({
  selectedUsers,
  onRemoveUser,
}: {
  selectedUsers: T[];
  onRemoveUser: (userId: string) => void;
}) {
  const [isFullyDisplayed, setIsFullyDisplayed] = useState(false);

  const currentlyDisplayed = isFullyDisplayed ? selectedUsers.length : 2;

  return (
    <>
      <div className='flex flex-wrap gap-2 my-2 w-4/5 overflow-y-auto max-h-16 custom-scrollbar'>
        {selectedUsers.slice(0, currentlyDisplayed).map((user) => (
          <div
            key={user.id}
            className='bg-noble-black-600 text-noble-black-300 rounded-xl px-3 py-1 text-sm flex items-center gap-2'
          >
            <img
              src={user.avatar}
              alt={user.name}
              className='w-7 h-7 rounded-full object-cover'
            />
            <p className='flex-grow'>{user.name}</p>
            <button
              type='button'
              aria-label='cancel'
              onClick={(e) => {
                e.stopPropagation();
                onRemoveUser(user.id);
              }}
              className='ml-1 text-xs text-noble-black-100/70 hover:text-noble-black-100 cursor-pointer'
            >
              <IoCloseOutline fontSize={'1.2rem'} />
            </button>
          </div>
        ))}
      </div>
      {selectedUsers.length > 2 && (
        <p
          onClick={() => setIsFullyDisplayed(!isFullyDisplayed)}
          className='flex items-center gap-2 text-xs cursor-pointer'
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
              ? `and ${selectedUsers.length - currentlyDisplayed} more others`
              : `collapse`}
          </span>
        </p>
      )}
    </>
  );
}
