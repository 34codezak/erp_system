import { Card } from "@/components/ui/card";

const inventoryStats = [
  { label: "Active assets", value: "412" },
  { label: "Low stock items", value: "18" },
  { label: "Suppliers", value: "24" }
];

export default function InventoryPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Inventory & assets</h1>
        <p className="text-sm text-slate-600">
          Track equipment, depreciation, and supplier-managed inventory.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {inventoryStats.map((item) => (
          <Card key={item.label}>
            <p className="text-xs text-slate-500">{item.label}</p>
            <p className="mt-2 text-2xl font-semibold">{item.value}</p>
          </Card>
        ))}
      </div>
      <Card>
        <h2 className="text-lg font-semibold">Asset activity</h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-600">
          <li>• 6 laptops assigned to new hires.</li>
          <li>• Forklift #A-221 scheduled for maintenance.</li>
          <li>• Inventory audit scheduled for next week.</li>
        </ul>
      </Card>
    </div>
  );
}
