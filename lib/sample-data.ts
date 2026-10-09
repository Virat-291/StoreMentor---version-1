// SAMPLE DATA — placeholder values for the UI preview. Replace with the Crow backend API later.

export const storeProfile = {
  name: "Green Basket Grocers",
  owner: "Priya Sharma",
  category: "Grocery & Daily Essentials",
  location: "Indiranagar, Bengaluru",
  email: "hello@greenbasket.example",
  phone: "+91 98765 43210",
  openedOn: "March 2021",
  hours: "8:00 AM – 10:00 PM",
  employees: 6,
}

export type Kpi = {
  id: string
  label: string
  value: string
  change: number
  hint: string
}

export const kpis: Kpi[] = [
  { id: "revenue", label: "Total Revenue", value: "₹4,82,350", change: 12.4, hint: "vs. last 30 days" },
  { id: "orders", label: "Orders", value: "1,284", change: 8.1, hint: "vs. last 30 days" },
  { id: "aov", label: "Avg. Order Value", value: "₹375.6", change: 3.9, hint: "vs. last 30 days" },
  { id: "customers", label: "Active Customers", value: "642", change: -2.3, hint: "vs. last 30 days" },
]

export const revenueSeries = [
  { month: "Jan", revenue: 312000, expenses: 228000 },
  { month: "Feb", revenue: 298000, expenses: 221000 },
  { month: "Mar", revenue: 341000, expenses: 236000 },
  { month: "Apr", revenue: 365000, expenses: 248000 },
  { month: "May", revenue: 352000, expenses: 241000 },
  { month: "Jun", revenue: 389000, expenses: 259000 },
  { month: "Jul", revenue: 402000, expenses: 262000 },
  { month: "Aug", revenue: 428000, expenses: 274000 },
  { month: "Sep", revenue: 429000, expenses: 280000 },
  { month: "Oct", revenue: 482350, expenses: 296000 },
]

export type Transaction = {
  id: string
  customer: string
  items: number
  amount: number
  method: "UPI" | "Card" | "Cash"
  status: "Paid" | "Pending" | "Refunded"
  time: string
}

export const transactions: Transaction[] = [
  { id: "TXN-10482", customer: "Arjun Mehta", items: 7, amount: 1245, method: "UPI", status: "Paid", time: "10:42 AM" },
  { id: "TXN-10481", customer: "Sneha Rao", items: 3, amount: 486, method: "Card", status: "Paid", time: "10:18 AM" },
  { id: "TXN-10480", customer: "Walk-in", items: 2, amount: 160, method: "Cash", status: "Paid", time: "9:57 AM" },
  { id: "TXN-10479", customer: "Kabir Singh", items: 12, amount: 2310, method: "UPI", status: "Pending", time: "9:31 AM" },
  { id: "TXN-10478", customer: "Meera Iyer", items: 4, amount: 642, method: "Card", status: "Refunded", time: "9:05 AM" },
  { id: "TXN-10477", customer: "Rohan Das", items: 5, amount: 918, method: "UPI", status: "Paid", time: "8:44 AM" },
]

export type InventoryItem = {
  sku: string
  name: string
  category: string
  stock: number
  reorderLevel: number
  unitPrice: number
  sold30d: number
}

export const inventory: InventoryItem[] = [
  { sku: "SKU-1001", name: "Amul Toned Milk 1L", category: "Dairy", stock: 8, reorderLevel: 40, unitPrice: 56, sold30d: 820 },
  { sku: "SKU-1002", name: "Aashirvaad Atta 5kg", category: "Staples", stock: 14, reorderLevel: 25, unitPrice: 285, sold30d: 190 },
  { sku: "SKU-1003", name: "Tata Salt 1kg", category: "Staples", stock: 0, reorderLevel: 30, unitPrice: 28, sold30d: 240 },
  { sku: "SKU-1004", name: "Farm Eggs (12 pack)", category: "Dairy", stock: 22, reorderLevel: 20, unitPrice: 96, sold30d: 310 },
  { sku: "SKU-1005", name: "Basmati Rice 5kg", category: "Staples", stock: 46, reorderLevel: 15, unitPrice: 640, sold30d: 88 },
  { sku: "SKU-1006", name: "Fresh Bananas (dozen)", category: "Produce", stock: 5, reorderLevel: 18, unitPrice: 60, sold30d: 410 },
  { sku: "SKU-1007", name: "Britannia Bread", category: "Bakery", stock: 31, reorderLevel: 20, unitPrice: 45, sold30d: 520 },
  { sku: "SKU-1008", name: "Sunflower Oil 1L", category: "Staples", stock: 64, reorderLevel: 20, unitPrice: 165, sold30d: 140 },
  { sku: "SKU-1009", name: "Green Tea (25 bags)", category: "Beverages", stock: 72, reorderLevel: 10, unitPrice: 180, sold30d: 12 },
]

