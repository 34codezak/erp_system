import { RecordEntryCard } from "@/components/record-entry-card";

const reports = [
  { name: "Balance sheet", format: "PDF" },
  { name: "Profit & loss", format: "CSV" },
  { name: "Headcount summary", format: "PDF" }
];

const analyticsModules = [
  {
    title: "Advanced report analytics",
    detail: "Variance drivers, cohort trends, and automated narrative summaries."
  },
  {
    title: "Predictive planning",
    detail: "Rolling forecasts with scenario modeling and sensitivity analysis."
  },
  {
    title: "Compliance insights",
    detail: "Audit-ready drilldowns with approvals and data lineage."
  }
];

const biTools = [
  "Self-serve dashboards with drag-and-drop metrics.",
  "Embedded SQL + semantic models for governed access.",
  "Export to Power BI, Tableau, or Looker connectors."
];

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Reports & analytics</h1>
        <p className="text-sm text-slate-600">
          Generate executive-ready reports with secure exports.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {reports.map((report) => (
          <RecordEntryCard key={report.name} entryTitle={report.name}>
            <p className="text-sm font-semibold">{report.name}</p>
            <p className="mt-2 text-xs text-slate-500">Export: {report.format}</p>
          </RecordEntryCard>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
        <RecordEntryCard
          entryTitle="Analytics insights"
          entryDescription="Capture analytics findings or alert notes."
        >
          <h2 className="text-lg font-semibold">Analytics insights</h2>
          <p className="mt-3 text-sm text-slate-600">
            Forecasting models, variance analysis, and KPI alerts are configured per
            organization to keep stakeholders aligned.
          </p>
          <div className="mt-4 grid gap-3 md:grid-cols-3">
            {analyticsModules.map((module) => (
              <div key={module.title} className="rounded-lg border border-slate-200 p-3">
                <p className="text-sm font-semibold">{module.title}</p>
                <p className="mt-1 text-xs text-slate-500">{module.detail}</p>
              </div>
            ))}
          </div>
        </RecordEntryCard>
        <RecordEntryCard
          entryTitle="Business intelligence tools"
          entryDescription="Record connector requests or dashboard needs."
        >
          <h2 className="text-lg font-semibold">Business intelligence tools</h2>
          <p className="mt-2 text-sm text-slate-600">
            Enable governed exploration with embedded BI and external connectors.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            {biTools.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </RecordEntryCard>
      </div>
    </div>
  );
}
