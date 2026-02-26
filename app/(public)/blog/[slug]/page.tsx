import { notFound } from "next/navigation"
import Link from "next/link"
import { blogPosts } from "@/lib/mock-data"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronRight, Clock, Share2, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  return { title: post?.title, description: post?.excerpt }
}

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  if (!post) notFound()

  const related = blogPosts.filter((p) => p.id !== post.id).slice(0, 3)

  return (
    <div className="mx-auto max-w-4xl px-4 py-12 lg:px-8">
      {/* Breadcrumb */}
      <nav className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/blog" className="hover:text-foreground">Blog</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="truncate text-foreground">{post.title}</span>
      </nav>

      <article>
        <Badge className="bg-primary/10 text-primary">{post.category}</Badge>
        <h1 className="mt-3 text-3xl font-bold text-foreground lg:text-4xl">{post.title}</h1>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
              {post.authorAvatar}
            </div>
            <div>
              <p className="font-medium text-foreground">{post.author}</p>
              <p className="text-xs">{post.date}</p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime} read
          </div>
        </div>

        {/* Content */}
        <div className="mt-8">
          <p className="text-lg leading-relaxed text-muted-foreground">{post.excerpt}</p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">The Big Picture</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            The Indian market has shown remarkable resilience and growth potential over the past decade. 
            With increasing retail participation and growing financial literacy, the landscape is changing rapidly. 
            Understanding these macro trends is crucial for making informed investment decisions.
          </p>

          <h2 className="mt-8 text-xl font-semibold text-foreground">What This Means for You</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            For beginner investors, the most important takeaway is to stay focused on fundamentals rather than 
            short-term market movements. Building a diversified portfolio through systematic investment plans (SIPs) 
            remains one of the most effective strategies for long-term wealth creation in India.
          </p>

          <div className="my-6 rounded-lg border border-border bg-muted/50 p-6">
            <h3 className="font-semibold text-foreground">Key Takeaway</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Consistent, disciplined investing beats trying to time the market. The data shows that investors 
              who stayed invested through volatility have consistently outperformed those who tried to time their 
              entries and exits.
            </p>
          </div>

          <h2 className="mt-8 text-xl font-semibold text-foreground">Looking Ahead</h2>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            As the market continues to evolve, staying educated and informed will be your biggest advantage. 
            Use our learning resources and simulator to build the skills and confidence you need to navigate 
            any market condition.
          </p>
        </div>

        {/* Share */}
        <div className="mt-8 flex items-center gap-3 border-t border-border pt-6">
          <Share2 className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Share this article</span>
          <Button variant="outline" size="sm">Twitter</Button>
          <Button variant="outline" size="sm">LinkedIn</Button>
          <Button variant="outline" size="sm">Copy Link</Button>
        </div>

        {/* CTA */}
        <Card className="mt-8 border-primary/20 bg-primary/5">
          <CardContent className="flex flex-col items-center p-8 text-center">
            <h3 className="text-lg font-bold text-foreground">Want to practice what you learned?</h3>
            <p className="mt-1 text-sm text-muted-foreground">Try our AI-powered portfolio simulator with virtual money.</p>
            <Link href="/auth/signup">
              <Button className="mt-4 gap-2">
                Get Started Free <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </article>

      {/* Related Posts */}
      <div className="mt-12">
        <h2 className="mb-6 text-xl font-bold text-foreground">Related Posts</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((p) => (
            <Link key={p.id} href={`/blog/${p.slug}`}>
              <Card className="group h-full transition-all hover:border-primary/30 hover:shadow-md">
                <CardContent className="flex flex-col gap-2 p-5">
                  <Badge variant="outline" className="w-fit text-xs">{p.category}</Badge>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-sm">{p.title}</h3>
                  <p className="mt-auto text-xs text-muted-foreground">{p.readTime} read</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
