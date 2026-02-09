"use client";

import { useEffect, useMemo, useState } from "react";

import { cn } from "@/lib/utils";

const workflows = [
  {
    id: "payables",
    name: "Payables approval",
    owner: "Finance Ops",
    status: "In review",
    impact: "Invoices cycle 38% faster"
  },
  {
    id: "hiring",
    name: "Hiring pipeline",
    owner: "People Ops",
    status: "Active",
    impact: "Offer acceptance +12%"
  },
  {
    id: "inventory",
    name: "Inventory replenishment",
    owner: "Supply Chain",
    status: "Monitoring",
    impact: "Stockouts down 21%"
  },
  {
    id: "close",
    name: "Monthly close",
    owner: "Accounting",
    status: "Live",
    impact: "Close time 4.2 days"
  }
];

const automationSignals = [
  {
    label: "Smart match rate",
    value: "93%",
    trend: "+5%",
    detail: "Auto-reconciled invoices"
  },
  {
    label: "Exception queue",
    value: "12",
    trend: "-18%",
    detail: "Flagged for review"
  },
  {
    label: "Approval latency",
    value: "2.1h",
    trend: "-31%",
    detail: "Median response time"
  }
];

const activityLog = [
  {
    label: "Vendor invoice auto-matched",
    meta: "Finance Ops · 2m ago",
    status: "success"
  },
  {
    label: "Policy breach flagged for review",
    meta: "Risk team · 8m ago",
    status: "warning"
  },
  {
    label: "Payroll sync completed",
    meta: "People Ops · 14m ago",
    status: "success"
  },
  {
    label: "Inventory reorder approved",
    meta: "Supply Chain · 22m ago",
    status: "success"
  }
];

const statusStyles: Record<string, string> = {
  success: "bg-emerald-500/15 text-emerald-700",
  warning: "bg-amber-500/15 text-amber-700"
};

export default function LiveOpsBoard() {
  const [activeWorkflowId, setActiveWorkflowId] = useState(workflows[0].id);
  const [filter, setFilter] = useState("");
  const [highlightedSignal, setHighlightedSignal] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHighlightedSignal((prev) => (prev + 1) % automationSignals.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, []);

  const activeWorkflow = useMemo(
    () => workflows.find((workflow) => workflow.id === activeWorkflowId) ?? workflows[0],
    [activeWorkflowId]
  );

  const filteredActivity = useMemo(() => {
    const normalized = filter.trim().toLowerCase();
    if (!normalized) {
      return activityLog;
    }
    return activityLog.filter((item) => item.label.toLowerCase().includes(normalized));
  }, [filter]);

  return (
    <div className="grid gap-6 rounded-3xl border border-white/50 bg-white/70 p-6 shadow-[0_30px_80px_-60px_rgba(15,23,42,0.7)] backdrop-blur-2xl md:grid-cols-[1.1fr_0.9fr]">
      <div className="flex flex-col gap-5">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Live automation feed
            </p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-900">
              Monitor workflows as they adapt in real time.
            </h3>
          </div>
          <div className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-xs font-semibold text-emerald-700">
            Avg refresh: 120ms
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {workflows.map((workflow) => (
            <button
              key={workflow.id}
              type="button"
              onClick={() => setActiveWorkflowId(workflow.id)}
              className={cn(
                "rounded-full border px-4 py-1 text-xs font-semibold transition",
                workflow.id === activeWorkflowId
                  ? "border-emerald-400 bg-emerald-500/10 text-emerald-800"
                  : "border-white/60 bg-white/60 text-slate-600 hover:text-slate-900"
              )}
            >
              {workflow.name}
            </button>
          ))}
        </div>

        <div className="rounded-2xl border border-white/40 bg-white/80 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-slate-500">Active workflow</p>
              <h4 className="mt-2 text-lg font-semibold text-slate-900">
                {activeWorkflow.name}
              </h4>
            </div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              {activeWorkflow.status}
            </span>
          </div>
          <div className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Owner</p>
              <p className="mt-1 font-semibold text-slate-700">{activeWorkflow.owner}</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-slate-400">Impact</p>
              <p className="mt-1 font-semibold text-slate-700">{activeWorkflow.impact}</p>
            </div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Automation signals
            </p>
            <span className="text-xs text-slate-500">Adaptive AI routing</span>
          </div>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            {automationSignals.map((signal, index) => (
              <div
                key={signal.label}
                className={cn(
                  "rounded-xl border border-white/50 bg-white/70 p-3 transition",
                  index === highlightedSignal
                    ? "shadow-[0_15px_30px_-20px_rgba(16,185,129,0.6)]"
                    : "opacity-80"
                )}
              >
                <p className="text-xs uppercase tracking-[0.15em] text-slate-400">
                  {signal.label}
                </p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{signal.value}</p>
                <p className="text-xs text-emerald-600">{signal.trend}</p>
                <p className="mt-2 text-xs text-slate-500">{signal.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex h-full flex-col gap-4 rounded-2xl border border-white/50 bg-white/80 p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
              Smart activity
            </p>
            <h4 className="mt-2 text-lg font-semibold text-slate-900">Realtime insights</h4>
          </div>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white">
            Fast lane
          </span>
        </div>
        <div>
          <label className="text-xs uppercase tracking-[0.15em] text-slate-400" htmlFor="log">
            Filter events
          </label>
          <input
            id="log"
            value={filter}
            onChange={(event) => setFilter(event.target.value)}
            placeholder="Search automations"
            className="mt-2 w-full rounded-lg border border-white/60 bg-white/70 px-3 py-2 text-sm text-slate-700 placeholder:text-slate-400 focus:border-emerald-300 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-3">
          {filteredActivity.map((item) => (
            <div key={item.label} className="rounded-xl border border-white/60 bg-white/70 p-3">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-semibold text-slate-700">{item.label}</p>
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-xs font-semibold",
                    statusStyles[item.status]
                  )}
                >
                  {item.status}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500">{item.meta}</p>
            </div>
          ))}
          {filteredActivity.length === 0 ? (
            <div className="rounded-xl border border-dashed border-slate-200 bg-white/60 p-4 text-center text-sm text-slate-500">
              No events match that filter. Try a different keyword.
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
