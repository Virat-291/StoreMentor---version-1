import { PageHeader } from "@/components/page-header"
import { KpiCards } from "@/components/overview/kpi-cards"
import { RecentTransactions } from "@/components/overview/recent-transactions"
import { SalesByCategoryChart } from "@/components/sales/sales-by-category-chart"
import { TopProducts } from "@/components/sales/top-products"

export default function SalesPage() {
  return (
    <div className="flex flex-col gap-6">
      <PageHeader title="Sales" description="Revenue, orders, and product performance for the last 30 days. (Sample data)" />
      <KpiCards />
      <div className="grid gap-6 lg:grid-cols-2">
        <SalesByCategoryChart />
        <TopProducts />
      </div>
      <RecentTransactions />
    </div>
  )
}
