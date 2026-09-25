import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "ghost";
  className?: string;
};

export function Button({ href, children, variant = "dark", className = "" }: Props) {
  const styles = {
    dark: "bg-ink text-white hover:bg-black",
    light: "bg-white text-ink hover:bg-pink",
    ghost: "bg-transparent text-ink border border-ink/10 hover:border-ink/30",
  };

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium transition ${styles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
