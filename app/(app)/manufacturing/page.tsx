"use client";

import { RecordEntryCard } from "@/components/record-entry-card";
import { Button } from "@/components/ui/button";
import { useMemo, useState } from "react";

const productionStats = [
  { label: "Active work orders", value: "38" },
  { label: "On-time completion", value: "94%" },
  { label: "Capacity utilization", value: "82%" },
  { label: "Quality yield", value: "98.6%" }
];

const bomItems = [
  { product: "Model Z Control Unit", components: "42", status: "Approved" },
  { product: "EcoFlow Assembly", components: "18", status: "Pending" },
  { product: "Atlas Drive Module", components: "31", status: "Approved" }
];

const mrpSignals = [
  { material: "Circuit board 4.2", action: "Order 2,500", date: "Sep 4" },
  { material: "Cooling fans", action: "Rebalance stock", date: "Aug 29" },
  { material: "Steel housing", action: "Order 1,100", date: "Sep 1" }
];

const schedule = [
  { line: "Line A", shift: "Day", status: "Running" },
  { line: "Line B", shift: "Evening", status: "Setup" },
  { line: "Line C", shift: "Night", status: "Maintenance" }
];

export default function ManufacturingPage() {
  const [activeEntry, setActiveEntry] = useState<{
    title: string;
    subtitle: string;
    section: string;
  } | null>(null);

  const modalFields = useMemo(() => {
    if (!activeEntry) {
      return [];
    }
    if (activeEntry.section === "Bill of materials") {
      return [
        { label: "Product name", value: activeEntry.title },
        { label: "Components", value: activeEntry.subtitle },
        { label: "Approval status", value: "Approved" }
      ];
    }
    if (activeEntry.section === "MRP recommendations") {
      return [
        { label: "Material", value: activeEntry.title },
        { label: "Action", value: activeEntry.subtitle },
        { label: "Needed by", value: "Sep 4" }
      ];
    }
    return [
      { label: "Line", value: activeEntry.title },
      { label: "Shift", value: activeEntry.subtitle },
      { label: "Status", value: "Running" }
    ];
  }, [activeEntry]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Manufacturing</h1>
        <p className="text-sm text-slate-600">
          Plan production with BOM, MRP, and scheduling controls aligned to
          demand.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {productionStats.map((item) => (
          <RecordEntryCard key={item.label} entryTitle={item.label}>
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </RecordEntryCard>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <RecordEntryCard
          entryTitle="Bill of materials"
          entryDescription="Log new BOM revisions or component updates."
        >
          <h2 className="text-lg font-semibold">Bill of materials</h2>
          <p className="mt-1 text-sm text-slate-600">
            Approved BOMs aligned with engineering change orders.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {bomItems.map((item) => (
              <div
                key={item.product}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.product}</p>
                  <p className="text-xs text-slate-500">
                    {item.components} components
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs text-emerald-700">
                    {item.status}
                  </span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setActiveEntry({
                        title: item.product,
                        subtitle: `${item.components} components`,
                        section: "Bill of materials"
                      })
                    }
                  >
                    Update
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </RecordEntryCard>
        <RecordEntryCard
          entryTitle="MRP recommendations"
          entryDescription="Capture planning actions and supplier responses."
        >
          <h2 className="text-lg font-semibold">MRP recommendations</h2>
          <p className="mt-1 text-sm text-slate-600">
            Automated material planning based on demand signals.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {mrpSignals.map((item) => (
              <div
                key={item.material}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.material}</p>
                  <p className="text-xs text-slate-500">{item.action}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500">{item.date}</span>
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      setActiveEntry({
                        title: item.material,
                        subtitle: item.action,
                        section: "MRP recommendations"
                      })
                    }
                  >
                    Update
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </RecordEntryCard>
      </div>
      <RecordEntryCard
        entryTitle="Production scheduling"
        entryDescription="Record shift changes, line status, or utilization."
      >
        <h2 className="text-lg font-semibold">Production scheduling</h2>
        <p className="mt-1 text-sm text-slate-600">
          Live view of line utilization and shift readiness.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {schedule.map((item) => (
            <div
              key={item.line}
              className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600"
            >
              <p className="text-sm font-medium text-slate-900">{item.line}</p>
              <p className="text-xs text-slate-500">{item.shift} shift</p>
              <p className="mt-2 text-xs text-slate-500">{item.status}</p>
              <div className="mt-3">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    setActiveEntry({
                      title: item.line,
                      subtitle: `${item.shift} shift`,
                      section: "Production scheduling"
                    })
                  }
                >
                  Update
                </Button>
              </div>
            </div>
          ))}
        </div>
      </RecordEntryCard>
      {activeEntry ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/40 px-4 py-6">
          <div className="w-full max-w-xl rounded-2xl bg-white p-6 shadow-xl">
            <div className="flex flex-col gap-1">
              <p className="text-xs uppercase tracking-wide text-slate-400">
                {activeEntry.section}
              </p>
              <h3 className="text-lg font-semibold text-slate-900">Edit entry</h3>
              <p className="text-sm text-slate-500">
                Update the details for {activeEntry.title}.
              </p>
            </div>
            <div className="mt-5 space-y-4">
              {modalFields.map((field) => (
                <label key={field.label} className="block text-sm text-slate-600">
                  <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                    {field.label}
                  </span>
                  <input
                    type="text"
                    defaultValue={field.value}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                  />
                </label>
              ))}
              <label className="block text-sm text-slate-600">
                <span className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-400">
                  Notes
                </span>
                <textarea
                  rows={3}
                  placeholder="Add a note for this update..."
                  className="w-full resize-none rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-sm focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-200"
                />
              </label>
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-end gap-3">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => setActiveEntry(null)}
              >
                Cancel
              </Button>
              <Button type="button" size="sm" onClick={() => setActiveEntry(null)}>
                Save changes
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
