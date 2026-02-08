import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    title: "Human Resources",
    description: "Centralize employee records, payroll, and compliance workflows."
  },
  {
    title: "Finance & Accounting",
    description: "Track ledgers, budgets, and approvals with full auditability."
  },
  {
    title: "Inventory & Assets",
    description: "Manage assets, depreciation schedules, and inventory health."
  }
];

export default function LandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold text-brand">Production-ready ERP</p>
          <h1 className="mt-3 text-4xl font-semibold text-slate-900">
            Operate every department from one secure ERP platform.
          </h1>
          <p className="mt-4 text-base text-slate-600">
            Atlas ERP brings HR, finance, inventory, and operations together with role-based
            access, automated workflows, and analytics your leadership can trust.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link href="/sign-up">
              <Button>Get started</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary">View pricing</Button>
            </Link>
          </div>
          <div className="mt-8 grid gap-4 text-sm text-slate-600">
            <div>✅ SOC-ready audit trails and approvals.</div>
            <div>✅ Multi-tenant data isolation with Supabase RLS.</div>
            <div>✅ Real-time dashboards with exports and alerts.</div>
          </div>
        </div>
        <Card className="space-y-4 bg-gradient-to-br from-brand/10 via-white to-white">
          <h2 className="text-lg font-semibold">Implementation highlights</h2>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>• App Router + Server Actions for secure CRUD.</li>
            <li>• RBAC for Admin, Manager, Staff, Accountant.</li>
            <li>• Stripe billing + Resend notifications.</li>
            <li>• Secure storage for receipts & documents.</li>
          </ul>
          <Button variant="ghost">Request a demo</Button>
        </Card>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title}>
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{item.description}</p>
          </Card>
        ))}
      </section>
    </main>
  );
}
