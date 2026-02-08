import { Card } from "@/components/ui/card";

const reports = [
  { name: "Balance sheet", format: "PDF" },
  { name: "Profit & loss", format: "CSV" },
  { name: "Headcount summary", format: "PDF" }
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
          <Card key={report.name}>
            <p className="text-sm font-semibold">{report.name}</p>
            <p className="mt-2 text-xs text-slate-500">Export: {report.format}</p>
          </Card>
        ))}
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Analytics insights</h2>
        <p className="mt-3 text-sm text-slate-600">
          Forecasting models, variance analysis, and KPI alerts are configured per
          organization to keep stakeholders aligned.
        </p>
      </Card>
    </div>
  );
}
