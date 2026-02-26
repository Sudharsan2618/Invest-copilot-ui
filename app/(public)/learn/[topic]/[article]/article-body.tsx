"use client"

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb, CheckCircle2, BookOpen } from "lucide-react"
import {
  Analogy,
  ConceptImage,
  FormulaBox,
  IndianContext,
  ComparisonChart,
  ComparisonTable,
  DosDonts,
  CaseStudy,
  KeyConcept,
  JargonTooltip,
  QuizBlock,
  InteractiveScenario,
  PrerequisiteGate,
  EmbeddedCalculatorLink,
} from "@/components/learn"
import type { QuizQuestion } from "@/components/learn"

// ─── MDX component mapping ────────────────────────────────────────
const mdxComponents = {
  Analogy,
  ConceptImage,
  FormulaBox,
  IndianContext,
  ComparisonChart,
  ComparisonTable,
  DosDonts,
  CaseStudy,
  KeyConcept,
  JargonTooltip,
  QuizBlock,
  InteractiveScenario,
  PrerequisiteGate,
  EmbeddedCalculatorLink,
  // Override default HTML elements for consistent styling
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-8 text-xl font-semibold text-foreground" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 text-lg font-semibold text-foreground" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-3 leading-relaxed text-muted-foreground" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="mt-3 flex flex-col gap-2 pl-6 list-disc text-muted-foreground" {...props} />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol className="mt-3 flex flex-col gap-2 pl-6 list-decimal text-muted-foreground" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="leading-relaxed" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props: React.HTMLAttributes<HTMLElement>) => (
    <em className="italic" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote className="mt-4 border-l-4 border-primary/30 pl-4 italic text-muted-foreground" {...props} />
  ),
}

// ─── Types ─────────────────────────────────────────────────────────
interface ArticleBodyProps {
  articleSlug: string
  topicSlug: string
  mdxSource: MDXRemoteSerializeResult | null
  keyTakeaways: string[]
  quiz: QuizQuestion[]
  prerequisites?: string[] // article slugs
  prevArticle: { slug: string; title: string } | null
  nextArticle: { slug: string; title: string } | null
}

// ─── Component ─────────────────────────────────────────────────────
export function ArticleBody({
  articleSlug,
  topicSlug,
  mdxSource,
  keyTakeaways,
  quiz,
  prerequisites,
  prevArticle,
  nextArticle,
}: ArticleBodyProps) {
  if (mdxSource) {
    return (
      <>
        {/* Prerequisites */}
        {prerequisites && prerequisites.length > 0 && (
          <PrerequisiteGate
            articles={prerequisites.map((slug) => ({
              title: slug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
              href: `/learn/${topicSlug}/${slug}`,
            }))}
          />
        )}

        {/* Key Takeaways */}
        <Card className="border-primary/20 bg-primary/5">
          <CardContent className="p-5">
            <div className="mb-3 flex items-center gap-2 text-primary">
              <Lightbulb className="h-5 w-5" />
              <span className="text-sm font-semibold uppercase tracking-wide">
                Key Takeaways
              </span>
            </div>
            <ul className="flex flex-col gap-2">
              {keyTakeaways.map((takeaway, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {takeaway}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* MDX Content — server-compiled, client-rendered */}
        <div className="mt-8 max-w-none">
          <MDXRemote {...mdxSource} components={mdxComponents} />
        </div>

        {/* Interactive Quiz */}
        {quiz && quiz.length > 0 && <QuizBlock questions={quiz} />}
      </>
    )
  }

  // ─── Fallback for articles without MDX content ───────────────────
  return (
    <>
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-5">
          <div className="mb-3 flex items-center gap-2 text-primary">
            <Lightbulb className="h-5 w-5" />
            <span className="text-sm font-semibold uppercase tracking-wide">
              Key Takeaways
            </span>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="flex items-start gap-2 text-sm text-foreground">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              This article is being prepared with rich, interactive content
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-8 max-w-none">
        <div className="rounded-xl border border-border bg-muted/30 p-8 text-center">
          <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50" />
          <h3 className="mt-4 text-lg font-semibold text-foreground">
            Content Coming Soon
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
            This article is being written with interactive examples, quizzes,
            and visual explanations tailored for Indian investors. Check
            back soon!
          </p>
        </div>
      </div>
    </>
  )
}
