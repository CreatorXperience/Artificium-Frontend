// src/components/MiniLoader.tsx
export const MiniLoader = () => (
  <div className="flex items-center justify-center">
    <div className="relative w-6 h-6">
      <div className="absolute inset-0 rounded-full border-2 border-t-transparent animate-spin bg-gradient-green-blue-dayblue-500"></div>
      <div className="absolute inset-1 rounded-full bg-noble-black-900"></div>
    </div>
  </div>
);
