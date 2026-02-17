// Wave paths — all start and end at the same y-value for seamless tiling
const wavePaths = [
  // Gentle rolling wave (y=40)
  "M0,40 C120,80 240,0 360,40 C480,80 600,0 720,40 C840,80 960,0 1080,40 C1200,80 1320,0 1440,40",
  // Soft valley wave (y=60)
  "M0,60 C180,20 360,80 540,40 C720,0 900,70 1080,30 C1260,0 1380,80 1440,60",
  // Layered crest (y=50)
  "M0,50 C200,90 400,10 600,50 C800,90 1000,20 1200,50 C1350,70 1400,30 1440,50",
  // Asymmetric flow (y=40)
  "M0,40 C160,80 320,10 480,50 C640,90 800,20 960,60 C1120,90 1280,10 1440,40",
  // Shallow ripple (y=50)
  "M0,50 C240,30 480,70 720,50 C960,20 1200,70 1440,50",
];

const colorPairs: [string, string][] = [
  ["#8B5CF6", "#F472B6"], // accent → secondary
  ["#F472B6", "#FBBF24"], // secondary → tertiary
  ["#FBBF24", "#34D399"], // tertiary → quaternary
  ["#34D399", "#8B5CF6"], // quaternary → accent
  ["#8B5CF6", "#FBBF24"], // accent → tertiary
];

// Staggered durations so waves feel asynchronous
const driftDurations = [20, 26, 18, 23, 28];

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
  const duration = driftDurations[variant % driftDurations.length];

  const waveLine = wavePaths[pathIndex];
  const fillPath = `${waveLine} L1440,100 L0,100 Z`;

  return (
    <div
      className={`w-full overflow-hidden leading-[0] -my-px ${className}`}
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 2880 100"
        preserveAspectRatio="none"
        className="block w-[200%] h-12 sm:h-16 md:h-20"
        style={{
          animation: `wave-drift ${duration}s ease-in-out infinite`,
        }}
      >
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colorFrom} stopOpacity="0.12" />
            <stop offset="25%" stopColor={colorTo} stopOpacity="0.18" />
            <stop offset="50%" stopColor={colorFrom} stopOpacity="0.10" />
            <stop offset="75%" stopColor={colorTo} stopOpacity="0.16" />
            <stop offset="100%" stopColor={colorFrom} stopOpacity="0.12" />
          </linearGradient>
        </defs>
        {/* First wave copy (0–1440) */}
        <path d={fillPath} fill={`url(#${gradientId})`} />
        {/* Second wave copy (1440–2880) for seamless tiling */}
        <path
          d={fillPath}
          fill={`url(#${gradientId})`}
          transform="translate(1440, 0)"
        />
      </svg>
    </div>
  );
}
