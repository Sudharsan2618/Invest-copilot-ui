"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function FinancialHealthCalculator() {
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
