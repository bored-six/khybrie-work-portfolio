type SectionHeadingProps = {
  label: string;
  title: string;
  labelColor?: string;
};

export function SectionHeading({
  label,
  title,
  labelColor = "bg-accent",
}: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center md:mb-16">
      <span
        className={`${labelColor} mb-4 inline-block rounded-full border-2 border-foreground px-4 py-1 font-heading text-xs font-bold tracking-widest text-white uppercase`}
      >
        {label}
      </span>
      <h2 className="font-heading text-3xl font-extrabold md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
