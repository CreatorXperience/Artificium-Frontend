export default function TopBar() {
  return (
    <div className="sticky top-0 z-30 bg-panel/80 backdrop-blur border-b border-white/5">
      <div className="flex items-center justify-between px-6 md:px-8 py-3">
        <div className="flex items-center gap-6">
          <nav className="flex items-center gap-2">
            {["Artificium", "Chat", "Library"].map((t, i) => (
              <button
                key={t}
                className={
                  "px-3 py-1.5 rounded-full text-sm " +
                  (i === 0
                    ? "bg-white text-black"
                    : "hover:bg-white/10 text-gray-300")
                }
              >
                {t}
              </button>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm rounded-lg hover:bg-white/10">
            Share
          </button>
          <button className="px-3 py-1.5 text-sm rounded-lg hover:bg-white/10">
            ⋯
          </button>
        </div>
      </div>
    </div>
  );
}
