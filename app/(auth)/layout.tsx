import { BackToHomeButton } from "@/components/navigation/back-to-home-button";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <div className="absolute left-6 top-6 z-10">
        <BackToHomeButton />
      </div>
      {children}
    </div>
  );
}