export type StockStatus = "Out of stock" | "Critical" | "Low" | "Healthy" | "Overstock"

export function getStockStatus(item: InventoryItem): StockStatus {
  if (item.stock === 0) return "Out of stock"
  if (item.stock < item.reorderLevel * 0.4) return "Critical"
  if (item.stock < item.reorderLevel) return "Low"
  if (item.sold30d < item.stock * 0.25) return "Overstock"
  return "Healthy"
}

export const inventoryAlerts = inventory
  .filter((item) => ["Out of stock", "Critical", "Low"].includes(getStockStatus(item)))
  .sort((a, b) => a.stock / a.reorderLevel - b.stock / b.reorderLevel)

export type Insight = {
  id: string
  title: string
  detail: string
  impact: "High" | "Medium" | "Low"
  category: "Revenue" | "Inventory" | "Customers" | "Operations"
}

export const aiInsights: Insight[] = [
  {
    id: "ins-1",
    title: "Weekend dairy demand is outpacing stock",
    detail: "Milk and eggs sell 38% faster on Sat–Sun. Restocking Friday evening could recover an estimated ₹18,400/month in lost sales.",
    impact: "High",
    category: "Inventory",
  },
  {
    id: "ins-2",
    title: "Evening hours drive the highest basket size",
    detail: "Orders between 6–9 PM average ₹512, 36% above the daily mean. Consider an evening combo offer on staples.",
    impact: "Medium",
    category: "Revenue",
  },
  {
    id: "ins-3",
    title: "42 regular customers haven't returned in 3 weeks",
    detail: "These customers previously visited weekly. A personalised WhatsApp offer could win back roughly 30% of them.",
    impact: "High",
    category: "Customers",
  },
  {
    id: "ins-4",
    title: "Green tea is tying up working capital",
    detail: "72 units in stock vs. 12 sold last month. Pause reorders and bundle with breakfast items to clear inventory.",
    impact: "Low",
    category: "Inventory",
  },
]

export type Opportunity = {
  id: string
  title: string
  description: string
  estimatedGain: string
  effort: "Low" | "Medium" | "High"
  confidence: number
}

export const opportunities: Opportunity[] = [
  { id: "op-1", title: "Launch a breakfast combo", description: "Bundle bread, eggs, and milk at a 5% discount for morning shoppers.", estimatedGain: "₹22,000/mo", effort: "Low", confidence: 82 },
  { id: "op-2", title: "Home delivery within 2 km", description: "31% of nearby residents order online from competitors. Offer free delivery above ₹499.", estimatedGain: "₹58,000/mo", effort: "High", confidence: 64 },
  { id: "op-3", title: "Loyalty points for repeat buyers", description: "Reward customers with 1 point per ₹100 to increase visit frequency.", estimatedGain: "₹31,500/mo", effort: "Medium", confidence: 71 },
  { id: "op-4", title: "Stock seasonal festive items", description: "Diwali is 3 weeks away. Sweets, dry fruits, and diyas showed 3x demand last year.", estimatedGain: "₹45,000 one-time", effort: "Medium", confidence: 88 },
]

export const salesByCategory = [
  { category: "Staples", sales: 168000 },
  { category: "Dairy", sales: 112000 },
  { category: "Produce", sales: 74000 },
  { category: "Bakery", sales: 52000 },
  { category: "Beverages", sales: 41000 },
  { category: "Snacks", sales: 35350 },
]

