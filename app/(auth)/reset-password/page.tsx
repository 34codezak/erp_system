"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { requestPasswordReset } from "@/lib/auth";

export default function ResetPasswordPage() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);
    setIsSubmitting(true);

    const { error } = await requestPasswordReset(email, `${window.location.origin}/reset-password`);

    if (error) {
      setErrorMessage(error);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);
    setSuccessMessage("Password reset email sent. Check your inbox for the link.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <Card className="w-full max-w-md space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">Reset password</h1>
          <p className="text-sm text-slate-600">
            We will email you a secure password reset link.
          </p>
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
          <Button className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send reset link"}
          </Button>
        </form>
        {errorMessage ? <p className="text-xs text-rose-500">{errorMessage}</p> : null}
        {successMessage ? <p className="text-xs text-emerald-600">{successMessage}</p> : null}
        <div className="text-xs text-slate-500">
          <Link href="/sign-in">Back to sign in</Link>
        </div>
      </Card>
    </main>
  );
}
