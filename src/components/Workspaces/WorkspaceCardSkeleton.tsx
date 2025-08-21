export default function WorkspaceCardSkeleton() {
  return (
    <div className='bg-noble-black-700 rounded-xl shadow-md p-4 sm:p-5 flex flex-col gap-3 border border-noble-black-600 animate-pulse min-w-0'>
      {/* Icon + Visibility */}
      <div className='flex items-center justify-between'>
        <div className='w-10 h-10 bg-noble-black-600 rounded-lg' />
        <div className='w-16 h-5 bg-noble-black-600 rounded' />
      </div>

      {/* Title */}
      <div className='h-5 bg-noble-black-600 rounded w-3/4' />

      {/* Description */}
      <div className='h-3 bg-noble-black-600 rounded w-full' />
      <div className='h-3 bg-noble-black-600 rounded w-5/6' />

      {/* Footer */}
      <div className='flex items-center mt-2 gap-2'>
        <div className='flex -space-x-2'>
          <div className='w-7 h-7 rounded-full bg-noble-black-600 ring-2 ring-noble-black-700' />
          <div className='w-7 h-7 rounded-full bg-noble-black-600 ring-2 ring-noble-black-700' />
          <div className='w-7 h-7 rounded-full bg-noble-black-600 ring-2 ring-noble-black-700' />
        </div>
        <div className='ml-auto h-3 bg-noble-black-600 rounded w-20' />
      </div>
    </div>
  );
}
