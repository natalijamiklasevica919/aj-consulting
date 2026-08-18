import { Link } from "wouter";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3 group select-none">
      {/* Geometric mark: two intersecting bars forming an abstract "AJ" */}
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        {/* Violet vertical accent bar */}
        <rect x="0" y="0" width="4" height="36" fill="#8D38ED" />
        {/* White diagonal slash */}
        <line x1="10" y1="2" x2="30" y2="34" stroke="white" strokeWidth="3.5" strokeLinecap="square" />
        {/* Horizontal cross bar (the J's hook abstracted) */}
        <rect x="10" y="26" width="22" height="3.5" fill="white" opacity="0.75" />
      </svg>

      {/* Wordmark */}
      <div className="leading-none">
        <div className="font-serif font-bold text-[22px] text-white tracking-tight leading-none">
          AJ
        </div>
        <div className="font-sans text-[8.5px] font-semibold tracking-[0.42em] text-white/55 uppercase mt-[3px]">
          Consulting
        </div>
      </div>
    </Link>
  );
}
