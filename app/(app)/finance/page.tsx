import { RecordEntryCard } from "@/components/record-entry-card";

const ledger = [
  { label: "General ledger balance", value: "$8.4M", change: "+4.2%" },
  { label: "Operating expenses", value: "$1.12M", change: "-1.1%" },
  { label: "Cash on hand", value: "$2.7M", change: "+6.3%" },
  { label: "Outstanding AR", value: "$412K", change: "+2.8%" }
];

const budgetSnapshots = [
  { department: "Operations", spent: "$420K", allocation: "$520K" },
  { department: "Product & R&D", spent: "$310K", allocation: "$360K" },
  { department: "G&A", spent: "$198K", allocation: "$220K" }
];

const invoices = [
  { client: "Summit Retail Group", status: "Approved", amount: "$74,800" },
  { client: "Vera Manufacturing", status: "Sent", amount: "$38,250" },
  { client: "Kinetic Solutions", status: "Pending", amount: "$21,600" }
];

const payrollItems = [
  { run: "August payroll", status: "Processing", date: "Aug 30" },
  { run: "Contractor payouts", status: "Ready", date: "Aug 28" },
  { run: "Bonus accruals", status: "Review", date: "Sep 2" }
];

export default function FinancePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Finance module</h1>
        <p className="text-sm text-slate-600">
          Manage general ledger, budgeting, invoicing, tax, and payroll workflows
          with real-time visibility.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {ledger.map((item) => (
          <RecordEntryCard key={item.label} entryTitle={item.label}>
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
            <p className="mt-1 text-xs text-emerald-600">{item.change} vs last month</p>
          </RecordEntryCard>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <RecordEntryCard
          entryTitle="Budget vs actual"
          entryDescription="Log budget adjustments or variance notes."
        >
          <h2 className="text-lg font-semibold">Budget vs actual</h2>
          <p className="mt-1 text-sm text-slate-600">
            Department-level tracking for proactive cost management.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {budgetSnapshots.map((item) => (
              <div key={item.department} className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.department}</p>
                  <p className="text-xs text-slate-500">
                    Spent {item.spent} of {item.allocation}
                  </p>
                </div>
                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
                  On track
                </span>
              </div>
            ))}
          </div>
        </RecordEntryCard>
        <RecordEntryCard
          entryTitle="Tax & compliance"
          entryDescription="Record filing updates or compliance tasks."
        >
          <h2 className="text-lg font-semibold">Tax & compliance</h2>
          <p className="mt-1 text-sm text-slate-600">
            Upcoming filings, approvals, and statutory deadlines.
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li>• VAT return draft due in 12 days.</li>
            <li>• 1099 contractor review scheduled.</li>
            <li>• Regional tax remittance ready for sign-off.</li>
          </ul>
        </RecordEntryCard>
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <RecordEntryCard
          entryTitle="Invoicing & collections"
          entryDescription="Capture invoice notes, disputes, or payments."
        >
          <h2 className="text-lg font-semibold">Invoicing & collections</h2>
          <p className="mt-1 text-sm text-slate-600">
            Monitor billing milestones, dunning, and customer balances.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {invoices.map((invoice) => (
              <div
                key={invoice.client}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{invoice.client}</p>
                  <p className="text-xs text-slate-500">Status: {invoice.status}</p>
                </div>
                <span className="text-sm font-semibold text-slate-900">
                  {invoice.amount}
                </span>
              </div>
            ))}
          </div>
        </RecordEntryCard>
        <RecordEntryCard
          entryTitle="Payroll processing"
          entryDescription="Record payroll approvals or adjustments."
        >
          <h2 className="text-lg font-semibold">Payroll processing</h2>
          <p className="mt-1 text-sm text-slate-600">
            Review payroll runs, approvals, and tax withholdings.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {payrollItems.map((item) => (
              <div
                key={item.run}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.run}</p>
                  <p className="text-xs text-slate-500">{item.date}</p>
                </div>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs text-amber-700">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </RecordEntryCard>
      </div>
    </div>
  );
}
