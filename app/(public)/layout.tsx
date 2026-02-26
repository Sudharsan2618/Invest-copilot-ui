import { TopNav } from "@/components/top-nav"
import { Footer } from "@/components/footer"

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <TopNav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
