import Link from "next/link"
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { StatusBadge } from "@/components/status-badge"
import { transactions } from "@/lib/sample-data"
import { formatCurrency } from "@/lib/format"

export function RecentTransactions({ limit = 6 }: { limit?: number }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent transactions</CardTitle>
        <CardDescription>Latest sales from today</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm" asChild>
            <Link href="/sales">View all</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Customer</TableHead>
              <TableHead className="hidden sm:table-cell">Method</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.slice(0, limit).map((t) => (
              <TableRow key={t.id}>
                <TableCell>
                  <div className="flex flex-col">
                    <span className="font-medium">{t.customer}</span>
                    <span className="text-xs text-muted-foreground">
                      {t.id} · {t.time}
                    </span>
                  </div>
                </TableCell>
                <TableCell className="hidden text-muted-foreground sm:table-cell">{t.method}</TableCell>
                <TableCell>
                  <StatusBadge status={t.status} />
                </TableCell>
                <TableCell className="text-right font-medium tabular-nums">{formatCurrency(t.amount)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
