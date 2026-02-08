export type Role = "admin" | "manager" | "staff" | "accountant";

export const roleCapabilities: Record<Role, string[]> = {
  admin: ["*"] ,
  manager: ["read:hr", "write:hr", "read:inventory", "write:inventory", "read:reports"],
  staff: ["read:hr", "read:inventory"],
  accountant: ["read:finance", "write:finance", "read:reports"]
};

export function hasCapability(role: Role, capability: string) {
  const permissions = roleCapabilities[role] ?? [];
  return permissions.includes("*") || permissions.includes(capability);
}
