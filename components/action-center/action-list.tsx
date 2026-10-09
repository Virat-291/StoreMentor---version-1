"use client"

import { useState } from "react"
import { Calendar } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { StatusBadge } from "@/components/status-badge"
import { actionItems as initialItems } from "@/lib/sample-data"
import { cn } from "@/lib/utils"

export function ActionList() {
  const [items, setItems] = useState(initialItems)
  const doneCount = items.filter((i) => i.done).length

  const toggle = (id: string) =>
    setItems((prev) => prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item)))

  return (
    <Card>
      <CardHeader>
        <CardTitle>This week</CardTitle>
        <CardDescription>
          {doneCount} of {items.length} actions completed
        </CardDescription>
        <Progress value={(doneCount / items.length) * 100} aria-label="Actions completed" className="mt-2 h-1.5" />
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col divide-y">
          {items.map((item) => (
            <li key={item.id} className="flex items-start gap-3 py-3">
              <input
                id={item.id}
                type="checkbox"
                checked={item.done}
                onChange={() => toggle(item.id)}
                className="mt-0.5 size-4 shrink-0 accent-primary"
              />
              <label htmlFor={item.id} className="flex min-w-0 flex-1 cursor-pointer flex-col gap-1">
                <span className={cn("text-sm font-medium", item.done && "text-muted-foreground line-through")}>
                  {item.title}
                </span>
                <span className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{item.source}</span>
                  <span aria-hidden="true">·</span>
                  <Calendar className="size-3" aria-hidden="true" />
                  <span>{item.due}</span>
                </span>
              </label>
              <StatusBadge status={item.done ? "Done" : item.priority} />
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
