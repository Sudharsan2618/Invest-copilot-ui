"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Shield, TrendingDown, PieChart, Info } from "lucide-react"

const riskScore = 62
const riskLevel = "Moderate"

const sectorExposure = [
  { sector: "Banking", weight: 38, color: "bg-chart-1" },
  { sector: "IT", weight: 28, color: "bg-chart-2" },
  { sector: "Conglomerate", weight: 18, color: "bg-chart-3" },
  { sector: "Telecom", weight: 10, color: "bg-chart-4" },
  { sector: "Cash", weight: 6, color: "bg-muted-foreground" },
]

const alerts = [
  { severity: "High" as const, message: "Banking sector overweight at 38%. Recommended max: 25%.", action: "Rebalance portfolio" },
  { severity: "Medium" as const, message: "No stop-loss set on any position. Consider 10-15% trailing stops.", action: "Set stop-losses" },
  { severity: "Medium" as const, message: "Portfolio beta is 1.3 - higher volatility than Nifty 50.", action: "Add defensive stocks" },
  { severity: "Low" as const, message: "No fixed-income or gold allocation for stability.", action: "Diversify asset classes" },
]

const metrics = [
  { label: "Portfolio Beta", value: "1.30", desc: "Higher than market avg (1.0)" },
  { label: "Sharpe Ratio", value: "0.85", desc: "Risk-adjusted return measure" },
  { label: "Max Drawdown", value: "-8.2%", desc: "Largest peak-to-trough decline" },
  { label: "Volatility (30d)", value: "14.5%", desc: "Annualized standard deviation" },
  { label: "Concentration Risk", value: "38%", desc: "Largest sector allocation" },
  { label: "Correlation to Nifty", value: "0.89", desc: "High correlation with benchmark" },
]

export default function RiskMonitorPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Risk Monitor</h1>
        <p className="text-muted-foreground">Monitor and manage your portfolio risk in real-time.</p>
      </div>

      {/* Risk Score */}
      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Shield className="h-5 w-5 text-primary" /> Risk Score
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4">
            <div className="relative flex h-28 w-28 items-center justify-center">
              <svg className="h-28 w-28 -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--border)" strokeWidth="10" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="var(--warning)" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${riskScore * 3.14} 314`} />
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="font-mono text-2xl font-bold text-foreground">{riskScore}</span>
                <span className="text-xs text-muted-foreground">/100</span>
              </div>
            </div>
            <Badge variant="outline" className="text-[var(--warning)]">{riskLevel} Risk</Badge>
            <p className="text-center text-xs text-muted-foreground leading-relaxed">
              Your portfolio has moderate risk. Consider diversifying to reduce sector concentration.
            </p>
          </CardContent>
        </Card>

        {/* Sector Exposure */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <PieChart className="h-5 w-5 text-primary" /> Sector Exposure
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              {sectorExposure.map((s) => (
                <div key={s.sector} className="flex items-center gap-3">
                  <span className="w-28 text-sm text-foreground">{s.sector}</span>
                  <div className="flex-1">
                    <div className="h-4 w-full rounded-full bg-muted">
                      <div className={`h-4 rounded-full ${s.color}`} style={{ width: `${s.weight}%` }} />
                    </div>
                  </div>
                  <span className="w-12 text-right font-mono text-sm text-foreground">{s.weight}%</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex h-4 w-full overflow-hidden rounded-full">
              {sectorExposure.map((s) => (
                <div key={s.sector} className={`${s.color} h-full`} style={{ width: `${s.weight}%` }} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <AlertTriangle className="h-5 w-5 text-[var(--warning)]" /> Risk Alerts
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {alerts.map((a, i) => (
            <div key={i} className={`flex items-start gap-3 rounded-lg border p-3 ${a.severity === "High" ? "border-destructive/30 bg-destructive/5" : a.severity === "Medium" ? "border-[var(--warning)]/30 bg-[var(--warning)]/5" : "border-border"}`}>
              <Badge variant={a.severity === "High" ? "destructive" : a.severity === "Medium" ? "default" : "outline"} className="mt-0.5 shrink-0 text-xs">
                {a.severity}
              </Badge>
              <div className="flex-1">
                <p className="text-sm text-foreground">{a.message}</p>
                <p className="mt-1 text-xs text-primary">{a.action}</p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Risk Metrics */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {metrics.map((m) => (
          <Card key={m.label}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-muted-foreground">{m.label}</p>
                <Info className="h-3 w-3 text-muted-foreground" />
              </div>
              <p className="mt-1 font-mono text-xl font-bold text-foreground">{m.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{m.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
