import { Card } from "@/components/ui/card";

const values = [
  "Security-first architecture with audited access controls.",
  "Operational clarity through real-time analytics.",
  "Flexible modules that grow with your organization."
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
      <div className="mt-10 grid gap-4">
        {values.map((value) => (
          <Card key={value}>
            <p className="text-sm text-slate-600">{value}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
