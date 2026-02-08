import { Card } from "@/components/ui/card";

const metrics = [
  { label: "Net revenue", value: "$1.24M", change: "+8.4%" },
  { label: "Payroll spend", value: "$342K", change: "+2.1%" },
  { label: "Inventory value", value: "$510K", change: "-1.2%" },
  { label: "Open liabilities", value: "$198K", change: "+0.9%" }
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
            <p className="mt-1 text-xs text-emerald-600">{metric.change} vs last month</p>
          </Card>
        ))}
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Operational alerts</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• 4 payroll approvals pending.</li>
          <li>• Inventory reorder threshold hit for 2 SKUs.</li>
          <li>• 1 supplier invoice awaiting review.</li>
        </ul>
      </Card>
    </div>
  );
}
