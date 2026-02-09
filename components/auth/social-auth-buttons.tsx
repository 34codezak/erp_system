import { Button } from "@/components/ui/button";

const SOCIAL_PROVIDERS = [
  { id: "google", label: "Continue with Google" },
  { id: "github", label: "Continue with GitHub" },
  { id: "facebook", label: "Continue with Facebook" },
  { id: "linkedin", label: "Continue with LinkedIn" }
];

type SocialAuthButtonsProps = {
  intent?: "sign-in" | "sign-up";
};

export function SocialAuthButtons({ intent = "sign-in" }: SocialAuthButtonsProps) {
  const title = intent === "sign-in" ? "Or sign in with" : "Or sign up with";

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
          >
            {provider.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
