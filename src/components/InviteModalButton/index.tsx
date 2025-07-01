export default function InviteModalButton({
  handleInvite,
}: {
  handleInvite: () => void;
}) {
  return (
    <button
      type='button'
      className={`bg-electric-green-600 text-noble-black-900 font-medium px-4 rounded-md flex items-center gap-2 transition-colors
                  `}
      onClick={handleInvite}
    >
      Invite
      <svg
        xmlns='http://www.w3.org/2000/svg'
        className='h-5 w-5 rotate-45 -translate-y-px'
        fill='none'
        viewBox='0 0 24 24'
        stroke='currentColor'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth={2}
          d='M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
        />
      </svg>
    </button>
  );
}
