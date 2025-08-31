import { type ReactNode } from "react";
import TileButton from "../TileButton";

type TCategory = {
  title: string;
  color: string;
  icon: ReactNode;
  items: Array<{
    label: string;
    // sub: string;
  }>;
};
export default function Category({ title, color, icon, items }: TCategory) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <div
          className="h-10 w-10 rounded-full grid place-items-center"
          style={{ backgroundColor: color + "22", color }}
          aria-hidden
        >
          {icon}
        </div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((it: { label: string }) => (
          <TileButton key={it.label} label={it.label} sub={""} />
        ))}
      </div>
    </div>
  );
}
