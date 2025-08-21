import WorkspaceCardSkeleton from './WorkspaceCardSkeleton';

export default function WorkspaceListSkeleton() {
  return (
    <section className='flex flex-col px-2 sm:px-4 md:px-8 py-6 md:py-8 gap-6 w-full bg-noble-black-800'>
      <div className='flex items-center justify-between gap-3'>
        <div className='flex flex-col gap-1 animate-pulse'>
          {/* Title */}
          <div className='h-5 bg-noble-black-600 rounded w-24' />
          {/* Subtitle */}
          <div className='h-3 bg-noble-black-600 rounded w-32' />
        </div>

        <div className='flex space-x-4'>
          <div className='w-10 h-10 rounded-lg bg-noble-black-600 animate-pulse' />
          <div className='w-10 h-10 rounded-lg bg-noble-black-600 animate-pulse delay-75' />
        </div>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4'>
        {Array.from({ length: 6 }).map((_, i) => (
          <WorkspaceCardSkeleton key={i} />
        ))}
      </div>
    </section>
  );
}
