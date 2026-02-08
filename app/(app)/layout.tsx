import Link from "next/link";

const navItems = [
  { href: "/dashboard", label: "Dashboard" },
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
        <aside className="w-64 border-r border-slate-200 bg-white p-6">
          <div className="text-lg font-semibold">Atlas ERP</div>
          <nav className="mt-8 flex flex-col gap-3 text-sm text-slate-600">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 hover:bg-slate-100"
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
              <p className="text-sm font-semibold">Atlas Industries</p>
            </div>
            <div className="text-xs text-slate-500">Signed in as admin@atlas.com</div>
          </header>
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
