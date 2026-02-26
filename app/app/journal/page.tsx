"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Plus, BookOpen, TrendingUp, TrendingDown, Calendar, Tag, ChevronDown, ChevronUp } from "lucide-react"

const journalEntries = [
  {
    id: 1, date: "2026-02-24", type: "BUY" as const, ticker: "HDFCBANK", price: 1640,
    reasoning: "Strong Q3 results with NIM expansion. Credit quality stable. Banking sector expected to benefit from credit growth cycle. Technical breakout above 1620 resistance.",
    emotion: "Confident",
    lessonTag: "Fundamental Analysis",
    aiScore: 78,
    aiComment: "Good analysis of fundamentals. Consider also evaluating the impact of potential rate cuts by RBI on banking margins.",
  },
  {
    id: 2, date: "2026-02-23", type: "SELL" as const, ticker: "WIPRO", price: 415,
    reasoning: "Weak guidance for next quarter. IT sector facing headwinds from reduced US spending. Want to reallocate to banking which has better near-term outlook.",
    emotion: "Anxious",
    lessonTag: "Sector Rotation",
    aiScore: 65,
    aiComment: "Reasonable sector rotation logic, but selling after a dip may have locked in losses. Consider setting stop-losses in advance rather than reactive selling.",
  },
  {
    id: 3, date: "2026-02-22", type: "BUY" as const, ticker: "RELIANCE", price: 2860,
    reasoning: "Diversification play. Reliance has exposure to retail, telecom, and energy. Jio platform continues to grow subscribers. Long-term hold thesis.",
    emotion: "Neutral",
    lessonTag: "Diversification",
    aiScore: 82,
    aiComment: "Excellent diversification rationale. The multi-sector exposure thesis is sound. Consider defining specific price targets and review timelines.",
  },
]

export default function JournalPage() {
  const [expanded, setExpanded] = useState<number | null>(1)
  const [showNew, setShowNew] = useState(false)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Decision Journal</h1>
          <p className="text-muted-foreground">Log your investment decisions and get AI feedback on your reasoning.</p>
        </div>
        <Button onClick={() => setShowNew(!showNew)}>
          <Plus className="mr-1 h-4 w-4" /> New Entry
        </Button>
      </div>

      {showNew && (
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="text-base">New Journal Entry</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="grid gap-4 sm:grid-cols-3">
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">Action</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                  <option>BUY</option>
                  <option>SELL</option>
                  <option>HOLD</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">Stock Ticker</label>
                <Input placeholder="e.g. HDFCBANK" />
              </div>
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">Price</label>
                <Input type="number" placeholder="1650" />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs text-muted-foreground">Your Reasoning</label>
              <Textarea placeholder="Why are you making this decision? What analysis supports it?" rows={4} />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">Emotion / Feeling</label>
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 text-sm">
                  <option>Confident</option>
                  <option>Neutral</option>
                  <option>Anxious</option>
                  <option>Excited</option>
                  <option>FOMO</option>
                  <option>Fearful</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs text-muted-foreground">Lesson/Topic Tag</label>
                <Input placeholder="e.g. Fundamental Analysis" />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowNew(false)}>Cancel</Button>
              <Button onClick={() => setShowNew(false)}>Save & Get AI Feedback</Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="flex items-center gap-4 text-sm text-muted-foreground">
        <span>{journalEntries.length} entries</span>
        <span className="text-border">|</span>
        <span>Avg AI Score: {Math.round(journalEntries.reduce((s, e) => s + e.aiScore, 0) / journalEntries.length)}/100</span>
      </div>

      <div className="flex flex-col gap-4">
        {journalEntries.map((entry) => (
          <Card key={entry.id} className="overflow-hidden">
            <button
              onClick={() => setExpanded(expanded === entry.id ? null : entry.id)}
              className="flex w-full items-center justify-between p-4 text-left hover:bg-muted/50"
            >
              <div className="flex items-center gap-3">
                <Badge variant={entry.type === "BUY" ? "default" : "destructive"} className="text-xs">{entry.type}</Badge>
                <span className="font-mono font-medium text-foreground">{entry.ticker}</span>
                <span className="text-sm text-muted-foreground">@ {entry.price.toLocaleString("en-IN")}</span>
                <Badge variant="outline" className="hidden text-xs sm:inline-flex">
                  <Tag className="mr-1 h-3 w-3" />{entry.lessonTag}
                </Badge>
              </div>
              <div className="flex items-center gap-3">
                <div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${entry.aiScore >= 75 ? "bg-[var(--success)]/10 text-[var(--success)]" : entry.aiScore >= 50 ? "bg-[var(--warning)]/10 text-[var(--warning)]" : "bg-destructive/10 text-destructive"}`}>
                  {entry.aiScore}
                </div>
                <span className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />{entry.date}
                </span>
                {expanded === entry.id ? <ChevronUp className="h-4 w-4 text-muted-foreground" /> : <ChevronDown className="h-4 w-4 text-muted-foreground" />}
              </div>
            </button>
            {expanded === entry.id && (
              <CardContent className="border-t border-border pt-4">
                <div className="grid gap-6 lg:grid-cols-2">
                  <div>
                    <h4 className="mb-2 text-xs font-medium text-muted-foreground uppercase">Your Reasoning</h4>
                    <p className="text-sm text-foreground leading-relaxed">{entry.reasoning}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">Emotion: {entry.emotion}</Badge>
                    </div>
                  </div>
                  <div className="rounded-lg bg-secondary p-4">
                    <h4 className="mb-2 flex items-center gap-1 text-xs font-medium text-primary uppercase">
                      <BookOpen className="h-3 w-3" /> AI Feedback
                    </h4>
                    <p className="text-sm text-foreground leading-relaxed">{entry.aiComment}</p>
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">Decision Quality Score</span>
                        <span className="font-mono font-bold text-primary">{entry.aiScore}/100</span>
                      </div>
                      <div className="mt-1 h-2 w-full rounded-full bg-muted">
                        <div className="h-2 rounded-full bg-primary" style={{ width: `${entry.aiScore}%` }} />
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>
        ))}
      </div>
    </div>
  )
}
