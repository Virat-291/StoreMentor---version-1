import { PageHeader } from "@/components/page-header"
import { InsightItem } from "@/components/overview/ai-insights"
import { aiInsights } from "@/lib/sample-data"

export default function InsightsPage() {
  return (
    <div>
      <PageHeader
        title="Insights"
        description="AI-generated observations about your store, ranked by business impact. (Sample data)"
      />
      <div className="grid gap-4 md:grid-cols-2">
        {aiInsights.map((insight) => (
          <InsightItem key={insight.id} insight={insight} />
        ))}
      </div>
    </div>
  )
}
