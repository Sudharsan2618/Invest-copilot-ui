"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { TrendingUp, ArrowLeft, CheckCircle2 } from "lucide-react"

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => { setSent(true); setLoading(false) }, 800)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <Link href="/" className="mx-auto mb-4 flex items-center gap-2 text-primary">
            <TrendingUp className="h-6 w-6" />
            <span className="text-xl font-bold">InvestCopilot</span>
          </Link>
          {sent ? (
            <>
              <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--success)]" />
              <CardTitle className="text-2xl">Check your email</CardTitle>
              <CardDescription>{"We've sent a password reset link to your email address."}</CardDescription>
            </>
          ) : (
            <>
              <CardTitle className="text-2xl">Reset your password</CardTitle>
              <CardDescription>{"Enter your email and we'll send you a reset link."}</CardDescription>
            </>
          )}
        </CardHeader>
        <CardContent>
          {sent ? (
            <div className="flex flex-col gap-4">
              <Button variant="outline" className="w-full" onClick={() => setSent(false)}>
                Try another email
              </Button>
              <Link href="/login" className="flex items-center justify-center gap-2 text-sm text-primary hover:underline">
                <ArrowLeft className="h-4 w-4" /> Back to login
              </Link>
            </div>
          ) : (
            <>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
              <Link href="/login" className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4" /> Back to login
              </Link>
            </>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
