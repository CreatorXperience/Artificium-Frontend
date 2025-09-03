type TTileProp = {
  label: string;
  sub: string;
};
export default function TileButton({ label, sub }: TTileProp) {
  return (
    <button className="glass rounded-xl px-4 py-4 text-left group ring-focus w-full">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-medium">{label}</div>
          {sub && <div className="text-sm text-gray-400">{sub}</div>}
        </div>
        <div className="shrink-0 h-9 w-9 rounded-lg grid place-items-center bg-white/5 group-hover:bg-white/10 transition">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707A1 1 0 018.707 5.293l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </button>
  );
}
