import { notFound } from "next/navigation"
import Link from "next/link"
import { topics } from "@/lib/mock-data"
import { DifficultyTag, CTABanner } from "@/components/shared"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronRight,
  Clock,
  ChevronLeft,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"
import { getArticle } from "@/lib/mdx"
import { ArticleContent } from "./article-content"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ topic: string; article: string }>
}): Promise<Metadata> {
  const { topic: topicSlug, article: articleSlug } = await params
  const topic = topics.find((t) => t.slug === topicSlug)
  const article = topic?.articles.find((a) => a.slug === articleSlug)
  return {
    title: article?.title || "Article",
    description: `Learn about ${article?.title} in our ${topic?.title} module.`,
  }
}

export function generateStaticParams() {
  const params: { topic: string; article: string }[] = []
  topics.forEach((t) => {
    t.articles.forEach((a) => {
      params.push({ topic: t.slug, article: a.slug })
    })
  })
  return params
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ topic: string; article: string }>
}) {
  const { topic: topicSlug, article: articleSlug } = await params
  const topic = topics.find((t) => t.slug === topicSlug)
  if (!topic) notFound()
  const articleIndex = topic.articles.findIndex(
    (a) => a.slug === articleSlug
  )
  const article = topic.articles[articleIndex]
  if (!article) notFound()

  const prevArticle =
    articleIndex > 0 ? topic.articles[articleIndex - 1] : null
  const nextArticle =
    articleIndex < topic.articles.length - 1
      ? topic.articles[articleIndex + 1]
      : null

  // ─── Load MDX content from file system ──────────────────────────
  const mdxArticle = getArticle(topicSlug, articleSlug)

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:py-10 lg:px-8">
      {/* Breadcrumb — compact on mobile */}
      <nav className="mb-4 sm:mb-6 flex items-center gap-1 text-[13px] text-muted-foreground overflow-x-auto">
        <Link href="/learn" className="hover:text-foreground shrink-0">
          Learn
        </Link>
        <ChevronRight className="h-3 w-3 shrink-0" />
        <Link
          href={`/learn/${topic.slug}`}
          className="hover:text-foreground shrink-0"
        >
          {topic.title}
        </Link>
        <ChevronRight className="h-3 w-3 shrink-0" />
        <span className="truncate text-foreground">{article.title}</span>
      </nav>

      {/* Main Content — full width, clean article layout */}
      <article className="min-w-0">
        {/* Metadata — compact pills */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <DifficultyTag level={article.difficulty} />
          <div className="flex items-center gap-1 text-[13px] text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime} read
          </div>
        </div>

        {/* Title — responsive sizing */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-foreground tracking-tight">
          {article.title}
        </h1>

        {/* MDX Content — server-rendered */}
        <div className="mt-5 sm:mt-6">
          <ArticleContent
            mdxSource={mdxArticle?.content || null}
            topicSlug={topicSlug}
            keyTakeaways={
              mdxArticle?.frontmatter.keyTakeaways || [
                "This article is being prepared with detailed content",
              ]
            }
            quiz={mdxArticle?.frontmatter.quiz || []}
            prerequisites={mdxArticle?.frontmatter.prerequisites}
          />
        </div>

        {/* Navigation — full width buttons on mobile */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {prevArticle ? (
            <Link
              href={`/learn/${topic.slug}/${prevArticle.slug}`}
              className="w-full sm:w-auto"
            >
              <Button variant="outline" className="gap-2 w-full sm:w-auto rounded-xl h-11">
                <ChevronLeft className="h-4 w-4" />
                <span className="truncate">{prevArticle.title}</span>
              </Button>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
          {nextArticle ? (
            <Link
              href={`/learn/${topic.slug}/${nextArticle.slug}`}
              className="w-full sm:w-auto"
            >
              <Button variant="outline" className="gap-2 w-full sm:w-auto rounded-xl h-11">
                <span className="truncate">{nextArticle.title}</span>
                <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          ) : (
            <div className="hidden sm:block" />
          )}
        </div>

        {/* Related Articles — shows on mobile (replaces hidden sidebar) */}
        <div className="mt-8 rounded-2xl border border-border/50 px-4 py-4 sm:px-5">
          <h3 className="text-sm font-semibold text-foreground">
            Continue Learning
          </h3>
          <ul className="mt-3 flex flex-col gap-2">
            {topic.articles
              .filter((a) => a.id !== article.id)
              .slice(0, 4)
              .map((a) => (
                <li key={a.id}>
                  <Link
                    href={`/learn/${topic.slug}/${a.slug}`}
                    className="flex items-center gap-2 text-[14px] text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 shrink-0" />
                    {a.title}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
      </article>

      {/* Bottom CTA */}
      <div className="mt-8 sm:mt-12">
        <CTABanner
          title="Practice this concept in our simulator"
          description="Apply what you just learned with virtual money and get AI feedback."
        />
      </div>
    </div>
  )
}
