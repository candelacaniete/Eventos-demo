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
  const label = light ? "text-champagne-deep" : "text-champagne";
  const titleColor = light ? "text-ink" : "text-ivory";
  const body = light ? "text-ink-muted" : "text-beige/85";
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {number && (
        <p
          className={`mb-5 font-sans text-[11px] font-medium tracking-editorial uppercase ${label}`}
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
          className={`mt-6 max-w-xl text-[15px] leading-relaxed ${body} ${align === "center" ? "mx-auto" : ""}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
