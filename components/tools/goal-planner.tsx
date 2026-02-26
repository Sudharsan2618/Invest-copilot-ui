"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function GoalPlannerCalculator() {
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
