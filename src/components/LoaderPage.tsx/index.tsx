/** Brand mark */
const ArtificiumMark = () => (
  <div className="flex items-center gap-2">
    <span className="inline-grid h-5 w-5 place-items-center rounded-md bg-gradient-to-br from-emerald-400 to-cyan-400 text-black font-bold text-xs">
      A
    </span>
    <span className="text-lg font-semibold tracking-tight">Artificium</span>
  </div>
);

/** Loader with spinning gradient ring */
const LoaderBadge = ({ letter = "V" }) => {
  return (
    <div className="relative h-28 w-28">
      {/* Spinning ring */}
      <div className="absolute inset-0 animate-spin-slow">
        <svg className="h-full w-full" viewBox="0 0 120 120" fill="none">
          <circle
            cx="60"
            cy="60"
            r="52"
            stroke="url(#grad)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="325"
            strokeDashoffset="80"
          />
          <defs>
            <linearGradient
              id="grad"
              x1="0"
              y1="0"
              x2="120"
              y2="120"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#60f3a6" />
              <stop offset="1" stopColor="#3bb7ff" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Inner app tile */}
      <div className="absolute inset-0 grid place-items-center">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-white text-gray-800 font-semibold shadow-md">
          {letter}
        </div>
      </div>
    </div>
  );
};

export default function LaunchPage({
  appName = "Workspace",
  subtitle = "Bottling messages…",
}) {
  return (
    <div className="min-h-screen bg-[#0f1113] text-gray-100 flex flex-col items-center justify-center">
      {/* Brand */}
      <header className="absolute top-6">
        <ArtificiumMark />
      </header>

      {/* Loader + text */}
      <LoaderBadge letter="V" />
      <h1 className="mt-8 text-center text-3xl sm:text-4xl font-semibold tracking-tight">
        Launching {appName}
      </h1>
      <p className="mt-3 text-center text-gray-400 text-sm sm:text-base">
        {subtitle}
      </p>
    </div>
  );
}
