"use client"

/**
 * Animated glowing bulb logo for InvestCopilot.
 * The bulb has a soft pulsing glow animation — like a gentle "aha moment" light.
 * Used across top-nav, app-shell sidebar, mobile drawer, and footer.
 */
export function Logo({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const dims = size === "sm" ? "h-7 w-7" : size === "lg" ? "h-10 w-10" : "h-8 w-8"
  const bulbSize = size === "sm" ? 16 : size === "lg" ? 22 : 18

  return (
    <div className={`relative ${dims} flex items-center justify-center`}>
      {/* Glow layer — warm gold animated pulse */}
      <div
        className="absolute inset-0 rounded-full animate-logo-glow"
        style={{ backgroundColor: "rgba(251, 191, 36, 0.25)" }}
        aria-hidden="true"
      />
      {/* SVG Lightbulb — gold colored */}
      <svg
        width={bulbSize}
        height={bulbSize}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="relative z-10"
        aria-hidden="true"
      >
        {/* Bulb body — warm gold */}
        <path
          d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"
          fill="#FBBF24"
        />
        {/* Inner highlight — lighter center for glow feel */}
        <path
          d="M12 4C9.24 4 7 6.24 7 9c0 1.57.76 2.95 1.91 3.83L9.5 13.3V15h5v-1.7l.59-.47A4.97 4.97 0 0017 9c0-2.76-2.24-5-5-5z"
          fill="#FDE68A"
          fillOpacity="0.5"
        />
        {/* Light rays — gold */}
        <line x1="12" y1="0.5" x2="12" y2="1.5" stroke="#FBBF24" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7" />
        <line x1="4" y1="4" x2="4.8" y2="4.8" stroke="#FBBF24" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="20" y1="4" x2="19.2" y2="4.8" stroke="#FBBF24" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="2" y1="9" x2="3" y2="9" stroke="#FBBF24" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.6" />
        <line x1="21" y1="9" x2="22" y2="9" stroke="#FBBF24" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.6" />
        {/* Base lines — slightly muted gold */}
        <rect x="9" y="19" width="6" height="1" rx="0.5" fill="#F59E0B" fillOpacity="0.8" />
        <rect x="10" y="21" width="4" height="1" rx="0.5" fill="#F59E0B" fillOpacity="0.6" />
      </svg>
    </div>
  )
}

/**
 * Full logo mark: bulb icon + text
 */
export function LogoMark({ size = "md" }: { size?: "sm" | "md" | "lg" }) {
  const textClass = size === "sm" ? "text-base" : size === "lg" ? "text-xl" : "text-lg"

  return (
    <div className="flex items-center gap-2">
      <Logo size={size} />
      <span className={`${textClass} font-bold text-foreground`}>
        InvestCopilot
      </span>
    </div>
  )
}
