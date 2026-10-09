import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { StatusBadge } from "@/components/status-badge"
import { customers } from "@/lib/sample-data"
import { formatCurrency } from "@/lib/format"

const segments = ["Loyal", "Regular", "New", "At risk"] as const

export default function CustomersPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Customers" description="Understand who shops with you and who needs attention. (Sample data)" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {segments.map((segment) => (
          <Card key={segment} className="py-5">
            <CardContent className="flex items-center justify-between px-5">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-muted-foreground">{segment}</span>
                <span className="text-2xl font-semibold tabular-nums">
                  {customers.filter((c) => c.segment === segment).length}
                </span>
              </div>
              <StatusBadge status={segment} />
            </CardContent>
          </Card>
        ))}
      </div>
      <Card className="py-2">
        <CardContent className="px-2">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Customer</TableHead>
                <TableHead className="hidden text-right sm:table-cell">Visits</TableHead>
                <TableHead className="text-right">Total spent</TableHead>
                <TableHead className="hidden md:table-cell">Last visit</TableHead>
                <TableHead>Segment</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {customers.map((c) => (
                <TableRow key={c.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="size-8">
                        <AvatarFallback className="bg-accent text-xs text-accent-foreground">
                          {c.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex flex-col">
                        <span className="font-medium">{c.name}</span>
                        <span className="text-xs text-muted-foreground">{c.email}</span>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="hidden text-right tabular-nums sm:table-cell">{c.visits}</TableCell>
                  <TableCell className="text-right tabular-nums">{formatCurrency(c.totalSpent)}</TableCell>
                  <TableCell className="hidden text-muted-foreground md:table-cell">{c.lastVisit}</TableCell>
                  <TableCell>
                    <StatusBadge status={c.segment} />
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
