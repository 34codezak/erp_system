import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For growing teams that need the core ERP modules."
  },
  {
    name: "Scale",
    price: "$99",
    description: "Advanced reporting, approvals, and audit trails."
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom SLAs, SSO, and dedicated support."
  }
];

export default function PricingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Pricing</h1>
      <p className="mt-3 max-w-2xl text-slate-600">
        Choose a plan that scales with your organization. Stripe billing and usage-based
        add-ons are supported for paid plans.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name}>
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="mt-2 text-3xl font-semibold text-brand">{plan.price}</p>
            <p className="mt-3 text-sm text-slate-600">{plan.description}</p>
          </Card>
        ))}
      </div>
    </main>
  );
}
