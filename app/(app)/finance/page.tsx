import { Card } from "@/components/ui/card";

const ledger = [
  { label: "Income", value: "$482K" },
  { label: "Expenses", value: "$311K" },
  { label: "Net", value: "$171K" }
];

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Finance module</h1>
        <p className="text-sm text-slate-600">
          Track income, expenses, liabilities, and approvals in one ledger.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {ledger.map((item) => (
          <Card key={item.label}>
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </Card>
        ))}
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Approval queue</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• Expense report #1204 awaiting approval.</li>
          <li>• Vendor invoice for Atlas Logistics due in 5 days.</li>
          <li>• Quarterly budget update draft shared by Finance Ops.</li>
        </ul>
      </Card>
    </div>
  );
}
