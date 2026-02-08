import { Card } from "@/components/ui/card";

const values = [
  "Security-first architecture with audited access controls.",
  "Operational clarity through real-time analytics.",
  "Flexible modules that grow with your organization.",
  "Dedicated implementation teams for fast time-to-value."
];

const milestones = [
  {
    title: "Discover",
    description: "Map your current workflows, pain points, and compliance requirements."
  },
  {
    title: "Design",
    description: "Configure modules, approval logic, and dashboards for every team."
  },
  {
    title: "Deploy",
    description: "Migrate data, test integrations, and launch with training support."
  },
  {
    title: "Optimize",
    description: "Automate continuously with KPI reviews, audits, and quarterly roadmaps."
  }
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">About Atlas ERP</h1>
      <p className="mt-4 max-w-3xl text-slate-600">
        Atlas ERP is designed for modern organizations that need a trusted, unified
        operating system. With configurable workflows and auditability baked in, teams can
        scale without sacrificing compliance.
      </p>
      <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4">
          {values.map((value) => (
            <Card key={value}>
              <p className="text-sm text-slate-600">{value}</p>
            </Card>
          ))}
        </div>
        <Card className="space-y-4 bg-slate-50">
          <h2 className="text-xl font-semibold">Implementation approach</h2>
          <p className="text-sm text-slate-600">
            Our consultants collaborate with your finance, operations, and IT leaders to
            deliver a clean, automated rollout with measurable ROI.
          </p>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-md bg-white px-4 py-3">
              <span>Average go-live</span>
              <span className="font-semibold text-slate-900">6 weeks</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-white px-4 py-3">
              <span>Automation increase</span>
              <span className="font-semibold text-slate-900">48%</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-white px-4 py-3">
              <span>Support response</span>
              <span className="font-semibold text-slate-900">30 min</span>
            </div>
          </div>
        </Card>
      </div>
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">How we deliver results</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {milestones.map((milestone) => (
            <Card key={milestone.title} className="space-y-2">
              <h3 className="text-base font-semibold text-slate-900">
                {milestone.title}
              </h3>
              <p className="text-sm text-slate-600">{milestone.description}</p>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
