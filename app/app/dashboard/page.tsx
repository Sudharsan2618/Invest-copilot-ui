"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, TrendingDown, BookOpen, Target, Award, Flame, ArrowRight, IndianRupee, Bot } from "lucide-react"

const portfolioValue = 1047523
const investedAmount = 1000000
const pnl = portfolioValue - investedAmount
const pnlPercent = ((pnl / investedAmount) * 100).toFixed(2)

const quickStats = [
  { label: "Portfolio Value", value: `${(portfolioValue / 100000).toFixed(2)}L`, icon: IndianRupee, change: `+${pnlPercent}%`, positive: true },
  { label: "Topics Completed", value: "8/24", icon: BookOpen, change: "33%", positive: true },
  { label: "Current Streak", value: "12 days", icon: Flame, change: "+3", positive: true },
  { label: "AI Score", value: "72/100", icon: Bot, change: "+5", positive: true },
]

const recentHoldings = [
  { name: "HDFC Bank", ticker: "HDFCBANK", qty: 10, price: 1650, change: 2.3 },
  { name: "Infosys", ticker: "INFY", qty: 15, price: 1480, change: -1.1 },
  { name: "Reliance", ticker: "RELIANCE", qty: 5, price: 2890, change: 0.8 },
  { name: "TCS", ticker: "TCS", qty: 8, price: 3520, change: 1.5 },
]

const pendingLessons = [
  { title: "Understanding Mutual Fund NAV", topic: "Mutual Funds", difficulty: "Beginner" },
  { title: "How to Read a Balance Sheet", topic: "Stocks", difficulty: "Intermediate" },
  { title: "SIP vs Lumpsum Calculator", topic: "Tools", difficulty: "Beginner" },
]

const recentAchievements = [
  { title: "First Trade", desc: "Completed your first simulated trade", icon: "🏅" },
  { title: "Week Warrior", desc: "7-day learning streak", icon: "🔥" },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back, Aarav. {"Here's"} your learning overview.</p>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quickStats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-center gap-4 p-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">{stat.label}</p>
                <p className="font-mono text-xl font-bold text-foreground">{stat.value}</p>
                <p className={`text-xs ${stat.positive ? "text-[var(--success)]" : "text-destructive"}`}>
                  {stat.positive ? <TrendingUp className="mr-1 inline h-3 w-3" /> : <TrendingDown className="mr-1 inline h-3 w-3" />}
                  {stat.change}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Portfolio Summary */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-base">Portfolio Holdings</CardTitle>
            <Link href="/app/simulator"><Button variant="ghost" size="sm">View All <ArrowRight className="ml-1 h-4 w-4" /></Button></Link>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-5 text-xs font-medium text-muted-foreground">
                <span className="col-span-2">Stock</span>
                <span className="text-right">Qty</span>
                <span className="text-right">Price</span>
                <span className="text-right">Change</span>
              </div>
              {recentHoldings.map((h) => (
                <div key={h.ticker} className="grid grid-cols-5 items-center text-sm">
                  <div className="col-span-2">
                    <p className="font-medium text-foreground">{h.name}</p>
                    <p className="font-mono text-xs text-muted-foreground">{h.ticker}</p>
                  </div>
                  <p className="text-right font-mono text-foreground">{h.qty}</p>
                  <p className="text-right font-mono text-foreground">{h.price.toLocaleString("en-IN")}</p>
                  <p className={`text-right font-mono ${h.change >= 0 ? "text-[var(--success)]" : "text-destructive"}`}>
                    {h.change >= 0 ? "+" : ""}{h.change}%
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-lg bg-muted p-3">
              <span className="text-sm text-muted-foreground">Total P&L</span>
              <span className="font-mono font-bold text-[var(--success)]">+{(pnl / 100).toFixed(0)} ({pnlPercent}%)</span>
            </div>
          </CardContent>
        </Card>

        {/* Learning Progress */}
        <div className="flex flex-col gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Learning Progress</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Overall</span>
                  <span className="font-mono font-medium text-foreground">33%</span>
                </div>
                <Progress value={33} className="mt-2" />
              </div>
              <div className="flex flex-col gap-2">
                {pendingLessons.map((l) => (
                  <Link key={l.title} href="/app/dashboard" className="flex items-start gap-2 rounded-lg border border-border p-3 text-sm transition-colors hover:bg-muted">
                    <BookOpen className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="font-medium text-foreground">{l.title}</p>
                      <p className="text-xs text-muted-foreground">{l.topic} &middot; {l.difficulty}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Recent Achievements</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3">
              {recentAchievements.map((a) => (
                <div key={a.title} className="flex items-center gap-3">
                  <span className="text-2xl">{a.icon}</span>
                  <div>
                    <p className="text-sm font-medium text-foreground">{a.title}</p>
                    <p className="text-xs text-muted-foreground">{a.desc}</p>
                  </div>
                </div>
              ))}
              <Link href="/app/achievements"><Button variant="ghost" size="sm" className="mt-1 w-full">View All <ArrowRight className="ml-1 h-4 w-4" /></Button></Link>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* AI Nudge Banner */}
      <Card className="border-primary/30 bg-secondary">
        <CardContent className="flex flex-col items-start gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
              <Bot className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground">AI Insight</p>
              <p className="text-sm text-muted-foreground">{"Your portfolio is heavily weighted in banking. Consider diversifying into IT or pharma sectors."}</p>
            </div>
          </div>
          <Link href="/app/ai-feedback">
            <Button size="sm">Get Full Analysis</Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
