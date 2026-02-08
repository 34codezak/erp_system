import { Card } from "@/components/ui/card";

const productionStats = [
  { label: "Active work orders", value: "38" },
  { label: "On-time completion", value: "94%" },
  { label: "Capacity utilization", value: "82%" },
  { label: "Quality yield", value: "98.6%" }
];

const bomItems = [
  { product: "Model Z Control Unit", components: "42", status: "Approved" },
  { product: "EcoFlow Assembly", components: "18", status: "Pending" },
  { product: "Atlas Drive Module", components: "31", status: "Approved" }
];

const mrpSignals = [
  { material: "Circuit board 4.2", action: "Order 2,500", date: "Sep 4" },
  { material: "Cooling fans", action: "Rebalance stock", date: "Aug 29" },
  { material: "Steel housing", action: "Order 1,100", date: "Sep 1" }
];

const schedule = [
  { line: "Line A", shift: "Day", status: "Running" },
  { line: "Line B", shift: "Evening", status: "Setup" },
  { line: "Line C", shift: "Night", status: "Maintenance" }
];

export default function ManufacturingPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Manufacturing</h1>
        <p className="text-sm text-slate-600">
          Plan production with BOM, MRP, and scheduling controls aligned to
          demand.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {productionStats.map((item) => (
          <Card key={item.label}>
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </Card>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Bill of materials</h2>
          <p className="mt-1 text-sm text-slate-600">
            Approved BOMs aligned with engineering change orders.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {bomItems.map((item) => (
              <div
                key={item.product}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.product}</p>
                  <p className="text-xs text-slate-500">
                    {item.components} components
                  </p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">MRP recommendations</h2>
          <p className="mt-1 text-sm text-slate-600">
            Automated material planning based on demand signals.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {mrpSignals.map((item) => (
              <div
                key={item.material}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.material}</p>
                  <p className="text-xs text-slate-500">{item.action}</p>
                </div>
                <span className="text-xs text-slate-500">{item.date}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Production scheduling</h2>
        <p className="mt-1 text-sm text-slate-600">
          Live view of line utilization and shift readiness.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {schedule.map((item) => (
            <div
              key={item.line}
              className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600"
            >
              <p className="text-sm font-medium text-slate-900">{item.line}</p>
              <p className="text-xs text-slate-500">{item.shift} shift</p>
              <p className="mt-2 text-xs text-slate-500">{item.status}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
