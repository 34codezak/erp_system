import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const focusAreas = [
  {
    title: "Talent lifecycle",
    description:
      "Centralize onboarding, promotions, and offboarding with templated checklists and approvals."
  },
  {
    title: "Performance & goals",
    description:
      "Align goals, run review cycles, and surface feedback with real-time dashboards."
  },
  {
    title: "Payroll readiness",
    description:
      "Automate payroll inputs, validate timesheets, and sync benefits coverage without delays."
  }
];

const highlights = [
  "Onboarding playbooks with automated access provisioning",
  "Org chart and succession planning insights",
  "DEI analytics and compliance-ready reporting",
  "Role-based approvals for compensation changes"
];

export default function PeopleOperationsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            People operations
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 lg:text-5xl">
            Guide every employee journey with structured, automated HR workflows.
          </h1>
          <p className="mt-5 text-base text-slate-600">
            Atlas ERP brings recruiting, onboarding, performance management, and payroll prep into a
            single command atlas so HR teams can move faster without sacrificing compliance.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button>Talk to HR automation</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary">View pricing</Button>
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-600">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <i
                  className="fa-solid fa-circle-check mt-0.5 text-emerald-500"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <Card className="space-y-4 border border-slate-200 bg-white">
          <h2 className="text-xl font-semibold text-slate-900">People operations compass</h2>
          <p className="text-sm text-slate-600">
            Track headcount, automate approvals, and keep every policy audit-ready with built-in
            guidance analytics.
          </p>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>New hire time-to-productivity</span>
              <span className="font-semibold text-slate-900">-32%</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>Automated approvals</span>
              <span className="font-semibold text-slate-900">220+</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>Engagement insights</span>
              <span className="font-semibold text-slate-900">Weekly</span>
            </div>
          </div>
          <Button variant="secondary">Download HR overview</Button>
        </Card>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        {focusAreas.map((area) => (
          <Card key={area.title} className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">{area.title}</h3>
            <p className="text-sm text-slate-600">{area.description}</p>
          </Card>
        ))}
      </section>

      <section className="mt-16">
        <Card className="flex flex-col items-start justify-between gap-6 border border-brand/20 bg-brand/5 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Deliver a people experience your teams can navigate with confidence.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Launch role-based access, automated onboarding, and performance workflows in weeks.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/sign-up">
              <Button>Start free</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary">Schedule consult</Button>
            </Link>
          </div>
        </Card>
      </section>
    </main>
  );
}
