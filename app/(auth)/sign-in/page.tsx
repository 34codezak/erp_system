import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <Card className="w-full max-w-md space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-sm text-slate-600">Access your ERP workspace.</p>
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
          <label className="block text-sm">
            Password
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="••••••••"
            />
          </label>
          <Button className="w-full">Sign in</Button>
        </form>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <Link href="/reset-password">Forgot password?</Link>
          <Link href="/sign-up">Create account</Link>
        </div>
      </Card>
    </main>
  );
}
