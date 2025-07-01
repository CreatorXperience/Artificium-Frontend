import { useState } from 'react';
import { AiOutlineLink } from 'react-icons/ai';
import { HiOutlineGlobeAlt } from 'react-icons/hi';
import { RxCaretDown } from 'react-icons/rx';

interface PublicLinkAccessProps<TAccess extends string> {
  publicLinkAccess: TAccess;
  setPublicLinkAccess: React.Dispatch<React.SetStateAction<TAccess>>;
  publicAccessLevels: TAccess[];
}

export default function PublicLinkAccess<TAccess extends string>({
  publicLinkAccess,
  setPublicLinkAccess,
  publicAccessLevels,
}: PublicLinkAccessProps<TAccess>) {
  const [isLinkCopied, setIsLinkCopied] = useState<boolean>(false);

  const handleCopyLink = function () {
    navigator.clipboard.writeText('https://yourproject.com/share-link');
    setIsLinkCopied(true);
    setTimeout(() => {
      setIsLinkCopied(false);
    }, 3000);
  };
  return (
    <div className='flex justify-around items-center gap-1'>
      <div className='flex bg-noble-black-800 py-3.5 px-3 justify-between flex-grow rounded-l-2xl'>
        <div className='flex items-center gap-3'>
          <div className='bg-noble-black-600 p-2 rounded-full'>
            <HiOutlineGlobeAlt />
          </div>
          <div>
            <p className='text-noble-black-100 font-medium'>
              Anyone with the link
            </p>
          </div>
        </div>
        <div className='relative flex'>
          <select
            value={publicLinkAccess}
            onChange={(e) => setPublicLinkAccess(e.target.value as TAccess)}
            className='text-gradient-blue-green-500 bg-transparent hover:bg-noble-black-700 hover:text-electric-green-600 appearance-none cursor-pointer px-4 pr-6 outline-0 text-xs'
            aria-label='access'
          >
            {publicAccessLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
          <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-electric-green-600'>
            <RxCaretDown />
          </div>
        </div>
      </div>

      <div className='flex items-center gap-2 bg-noble-black-800 py-3 px-4 min-w-34 rounded-r-2xl'>
        <button
          onClick={handleCopyLink}
          className='bg-noble-black-600 text-noble-black-100 font-medium p-2 rounded-2xl text-xs flex items-center gap-2 hover:bg-noble-black-500 transition-colors'
        >
          <AiOutlineLink fontSize={'1.2rem'} />
          {isLinkCopied ? 'Link Copied' : 'Copy Link'}
        </button>
      </div>
    </div>
  );
}
