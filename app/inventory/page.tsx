import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StockBadge } from "@/components/status-badge"
import { getStockStatus, inventory, inventoryAlerts } from "@/lib/sample-data"
import { formatCurrency } from "@/lib/format"

export default function InventoryPage() {
  const totalValue = inventory.reduce((sum, i) => sum + i.stock * i.unitPrice, 0)
  const stats = [
    { label: "Total SKUs", value: inventory.length.toString() },
    { label: "Stock value", value: formatCurrency(totalValue) },
    { label: "Needs reorder", value: inventoryAlerts.length.toString() },
  ]

  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Inventory" description="Track stock levels and reorder before you run out. (Sample data)" />
      <div className="grid gap-4 sm:grid-cols-3">
        {stats.map((s) => (
          <Card key={s.label} className="py-5">
            <CardContent className="flex flex-col gap-1 px-5">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <span className="text-2xl font-semibold tabular-nums">{s.value}</span>
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="py-2">
        <CardContent className="px-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead className="hidden md:table-cell">Category</TableHead>
                <TableHead className="text-right">In stock</TableHead>
                <TableHead className="hidden text-right sm:table-cell">Reorder at</TableHead>
                <TableHead className="hidden text-right md:table-cell">Sold (30d)</TableHead>
                <TableHead className="hidden text-right lg:table-cell">Unit price</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {inventory.map((item) => (
                <TableRow key={item.sku}>
                  <TableCell>
                    <div className="flex flex-col">
                      <span className="font-medium">{item.name}</span>
                      <span className="text-xs text-muted-foreground">{item.sku}</span>
                    </div>
                  </TableCell>
                  <TableCell className="hidden text-muted-foreground md:table-cell">{item.category}</TableCell>
                  <TableCell className="text-right tabular-nums">{item.stock}</TableCell>
                  <TableCell className="hidden text-right tabular-nums sm:table-cell">{item.reorderLevel}</TableCell>
                  <TableCell className="hidden text-right tabular-nums md:table-cell">{item.sold30d}</TableCell>
                  <TableCell className="hidden text-right tabular-nums lg:table-cell">
                    {formatCurrency(item.unitPrice)}
                  </TableCell>
                  <TableCell>
                    <StockBadge status={getStockStatus(item)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
