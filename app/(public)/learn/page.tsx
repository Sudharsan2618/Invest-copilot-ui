import { topics } from "@/lib/mock-data"
import { TopicCard } from "@/components/shared"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Learn Investing",
  description: "Browse 17 comprehensive investment topics from beginner to advanced. Start your journey to financial literacy.",
}

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:py-12 lg:px-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground lg:text-4xl tracking-tight">
          Learn Investing
        </h1>
        <p className="mt-2 text-[15px] sm:text-lg text-muted-foreground leading-relaxed">
          17 comprehensive topics to take you from complete beginner to confident investor.
        </p>
      </div>

      {/* Filter Tags */}
      <div className="mb-6 sm:mb-8 flex flex-wrap gap-2">
        {["All", "Beginner", "Intermediate", "Advanced"].map((filter) => (
          <button
            key={filter}
            className={`rounded-full px-4 py-1.5 text-[13px] sm:text-sm font-medium transition-colors ${
              filter === "All"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Topic Grid — single column on mobile */}
      <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics.map((topic) => (
          <TopicCard key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  )
}
