"use client";

import type { ViewFilter } from "@/lib/types";

const config: Record<ViewFilter, { name: string; activeColor: string }> = {
  builder: { name: "Builder", activeColor: "#1D6FA5" },
  strategic: { name: "Strategic", activeColor: "#92400E" },
  all: { name: "All", activeColor: "#475569" },
};

export default function ViewToggle({
  active,
  onChange,
}: {
  active: ViewFilter;
  onChange: (view: ViewFilter) => void;
}) {
  return (
    <div className="flex items-center gap-0.5 rounded-full bg-[var(--color-bg-subtle)] p-1">
      {(Object.keys(config) as ViewFilter[]).map((view) => (
        <button
          key={view}
          onClick={() => onChange(view)}
          className={`
            px-4 py-1.5 rounded-full text-[13px] font-semibold transition-all duration-300
            ${
              active === view
                ? "text-white shadow-sm"
                : "text-[var(--color-text-secondary)] hover:text-[var(--color-text)]"
            }
          `}
          style={active === view ? { backgroundColor: config[view].activeColor } : {}}
        >
          {config[view].name}
        </button>
      ))}
    </div>
  );
}