export const topProducts = [
  { name: "Amul Toned Milk 1L", units: 820, revenue: 45920 },
  { name: "Britannia Bread", units: 520, revenue: 23400 },
  { name: "Fresh Bananas (dozen)", units: 410, revenue: 24600 },
  { name: "Farm Eggs (12 pack)", units: 310, revenue: 29760 },
  { name: "Aashirvaad Atta 5kg", units: 190, revenue: 54150 },
]

export type Customer = {
  id: string
  name: string
  email: string
  visits: number
  totalSpent: number
  lastVisit: string
  segment: "Loyal" | "Regular" | "At risk" | "New"
}

export const customers: Customer[] = [
  { id: "C-201", name: "Arjun Mehta", email: "arjun.m@example.com", visits: 48, totalSpent: 52340, lastVisit: "Today", segment: "Loyal" },
  { id: "C-202", name: "Sneha Rao", email: "sneha.r@example.com", visits: 31, totalSpent: 28410, lastVisit: "Today", segment: "Loyal" },
  { id: "C-203", name: "Kabir Singh", email: "kabir.s@example.com", visits: 19, totalSpent: 21980, lastVisit: "Yesterday", segment: "Regular" },
  { id: "C-204", name: "Meera Iyer", email: "meera.i@example.com", visits: 14, totalSpent: 9620, lastVisit: "3 weeks ago", segment: "At risk" },
  { id: "C-205", name: "Rohan Das", email: "rohan.d@example.com", visits: 3, totalSpent: 2140, lastVisit: "2 days ago", segment: "New" },
  { id: "C-206", name: "Ananya Gupta", email: "ananya.g@example.com", visits: 22, totalSpent: 17850, lastVisit: "4 weeks ago", segment: "At risk" },
]

export type ActionItem = {
  id: string
  title: string
  source: string
  priority: "High" | "Medium" | "Low"
  due: string
  done: boolean
}

export const actionItems: ActionItem[] = [
  { id: "a-1", title: "Reorder Tata Salt 1kg (out of stock)", source: "Inventory alert", priority: "High", due: "Today", done: false },
  { id: "a-2", title: "Place Friday dairy order (+40% milk & eggs)", source: "AI insight", priority: "High", due: "Fri", done: false },
  { id: "a-3", title: "Send win-back offer to 42 at-risk customers", source: "AI insight", priority: "Medium", due: "This week", done: false },
  { id: "a-4", title: "Set up breakfast combo shelf display", source: "Opportunity", priority: "Medium", due: "Next week", done: false },
  { id: "a-5", title: "Review pending payment TXN-10479", source: "Sales", priority: "Low", due: "Today", done: true },
]

export const reports = [
  { id: "r-1", name: "Monthly Sales Summary — September", type: "Sales", generated: "Oct 1, 2026", size: "248 KB" },
  { id: "r-2", name: "Inventory Valuation — Q3", type: "Inventory", generated: "Oct 1, 2026", size: "412 KB" },
  { id: "r-3", name: "Customer Retention Analysis", type: "Customers", generated: "Sep 28, 2026", size: "186 KB" },
  { id: "r-4", name: "GST Tax Summary — September", type: "Finance", generated: "Sep 30, 2026", size: "94 KB" },
]

export const mentorSuggestions = [
  "How can I increase weekend sales?",
  "Which products should I reorder this week?",
  "How do I win back inactive customers?",
]

export const mentorReplies: Record<string, string> = {
  default:
    "Based on your sample store data: revenue is up 12.4% this month, but dairy stock-outs on weekends are your biggest leak. I'd start by increasing your Friday dairy order and launching a breakfast combo.",
  weekend:
    "Weekend shoppers buy 38% more dairy and produce. Restock milk, eggs, and bananas on Friday evening, and promote a weekend family pack (atta + oil + rice) near the entrance.",
  reorder:
    "Priority reorders this week: Tata Salt 1kg (out of stock), Amul Toned Milk 1L (8 left vs. 40 reorder level), and Fresh Bananas (5 left). Pause Green Tea — you have ~6 months of stock.",
  customers:
    "42 regulars haven't visited in 3 weeks. Send a personalised offer like '₹50 off on ₹500' via WhatsApp, valid for 7 days. Follow up with a loyalty points program to keep them returning.",
}
