export const WorkspacePreviewSkeleton = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-noble-black-900 text-white font-plus overflow-hidden animate-pulse">
      {/* Left Section */}
      <div className="w-full md:w-3/5 flex flex-col justify-between px-6 sm:px-10 md:px-16 py-10 relative z-10">
        <div className="w-full max-w-xl mx-auto">
          {/* Logo */}
          <div className="h-6 w-24 bg-noble-black-700 rounded mb-12"></div>

          {/* Workspace Preview */}
          <div className="text-center">
            {/* Member Avatars */}
            <div className="flex justify-center -space-x-3 mb-4">
              {[...Array(4)].map((_, idx) => (
                <div
                  key={idx}
                  className="w-8 h-8 rounded-full bg-noble-black-700 border-2 border-noble-black-900"
                ></div>
              ))}
            </div>

            {/* Workspace Name */}
            <div className="h-6 w-40 bg-noble-black-700 rounded mx-auto mb-2"></div>

            {/* Description */}
            <div className="h-4 w-64 bg-noble-black-700 rounded mx-auto mb-6"></div>

            {/* CTA Button */}
            <div className="h-10 w-40 bg-noble-black-700 rounded mx-auto"></div>

            {/* Divider */}
            <div className="flex items-center my-8">
              <hr className="flex-grow border-noble-black-700" />
              <span className="mx-3 h-3 w-6 bg-noble-black-700 rounded"></span>
              <hr className="flex-grow border-noble-black-700" />
            </div>

            {/* Back Button */}
            <div className="h-10 w-40 bg-noble-black-700 rounded mx-auto"></div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm mt-12 max-w-xl w-full mx-auto gap-2 sm:gap-0">
          <div className="h-4 w-32 bg-noble-black-700 rounded"></div>
          <div className="h-4 w-24 bg-noble-black-700 rounded"></div>
        </div>
      </div>

      {/* Right Section (Visual Placeholder) */}
      <div className="hidden md:block md:w-2/5 relative">
        <div className="absolute inset-0 w-full h-full bg-noble-black-800"></div>
      </div>
    </div>
  );
};
