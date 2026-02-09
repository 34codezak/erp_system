import * as React from "react";

import { cn } from "@/lib/utils";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200/80 bg-gradient-to-br from-white to-slate-50 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.08)] ring-1 ring-transparent transition duration-200 ease-out hover:-translate-y-0.5 hover:border-slate-300/80 hover:shadow-[0_22px_48px_rgba(15,23,42,0.12)] hover:ring-slate-200/70",
        className
      )}
      {...props}
    />
  );
}
