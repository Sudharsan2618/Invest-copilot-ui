import { MDXRemote } from "next-mdx-remote/rsc"
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
  // Override default HTML elements — optimized for mobile readability
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className="mt-8 mb-3 text-lg sm:text-xl font-semibold text-foreground leading-snug" {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className="mt-6 mb-2 text-base sm:text-lg font-semibold text-foreground leading-snug" {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className="mt-3 text-[15px] leading-[1.75] text-muted-foreground" {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      className="mt-3 flex flex-col gap-1.5 pl-5 list-disc text-muted-foreground"
      {...props}
    />
  ),
  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      className="mt-3 flex flex-col gap-1.5 pl-5 list-decimal text-muted-foreground"
      {...props}
    />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li className="text-[15px] leading-[1.7] pl-0.5" {...props} />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      className="mt-4 border-l-3 border-primary/25 pl-4 text-[15px] italic text-muted-foreground leading-[1.7]"
      {...props}
    />
  ),
  // Make embedded tables in MDX (markdown tables) responsive
  table: (props: React.HTMLAttributes<HTMLTableElement>) => (
    <div className="my-4 overflow-x-auto rounded-xl border border-border/50">
      <table className="w-full text-[13px]" {...props} />
    </div>
  ),
  thead: (props: React.HTMLAttributes<HTMLTableSectionElement>) => (
    <thead className="border-b border-border/40 bg-muted/20" {...props} />
  ),
  th: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-3 py-2 text-left font-medium text-foreground whitespace-nowrap" {...props} />
  ),
  td: (props: React.HTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-3 py-2 text-muted-foreground border-b border-border/20 last:border-0" {...props} />
  ),
  tr: (props: React.HTMLAttributes<HTMLTableRowElement>) => (
    <tr className="border-b border-border/20 last:border-0" {...props} />
  ),
}

// ─── Types ─────────────────────────────────────────────────────────
interface ArticleContentProps {
  mdxSource: string | null
  topicSlug: string
  keyTakeaways: string[]
  quiz: QuizQuestion[]
  prerequisites?: string[]
}

// ─── Server Component ──────────────────────────────────────────────
export async function ArticleContent({
  mdxSource,
  topicSlug,
  keyTakeaways,
  quiz,
  prerequisites,
}: ArticleContentProps) {
  if (mdxSource) {
    return (
      <>
        {/* Prerequisites */}
        {prerequisites && prerequisites.length > 0 && (
          <PrerequisiteGate
            articles={prerequisites.map((slug) => ({
              title: slug
                .replace(/-/g, " ")
                .replace(/\b\w/g, (c) => c.toUpperCase()),
              href: `/learn/${topicSlug}/${slug}`,
            }))}
          />
        )}

        {/* Key Takeaways */}
        <div className="rounded-2xl border border-primary/15 bg-primary/[0.03] px-4 py-4 sm:px-5 sm:py-5">
          <div className="mb-3 flex items-center gap-2 text-primary">
            <Lightbulb className="h-4 w-4 shrink-0" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Key Takeaways
            </span>
          </div>
          <ul className="flex flex-col gap-2.5">
            {keyTakeaways.map((takeaway, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-foreground/85"
              >
                <CheckCircle2 className="mt-[3px] h-3.5 w-3.5 shrink-0 text-primary" />
                {takeaway}
              </li>
            ))}
          </ul>
        </div>

        {/* MDX Content — compiled and rendered on the server */}
        <div className="mt-6 max-w-none">
          <MDXRemote
            source={mdxSource}
            components={mdxComponents}
            options={{ blockJS: false }}
          />
        </div>

        {/* Interactive Quiz */}
        {quiz && quiz.length > 0 && <QuizBlock questions={quiz} />}
      </>
    )
  }

  // ─── Fallback ─────────────────────────────────────────────────────
  return (
    <>
      <div className="rounded-2xl border border-primary/15 bg-primary/[0.03] px-4 py-4 sm:px-5">
        <div className="mb-3 flex items-center gap-2 text-primary">
          <Lightbulb className="h-4 w-4 shrink-0" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Key Takeaways
          </span>
        </div>
        <ul className="flex flex-col gap-2">
          <li className="flex items-start gap-2.5 text-[14px] text-foreground/85">
            <CheckCircle2 className="mt-[3px] h-3.5 w-3.5 shrink-0 text-primary" />
            This article is being prepared with rich, interactive content
          </li>
        </ul>
      </div>

      <div className="mt-6 max-w-none">
        <div className="rounded-2xl border border-border/40 bg-muted/20 p-8 text-center">
          <BookOpen className="mx-auto h-10 w-10 text-muted-foreground/40" />
          <h3 className="mt-4 text-base font-semibold text-foreground">
            Content Coming Soon
          </h3>
          <p className="mx-auto mt-2 max-w-md text-[14px] text-muted-foreground leading-relaxed">
            This article is being written with interactive examples, quizzes,
            and visual explanations tailored for Indian investors.
          </p>
        </div>
      </div>
    </>
  )
}
