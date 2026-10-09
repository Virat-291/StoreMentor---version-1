import { ArrowDownRight, ArrowUpRight, DollarSign, Receipt, ShoppingCart, Users, type LucideIcon } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { kpis } from "@/lib/sample-data"
import { cn } from "@/lib/utils"

const icons: Record<string, LucideIcon> = {
  revenue: DollarSign,
  orders: ShoppingCart,
  aov: Receipt,
  customers: Users,
}

export function KpiCards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {kpis.map((kpi) => {
        const Icon = icons[kpi.id]
        const positive = kpi.change >= 0
        return (
          <Card key={kpi.id} className="gap-3 py-5">
            <CardHeader className="flex flex-row items-center justify-between px-5">
              <CardTitle className="text-sm font-medium text-muted-foreground">{kpi.label}</CardTitle>
              <div className="flex size-8 items-center justify-center rounded-md bg-accent text-accent-foreground">
                <Icon className="size-4" aria-hidden="true" />
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-1 px-5">
              <p className="text-2xl font-semibold tracking-tight tabular-nums">{kpi.value}</p>
              <p className="flex items-center gap-1 text-xs text-muted-foreground">
                <span
                  className={cn(
                    "inline-flex items-center gap-0.5 font-medium",
                    positive ? "text-success" : "text-destructive",
                  )}
                >
                  {positive ? (
                    <ArrowUpRight className="size-3.5" aria-hidden="true" />
                  ) : (
                    <ArrowDownRight className="size-3.5" aria-hidden="true" />
                  )}
                  {Math.abs(kpi.change)}%
                </span>
                {kpi.hint}
              </p>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
