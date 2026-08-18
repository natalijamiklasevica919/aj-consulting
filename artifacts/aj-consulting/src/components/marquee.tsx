interface MarqueeProps {
  items: string[];
  /** seconds for one full cycle — lower = faster */
  speed?: number;
}

export function Marquee({ items, speed = 28 }: MarqueeProps) {
  // Triple so the seam is never visible even on very wide screens
  const repeated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex items-center gap-16 whitespace-nowrap"
        style={{ animation: `aj-marquee ${speed}s linear infinite` }}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="shrink-0 text-lg font-serif font-bold text-gray-300 hover:text-gray-500 uppercase tracking-widest transition-colors duration-300 cursor-default select-none"
          >
            {item}
            <span className="mx-8 text-primary/25 font-sans text-base">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
