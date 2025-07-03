import { useState, useRef, useEffect } from 'react';

interface BaseUser {
  id: string;
  avatar: string;
  name: string;
  username: string;
}

interface WithRole<R extends string = string> extends BaseUser {
  role: R;
}

interface UserSearchInputProps<
  TUser extends BaseUser,
  TMember extends WithRole,
> {
  allUsers: TUser[];
  existingMembers: TMember[];
  selectedUsers: TUser[];
  onSelectUser: (user: TUser) => void;
}

const UserSearchInput = <TUser extends BaseUser, TMember extends WithRole>({
  allUsers,
  existingMembers,
  onSelectUser,
  selectedUsers,
}: UserSearchInputProps<TUser, TMember>) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState<TUser[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Filter users based on search term and exclude existing members and already selected users
  useEffect(() => {
    if (searchTerm.length > 0) {
      const existingMemberIds = new Set(
        existingMembers.map((m: TMember) => m.id),
      );
      const selectedUserIds = new Set(selectedUsers.map((u: TUser) => u.id));

      const filtered = allUsers.filter(
        (user: TUser) =>
          !existingMemberIds.has(user.id) &&
          !selectedUserIds.has(user.id) &&
          (user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.username.toLowerCase().includes(searchTerm.toLowerCase())),
      );
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [searchTerm, allUsers, existingMembers, selectedUsers]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleUserSelect = (user: TUser) => {
    onSelectUser(user);
    setSearchTerm('');
    setShowSuggestions(false);
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <div className='relative flex-grow' ref={containerRef}>
      <div className='flex-grow rounded-md flex flex-wrap gap-2  items-center'>
        <input
          ref={inputRef}
          type='text'
          placeholder={selectedUsers.length > 0 ? '' : 'Search users...'}
          className='flex-grow bg-transparent outline-none placeholder-noble-black-400 text-noble-black-100 min-w-[100px]'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          onKeyDown={(e) => {
            // Optional: Add keyboard navigation (up/down arrows, enter) for suggestions
            if (e.key === 'Escape') {
              setShowSuggestions(false);
            }
          }}
        />
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className='absolute top-full left-0 right-0 bg-noble-black-600 border border-noble-black-500 rounded-md shadow-lg mt-1 z-10 max-h-60 overflow-y-auto custom-scrollbar'>
          {suggestions.map((user) => (
            <div
              key={user.id}
              className='flex items-center gap-3 p-3 cursor-pointer hover:bg-noble-black-500 transition-colors'
              onClick={() => handleUserSelect(user)}
            >
              <img
                src={user.avatar}
                alt={user.name}
                className='w-8 h-8 rounded-full object-cover'
              />
              <div>
                <p className='text-noble-black-100 font-medium'>{user.name}</p>
                <p className='text-noble-black-400 text-sm'>@{user.username}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserSearchInput;
