alter table organizations enable row level security;
alter table roles enable row level security;
alter table users enable row level security;
alter table departments enable row level security;
alter table employees enable row level security;
alter table payroll enable row level security;
alter table expenses enable row level security;
alter table revenues enable row level security;
alter table assets enable row level security;
alter table liabilities enable row level security;
alter table inventory_items enable row level security;
alter table suppliers enable row level security;
alter table transactions enable row level security;
alter table audit_logs enable row level security;
alter table org_memberships enable row level security;

create policy "org members can view organization" on organizations
  for select
  using (id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org members can manage roles" on roles
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org members can view users" on users
  for select
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org members manage memberships" on org_memberships
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org scoped departments" on departments
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org scoped employees" on employees
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org scoped payroll" on payroll
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org scoped expenses" on expenses
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org scoped revenues" on revenues
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org scoped assets" on assets
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org scoped liabilities" on liabilities
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org scoped inventory" on inventory_items
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org scoped suppliers" on suppliers
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org scoped transactions" on transactions
  for all
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null))
  with check (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));

create policy "org scoped audit logs" on audit_logs
  for select
  using (organization_id in (select organization_id from org_memberships where user_id = auth.uid() and deleted_at is null));
