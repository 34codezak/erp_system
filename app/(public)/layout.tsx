import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold text-slate-900">
            Atlas ERP
          </Link>
          <nav className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
            <Link href="/pricing" className="hover:text-slate-900">
              Pricing
            </Link>
            <Link href="/about" className="hover:text-slate-900">
              About
            </Link>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
            <Link href="/sign-in">
              <Button variant="secondary">Sign in</Button>
            </Link>
            <Link href="/sign-up">
              <Button>Start free</Button>
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 text-sm text-slate-500 md:grid-cols-[2fr_1fr_1fr]">
          <div className="space-y-3">
            <span className="text-base font-semibold text-slate-900">Atlas ERP</span>
            <p>
              Security-first ERP for modern teams. Automate workflows, gain real-time
              visibility, and scale confidently.
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-sm font-semibold text-slate-900">Product</span>
            <p>Finance & Accounting</p>
            <p>Supply Chain</p>
            <p>People Operations</p>
            <p>Analytics</p>
          </div>
          <div className="space-y-2">
            <span className="text-sm font-semibold text-slate-900">Company</span>
            <p>support@atlaserp.com</p>
            <p>+1 (312) 555-0189</p>
            <p>Chicago, IL</p>
          </div>
        </div>
        <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
          © 2025 Atlas ERP. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
