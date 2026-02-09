import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function SignUpPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <Card className="w-full max-w-md space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <p className="text-sm text-slate-600">Start your ERP workspace in minutes.</p>
        </div>
        <form className="space-y-3">
          <label className="block text-sm">
            Organization name
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="Atlas Industries"
            />
          </label>
          <label className="block text-sm">
            Work email
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="you@company.com"
            />
          </label>
          <label className="block text-sm">
            Phone number
            <input
              type="tel"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="+1 (555) 000-1234"
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
          <label className="block text-sm">
            Confirm password
            <input
              type="password"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="••••••••"
            />
          </label>
          <Button className="w-full">Create account</Button>
        </form>
        <div className="text-xs text-slate-500">
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </div>
      </Card>
    </main>
  );
}
