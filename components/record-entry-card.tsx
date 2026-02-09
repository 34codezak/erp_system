"use client";

import * as React from "react";

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
            <div className="space-y-5 pr-6">
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
                  <label className="text-xs font-medium text-slate-500">Entry name</label>
                  <input
                    type="text"
                    placeholder={`Add ${entryTitle} reference`}
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-300 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-500">Value</label>
                  <input
                    type="text"
                    placeholder="Enter a value"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-300 focus:outline-none"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-medium text-slate-500">Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Add context for the record"
                    className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-900 focus:border-slate-300 focus:outline-none"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-2">
                <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="button">Save entry</Button>
              </div>
            </div>
          </Card>
        </div>
      )}
    </>
  );
}
