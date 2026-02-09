"use client";

import { cn } from "@/lib/utils";
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
  return (
    <Card className={cn("relative", className)}>
      <div>{children}</div>
    </Card>
  );
}
