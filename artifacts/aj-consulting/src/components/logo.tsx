import { Link } from "wouter";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3.5 group select-none">
      {/*
        Mark: "The Rise" — three ascending rectangular bars suggesting
        growth, data, and precision. Gradient opacity left→right gives depth.
        Pure abstract — no letter-drawing attempt.
      */}
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
        {/* Bar 1 — shortest, faint violet */}
        <rect x="0" y="20" width="8" height="14" fill="#8D38ED" opacity="0.35" />
        {/* Bar 2 — medium, mid-violet */}
        <rect x="13" y="10" width="8" height="24" fill="#8D38ED" opacity="0.65" />
        {/* Bar 3 — tallest, full violet */}
        <rect x="26" y="0" width="8" height="34" fill="#8D38ED" />
        {/* Thin connecting trend line across bar tops */}
        <polyline
          points="4,20 17,10 30,0"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="square"
          opacity="0.25"
        />
      </svg>

      {/* Wordmark */}
      <div className="leading-none">
        <div className="font-serif font-bold text-[21px] text-white tracking-tight leading-none">
          AJ
        </div>
        <div className="font-sans text-[8px] font-bold tracking-[0.5em] text-white/40 uppercase mt-[4px]">
          Group
        </div>
      </div>
    </Link>
  );
}
