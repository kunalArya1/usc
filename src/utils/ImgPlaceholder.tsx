export function ImgPlaceholder({
  label,
  className = "",
  dark = false,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 ${
        dark
          ? "bg-gradient-to-br from-[#0F1F45] to-[#1D6FDE]"
          : "bg-gradient-to-br from-[#EEF4FB] to-[#D8E8F8]"
      } ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={dark ? "rgba(255,255,255,0.3)" : "#A0B8D8"}
        strokeWidth="1.5"
        className="w-14 h-14"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="m21 15-5-5L5 21" />
      </svg>
      <p
        className={`text-xs text-center px-4 leading-tight ${dark ? "text-white/40" : "text-[#8BACC8]"}`}
      >
        {label}
      </p>
    </div>
  );
}
