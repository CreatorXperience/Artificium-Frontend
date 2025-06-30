import { IoCloseOutline } from 'react-icons/io5';

export function ManageProjectHeading({
  onCloseModal,
  heading,
  description,
  children,
  style,
}: {
  onCloseModal?: () => void;
  heading?: string;
  description?: string;
  children?: React.ReactNode;
  style?: string;
}) {
  if (children) {
    return <div className={`${style}`}></div>;
  }

  return (
    <>
      <div className='flex justify-between items-center py-4'>
        <h2 className='text-xl font-semibold'>{heading}</h2>
        <button
          aria-label='close'
          onClick={onCloseModal}
          className='text-noble-black-300 hover:text-noble-black-100 transition-colors text-2xl cursor-pointer'
        >
          <IoCloseOutline />
        </button>
      </div>

      <div className='py-2 pb-6 text-noble-black-300 text-sm'>
        <p>{description}</p>
      </div>
    </>
  );
}
