import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: string | null;
  align?: "left" | "center";
  icon?: ReactNode;
};

/**
 * Reusable heading block for every section. Keeps typography and spacing
 * consistent across the entire portfolio.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  icon,
}: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <header
      className={`flex flex-col ${isCenter ? "items-center text-center" : "items-start text-left"} gap-4`}
    >
      <span className="eyebrow">
        {icon}
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight leading-tight text-gradient sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={`max-w-2xl text-base leading-relaxed text-[color:var(--color-mauve)] sm:text-lg ${isCenter ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </header>
  );
}
