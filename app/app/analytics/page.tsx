"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Calendar, Clock, BarChart3, Target, BookOpen } from "lucide-react"

const performanceData = [
  { month: "Sep", value: 100 },
  { month: "Oct", value: 103 },
  { month: "Nov", value: 98 },
  { month: "Dec", value: 107 },
  { month: "Jan", value: 112 },
  { month: "Feb", value: 104.8 },
]

const tradingStats = [
  { label: "Total Trades", value: "47" },
  { label: "Win Rate", value: "62%" },
  { label: "Avg Holding Period", value: "18 days" },
  { label: "Best Trade", value: "+12.3% (RELIANCE)" },
  { label: "Worst Trade", value: "-8.1% (WIPRO)" },
  { label: "Avg P&L per Trade", value: "+2.4%" },
]

const learningStats = [
  { label: "Topics Completed", value: "8/24" },
  { label: "Articles Read", value: "32" },
  { label: "Quizzes Passed", value: "6/8" },
  { label: "Journal Entries", value: "15" },
  { label: "Tools Used", value: "4/6" },
  { label: "Time Spent Learning", value: "24 hrs" },
]

const monthlyReturns = [
  { month: "Sep 2025", return: 0, benchmark: 0 },
  { month: "Oct 2025", return: 3.0, benchmark: 2.1 },
  { month: "Nov 2025", return: -4.9, benchmark: -3.2 },
  { month: "Dec 2025", return: 9.2, benchmark: 5.8 },
  { month: "Jan 2026", return: 4.7, benchmark: 3.1 },
  { month: "Feb 2026", return: -6.4, benchmark: -4.5 },
]

