import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const highlights = [
  {
    title: "People Operations",
    description: "Onboard talent, track performance, and automate payroll approvals.",
    href: "/modules/people-operations"
  },
  {
    title: "Finance & Accounting",
    description: "Close faster with automated reconciliations, budgeting, and audit trails.",
    href: "/modules/finance-accounting"
  },
  {
    title: "Smart Document Processing",
    description: "Use OCR to capture invoice and receipt data with confidence scoring."
  },
  {
    title: "Supply Chain",
    description: "Forecast demand, optimize procurement, and protect inventory margins.",
    href: "/modules/supply-chain"
  }
];

const metrics = [
  { label: "Average close time", value: "4.2 days" },
  { label: "Automated workflows", value: "150+" },
  { label: "Real-time dashboards", value: "60+" },
  { label: "Customer satisfaction", value: "98%" }
];

const workflows = [
  {
    title: "Procure-to-pay",
    description: "Route approvals, sync vendor records, and match invoices automatically."
  },
  {
    title: "Hire-to-retire",
    description: "Unify HR data, benefits, and role-based access from day one."
  },
  {
    title: "Order-to-cash",
    description: "Automate revenue recognition, billing, and customer success touchpoints."
  },
  {
    title: "Record-to-report",
    description: "Continuous close with automated journal entries and audit logs."
  },
  {
    title: "Document intake automation",
    description: "Extract, validate, and route invoice and receipt data with OCR."
  }
];

const integrations = [
  "Slack, Teams, and Google Workspace sync",
  "Stripe billing + ACH payments",
  "Salesforce CRM and HubSpot",
  "Snowflake and BigQuery exports",
  "Payroll partners and benefits APIs",
  "Custom webhooks and API keys"
];

const testimonials = [
  {
    quote:
      "Atlas ERP cut our finance close in half and gave every department the data they need.",
    name: "Andrea Kim",
    title: "VP Finance, Northwind Logistics"
  },
  {
    quote:
      "We automated 80% of our procurement workflows in the first month without adding headcount.",
    name: "Diego Alvarez",
    title: "Head of Operations, Lumen Retail"
  },
  {
    quote:
      "The dashboards keep leadership aligned, and compliance reviews are now effortless.",
    name: "Priya Patel",
    title: "COO, Helios Manufacturing"
  }
];

const themeVariants = [
  {
    title: "Light workspace",
    description:
      "Clean, airy layouts designed for focused daily operations and fast scanning.",
    surface: "bg-white border-slate-200 text-slate-900",
    detail: "text-slate-600",
    accent: "bg-brand text-white"
  },
  {
    title: "Midnight workspace",
    description:
      "A dark, high-contrast theme inspired by executive dashboards and control centers.",
    surface: "bg-slate-950 border-slate-800 text-slate-100",
    detail: "text-slate-400",
    accent: "bg-sky-500 text-slate-900"
  }
];

