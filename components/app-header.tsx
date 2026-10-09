"use client"

import { usePathname } from "next/navigation"
import { Bell, Search } from "lucide-react"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { allNavItems } from "@/lib/navigation"

export function AppHeader() {
  const pathname = usePathname()
  const current =
    allNavItems.find((item) => (item.href === "/" ? pathname === "/" : pathname.startsWith(item.href))) ??
    allNavItems[0]

  return (
    <header className="sticky top-0 z-10 flex h-16 shrink-0 items-center gap-3 border-b bg-background/80 px-4 backdrop-blur md:px-6">
      <SidebarTrigger className="-ml-1" />
      <Separator orientation="vertical" className="h-5" />
      <h1 className="truncate text-sm font-medium">{current.title}</h1>
      <Badge variant="outline" className="hidden border-warning/40 bg-warning/10 text-foreground sm:inline-flex">
        Sample data
      </Badge>
      <div className="ml-auto flex items-center gap-2">
        <div className="relative hidden md:block">
          <Search
            className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden="true"
          />
          <label htmlFor="global-search" className="sr-only">
            Search
          </label>
          <Input id="global-search" placeholder="Search products, customers..." className="h-9 w-64 pl-8" />
        </div>
        <Button variant="ghost" size="icon" className="relative" aria-label="Notifications">
          <Bell className="size-4" aria-hidden="true" />
          <span className="absolute top-2 right-2 size-2 rounded-full bg-destructive" aria-hidden="true" />
        </Button>
      </div>
    </header>
  )
}
