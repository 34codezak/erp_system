import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Reach our team for demos, onboarding support, or enterprise inquiries.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card>
          <h2 className="text-lg font-semibold">Sales</h2>
          <p className="mt-2 text-sm text-slate-600">sales@atlaserp.com</p>
        </Card>
        <Card>
          <h2 className="text-lg font-semibold">Support</h2>
          <p className="mt-2 text-sm text-slate-600">support@atlaserp.com</p>
        </Card>
      </div>
    </main>
  );
}
