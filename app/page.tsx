import { PageHeader } from "@/components/page-header"
import { KpiCards } from "@/components/overview/kpi-cards"
import { RevenueChart } from "@/components/overview/revenue-chart"
import { RecentTransactions } from "@/components/overview/recent-transactions"
import { InventoryAlerts } from "@/components/overview/inventory-alerts"
import { AiInsights } from "@/components/overview/ai-insights"
import { storeProfile } from "@/lib/sample-data"

export default function OverviewPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader
        title={`Good morning, ${storeProfile.owner.split(" ")[0]}`}
        description={`Here's how ${storeProfile.name} is performing over the last 30 days.`}
      />
      <KpiCards />
      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RevenueChart />
        </div>
        <InventoryAlerts />
      </div>
      <div className="grid gap-6 xl:grid-cols-5">
        <div className="xl:col-span-3">
          <AiInsights />
        </div>
        <div className="xl:col-span-2">
          <RecentTransactions />
        </div>
      </div>
    </div>
  )
}
