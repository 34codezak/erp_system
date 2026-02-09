import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const pillars = [
  {
    title: "Continuous close",
    description:
      "Automate journal entries, reconcile transactions, and resolve exceptions in real time."
  },
  {
    title: "Budgeting & planning",
    description:
      "Build rolling forecasts with scenario modeling and collaborative approvals."
  },
  {
    title: "Audit-ready controls",
    description:
      "Maintain SOC-ready trails, approvals, and segregation of duties across every entity."
  }
];

const benefits = [
  "Automated account reconciliations and variance alerts",
  "Multi-entity consolidation with real-time reporting",
  "Revenue recognition workflows for complex contracts",
  "Embedded cash forecasting and treasury dashboards"
];

export default function FinanceAccountingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Finance & accounting
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 lg:text-5xl">
            Close faster with automated finance operations charted for scale.
          </h1>
          <p className="mt-5 text-base text-slate-600">
            Atlas ERP streamlines reconciliations, approvals, and consolidations so finance teams
            deliver clean closes and north-star insights without manual effort.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button>Request finance demo</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary">Explore pricing</Button>
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-600">
            {benefits.map((item) => (
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
          <h2 className="text-xl font-semibold text-slate-900">Finance command atlas</h2>
          <p className="text-sm text-slate-600">
            Consolidate entities, manage close tasks, and surface risks before month-end turns.
          </p>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>Average close time</span>
              <span className="font-semibold text-slate-900">4.2 days</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>Automated reconciliations</span>
              <span className="font-semibold text-slate-900">1,400+</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>Audit issues resolved</span>
              <span className="font-semibold text-slate-900">-48%</span>
            </div>
          </div>
          <Button variant="secondary">Download finance brief</Button>
        </Card>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        {pillars.map((pillar) => (
          <Card key={pillar.title} className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">{pillar.title}</h3>
            <p className="text-sm text-slate-600">{pillar.description}</p>
          </Card>
        ))}
      </section>

      <section className="mt-16">
        <Card className="flex flex-col items-start justify-between gap-6 border border-brand/20 bg-brand/5 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              See every ledger entry with compass-level confidence.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Launch continuous close workflows and multi-entity consolidations in weeks.
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
