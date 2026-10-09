import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { topProducts } from "@/lib/sample-data"
import { formatCurrency } from "@/lib/format"

export function TopProducts() {
  const max = Math.max(...topProducts.map((p) => p.revenue))
  const sorted = [...topProducts].sort((a, b) => b.revenue - a.revenue)
  return (
    <Card>
      <CardHeader>
        <CardTitle>Top products</CardTitle>
        <CardDescription>Ranked by revenue</CardDescription>
      </CardHeader>
      <CardContent>
        <ol className="flex flex-col gap-4">
          {sorted.map((p, i) => (
            <li key={p.name} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-2 text-sm">
                <span className="flex items-center gap-2">
                  <span className="w-4 text-muted-foreground tabular-nums">{i + 1}</span>
                  <span className="font-medium">{p.name}</span>
                </span>
                <span className="font-medium tabular-nums">{formatCurrency(p.revenue)}</span>
              </div>
              <div className="ml-6 h-1.5 overflow-hidden rounded-full bg-muted">
                <div className="h-full rounded-full bg-primary" style={{ width: `${(p.revenue / max) * 100}%` }} />
              </div>
              <span className="ml-6 text-xs text-muted-foreground">{p.units} units sold</span>
            </li>
          ))}
        </ol>
      </CardContent>
    </Card>
  )
}
