"use client"

import { useState } from "react"
import { Bot, Send } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { mentorReplies, mentorSuggestions } from "@/lib/sample-data"
import { cn } from "@/lib/utils"

type Message = { id: number; role: "user" | "assistant"; text: string }

function sampleReply(question: string) {
  const q = question.toLowerCase()
  if (q.includes("weekend")) return mentorReplies.weekend
  if (q.includes("reorder") || q.includes("stock") || q.includes("inventory")) return mentorReplies.reorder
  if (q.includes("customer") || q.includes("win back") || q.includes("inactive")) return mentorReplies.customers
  return mentorReplies.default
}

export function MentorChat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "assistant",
      text: "Hi! I'm your StoreMentor. I've reviewed your sample store data. What would you like help with today?",
    },
  ])

  const send = (text: string) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((prev) => [
      ...prev,
      { id: prev.length, role: "user", text: trimmed },
      { id: prev.length + 1, role: "assistant", text: sampleReply(trimmed) },
    ])
    setInput("")
  }

  return (
    <Card className="mx-auto flex max-w-3xl flex-col">
      <CardContent className="flex flex-col gap-4" aria-live="polite">
        {messages.map((m) => (
          <div key={m.id} className={cn("flex gap-3", m.role === "user" && "justify-end")}>
            {m.role === "assistant" ? (
              <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Bot className="size-4" aria-hidden="true" />
              </div>
            ) : null}
            <p
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed text-pretty",
                m.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground",
              )}
            >
              {m.text}
            </p>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col gap-3 border-t pt-6">
        <div className="flex w-full flex-wrap gap-2">
          {mentorSuggestions.map((s) => (
            <Button key={s} variant="outline" size="sm" className="h-auto py-1.5 text-xs" onClick={() => send(s)}>
              {s}
            </Button>
          ))}
        </div>
        <form
          className="flex w-full gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            send(input)
          }}
        >
          <label htmlFor="mentor-input" className="sr-only">
            Ask StoreMentor
          </label>
          <Input
            id="mentor-input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.nativeEvent.isComposing || e.keyCode === 229) e.stopPropagation()
            }}
            placeholder="Ask about sales, stock, or customers..."
          />
          <Button type="submit" aria-label="Send message">
            <Send className="size-4" aria-hidden="true" />
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
