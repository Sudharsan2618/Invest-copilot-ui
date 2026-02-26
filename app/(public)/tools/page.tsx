import Link from "next/link"
import { tools } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp, PieChart, Shield, Heart, Target,
} from "lucide-react"
import type { Metadata } from "next"

const iconMap: Record<string, React.ElementType> = {
  TrendingUp, PieChart, Shield, Heart, Target,
}

export const metadata: Metadata = {
  title: "Tools & Calculators",
  description: "Interactive financial calculators for compound interest, risk assessment, financial health, and goal planning.",
}

export default function ToolsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground lg:text-4xl">Tools & Calculators</h1>
        <p className="mt-2 text-lg text-muted-foreground">
          Interactive financial tools to help you plan, analyze, and make better decisions.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {tools.map((tool) => {
          const Icon = iconMap[tool.icon] || TrendingUp
          return (
            <Link key={tool.id} href={`/tools/${tool.slug}`}>
              <Card className="group h-full transition-all hover:border-primary/30 hover:shadow-md">
                <CardContent className="flex gap-4 p-6">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{tool.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tool.description}</p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
