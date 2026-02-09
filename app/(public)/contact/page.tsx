"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type FormValues = {
  fullName: string;
  workEmail: string;
  companySize: string;
  help: string;
};

const initialValues: FormValues = {
  fullName: "",
  workEmail: "",
  companySize: "",
  help: ""
};

const validateForm = (values: FormValues) => {
  const errors: Partial<Record<keyof FormValues, string>> = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required.";
  }

  if (!values.workEmail.trim()) {
    errors.workEmail = "Work email is required.";
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.workEmail)) {
    errors.workEmail = "Enter a valid work email.";
  }

  if (!values.companySize.trim()) {
    errors.companySize = "Select a company size.";
  }

  if (!values.help.trim()) {
    errors.help = "Tell us how we can help.";
  }

  return errors;
};

export default function ContactPage() {
  const [formValues, setFormValues] = useState<FormValues>(initialValues);
  const [touched, setTouched] = useState<Record<keyof FormValues, boolean>>({
    fullName: false,
    workEmail: false,
    companySize: false,
    help: false
  });
  const [errors, setErrors] = useState<Partial<Record<keyof FormValues, string>>>({});

  const handleChange = (field: keyof FormValues, value: string) => {
    setFormValues(prev => {
      const next = { ...prev, [field]: value };
      if (touched[field]) {
        setErrors(validateForm(next));
      }
      return next;
    });
  };

  const handleBlur = (field: keyof FormValues) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    setErrors(validateForm(formValues));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({
      fullName: true,
      workEmail: true,
      companySize: true,
      help: true
    });
    const nextErrors = validateForm(formValues);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setFormValues(initialValues);
  };

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
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <label className="grid gap-2 text-sm text-slate-600">
              Full name
              <input
                id="full-name"
                className="rounded-md border border-slate-200 px-3 py-2 text-slate-900"
                placeholder="Jane Smith"
                type="text"
                value={formValues.fullName}
                onChange={event => handleChange("fullName", event.target.value)}
                onBlur={() => handleBlur("fullName")}
                aria-invalid={touched.fullName && Boolean(errors.fullName)}
                aria-describedby={errors.fullName ? "full-name-error" : undefined}
              />
              {touched.fullName && errors.fullName ? (
                <span id="full-name-error" className="text-xs text-rose-500">
                  {errors.fullName}
                </span>
              ) : null}
            </label>
            <label className="grid gap-2 text-sm text-slate-600">
              Work email
              <input
                id="work-email"
                className="rounded-md border border-slate-200 px-3 py-2 text-slate-900"
                placeholder="jane@company.com"
                type="email"
                value={formValues.workEmail}
                onChange={event => handleChange("workEmail", event.target.value)}
                onBlur={() => handleBlur("workEmail")}
                aria-invalid={touched.workEmail && Boolean(errors.workEmail)}
                aria-describedby={errors.workEmail ? "work-email-error" : undefined}
              />
              {touched.workEmail && errors.workEmail ? (
                <span id="work-email-error" className="text-xs text-rose-500">
                  {errors.workEmail}
                </span>
              ) : null}
            </label>
            <label className="grid gap-2 text-sm text-slate-600">
              Company size
              <select
                id="company-size"
                className="rounded-md border border-slate-200 px-3 py-2 text-slate-900"
                value={formValues.companySize}
                onChange={event => handleChange("companySize", event.target.value)}
                onBlur={() => handleBlur("companySize")}
                aria-invalid={touched.companySize && Boolean(errors.companySize)}
                aria-describedby={errors.companySize ? "company-size-error" : undefined}
              >
                <option value="" disabled>
                  Select a size
                </option>
                <option value="1-50 employees">1-50 employees</option>
                <option value="51-250 employees">51-250 employees</option>
                <option value="251-1,000 employees">251-1,000 employees</option>
                <option value="1,000+ employees">1,000+ employees</option>
              </select>
              {touched.companySize && errors.companySize ? (
                <span id="company-size-error" className="text-xs text-rose-500">
                  {errors.companySize}
                </span>
              ) : null}
            </label>
            <label className="grid gap-2 text-sm text-slate-600">
              How can we help?
              <textarea
                id="help"
                className="min-h-[120px] rounded-md border border-slate-200 px-3 py-2 text-slate-900"
                placeholder="Share goals, timelines, or integrations..."
                value={formValues.help}
                onChange={event => handleChange("help", event.target.value)}
                onBlur={() => handleBlur("help")}
                aria-invalid={touched.help && Boolean(errors.help)}
                aria-describedby={errors.help ? "help-error" : undefined}
              />
              {touched.help && errors.help ? (
                <span id="help-error" className="text-xs text-rose-500">
                  {errors.help}
                </span>
              ) : null}
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
