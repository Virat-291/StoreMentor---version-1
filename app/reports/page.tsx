import { Download, FileText } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { reports } from "@/lib/sample-data"

export default function ReportsPage() {
  return (
    <div>
      <PageHeader title="Reports" description="Download summaries of your store's performance. (Sample data)">
        <Button>Generate report</Button>
      </PageHeader>
      <Card className="py-2">
        <CardContent className="px-2">
          <ul className="flex flex-col divide-y">
            {reports.map((r) => (
              <li key={r.id} className="flex items-center gap-4 px-3 py-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                  <FileText className="size-5" aria-hidden="true" />
                </div>
                <div className="flex min-w-0 flex-1 flex-col">
                  <span className="truncate text-sm font-medium">{r.name}</span>
                  <span className="text-xs text-muted-foreground">
                    Generated {r.generated} · {r.size}
                  </span>
                </div>
                <Badge variant="secondary" className="hidden sm:inline-flex">
                  {r.type}
                </Badge>
                <Button variant="ghost" size="icon" aria-label={`Download ${r.name}`}>
                  <Download className="size-4" aria-hidden="true" />
                </Button>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  )
}
