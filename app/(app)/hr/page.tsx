import { RecordEntryCard } from "@/components/record-entry-card";

const highlights = [
  { label: "Active employees", value: "128" },
  { label: "Open roles", value: "6" },
  { label: "Attendance rate", value: "96.4%" },
  { label: "Reviews due", value: "14" }
];

const recruitment = [
  { role: "Senior Accountant", stage: "Onsite interviews", candidates: "4" },
  { role: "Warehouse supervisor", stage: "Offer", candidates: "1" },
  { role: "HR Business Partner", stage: "Screening", candidates: "7" }
];

const attendance = [
  { team: "Operations", status: "Fully staffed", note: "0 absences" },
  { team: "Manufacturing", status: "Short 2 operators", note: "Coverage arranged" },
  { team: "Sales", status: "Remote week", note: "22 reps active" }
];

const performance = [
  { cycle: "Q3 reviews", status: "72% complete" },
  { cycle: "Leadership feedback", status: "In progress" },
  { cycle: "Skills matrix", status: "Updated Aug 12" }
];

export default function HrPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">HR module</h1>
        <p className="text-sm text-slate-600">
          Centralize employee records, recruitment, attendance, and performance
          reviews with secure access controls.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {highlights.map((item) => (
          <RecordEntryCard key={item.label} entryTitle={item.label}>
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </RecordEntryCard>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <RecordEntryCard
          entryTitle="Recruitment pipeline"
          entryDescription="Log candidate updates and hiring milestones."
        >
          <h2 className="text-lg font-semibold">Recruitment pipeline</h2>
          <p className="mt-1 text-sm text-slate-600">
            Track candidate stages and hiring velocity across departments.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {recruitment.map((item) => (
              <div
                key={item.role}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.role}</p>
                  <p className="text-xs text-slate-500">{item.stage}</p>
                </div>
                <span className="text-xs text-slate-600">
                  {item.candidates} candidates
                </span>
              </div>
            ))}
          </div>
        </RecordEntryCard>
        <RecordEntryCard
          entryTitle="Attendance & scheduling"
          entryDescription="Record time-off, coverage, or staffing notes."
        >
          <h2 className="text-lg font-semibold">Attendance & scheduling</h2>
          <p className="mt-1 text-sm text-slate-600">
            Daily coverage status and planned time-off.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {attendance.map((item) => (
              <div
                key={item.team}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.team}</p>
                  <p className="text-xs text-slate-500">{item.note}</p>
                </div>
                <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </RecordEntryCard>
      </div>
      <RecordEntryCard
        entryTitle="Performance management"
        entryDescription="Capture review notes and coaching actions."
      >
        <h2 className="text-lg font-semibold">Performance management</h2>
        <p className="mt-1 text-sm text-slate-600">
          Monitor review cycles, feedback, and growth plans.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {performance.map((item) => (
            <div
              key={item.cycle}
              className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600"
            >
              <p className="text-sm font-medium text-slate-900">{item.cycle}</p>
              <p className="text-xs text-slate-500">{item.status}</p>
            </div>
          ))}
        </div>
      </RecordEntryCard>
    </div>
  );
}
