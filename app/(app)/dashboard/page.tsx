import { Card } from "@/components/ui/card";

const metrics = [
  { label: "Net revenue", value: "$1.24M", change: "+8.4%" },
  { label: "Payroll spend", value: "$342K", change: "+2.1%" },
  { label: "Inventory value", value: "$510K", change: "-1.2%" },
  { label: "Open liabilities", value: "$198K", change: "+0.9%" }
];

const realtimeFeeds = [
  { title: "Sales pipeline", detail: "Live CRM sync every 2 min", status: "Streaming" },
  { title: "Operations health", detail: "IoT & ERP signals", status: "Up to date" },
  { title: "Cash position", detail: "Bank + AP/AR ledger", status: "Streaming" }
];

const kpiTracking = [
  { label: "On-time delivery", value: "96.2%", target: "Target 95%" },
  { label: "Days cash on hand", value: "72 days", target: "Target 60 days" },
  { label: "Revenue per head", value: "$18.4K", target: "Target $17K" }
];

const focusAreas = [
  {
    title: "Finance & accounting",
    description:
      "General ledger close, budget variance alerts, and automated invoicing.",
    status: "3 approvals pending"
  },
  {
    title: "People operations",
    description: "Recruiting pipeline and performance review cadence tracking.",
    status: "14 reviews due"
  },
  {
    title: "Supply chain",
    description:
      "Low stock alerts, inbound shipments, and RFID scan accuracy metrics.",
    status: "18 low stock items"
  },
  {
    title: "Sales & CRM",
    description: "Quotes, orders, renewals, and customer health monitoring.",
    status: "$185K in negotiation"
  }
];

const activityFeed = [
  {
    title: "General ledger closed for August",
    detail: "Finance posted 42 journal entries and reconciled 12 accounts."
  },
  {
    title: "Manufacturing schedule updated",
    detail: "Line B shifted to evening to meet accelerated demand."
  },
  {
    title: "New enterprise quote approved",
    detail: "Sales sent updated pricing to Summit Retail Group."
  }
];

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Dashboard</h1>
        <p className="text-sm text-slate-600">
          Organization-wide snapshot of financial and operational health.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label}>
            <p className="text-xs text-slate-500">{metric.label}</p>
            <p className="mt-2 text-2xl font-semibold">{metric.value}</p>
            <p className="mt-1 text-xs text-emerald-600">
              {metric.change} vs last month
            </p>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Card>
          <h2 className="text-lg font-semibold">Real-time data dashboards</h2>
          <p className="mt-2 text-sm text-slate-600">
            Streamed KPIs refresh continuously from finance, HR, and operations.
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-3">
            {realtimeFeeds.map((feed) => (
              <div key={feed.title} className="rounded-lg border border-slate-200 p-3">
                <p className="text-sm font-semibold">{feed.title}</p>
                <p className="mt-1 text-xs text-slate-500">{feed.detail}</p>
                <p className="mt-3 text-xs font-medium text-emerald-600">
                  {feed.status}
                </p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Activity feed</h2>
          <p className="mt-1 text-sm text-slate-600">
            Recent updates from every module.
          </p>
          <div className="mt-4 space-y-4">
            {activityFeed.map((item) => (
              <div key={item.title}>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">{item.detail}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <Card>
          <h2 className="text-lg font-semibold">Operational focus</h2>
          <p className="mt-1 text-sm text-slate-600">
            Cross-functional priorities across finance, HR, inventory, and sales.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600"
              >
                <p className="text-sm font-medium text-slate-900">{area.title}</p>
                <p className="mt-1 text-xs text-slate-500">{area.description}</p>
                <p className="mt-3 text-xs font-semibold text-slate-700">{area.status}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">KPI tracking</h2>
          <p className="mt-2 text-sm text-slate-600">
            Track targets in real time with automated alerts on variance.
          </p>
          <div className="mt-4 space-y-3">
            {kpiTracking.map((kpi) => (
              <div key={kpi.label} className="rounded-lg border border-slate-200 p-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold">{kpi.label}</p>
                  <p className="text-sm text-slate-700">{kpi.value}</p>
                </div>
                <p className="mt-1 text-xs text-slate-500">{kpi.target}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Operational alerts</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• 4 payroll approvals pending.</li>
          <li>• Inventory reorder threshold hit for 2 SKUs.</li>
          <li>• 1 supplier invoice awaiting review.</li>
        </ul>
      </Card>
      <Card>
        <h2 className="text-lg font-semibold">Automation triggers</h2>
        <p className="mt-2 text-sm text-slate-600">
          Workflow automations dispatch approvals, anomaly investigations, and BI
          dashboards when KPIs drift outside thresholds.
        </p>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Auto-route budget exceptions to finance leads.</li>
          <li>• Schedule quarterly board dashboards upon close.</li>
          <li>• Escalate supplier risk alerts to procurement.</li>
        </ul>
      </Card>
    </div>
  );
}
