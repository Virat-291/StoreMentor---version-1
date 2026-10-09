import Link from "next/link"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { StockBadge } from "@/components/status-badge"
import { getStockStatus, inventoryAlerts } from "@/lib/sample-data"

export function InventoryAlerts() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Inventory alerts</CardTitle>
        <CardDescription>{inventoryAlerts.length} items below reorder level</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm" asChild>
            <Link href="/inventory">Manage</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4">
          {inventoryAlerts.map((item) => {
            const pct = Math.min(100, Math.round((item.stock / item.reorderLevel) * 100))
            return (
              <li key={item.sku} className="flex flex-col gap-2">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-medium">{item.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.stock} in stock · reorder at {item.reorderLevel}
                    </span>
                  </div>
                  <StockBadge status={getStockStatus(item)} />
                </div>
                <Progress value={pct} aria-label={`${item.name} stock level ${pct}% of reorder level`} className="h-1.5" />
              </li>
            )
          })}
        </ul>
      </CardContent>
    </Card>
  )
}
