// src/components/Loader.tsx
export const Loader = () => (
  <div className="flex items-center justify-center h-screen bg-noble-black-900">
    <div className="relative w-16 h-16">
      <div className="absolute inset-0 rounded-full border-4 border-t-transparent animate-spin bg-gradient-green-blue-dayblue-500"></div>
      <div className="absolute inset-2 rounded-full bg-noble-black-900"></div>
    </div>
  </div>
);
