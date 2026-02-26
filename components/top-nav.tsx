"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { useState, useRef, useEffect, useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  Search,
  Menu,
  X,
  ArrowRight,
  BookOpen,
  Layers,
} from "lucide-react"
import { LogoMark } from "@/components/logo"
import { topics } from "@/lib/mock-data"

const navLinks = [
  { href: "/learn", label: "Learn" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/tools", label: "Tools" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
]

// ─── Build flat search index from topics + articles ────────────────
type SearchItem = {
  type: "topic" | "article"
  title: string
  href: string
  parent?: string
  description?: string
}

const searchIndex: SearchItem[] = (() => {
  const items: SearchItem[] = []
  topics.forEach((t) => {
    items.push({
      type: "topic",
      title: t.title,
      href: `/learn/${t.slug}`,
      description: t.description,
    })
    t.articles.forEach((a) => {
      items.push({
        type: "article",
        title: a.title,
        href: `/learn/${t.slug}/${a.slug}`,
        parent: t.title,
      })
    })
  })
  return items
})()

export function TopNav() {
  const pathname = usePathname()
  const router = useRouter()
  const [searchOpen, setSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [mobileOpen, setMobileOpen] = useState(false)
  const searchInputRef = useRef<HTMLInputElement>(null)

  // Focus input when search opens
  useEffect(() => {
    if (searchOpen) {
      // small delay to let the DOM render
      const t = setTimeout(() => searchInputRef.current?.focus(), 100)
      return () => clearTimeout(t)
    }
  }, [searchOpen])

  // Close search on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSearchOpen(false)
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [])

  // Filter results
  const results = useMemo(() => {
    if (!searchQuery.trim()) return []
    const q = searchQuery.toLowerCase()
    return searchIndex
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description?.toLowerCase().includes(q) ||
          item.parent?.toLowerCase().includes(q)
      )
      .slice(0, 8) // limit to 8 results
  }, [searchQuery])

  const handleResultClick = (href: string) => {
    setSearchOpen(false)
    setSearchQuery("")
    router.push(href)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <LogoMark />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  pathname?.startsWith(link.href)
                    ? "bg-accent text-accent-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Search button — visible on ALL screen sizes */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setSearchOpen(true)}
              className="h-9 w-9"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>

            <Link href="/login" className="hidden md:inline-flex">
              <Button variant="ghost" size="sm">
                Sign In
              </Button>
            </Link>
            <Link href="/signup" className="hidden md:inline-flex">
              <Button size="sm">Get Started</Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9 md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-72">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-4 pt-8">
                  <nav className="flex flex-col gap-1">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent ${
                          pathname?.startsWith(link.href) ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                  <div className="flex flex-col gap-2 border-t border-border pt-4">
                    <Link href="/login" onClick={() => setMobileOpen(false)}>
                      <Button variant="outline" className="w-full">Sign In</Button>
                    </Link>
                    <Link href="/signup" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* ─── Search Overlay ─────────────────────────────────────────── */}
      {searchOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            onClick={() => {
              setSearchOpen(false)
              setSearchQuery("")
            }}
          />

          {/* Search Panel */}
          <div className="fixed left-0 right-0 top-0 z-[70] mx-auto w-full max-w-lg px-4 pt-3 sm:pt-6">
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
              {/* Input */}
              <div className="flex items-center gap-3 border-b border-border/50 px-4 py-3">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search topics, articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 bg-transparent text-[15px] text-foreground placeholder:text-muted-foreground/60 outline-none"
                />
                <button
                  onClick={() => {
                    setSearchOpen(false)
                    setSearchQuery("")
                  }}
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Results */}
              <div className="max-h-[60vh] overflow-y-auto">
                {searchQuery.trim() === "" ? (
                  // Empty state — popular topics
                  <div className="px-4 py-4">
                    <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">
                      Popular Topics
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {["Compounding", "SIP", "Inflation", "Risk", "Budgeting"].map(
                        (tag) => (
                          <button
                            key={tag}
                            onClick={() => setSearchQuery(tag)}
                            className="rounded-full border border-border px-3 py-1.5 text-[13px] text-muted-foreground hover:border-primary/30 hover:text-foreground transition-colors"
                          >
                            {tag}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                ) : results.length === 0 ? (
                  // No results
                  <div className="px-4 py-8 text-center">
                    <p className="text-sm text-muted-foreground">
                      No results for &quot;{searchQuery}&quot;
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground/60">
                      Try different keywords
                    </p>
                  </div>
                ) : (
                  // Results list
                  <div className="py-2">
                    {results.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleResultClick(item.href)}
                        className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-muted/50 transition-colors"
                      >
                        <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          {item.type === "topic" ? (
                            <Layers className="h-3.5 w-3.5 text-primary" />
                          ) : (
                            <BookOpen className="h-3.5 w-3.5 text-primary" />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[14px] font-medium text-foreground truncate">
                            {item.title}
                          </p>
                          {item.type === "article" && item.parent && (
                            <p className="text-[12px] text-muted-foreground truncate">
                              {item.parent}
                            </p>
                          )}
                          {item.type === "topic" && item.description && (
                            <p className="text-[12px] text-muted-foreground truncate">
                              {item.description}
                            </p>
                          )}
                        </div>
                        <ArrowRight className="mt-1 h-3.5 w-3.5 shrink-0 text-muted-foreground/40" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer hint */}
              <div className="border-t border-border/50 px-4 py-2.5 flex items-center justify-between text-[11px] text-muted-foreground/60">
                <span>ESC to close</span>
                <span>{searchIndex.length} items</span>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
