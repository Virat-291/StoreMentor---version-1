import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const preferences = [
  { id: "daily-summary", label: "Daily sales summary", description: "Receive a summary every evening at 10 PM.", defaultChecked: true },
  { id: "stock-alerts", label: "Low stock alerts", description: "Get notified when items fall below reorder level.", defaultChecked: true },
  { id: "ai-insights", label: "Weekly AI insights", description: "A digest of new insights and opportunities every Monday.", defaultChecked: false },
]

export default function SettingsPage() {
  return (
    <div className="flex max-w-3xl flex-col gap-6">
      <PageHeader title="Settings" description="Manage notifications and integrations." />
      <Card>
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>Choose what StoreMentor sends you.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col divide-y">
          {preferences.map((p) => (
            <div key={p.id} className="flex items-start justify-between gap-4 py-3">
              <label htmlFor={p.id} className="flex flex-col gap-0.5">
                <span className="text-sm font-medium">{p.label}</span>
                <span className="text-xs text-muted-foreground">{p.description}</span>
              </label>
              <input id={p.id} type="checkbox" defaultChecked={p.defaultChecked} className="mt-1 size-4 accent-primary" />
            </div>
          ))}
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Data source</CardTitle>
          <CardDescription>Where StoreMentor reads your store data from.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between gap-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-medium">StoreMentor Crow API</span>
            <span className="text-xs text-muted-foreground">
              The dashboard currently uses built-in sample data.
            </span>
          </div>
          <Badge variant="outline" className="border-warning/40 bg-warning/10 text-foreground">
            Not connected
          </Badge>
        </CardContent>
      </Card>
    </div>
  )
}
