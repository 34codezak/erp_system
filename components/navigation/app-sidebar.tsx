"use client";

import type { Route } from "next";
import Link from "next/link";
import { usePathname } from "next/navigation";
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

export function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname();

  const baseLinkClasses =
    "flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition";

  const getLinkClasses = (href: string) => {
    const isActive = pathname === href;
    return [
      baseLinkClasses,
      isCollapsed ? "justify-center" : "justify-between",
      isActive
        ? "bg-slate-900 text-white"
        : "text-slate-300 hover:bg-slate-900 hover:text-white"
    ].join(" ");
  };

  return (
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
        <Link
          href="/"
          className={getLinkClasses("/")}
          aria-current={pathname === "/" ? "page" : undefined}
        >
          <span className={isCollapsed ? "text-xs font-semibold" : ""}>
            {isCollapsed ? "Home" : "Back to home"}
          </span>
          {!isCollapsed && <span className="text-xs text-slate-500">↩</span>}
        </Link>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={getLinkClasses(item.href)}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            <span className={isCollapsed ? "text-xs font-semibold" : ""}>
              {isCollapsed ? item.shortLabel : item.label}
            </span>
            {!isCollapsed && <span className="text-xs text-slate-500">›</span>}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
