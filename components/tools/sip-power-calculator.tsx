"use client"

import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { ArrowRight } from "lucide-react"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

export function SIPPowerCalculator() {
  const [monthlySIP, setMonthlySIP] = useState(10000)
  const [stepUpRate, setStepUpRate] = useState(10)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [years, setYears] = useState(20)

  // Calculate flat SIP
  const calcFlatSIP = () => {
    const r = expectedReturn / 100 / 12
    const yearlyData = []
    for (let y = 0; y <= years; y++) {
      if (y === 0) {
        yearlyData.push({ year: y, flat: 0, flatInvested: 0 })
        continue
      }
      const n = y * 12
      const total = monthlySIP * ((Math.pow(1 + r, n) - 1) / r)
      const invested = monthlySIP * n
      yearlyData.push({ year: y, flat: Math.round(total), flatInvested: Math.round(invested) })
    }
    return yearlyData
  }

  // Calculate step-up SIP
  const calcStepUpSIP = () => {
    const r = expectedReturn / 100 / 12
    let totalValue = 0
    let totalInvested = 0
    const yearlyData = []
    yearlyData.push({ year: 0, stepUp: 0, stepUpInvested: 0 })
    for (let y = 1; y <= years; y++) {
      const currentSIP = monthlySIP * Math.pow(1 + stepUpRate / 100, y - 1)
      for (let m = 0; m < 12; m++) {
        totalInvested += currentSIP
        totalValue = (totalValue + currentSIP) * (1 + r)
      }
      yearlyData.push({ year: y, stepUp: Math.round(totalValue), stepUpInvested: Math.round(totalInvested) })
    }
    return yearlyData
  }

  const flatData = calcFlatSIP()
  const stepUpData = calcStepUpSIP()

  const chartData = flatData.map((fd, i) => ({
    year: fd.year,
    flat: fd.flat || 0,
    stepUp: stepUpData[i]?.stepUp || 0,
    flatInvested: fd.flatInvested || 0,
    stepUpInvested: stepUpData[i]?.stepUpInvested || 0,
  }))

  const final = chartData[chartData.length - 1]
  const wealthGap = final.stepUp - final.flat
  const flatInvested = final.flatInvested
  const stepUpInvested = final.stepUpInvested
  const flatGains = final.flat - flatInvested
  const stepUpGains = final.stepUp - stepUpInvested
  const lastYearSIP = Math.round(monthlySIP * Math.pow(1 + stepUpRate / 100, years - 1))
  const multiplierFlat = flatInvested > 0 ? (final.flat / flatInvested).toFixed(1) : '0'
  const multiplierStepUp = stepUpInvested > 0 ? (final.stepUp / stepUpInvested).toFixed(1) : '0'

  const formatCurrency = (val: number) => {
    if (val >= 10000000) return `₹${(val / 10000000).toFixed(2)} Cr`
    if (val >= 100000) {
      const inLakhs = val / 100000
      if (inLakhs >= 99.95) return `₹${(val / 10000000).toFixed(2)} Cr`
      return `₹${inLakhs.toFixed(1)} L`
    }
    return `₹${val.toLocaleString('en-IN')}`
  }

  return (
    <div className="flex flex-col gap-8">
      {/* Inputs */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Label className="text-sm font-medium">Monthly SIP Amount</Label>
          <div className="mt-1 flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2">
            <span className="text-muted-foreground">₹</span>
            <Input type="number" value={monthlySIP} onChange={(e) => setMonthlySIP(Math.max(500, Number(e.target.value)))} className="border-0 p-0 shadow-none focus-visible:ring-0" />
          </div>
          <Slider value={[monthlySIP]} onValueChange={(v) => setMonthlySIP(v[0])} min={500} max={200000} step={500} className="mt-2" />
        </div>
        <div>
          <Label className="text-sm font-medium">Annual Step-Up: {stepUpRate}%</Label>
          <div className="mt-1 text-2xl font-bold text-primary">{stepUpRate}%</div>
          <Slider value={[stepUpRate]} onValueChange={(v) => setStepUpRate(v[0])} min={0} max={30} step={1} className="mt-2" />
          <p className="mt-1 text-xs text-muted-foreground">Increase SIP by this % every year</p>
        </div>
        <div>
          <Label className="text-sm font-medium">Expected Return: {expectedReturn}%</Label>
          <div className="mt-1 text-2xl font-bold text-foreground">{expectedReturn}% CAGR</div>
          <Slider value={[expectedReturn]} onValueChange={(v) => setExpectedReturn(v[0])} min={6} max={20} step={0.5} className="mt-2" />
          <p className="mt-1 text-xs text-muted-foreground">Nifty 50 historical: ~12-13%</p>
        </div>
        <div>
          <Label className="text-sm font-medium">Time Period: {years} years</Label>
          <div className="mt-1 text-2xl font-bold text-foreground">{years} yrs</div>
          <Slider value={[years]} onValueChange={(v) => setYears(v[0])} min={1} max={35} step={1} className="mt-2" />
        </div>
      </div>

      {/* Results Comparison */}
      <div className="grid gap-4 md:grid-cols-2">
        {/* Flat SIP Card */}
        <div className="rounded-xl border border-border bg-muted/30 p-5">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-3 w-3 rounded-full bg-[hsl(var(--border))]" />
            <h3 className="font-semibold text-muted-foreground">Flat SIP</h3>
            <span className="ml-auto text-xs bg-muted px-2 py-0.5 rounded-full text-muted-foreground">₹{monthlySIP.toLocaleString('en-IN')}/mo forever</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Total invested</span>
              <span className="font-mono text-sm">{formatCurrency(flatInvested)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Returns earned</span>
              <span className="font-mono text-sm text-[#24A148]">+{formatCurrency(flatGains)}</span>
            </div>
            <div className="border-t border-border pt-2 flex justify-between">
              <span className="text-sm font-medium">Final Value</span>
              <span className="font-mono text-lg font-bold">{formatCurrency(final.flat)}</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Money multiplier</span>
              <span className="font-mono">{multiplierFlat}x</span>
            </div>
          </div>
        </div>

        {/* Step-Up SIP Card */}
        <div className="rounded-xl border-2 border-primary bg-primary/5 p-5 relative overflow-hidden">
          <div className="absolute top-2 right-2 bg-primary text-primary-foreground text-[10px] font-bold px-2 py-0.5 rounded-full">RECOMMENDED</div>
          <div className="flex items-center gap-2 mb-3">
            <div className="h-3 w-3 rounded-full bg-primary" />
            <h3 className="font-semibold text-primary">Step-Up SIP</h3>
            <span className="ml-auto text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">+{stepUpRate}%/yr increase</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Total invested</span>
              <span className="font-mono text-sm">{formatCurrency(stepUpInvested)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-sm text-muted-foreground">Returns earned</span>
              <span className="font-mono text-sm text-[#24A148]">+{formatCurrency(stepUpGains)}</span>
            </div>
            <div className="border-t border-primary/20 pt-2 flex justify-between">
              <span className="text-sm font-medium">Final Value</span>
              <span className="font-mono text-lg font-bold text-primary">{formatCurrency(final.stepUp)}</span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>Money multiplier</span>
              <span className="font-mono">{multiplierStepUp}x</span>
            </div>
          </div>
        </div>
      </div>

      {/* Wealth Gap Highlight */}
      <div className="rounded-xl bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/20 p-5 text-center">
        <p className="text-sm text-muted-foreground mb-1">The Step-Up Advantage</p>
        <p className="text-3xl font-bold text-primary">{formatCurrency(wealthGap)}</p>
        <p className="text-sm text-muted-foreground mt-1">
          more wealth by simply increasing ₹{monthlySIP.toLocaleString('en-IN')}/mo SIP by {stepUpRate}% yearly
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          Your SIP grows to ₹{lastYearSIP.toLocaleString('en-IN')}/mo by year {years} — but so does your salary!
        </p>
      </div>

      {/* Chart */}
      <div className="rounded-xl border border-border p-4">
        <h3 className="mb-4 text-sm font-medium text-foreground">Wealth Growth: Flat SIP vs Step-Up SIP</h3>
        <div className="h-72 sm:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="year" tick={{ fontSize: 12 }} label={{ value: 'Years', position: 'insideBottom', offset: -5, style: { fontSize: 11 } }} />
              <YAxis tickFormatter={(v: number) => {
                if (v >= 10000000) return `${(v / 10000000).toFixed(1)}Cr`
                if (v >= 100000) return `${(v / 100000).toFixed(0)}L`
                return `${(v / 1000).toFixed(0)}K`
              }} tick={{ fontSize: 11 }} width={50} />
              <Tooltip
                formatter={(value: number, name: string) => [
                  `₹${value.toLocaleString('en-IN')}`,
                  name === 'flat' ? 'Flat SIP' : name === 'stepUp' ? 'Step-Up SIP' : name === 'flatInvested' ? 'Flat Invested' : 'Step-Up Invested'
                ]}
                contentStyle={{ fontSize: 12, borderRadius: '8px', border: '1px solid var(--border)' }}
              />
              <Area type="monotone" dataKey="flatInvested" stroke="var(--border)" fill="var(--muted)" fillOpacity={0.4} name="flatInvested" strokeWidth={1} strokeDasharray="4 4" />
              <Area type="monotone" dataKey="flat" stroke="var(--border)" fill="var(--muted)" fillOpacity={0.6} name="flat" strokeWidth={2} />
              <Area type="monotone" dataKey="stepUpInvested" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.05} name="stepUpInvested" strokeWidth={1} strokeDasharray="4 4" />
              <Area type="monotone" dataKey="stepUp" stroke="var(--primary)" fill="var(--primary)" fillOpacity={0.15} name="stepUp" strokeWidth={2.5} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-3 flex flex-wrap gap-4 justify-center text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-0.5 bg-primary rounded"></span> Step-Up SIP</span>
          <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-0.5 bg-[hsl(var(--border))] rounded"></span> Flat SIP</span>
          <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-0.5 border-t border-dashed border-primary"></span> Invested (Step-Up)</span>
          <span className="flex items-center gap-1.5"><span className="inline-block w-3 h-0.5 border-t border-dashed border-[hsl(var(--border))]"></span> Invested (Flat)</span>
        </div>
      </div>

      {/* SIP Growth Table */}
      <div className="rounded-xl border border-border overflow-hidden">
        <div className="bg-muted/50 px-4 py-3 border-b border-border">
          <h3 className="text-sm font-medium text-foreground">Year-by-Year SIP Progression</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Year</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Monthly SIP</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Flat SIP Value</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Step-Up Value</th>
                <th className="px-4 py-2.5 text-left font-medium text-muted-foreground">Extra Wealth</th>
              </tr>
            </thead>
            <tbody>
              {chartData.filter((_, i) => i > 0 && (i % Math.max(1, Math.floor(years / 8)) === 0 || i === years)).map((row) => {
                const sipAmount = Math.round(monthlySIP * Math.pow(1 + stepUpRate / 100, row.year - 1))
                const gap = row.stepUp - row.flat
                return (
                  <tr key={row.year} className="border-b border-border/50 last:border-0">
                    <td className="px-4 py-2.5 font-medium text-foreground">Year {row.year}</td>
                    <td className="px-4 py-2.5 font-mono text-muted-foreground">₹{sipAmount.toLocaleString('en-IN')}</td>
                    <td className="px-4 py-2.5 font-mono text-muted-foreground">{formatCurrency(row.flat)}</td>
                    <td className="px-4 py-2.5 font-mono text-primary font-medium">{formatCurrency(row.stepUp)}</td>
                    <td className="px-4 py-2.5 font-mono text-[#24A148]">+{formatCurrency(gap)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Insights & Links */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-8 w-8 rounded-lg bg-[#24A148]/10 flex items-center justify-center">
              <span className="text-[#24A148] text-sm">📈</span>
            </div>
            <h4 className="text-sm font-semibold text-foreground">Step-Up SIP Deep Dive</h4>
          </div>
          <p className="text-xs text-muted-foreground mb-3">Learn the complete 4-step long-term index strategy including step-up SIP.</p>
          <Link href="/learn/index-investing/long-term-index-strategy" className="text-xs font-medium text-primary hover:underline flex items-center gap-1">
            Read Article <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
              <span className="text-primary text-sm">💡</span>
            </div>
            <h4 className="text-sm font-semibold text-foreground">Which Index Fund?</h4>
          </div>
          <p className="text-xs text-muted-foreground mb-3">Top Nifty 50 index funds compared — UTI, HDFC, ICICI Pru and more.</p>
          <Link href="/learn/index-investing/how-index-funds-work" className="text-xs font-medium text-primary hover:underline flex items-center gap-1">
            Read Article <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="rounded-xl border border-border p-4">
          <div className="flex items-center gap-2 mb-2">
            <div className="h-8 w-8 rounded-lg bg-[#F1C21B]/10 flex items-center justify-center">
              <span className="text-[#F1C21B] text-sm">⚖️</span>
            </div>
            <h4 className="text-sm font-semibold text-foreground">Asset Allocation Guide</h4>
          </div>
          <p className="text-xs text-muted-foreground mb-3">How to split money between equity, debt, and gold for your age and goals.</p>
          <Link href="/learn/asset-classes/asset-allocation" className="text-xs font-medium text-primary hover:underline flex items-center gap-1">
            Read Article <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Pro Tip */}
      <div className="rounded-xl bg-muted/50 border border-border p-4 flex gap-3">
        <div className="text-lg">💡</div>
        <div>
          <p className="text-sm font-medium text-foreground">Pro Tip: The Best Time to Start Was Yesterday</p>
          <p className="text-xs text-muted-foreground mt-1">
            Every month you delay your SIP costs you more than you think. At {expectedReturn}% return, a 6-month delay on ₹{monthlySIP.toLocaleString('en-IN')}/month SIP costs you <strong className="text-foreground">₹{Math.round(monthlySIP * 6 * Math.pow(1 + expectedReturn/100, years) / years).toLocaleString('en-IN')}+</strong> in future wealth. Start today — pick any top Nifty 50 index fund (Direct plan) and set up auto-debit.
          </p>
        </div>
      </div>
    </div>
  )
}
