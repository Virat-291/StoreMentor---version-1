import { PageHeader } from "@/components/page-header"
import { ActionList } from "@/components/action-center/action-list"

export default function ActionCenterPage() {
  return (
    <div>
      <PageHeader
        title="Action Center"
        description="Your to-do list, generated from alerts, insights, and opportunities. (Sample data)"
      />
      <ActionList />
    </div>
  )
}
