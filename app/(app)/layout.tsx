"use client";

import type { Route } from "next";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/dashboard", label: "Dashboard", shortLabel: "Dash" },
  { href: "/sales", label: "Sales & CRM", shortLabel: "Sales" },
  { href: "/manufacturing", label: "Manufacturing", shortLabel: "Mfg" },
  { href: "/hr", label: "HR", shortLabel: "HR" },
  { href: "/finance", label: "Finance", shortLabel: "Fin" },
  { href: "/inventory", label: "Inventory", shortLabel: "Inv" },
  { href: "/reports", label: "Reports", shortLabel: "Rpt" },
  { href: "/admin", label: "Admin", shortLabel: "Adm" }
] satisfies { href: Route; label: string; shortLabel: string }[];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const linkClasses =
    "flex items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-900 hover:text-white";

  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        <aside
          className={`border-r border-slate-200 bg-slate-950 text-slate-100 transition-all duration-300 ${
            isCollapsed ? "w-20 px-3 py-6" : "w-64 p-6"
          }`}
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-lg font-semibold text-white">
                {isCollapsed ? "AE" : "Atlas ERP"}
              </div>
              {!isCollapsed && (
                <p className="mt-2 text-xs text-slate-400">
                  Unified operations command center
                </p>
              )}
            </div>
            <button
              type="button"
              onClick={() => setIsCollapsed((prev) => !prev)}
              className="rounded-md border border-slate-800 px-2 py-1 text-xs text-slate-300 transition hover:border-slate-700 hover:text-white"
              aria-expanded={!isCollapsed}
              aria-controls="app-sidebar-nav"
            >
              {isCollapsed ? ">" : "<"}
              <span className="sr-only">
                {isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
              </span>
            </button>
          </div>
          <nav
            id="app-sidebar-nav"
            className={`mt-8 flex flex-col gap-3 text-sm text-slate-300 ${
              isCollapsed ? "items-center" : ""
            }`}
          >
            <Link href="/" className={linkClasses}>
              <span className={isCollapsed ? "text-xs font-semibold" : ""}>
                {isCollapsed ? "Home" : "Back to home"}
              </span>
              {!isCollapsed && (
                <span className="text-xs text-slate-500">↩</span>
              )}
            </Link>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className={linkClasses}>
                <span className={isCollapsed ? "text-xs font-semibold" : ""}>
                  {isCollapsed ? item.shortLabel : item.label}
                </span>
                {!isCollapsed && (
                  <span className="text-xs text-slate-500">›</span>
                )}
              </Link>
            ))}
          </nav>
        </aside>
        <div className="flex-1">
          <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
            <div>
              <p className="text-xs text-slate-500">Organization</p>
              <p className="text-sm font-semibold text-slate-900">Atlas Industries</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-slate-500">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-emerald-700">
                All systems healthy
              </span>
              <span>Signed in as admin@atlas.com</span>
            </div>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
