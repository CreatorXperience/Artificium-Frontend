const Pagination = () => {
  return (
    <div className='flex items-center justify-center gap-2 py-4'>
      <button className='px-3 py-1 rounded-lg border border-gray-300 bg-noble-black-500 text-noble-black-200 hover:bg-noble-black-900 cursor-pointer'>
        Previous
      </button>
      <span className='px-3 py-1 rounded-lg bg-stem-green-600 text-noble-black-200 hover:bg-noble-black-900 cursor-pointer font-semibold'>
        1
      </span>
      <span className='px-3 py-1 rounded-lg bg-noble-black-500 text-noble-black-200 hover:bg-noble-black-900 cursor-pointer'>
        2
      </span>
      <span className='px-3 py-1 rounded-lg  bg-noble-black-500  text-noble-black-200 hover:bg-noble-black-900 cursor-pointer'>
        3
      </span>
      <button className='px-3 py-1 rounded-lg border border-gray-300  bg-noble-black-500  text-noble-black-200 hover:bg-noble-black-900 cursor-pointer'>
        Next
      </button>
    </div>
  );
};

export default Pagination;
