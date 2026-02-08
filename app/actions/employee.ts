"use server";

import { z } from "zod";

import { supabaseServerClient } from "@/lib/supabase/server";

const employeeSchema = z.object({
  organizationId: z.string().uuid(),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  departmentId: z.string().uuid().optional()
});

export async function createEmployee(payload: z.infer<typeof employeeSchema>) {
  const data = employeeSchema.parse(payload);
  const { error } = await supabaseServerClient.from("employees").insert({
    organization_id: data.organizationId,
    first_name: data.firstName,
    last_name: data.lastName,
    email: data.email,
    department_id: data.departmentId ?? null
  });

  if (error) {
    throw new Error(error.message);
  }
}
