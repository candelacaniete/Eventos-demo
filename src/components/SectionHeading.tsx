type SectionHeadingProps = {
  number?: string;
  title: string;
  description?: string;
  light?: boolean;
  align?: "left" | "center";
};

export function SectionHeading({
  number,
  title,
  description,
  light = false,
  align = "left",
}: SectionHeadingProps) {
  const muted = light ? "text-beige/80" : "text-beige/70";
  const titleColor = light ? "text-charcoal" : "text-ivory";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {number && (
        <p
          className={`mb-5 font-sans text-[11px] font-medium tracking-editorial uppercase ${muted}`}
        >
          {number}
        </p>
      )}
      <h2
        className={`font-serif text-[clamp(2.1rem,4.5vw,3.6rem)] font-normal leading-[1.12] tracking-tight ${titleColor}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-6 max-w-xl text-[15px] leading-relaxed ${muted} ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
