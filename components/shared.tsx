import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import type { Difficulty, Topic } from "@/lib/mock-data"
import {
  Coins, Wallet, TrendingUp, PieChart, BarChart3, Shield, Brain,
  Target, Building2, Calculator, Globe, Newspaper, Briefcase,
  Map, Wrench, AlertTriangle, Bot, ArrowRight,
} from "lucide-react"

const iconMap: Record<string, React.ElementType> = {
  Coins, Wallet, TrendingUp, PieChart, BarChart3, Shield, Brain,
  Target, Building2, Calculator, Globe, Newspaper, Briefcase,
  Map, Wrench, AlertTriangle, Bot,
}

export function DifficultyTag({ level }: { level: Difficulty }) {
  const config = {
    beginner: { label: "Beginner", className: "bg-[#24A148]/10 text-[#24A148] border-[#24A148]/20" },
    intermediate: { label: "Intermediate", className: "bg-[#F1C21B]/10 text-[#A68307] border-[#F1C21B]/20" },
    advanced: { label: "Advanced", className: "bg-[#DA1E28]/10 text-[#DA1E28] border-[#DA1E28]/20" },
  }
  const { label, className } = config[level]
  return <Badge variant="outline" className={`text-[11px] ${className}`}>{label}</Badge>
}

export function ReadingTime({ time }: { time: string }) {
  return <span className="text-[12px] text-muted-foreground">{time} read</span>
}

export function TopicCard({ topic }: { topic: Topic }) {
  const Icon = iconMap[topic.icon] || Coins
  return (
    <Link href={`/learn/${topic.slug}`}>
      <Card className="group h-full transition-all hover:border-primary/30 hover:shadow-md active:scale-[0.99]">
        <CardContent className="flex flex-col gap-3 p-4 sm:p-6">
          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
          </div>
          <div>
            <h3 className="text-[15px] sm:text-base font-semibold text-foreground">{topic.title}</h3>
            <p className="mt-1 line-clamp-2 text-[13px] sm:text-sm leading-relaxed text-muted-foreground">{topic.description}</p>
          </div>
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-1">
            <DifficultyTag level={topic.difficulty} />
            <span className="text-[12px] text-muted-foreground">{topic.articleCount} articles</span>
            <span className="text-[12px] text-muted-foreground">{topic.estimatedTime}</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export function ArticleCard({ article }: { article: { slug: string; title: string; difficulty: Difficulty; readTime: string; topicSlug: string } }) {
  return (
    <Link href={`/learn/${article.topicSlug}/${article.slug}`}>
      <div className="group flex items-center justify-between rounded-xl border border-border/60 bg-card px-4 py-3.5 transition-all hover:border-primary/30 active:bg-muted/30">
        <div className="flex-1 min-w-0">
          <h4 className="text-[14px] sm:text-[15px] font-medium text-foreground group-hover:text-primary transition-colors leading-snug">
            {article.title}
          </h4>
          <div className="mt-1.5 flex items-center gap-2">
            <DifficultyTag level={article.difficulty} />
            <ReadingTime time={article.readTime} />
          </div>
        </div>
        <ArrowRight className="h-4 w-4 shrink-0 ml-3 text-muted-foreground/40 transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
      </div>
    </Link>
  )
}

export function CTABanner({
  title = "Ready to practice? Try our AI simulator",
  description = "Create a free account and start investing with virtual money.",
  buttonText = "Create Free Account",
  href = "/auth/signup",
}: {
  title?: string
  description?: string
  buttonText?: string
  href?: string
}) {
  return (
    <div className="rounded-2xl bg-primary px-5 py-6 sm:p-8 text-center text-primary-foreground">
      <h3 className="text-lg sm:text-xl font-bold">{title}</h3>
      <p className="mx-auto mt-2 max-w-lg text-[13px] sm:text-sm text-primary-foreground/80 leading-relaxed">{description}</p>
      <Link
        href={href}
        className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-primary-foreground px-6 text-sm font-medium text-primary transition-opacity hover:opacity-90 active:opacity-80"
      >
        {buttonText}
      </Link>
    </div>
  )
}
