"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function BackToHomeButton() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-100"
    >
      <span aria-hidden="true">←</span>
      Back to Home
    </Link>
  );
}
