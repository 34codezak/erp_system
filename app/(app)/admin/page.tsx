import { Card } from "@/components/ui/card";

export default function AdminPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Admin panel</h1>
        <p className="text-sm text-slate-600">
          Configure roles, audit logs, and organization settings.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Access control</h2>
          <p className="mt-2 text-sm text-slate-600">
            Manage role assignments and permission sets for each department.
          </p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Audit logs</h2>
          <p className="mt-2 text-sm text-slate-600">
            Review sensitive changes with immutable audit trails.
          </p>
        </Card>
      </div>
    </div>
  );
}
