import fs from "fs"
import path from "path"
import matter from "gray-matter"

// ─── Types ─────────────────────────────────────────────────────────
export interface QuizQuestion {
  question: string
  options: string[]
  correct: number
  explanation: string
}

export interface ScenarioOption {
  text: string
  feedback: string
  isRecommended: boolean
}

export interface ArticleFrontmatter {
  title: string
  topic: string
  difficulty: "beginner" | "intermediate" | "advanced"
  readTime: string
  order: number
  prerequisites?: string[] // slugs
  keyTakeaways: string[]
  quiz: QuizQuestion[]
  relatedArticles?: string[] // slugs
}

export interface ArticleMDX {
  frontmatter: ArticleFrontmatter
  content: string // raw MDX string
  slug: string
}

// ─── Content Directory ─────────────────────────────────────────────
const CONTENT_DIR = path.join(process.cwd(), "content")

// ─── Get all articles for a topic ──────────────────────────────────
export function getArticlesForTopic(topicSlug: string): ArticleMDX[] {
  const topicDir = path.join(CONTENT_DIR, topicSlug)
  if (!fs.existsSync(topicDir)) return []

  const files = fs.readdirSync(topicDir).filter((f) => f.endsWith(".mdx"))

  return files
    .map((filename) => {
      const filePath = path.join(topicDir, filename)
      const raw = fs.readFileSync(filePath, "utf-8")
      const { data, content } = matter(raw)
      const slug = filename.replace(/\.mdx$/, "")

      return {
        frontmatter: data as ArticleFrontmatter,
        content,
        slug,
      }
    })
    .sort((a, b) => a.frontmatter.order - b.frontmatter.order)
}

// ─── Get a single article ──────────────────────────────────────────
export function getArticle(topicSlug: string, articleSlug: string): ArticleMDX | null {
  const filePath = path.join(CONTENT_DIR, topicSlug, `${articleSlug}.mdx`)
  if (!fs.existsSync(filePath)) return null

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content } = matter(raw)

  return {
    frontmatter: data as ArticleFrontmatter,
    content,
    slug: articleSlug,
  }
}

// ─── Get all topic slugs that have content ─────────────────────────
export function getContentTopicSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name)
}

// ─── Check if an article has MDX content ───────────────────────────
export function hasArticleContent(topicSlug: string, articleSlug: string): boolean {
  const filePath = path.join(CONTENT_DIR, topicSlug, `${articleSlug}.mdx`)
  return fs.existsSync(filePath)
}
