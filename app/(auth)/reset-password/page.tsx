import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <Card className="w-full max-w-md space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">Reset password</h1>
          <p className="text-sm text-slate-600">
            We will email you a secure password reset link.
          </p>
        </div>
        <form className="space-y-3">
          <label className="block text-sm">
            Email
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="you@company.com"
            />
          </label>
          <Button className="w-full">Send reset link</Button>
        </form>
        <div className="text-xs text-slate-500">
          <Link href="/sign-in">Back to sign in</Link>
        </div>
      </Card>
    </main>
  );
}
