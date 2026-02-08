import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/sales", label: "Sales & CRM" },
  { href: "/manufacturing", label: "Manufacturing" },
  { href: "/hr", label: "HR" },
  { href: "/finance", label: "Finance" },
  { href: "/inventory", label: "Inventory" },
  { href: "/reports", label: "Reports" },
  { href: "/admin", label: "Admin" }
];

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        <aside className="w-64 border-r border-slate-200 bg-slate-950 p-6 text-slate-100">
          <div className="text-lg font-semibold text-white">Atlas ERP</div>
          <p className="mt-2 text-xs text-slate-400">
            Unified operations command center
          </p>
          <nav className="mt-8 flex flex-col gap-3 text-sm text-slate-300">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-sm font-medium transition hover:bg-slate-900 hover:text-white"
              >
                {item.label}
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
