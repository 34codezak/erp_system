import { RecordEntryCard } from "@/components/record-entry-card";

const inventoryStats = [
  { label: "SKUs tracked", value: "1,248" },
  { label: "Low stock alerts", value: "18" },
  { label: "Active warehouses", value: "6" },
  { label: "Inbound shipments", value: "12" }
];

const stockLevels = [
  { item: "Aluminum frame - A14", level: "62%", status: "Reorder in 10 days" },
  { item: "Control unit - C08", level: "24%", status: "Critical" },
  { item: "Packaging - P92", level: "88%", status: "Healthy" }
];

const batches = [
  { batch: "BCH-2041", location: "Warehouse East", status: "QA hold" },
  { batch: "BCH-2034", location: "Warehouse North", status: "Released" },
  { batch: "BCH-2019", location: "3PL Storage", status: "In transit" }
];

const tracking = [
  { item: "RFID scan coverage", value: "97%" },
  { item: "Barcode accuracy", value: "99.2%" },
  { item: "Cycle count compliance", value: "94%" }
];

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Inventory & assets</h1>
        <p className="text-sm text-slate-600">
          Optimize stock levels, warehouse flows, and batch tracking with RFID
          and barcode intelligence.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {inventoryStats.map((item) => (
          <RecordEntryCard key={item.label} entryTitle={item.label}>
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </RecordEntryCard>
        ))}
      </div>
      <div className="grid gap-4 lg:grid-cols-2">
        <RecordEntryCard
          entryTitle="Stock levels"
          entryDescription="Record counts, adjustments, or reorder notes."
        >
          <h2 className="text-lg font-semibold">Stock levels</h2>
          <p className="mt-1 text-sm text-slate-600">
            Real-time availability with reorder thresholds.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {stockLevels.map((item) => (
              <div
                key={item.item}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.item}</p>
                  <p className="text-xs text-slate-500">{item.status}</p>
                </div>
                <span className="text-xs font-semibold text-slate-900">
                  {item.level}
                </span>
              </div>
            ))}
          </div>
        </RecordEntryCard>
        <RecordEntryCard
          entryTitle="Batch tracking"
          entryDescription="Capture batch status changes and movements."
        >
          <h2 className="text-lg font-semibold">Batch tracking</h2>
          <p className="mt-1 text-sm text-slate-600">
            End-to-end traceability for compliance and recalls.
          </p>
          <div className="mt-4 space-y-3 text-sm text-slate-600">
            {batches.map((item) => (
              <div
                key={item.batch}
                className="flex items-center justify-between rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
              >
                <div>
                  <p className="text-sm font-medium text-slate-900">{item.batch}</p>
                  <p className="text-xs text-slate-500">{item.location}</p>
                </div>
                <span className="rounded-full bg-slate-200 px-3 py-1 text-xs text-slate-700">
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </RecordEntryCard>
      </div>
      <RecordEntryCard
        entryTitle="Barcode & RFID coverage"
        entryDescription="Log scanning audits or coverage updates."
      >
        <h2 className="text-lg font-semibold">Barcode & RFID coverage</h2>
        <p className="mt-1 text-sm text-slate-600">
          Accuracy metrics for automated warehouse scanning.
        </p>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          {tracking.map((item) => (
            <div
              key={item.item}
              className="rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600"
            >
              <p className="text-sm font-medium text-slate-900">{item.item}</p>
              <p className="text-xs text-slate-500">{item.value}</p>
            </div>
          ))}
        </div>
      </RecordEntryCard>
    </div>
  );
}