export default function AnalyticsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Analytics</h1>
        <p className="text-muted-foreground">Track your performance, learning progress, and trading patterns.</p>
      </div>

      <Tabs defaultValue="performance">
        <TabsList>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="behavior">Behavior</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="mt-4 flex flex-col gap-6">
          {/* Portfolio Chart */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Portfolio Value (Indexed to 100)</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-end justify-between gap-2" style={{ height: 200 }}>
                {performanceData.map((d) => (
                  <div key={d.month} className="flex flex-1 flex-col items-center gap-1">
                    <span className="font-mono text-xs text-foreground">{d.value}</span>
                    <div className="relative w-full rounded-t-md bg-muted" style={{ height: 160 }}>
                      <div
                        className={`absolute bottom-0 w-full rounded-t-md ${d.value >= 100 ? "bg-primary" : "bg-destructive"}`}
                        style={{ height: `${Math.max(10, (d.value / 120) * 100)}%` }}
                      />
                    </div>
                    <span className="text-xs text-muted-foreground">{d.month}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-center gap-6 text-sm">
                <span className="flex items-center gap-1 text-[var(--success)]"><TrendingUp className="h-4 w-4" /> +4.8% overall</span>
                <span className="text-muted-foreground">vs Nifty 50: +3.3%</span>
              </div>
            </CardContent>
          </Card>

          {/* Monthly Returns */}
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Monthly Returns vs Benchmark</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs text-muted-foreground">
                      <th className="px-4 py-2 text-left">Month</th>
                      <th className="px-4 py-2 text-right">Your Return</th>
                      <th className="px-4 py-2 text-right">Nifty 50</th>
                      <th className="px-4 py-2 text-right">Alpha</th>
                    </tr>
                  </thead>
                  <tbody>
                    {monthlyReturns.map((m) => {
                      const alpha = (m.return - m.benchmark).toFixed(1)
                      return (
                        <tr key={m.month} className="border-b border-border last:border-0">
                          <td className="px-4 py-2 text-foreground">{m.month}</td>
                          <td className={`px-4 py-2 text-right font-mono ${m.return >= 0 ? "text-[var(--success)]" : "text-destructive"}`}>
                            {m.return >= 0 ? "+" : ""}{m.return}%
                          </td>
                          <td className={`px-4 py-2 text-right font-mono ${m.benchmark >= 0 ? "text-[var(--success)]" : "text-destructive"}`}>
                            {m.benchmark >= 0 ? "+" : ""}{m.benchmark}%
                          </td>
                          <td className={`px-4 py-2 text-right font-mono font-medium ${Number(alpha) >= 0 ? "text-primary" : "text-destructive"}`}>
                            {Number(alpha) >= 0 ? "+" : ""}{alpha}%
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Trading Stats */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {tradingStats.map((s) => (
              <Card key={s.label}>
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="mt-1 font-mono text-lg font-bold text-foreground">{s.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="learning" className="mt-4 flex flex-col gap-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {learningStats.map((s) => (
              <Card key={s.label}>
                <CardContent className="p-4">
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                  <p className="mt-1 font-mono text-lg font-bold text-foreground">{s.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Topic Completion</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {[
                { name: "Stocks & Equity", progress: 80 },
                { name: "Mutual Funds", progress: 60 },
                { name: "Fixed Deposits", progress: 30 },
                { name: "Gold & Commodities", progress: 10 },
                { name: "Tax Planning", progress: 40 },
                { name: "Risk Management", progress: 50 },
              ].map((t) => (
                <div key={t.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{t.name}</span>
                    <span className="font-mono text-muted-foreground">{t.progress}%</span>
                  </div>
                  <div className="mt-1 h-2 w-full rounded-full bg-muted">
                    <div className="h-2 rounded-full bg-primary" style={{ width: `${t.progress}%` }} />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="behavior" className="mt-4 flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Emotional Patterns in Trades</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-4">
                {[
                  { emotion: "Confident", trades: 18, avgReturn: 3.2, color: "bg-[var(--success)]" },
                  { emotion: "Neutral", trades: 12, avgReturn: 1.8, color: "bg-primary" },
                  { emotion: "Anxious", trades: 8, avgReturn: -2.1, color: "bg-[var(--warning)]" },
                  { emotion: "FOMO", trades: 5, avgReturn: -4.5, color: "bg-destructive" },
                  { emotion: "Excited", trades: 4, avgReturn: 0.9, color: "bg-chart-3" },
                ].map((e) => (
                  <div key={e.emotion} className="flex items-center gap-4">
                    <span className="w-24 text-sm text-foreground">{e.emotion}</span>
                    <div className="flex-1">
                      <div className="h-6 w-full rounded-full bg-muted">
                        <div className={`${e.color} flex h-6 items-center justify-end rounded-full px-2`} style={{ width: `${(e.trades / 20) * 100}%` }}>
                          <span className="text-xs font-medium text-primary-foreground">{e.trades}</span>
                        </div>
                      </div>
                    </div>
                    <span className={`w-16 text-right font-mono text-sm ${e.avgReturn >= 0 ? "text-[var(--success)]" : "text-destructive"}`}>
                      {e.avgReturn >= 0 ? "+" : ""}{e.avgReturn}%
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 rounded-lg bg-secondary p-3 text-sm text-muted-foreground">
                Insight: Your confident trades perform best (+3.2% avg). FOMO-driven trades consistently lose money. Practice pausing 24 hours before acting on excitement.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Trading Activity Heatmap</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-1">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
                  <span key={d} className="text-center text-xs text-muted-foreground">{d}</span>
                ))}
                {Array.from({ length: 28 }, (_, i) => {
                  const intensity = [0, 2, 1, 3, 1, 0, 0, 1, 0, 2, 1, 0, 0, 0, 2, 3, 1, 2, 1, 0, 0, 0, 1, 2, 3, 1, 0, 0][i]
                  const bg = intensity === 0 ? "bg-muted" : intensity === 1 ? "bg-primary/20" : intensity === 2 ? "bg-primary/50" : "bg-primary"
                  return <div key={i} className={`aspect-square rounded-sm ${bg}`} />
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
