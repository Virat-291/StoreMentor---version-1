import { TrendingUp } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { opportunities } from "@/lib/sample-data"

export default function OpportunitiesPage() {
  return (
    <div>
      <PageHeader
        title="Opportunities"
        description="Growth ideas tailored to your store, with estimated gains and effort. (Sample data)"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {opportunities.map((op) => (
          <Card key={op.id}>
            <CardHeader>
              <CardTitle>{op.title}</CardTitle>
              <CardDescription className="text-pretty">{op.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp className="size-4 text-success" aria-hidden="true" />
                <span className="text-muted-foreground">Estimated gain</span>
                <span className="ml-auto font-semibold tabular-nums">{op.estimatedGain}</span>
              </div>
              <div className="flex flex-col gap-1.5">
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>AI confidence</span>
                  <span className="tabular-nums">{op.confidence}%</span>
                </div>
                <Progress value={op.confidence} aria-label={`Confidence ${op.confidence}%`} className="h-1.5" />
              </div>
            </CardContent>
            <CardFooter>
              <Badge variant="secondary">{op.effort} effort</Badge>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
