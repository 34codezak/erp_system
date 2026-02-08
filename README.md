# Atlas ERP

Production-ready ERP starter for managing HR, finance, inventory, liabilities, and operations with Supabase + Next.js.

## 1) System architecture plan

**Core layers**
- **UI layer**: Next.js App Router for public marketing pages, auth flows, and protected ERP screens.
- **API layer**: Server Actions for CRUD operations with strict schema validation (Zod) and RBAC gating.
- **Data layer**: Supabase Postgres with RLS and organization-scoped multi-tenancy.
- **Integrations**: Resend for transactional emails, Stripe for billing/webhooks, Supabase Storage for files.

**Security & auditability**
- Role-based permissions (Admin, Manager, Staff, Accountant).
- RLS enforced at the database layer for every core table.
- Audit logs for sensitive updates with immutable event history.

## 2) Database schema & RLS

- Core schema is in [`supabase/schema.sql`](supabase/schema.sql).
- RLS policies are in [`supabase/policies.sql`](supabase/policies.sql).

### Multi-tenancy strategy
- Every core table includes `organization_id`.
- Access is limited to members of the organization in `org_memberships`.
- Soft deletes via `deleted_at` to preserve audit history.

## 3) Frontend & backend scaffold

- `app/(public)` hosts marketing pages (landing, pricing, about, contact).
- `app/(auth)` hosts sign-in, sign-up, reset flows.
- `app/(app)` hosts protected ERP modules.
- `app/actions` contains Server Actions for CRUD operations.
- `components/ui` contains shadcn-style primitives.

## 4) Module implementation plan

1. **Auth & RBAC**
   - Supabase Auth sign-up/sign-in.
   - Assign default role on user creation.
   - Gate Server Actions with `roleCapabilities` from `lib/rbac.ts`.
2. **HR module**
   - Employee profiles, departments, payroll.
   - Approvals and review workflows.
3. **Finance module**
   - Expenses, revenues, liabilities.
   - Ledger dashboard with balance sheet reports.
4. **Inventory & assets**
   - Inventory items, suppliers, asset assignments.
   - Depreciation schedules.
5. **Reports & analytics**
   - CSV/PDF export via Server Actions.
   - KPI dashboards and scheduled email exports.
6. **Admin**
   - Role management, audit logs, org settings.

## 5) Setup & configuration

### Local setup
```bash
npm install
cp .env.example .env.local
npm run dev
```

### Supabase
1. Create a Supabase project.
2. Run `supabase/schema.sql` and `supabase/policies.sql` in the SQL editor.
3. Enable email auth providers as needed.
4. Add storage bucket for receipts/documents.

### Resend
1. Create a Resend API key.
2. Set `RESEND_API_KEY` and `RESEND_FROM_EMAIL`.
3. Use in Server Actions to send onboarding, payroll, and alert emails.

### Stripe (optional billing)
1. Create products and prices in Stripe.
2. Set `STRIPE_SECRET_KEY`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `STRIPE_PRICE_ID`.
3. Configure webhook endpoint in Next.js (recommended `/api/stripe/webhook`).
4. Store webhook secret in `STRIPE_WEBHOOK_SECRET`.

### Vercel deployment
1. Push to GitHub.
2. Import project in Vercel.
3. Configure environment variables from `.env.example`.
4. Set Supabase URL and anon key in Vercel dashboard.

## 6) Security, validation, scalability

- Validate all Server Action inputs with Zod.
- Enforce RLS policies for all data access.
- Use row-level soft deletes to preserve audit trails.
- Add structured logging for finance and payroll actions.
- Rate-limit external webhooks.

## Manual verification checklist

### Public pages
- [ ] Landing page renders highlight sections.
- [ ] Pricing, About, Contact pages show content.

### Auth
- [ ] Sign up creates a Supabase auth user.
- [ ] Sign in redirects to `/dashboard`.
- [ ] Password reset sends email.

### Dashboard
- [ ] Metrics cards render.
- [ ] Alerts list shows placeholder data.

### HR module
- [ ] Employee list loads.
- [ ] Payroll entries can be created.

### Finance module
- [ ] Expenses can be submitted.
- [ ] Revenue entries appear in ledger.

### Inventory & assets
- [ ] Inventory items can be updated.
- [ ] Assets show depreciation schedule.

### Reports & analytics
- [ ] CSV/PDF exports download.
- [ ] KPI dashboard loads charts.

### Admin panel
- [ ] Role assignments update successfully.
- [ ] Audit log entries appear.

## Environment variables

See `.env.example` for full list.
