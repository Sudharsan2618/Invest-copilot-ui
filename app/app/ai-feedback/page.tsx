"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Bot, TrendingUp, TrendingDown, AlertTriangle, CheckCircle2, BookOpen, RefreshCw } from "lucide-react"

const overallScore = 72
const categories = [
  { name: "Diversification", score: 85, status: "good" as const, insight: "Your portfolio covers 4 sectors. Consider adding pharma or FMCG for better spread." },
  { name: "Risk Management", score: 60, status: "warning" as const, insight: "No stop-losses set on any holdings. 35% of portfolio in a single sector (Banking)." },
  { name: "Decision Quality", score: 75, status: "good" as const, insight: "Average journal score of 75/100. Your reasoning has improved over the last 2 weeks." },
  { name: "Emotional Discipline", score: 55, status: "warning" as const, insight: "2 out of 5 recent trades were driven by anxiety or FOMO. Practice waiting before acting." },
  { name: "Learning Progress", score: 80, status: "good" as const, insight: "8 of 24 topics completed. You're on track. Focus on Fixed Income next." },
]

const actionItems = [
  { priority: "High", text: "Set stop-loss levels for HDFCBANK and RELIANCE positions", category: "Risk" },
  { priority: "Medium", text: "Diversify into pharma sector - consider Sun Pharma or Dr Reddy's", category: "Portfolio" },
  { priority: "Medium", text: "Complete the 'Reading a Balance Sheet' lesson before your next trade", category: "Learning" },
  { priority: "Low", text: "Review your emotional tags - try journaling emotions before trading", category: "Behavior" },
]

const weeklyTrend = [
  { week: "Week 1", score: 58 },
  { week: "Week 2", score: 63 },
  { week: "Week 3", score: 68 },
  { week: "Week 4", score: 72 },
]

export default function AIFeedbackPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">AI Feedback</h1>
          <p className="text-muted-foreground">Comprehensive AI analysis of your investing behavior and decisions.</p>
        </div>
        <Button variant="outline">
          <RefreshCw className="mr-1 h-4 w-4" /> Refresh Analysis
        </Button>
      </div>

      {/* Overall Score */}
      <Card className="border-primary/20 bg-gradient-to-r from-secondary to-card">
        <CardContent className="flex flex-col items-center gap-6 p-8 sm:flex-row">
          <div className="relative flex h-32 w-32 shrink-0 items-center justify-center">
            <svg className="h-32 w-32 -rotate-90" viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" fill="none" stroke="var(--border)" strokeWidth="10" />
              <circle cx="60" cy="60" r="50" fill="none" stroke="var(--primary)" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${overallScore * 3.14} 314`} />
            </svg>
            <div className="absolute flex flex-col items-center">
              <span className="font-mono text-3xl font-bold text-primary">{overallScore}</span>
              <span className="text-xs text-muted-foreground">out of 100</span>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-foreground">Your Investor Score</h2>
            <p className="mt-1 text-muted-foreground leading-relaxed">
              {"You're making solid progress! Your decision quality is above average, but emotional discipline and risk management need attention. Focus on setting stop-losses and journaling before trades."}
            </p>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-[var(--success)]">
                <TrendingUp className="h-4 w-4" /> +14 pts from last month
              </div>
              <Badge variant="secondary">Level: Intermediate Learner</Badge>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Category Breakdown */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat) => (
          <Card key={cat.name}>
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm">{cat.name}</CardTitle>
                {cat.status === "good" ? (
                  <CheckCircle2 className="h-4 w-4 text-[var(--success)]" />
                ) : (
                  <AlertTriangle className="h-4 w-4 text-[var(--warning)]" />
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between text-sm">
                <span className="font-mono text-2xl font-bold text-foreground">{cat.score}</span>
                <span className="text-xs text-muted-foreground">/100</span>
              </div>
              <Progress value={cat.score} className="my-2" />
              <p className="text-xs text-muted-foreground leading-relaxed">{cat.insight}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Action Items */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <Bot className="h-5 w-5 text-primary" /> Recommended Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            {actionItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-border p-3">
                <Badge variant={item.priority === "High" ? "destructive" : item.priority === "Medium" ? "default" : "outline"} className="mt-0.5 shrink-0 text-xs">
                  {item.priority}
                </Badge>
                <div className="flex-1">
                  <p className="text-sm text-foreground">{item.text}</p>
                  <span className="text-xs text-muted-foreground">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Weekly Trend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Score Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between gap-4">
            {weeklyTrend.map((w) => (
              <div key={w.week} className="flex flex-1 flex-col items-center gap-2">
                <span className="font-mono text-sm font-bold text-foreground">{w.score}</span>
                <div className="relative h-32 w-full rounded-t-md bg-muted">
                  <div className="absolute bottom-0 w-full rounded-t-md bg-primary" style={{ height: `${w.score}%` }} />
                </div>
                <span className="text-xs text-muted-foreground">{w.week}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
