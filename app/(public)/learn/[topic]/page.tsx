import { notFound } from "next/navigation"
import Link from "next/link"
import { topics } from "@/lib/mock-data"
import { DifficultyTag, ArticleCard, CTABanner } from "@/components/shared"
import { ChevronRight, Clock } from "lucide-react"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ topic: string }> }): Promise<Metadata> {
  const { topic: slug } = await params
  const topic = topics.find((t) => t.slug === slug)
  return { title: topic?.title || "Topic", description: topic?.description }
}

export function generateStaticParams() {
  return topics.filter(t => t.articles.length > 0).map((t) => ({ topic: t.slug }))
}

export default async function TopicPage({ params }: { params: Promise<{ topic: string }> }) {
  const { topic: slug } = await params
  const topic = topics.find((t) => t.slug === slug)
  if (!topic) notFound()

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:py-10 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-4 sm:mb-6 flex items-center gap-1 text-[13px] text-muted-foreground">
        <Link href="/learn" className="hover:text-foreground shrink-0">Learn</Link>
        <ChevronRight className="h-3 w-3 shrink-0" />
        <span className="text-foreground truncate">{topic.title}</span>
      </nav>

      {/* Topic Hero — compact on mobile */}
      <div className="mb-6 sm:mb-8 rounded-2xl border border-border/60 bg-card px-4 py-5 sm:p-8">
        <DifficultyTag level={topic.difficulty} />
        <h1 className="mt-3 text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
          {topic.title}
        </h1>
        <p className="mt-2 text-[15px] text-muted-foreground leading-relaxed max-w-2xl">
          {topic.description}
        </p>
        <div className="mt-3 sm:mt-4 flex items-center gap-3 text-[13px] text-muted-foreground">
          <div className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {topic.estimatedTime}
          </div>
          <span className="text-border">•</span>
          <span>{topic.articleCount} articles</span>
        </div>
      </div>

      {/* Article List */}
      <div>
        <h2 className="mb-4 text-base sm:text-lg font-semibold text-foreground">Articles</h2>
        <div className="flex flex-col gap-3">
          {topic.articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
      </div>

      {/* Related Topics — below articles on all sizes */}
      <div className="mt-8 rounded-2xl border border-border/50 px-4 py-4 sm:px-5">
        <h3 className="text-sm font-semibold text-foreground">Explore More Topics</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics
            .filter((t) => t.id !== topic.id)
            .slice(0, 6)
            .map((t) => (
              <Link
                key={t.id}
                href={`/learn/${t.slug}`}
                className="rounded-full border border-border px-3 py-1.5 text-[13px] text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
              >
                {t.title}
              </Link>
            ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-6 sm:mt-8">
        <CTABanner
          title="Practice what you learn"
          description="Try these concepts in our virtual simulator."
          buttonText="Open Simulator"
          href="/app/simulator"
        />
      </div>
    </div>
  )
}
