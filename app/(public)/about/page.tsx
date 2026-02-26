import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Target, BookOpen, Bot, ShieldCheck, TrendingUp, Users } from "lucide-react"

const values = [
  { icon: Target, title: "Practice First", desc: "Learn by doing with virtual money before risking real capital." },
  { icon: BookOpen, title: "India Focused", desc: "Content tailored for Indian markets, regulations, and tax rules." },
  { icon: Bot, title: "AI-Powered", desc: "Get personalized feedback on your investment decisions from AI." },
  { icon: ShieldCheck, title: "No Real Risk", desc: "Simulated portfolios let you experiment without consequences." },
  { icon: TrendingUp, title: "Data Driven", desc: "Analytics and insights to help you understand your investing behavior." },
  { icon: Users, title: "Community", desc: "Join thousands of learners on their investment education journey." },
]

export default function AboutPage() {
  return (
    <main className="container mx-auto max-w-4xl px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold text-foreground text-balance">About InvestCopilot</h1>
        <p className="mt-3 text-lg text-muted-foreground text-pretty leading-relaxed">
          InvestCopilot is an AI-powered investment education platform designed for Indian beginners.
          We believe everyone deserves to learn investing in a safe, guided environment before putting real money at risk.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((v) => (
          <Card key={v.title}>
            <CardHeader className="pb-2">
              <v.icon className="h-8 w-8 text-primary" />
              <CardTitle className="text-base">{v.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <section className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-foreground">Ready to start learning?</h2>
        <p className="mt-2 text-muted-foreground">Join thousands of Indians who are building their investment knowledge.</p>
        <div className="mt-6 flex items-center justify-center gap-4">
          <Link href="/signup" className="inline-flex h-10 items-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/90">
            Get Started Free
          </Link>
          <Link href="/learn" className="inline-flex h-10 items-center rounded-md border border-border px-6 text-sm font-medium text-foreground hover:bg-muted">
            Browse Topics
          </Link>
        </div>
      </section>
    </main>
  )
}
