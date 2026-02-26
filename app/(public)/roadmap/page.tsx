"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Circle, Lock } from "lucide-react"

const roadmapPhases = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "completed" as const,
    items: [
      { label: "What is Investing?", done: true },
      { label: "Risk vs Return basics", done: true },
      { label: "Indian market overview (NSE/BSE)", done: true },
      { label: "Basic terminology glossary", done: true },
    ],
  },
  {
    phase: "Phase 2",
    title: "Instruments Deep-Dive",
    status: "current" as const,
    items: [
      { label: "Stocks & Equity", done: true },
      { label: "Mutual Funds & SIPs", done: true },
      { label: "Fixed Deposits & Bonds", done: false },
      { label: "Gold & Commodities", done: false },
    ],
  },
  {
    phase: "Phase 3",
    title: "Strategy & Analysis",
    status: "locked" as const,
    items: [
      { label: "Fundamental Analysis", done: false },
      { label: "Technical Analysis Basics", done: false },
      { label: "Portfolio Construction", done: false },
      { label: "Tax-saving strategies (80C, ELSS)", done: false },
    ],
  },
  {
    phase: "Phase 4",
    title: "Advanced & Practice",
    status: "locked" as const,
    items: [
      { label: "Options & Derivatives intro", done: false },
      { label: "REITs & International investing", done: false },
      { label: "Full portfolio simulation", done: false },
      { label: "AI-graded capstone project", done: false },
    ],
  },
]

export default function RoadmapPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-foreground text-balance">Learning Roadmap</h1>
        <p className="mt-2 text-muted-foreground">Your guided path from beginner to confident investor</p>
      </div>
      <div className="relative">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border md:left-1/2" />
        <div className="flex flex-col gap-8">
          {roadmapPhases.map((phase, i) => (
            <div key={phase.phase} className={`relative flex flex-col md:flex-row ${i % 2 === 1 ? "md:flex-row-reverse" : ""} gap-4 items-start`}>
              <div className="z-10 ml-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 border-primary bg-card md:absolute md:left-1/2 md:-translate-x-1/2 md:ml-0">
                {phase.status === "completed" ? (
                  <CheckCircle2 className="h-4 w-4 text-[var(--success)]" />
                ) : phase.status === "current" ? (
                  <Circle className="h-4 w-4 text-primary" />
                ) : (
                  <Lock className="h-3 w-3 text-muted-foreground" />
                )}
              </div>
              <div className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "" : "md:ml-auto"}`}>
                <Card className={phase.status === "locked" ? "opacity-60" : ""}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <Badge variant={phase.status === "completed" ? "default" : phase.status === "current" ? "secondary" : "outline"}>
                        {phase.phase}
                      </Badge>
                      <span className="text-xs capitalize text-muted-foreground">{phase.status}</span>
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-col gap-2">
                      {phase.items.map((item) => (
                        <li key={item.label} className="flex items-center gap-2 text-sm">
                          {item.done ? (
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--success)]" />
                          ) : (
                            <Circle className="h-4 w-4 shrink-0 text-muted-foreground" />
                          )}
                          <span className={item.done ? "text-muted-foreground line-through" : "text-foreground"}>{item.label}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link href="/login" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
          Start Your Journey
        </Link>
      </div>
    </main>
  )
}
