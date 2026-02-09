import type { Route } from "next";
import Image from "next/image";
import Link from "next/link";

import { Button, Card } from "@mui/material";

import LiveOpsBoard from "@/components/ui/LiveOpsBoard";
import { cn } from "@/lib/utils";

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
] satisfies Array<{ title: string; description: string; href?: Route }>;

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

const themeVariants = [
  {
    title: "Light workspace",
    description: "Keep focus with airy dashboards built for daylight operations.",
    detail: "text-slate-600",
    accent: "border border-slate-200 bg-white text-slate-900 hover:bg-slate-100"
  },
  {
    title: "Dark workspace",
    description: "Reduce eye strain in low-light environments with contrast-rich panels.",
    detail: "text-slate-300",
    accent: "border border-slate-700 bg-slate-900 text-slate-100 hover:bg-slate-800"
  }
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

const buttonBaseClasses =
  "inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors duration-200 ease-out motion-reduce:transition-none";

const linkButtonClasses = {
  primary: "bg-brand text-white hover:bg-brand/90",
  secondary:
    "border border-white/60 bg-white/70 text-slate-900 shadow-sm shadow-emerald-100/60 backdrop-blur hover:bg-white/90",
  ghost: "bg-white/40 text-slate-700 backdrop-blur hover:bg-white/70"
};

const linkButton = (variant: keyof typeof linkButtonClasses) =>
  cn(buttonBaseClasses, linkButtonClasses[variant]);

const glassSurface =
  "border border-white/50 bg-white/65 shadow-[0_20px_60px_-40px_rgba(15,23,42,0.7)] backdrop-blur-xl";
const glassSurfaceStrong =
  "border border-white/60 bg-white/80 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.65)] backdrop-blur-2xl";
const glassSurfaceMuted =
  "border border-white/35 bg-white/55 shadow-[0_12px_30px_-24px_rgba(15,23,42,0.5)] backdrop-blur-lg";

export default function LandingPage() {
  return (
    <main className="bg-gradient-to-br from-slate-100 via-white to-emerald-50">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-10 md:gap-16 md:py-16">
        <section className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-6">
            <span className="w-fit rounded-full border border-emerald-200 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              Atlas-ready ERP
            </span>
            <div className="space-y-4">
              <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">
                Chart every department on a single automated ERP atlas.
              </h1>
              <p className="text-base text-slate-600">
                Atlas ERP unifies finance, supply chain, HR, and operations with intelligent
                workflows, secure approvals, and north-star analytics that keep leadership aligned.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link className={linkButton("primary")} href="/sign-up">
                Start free
              </Link>
              <Link className={linkButton("secondary")} href="/pricing">
                View pricing
              </Link>
              <Link className={linkButton("ghost")} href="/contact">
                Request a demo
              </Link>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "Compass-ready audit trails and approvals.",
                "Multi-tenant data isolation with Supabase RLS.",
                "Real-time dashboards with exports and horizon alerts.",
                "Automated exception alerts and variance detection."
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <p className="text-sm text-slate-600">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <Card
            className={cn(
              "relative overflow-hidden bg-gradient-to-br from-white/80 via-white/70 to-emerald-100/40",
              glassSurfaceStrong
            )}
          >
            <div className="flex flex-col gap-6">
              <Image
                src="https://undraw.co/illustrations/undraw_data_processing_yrrv.svg"
                alt="Illustration of data processing"
                className="h-56 w-full object-contain"
                width={640}
                height={360}
                priority
                sizes="(min-width: 1024px) 420px, 100vw"
              />
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-slate-900">Executive command atlas</h2>
                <p className="text-sm text-slate-600">
                  Navigate cash, inventory turns, and workforce utilization in one secure view.
                </p>
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-lg border border-white/50 bg-white/60 p-3 backdrop-blur"
                  >
                    <p className="text-[0.7rem] uppercase tracking-[0.15em] text-slate-500">
                      {metric.label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900">
                      {metric.value}
                    </p>
                  </div>
                ))}
              </div>
              <Button variant="outlined" color="secondary">
                Download platform overview
              </Button>
            </div>
          </Card>
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.title} className={glassSurface}>
              <div className="flex h-full flex-col gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
                  <p className="text-sm text-slate-600">{item.description}</p>
                </div>
                {item.href ? (
                  <Link className={linkButton("ghost")} href={item.href}>
                    Explore module
                  </Link>
                ) : (
                  <span className="inline-flex w-fit items-center rounded-md bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                    Coming soon
                  </span>
                )}
              </div>
            </Card>
          ))}
        </section>

        <section className="space-y-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-3">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Interactive workspace
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Keep teams on course with responsive, interactive operations.
              </h2>
              <p className="text-sm text-slate-600">
                Surface live workflows, search instantly, and guide every decision with
                automation signals that update in milliseconds.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-xs font-semibold text-slate-500">
              <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1">
                Keyboard-first controls
              </span>
              <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1">
                Zero-blocking UI
              </span>
              <span className="rounded-full border border-white/70 bg-white/70 px-3 py-1">
                Instant filtering
              </span>
            </div>
          </div>
          <LiveOpsBoard />
        </section>

        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="flex flex-col gap-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Automated workflows
            </span>
            <div className="space-y-3">
              <h2 className="text-3xl font-semibold text-slate-900">
                Replace manual handoffs with intelligent, route-aware process automation.
              </h2>
              <p className="text-sm text-slate-600">
                Build workflows that match your approval policies, integrate with your tools, and
                surface exceptions before they impact the business.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {workflows.map((workflow) => (
                <Card key={workflow.title} className={glassSurfaceMuted}>
                  <div className="space-y-2">
                    <h3 className="text-sm font-semibold text-slate-900">
                      {workflow.title}
                    </h3>
                    <p className="text-sm text-slate-600">{workflow.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
          <Card
            className={cn(
              "bg-gradient-to-br from-white/80 via-white/70 to-emerald-100/40",
              glassSurfaceStrong
            )}
          >
            <div className="flex flex-col gap-6">
              <Image
                src="https://undraw.co/illustrations/undraw_team_collaboration_re_ow29.svg"
                alt="Illustration of teams collaborating"
                className="h-56 w-full object-contain"
                width={640}
                height={360}
                sizes="(min-width: 1024px) 420px, 100vw"
              />
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-slate-900">Integrated analytics</h3>
                <p className="text-sm text-slate-600">
                  Dashboards update in real time with predictive forecasts, variance commentary,
                  and automated executive summaries.
                </p>
              </div>
              <div className="space-y-2">
                {[
                  { label: "Cash runway", value: "14.6 months" },
                  { label: "Inventory at risk", value: "2.1%" },
                  { label: "Payroll forecast variance", value: "-0.8%" }
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-lg border border-white/50 bg-white/60 px-3 py-2 backdrop-blur"
                  >
                    <span className="text-sm text-slate-600">{item.label}</span>
                    <span className="text-sm font-semibold text-slate-900">{item.value}</span>
                  </div>
                ))}
              </div>
              <Link className={linkButton("primary")} href="/dashboard">
                View live dashboards
              </Link>
            </div>
          </Card>
        </section>

        <section className="space-y-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
                Connected ecosystem
              </span>
              <h2 className="text-3xl font-semibold text-slate-900">
                Integrate every tool already in your orbit.
              </h2>
            </div>
            <Link className={linkButton("secondary")} href="/contact">
              Talk to integrations
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {integrations.map((integration) => (
              <Card key={integration} className={glassSurfaceMuted}>
                <p className="text-sm text-slate-600">{integration}</p>
              </Card>
            ))}
          </div>
        </section>

      <section className="mt-16">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
              Theme variations
            </p>
            <h2 className="text-3xl font-semibold text-slate-900">
              Match your ERP workspace to every team and environment on the map.
            </h2>
            <p className="text-sm text-slate-600">
              Switch between light and dark modes to align with brand guidelines and keep
              operators focused in every setting.
            </p>
          </div>
          <Link href="/contact">
            <Button variant="outlined" color="secondary">
              Explore themes
            </Button>
          </Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {themeVariants.map((variant) => (
            <Card
              key={variant.title}
              className={cn(
                "space-y-4",
                glassSurfaceStrong,
                variant.title === "Dark workspace"
                  ? "bg-slate-950/80 text-slate-100"
                  : "bg-white/80 text-slate-900"
              )}
            >
              <div>
                <h3 className="text-lg font-semibold">{variant.title}</h3>
                <p className={`mt-2 text-sm ${variant.detail}`}>{variant.description}</p>
              </div>
              <div
                className={`rounded-lg border border-white/40 bg-white/60 p-4 backdrop-blur ${
                  variant.title === "Dark workspace"
                    ? "bg-slate-950/70 text-slate-100"
                    : "text-slate-900"
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
                      className={`rounded-md border border-white/50 bg-white/70 p-3 text-xs backdrop-blur ${
                        variant.title === "Dark workspace"
                          ? "bg-slate-950/70 text-slate-200"
                          : "text-slate-700"
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
              Integrate every tool already in your orbit.
            </h2>
          </div>
          <Link href="/contact">
            <Button variant="outlined" color="secondary">
              Talk to integrations
            </Button>
          </Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((integration) => (
            <Card key={integration} className={glassSurfaceMuted}>
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
            Teams steer smarter with Atlas ERP.
          </h2>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className={cn("space-y-4", glassSurface)}>
              <p className="text-sm text-slate-600">“{testimonial.quote}”</p>
              <div>
                <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                <p className="text-xs text-slate-500">{testimonial.title}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

        <section>
          <Card
            className={cn(
              "border border-emerald-200/60 bg-emerald-100/50 shadow-[0_25px_60px_-40px_rgba(16,185,129,0.5)] backdrop-blur-2xl"
            )}
          >
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl font-semibold text-slate-900">
                  Ready to chart your ERP operations?
                </h2>
                <p className="text-sm text-slate-600">
                  Launch in weeks with dedicated onboarding, data migration, and training.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link className={linkButton("primary")} href="/sign-up">
                  Start free
                </Link>
                <Link className={linkButton("secondary")} href="/contact">
                  Schedule consult
                </Link>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </main>
  );
}
