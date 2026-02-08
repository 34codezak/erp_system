import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const initiatives = [
  {
    title: "Demand intelligence",
    description:
      "Blend historical trends with live sales data to forecast demand with confidence."
  },
  {
    title: "Procurement automation",
    description:
      "Automate purchase requests, vendor approvals, and contract renewals in one workflow."
  },
  {
    title: "Inventory resilience",
    description:
      "Monitor margins, safety stock, and lead times to avoid costly stockouts."
  }
];

const outcomes = [
  "Live inventory visibility across warehouses",
  "Vendor scorecards with automated renewal alerts",
  "Optimized safety stock and reorder points",
  "End-to-end supply chain variance tracking"
];

export default function SupplyChainPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Supply chain
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 lg:text-5xl">
            Build a resilient supply chain with real-time planning and automation.
          </h1>
          <p className="mt-5 text-base text-slate-600">
            Atlas ERP unifies procurement, inventory, and demand planning so operations teams can
            keep inventory lean, protect margins, and respond to disruptions faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/contact">
              <Button>Talk to supply chain</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary">See pricing</Button>
            </Link>
          </div>
          <div className="mt-8 grid gap-3 text-sm text-slate-600">
            {outcomes.map((item) => (
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
          <h2 className="text-xl font-semibold text-slate-900">Supply chain control</h2>
          <p className="text-sm text-slate-600">
            Monitor inventory risk, vendor performance, and margin exposure from one workspace.
          </p>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>Inventory turns</span>
              <span className="font-semibold text-slate-900">9.1x</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>Vendor SLA compliance</span>
              <span className="font-semibold text-slate-900">97%</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>Forecast accuracy</span>
              <span className="font-semibold text-slate-900">+18%</span>
            </div>
          </div>
          <Button variant="secondary">Download supply brief</Button>
        </Card>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        {initiatives.map((initiative) => (
          <Card key={initiative.title} className="space-y-3">
            <h3 className="text-lg font-semibold text-slate-900">{initiative.title}</h3>
            <p className="text-sm text-slate-600">{initiative.description}</p>
          </Card>
        ))}
      </section>

      <section className="mt-16">
        <Card className="flex flex-col items-start justify-between gap-6 border border-brand/20 bg-brand/5 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Keep inventory healthy and margins protected.
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Roll out demand planning, procurement approvals, and real-time inventory tracking in
              weeks.
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
