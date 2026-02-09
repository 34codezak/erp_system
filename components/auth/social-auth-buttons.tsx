"use client";

import { useState } from "react";
import type { Provider } from "@supabase/supabase-js";

import { signInWithProvider } from "@/lib/auth";
import { Button } from "@/components/ui/button";

const SOCIAL_PROVIDERS: Array<{ id: Provider; label: string }> = [
  { id: "google", label: "Continue with Google" },
  { id: "github", label: "Continue with GitHub" },
  { id: "facebook", label: "Continue with Facebook" },
  { id: "linkedin", label: "Continue with LinkedIn" }
];

type SocialAuthButtonsProps = {
  intent?: "sign-in" | "sign-up";
};

export function SocialAuthButtons({ intent = "sign-in" }: SocialAuthButtonsProps) {
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loadingProvider, setLoadingProvider] = useState<string | null>(null);
  const title = intent === "sign-in" ? "Or sign in with" : "Or sign up with";

  const handleProvider = async (providerId: Provider) => {
    setErrorMessage(null);
    setLoadingProvider(providerId);
    const { error } = await signInWithProvider(providerId, `${window.location.origin}/dashboard`);

    if (error) {
      setErrorMessage(error);
    }

    setLoadingProvider(null);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-xs text-slate-500">
        <span className="h-px flex-1 bg-slate-200" />
        <span>{title}</span>
        <span className="h-px flex-1 bg-slate-200" />
      </div>
      <div className="space-y-2">
        {SOCIAL_PROVIDERS.map((provider) => (
          <Button
            key={provider.id}
            type="button"
            variant="secondary"
            className="w-full justify-center"
            disabled={loadingProvider !== null}
            onClick={() => handleProvider(provider.id)}
          >
            {loadingProvider === provider.id ? "Connecting..." : provider.label}
          </Button>
        ))}
      </div>
      {errorMessage ? (
        <p className="text-xs text-rose-500">{errorMessage}</p>
      ) : null}
    </div>
  );
}
