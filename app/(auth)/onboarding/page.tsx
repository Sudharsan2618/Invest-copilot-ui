"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { TrendingUp, ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react"

const experienceLevels = [
  { value: "none", label: "Complete beginner", desc: "Never invested before" },
  { value: "basic", label: "Some knowledge", desc: "I know basics but haven't invested" },
  { value: "beginner", label: "Beginner investor", desc: "I have some investments" },
  { value: "intermediate", label: "Intermediate", desc: "I invest regularly" },
]

const goals = [
  "Understand investment basics",
  "Build a long-term portfolio",
  "Learn about mutual funds & SIPs",
  "Practice stock picking",
  "Tax-saving investments (80C, ELSS)",
  "Retirement planning",
]

const riskProfiles = [
  { value: "conservative", label: "Conservative", desc: "I prefer safety over high returns", color: "text-[var(--success)]" },
  { value: "moderate", label: "Moderate", desc: "Balanced risk and return", color: "text-[var(--warning)]" },
  { value: "aggressive", label: "Aggressive", desc: "I can handle volatility for higher returns", color: "text-[var(--destructive)]" },
]

export default function OnboardingPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [experience, setExperience] = useState("")
  const [selectedGoals, setSelectedGoals] = useState<string[]>([])
  const [risk, setRisk] = useState("")
  const [monthlyIncome, setMonthlyIncome] = useState("")

  const steps = [
    { title: "Experience Level", desc: "How familiar are you with investing?" },
    { title: "Your Goals", desc: "What do you want to learn? (Select multiple)" },
    { title: "Risk Profile", desc: "How do you feel about risk?" },
    { title: "Quick Details", desc: "Help us personalize your experience" },
  ]

  function toggleGoal(g: string) {
    setSelectedGoals((prev) => prev.includes(g) ? prev.filter((x) => x !== g) : [...prev, g])
  }

  function handleFinish() {
    router.push("/app/dashboard")
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-lg">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex items-center gap-2 text-primary">
            <TrendingUp className="h-6 w-6" />
            <span className="text-xl font-bold">InvestCopilot</span>
          </div>
          <div className="mb-4 flex items-center justify-center gap-2">
            {steps.map((_, i) => (
              <div key={i} className={`h-2 w-12 rounded-full ${i <= step ? "bg-primary" : "bg-muted"}`} />
            ))}
          </div>
          <CardTitle>{steps[step].title}</CardTitle>
          <CardDescription>{steps[step].desc}</CardDescription>
        </CardHeader>
        <CardContent>
          {step === 0 && (
            <div className="flex flex-col gap-3">
              {experienceLevels.map((lvl) => (
                <button key={lvl.value} onClick={() => setExperience(lvl.value)} className={`flex flex-col items-start rounded-lg border p-4 text-left transition-colors ${experience === lvl.value ? "border-primary bg-secondary" : "border-border hover:bg-muted"}`}>
                  <span className="font-medium text-foreground">{lvl.label}</span>
                  <span className="text-sm text-muted-foreground">{lvl.desc}</span>
                </button>
              ))}
            </div>
          )}
          {step === 1 && (
            <div className="flex flex-wrap gap-2">
              {goals.map((g) => (
                <button key={g} onClick={() => toggleGoal(g)} className={`rounded-full border px-4 py-2 text-sm transition-colors ${selectedGoals.includes(g) ? "border-primary bg-secondary text-primary" : "border-border text-foreground hover:bg-muted"}`}>
                  {selectedGoals.includes(g) && <CheckCircle2 className="mr-1 inline h-3 w-3" />}
                  {g}
                </button>
              ))}
            </div>
          )}
          {step === 2 && (
            <div className="flex flex-col gap-3">
              {riskProfiles.map((r) => (
                <button key={r.value} onClick={() => setRisk(r.value)} className={`flex flex-col items-start rounded-lg border p-4 text-left transition-colors ${risk === r.value ? "border-primary bg-secondary" : "border-border hover:bg-muted"}`}>
                  <span className={`font-medium ${r.color}`}>{r.label}</span>
                  <span className="text-sm text-muted-foreground">{r.desc}</span>
                </button>
              ))}
            </div>
          )}
          {step === 3 && (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="income">Monthly Income Range (optional)</Label>
                <select id="income" value={monthlyIncome} onChange={(e) => setMonthlyIncome(e.target.value)} className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option value="">Select range</option>
                  <option value="below-25k">Below 25,000</option>
                  <option value="25k-50k">25,000 - 50,000</option>
                  <option value="50k-1l">50,000 - 1,00,000</option>
                  <option value="above-1l">Above 1,00,000</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="age">Age (optional)</Label>
                <Input id="age" type="number" placeholder="25" min={18} max={80} />
              </div>
            </div>
          )}
          <div className="mt-6 flex items-center justify-between">
            {step > 0 ? (
              <Button variant="ghost" onClick={() => setStep(step - 1)}>
                <ArrowLeft className="mr-1 h-4 w-4" /> Back
              </Button>
            ) : <div />}
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)}>
                Next <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            ) : (
              <Button onClick={handleFinish}>
                Go to Dashboard <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
