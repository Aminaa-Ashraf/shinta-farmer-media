import Link from "next/link";

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <span className="grid h-8 w-8 place-items-center rounded-full bg-pink">
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
          <path
            d="M16.8 6.2c-1.8-1.6-5.2-2-7.4-.4-2.2 1.6-2.4 4.2-.6 5.4 1.5 1 3.6.7 5.2 1.4 1.7.8 2.4 2.3 1.4 3.6-1.2 1.6-4.2 1.7-6.4.2"
            stroke="#1c1917"
            strokeWidth="2.4"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span className={`text-[21px] font-semibold tracking-tight ${inverted ? "text-white" : "text-ink"}`}>
        Shinta
      </span>
    </Link>
  );
}
