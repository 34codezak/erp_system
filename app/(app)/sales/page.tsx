import { RecordEntryCard } from "@/components/record-entry-card";

const pipeline = [
  { stage: "Qualified", value: "$420K", count: "18 deals" },
  { stage: "Proposal", value: "$310K", count: "9 deals" },
  { stage: "Negotiation", value: "$185K", count: "6 deals" },
  { stage: "Closed won", value: "$640K", count: "12 deals" }
];

const accounts = [
  { name: "Summit Retail Group", owner: "C. Howard", health: "Growing" },
  { name: "Northwind Logistics", owner: "A. Patel", health: "Stable" },
  { name: "Vera Manufacturing", owner: "J. Ramos", health: "At risk" }
];

const orders = [
  { id: "SO-1041", status: "Fulfillment", total: "$42,300" },
  { id: "SO-1037", status: "Awaiting payment", total: "$18,950" },
  { id: "SO-1033", status: "In production", total: "$67,120" }
];

const billing = [
  { metric: "Quotes sent", value: "32" },
  { metric: "Orders this month", value: "54" },
  { metric: "Average deal size", value: "$28.4K" },
  { metric: "Renewals due", value: "11" }
];

export default function SalesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Sales & CRM</h1>
        <p className="text-sm text-slate-600">
          Orchestrate quotations, orders, customer data, and billing in a unified
          pipeline.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {billing.map((item) => (
          <RecordEntryCard key={item.metric} entryTitle={item.metric}>
            <p className="text-xs text-slate-500">{item.metric}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </RecordEntryCard>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <RecordEntryCard
          entryTitle="Pipeline overview"
          entryDescription="Record stage updates, win notes, or risks."
        >
          <h2 className="text-lg font-semibold">Pipeline overview</h2>
          <p className="mt-1 text-sm text-slate-600">
            Track conversion, velocity, and forecasted revenue.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {pipeline.map((item) => (
              <div
                key={item.stage}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.stage}</p>
                  <p className="text-xs text-slate-500">{item.count}</p>
                </div>
                <span className="text-sm font-semibold text-slate-900">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </RecordEntryCard>
        <RecordEntryCard
          entryTitle="Top accounts"
          entryDescription="Capture account touches or health changes."
        >
          <h2 className="text-lg font-semibold">Top accounts</h2>
          <p className="mt-1 text-sm text-slate-600">
            Relationship health and engagement signals.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {accounts.map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">Owner: {item.owner}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                  {item.health}
                </span>
              </div>
            ))}
          </div>
        </RecordEntryCard>
      </div>
      <RecordEntryCard
        entryTitle="Order execution"
        entryDescription="Record order milestones or fulfillment notes."
      >
        <h2 className="text-lg font-semibold">Order execution</h2>
        <p className="mt-1 text-sm text-slate-600">
          Align sales orders with fulfillment and billing milestones.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {orders.map((item) => (
            <div
              key={item.id}
              className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600"
            >
              <p className="text-sm font-medium text-slate-900">{item.id}</p>
              <p className="text-xs text-slate-500">{item.status}</p>
              <p className="mt-2 text-sm font-semibold text-slate-900">
                {item.total}
              </p>
            </div>
          ))}
        </div>
      </RecordEntryCard>
    </div>
  );
}
