import { RecordEntryCard } from "@/components/record-entry-card";

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
        <RecordEntryCard
          entryTitle="Access control"
          entryDescription="Log access changes or role requests."
        >
          <h2 className="text-lg font-semibold">Access control</h2>
          <p className="mt-2 text-sm text-slate-600">
            Manage role assignments and permission sets for each department.
          </p>
        </RecordEntryCard>
        <RecordEntryCard
          entryTitle="Audit logs"
          entryDescription="Record reviews or follow-ups on audit events."
        >
          <h2 className="text-lg font-semibold">Audit logs</h2>
          <p className="mt-2 text-sm text-slate-600">
            Review sensitive changes with immutable audit trails.
          </p>
        </RecordEntryCard>
      </div>
    </div>
  );
}
