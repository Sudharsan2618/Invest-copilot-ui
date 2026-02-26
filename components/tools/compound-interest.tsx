"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function CompoundInterestCalculator() {
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
