import {
  Bot,
  FileText,
  LayoutDashboard,
  Lightbulb,
  ListChecks,
  Package,
  Settings,
  ShoppingCart,
  Store,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react"

export type NavItem = {
  title: string
  href: string
  icon: LucideIcon
}

export const navGroups: { label: string; items: NavItem[] }[] = [
  {
    label: "Dashboard",
    items: [
      { title: "Business Overview", href: "/", icon: LayoutDashboard },
      { title: "Insights", href: "/insights", icon: Lightbulb },
      { title: "Opportunities", href: "/opportunities", icon: Target },
    ],
  },
  {
    label: "Operations",
    items: [
      { title: "Sales", href: "/sales", icon: ShoppingCart },
      { title: "Inventory", href: "/inventory", icon: Package },
      { title: "Customers", href: "/customers", icon: Users },
      { title: "Action Center", href: "/action-center", icon: ListChecks },
    ],
  },
  {
    label: "Intelligence",
    items: [
      { title: "AI Mentor", href: "/ai-mentor", icon: Bot },
      { title: "Reports", href: "/reports", icon: FileText },
    ],
  },
  {
    label: "Account",
    items: [
      { title: "Store Profile", href: "/store-profile", icon: Store },
      { title: "Settings", href: "/settings", icon: Settings },
    ],
  },
]

export const allNavItems = navGroups.flatMap((g) => g.items)
