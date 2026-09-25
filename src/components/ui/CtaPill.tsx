import Link from "next/link";

export function CtaPill({
  href,
  children,
  accent = "pink",
  className = "",
}: {
  href: string;
  children: string;
  accent?: "pink" | "white";
  className?: string;
}) {
  const onDark = accent === "white";
  const pill = onDark
    ? "bg-pink text-ink hover:bg-pink-2"
    : "bg-ink text-white group-hover:bg-black";
  const circle = onDark ? "bg-white text-ink" : "bg-pink text-ink";

  return (
    <Link href={href} className={`group flex w-full items-center gap-2 ${className}`}>
      <span className={`flex-1 rounded-full px-6 py-3.5 text-center text-[15px] font-medium transition ${pill}`}>
        {children}
      </span>
      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-0.5 group-hover:translate-x-1 ${circle}`}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <path d="M7 17L17 7M9 7h8v8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
