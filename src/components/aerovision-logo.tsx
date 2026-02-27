"use client";

export function AeroVisionLogo({
  size = 120,
  color = "#ffffff",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect x="35" y="12" width="30" height="3" rx="1.5" fill={color} />
      <rect x="35" y="18" width="30" height="3" rx="1.5" fill={color} />
      <rect x="35" y="24" width="30" height="3" rx="1.5" fill={color} />
      <path
        d="M35 28 L35 52 Q35 66 50 66 Q65 66 65 52 L65 28"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M26 38 L26 56 Q26 78 50 78 Q74 78 74 56 L74 38"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
