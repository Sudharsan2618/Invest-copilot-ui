"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TrendingUp, TrendingDown, Search, Plus, ArrowUpDown, IndianRupee } from "lucide-react"

const holdings = [
  { name: "HDFC Bank", ticker: "HDFCBANK", qty: 10, avgPrice: 1580, ltp: 1650, sector: "Banking" },
  { name: "Infosys", ticker: "INFY", qty: 15, avgPrice: 1520, ltp: 1480, sector: "IT" },
  { name: "Reliance Industries", ticker: "RELIANCE", qty: 5, avgPrice: 2750, ltp: 2890, sector: "Conglomerate" },
  { name: "TCS", ticker: "TCS", qty: 8, avgPrice: 3400, ltp: 3520, sector: "IT" },
  { name: "ICICI Bank", ticker: "ICICIBANK", qty: 20, avgPrice: 950, ltp: 1020, sector: "Banking" },
  { name: "Bharti Airtel", ticker: "BHARTIARTL", qty: 12, avgPrice: 890, ltp: 920, sector: "Telecom" },
]

const watchlist = [
  { name: "Tata Motors", ticker: "TATAMOTORS", ltp: 645, change: 3.2 },
  { name: "Asian Paints", ticker: "ASIANPAINT", ltp: 3280, change: -0.8 },
  { name: "SBI", ticker: "SBIN", ltp: 625, change: 1.5 },
  { name: "Wipro", ticker: "WIPRO", ltp: 410, change: -2.1 },
  { name: "HUL", ticker: "HINDUNILVR", ltp: 2540, change: 0.3 },
]

const orderHistory = [
  { date: "2026-02-24", type: "BUY", ticker: "HDFCBANK", qty: 5, price: 1640, status: "Executed" },
  { date: "2026-02-23", type: "SELL", ticker: "WIPRO", qty: 10, price: 415, status: "Executed" },
  { date: "2026-02-22", type: "BUY", ticker: "RELIANCE", qty: 2, price: 2860, status: "Executed" },
  { date: "2026-02-21", type: "BUY", ticker: "ICICIBANK", qty: 10, price: 945, status: "Executed" },
]

