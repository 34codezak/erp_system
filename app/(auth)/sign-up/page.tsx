"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { SocialAuthButtons } from "@/components/auth/social-auth-buttons";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { signUpWithEmail } from "@/lib/auth";

export default function SignUpPage() {
  const router = useRouter();
  const [organizationName, setOrganizationName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage(null);
    setSuccessMessage(null);

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    const { error, sessionToken } = await signUpWithEmail({
      email,
      password,
      organizationName: organizationName.trim() || undefined,
      phone: phone.trim() || undefined
    });

    if (error) {
      setErrorMessage(error);
      setIsSubmitting(false);
      return;
    }

    setIsSubmitting(false);

    if (sessionToken) {
      router.push("/dashboard");
      return;
    }

    setSuccessMessage("Check your inbox for a confirmation email to finish setup.");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
      <Card className="w-full max-w-md space-y-4">
        <div>
          <h1 className="text-2xl font-semibold">Create your account</h1>
          <p className="text-sm text-slate-600">Start your ERP workspace in minutes.</p>
        </div>
        <form className="space-y-3" onSubmit={handleSubmit}>
          <label className="block text-sm">
            Organization name
            <input
              type="text"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="Atlas Industries"
              value={organizationName}
              onChange={(event) => setOrganizationName(event.target.value)}
            />
          </label>
          <label className="block text-sm">
            Work email
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
            Phone number
            <input
              type="tel"
              className="mt-1 w-full rounded-md border border-slate-200 px-3 py-2"
              placeholder="+1 (555) 000-1234"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
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
          <label className="block text-sm">
            Confirm password
            <div className="relative mt-1">
              <input
                type={isConfirmPasswordVisible ? "text" : "password"}
                className="w-full rounded-md border border-slate-200 px-3 py-2 pr-14"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 flex items-center px-3 text-xs font-medium text-slate-500 hover:text-slate-700"
                onClick={() => setIsConfirmPasswordVisible((previous) => !previous)}
                aria-label={isConfirmPasswordVisible ? "Hide confirm password" : "Show confirm password"}
              >
                {isConfirmPasswordVisible ? "Hide" : "Show"}
              </button>
            </div>
          </label>
          <Button className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Creating account..." : "Create account"}
          </Button>
        </form>
        {errorMessage ? <p className="text-xs text-rose-500">{errorMessage}</p> : null}
        {successMessage ? <p className="text-xs text-emerald-600">{successMessage}</p> : null}
        <SocialAuthButtons intent="sign-up" />
        <div className="text-xs text-slate-500">
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </div>
      </Card>
    </main>
  );
}
