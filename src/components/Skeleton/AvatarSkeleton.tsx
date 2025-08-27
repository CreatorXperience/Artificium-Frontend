const AvatarSkeleton = () => {
  return (
    <div className="flex items-center w-full gap-6 px-2 py-1 animate-pulse border-gray-200 pb-6 mb-6 border-b dark:border-noble-black-500 font-plus">
      {/* Avatar circle */}
      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-noble-black-600" />

      {/* Workspace text placeholders */}
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-gray-300 dark:bg-noble-black-600 rounded w-3/4" />
        <div className="h-3 bg-gray-200 dark:bg-noble-black-700 rounded w-1/2" />
      </div>

      {/* Dropdown icon placeholder */}
      <div className="w-4 h-4 bg-gray-300 dark:bg-noble-black-600 rounded" />
    </div>
  );
};

export default AvatarSkeleton;
