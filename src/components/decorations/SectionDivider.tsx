const wavePaths = [
  // Gentle rolling wave
  "M0,40 C120,80 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40 L1440,100 L0,100 Z",
  // Soft valley wave
  "M0,60 C180,20 360,80 540,40 C720,0 900,70 1080,30 C1260,0 1380,50 1440,60 L1440,100 L0,100 Z",
  // Layered crest
  "M0,50 C200,90 400,10 600,50 C800,90 1000,20 1200,50 C1350,70 1400,40 1440,50 L1440,100 L0,100 Z",
  // Asymmetric flow
  "M0,30 C160,70 320,10 480,50 C640,90 800,20 960,60 C1120,100 1280,30 1440,50 L1440,100 L0,100 Z",
  // Shallow ripple
  "M0,55 C240,35 480,75 720,45 C960,15 1200,65 1440,45 L1440,100 L0,100 Z",
];

const colorPairs: [string, string][] = [
  ["#8B5CF6", "#F472B6"], // accent → secondary
  ["#F472B6", "#FBBF24"], // secondary → tertiary
  ["#FBBF24", "#34D399"], // tertiary → quaternary
  ["#34D399", "#8B5CF6"], // quaternary → accent
  ["#8B5CF6", "#FBBF24"], // accent → tertiary
];

interface SectionDividerProps {
  variant?: number;
  flip?: boolean;
  className?: string;
}

export function SectionDivider({
  variant = 0,
  flip = false,
  className = "",
}: SectionDividerProps) {
  const pathIndex = variant % wavePaths.length;
  const colorIndex = variant % colorPairs.length;
  const [colorFrom, colorTo] = colorPairs[colorIndex];
  const gradientId = `divider-grad-${variant}`;

  return (
    <div
      className={`w-full overflow-hidden leading-[0] -my-px ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 100"
        preserveAspectRatio="none"
        className="block w-full h-12 sm:h-16 md:h-20"
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorFrom} stopOpacity="0.12" />
            <stop offset="50%" stopColor={colorTo} stopOpacity="0.18" />
            <stop offset="100%" stopColor={colorFrom} stopOpacity="0.08" />
          </linearGradient>
        </defs>
        <path d={wavePaths[pathIndex]} fill={`url(#${gradientId})`} />
      </svg>
    </div>
  );
}
