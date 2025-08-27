import React from "react";

const ProjectSkeleton: React.FC = () => {
  return (
    <div className="space-y-2 animate-pulse">
      {Array.from({ length: 4 }).map((_, idx) => (
        <div key={idx} className="flex items-center rounded-md px-3 py-2">
          {/* Fake icon/shape */}
          <div className="w-4 h-4 mr-3 rounded bg-gray-300 dark:bg-gray-700"></div>

          {/* Fake text */}
          <div className="h-3 w-32 bg-gray-300 dark:bg-gray-700 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default ProjectSkeleton;
