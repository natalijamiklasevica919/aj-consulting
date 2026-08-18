import { Link } from "wouter";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3.5 group select-none">
      {/* ── Geometric mark ──
          Concept: "The Apex" — two bold arms rising to a single point (growth,
          precision, direction). Left arm violet / right arm white, forming an
          abstract AJ. A thin violet base-bar anchors the mark. */}
      <svg
        width="38"
        height="34"
        viewBox="0 0 38 34"
        fill="none"
        aria-hidden="true"
      >
        {/* Left arm — solid violet */}
        <path
          d="M2 32 L18 3"
          stroke="#8D38ED"
          strokeWidth="5.5"
          strokeLinecap="square"
        />
        {/* Right arm — white, slightly shorter (J leg) */}
        <path
          d="M18 3 L32 24"
          stroke="white"
          strokeWidth="5.5"
          strokeLinecap="square"
          opacity="0.85"
        />
        {/* J hook — continues right arm downward then curls left */}
        <path
          d="M32 24 L32 32 Q32 34 26 34 L20 34"
          stroke="white"
          strokeWidth="5.5"
          strokeLinecap="square"
          strokeLinejoin="miter"
          fill="none"
          opacity="0.85"
        />
        {/* Crossbar — violet accent through center */}
        <path
          d="M9 20 L27 20"
          stroke="#8D38ED"
          strokeWidth="3.5"
          strokeLinecap="square"
          opacity="0.6"
        />
      </svg>

      {/* Wordmark */}
      <div className="leading-none">
        <div className="font-serif font-bold text-[21px] text-white tracking-tight leading-none">
          AJ
        </div>
        <div className="font-sans text-[8px] font-bold tracking-[0.5em] text-white/45 uppercase mt-[4px]">
          Group
        </div>
      </div>
    </Link>
  );
}
