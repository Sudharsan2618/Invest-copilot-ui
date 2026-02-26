"use client"

import { use } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { tools } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import { CTABanner } from "@/components/shared"
import { ChevronRight } from "lucide-react"
import {
  CompoundInterestCalculator,
  RiskScoreCalculator,
  FinancialHealthCalculator,
  GoalPlannerCalculator,
  PortfolioSimulatorPreview,
  SIPPowerCalculator,
} from "@/components/tools"

const calculatorMap: Record<string, React.FC> = {
  "compound-interest": CompoundInterestCalculator,
  "risk-score": RiskScoreCalculator,
  "financial-health": FinancialHealthCalculator,
  "goal-planner": GoalPlannerCalculator,
  "portfolio-simulator": PortfolioSimulatorPreview,
  "sip-power-calculator": SIPPowerCalculator,
}

export default function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const tool = tools.find((t) => t.slug === slug)
  if (!tool) notFound()

  const Calculator = calculatorMap[slug]

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/tools" className="hover:text-foreground">Tools</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground">{tool.title}</span>
      </nav>

      <h1 className="text-3xl font-bold text-foreground">{tool.title}</h1>
      <p className="mt-2 max-w-2xl text-muted-foreground">{tool.description}</p>

      <Card className="mt-8">
        <CardContent className="p-6 lg:p-8">
          {Calculator ? <Calculator /> : <p className="text-muted-foreground">Calculator coming soon.</p>}
        </CardContent>
      </Card>

      <div className="mt-8">
        <CTABanner
          title="Want the full experience?"
          description="Create a free account for the full portfolio simulator with AI feedback."
          buttonText="Try Full Simulator"
          href="/app/simulator"
        />
      </div>
    </div>
  )
}
