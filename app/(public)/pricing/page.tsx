import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "For growing teams that need the core ERP modules.",
    features: [
      "Finance & accounting core",
      "Inventory + procurement",
      "Standard workflow approvals",
      "Email + chat support"
    ]
  },
  {
    name: "Scale",
    price: "$99",
    description: "Advanced reporting, approvals, and audit trails.",
    features: [
      "Advanced analytics suite",
      "Custom approval flows",
      "Multi-entity consolidation",
      "Priority support"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Custom SLAs, SSO, and dedicated support.",
    features: [
      "SSO + SCIM provisioning",
      "Dedicated onboarding pod",
      "Custom security reviews",
      "Enterprise SLAs"
    ]
  }
];

const addOns = [
  "Implementation & data migration services",
  "Embedded payments and treasury management",
  "Advanced forecasting and AI anomaly detection",
  "Custom integrations & API extensions"
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
          <Card key={plan.name} className="space-y-4">
            <h2 className="text-xl font-semibold">{plan.name}</h2>
            <p className="mt-2 text-3xl font-semibold text-brand">{plan.price}</p>
            <p className="mt-3 text-sm text-slate-600">{plan.description}</p>
            <ul className="space-y-2 text-sm text-slate-600">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <Link href="/contact">
              <Button variant={plan.name === "Scale" ? "primary" : "secondary"}>
                {plan.name === "Enterprise" ? "Contact sales" : "Start trial"}
              </Button>
            </Link>
          </Card>
        ))}
      </div>
      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="space-y-3">
          <h2 className="text-xl font-semibold">Add-ons for complex operations</h2>
          <p className="text-sm text-slate-600">
            Customize your ERP stack with automation, data migration, and compliance services
            tailored to your industry.
          </p>
          <ul className="space-y-2 text-sm text-slate-600">
            {addOns.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </Card>
        <Card className="space-y-4 bg-slate-50">
          <h3 className="text-lg font-semibold">Need a custom rollout?</h3>
          <p className="text-sm text-slate-600">
            Talk with our solutions team to build a phased implementation plan with ROI
            modeling and change management support.
          </p>
          <Link href="/contact">
            <Button>Schedule a call</Button>
          </Link>
        </Card>
      </div>
    </main>
  );
}
