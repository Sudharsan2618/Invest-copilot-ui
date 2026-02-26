"use client"

import Link from "next/link"
import { useState } from "react"
import { LogoMark } from "@/components/logo"
import { ChevronDown } from "lucide-react"

const footerSections = [
  {
    title: "Learn",
    links: [
      { href: "/learn", label: "All Topics" },
      { href: "/roadmap", label: "Learning Roadmap" },
      { href: "/learn/foundations-of-money", label: "Foundations of Money" },
      { href: "/learn/personal-finance", label: "Personal Finance" },
      { href: "/learn/financial-markets", label: "Financial Markets" },
    ],
  },
  {
    title: "Tools",
    links: [
      { href: "/tools/compound-interest", label: "Compound Interest" },
      { href: "/tools/risk-score", label: "Risk Score" },
      { href: "/tools/financial-health", label: "Financial Health" },
      { href: "/tools/goal-planner", label: "Goal Planner" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About Us" },
      { href: "/blog", label: "Blog" },
      { href: "/privacy", label: "Privacy Policy" },
      { href: "/terms", label: "Terms of Service" },
    ],
  },
]

// Collapsible section for mobile
function FooterSection({
  title,
  links,
}: {
  title: string
  links: { href: string; label: string }[]
}) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-border/40 sm:border-0">
      {/* Mobile: tappable accordion header */}
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-3.5 sm:hidden"
      >
        <span className="text-[13px] font-semibold text-foreground">{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Desktop: always-visible title */}
      <h3 className="hidden sm:block mb-3 text-sm font-semibold text-foreground">{title}</h3>

      {/* Links — hidden on mobile unless open */}
      <ul
        className={`flex flex-col gap-0 sm:gap-2 overflow-hidden transition-all duration-200 sm:max-h-none sm:pb-0 ${
          open ? "max-h-60 pb-3" : "max-h-0 sm:max-h-none"
        }`}
      >
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block py-1.5 sm:py-0 text-[13px] text-muted-foreground transition-colors hover:text-foreground active:text-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:py-12 lg:px-8">
        {/* Top section: logo + description */}
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
          {/* Brand */}
          <div className="sm:max-w-xs">
            <Link href="/" className="inline-flex items-center gap-2">
              <LogoMark />
            </Link>
            <p className="mt-3 text-[13px] leading-relaxed text-muted-foreground">
              Learn investing before you risk real money. AI-powered education
              for Indian investors.
            </p>
          </div>

          {/* Desktop: link columns side by side */}
          <div className="hidden sm:grid sm:grid-cols-3 sm:gap-10">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-3 text-sm font-semibold text-foreground">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-2">
                  {section.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: accordion sections */}
        <div className="mt-4 sm:hidden">
          {footerSections.map((section) => (
            <FooterSection
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-6 sm:mt-8 flex flex-col gap-3 border-t border-border/40 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[11px] leading-relaxed text-muted-foreground/70">
            Investment involves risk. Past performance doesn&apos;t guarantee
            future results. For educational purposes only.
          </p>
          <p className="text-[11px] text-muted-foreground/70 shrink-0">
            &copy; 2026 InvestCopilot
          </p>
        </div>
      </div>
    </footer>
  )
}
