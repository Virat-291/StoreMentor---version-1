import { PageHeader } from "@/components/page-header"
import { MentorChat } from "@/components/ai-mentor/mentor-chat"

export default function AiMentorPage() {
  return (
    <div>
      <PageHeader
        title="AI Mentor"
        description="Ask questions about your business. Replies are sample responses until the AI backend is connected."
      />
      <MentorChat />
    </div>
  )
}
