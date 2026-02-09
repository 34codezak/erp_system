"use server";

import { z } from "zod";

import { supabaseServerClient } from "@/lib/supabase/server";

const employeeCreateSchema = z.object({
  organizationId: z.string().uuid(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  departmentId: z.string().uuid().optional(),
  userId: z.string().uuid().optional(),
  title: z.string().min(1).optional(),
  status: z.string().min(1).optional(),
  hiredOn: z.string().min(1).optional()
});

const employeeLookupSchema = z.object({
  organizationId: z.string().uuid(),
  employeeId: z.string().uuid()
});

const employeeUpdateSchema = employeeCreateSchema
  .partial()
  .extend({ organizationId: z.string().uuid(), employeeId: z.string().uuid() });

function mapEmployeePayload(payload: z.infer<typeof employeeCreateSchema>) {
  return {
    organization_id: payload.organizationId,
    first_name: payload.firstName,
    last_name: payload.lastName,
    email: payload.email,
    department_id: payload.departmentId ?? null,
    user_id: payload.userId ?? null,
    title: payload.title ?? null,
    status: payload.status ?? "active",
    hired_on: payload.hiredOn ?? null
  };
}

export async function createEmployee(payload: z.infer<typeof employeeCreateSchema>) {
  const data = employeeCreateSchema.parse(payload);
  const { data: employee, error } = await supabaseServerClient
    .from("employees")
    .insert(mapEmployeePayload(data))
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return employee;
}

export async function getEmployees(organizationId: string) {
  const parsedOrganizationId = z.string().uuid().parse(organizationId);
  const { data, error } = await supabaseServerClient
    .from("employees")
    .select()
    .eq("organization_id", parsedOrganizationId)
    .is("deleted_at", null)
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getEmployeeById(payload: z.infer<typeof employeeLookupSchema>) {
  const data = employeeLookupSchema.parse(payload);
  const { data: employee, error } = await supabaseServerClient
    .from("employees")
    .select()
    .eq("organization_id", data.organizationId)
    .eq("id", data.employeeId)
    .is("deleted_at", null)
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return employee;
}

export async function updateEmployee(payload: z.infer<typeof employeeUpdateSchema>) {
  const data = employeeUpdateSchema.parse(payload);
  const updatePayload = {
    ...(data.firstName ? { first_name: data.firstName } : {}),
    ...(data.lastName ? { last_name: data.lastName } : {}),
    ...(data.email ? { email: data.email } : {}),
    ...(data.departmentId !== undefined ? { department_id: data.departmentId ?? null } : {}),
    ...(data.userId !== undefined ? { user_id: data.userId ?? null } : {}),
    ...(data.title !== undefined ? { title: data.title ?? null } : {}),
    ...(data.status !== undefined ? { status: data.status ?? null } : {}),
    ...(data.hiredOn !== undefined ? { hired_on: data.hiredOn ?? null } : {}),
    updated_at: new Date().toISOString()
  };

  const { data: employee, error } = await supabaseServerClient
    .from("employees")
    .update(updatePayload)
    .eq("organization_id", data.organizationId)
    .eq("id", data.employeeId)
    .is("deleted_at", null)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return employee;
}

export async function deleteEmployee(payload: z.infer<typeof employeeLookupSchema>) {
  const data = employeeLookupSchema.parse(payload);
  const { data: employee, error } = await supabaseServerClient
    .from("employees")
    .update({ deleted_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq("organization_id", data.organizationId)
    .eq("id", data.employeeId)
    .is("deleted_at", null)
    .select()
    .single();

  if (error) {
    throw new Error(error.message);
  }

  return employee;
}
