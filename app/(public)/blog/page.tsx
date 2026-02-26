import Link from "next/link"
import { blogPosts } from "@/lib/mock-data"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog",
  description: "Market insights, investing tips, case studies, and platform updates from InvestCopilot.",
}

const categories = ["All", "Market Updates", "Beginner Tips", "Case Studies", "Personal Finance", "Product Updates"]

export default function BlogPage() {
  const featured = blogPosts.find((p) => p.featured)
  const rest = blogPosts.filter((p) => !p.featured)

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground lg:text-4xl">Blog</h1>
          <p className="mt-2 text-muted-foreground">Market insights, tips, and platform updates</p>
        </div>
        <Input placeholder="Search articles..." className="h-10 w-full md:w-64" />
      </div>

      {/* Categories */}
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
              cat === "All"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Post */}
      {featured && (
        <Link href={`/blog/${featured.slug}`}>
          <Card className="group mb-8 overflow-hidden transition-all hover:border-primary/30 hover:shadow-md">
            <CardContent className="p-8">
              <Badge className="bg-primary/10 text-primary">{featured.category}</Badge>
              <h2 className="mt-3 text-2xl font-bold text-foreground group-hover:text-primary transition-colors lg:text-3xl">{featured.title}</h2>
              <p className="mt-2 max-w-2xl text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-4 flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {featured.authorAvatar}
                  </div>
                  {featured.author}
                </div>
                <span>{featured.date}</span>
                <span>{featured.readTime} read</span>
              </div>
            </CardContent>
          </Card>
        </Link>
      )}

      {/* Post Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {rest.map((post) => (
          <Link key={post.id} href={`/blog/${post.slug}`}>
            <Card className="group h-full transition-all hover:border-primary/30 hover:shadow-md">
              <CardContent className="flex h-full flex-col gap-3 p-6">
                <Badge variant="outline" className="w-fit">{post.category}</Badge>
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{post.title}</h3>
                <p className="line-clamp-2 text-sm text-muted-foreground">{post.excerpt}</p>
                <div className="mt-auto flex items-center justify-between pt-3 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-muted text-[9px] font-bold text-muted-foreground">
                      {post.authorAvatar}
                    </div>
                    {post.author}
                  </div>
                  <span>{post.readTime}</span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
