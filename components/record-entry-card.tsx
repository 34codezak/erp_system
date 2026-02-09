"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type RecordEntryCardProps = {
  entryTitle: string;
  entryDescription?: string;
  className?: string;
  children: React.ReactNode;
};

export function RecordEntryCard({
  entryTitle,
  entryDescription,
  className,
  children
}: RecordEntryCardProps) {
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] = React.useState({
    entryName: "",
    value: "",
    notes: ""
  });
  const [touched, setTouched] = React.useState({
    entryName: false,
    value: false,
    notes: false
  });

  const isComplete = Object.values(formValues).every(value => value.trim().length > 0);

  React.useEffect(() => {
    if (!open) {
      setFormValues({ entryName: "", value: "", notes: "" });
      setTouched({ entryName: false, value: false, notes: false });
    }
  }, [open]);

  const handleChange = (field: keyof typeof formValues, value: string) => {
    setFormValues(prev => ({ ...prev, [field]: value }));
  };

  const handleBlur = (field: keyof typeof touched) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ entryName: true, value: true, notes: true });

    if (!isComplete) {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Card className={cn("relative", className)}>
        <div className="absolute right-4 top-4">
          <Button
            type="button"
            variant="ghost"
            className="h-8 rounded-full px-3 text-xs"
            onClick={() => setOpen(true)}
          >
            Record entry
          </Button>
        </div>
        <div className="pr-20">{children}</div>
      </Card>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 px-4 py-6">
          <Card className="relative w-full max-w-md">
            <div className="absolute right-4 top-4">
              <Button
                type="button"
                variant="ghost"
                className="h-8 w-8 px-0"
                onClick={() => setOpen(false)}
              >
                ✕
              </Button>
            </div>
            <form className="space-y-5 pr-6" onSubmit={handleSubmit}>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  New entry
                </p>
                <h3 className="text-lg font-semibold">Record {entryTitle}</h3>
                {entryDescription && (
                  <p className="mt-1 text-sm text-slate-600">{entryDescription}</p>
                )}
              </div>
              <div className="space-y-3 text-sm">
                <div className="space-y-1">
                  <label
                    htmlFor="entry-name"
                    className="text-xs font-medium text-slate-500"
                  >
                    Entry name
                  </label>
                  <input
                    id="entry-name"
                    type="text"
                    placeholder={`Add ${entryTitle} reference`}
                    value={formValues.entryName}
                    onChange={event => handleChange("entryName", event.target.value)}
                    onBlur={() => handleBlur("entryName")}
                    aria-invalid={touched.entryName && !formValues.entryName.trim()}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-300 focus:outline-none"
                  />
                  {touched.entryName && !formValues.entryName.trim() && (
                    <p className="text-xs text-amber-600">Entry name is required.</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label htmlFor="entry-value" className="text-xs font-medium text-slate-500">
                    Value
                  </label>
                  <input
                    id="entry-value"
                    type="text"
                    placeholder="Enter a value"
                    value={formValues.value}
                    onChange={event => handleChange("value", event.target.value)}
                    onBlur={() => handleBlur("value")}
                    aria-invalid={touched.value && !formValues.value.trim()}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-300 focus:outline-none"
                  />
                  {touched.value && !formValues.value.trim() && (
                    <p className="text-xs text-amber-600">Value is required.</p>
                  )}
                </div>
                <div className="space-y-1">
                  <label htmlFor="entry-notes" className="text-xs font-medium text-slate-500">
                    Notes
                  </label>
                  <textarea
                    id="entry-notes"
                    rows={3}
                    placeholder="Add context for the record"
                    value={formValues.notes}
                    onChange={event => handleChange("notes", event.target.value)}
                    onBlur={() => handleBlur("notes")}
                    aria-invalid={touched.notes && !formValues.notes.trim()}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-300 focus:outline-none"
                  />
                  {touched.notes && !formValues.notes.trim() && (
                    <p className="text-xs text-amber-600">Notes are required.</p>
                  )}
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" disabled={!isComplete}>
                  Save entry
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </>
  );
}
