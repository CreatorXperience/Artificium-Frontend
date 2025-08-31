import type { ReactNode } from "react";

/** Inline icons (to avoid external deps) */
const IconShare = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M4 12v7a2 2 0 0 0 2 2h12" />
    <path d="M16 6l-4-4-4 4" />
    <path d="M12 2v14" />
  </svg>
);
const IconPencil = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
    <path d="M20.71 7.04a1 1 0 0 0 0-1.41l-2.34-2.34a1 1 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
  </svg>
);
const IconA = () => (
  // Artificium glyph
  <svg viewBox="0 0 24 24" className="h-5 w-5">
    <path
      d="M12 3l8 18h-3l-1.8-4H8.8L7 21H4l8-18zm0 6l-2.6 6h5.2L12 9z"
      fill="currentColor"
    />
  </svg>
);
const IconChat = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v8z" />
  </svg>
);
const IconFolder = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
  >
    <path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
  </svg>
);

type TAvatarGroup = {
  urls: Array<string>;
  extra: number;
};
/** Small avatar group with +N chip */
const AvatarGroup = ({ urls = [], extra = 0 }: TAvatarGroup) => {
  return (
    <div className="flex -space-x-2">
      {urls.slice(0, 5).map((u, i) => (
        <img
          key={i}
          src={u}
          alt=""
          className="h-8 w-8 rounded-xl ring-2 ring-[#151718] object-cover"
        />
      ))}
      {extra > 0 && (
        <span className="h-8 rounded-xl px-2 grid place-items-center text-sm text-gray-200 bg-white/5 ring-2 ring-[#151718]">
          +{extra}
        </span>
      )}
    </div>
  );
};

type TTAB = {
  active: boolean;
  icon: ReactNode;
  label: string;
  onClick: () => void;
};

/** Tab button */
const Tab = ({ active, icon, label, onClick }: TTAB) => (
  <button
    onClick={onClick}
    className={[
      "relative flex w-[100px] items-center gap-2 px-4 py-3 rounded-lg transition",
      active ? "text-white" : "text-gray-400 hover:text-gray-200",
    ].join(" ")}
  >
    <span
      className={[
        "inline-flex h-7 w-7 rounded-lg items-center justify-center",
        active
          ? "text-[#b7ffb7] bg-[#a9f7a91a] shadow-[0_0_16px_#86efac33]"
          : "text-gray-400 bg-white/[0.04]",
      ].join(" ")}
    >
      {icon}
    </span>
    <span className="text-[15px] font-medium">{label}</span>

    {/* active underline */}
    {active && (
      <span className="absolute -bottom-2 left-0 h-1 w-[120%] rounded-full bg-[#b7ffb7]" />
    )}
  </button>
);

export default function ProjectHeader({
  title = "Orbital Oddysey",
  subtitle = "Marketing Campaign for a new TV Series Launch",
  members = [
    "https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
  ],
  extraCount = 4,
  activeTab = "artificium",
  onTabChange = (t: string) => {},
}) {
  const tabs = [
    { key: "artificium", label: "Artificium", icon: <IconA /> },
    { key: "chat", label: "Chat", icon: <IconChat /> },
    { key: "library", label: "Library", icon: <IconFolder /> },
  ];

  return (
    <div className="rounded-3xl h-auto border border-white/5 bg-[#121415] shadow-[0_16px_60px_rgba(0,0,0,0.5)] overflow-hidden w-full md:w-full ">
      {/* Top row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between px-5 sm:px-6 md:px-8 pt-6">
        <div className="min-w-0">
          <h1 className="text-2xl sm:text-3xl md:text-[32px] font-semibold tracking-tight text-white">
            {title}
          </h1>
          <p className="text-gray-400 mt-1 text-sm sm:text-base">{subtitle}</p>
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <AvatarGroup urls={members} extra={extraCount} />
          <button className="hidden sm:flex items-center gap-2 rounded-xl px-3 py-2 text-gray-300 bg-white/[0.04] hover:bg-white/[0.06] border border-white/10">
            <IconShare />
            <span className="text-sm">Share</span>
          </button>
          <button className="grid place-items-center h-10 w-10 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/10">
            <IconPencil />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-5 border-t border-white/5" />

      {/* Tabs */}
      <div className="relative px-3 sm:px-4 md:px-6">
        <div className="flex items-center gap-1 sm:gap-2 py-3 sm:py-4 md:py-5  no-scrollbar overflow-auto">
          {tabs.map((t) => (
            <Tab
              key={t.key}
              active={activeTab === t.key}
              icon={t.icon}
              label={t.label}
              onClick={() => onTabChange(t.key)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
