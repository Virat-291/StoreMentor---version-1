import { Calendar, Clock, Mail, MapPin, Phone, Store, Users } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { storeProfile } from "@/lib/sample-data"

const details = [
  { icon: Store, label: "Category", value: storeProfile.category },
  { icon: MapPin, label: "Location", value: storeProfile.location },
  { icon: Mail, label: "Email", value: storeProfile.email },
  { icon: Phone, label: "Phone", value: storeProfile.phone },
  { icon: Clock, label: "Opening hours", value: storeProfile.hours },
  { icon: Calendar, label: "Opened", value: storeProfile.openedOn },
  { icon: Users, label: "Employees", value: String(storeProfile.employees) },
]

export default function StoreProfilePage() {
  return (
    <div>
      <PageHeader title="Store Profile" description="Details StoreMentor uses to personalise your insights. (Sample data)" />
      <Card className="max-w-3xl">
        <CardHeader className="flex flex-row items-center gap-4">
          <Avatar className="size-14 rounded-xl">
            <AvatarFallback className="rounded-xl bg-primary text-lg text-primary-foreground">GB</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <CardTitle className="text-lg">{storeProfile.name}</CardTitle>
            <CardDescription>Owned by {storeProfile.owner}</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <dl className="grid gap-4 sm:grid-cols-2">
            {details.map((d) => (
              <div key={d.label} className="flex items-start gap-3 rounded-lg border p-3">
                <d.icon className="mt-0.5 size-4 text-muted-foreground" aria-hidden="true" />
                <div className="flex flex-col">
                  <dt className="text-xs text-muted-foreground">{d.label}</dt>
                  <dd className="text-sm font-medium">{d.value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </CardContent>
      </Card>
    </div>
  )
}
