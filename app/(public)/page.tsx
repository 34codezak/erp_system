import Link from "next/link";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography
} from "@mui/material";

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
    <Box component="main" sx={{ backgroundColor: "#f8fafc" }}>
      <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
        <Box
          sx={{
            display: "grid",
            gap: 6,
            alignItems: "center",
            gridTemplateColumns: { md: "1.1fr 0.9fr" }
          }}
        >
          <Stack spacing={3}>
            <Chip
              label="Production-ready ERP"
              color="primary"
              variant="outlined"
              sx={{ alignSelf: "flex-start", textTransform: "uppercase", letterSpacing: 2 }}
            />
            <Typography variant="h2" fontWeight={600} color="text.primary">
              Run every department on a single automated ERP platform.
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Atlas ERP unifies finance, supply chain, HR, and operations with intelligent
              workflows, secure approvals, and executive analytics that keep leadership aligned.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2} flexWrap="wrap">
              <Button
                component={Link}
                href="/sign-up"
                variant="contained"
                color="primary"
              >
                Start free
              </Button>
              <Button component={Link} href="/pricing" variant="outlined">
                View pricing
              </Button>
              <Button component={Link} href="/contact" variant="text">
                Request a demo
              </Button>
            </Stack>
            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: { sm: "repeat(2, minmax(0, 1fr))" }
              }}
            >
              {[
                "SOC-ready audit trails and approvals.",
                "Multi-tenant data isolation with Supabase RLS.",
                "Real-time dashboards with exports and alerts.",
                "Automated exception alerts and variance detection."
              ].map((item) => (
                <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                  <Box
                    sx={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      backgroundColor: "#10b981",
                      marginTop: "6px"
                    }}
                  />
                  <Typography variant="body2" color="text.secondary">
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Box>
          </Stack>
          <Card
            elevation={0}
            sx={{ borderRadius: 4, border: "1px solid #e2e8f0", backgroundColor: "#fff" }}
          >
            <CardContent>
              <Stack spacing={3}>
                <Box
                  component="img"
                  src="https://undraw.co/illustrations/undraw_data_processing_yrrv.svg"
                  alt="Illustration of data processing"
                  sx={{ width: "100%", maxHeight: 220, objectFit: "contain" }}
                />
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    Executive control center
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Monitor cash, inventory turns, and workforce utilization in one secure view.
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "grid",
                    gap: 2,
                    gridTemplateColumns: { sm: "repeat(2, minmax(0, 1fr))" }
                  }}
                >
                  {metrics.map((metric) => (
                    <Box
                      key={metric.label}
                      sx={{
                        backgroundColor: "#f8fafc",
                        borderRadius: 2,
                        padding: 2
                      }}
                    >
                      <Typography variant="caption" color="text.secondary" sx={{ letterSpacing: 1 }}>
                        {metric.label}
                      </Typography>
                      <Typography variant="h6" fontWeight={600} sx={{ mt: 1 }}>
                        {metric.value}
                      </Typography>
                    </Box>
                  ))}
                </Box>
                <Button variant="outlined">Download platform overview</Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mt: { xs: 8, md: 12 }, display: "grid", gap: 3, gridTemplateColumns: { lg: "repeat(3, minmax(0, 1fr))" } }}>
          {highlights.map((item) => (
            <Card key={item.title} elevation={0} sx={{ borderRadius: 3, border: "1px solid #e2e8f0" }}>
              <CardContent>
                <Stack spacing={2}>
                  <Typography variant="h6" fontWeight={600}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                  {item.href ? (
                    <Button component={Link} href={item.href} variant="text">
                      Explore module
                    </Button>
                  ) : (
                    <Button variant="text" disabled>
                      Coming soon
                    </Button>
                  )}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Box
          sx={{
            mt: { xs: 8, md: 12 },
            display: "grid",
            gap: 6,
            gridTemplateColumns: { lg: "1.1fr 0.9fr" }
          }}
        >
          <Stack spacing={3}>
            <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
              Automated workflows
            </Typography>
            <Typography variant="h4" fontWeight={600} color="text.primary">
              Replace manual handoffs with intelligent process automation.
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Build workflows that match your approval policies, integrate with your tools, and
              surface exceptions before they impact the business.
            </Typography>
            <Box
              sx={{
                display: "grid",
                gap: 2,
                gridTemplateColumns: { sm: "repeat(2, minmax(0, 1fr))" }
              }}
            >
              {workflows.map((workflow) => (
                <Card key={workflow.title} elevation={0} sx={{ backgroundColor: "#f8fafc", borderRadius: 3 }}>
                  <CardContent>
                    <Typography variant="subtitle1" fontWeight={600}>
                      {workflow.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {workflow.description}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </Box>
          </Stack>
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid #e2e8f0",
              backgroundColor: "#fff"
            }}
          >
            <CardContent>
              <Stack spacing={3}>
                <Box
                  component="img"
                  src="https://undraw.co/illustrations/undraw_team_collaboration_re_ow29.svg"
                  alt="Illustration of teams collaborating"
                  sx={{ width: "100%", maxHeight: 220, objectFit: "contain" }}
                />
                <Typography variant="h6" fontWeight={600}>
                  Integrated analytics
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Dashboards update in real time with predictive forecasts, variance commentary,
                  and automated executive summaries.
                </Typography>
                <Stack spacing={1.5}>
                  {[
                    { label: "Cash runway", value: "14.6 months" },
                    { label: "Inventory at risk", value: "2.1%" },
                    { label: "Payroll forecast variance", value: "-0.8%" }
                  ].map((item) => (
                    <Box
                      key={item.label}
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        backgroundColor: "#f8fafc",
                        borderRadius: 2,
                        padding: 1.5
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {item.label}
                      </Typography>
                      <Typography variant="subtitle2" fontWeight={600}>
                        {item.value}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
                <Button component={Link} href="/dashboard" variant="contained">
                  View live dashboards
                </Button>
              </Stack>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={3}
            alignItems={{ md: "center" }}
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="overline" color="primary" sx={{ letterSpacing: 2 }}>
                Connected ecosystem
              </Typography>
              <Typography variant="h4" fontWeight={600} color="text.primary">
                Integrate every tool your teams already love.
              </Typography>
            </Box>
            <Button component={Link} href="/contact" variant="outlined">
              Talk to integrations
            </Button>
          </Stack>
          <Box
            sx={{
              mt: 4,
              display: "grid",
              gap: 2,
              gridTemplateColumns: { sm: "repeat(2, minmax(0, 1fr))", lg: "repeat(3, minmax(0, 1fr))" }
            }}
          >
            {integrations.map((integration) => (
              <Card key={integration} elevation={0} sx={{ borderRadius: 3, border: "1px solid #e2e8f0" }}>
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {integration}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>

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

        <Box sx={{ mt: { xs: 8, md: 12 } }}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              border: "1px solid rgba(37, 99, 235, 0.2)",
              backgroundColor: "rgba(37, 99, 235, 0.08)"
            }}
          >
            <CardContent>
              <Stack
                direction={{ xs: "column", md: "row" }}
                spacing={3}
                alignItems={{ md: "center" }}
                justifyContent="space-between"
              >
                <Box>
                  <Typography variant="h5" fontWeight={600}>
                    Ready to automate your ERP operations?
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    Launch in weeks with dedicated onboarding, data migration, and training.
                  </Typography>
                </Box>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button component={Link} href="/sign-up" variant="contained">
                    Start free
                  </Button>
                  <Button component={Link} href="/contact" variant="outlined">
                    Schedule consult
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
}
