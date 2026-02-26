"use client"

export function PortfolioSimulatorPreview() {
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
