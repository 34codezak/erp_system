import Link from "next/link";

import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
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

const themeVariants = [
  {
    title: "Light workspace",
    description: "Keep focus with airy dashboards built for daylight operations.",
    surface: "#FFFFFF",
    border: "#E2E8F0",
    detail: "#475569",
    accent: "#1E4DB7"
  },
  {
    title: "Dark workspace",
    description: "Reduce eye strain in low-light environments with contrast-rich panels.",
    surface: "#0F172A",
    border: "#1E293B",
    detail: "#CBD5F5",
    accent: "#93C5FD"
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

const brandColor = "#1E4DB7";

export default function LandingPage() {
  return (
    <Box component="main" sx={{ bgcolor: "grey.50", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        <Stack spacing={{ xs: 6, md: 10 }}>
          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} lg={7}>
              <Stack spacing={3}>
                <Chip
                  label="Production-ready ERP"
                  variant="outlined"
                  sx={{
                    width: "fit-content",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.2em",
                    borderColor: "#BFDBFE",
                    color: "#1D4ED8"
                  }}
                />
                <Box>
                  <Typography variant="h3" sx={{ fontWeight: 600, color: "#0F172A" }}>
                    Run every department on a single automated ERP platform.
                  </Typography>
                  <Typography sx={{ mt: 2, color: "#475569" }}>
                    Atlas ERP unifies finance, supply chain, HR, and operations with intelligent
                    workflows, secure approvals, and executive analytics that keep leadership aligned.
                  </Typography>
                </Box>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button
                    component={Link}
                    href="/sign-up"
                    variant="contained"
                    sx={{
                      bgcolor: brandColor,
                      boxShadow: "0 8px 20px rgba(30, 77, 183, 0.25)",
                      "&:hover": { bgcolor: "#1A419E" }
                    }}
                  >
                    Start free
                  </Button>
                  <Button
                    component={Link}
                    href="/pricing"
                    variant="outlined"
                    sx={{ borderColor: "#CBD5F5", color: "#0F172A" }}
                  >
                    View pricing
                  </Button>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="text"
                    sx={{ color: "#475569" }}
                  >
                    Request a demo
                  </Button>
                </Stack>
                <Grid container spacing={2}>
                  {[
                    "SOC-ready audit trails and approvals.",
                    "Multi-tenant data isolation with Supabase RLS.",
                    "Real-time dashboards with exports and alerts.",
                    "Automated exception alerts and variance detection."
                  ].map((item) => (
                    <Grid item xs={12} sm={6} key={item}>
                      <Stack direction="row" spacing={1.5} alignItems="flex-start">
                        <Box
                          sx={{
                            mt: 0.7,
                            height: 10,
                            width: 10,
                            borderRadius: "50%",
                            bgcolor: "#10B981"
                          }}
                        />
                        <Typography variant="body2" sx={{ color: "#475569" }}>
                          {item}
                        </Typography>
                      </Stack>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Card
                sx={{
                  borderRadius: 3,
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 24px 48px rgba(15, 23, 42, 0.08)"
                }}
              >
                <CardContent>
                  <Stack spacing={3}>
                    <Box
                      component="img"
                      src="https://undraw.co/illustrations/undraw_data_processing_yrrv.svg"
                      alt="Illustration of data processing"
                      sx={{ height: 220, width: "100%", objectFit: "contain" }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "#0F172A" }}>
                        Executive control center
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#475569", mt: 1 }}>
                        Monitor cash, inventory turns, and workforce utilization in one secure view.
                      </Typography>
                    </Box>
                    <Grid container spacing={2}>
                      {metrics.map((metric) => (
                        <Grid item xs={6} key={metric.label}>
                          <Box
                            sx={{
                              bgcolor: "#F8FAFC",
                              borderRadius: 2,
                              p: 2,
                              border: "1px solid #E2E8F0"
                            }}
                          >
                            <Typography
                              variant="caption"
                              sx={{ textTransform: "uppercase", letterSpacing: "0.15em", color: "#64748B" }}
                            >
                              {metric.label}
                            </Typography>
                            <Typography sx={{ mt: 1, fontWeight: 600, color: "#0F172A" }}>
                              {metric.value}
                            </Typography>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                    <Button variant="outlined" sx={{ borderColor: "#CBD5F5", color: "#0F172A" }}>
                      Download platform overview
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            {highlights.map((item) => (
              <Grid item xs={12} md={6} lg={3} key={item.title}>
                <Card sx={{ height: "100%", borderRadius: 3, border: "1px solid #E2E8F0" }}>
                  <CardContent>
                    <Stack spacing={2} height="100%">
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: "#0F172A" }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: "#64748B", mt: 1 }}>
                          {item.description}
                        </Typography>
                      </Box>
                      <Box sx={{ mt: "auto" }}>
                        {item.href ? (
                          <Button
                            component={Link}
                            href={item.href}
                            variant="text"
                            sx={{ color: brandColor, fontWeight: 600, px: 0 }}
                          >
                            Explore module
                          </Button>
                        ) : (
                          <Chip
                            label="Coming soon"
                            sx={{ bgcolor: "#F1F5F9", color: "#475569", fontWeight: 600 }}
                          />
                        )}
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center">
            <Grid item xs={12} lg={7}>
              <Stack spacing={3}>
                <Typography
                  variant="overline"
                  sx={{ color: "#2563EB", letterSpacing: "0.2em", fontWeight: 600 }}
                >
                  Automated workflows
                </Typography>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 600, color: "#0F172A" }}>
                    Replace manual handoffs with intelligent process automation.
                  </Typography>
                  <Typography sx={{ mt: 1.5, color: "#475569" }}>
                    Build workflows that match your approval policies, integrate with your tools, and
                    surface exceptions before they impact the business.
                  </Typography>
                </Box>
                <Grid container spacing={2}>
                  {workflows.map((workflow) => (
                    <Grid item xs={12} sm={6} key={workflow.title}>
                      <Card
                        sx={{
                          bgcolor: "#F8FAFC",
                          borderRadius: 2,
                          border: "1px solid #E2E8F0",
                          boxShadow: "none"
                        }}
                      >
                        <CardContent>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: "#0F172A" }}>
                            {workflow.title}
                          </Typography>
                          <Typography variant="body2" sx={{ color: "#64748B", mt: 1 }}>
                            {workflow.description}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Stack>
            </Grid>
            <Grid item xs={12} lg={5}>
              <Card sx={{ borderRadius: 3, border: "1px solid #E2E8F0" }}>
                <CardContent>
                  <Stack spacing={3}>
                    <Box
                      component="img"
                      src="https://undraw.co/illustrations/undraw_team_collaboration_re_ow29.svg"
                      alt="Illustration of teams collaborating"
                      sx={{ height: 220, width: "100%", objectFit: "contain" }}
                    />
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600, color: "#0F172A" }}>
                        Integrated analytics
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#64748B", mt: 1 }}>
                        Dashboards update in real time with predictive forecasts, variance commentary,
                        and automated executive summaries.
                      </Typography>
                    </Box>
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
                            alignItems: "center",
                            justifyContent: "space-between",
                            borderRadius: 2,
                            border: "1px solid #E2E8F0",
                            bgcolor: "#F8FAFC",
                            px: 2,
                            py: 1.5
                          }}
                        >
                          <Typography variant="body2" sx={{ color: "#64748B" }}>
                            {item.label}
                          </Typography>
                          <Typography variant="body2" sx={{ fontWeight: 600, color: "#0F172A" }}>
                            {item.value}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                    <Button
                      component={Link}
                      href="/dashboard"
                      variant="contained"
                      sx={{ bgcolor: brandColor, "&:hover": { bgcolor: "#1A419E" } }}
                    >
                      View live dashboards
                    </Button>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              alignItems={{ md: "center" }}
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  variant="overline"
                  sx={{ color: "#2563EB", letterSpacing: "0.2em", fontWeight: 600 }}
                >
                  Connected ecosystem
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 600, color: "#0F172A", mt: 1 }}>
                  Integrate every tool your teams already love.
                </Typography>
              </Box>
              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                sx={{ borderColor: "#CBD5F5", color: "#0F172A", height: "fit-content" }}
              >
                Talk to integrations
              </Button>
            </Stack>
            <Grid container spacing={2.5} sx={{ mt: 3 }}>
              {integrations.map((integration) => (
                <Grid item xs={12} sm={6} lg={4} key={integration}>
                  <Card sx={{ borderRadius: 3, border: "1px solid #E2E8F0" }}>
                    <CardContent>
                      <Typography variant="body2" sx={{ color: "#475569" }}>
                        {integration}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={3}
              alignItems={{ md: "center" }}
              justifyContent="space-between"
            >
              <Box>
                <Typography
                  variant="overline"
                  sx={{ color: brandColor, letterSpacing: "0.2em", fontWeight: 600 }}
                >
                  Theme variations
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 600, color: "#0F172A", mt: 1 }}>
                  Match your ERP workspace to every team and environment.
                </Typography>
                <Typography variant="body2" sx={{ color: "#475569", mt: 1 }}>
                  Switch between light and dark modes to align with brand guidelines and keep
                  operators focused in every setting.
                </Typography>
              </Box>
              <Button
                component={Link}
                href="/contact"
                variant="outlined"
                sx={{ borderColor: "#CBD5F5", color: "#0F172A", height: "fit-content" }}
              >
                Explore themes
              </Button>
            </Stack>
            <Grid container spacing={3} sx={{ mt: 3 }}>
              {themeVariants.map((variant) => (
                <Grid item xs={12} lg={6} key={variant.title}>
                  <Card
                    sx={{
                      borderRadius: 3,
                      border: `1px solid ${variant.border}`,
                      bgcolor: variant.surface,
                      color: variant.detail
                    }}
                  >
                    <CardContent>
                      <Stack spacing={2.5}>
                        <Box>
                          <Typography variant="h6" sx={{ fontWeight: 600 }}>
                            {variant.title}
                          </Typography>
                          <Typography variant="body2" sx={{ mt: 1 }}>
                            {variant.description}
                          </Typography>
                        </Box>
                        <Box
                          sx={{
                            borderRadius: 3,
                            border: `1px solid ${variant.border}`,
                            bgcolor: variant.title === "Light workspace" ? "#F8FAFC" : "#0B1120",
                            p: 2.5
                          }}
                        >
                          <Stack direction="row" justifyContent="space-between" alignItems="center">
                            <Typography variant="caption" sx={{ fontWeight: 600, letterSpacing: "0.12em" }}>
                              Command center
                            </Typography>
                            <Stack direction="row" spacing={1}>
                              {["Insights", "Alerts"].map((label) => (
                                <Chip
                                  key={label}
                                  label={label}
                                  size="small"
                                  variant="outlined"
                                  sx={{
                                    borderColor: variant.border,
                                    color: variant.detail,
                                    fontSize: "0.65rem"
                                  }}
                                />
                              ))}
                            </Stack>
                          </Stack>
                          <Grid container spacing={2} sx={{ mt: 2 }}>
                            {["Cash flow", "Inventory", "Workforce"].map((label) => (
                              <Grid item xs={12} sm={4} key={label}>
                                <Box
                                  sx={{
                                    borderRadius: 2,
                                    border: `1px solid ${variant.border}`,
                                    bgcolor: variant.title === "Light workspace" ? "#FFFFFF" : "#020617",
                                    p: 2
                                  }}
                                >
                                  <Typography variant="caption" sx={{ fontWeight: 600 }}>
                                    {label}
                                  </Typography>
                                  <Typography variant="h6" sx={{ mt: 1, fontWeight: 600, color: variant.detail }}>
                                    {label === "Cash flow" ? "14.6m" : label === "Inventory" ? "2.1%" : "96%"}
                                  </Typography>
                                </Box>
                              </Grid>
                            ))}
                          </Grid>
                          <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
                            <Typography variant="caption">Sync status: real-time</Typography>
                            <Button
                              size="small"
                              variant="outlined"
                              sx={{
                                borderColor: variant.accent,
                                color: variant.accent,
                                textTransform: "none"
                              }}
                            >
                              Preview
                            </Button>
                          </Stack>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Box>
            <Typography
              variant="overline"
              sx={{ color: brandColor, letterSpacing: "0.2em", fontWeight: 600 }}
            >
              Trusted by operators
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: 600, color: "#0F172A", mt: 1 }}>
              Teams run smarter with Atlas ERP.
            </Typography>
            <Grid container spacing={3} sx={{ mt: 3 }}>
              {testimonials.map((testimonial) => (
                <Grid item xs={12} lg={4} key={testimonial.name}>
                  <Card sx={{ borderRadius: 3, border: "1px solid #E2E8F0", height: "100%" }}>
                    <CardContent>
                      <Stack spacing={2}>
                        <Typography variant="body2" sx={{ color: "#475569" }}>
                          “{testimonial.quote}”
                        </Typography>
                        <Box>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, color: "#0F172A" }}>
                            {testimonial.name}
                          </Typography>
                          <Typography variant="caption" sx={{ color: "#94A3B8" }}>
                            {testimonial.title}
                          </Typography>
                        </Box>
                      </Stack>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Card
            sx={{
              borderRadius: 4,
              border: "1px solid rgba(30, 77, 183, 0.2)",
              bgcolor: "rgba(30, 77, 183, 0.08)"
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
                  <Typography variant="h5" sx={{ fontWeight: 600, color: "#0F172A" }}>
                    Ready to automate your ERP operations?
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#475569", mt: 1 }}>
                    Launch in weeks with dedicated onboarding, data migration, and training.
                  </Typography>
                </Box>
                <Stack direction="row" spacing={2} flexWrap="wrap">
                  <Button
                    component={Link}
                    href="/sign-up"
                    variant="contained"
                    sx={{ bgcolor: brandColor, "&:hover": { bgcolor: "#1A419E" } }}
                  >
                    Start free
                  </Button>
                  <Button
                    component={Link}
                    href="/contact"
                    variant="outlined"
                    sx={{ borderColor: "#CBD5F5", color: "#0F172A" }}
                  >
                    Schedule consult
                  </Button>
                </Stack>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
