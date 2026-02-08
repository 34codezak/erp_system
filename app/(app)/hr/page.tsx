import { Card } from "@/components/ui/card";

const highlights = [
  { label: "Employees", value: "128" },
  { label: "Open roles", value: "6" },
  { label: "Pending reviews", value: "14" }
];

export default function HrPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">HR module</h1>
        <p className="text-sm text-slate-600">
          Manage employee records, departments, and payroll workflows.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.label}>
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </Card>
        ))}
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Upcoming actions</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Schedule Q3 performance reviews.</li>
          <li>• Finalize payroll for contract hires.</li>
          <li>• Update department headcount approvals.</li>
        </ul>
      </Card>
    </div>
  );
}
