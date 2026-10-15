export function Sparkle({
  className,
  size = 20,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M12 2.5L13.8 8l5.7 1.8-5.7 1.8L12 17.5l-1.8-5.9-5.7-1.8 5.7-1.8L12 2.5Z"
        fill="currentColor"
        opacity={0.9}
      />
    </svg>
  );
}

export function StarBurst({ className }: { className?: string }) {
  return (
    <svg
      width={96}
      height={96}
      viewBox="0 0 96 96"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g
        fill="currentColor"
        opacity={0.18}
        style={{ transformOrigin: "center" }}
      >
        <circle cx={48} cy={6} r={3} />
        <circle cx={82} cy={14} r={2} />
        <circle cx={90} cy={48} r={3} />
        <circle cx={82} cy={82} r={2} />
        <circle cx={48} cy={90} r={3} />
        <circle cx={14} cy={82} r={2} />
        <circle cx={6} cy={48} r={3} />
        <circle cx={14} cy={14} r={2} />
      </g>
    </svg>
  );
}

export function DotGrid({ className }: { className?: string }) {
  return (
    <svg
      width={320}
      height={220}
      viewBox="0 0 320 220"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <g fill="currentColor" opacity={0.14}>
        {Array.from({ length: 24 }).map((_, i) => {
          const x = 20 + (i % 12) * 24;
          const y = 20 + Math.floor(i / 12) * 24;
          return <circle key={i} cx={x} cy={y} r={2.5} />;
        })}
      </g>
    </svg>
  );
}

export function Blob({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      width={360}
      height={360}
      viewBox="0 0 360 360"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <path
        d="M40 80C20 120 30 190 80 230C130 270 200 260 260 230C320 200 340 140 320 90C300 40 240 20 180 30C120 40 60 40 40 80Z"
        fill={color}
        opacity={0.08}
      />
    </svg>
  );
}
