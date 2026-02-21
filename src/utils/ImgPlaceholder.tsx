export function ImgPlaceholder({
  label,
  className = "",
  dark = false,
  imagePath,
}: {
  label: string;
  className?: string;
  dark?: boolean;
  imagePath: string;
}) {
  return (
    <div
      className={`flex flex-col items-center justify-center overflow-hidden ${
        dark
          ? "bg-gradient-to-br from-[#0F1F45] to-[#1D6FDE]"
          : "bg-gradient-to-br from-[#EEF4FB] to-[#D8E8F8]"
      } ${className}`}
    >
      <img
        src={imagePath}
        alt={label}
        className="w-full h-full object-cover object-top"
      />

      <p
        className={`text-xs text-center px-4 leading-tight ${
          dark ? "text-white/40" : "text-[#8BACC8]"
        }`}
      >
        {/* {label} */}
      </p>
    </div>
  );
}
