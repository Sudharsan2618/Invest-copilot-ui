"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  LayoutDashboard,
  LineChart,
  BookOpen,
  Bot,
  ShieldAlert,
  BarChart3,
  Trophy,
  User,
  Bell,
  Menu,
  GraduationCap,
  LogOut,
} from "lucide-react"
import { mockUser } from "@/lib/mock-data"
import { LogoMark } from "@/components/logo"

const appNavLinks = [
  { href: "/app/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/app/simulator", label: "Simulator", icon: LineChart },
  { href: "/app/journal", label: "Journal", icon: BookOpen },
  { href: "/app/ai-feedback", label: "AI Feedback", icon: Bot },
  { href: "/app/risk-monitor", label: "Risk Monitor", icon: ShieldAlert },
  { href: "/app/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/app/achievements", label: "Achievements", icon: Trophy },
  { href: "/learn", label: "Learning", icon: GraduationCap },
  { href: "/app/profile", label: "Settings", icon: User },
]

export function AppTopNav() {
  const [notifOpen, setNotifOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 flex h-16 items-center justify-between border-b border-border bg-card/95 px-4 backdrop-blur lg:px-6">
      <div className="flex items-center gap-3 lg:hidden">
        <AppMobileSidebar />
        <Link href="/app/dashboard" className="flex items-center gap-2">
          <LogoMark size="sm" />
        </Link>
      </div>

      <div className="hidden lg:block" />

      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" className="relative" onClick={() => setNotifOpen(!notifOpen)}>
          <Bell className="h-5 w-5" />
          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-[10px] font-bold text-destructive-foreground">
            3
          </span>
          <span className="sr-only">Notifications</span>
        </Button>

        <Link href="/app/profile">
          <Avatar className="h-8 w-8 cursor-pointer">
            <AvatarFallback className="bg-primary text-xs text-primary-foreground">
              {mockUser.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </header>
  )
}

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:flex lg:w-64 lg:flex-col lg:border-r lg:border-border lg:bg-card">
      {/* Logo */}
      <div className="flex h-16 items-center gap-2 border-b border-border px-6">
        <LogoMark />
      </div>

      {/* User Card */}
      <div className="border-b border-border p-4">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10">
            <AvatarFallback className="bg-primary text-sm text-primary-foreground">
              {mockUser.name.split(" ").map(n => n[0]).join("")}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-medium text-foreground">{mockUser.name}</p>
            <p className="text-xs text-muted-foreground">Lv.{mockUser.level} {mockUser.levelTitle}</p>
          </div>
        </div>
        {/* XP Bar */}
        <div className="mt-3">
          <div className="mb-1 flex items-center justify-between text-xs text-muted-foreground">
            <span>{mockUser.xp} XP</span>
            <span>{mockUser.xpToNext} XP</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-primary transition-all"
              style={{ width: `${(mockUser.xp / mockUser.xpToNext) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto p-3">
        <ul className="flex flex-col gap-1">
          {appNavLinks.map((link) => {
            const Icon = link.icon
            const isActive = pathname === link.href || (link.href !== "/learn" && pathname?.startsWith(link.href))
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="border-t border-border p-3">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
        >
          <LogOut className="h-4 w-4" />
          Back to Site
        </Link>
      </div>
    </aside>
  )
}

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <AppSidebar />
      <div className="flex flex-1 flex-col overflow-hidden">
        <AppTopNav />
        <main className="flex-1 overflow-y-auto p-4 lg:p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

function AppMobileSidebar() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Open menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72 p-0">
        <SheetTitle className="sr-only">App Navigation</SheetTitle>
        <div className="flex h-full flex-col">
          <div className="flex h-16 items-center gap-2 border-b border-border px-6">
            <LogoMark />
          </div>
          <nav className="flex-1 overflow-y-auto p-3">
            <ul className="flex flex-col gap-1">
              {appNavLinks.map((link) => {
                const Icon = link.icon
                const isActive = pathname === link.href || (link.href !== "/learn" && pathname?.startsWith(link.href))
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                        isActive ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-accent"
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
}
