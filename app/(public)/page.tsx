import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TopicCard, CTABanner } from "@/components/shared"
import { topics, blogPosts } from "@/lib/mock-data"
import {
  BookOpen, LineChart, Target, ArrowRight,
  Star, Users, CheckCircle2,
} from "lucide-react"

export default function HomePage() {
  const featuredTopics = topics.slice(0, 8)
  const latestPosts = blogPosts.slice(0, 3)

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground lg:text-6xl">
              Learn Investing Before You Risk Real Money
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Master investment concepts through interactive lessons, practice with our AI-powered virtual portfolio simulator, and build confidence before investing real money.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/learn">
                <Button size="lg" className="gap-2">
                  <BookOpen className="h-4 w-4" />
                  Start Learning
                </Button>
              </Link>
              <Link href="/app/simulator">
                <Button size="lg" variant="outline" className="gap-2">
                  Try Simulator
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/5" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-primary/5" />
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border bg-muted/50 py-6">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-8 px-4 text-sm text-muted-foreground lg:px-8">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>10,000+ learners</span>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-[#F1C21B] text-[#F1C21B]" />
            ))}
            <span className="ml-1">4.8/5 rating</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#24A148]" />
            <span>17 learning topics</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 text-[#24A148]" />
            <span>100+ articles</span>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
            <p className="mt-2 text-muted-foreground">Three simple steps to smarter investing</p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: BookOpen, step: "1", title: "Learn", description: "Study 17 comprehensive topics covering everything from money basics to advanced portfolio strategies." },
              { icon: LineChart, step: "2", title: "Practice", description: "Use our AI-powered simulator to invest virtual money and get real-time feedback on your decisions." },
              { icon: Target, step: "3", title: "Invest Smart", description: "Apply your knowledge with confidence. Build a real portfolio backed by education and simulated experience." },
            ].map((item) => (
              <Card key={item.step} className="relative overflow-hidden border-border">
                <CardContent className="flex flex-col items-center p-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <item.icon className="h-7 w-7" />
                  </div>
                  <span className="mt-4 text-xs font-bold uppercase tracking-wider text-muted-foreground">Step {item.step}</span>
                  <h3 className="mt-2 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Topics */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Featured Topics</h2>
              <p className="mt-2 text-muted-foreground">Start with the fundamentals, progress at your own pace</p>
            </div>
            <Link href="/learn" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline md:flex">
              View All Topics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredTopics.map((topic) => (
              <TopicCard key={topic.id} topic={topic} />
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link href="/learn">
              <Button variant="outline">View All Topics</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Roadmap Preview */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground">Your Learning Roadmap</h2>
            <p className="mt-2 text-muted-foreground">A guided path from complete beginner to confident investor</p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl">
            {[
              { step: 1, title: "Fix Your Finances", desc: "Budgeting, emergency funds, debt management" },
              { step: 2, title: "Understand the Markets", desc: "Stock markets, asset classes, index funds" },
              { step: 3, title: "Learn Strategies", desc: "Risk management, behavioral finance, investing tactics" },
              { step: 4, title: "Analyze & Build", desc: "Company analysis, valuation, macroeconomics" },
              { step: 5, title: "Start Your Portfolio", desc: "Portfolio building, investment roadmap" },
            ].map((item, idx) => (
              <div key={item.step} className="relative flex gap-4 pb-8">
                {idx < 4 && (
                  <div className="absolute left-5 top-10 h-full w-px bg-border" />
                )}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                  {item.step}
                </div>
                <div className="pt-1">
                  <h3 className="font-semibold text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/roadmap">
              <Button variant="outline" className="gap-2">
                View Full Roadmap <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-muted/30 py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <CTABanner />
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold text-foreground">Latest from the Blog</h2>
              <p className="mt-2 text-muted-foreground">Market insights, tips, and platform updates</p>
            </div>
            <Link href="/blog" className="hidden items-center gap-1 text-sm font-medium text-primary hover:underline md:flex">
              All Posts <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {latestPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card className="group h-full transition-all hover:border-primary/30 hover:shadow-md">
                  <CardContent className="flex flex-col gap-3 p-6">
                    <span className="text-xs font-medium text-primary">{post.category}</span>
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-auto flex items-center justify-between pt-2 text-xs text-muted-foreground">
                      <span>{post.author}</span>
                      <span>{post.readTime} read</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