export default function SimulatorPage() {
  const [search, setSearch] = useState("")
  const [showBuy, setShowBuy] = useState(false)
  const [buyTicker, setBuyTicker] = useState("")
  const [buyQty, setBuyQty] = useState("1")

  const totalInvested = holdings.reduce((sum, h) => sum + h.qty * h.avgPrice, 0)
  const totalCurrent = holdings.reduce((sum, h) => sum + h.qty * h.ltp, 0)
  const totalPnl = totalCurrent - totalInvested
  const pnlPercent = ((totalPnl / totalInvested) * 100).toFixed(2)

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Portfolio Simulator</h1>
          <p className="text-muted-foreground">Practice trading with virtual money. No real risk.</p>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-mono text-base">
            <IndianRupee className="mr-1 h-4 w-4" />
            {(totalCurrent / 100).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")} virtual
          </Badge>
          <Button size="sm" onClick={() => { setShowBuy(!showBuy); setBuyTicker("") }}>
            <Plus className="mr-1 h-4 w-4" /> New Trade
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">Invested</p>
            <p className="font-mono text-xl font-bold text-foreground">{(totalInvested / 100000).toFixed(2)}L</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">Current Value</p>
            <p className="font-mono text-xl font-bold text-foreground">{(totalCurrent / 100000).toFixed(2)}L</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <p className="text-xs text-muted-foreground">P&L</p>
            <p className={`font-mono text-xl font-bold ${totalPnl >= 0 ? "text-[var(--success)]" : "text-destructive"}`}>
              {totalPnl >= 0 ? "+" : ""}{(totalPnl / 100).toFixed(0)} ({pnlPercent}%)
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Buy Panel */}
      {showBuy && (
        <Card className="border-primary/30">
          <CardHeader>
            <CardTitle className="text-base">Place a Trade</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
              <div className="flex-1">
                <label className="mb-1 block text-xs text-muted-foreground">Stock Ticker</label>
                <Input placeholder="e.g. HDFCBANK" value={buyTicker} onChange={(e) => setBuyTicker(e.target.value.toUpperCase())} />
              </div>
              <div className="w-32">
                <label className="mb-1 block text-xs text-muted-foreground">Quantity</label>
                <Input type="number" min="1" value={buyQty} onChange={(e) => setBuyQty(e.target.value)} />
              </div>
              <div className="flex gap-2">
                <Button className="bg-[var(--success)] text-[var(--success-foreground)] hover:bg-[var(--success)]/90">Buy</Button>
                <Button variant="destructive">Sell</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Tabs defaultValue="holdings">
        <TabsList>
          <TabsTrigger value="holdings">Holdings ({holdings.length})</TabsTrigger>
          <TabsTrigger value="watchlist">Watchlist ({watchlist.length})</TabsTrigger>
          <TabsTrigger value="orders">Order History</TabsTrigger>
        </TabsList>

        <TabsContent value="holdings" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs text-muted-foreground">
                      <th className="px-4 py-3 text-left">Stock</th>
                      <th className="px-4 py-3 text-right">Qty</th>
                      <th className="px-4 py-3 text-right">Avg Price</th>
                      <th className="px-4 py-3 text-right">LTP</th>
                      <th className="px-4 py-3 text-right">P&L</th>
                      <th className="px-4 py-3 text-right">Change %</th>
                    </tr>
                  </thead>
                  <tbody>
                    {holdings.map((h) => {
                      const pnl = (h.ltp - h.avgPrice) * h.qty
                      const changePct = ((h.ltp - h.avgPrice) / h.avgPrice * 100).toFixed(2)
                      return (
                        <tr key={h.ticker} className="border-b border-border last:border-0">
                          <td className="px-4 py-3">
                            <p className="font-medium text-foreground">{h.name}</p>
                            <p className="font-mono text-xs text-muted-foreground">{h.ticker} &middot; {h.sector}</p>
                          </td>
                          <td className="px-4 py-3 text-right font-mono text-foreground">{h.qty}</td>
                          <td className="px-4 py-3 text-right font-mono text-foreground">{h.avgPrice.toLocaleString("en-IN")}</td>
                          <td className="px-4 py-3 text-right font-mono text-foreground">{h.ltp.toLocaleString("en-IN")}</td>
                          <td className={`px-4 py-3 text-right font-mono ${pnl >= 0 ? "text-[var(--success)]" : "text-destructive"}`}>
                            {pnl >= 0 ? "+" : ""}{pnl.toLocaleString("en-IN")}
                          </td>
                          <td className={`px-4 py-3 text-right font-mono ${pnl >= 0 ? "text-[var(--success)]" : "text-destructive"}`}>
                            {pnl >= 0 ? "+" : ""}{changePct}%
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="watchlist" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs text-muted-foreground">
                      <th className="px-4 py-3 text-left">Stock</th>
                      <th className="px-4 py-3 text-right">LTP</th>
                      <th className="px-4 py-3 text-right">Change %</th>
                      <th className="px-4 py-3 text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {watchlist.map((w) => (
                      <tr key={w.ticker} className="border-b border-border last:border-0">
                        <td className="px-4 py-3">
                          <p className="font-medium text-foreground">{w.name}</p>
                          <p className="font-mono text-xs text-muted-foreground">{w.ticker}</p>
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-foreground">{w.ltp.toLocaleString("en-IN")}</td>
                        <td className={`px-4 py-3 text-right font-mono ${w.change >= 0 ? "text-[var(--success)]" : "text-destructive"}`}>
                          {w.change >= 0 ? "+" : ""}{w.change}%
                        </td>
                        <td className="px-4 py-3 text-right">
                          <Button size="sm" variant="outline" onClick={() => { setShowBuy(true); setBuyTicker(w.ticker) }}>Trade</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border text-xs text-muted-foreground">
                      <th className="px-4 py-3 text-left">Date</th>
                      <th className="px-4 py-3 text-left">Type</th>
                      <th className="px-4 py-3 text-left">Ticker</th>
                      <th className="px-4 py-3 text-right">Qty</th>
                      <th className="px-4 py-3 text-right">Price</th>
                      <th className="px-4 py-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orderHistory.map((o, i) => (
                      <tr key={i} className="border-b border-border last:border-0">
                        <td className="px-4 py-3 font-mono text-foreground">{o.date}</td>
                        <td className="px-4 py-3">
                          <Badge variant={o.type === "BUY" ? "default" : "destructive"} className="text-xs">{o.type}</Badge>
                        </td>
                        <td className="px-4 py-3 font-mono text-foreground">{o.ticker}</td>
                        <td className="px-4 py-3 text-right font-mono text-foreground">{o.qty}</td>
                        <td className="px-4 py-3 text-right font-mono text-foreground">{o.price.toLocaleString("en-IN")}</td>
                        <td className="px-4 py-3 text-right">
                          <Badge variant="outline" className="text-xs text-[var(--success)]">{o.status}</Badge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
