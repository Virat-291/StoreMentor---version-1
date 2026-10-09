import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils"

const tones = {
  positive: "border-success/30 bg-success/10 text-success",
  warning: "border-warning/40 bg-warning/15 text-foreground",
  negative: "border-destructive/30 bg-destructive/10 text-destructive",
  neutral: "border-border bg-muted text-muted-foreground",
  info: "border-chart-2/30 bg-chart-2/10 text-chart-2",
} as const

const statusTone: Record<string, keyof typeof tones> = {
  Paid: "positive",
  Healthy: "positive",
  Loyal: "positive",
  Low: "neutral",
  Pending: "warning",
  "Low stock": "warning",
  Regular: "info",
  New: "info",
  Medium: "warning",
  Overstock: "info",
  Critical: "negative",
  "Out of stock": "negative",
  Refunded: "negative",
  "At risk": "negative",
  High: "negative",
  "High impact": "positive",
  "Medium impact": "info",
  "Low impact": "neutral",
  Done: "positive",
}

export function StatusBadge({ status, className }: { status: string; className?: string }) {
  return (
    <Badge variant="outline" className={cn("font-medium", tones[statusTone[status] ?? "neutral"], className)}>
      {status}
    </Badge>
  )
}

export function StockBadge({ status }: { status: string }) {
  const label = status === "Low" ? "Low stock" : status
  return <StatusBadge status={label} />
}