export default function LandingPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Production-ready ERP
          </p>
          <h1 className="mt-4 text-4xl font-semibold text-slate-900 lg:text-5xl">
            Run every department on a single automated ERP platform.
          </h1>
          <p className="mt-5 text-base text-slate-600">
            Atlas ERP unifies finance, supply chain, HR, and operations with intelligent
            workflows, secure approvals, and executive analytics that keep leadership aligned.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="/sign-up">
              <Button>Start free</Button>
            </Link>
            <Link href="/pricing">
              <Button variant="secondary">View pricing</Button>
            </Link>
            <Link href="/contact">
              <Button variant="ghost">Request a demo</Button>
            </Link>
          </div>
          <div className="mt-8 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
            {[
              "SOC-ready audit trails and approvals.",
              "Multi-tenant data isolation with Supabase RLS.",
              "Real-time dashboards with exports and alerts.",
              "Automated exception alerts and variance detection.",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <i
                  className="fa-solid fa-circle-check mt-0.5 text-emerald-500"
                  aria-hidden="true"
                />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <Card className="space-y-6 border border-slate-200 bg-white">
          <div>
            <h2 className="text-lg font-semibold">Executive control center</h2>
            <p className="mt-2 text-sm text-slate-600">
              Monitor cash, inventory turns, and workforce utilization in one secure view.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-md bg-slate-50 p-4">
                <p className="text-xs uppercase tracking-wide text-slate-500">
                  {metric.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
          <Button variant="secondary">Download platform overview</Button>
        </Card>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        {highlights.map((item) => (
          <Card key={item.title} className="space-y-3">
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="text-sm text-slate-600">{item.description}</p>
            {item.href ? (
              <Link href={item.href}>
                <Button variant="ghost">Explore module</Button>
              </Link>
            ) : (
              <Button variant="ghost" disabled>
                Coming soon
              </Button>
            )}
          </Card>
        ))}
      </section>

      <section className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Automated workflows
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Replace manual handoffs with intelligent process automation.
          </h2>
          <p className="text-sm text-slate-600">
            Build workflows that match your approval policies, integrate with your tools, and
            surface exceptions before they impact the business.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {workflows.map((workflow) => (
              <Card key={workflow.title} className="space-y-2 bg-slate-50">
                <h3 className="text-base font-semibold text-slate-900">
                  {workflow.title}
                </h3>
                <p className="text-sm text-slate-600">{workflow.description}</p>
              </Card>
            ))}
          </div>
        </div>
        <Card className="space-y-4 border border-slate-200 bg-white">
          <h3 className="text-xl font-semibold text-slate-900">Integrated analytics</h3>
          <p className="text-sm text-slate-600">
            Dashboards update in real time with predictive forecasts, variance commentary, and
            automated executive summaries.
          </p>
          <div className="space-y-3 text-sm text-slate-600">
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>Cash runway</span>
              <span className="font-semibold text-slate-900">14.6 months</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>Inventory at risk</span>
              <span className="font-semibold text-slate-900">2.1%</span>
            </div>
            <div className="flex items-center justify-between rounded-md bg-slate-50 px-4 py-3">
              <span>Payroll forecast variance</span>
              <span className="font-semibold text-slate-900">-0.8%</span>
            </div>
          </div>
          <Link href="/dashboard">
            <Button>View live dashboards</Button>
          </Link>
        </Card>
      </section>

      <section className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Theme variations
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Match your ERP workspace to every team and environment.
            </h2>
            <p className="text-sm text-slate-600">
              Switch between light and dark modes to align with brand guidelines and keep
              operators focused in every setting.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="secondary">Explore themes</Button>
          </Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {themeVariants.map((variant) => (
            <Card
              key={variant.title}
              className={`border ${variant.surface} space-y-4`}
            >
              <div>
                <h3 className="text-lg font-semibold">{variant.title}</h3>
                <p className={`mt-2 text-sm ${variant.detail}`}>{variant.description}</p>
              </div>
              <div
                className={`rounded-lg border p-4 ${
                  variant.title === "Light workspace"
                    ? "border-slate-200 bg-slate-50"
                    : "border-slate-800 bg-slate-900"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="text-xs font-semibold uppercase tracking-wide">
                    Command center
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="rounded-full border px-2 py-0.5">
                      Insights
                    </span>
                    <span className="rounded-full border px-2 py-0.5">
                      Alerts
                    </span>
                  </div>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Cash flow", "Inventory", "Workforce"].map((label) => (
                    <div
                      key={label}
                      className={`rounded-md border p-3 text-xs ${
                        variant.title === "Light workspace"
                          ? "border-slate-200 bg-white text-slate-700"
                          : "border-slate-800 bg-slate-950 text-slate-200"
                      }`}
                    >
                      <p className="font-semibold">{label}</p>
                      <p className={`mt-2 text-lg font-semibold ${variant.detail}`}>
                        {label === "Cash flow" ? "14.6m" : label === "Inventory" ? "2.1%" : "96%"}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <p className={`text-xs ${variant.detail}`}>
                    Sync status: real-time
                  </p>
                  <button
                    className={`rounded-md px-3 py-1.5 text-xs font-semibold ${variant.accent}`}
                    type="button"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Connected ecosystem
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Integrate every tool your teams already love.
            </h2>
          </div>
          <Link href="/contact">
            <Button variant="secondary">Talk to integrations</Button>
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <Card key={integration} className="border border-slate-200 bg-white">
              <p className="text-sm text-slate-600">{integration}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Trusted by operators
          </p>
          <h2 className="text-3xl font-semibold text-slate-900">
            Teams run smarter with Atlas ERP.
          </h2>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="space-y-4">
              <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
              <div>
                <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-500">{testimonial.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <Card className="flex flex-col items-start justify-between gap-6 border border-brand/20 bg-brand/5 p-8 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">
              Ready to automate your ERP operations?
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              Launch in weeks with dedicated onboarding, data migration, and training.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/sign-up">
              <Button>Start free</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary">Schedule consult</Button>
            </Link>
          </div>
        </Card>
      </section>
    </main>
  );
}
