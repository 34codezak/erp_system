import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold">
            Atlas ERP
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <Link href="/pricing">Pricing</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/sign-in">
              <Button variant="secondary">Sign in</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-slate-500">
          <span>© 2025 Atlas ERP</span>
          <span>Security-first ERP for modern teams.</span>
        </div>
      </footer>
    </div>
  );
}
