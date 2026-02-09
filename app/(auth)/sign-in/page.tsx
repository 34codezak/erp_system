"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { signInWithEmail } from "@/lib/auth";

export default function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setIsSubmitting(true);

    const { error } = await signInWithEmail({ email, password });

    if (error) {
      setErrorMessage(error);
      setIsSubmitting(false);
      return;
    }

    router.push("/dashboard");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <Card className="w-full max-w-md space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">Sign in</h1>
          <p className="text-sm text-slate-600">Access your ERP workspace.</p>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <label className="block text-sm">
            Email
            <input
              type="email"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="you@company.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
          <label className="block text-sm">
            Password
            <div className="relative mt-1">
              <input
                type={isPasswordVisible ? "text" : "password"}
                className="w-full rounded-md border border-slate-200 px-3 py-2 pr-14"
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-xs font-medium text-slate-500 hover:text-slate-700"
                onClick={() => setIsPasswordVisible((previous) => !previous)}
                aria-label={isPasswordVisible ? "Hide password" : "Show password"}
              >
                {isPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </label>
          <Button className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Signing in..." : "Sign in"}
          </Button>
        </form>
        {errorMessage ? <p className="text-xs text-rose-500">{errorMessage}</p> : null}
        <SocialAuthButtons intent="sign-in" />
        <div className="flex items-center justify-between text-xs text-slate-500">
          <Link href="/reset-password">Forgot password?</Link>
          <Link href="/sign-up">Create account</Link>
        </div>
      </Card>
    </main>
  );
}
