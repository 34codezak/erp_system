import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-4 max-w-2xl text-slate-600">
        Reach our team for demos, onboarding support, or enterprise inquiries.
      </p>
      <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <Card className="space-y-4">
          <h2 className="text-lg font-semibold">Talk to our team</h2>
          <p className="text-sm text-slate-600">
            Tell us about your workflows and we will recommend a tailored rollout plan.
          </p>
          <form className="grid gap-4">
            <label className="grid gap-2 text-sm text-slate-600">
              Full name
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-slate-900"
                placeholder="Jane Smith"
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-600">
              Work email
              <input
                className="rounded-md border border-slate-200 px-3 py-2 text-slate-900"
                placeholder="jane@company.com"
                type="email"
              />
            </label>
            <label className="grid gap-2 text-sm text-slate-600">
              Company size
              <select className="rounded-md border border-slate-200 px-3 py-2 text-slate-900">
                <option>1-50 employees</option>
                <option>51-250 employees</option>
                <option>251-1,000 employees</option>
                <option>1,000+ employees</option>
              </select>
            </label>
            <label className="grid gap-2 text-sm text-slate-600">
              How can we help?
              <textarea
                className="min-h-[120px] rounded-md border border-slate-200 px-3 py-2 text-slate-900"
                placeholder="Share goals, timelines, or integrations..."
              />
            </label>
            <Button type="submit">Request a demo</Button>
          </form>
        </Card>
        <div className="grid gap-6">
          <Card>
            <h2 className="text-lg font-semibold">Sales</h2>
            <p className="mt-2 text-sm text-slate-600">sales@atlaserp.com</p>
            <p className="mt-2 text-sm text-slate-600">+1 (312) 555-0192</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Support</h2>
            <p className="mt-2 text-sm text-slate-600">support@atlaserp.com</p>
            <p className="mt-2 text-sm text-slate-600">24/7 critical response</p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold">Headquarters</h2>
            <p className="mt-2 text-sm text-slate-600">
              200 W Madison Street, Suite 2100
            </p>
            <p className="mt-1 text-sm text-slate-600">Chicago, IL 60606</p>
          </Card>
        </div>
      </div>
    </main>
  );
}
