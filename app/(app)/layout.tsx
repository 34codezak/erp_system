import { AppSidebar } from "@/components/navigation/app-sidebar";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="flex min-h-screen">
        <AppSidebar />
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
