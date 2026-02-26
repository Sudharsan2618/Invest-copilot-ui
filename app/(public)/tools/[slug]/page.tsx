"use client"

import { useState } from "react"
import { notFound } from "next/navigation"
import Link from "next/link"
import { use } from "react"
import { tools } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { CTABanner } from "@/components/shared"
import { ChevronRight, ArrowRight } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from "recharts"

function CompoundInterestCalculator() {
  const [principal, setPrincipal] = useState(100000)
  const [monthly, setMonthly] = useState(5000)
  const [rate, setRate] = useState(12)
  const [years, setYears] = useState(20)

  const data = Array.from({ length: years + 1 }, (_, i) => {
    const r = rate / 100 / 12
    const n = i * 12
    const fvPrincipal = principal * Math.pow(1 + r, n)
    const fvSIP = monthly * ((Math.pow(1 + r, n) - 1) / r)
    const total = Math.round(fvPrincipal + fvSIP)
    const invested = principal + monthly * n
    return { year: i, total, invested }
  })

  const finalData = data[data.length - 1]

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-6">
        <div>
          <Label>Initial Investment ({'\u20B9'})</Label>
          <Input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} className="mt-1" />
        </div>
        <div>
          <Label>Monthly Contribution ({'\u20B9'})</Label>
          <Input type="number" value={monthly} onChange={(e) => setMonthly(Number(e.target.value))} className="mt-1" />
        </div>
        <div>
          <Label>Expected Annual Return: {rate}%</Label>
          <Slider value={[rate]} onValueChange={(v) => setRate(v[0])} min={1} max={30} step={0.5} className="mt-2" />
        </div>
        <div>
          <Label>Time Period: {years} years</Label>
          <Slider value={[years]} onValueChange={(v) => setYears(v[0])} min={1} max={40} step={1} className="mt-2" />
        </div>

        <div className="grid grid-cols-3 gap-4 rounded-xl border border-border bg-muted/50 p-4">
          <div>
            <p className="text-xs text-muted-foreground">Future Value</p>
            <p className="font-mono text-lg font-bold text-[#24A148]">{'\u20B9'}{finalData.total.toLocaleString("en-IN")}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Total Invested</p>
            <p className="font-mono text-lg font-bold text-foreground">{'\u20B9'}{finalData.invested.toLocaleString("en-IN")}</p>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Interest Earned</p>
            <p className="font-mono text-lg font-bold text-primary">{'\u20B9'}{(finalData.total - finalData.invested).toLocaleString("en-IN")}</p>
          </div>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="year" label={{ value: "Years", position: "insideBottom", offset: -5 }} />
            <YAxis tickFormatter={(v: number) => `${'\u20B9'}${(v / 100000).toFixed(0)}L`} />
            <Tooltip formatter={(value: number) => `${'\u20B9'}${value.toLocaleString("en-IN")}`} />
            <Area type="monotone" dataKey="invested" stackId="1" stroke="var(--border)" fill="var(--muted)" name="Invested" />
            <Area type="monotone" dataKey="total" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.15} name="Total Value" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function RiskScoreCalculator() {
  const [score, setScore] = useState<number | null>(null)
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const questions = [
    { q: "How long do you plan to invest?", options: ["Less than 1 year", "1-3 years", "3-7 years", "7+ years"] },
    { q: "How would you react to a 20% portfolio drop?", options: ["Sell everything", "Sell some", "Hold", "Buy more"] },
    { q: "What is your primary investment goal?", options: ["Capital preservation", "Steady income", "Balanced growth", "Aggressive growth"] },
    { q: "How much investment experience do you have?", options: ["None", "Some basic knowledge", "Moderate experience", "Expert"] },
    { q: "What percentage of savings would you invest?", options: ["Under 10%", "10-25%", "25-50%", "Over 50%"] },
  ]

  const handleAnswer = (qIdx: number, aIdx: number) => {
    setAnswers(prev => ({ ...prev, [qIdx]: aIdx }))
  }

  const calculateScore = () => {
    const total = Object.values(answers).reduce((sum, v) => sum + v, 0)
    setScore(Math.round((total / (questions.length * 3)) * 100))
  }

  const profile = score !== null
    ? score < 33 ? "Conservative" : score < 66 ? "Moderate" : "Aggressive"
    : null

  return (
    <div>
      {score === null ? (
        <div className="flex flex-col gap-6">
          {questions.map((q, qIdx) => (
            <div key={qIdx}>
              <p className="text-sm font-medium text-foreground">{qIdx + 1}. {q.q}</p>
              <div className="mt-2 grid grid-cols-2 gap-2">
                {q.options.map((opt, aIdx) => (
                  <button
                    key={aIdx}
                    onClick={() => handleAnswer(qIdx, aIdx)}
                    className={`rounded-lg border px-3 py-2 text-left text-sm transition-colors ${
                      answers[qIdx] === aIdx
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border text-muted-foreground hover:border-primary/30"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
          <Button
            onClick={calculateScore}
            disabled={Object.keys(answers).length < questions.length}
            className="w-fit"
          >
            Calculate My Risk Score
          </Button>
        </div>
      ) : (
        <div className="text-center">
          <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-primary">
            <span className="font-mono text-4xl font-bold text-primary">{score}</span>
          </div>
          <h3 className="mt-4 text-xl font-bold text-foreground">Your Risk Profile: {profile}</h3>
          <p className="mt-2 text-muted-foreground">
            Based on your answers, you have a {profile?.toLowerCase()} risk tolerance. This helps determine the right asset allocation for your portfolio.
          </p>
          <Button onClick={() => { setScore(null); setAnswers({}) }} variant="outline" className="mt-4">
            Retake Quiz
          </Button>
        </div>
      )}
    </div>
  )
}

function FinancialHealthCalculator() {
  const [income, setIncome] = useState(50000)
  const [expenses, setExpenses] = useState(30000)
  const [savings, setSavings] = useState(200000)
  const [debt, setDebt] = useState(50000)

  const savingsRate = ((income - expenses) / income) * 100
  const emergencyMonths = savings / expenses
  const debtToIncome = (debt / (income * 12)) * 100
  const healthScore = Math.min(100, Math.round(
    (Math.min(savingsRate, 30) / 30) * 25 +
    (Math.min(emergencyMonths, 6) / 6) * 25 +
    (Math.max(0, 100 - debtToIncome) / 100) * 25 +
    25
  ))

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <div>
          <Label>Monthly Income ({'\u20B9'})</Label>
          <Input type="number" value={income} onChange={(e) => setIncome(Number(e.target.value))} className="mt-1" />
        </div>
        <div>
          <Label>Monthly Expenses ({'\u20B9'})</Label>
          <Input type="number" value={expenses} onChange={(e) => setExpenses(Number(e.target.value))} className="mt-1" />
        </div>
        <div>
          <Label>Total Savings ({'\u20B9'})</Label>
          <Input type="number" value={savings} onChange={(e) => setSavings(Number(e.target.value))} className="mt-1" />
        </div>
        <div>
          <Label>Total Debt ({'\u20B9'})</Label>
          <Input type="number" value={debt} onChange={(e) => setDebt(Number(e.target.value))} className="mt-1" />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className={`flex h-36 w-36 items-center justify-center rounded-full border-8 ${
          healthScore >= 70 ? "border-[#24A148]" : healthScore >= 40 ? "border-[#F1C21B]" : "border-[#DA1E28]"
        }`}>
          <span className="font-mono text-4xl font-bold text-foreground">{healthScore}</span>
        </div>
        <p className="mt-4 text-lg font-semibold text-foreground">
          {healthScore >= 70 ? "Excellent" : healthScore >= 40 ? "Fair" : "Needs Work"}
        </p>
        <div className="mt-6 grid w-full grid-cols-2 gap-4 text-center text-sm">
          <div className="rounded-lg bg-muted p-3">
            <p className="text-muted-foreground">Savings Rate</p>
            <p className="font-mono font-bold text-foreground">{savingsRate.toFixed(1)}%</p>
          </div>
          <div className="rounded-lg bg-muted p-3">
            <p className="text-muted-foreground">Emergency Fund</p>
            <p className="font-mono font-bold text-foreground">{emergencyMonths.toFixed(1)} months</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function GoalPlannerCalculator() {
  const [goal, setGoal] = useState(1000000)
  const [years, setYears] = useState(10)
  const [rate, setRate] = useState(12)
  const [current, setCurrent] = useState(100000)

  const r = rate / 100 / 12
  const n = years * 12
  const fvCurrent = current * Math.pow(1 + r, n)
  const remaining = Math.max(0, goal - fvCurrent)
  const monthlyNeeded = remaining > 0 ? Math.round(remaining / ((Math.pow(1 + r, n) - 1) / r)) : 0

  const data = Array.from({ length: years + 1 }, (_, i) => {
    const months = i * 12
    const fv = current * Math.pow(1 + r, months) + monthlyNeeded * ((Math.pow(1 + r, months) - 1) / r)
    return { year: i, value: Math.round(fv), goal }
  })

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="flex flex-col gap-4">
        <div>
          <Label>Goal Amount ({'\u20B9'})</Label>
          <Input type="number" value={goal} onChange={(e) => setGoal(Number(e.target.value))} className="mt-1" />
        </div>
        <div>
          <Label>Time Horizon: {years} years</Label>
          <Slider value={[years]} onValueChange={(v) => setYears(v[0])} min={1} max={30} step={1} className="mt-2" />
        </div>
        <div>
          <Label>Expected Return: {rate}%</Label>
          <Slider value={[rate]} onValueChange={(v) => setRate(v[0])} min={4} max={20} step={0.5} className="mt-2" />
        </div>
        <div>
          <Label>Current Savings ({'\u20B9'})</Label>
          <Input type="number" value={current} onChange={(e) => setCurrent(Number(e.target.value))} className="mt-1" />
        </div>
        <div className="rounded-xl border border-border bg-primary/5 p-4 text-center">
          <p className="text-sm text-muted-foreground">Required Monthly Investment</p>
          <p className="font-mono text-3xl font-bold text-primary">{'\u20B9'}{monthlyNeeded.toLocaleString("en-IN")}</p>
        </div>
      </div>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis dataKey="year" />
            <YAxis tickFormatter={(v: number) => `${(v / 100000).toFixed(0)}L`} />
            <Tooltip formatter={(value: number) => `${'\u20B9'}${value.toLocaleString("en-IN")}`} />
            <Line type="monotone" dataKey="value" stroke="var(--primary)" strokeWidth={2} dot={false} name="Projected" />
            <Line type="monotone" dataKey="goal" stroke="var(--destructive)" strokeWidth={1} strokeDasharray="5 5" dot={false} name="Goal" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

function PortfolioSimulatorPreview() {
  const mockAllocation = [
    { name: "Nifty 50 ETF", allocation: 40, returns: 14.2 },
    { name: "HDFC Bank", allocation: 20, returns: 12.5 },
    { name: "Gold ETF", allocation: 15, returns: 8.3 },
    { name: "Government Bonds", allocation: 15, returns: 6.8 },
    { name: "Reliance Industries", allocation: 10, returns: 18.7 },
  ]

  return (
    <div>
      <p className="mb-6 text-muted-foreground">See how a sample portfolio would have performed historically.</p>
      <div className="overflow-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="pb-3 font-medium text-muted-foreground">Asset</th>
              <th className="pb-3 font-medium text-muted-foreground">Allocation</th>
              <th className="pb-3 font-medium text-muted-foreground">5Y Return</th>
            </tr>
          </thead>
          <tbody>
            {mockAllocation.map((item) => (
              <tr key={item.name} className="border-b border-border">
                <td className="py-3 font-medium text-foreground">{item.name}</td>
                <td className="py-3 text-muted-foreground">{item.allocation}%</td>
                <td className="py-3 font-mono text-[#24A148]">+{item.returns}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 rounded-lg bg-muted/50 p-4 text-center">
        <p className="text-sm text-muted-foreground">Weighted Portfolio Return (5Y annualized)</p>
        <p className="font-mono text-2xl font-bold text-[#24A148]">+12.4%</p>
      </div>
    </div>
  )
}

const calculatorMap: Record<string, React.FC> = {
  "compound-interest": CompoundInterestCalculator,
  "risk-score": RiskScoreCalculator,
  "financial-health": FinancialHealthCalculator,
  "goal-planner": GoalPlannerCalculator,
  "portfolio-simulator": PortfolioSimulatorPreview,
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
